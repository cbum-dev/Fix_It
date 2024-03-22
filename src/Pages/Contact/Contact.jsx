import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faHashnode } from "@fortawesome/free-brands-svg-icons/faHashnode";
import DescriptionCard from "../../Components/Description";
const Contact = () => {
  return (
    <div className="text-white  flex flex-col items-center mx-4 justify-center">
      <h1 className="text-3xl md:text-6xl lg:text-7xl my-4  mb-6">Contact Us</h1>
      <DescriptionCard
      title={"Contact Us: Contribute to Open Source with Fix It!"}
      description={
        "Welcome to Fix It your gateway to impactful contributions in the world of open-source development. At Fix It, we believe in the power of collaboration, and we invite you to be part of our vibrant community."
      
      }/>
      <DescriptionCard
      title={"How to Contribute"}
      description={
        "Visit our GitHub repository to explore ongoing projects, find issues to work on, and make meaningful contributions. We're continuously updating our projects, and your expertise can make a significant impact."
      
      }/>
      <DescriptionCard
      title={"Get in Touch"}
      description={
        "Have questions or ideas to share? Want to discuss potential collaborations? Reach out to us via email at contact@fixitopensource.com or connect with us on Twitter and LinkedIn. We're here to support your journey into open source and look forward to hearing from you."
      
      }/>
      <div className="bg-zinc-900 rounded-lg py-6 md:px-6 px-4 mb-2 w-full">
        <ul className="flex justify-evenly space-x-4 mt-4 ">
          <li className="mb-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
              href="https://gmail.com"
              title="Gmail"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </li>
          <li className="mb-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
              href="https://github.com/cbum-dev"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="mb-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
              href="https://www.instagram.com/k.priyanshu.4"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="mb-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
              href="https://www.linkedin.com/in/priyanshu"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="mb-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
              href="https://twitter.com/Priyanshu200223"
              title="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="mb-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
              href="https://hashnode.com/"
              title="Hashnode"
            >
              <FontAwesomeIcon icon={faHashnode} />
            </a>
          </li>
        </ul>
      </div>
      </div>
      
    // </div>
  );
};

export default Contact;
