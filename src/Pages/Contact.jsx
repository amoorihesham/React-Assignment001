import React from "react";
import InformaionSection from "../components/Portfolio/InformationSection/InformaionSection";
import Footer from "../components/Footer/Footer";
import SectionTitleComp from "../components/SectionTitle/SectionTitleComp";
import Forms from "../components/ContactSection/Forms";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <div className="contactPage pt-5">
       <Helmet>
        <title>Contact</title>
      </Helmet>
      <SectionTitleComp secTitle="Contact Section" />
      <div className="container">
        <Forms />
      </div>
      <InformaionSection />
      <Footer />
    </div>
  );
};

export default Contact;
