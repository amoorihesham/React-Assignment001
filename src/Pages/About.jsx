import React from "react";
import SectionTitleComp from "../components/SectionTitle/SectionTitleComp";
import PrefHolder from "../components/AboutSection/PrefHolder";
import InformationSection from "../components/Portfolio/InformationSection/InformaionSection";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div className="abouPage">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="holder">
        <div className="container">
          <SectionTitleComp secTitle="About Component" />
          <div className="row">
            <PrefHolder />
          </div>
        </div>
      </div>
      <InformationSection />
      <Footer />
    </div>
  );
};

export default About;
