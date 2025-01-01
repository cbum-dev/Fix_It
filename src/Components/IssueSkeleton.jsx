import { SaveFill } from "react-bootstrap-icons";

const LoadingSkeleton = () => {
  return (
    <div className=" bg-neutral-950 border-gray-300 rounded-xl h-56 animate-pulse px-2 py-2">
      <div className="h-3/5">
        <div className="flex justify-between">
          <h3 className="text-lg md:text-2xl font-sans mb-2"></h3>
          <h3 className="flex">
            {" "}
            <p className="" style={{ color: "grey" }}>
              <SaveFill className="mr-2 h-6 w-5" />
            </p>
          </h3>
        </div>

        <p className="text-slate-200"></p>
      </div>
      <div className="flex justify-between ">
        <div className="w-1/2">
          <p
            className="bg-neutral-900 text-green-300 rounded-xl mb-2 w-3/4 px-3 text-center"
            style={{ height: "24px", width: "70%" }}
          ></p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <p
            className="bg-neutral-900  rounded-xl mb-2 w-full  text-center"
            style={{ height: "24px", width: "70%" }}
          ></p>
        </div>
      </div>
      <div className="flex justify-evenly mt-3 items-center">
        <p className="rounded-xl mt-2 mb-2 w-1/2"></p>
        <button
          className="border-0.5 bg-neutral-800 rounded-xl animate-pul"
          style={{ height: "36px", width: "108.333px" }}
        ></button>
      </div>
    </div>
  );
};
export default LoadingSkeleton;
