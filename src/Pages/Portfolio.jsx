import React from "react";
import PortfolioWorks from "../components/Portfolio/WorksSection/PortfolioWorks";
import SectionTitleComp from "../components/SectionTitle/SectionTitleComp";
import InformaionSection from "../components/Portfolio/InformationSection/InformaionSection";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  return (
    <div className="portfolioPage pt-5 text-center">
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <SectionTitleComp secTitle="Portfolio Component" />
      <PortfolioWorks />
      <InformaionSection />
      <Footer />
    </div>
  );
};

export default Portfolio;
