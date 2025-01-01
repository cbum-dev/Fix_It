import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faHashnode } from "@fortawesome/free-brands-svg-icons/faHashnode";
import DescriptionCard from "../../Components/Description";
import SocialLinks from "../../Components/SocialLinks/SocialLinks";

const Contact = () => {
  const socialMediaLinks = [
    { url: "https://gmail.com", title: "Gmail", icon: faGoogle },
    { url: "https://github.com/cbum-dev", title: "GitHub", icon: faGithub },
    {
      url: "https://www.instagram.com/k.priyanshu.4",
      title: "Instagram",
      icon: faInstagram,
    },
    {
      url: "https://www.linkedin.com/in/priyanshu",
      title: "LinkedIn",
      icon: faLinkedin,
    },
    {
      url: "https://twitter.com/Priyanshu200223",
      title: "Twitter",
      icon: faTwitter,
    },
    { url: "https://hashnode.com/", title: "Hashnode", icon: faHashnode },
  ];
  return (
    <div className="text-white  flex flex-col items-center mx-4 justify-center">
      <h1 className="text-3xl md:text-6xl lg:text-7xl my-4  mb-6">
        Contact Us
      </h1>
      <DescriptionCard
        title={"Contact Us: Contribute to Open Source with Fix It!"}
        description={
          "Welcome to Fix It your gateway to impactful contributions in the world of open-source development. At Fix It, we believe in the power of collaboration, and we invite you to be part of our vibrant community."
        }
      />
      <DescriptionCard
        title={"How to Contribute"}
        description={
          "Visit our GitHub repository to explore ongoing projects, find issues to work on, and make meaningful contributions. We're continuously updating our projects, and your expertise can make a significant impact."
        }
      />
      <DescriptionCard
        title={"Get in Touch"}
        description={
          "Have questions or ideas to share? Want to discuss potential collaborations? Reach out to us via email at contact@fixitopensource.com or connect with us on Twitter and LinkedIn. We're here to support your journey into open source and look forward to hearing from you."
        }
      />
      <div className="bg-neutral-950 rounded-lg py-6 md:px-6 px-4 mb-2 w-full">
        <SocialLinks links={socialMediaLinks} />
      </div>
    </div>
  );
};

export default Contact;
