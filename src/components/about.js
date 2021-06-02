import React from "react";

//Styles:
import {
  about,
  aboutMe,
  education,
  rectangle,
  content,
  titles,
  skills,
} from "./about.module.css";

const About = () => {
  return (
    <section className={about}>
      
      <div className={aboutMe}>
        <span className={rectangle}></span>
        <div className={content}>
          <div className={titles}>
            <p>A little about me</p>
            <span></span>
          </div>
          <p>
            Be self-taught is one of my main qualities, because I believe that
            discipline and practice lead you to know and learn new and
            interesting things. My approach is to be a programmer and my main
            languages are JavaScript, Python and also I have worked with
            framework as ReactJS where I have mixed data bases as Mysql or
            MongoDB, however, I'm still willing to learn new tools.
          </p>
        </div>
      </div>
      <div className={education}></div>
      <div className={skills}></div>
    </section>
  );
};
export default About;
