import React from "react";
import Footer from "../components/Footer/Footer";
import InformaionSection from "../components/Portfolio/InformationSection/InformaionSection";
import HomeSection from "../components/HomeSection/HomeSection";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div className="homePage">
       <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="container">
        <div className="holder">
          <HomeSection />
        </div>
      </div>
      <InformaionSection />
      <Footer />
    </div>
  );
};

export default Home;
