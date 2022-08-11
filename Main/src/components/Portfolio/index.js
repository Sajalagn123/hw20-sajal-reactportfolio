import React, { useState } from 'react';
import Project from "../Project";


function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Marvel-Quiz',
      description: 'Group project I worked for a UCI coding bootcamp class. The project has users answer questions to see which Marvel character they are the most similar to.',
      link: "https://armandoug.github.io/superhero-personality-project/index.html",
      repo: "https://github.com/Sajalagn123/superhero-personality-project"
    },
    {
      name: 'Cart-This',
      description: 'Another group project the UCI coding bootcamp class. The project allows for users to purchase items online at varrying prices.',
      link: "https://mando-commerce.herokuapp.com/",
      repo: "https://github.com/Sajalagn123/Project2-socialmedia-site"
    },
    {
      name: 'Weather-API-project',
      description: 'Application that allows user to check the weather of a particular location.',
      link: "https://sajalagn123.github.io/hw6-Weatherdashboard-Sajal/",
      repo: "https://github.com/Sajalagn123/hw6-Weatherdashboard-Sajal"
    },
    {
      name: 'Password-Generator',
      description: 'Website where users can generate a password for and exclude specific characters like numbers.',
      link: "https://sajalagn123.github.io/hw3-js-passwordgen-sajal/",
      repo: "https://github.com/Sajalagn123/hw3-js-passwordgen-sajal"
    },
    {
      name: 'Coding-Quiz',
      description: 'Application allowing users to partake in a quiz that prompts them with various questions related to coding.',
      link: "https://sajalagn123.github.io/hw4-codingquiz-SajalAgn/",
      repo: "https://github.com/Sajalagn123/hw4-codingquiz-SajalAgn"
    },
    {
      name: 'Tech-Blog',
      description: 'Website where users can make posts related to technology and web development. A user can also comment on another user\'s post',
      link: "https://sajals-tech-blog.herokuapp.com/",
      repo: "https://github.com/Sajalagn123/hw14techblog"
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
