import React, { useEffect } from "react";

//Styles
import {
  proyects,
  content_proyects,
  cards_proyects,
  rectangle,
  decor_red,
  link_proy
} from "./proyects.module.css";



// Data graphql
import { graphql, useStaticQuery, Link } from "gatsby";

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

//Automatic Scroll
import Aos from "aos";
import "aos/dist/aos.css";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const Proyects = () => {
  useEffect(() => {
    Aos.init({
      duration: 250,
      disable: window.innerWidth < 1024,
    });
  }, []);

  const data = useStaticQuery(
    graphql`
      {
        allMarkdownRemark {
        totalCount
          edges {
            node {
              id
              frontmatter {
                color
                code
                Technologies
                Language
                Information
                Img
                date
                title
              }
              fields {
                slug
              }
              excerpt
            }
          }
        }
      }
    `
  );

  const arrayProyects = data.allMarkdownRemark.edges;

  const cardsProjects = arrayProyects.map(({ node }) => {
    return (
   
      <SwiperSlide
          key={node.id}
          name={node.frontmatter.Language}
          className={cards_proyects}
          to={node.fields.slug}
        >
      <Link className={link_proy} to={node.fields.slug} style={{textDecoration:"none", color:"inherit"}}>
          <h2>{node.frontmatter.title}</h2>

          <p key={node.id}>Language Code: {node.frontmatter.Language}</p>
          <img src={node.frontmatter.Img} alt={node.frontmatter.title} />

          <span
            style={{ backgroundColor: node.frontmatter.color }}
            className={decor_red}
            ></span>
      </Link>
        </SwiperSlide>
   
    );
  });



  return (
    <section id="proyects-section" data-aos="fade-right" className={proyects}>
      <h1>Proyects</h1>
      <span className={rectangle}></span>
      <div className={content_proyects}>
        <h2>JavaScript</h2>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-down"
        >
          {cardsProjects.map((arr) => {
            return arr.props.name === "JavaScript" ? arr : null;
          })}
        </Swiper>

        <h2>Java</h2>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
        >
          {cardsProjects.map((arr) => {
            return arr.props.name === "Java" ? arr : null;
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Proyects;
