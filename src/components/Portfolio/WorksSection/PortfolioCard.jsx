import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PortfolioCard = ({ imageUrl }) => {
  return (
    <div className="col-md-6 col-xl-4 col-xxl-4">
      <div className="card overflow-hidden">
        <img src={imageUrl} alt="Example Img" className="w-100" />
        <div className="hoverState d-flex align-items-center justify-content-center w-100 h-100">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
