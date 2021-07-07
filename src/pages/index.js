import React from "react";





//Components
import SideBar from "../components/sideBar";
import Main from "../components/main";
import Footer from "../components/footer";

//Styles
import { contentHome } from "../styles/global.module.css";
// Data graphql
import { graphql } from "gatsby";



const Home = () => {

  

  return (
    <div id="first-content" className={contentHome}>
      <title>I'm Bryan</title>
      {/*=============================== 
        Section of content S I D E N A V
      ================================*/}
      <SideBar />
      {/*=============================== 
        Section of content M A I N
      ================================*/}
      
      <Main>
        {/*==================================
            Section of content F O O T E R
          ====================================*/}
        <Footer/>
      </Main>
    </div>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }`

export default Home;
