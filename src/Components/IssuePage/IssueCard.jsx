import React from 'react';
import { Link } from 'react-router-dom';
import { SaveFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch from react-redux
// import { loginUser } from "../../reducers/authSlice"; // Import the loginUser action creator from your Redux slice
import { ID, Permission, Role } from "appwrite";
import { loginUser } from '../../store/Slicer/authSlice';
import { databases, DATABASE_ID, COLLECTION_ID_SAVEDISSUE } from "../../config";

const IssueComponent = ({ issue, usecalculateTimeDifference, extractRepoName }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user); // Select the user state from Redux

    const handleSaveIssue = async () => {
        if (!user) {
            // Redirect to login page or show login modal
            // For demonstration purposes, let's dispatch loginUser action
            dispatch(loginUser({ email: "test@example.com", password: "password" }));
            return;
        }

        const permissions = [
            Permission.write(Role.user(user.$id)),
        ];
        const payload = {
            users: user.$id,
            name: issue.title,
            url: issue.html_url,
            org: issue.url.split("/")[4],
            repo: issue.url.split("/")[5],
        };
        const response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID_SAVEDISSUE,
            ID.unique(),
            payload,
            permissions
        );
        console.log("RESPONSE:", response);
    };

    return (
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl h-60 p-4">
            <div className="h-3/5">
                <div className="flex justify-between">
                    <h3 className="text-lg md:text-2xl font-sans mb-2">
                        # {issue.number}
                    </h3>
                    <h3 className="flex">
                        {" "}
                        <p
                            className=""
                            style={{
                                color:
                                    Object.keys(issue.assignees).length === 0
                                        ? "lime"
                                        : "yellow",
                            }}
                        >
                            {Object.keys(issue.assignees).length === 0
                                ? "<Not Assigned>"
                                : "<Assigned>"}
                        </p>
                        <button
                            onClick={handleSaveIssue} // Call handleSaveIssue function on button click
                            className="flex hover:text-blue-600"
                        >
                            <p className="px-2">
                                {user ? "Save" : "Login To Save"}
                            </p>{" "}
                            <SaveFill className="mr-2 h-6 w-5" />
                        </button>
                    </h3>
                </div>

                <p className="text-slate-200">
                    [{issue.title.split(" ").slice(0, 20).join(" ")} ...]
                </p>
            </div>
            <div className="flex justify-between ">
                <div className="w-1/2">
                    <p className="bg-slate-700 border border-zinc-600 text-green-500 rounded-xl mb-2 w-3/4 px-3 text-center">
                        {issue.url.split("/")[4]}
                    </p>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <p className="bg-slate-700 border border-zinc-600 text-green-400 rounded-xl mb-2 w-full  text-center">
                        {extractRepoName(issue.html_url)}
                    </p>
                </div>
            </div>
            <div className="flex justify-evenly mt-3 items-center">
                <p className="rounded-xl mt-2 mb-2 w-1/2">
                    {usecalculateTimeDifference(issue.created_at)}
                </p>

                <button className="px-4  py-1.5 bg-slate-300 hover:text-slate-100 hover:bg-zinc-950 border border-zinc-800  duration-200 text-black rounded-xl border-0.5">
                    <Link
                        to={issue.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Issue
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default IssueComponent;
