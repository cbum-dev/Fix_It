import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faHashnode } from "@fortawesome/free-brands-svg-icons/faHashnode";
// import {faEnvelope} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className="text-white  flex flex-col items-center mx-4 justify-center">
      <h1 className="text-3xl md:text-6xl lg:text-7xl my-4  mb-6">Contact Us</h1>
      <div className="">
        <div className="bg-zinc-900  w-full rounded-lg py-6 md:px-6 px-4">
        <h1 className=" text-2xl underline text-center text-blue-300 mt-2 mb-2">
          Contact Us: Contribute to Open Source with Fix It!
        </h1>

        <p className=" text-lg text-center">
          Welcome to Fix It your gateway to impactful contributions in the world
          of open-source development. At Fix It, we believe in the power of
          collaboration, and we invite you to be part of our vibrant community.
        </p>
      </div>
      <div className="bg-zinc-900 rounded-lg w-full py-6 md:px-6 px-4 my-2">
        <h1 className="md:text-3xl text-2xl underline text-center text-blue-300 mt-2 mb-2">
          Why Contribute?
        </h1>
        <ul className="md:text-lg  text-center ">
          <li className="">
            1. Skill Growth: Enhance your skills by working on real-world
            projects. Whether you're a seasoned developer or just starting,
            there's a place for you.
          </li>
          <li className="">
            2. Community Impact: Contribute to projects that matter. Your
            efforts make a difference, creating solutions and driving innovation
            in the open-source landscape.
          </li>
          <li className="">
            3. Networking: Join a diverse community of developers. Connect with
            like-minded individuals, mentors, and industry professionals.
          </li>
        </ul>
      </div>
      <div className="bg-zinc-900 rounded-lg w-full py-6 md:px-6 px-4 mb-2">
        <h1 className="md:text-3xl text-2xl underline text-center text-blue-300 mt-2 mb-2">
          How to Contribute:
        </h1>
        <p className=" text-lg text-center">
          Visit our GitHub repository to explore ongoing projects, find issues
          to work on, and make meaningful contributions. We're continuously
          updating our projects, and your expertise can make a significant
          impact.
        </p>
      </div>
      <div className="bg-zinc-900 rounded-lg w-full py-6 md:px-6 px-4 mb-2">
        <h1 className="md:text-3xl text-2xl underline text-center text-blue-300 mt-2 mb-2">
          Get in Touch
        </h1>
        <p className=" text-lg text-center">
          Have questions or ideas to share? Want to discuss potential
          collaborations? Reach out to us via email at
          contact@fixitopensource.com or connect with us on Twitter and
          LinkedIn. We're here to support your journey into open source and look
          forward to hearing from you.
        </p>
      </div>

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
      
    </div>
  );
};

export default Contact;
