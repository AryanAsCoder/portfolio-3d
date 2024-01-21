import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Aryan</span>👋
      <br />A FrontEnd Developer from India.
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked on many frontend site which is visually appealing and user-friendly web experiences."
      link="/about"
      btnText="More Info"
    />
  ),
  3: (
    <InfoBox
      text="Design and worked on appealing frontend site. Curious about the Projects?"
      link="/projects"
      btnText="Projects"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a Frontend dev?"
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
