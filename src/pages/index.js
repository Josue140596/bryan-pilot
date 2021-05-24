import React from "react";
import Footer from "../components/footer";
import Main from "../components/main";

//Components
import SideBar from "../components/sideBar";

//Styles
import { contentHome } from "../styles/global.module.css";

const Home = () => {
  return (
    <div className={contentHome}>
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

export default Home;
