import React from "react";





//Components
import SideBar from "../components/sideBar";
import Main from "../components/main";
import Footer from "../components/footer";

//Styles
import { contentHome } from "../styles/global.module.css";
// Data graphql
import { graphql } from "gatsby";
import SEO from "../components/seo";



export default function  Home ({data})  {

  

  return (
    <div id="first-content" className={contentHome}>
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
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
        description
        author
      }
    
    }
  }`


