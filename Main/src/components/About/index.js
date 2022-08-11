import React from 'react';
import coverImage from '../../assets/personal/croppedphoto.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={coverImage} alt="" width="800px"></img>
        </div>
        <p>
        My name is Sajal Agnihotri and I am full stack web developer from Orange Country, California. I have learned to be proficient in a wide array of front and back end programing languages, including HTML, CSS, Javascript, MySQL, NodeJS, ExpressJS, etc. In addition, I have had experience creating various apps and websites, experiences which have helped me learn and grow as a developer.
        </p>
        <p>
        In a word becoming more increasingly reliant on technology, I plan to use my development knowledge to create and design websites that are user friendly, well designed, and useful to others. My hope is that what I create will aid people in having an easy and realxing experience, whether it's because they are entertained by my website or find it useful.
        </p>
      </div>
    </section>
  );
}

export default About;
