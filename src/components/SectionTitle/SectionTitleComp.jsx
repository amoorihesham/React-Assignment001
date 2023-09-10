import React from "react";
import SectionHeadingStar from "./SectionHeadingStar";

const SectionTitleComp = ({ secTitle }) => {
  return (
    <div className="secTitle mb-4 text-center">
      <h2 className="hedingTitle mb-4 text-uppercase">{secTitle}</h2>
      <SectionHeadingStar />
    </div>
  );
};

export default SectionTitleComp;
