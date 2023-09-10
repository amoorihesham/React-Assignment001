import React from "react";
import PortfolioCard from "./PortfolioCard";
import image1 from "../../../Assets/Imgs/poert1.png";
import image2 from "../../../Assets/Imgs/port2.png";
import image3 from "../../../Assets/Imgs/port3.png";

const PortfolioWorks = () => {
  return (
    <div className="container">
      <div className="row g-5">
        <PortfolioCard imageUrl={image1} />
        <PortfolioCard imageUrl={image2} />
        <PortfolioCard imageUrl={image3} />
        <PortfolioCard imageUrl={image1} />
        <PortfolioCard imageUrl={image2} />
        <PortfolioCard imageUrl={image3} />
      </div>
    </div>
  );
};

export default PortfolioWorks;
