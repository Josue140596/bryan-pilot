import React, { useEffect } from "react";

//Styles:
import {
  about,
  aboutMe,
  education,
  rectangle,
  content,
  titles,
  skills,
  rectangle_two,
  rectangle_three,
  content_img_languages,
  cards_programming
} from "./about.module.css";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      disable: window.innerWidth < 1024,
    });
  }, []);

  return (
    <section className={about}>
      <div data-aos="fade-right" className={aboutMe}>
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
      <div data-aos="fade-up" className={education}>
        <span className={rectangle_two}></span>
        <div className={content}>
          <div className={titles}>
            <p>Education</p>
            <span></span>
          </div>
          <p>
            I’m study 8th semester in the carrer as a System Engineer where I
            have learnt good skills as be more organized and be someone that can
            reach my goals.
          </p>
        </div>
      </div>
      <div data-aos="fade-down" className={skills}>
        <span className={rectangle_three}></span>
        <div className={content}>
          <div className={titles}>
            <p>Skills</p>
            <span></span>
          </div>
          <p>
            English : My level is intermadate because I’m be able of have a
            short conversations and I can read and write well.
          </p>
          <br />
          <br />
          <div className={titles}>
            <p>Programming languages</p>
            <span></span>
          </div>
          <div className={content_img_languages}>

            <div className={cards_programming}>

            </div>
            <div className={cards_programming}>

            </div>
            <div className={cards_programming}>

            </div>
            <div className={cards_programming}>

            </div>
            <div className={cards_programming}>

            </div>
            <div className={cards_programming}>

            </div>
            <div className={cards_programming}>

            </div>
            <div className={cards_programming}>

            </div>
            <div className={cards_programming}>

            </div>
            <div className={cards_programming}>

            </div>
            <div className={cards_programming}>

            </div>
            <div className={cards_programming}>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
