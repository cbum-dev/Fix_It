import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle, faGithub, faInstagram, faLinkedin, faTwitter, faHashnode } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = ({ links }) => {
  return (
    <ul className="flex justify-evenly space-x-4 mt-4">
      {links.map((link, index) => (
        <li className="mb-4" key={index}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
            href={link.url}
            title={link.title}
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
