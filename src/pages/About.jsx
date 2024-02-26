import React from "react";
import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm
        <span className="blue-gradient_text mx-2 font-semibold drop-shadow">
          Aryan
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-600">
       <p> "Full Stack Developer based in India, Designing Tomorrow's Web with
        Mern stack Expertise and Photographic Vision."</p>
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
              <h3>Gain experience in Mern stack technology. Mostly worked on frontend development.</h3>
              <h3>Developed and maintained multiple web applications using the MERN stack.</h3>
              <h3>Implemented RESTful APIs for backend services using Node.js and Express.js, ensuring efficient data flow and communication between frontend and backend systems.</h3>
              <h3>Designed and developed responsive user interfaces using React.js, enhancing user experience and engagement.</h3>
              <h3>Integrated MongoDB as the database solution, ensuring data persistence and efficient retrieval.</h3>
              <h3>Collaborated with cross-functional teams including designers, product managers, and QA engineers to deliver high-quality software solutions within project deadlines.</h3>
            </div>
      </div>

      <div className="py-12">
              <h2 className="mt-3 text-2xl font-semibold">Freelance - Full Stack Developer</h2>
              <h2 className="mt-3">Present</h2>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
              <h3>Completed projects in Mern stack technology.</h3>
              <h3>Demonstrated expertise in frontend and backend development, utilizing React.js for responsive user interfaces and Node.js for scalable backend services.</h3>
              <h3>Collaborated closely with clients to understand project requirements, provide regular updates, and incorporate feedback throughout the development process.</h3>
              <h3>Implemented robust authentication and authorization mechanisms using JWT (JSON Web Tokens) to ensure secure user authentication for client applications.</h3>
              <h3>Managed project timelines, budgets, and deliverables effectively, consistently meeting or exceeding client expectations.</h3>
            </div>
      </div>
    </section>
  );
};

export default About;
