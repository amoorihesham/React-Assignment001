import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const SectionHeadingStar = () => {
  return (
    <div className="secHeadingStar d-flex align-items-center justify-content-center mb-3">
      <div className="leftLine"></div>

      <FontAwesomeIcon icon={faStar} />

      <div className="rightLine"></div>
    </div>
  );
};

export default SectionHeadingStar;
