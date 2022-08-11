import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
import marvelImage from '../../assets/personal/marvelquiz.JPG';
import cartThis from '../../assets/personal/cartthis.JPG';
import weather from '../../assets/personal/weatherapp.JPG';
import password from '../../assets/personal/passwordgen.JPG';
import quiz from '../../assets/personal/codingquiz.JPG';
import techBlog from '../../assets/personal/techblog.JPG';

var imageLinks = 
{'Marvel-Quiz': marvelImage, 
'Cart-This': cartThis,
'Weather-API-project': weather,
'Password-Generator': password,
'Coding-Quiz': quiz,
'Tech-Blog': techBlog,
}

function Project({ project }) {

  const { name, repo, link, description } = project;
  
  return (
    <div className="project" key={name}>
      <img src={imageLinks[name]} alt={name}></img>
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
