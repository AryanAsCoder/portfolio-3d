import React from "react";
import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm
        <span className="blue-gradient_text font-semibold drop-shadow">
          Aryan
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-600">
       <p> "Frontend Developer based in India, Designing Tomorrow's Web with
        Frontend Expertise and Photographic Vision."</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill)=>(
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain"
                 />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-12">
            <h3 className="subhead-text ">Work Experience</h3>
              <h2 className="mt-3">Sonawala Integrated Circuit Industries Pvt Ltd.</h2>
              <h2 className="mt-3">6 Month Internship</h2>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
              <h3>Gain experience in React JS for frontend technology.</h3>
              <h3>Give my 100% to improve client's site look amazing so that user can retain the site.</h3>
              <h3>Contributed to impactful projects during internship as a frontend developer. Successfully collaborated with cross-functional teams, ensuring the delivery of high-quality web solutions.</h3>
              <h3>Received positive feedback for delivering projects on schedule. Recognized for the ability to quickly learn and apply new technologies.</h3>
            </div>
      </div>
    </section>
  );
};

export default About;
