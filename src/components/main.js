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
  block,
  content_picture_yellow,
  content_texts,
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
          <div className={block}></div>
        </section>

        <section className={content_picture_yellow}>
          <Rect/>
        </section>
      </section>

      {children}
    </main>
  );
};
export default Main;
