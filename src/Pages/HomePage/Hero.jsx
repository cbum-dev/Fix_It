import { StopCircle, StarFill } from "react-bootstrap-icons";
import CustomButton from "../../Components/HomePage/Button";
import GithubButton from "../../Components/HomePage/GithubButton";
import {useSelector} from "react-redux";
const Hero = () => {
  const totalCount = useSelector(state => state.count.value);
  return (
    <div className="bg-black flex flex-col justify-center h-screen items-center text-white py-10">
      <h1 className="text-5xl text-slate-200 text-center md:text-7xl font-sans font-extrabold mb-4">
        The Github Issue Controller {totalCount}
      </h1>
      <h1 className="text-lg text-center md:text-xl font-sans text-gray-400 mb-4">
        Struggling to pinpoint the ideal repository or address an issue
        effectively?
        <br /> Look no further, we have got you covered!
      </h1>
      <GithubButton />
      <div className="md:w-3/6 flex flex-col md:flex-row  md:justify-evenly mt-8">
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
  );
};

export default Hero;
