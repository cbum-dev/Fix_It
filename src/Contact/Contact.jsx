import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { faHashnode } from "@fortawesome/free-brands-svg-icons/faHashnode";
// import {faEnvelope} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl my-4">Contact</h1>
      <ul className="flex flex-col justify-between space-x-4">
        <li></li>
        <li className="mb-4">
            <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            href="https://gmail.com"
            title="Gmail"
            >
            <FontAwesomeIcon icon={faGoogle} />  Gmail : priyanshu
            </a>


        </li>
        <li className="mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            href="https://github.com/cbum-dev"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />  Github : cbum-dev
          </a>
        </li>
        <li className="mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            href="https://www.instagram.com/example"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram : example
          </a>
        </li>
        <li className="mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            href="https://www.linkedin.com/in/example"
            title="LinkedIn"
          > 
            <FontAwesomeIcon icon={faLinkedin} />   LinkedIn : example
          </a>
        </li>
        <li className="mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            href="https://twitter.com/example"
            title="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} /> Twitter : example  
          </a>
        </li>
        <li className="mb-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
            href="https://hashnode.com/@example"
            title="Hashnode"
          >
            <FontAwesomeIcon icon={faHashnode} /> Hashnode : example    
          </a>
        </li>
        {/* Add more contact methods here */}
      </ul>
    </div>
  );
};

export default Contact;
