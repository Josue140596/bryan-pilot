import React from "react";

//SVG

import Rect from '../assets/rect.inline.svg'
import About from "./about";

//Styles
import {
  main,
  content_title_page,
  subcontent_text,
  firstText,
  seconText,
  content_picture_yellow,
  content_texts,
  bock_yellow
} from "./main.module.css";
import Proyects from "./proyects";

// Data graphql
import { graphql, useStaticQuery } from "gatsby";

const Main = ({ children }) => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subTitle
          }
        }
      }
    `
  )
  
  const {title, subTitle} = data.site.siteMetadata;


  return (
    <main  className={main}>
      <section className={content_title_page}>
        <section className={content_texts}>
          <div className={subcontent_text}>
       
            <p className={firstText}>{title}</p>
            <p className={seconText} >{subTitle}</p>
          </div>
          <div ></div>
        </section>

        <section className={content_picture_yellow}>
          <Rect className={bock_yellow}/>
        </section>
        
      </section>

      <About/>
      <Proyects/>
      {children}
    </main>
  );
};


export default Main;
