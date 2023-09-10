import React from "react";
import LocationSection from "./LocationSection";
import SocialSection from "./SocialSection";
import AboutSection from "./AboutSection";

const InformaionSection = () => {
  return (
    <div className="portInfo mt-5 py-5">
      <div className="container">
        <div className="row">
          <LocationSection />
          <SocialSection />
          <AboutSection />
        </div>
      </div>
    </div>
  );
};

export default InformaionSection;
