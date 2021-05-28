import React from "react";

//SVG

import Rect from '../assets/rect.inline.svg'

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

const Main = ({ children }) => {
  return (
    <main className={main}>
      <section className={content_title_page}>
        <section className={content_texts}>
          <div className={subcontent_text}>
            <p className={firstText}>HI I'M BRYAN</p>
            <p className={seconText} >I'M DEVELOPER</p>
          </div>
          <div ></div>
        </section>

        <section className={content_picture_yellow}>
          <Rect className={bock_yellow}/>
        </section>
      </section>
      
      {children}
    </main>
  );
};
export default Main;
