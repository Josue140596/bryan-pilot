import React, { useEffect, useState } from "react";

//Scroll smooth
import scrollTo from 'gatsby-plugin-smoothscroll';

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
  iconSideUp,
  iconUp,
  hideArr,

} from "./sideBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {

  
const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);



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
        <button  onClick={() => scrollTo('#about-section')}>
          <Simbol className={simbolStyle}/>
          <span className={links} >About</span>
        </button>
        <button onClick={() => scrollTo('#proyects-section')}>
          <Simbol className={simbolStyle}/>
          <span className={links} >Projects</span>
        </button>
        <button onClick={() => scrollTo('#contact-section')}>
          <Simbol className={simbolStyle}/>
          <span className={links} >Contact</span>
        </button>
      </nav>

      {/* Arrow up */}
      <div className={scrollPosition>=150 ? iconSideUp: hideArr}>
        <button onClick={() => scrollTo('#first-content')}>

          <FontAwesomeIcon
                  className={iconUp}
                  fixedWidth
                  icon={faChevronUp}
                  size="2x"
                />
        </button>

      </div>
    </section>
  );
};

export default SideBar;
