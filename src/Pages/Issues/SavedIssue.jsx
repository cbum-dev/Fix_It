import  { useState, useEffect } from "react";
import client, {
  databases,
  DATABASE_ID,
  COLLECTION_ID_SAVEDISSUE,
  COLLECTION_ID_USERS,
} from "../../config";
import { Query } from "appwrite";
import { Check } from "react-bootstrap-icons";
import { useAuth } from "../../utils/AuthContext";
const SavedIssue = () => {
  const [savedIssues, setSavedIssues] = useState([]);
  const { user } = useAuth();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getIssues();
    getUser();
    const unsubscribe = client.subscribe(
      `database.${DATABASE_ID}.collections.${COLLECTION_ID_SAVEDISSUE}.documents`,
      (response) => {
        console.log("subscribe", response);
      }
    ); 

    console.log("unsubscribe", unsubscribe);
    return () => {
      unsubscribe();
    };
   
  }, [done]);
    const getUser = async () => {
      const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID_USERS);
      console.log(response.documents[0].question_counter);
    }
  const getIssues = async () => {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_SAVEDISSUE,
      [Query.orderDesc("$createdAt"), Query.notEqual("isDone", true),Query.equal("users",user.$id)]
    );
    console.log(response.documents);
    setSavedIssues(response.documents);
  };
  const deleteIssue = async (id) => {
    await databases.deleteDocument(DATABASE_ID, COLLECTION_ID_SAVEDISSUE, id);
    setDone(!done);
  };
  const updateIssue = async (id) => {
    try {
      const currentDocument = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID_SAVEDISSUE,
        id
      );

      const updatedValue = {
        isDone: !currentDocument.isDone,
      };

      await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID_SAVEDISSUE,
        id,
        updatedValue
      );
      setDone(!done);
    } catch (error) {
      console.error("Error updating issue:", error);
    }
  };

  return (
    <div className=" flex flex-col flex-wrap justify-center mx-2 mb-4">
      <h1 className= " text-center text-3xl flex flex-col text-white md:text-6xl lg:text-7xl mt-4 mb-4">
        Your Saved Issues
              <p className="text-xl text-center my-2">All Your Saved Issues At One Place</p>

      </h1>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {savedIssues.map((issue) => (
          <div key={issue.$id} className="bg-zinc-900 h-60 border border-zinc-700 rounded-xl p-4">
            <div className="flex flex-col justify-between">
              <h1 className="h-20 text-white text-lg md:text-l ">
                Name : {issue.name}
              </h1>
              <div className="flex flex-wrap justify-evenly my-2">
                <h1 className="text-white text-xl bg-gray-700 px-4  rounded-xl my-2">
                  Repository : {issue.repo}
                </h1>
                <h1>
                  {/* {issue.$createdAt.slice(0, 9)} } */}
                </h1>
                <h1 className="text-white text-xl bg-gray-700 px-4  rounded-xl my-2">
                  Organization : {issue.org}
                </h1>
              </div>
              <div className="flex items-center justify-evenly mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 md:px-6 px-4 rounded-lg"
                  onClick={() => deleteIssue(issue.$id)}
                >
                  Delete
                </button>
              <a className="text-blue-300 underline text-xl md:text-2xl" target="blank" rel=""  href={issue.url}>Github Link</a>

                <button
                  className={`${
                    issue.isDone
                      ? "text-green-400 underline"
                      : "bg-blue-500 hover:bg-blue-700 text-white"
                  } md:px-6 font-bold py-1.5 px-4 rounded-lg flex items-center`}
                  onClick={() => updateIssue(issue.$id)}
                >
                  <Check className="mr-2" />
                  <p>Done</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedIssue;
