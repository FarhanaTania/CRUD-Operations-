import React from "react";
import Image1 from "../assets/project-image1.png";
import Image3 from "../assets/project-image3.png";
import Image2 from "../assets/project-image2.png";

const projects = [
  {
    id: 1,
    name: "Bug Smush Game",
    technologies: "Course : Client-Side Web Developement",
    description: "A bug is moving around the field, and whoever catches it will score points.Also user can reset the speed of bug moving.",
    image: Image1,
    github: "https://github.com/FarhanaTania",
  },
  {
    id: 2,
    name: "Windows Form App",
    technologies: "Course: Programming2(C#)",
    image: Image2,
    description: "This app allows users to view general details about a Canadian Prime Minister by selecting their last name from the scrolling down menu bar.",
    github: "https://github.com/FarhanaTania",
  },
  {
    id: 3,
    name: "A Real State Agent Profile",
    technologies: "Course: Web Interface Design",
    description: "User can see the profile and details of her activity through this app. User can check current listing and contact with her. ",
    image: Image3,
    github: "https://github.com/FarhanaTania",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-1xl font-bold mb-2">{project.technologies}</p>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href="https://github.com/FarhanaTania?tab=repositories" className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;