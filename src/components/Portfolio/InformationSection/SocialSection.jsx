import { faFacebook, faFirefoxBrowser, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialSection = () => {
  return (
    <div className="col-md-6 col-xl-4 col-xxl-4 text-center">
      <h3 className="text-white">About The Web</h3>
      <ul className="links mt-3 list-unstyled d-flex m-0 p-0 align-items-center justify-content-center text-white gap-2">
        <li className="p-2 rounded-circle border link">
          <FontAwesomeIcon icon={faFacebook} />
        </li>
        <li className="p-2 rounded-circle border link">
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li className="p-2 rounded-circle border link">
          <FontAwesomeIcon icon={faLinkedin} />
        </li>   
        <li className="p-2 rounded-circle border link">
          <FontAwesomeIcon icon={faFirefoxBrowser} />
        </li>
      </ul>
    </div>
  );
};

export default SocialSection;
