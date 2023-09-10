import React from "react";
import imageAvatar from "../../Assets/Imgs/avataaars.svg";
import SectionTitleComp from "../SectionTitle/SectionTitleComp";
const HomeSection = () => {
  return (
    <>
      <div className="text-white text-center">
        <img src={imageAvatar} alt="personal PhotoAvatar" className="w-75 mx-auto mb-3" />
        <SectionTitleComp secTitle="Start FrameWork" />
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
};

export default HomeSection;
