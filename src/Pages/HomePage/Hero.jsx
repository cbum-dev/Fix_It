import { StopCircle, StarFill } from "react-bootstrap-icons";
import CustomButton from "../../Components/HomePage/Button";
import GithubButton from "../../Components/HomePage/GithubButton";
const Hero = () => {
  return (
    <div className="bg-black md:px-32 max-w-7xl mx-auto relative flex flex-col justify-center h-screen items-center  text-white py-10">
      <div className="relative  md:p-4 z-0">
        <h1 className="text-4xl w-full text-slate-200  text-center md:text-7xl bg-black p-4 border border-1 z-10 border-neutral-700 font-sans font-extrabold ">
          The Github Issue Controller
        </h1>
        <div className="border border-1 border-neutral-700 h-20 w-20  rounded-full absolute -top-6 -right-6">

        </div><div className="border border-1 border-neutral-700 h-20 w-20  rounded-full absolute -bottom-6 -left-6">

        </div>
        <h1 className="text-lg w-full  p-4 text-center md:text-xl border border-1 border-neutral-700 border-t-0 font-sans text-gray-400 ">
          Struggling to pinpoint the ideal repository or address an issue
          effectively?
          <br /> Look no further, we have got you covered!
        </h1>
        <div className="w-full flex items-center justify-center border border-t-0 border-1 border-neutral-700 ">
          <div className="border border-1 px-6 border-neutral-700 border-y-0">
            <GithubButton />

          </div>
        </div>
        <div className="w-full border flex justify-center border-t-0 border-1 border-neutral-700 ">
          <div className="px-6 md:w-1/2  border border-1 border-neutral-700 border-t-0  flex flex-col md:flex-row md:gap-10  md:justify-center ">
            <CustomButton Icon={StopCircle} linkTo="/issues">
              Issues
            </CustomButton>
            <CustomButton
              Icon={StarFill}
              externalLink
              linkTo="https://github.com/cbum-dev/Fix_it"
            >
              Stars Our Repository
            </CustomButton>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;
