import React from "react";

//IMAGES
import { AvatarImg } from "./img/avatar";

//SVG
import Simbol  from '../assets/simbol.inline.svg'
//Styles
import {
  sidenav,
  avatar_sidenav,
  nav_menu,
  img_content,
  name_content,
  box_shadow_name,
  simbolStyle,
  links,

} from "./sideBar.module.css";

const SideBar = () => {
  return (
    <section className={sidenav}>
      <div className={avatar_sidenav}>
        <div className={img_content}>
          <AvatarImg />
         
        </div>

        <div className={name_content}>
          <div className={box_shadow_name}>
            <p>Bryan Sánchez</p>
          </div>
          
        </div>
      </div>

      <nav className={nav_menu}>
        <div>
          <Simbol className={simbolStyle}/>
          <a className={links} href="/">About</a>
        </div>
        <div>
          <Simbol className={simbolStyle}/>
          <a className={links} href="/">Projects</a>
        </div>
        <div>
          <Simbol className={simbolStyle}/>
          <a className={links} href="/">Contact</a>
        </div>
      </nav>
    </section>
  );
};

export default SideBar;
