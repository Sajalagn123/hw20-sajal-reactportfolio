import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'surf-report',
      description: 'Group project I worked for a UCI coding bootcamp class. The project has users answer questions to see which Marvel character they are the most similar to.',
      link: "https://armandoug.github.io/superhero-personality-project/index.html",
      repo: "https://github.com/Sajalagn123/superhero-personality-project"
    },
    {
      name: 'pastel-puzzels',
      description: 'Another group project the UCI coding bootcamp class. The project allows for users to purchase items online at varrying prices.',
      link: "https://mando-commerce.herokuapp.com/",
      repo: "https://github.com/Sajalagn123/Project2-socialmedia-site"
    },
    {
      name: 'run-buddy',
      description: 'Application that allows user to check the weather of a particular location.',
      link: "https://sajalagn123.github.io/hw6-Weatherdashboard-Sajal/",
      repo: "https://github.com/Sajalagn123/hw6-Weatherdashboard-Sajal"
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
