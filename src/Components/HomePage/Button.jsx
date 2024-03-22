import { Link } from 'react-router-dom'; 
import { StopCircle, StarFill } from "react-bootstrap-icons";

const CustomButton = ({ Icon, linkTo, externalLink, children }) => {
  const ButtonComponent = externalLink ? 'a' : Link;
  console.log(Icon)

  return (
    <ButtonComponent
      to={linkTo}
      href={externalLink ? linkTo : undefined}
      target={externalLink ? "_blank" : undefined}
      rel={externalLink ? "noopener noreferrer" : undefined}
      className="flex hover:scale-105 hover:border-slate-800 duration-300 bg-slate-200 text-black px-4 py-2 rounded-full mt-6 mb-6 border-2 border-slate-900 hover:bg-black hover:text-white"
    >
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
    </ButtonComponent>
  );
};

export default CustomButton;
