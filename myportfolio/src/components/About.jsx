import React from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-86 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-4">
            Dedicated Software Engineering Technology - Artificial Intelligence student with excellent communication and interpersonal skills.
             Proven ability to work under pressure, quickly adapt to new challenges, and contribute to organizational success. 
             A fast learner with a strong aptitude for problem-solving in dynamic environments.
              Proficient in debugging, user interface design, and creating technical documentation such as SRS and SSD.
            </p>
            <div>
            <h3 className="text-3xl font-bold text-left mb-6">Technical Skills</h3> 
            <p><b>Programming</b> : HTML, CSS, JavaScript, Java, C#, SQL <br />
               <b>Frameworks & Libraries</b> : Node.js, React, Express<br />
               <b>Operating Systems</b> : Windows, Unix, Linux <br />
               <b>Development Tools</b> : Git, GitHub, Visual Studio, Eclipse, IntelliJ<br />
               <b>Database</b> : MongoDB, SQL<br />
               <b>Design & Charting Tools</b> : MS Visio, LucidChart<br />
               <b>Office Tools</b> : MS Word, MS Excel, MS PowerPoint<br />
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;