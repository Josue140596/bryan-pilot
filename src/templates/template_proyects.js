import React, { useState } from "react";

//Data
import { graphql } from "gatsby";

//Styles
import {
  proyects_content_md,
  play_with_back,
  info_proy,
  info_each_one,
  tech_st,
  info_box,
  back_arrow,
  content_titles_logo,
  shadowProjects,
  play_icon,
  openModalBtn,
  modal,
  videoModal,
  seeApp,
  content_modal,
  close_modal,
  content_video_and_app,
  style_github_pro,
  modalTwo,
  content_modalTwo,
  content_video_and_app_modal_two,
} from "./template.module.css";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faFigma } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faPlayCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const TemplatesProyects = ({ data }) => {
  const [openModal, setopenModal] = useState(false);
  const [openModalTwo, setopenModalTwo] = useState(false);

  const openingModal = () => {
    setopenModal(!openModal);
  };
  const openingModalTwo = () => {
    setopenModalTwo(!openModalTwo);
  };

  const post = data.markdownRemark;
  return (
    <section id="proyects" className={proyects_content_md}>
      <title>{post.frontmatter.title}</title>
      <div
        className={play_with_back}
        style={{ backgroundColor: post.frontmatter.color }}
      >
        {/* <a href="javascript: history.go(-1)" className={back_arrow}>
          <FontAwesomeIcon fixedWidth icon={faArrowLeft} size="2x" />
        </a> */}
        <div>
          <h1>{post.frontmatter.title}</h1>
          <img
            className={content_titles_logo}
            src={post.frontmatter.Img}
            alt={post.frontmatter.title}
          />
        </div>
        <div className={shadowProjects}>
          <a href="javascript: history.go(-1)" className={back_arrow}>
            <FontAwesomeIcon fixedWidth icon={faArrowLeft} size="2x" />
          </a>

          <button onClick={openingModal} className={openModalBtn}>
            <FontAwesomeIcon
              fixedWidth
              className={play_icon}
              icon={faPlayCircle}
              size="5x"
            />
          </button>
        </div>
      </div>

      <div className={info_proy}>
        <div className={info_each_one}>
          <p>Information</p>
          <span style={{ backgroundColor: post.frontmatter.color }}></span>
          <div className={info_box}>{post.frontmatter.Information}</div>
        </div>
        <div className={info_each_one}>
          <p>Technologies</p>
          <span style={{ backgroundColor: post.frontmatter.color }}></span>
          <div className={tech_st}>
            {post.frontmatter.Technologi1}
            <br />
            {post.frontmatter.Technologi2}
          </div>
        </div>
        <div className={info_each_one}>
          <p>Mockup</p>
          <span style={{ backgroundColor: post.frontmatter.color }}></span>
          <a
            href="https://www.figma.com/file/rkNrbsWgp9klf2tL2i1029/Portafolio?node-id=0%3A1"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon fixedWidth icon={faFigma} size="5x" />
            Figma
          </a>
        </div>
        <div className={info_each_one}>
          <p>Source code</p>
          <span style={{ backgroundColor: post.frontmatter.color }}></span>

          {post.frontmatter.alternativies ? (
            <button onClick={openingModalTwo} className={style_github_pro}>
              <FontAwesomeIcon fixedWidth icon={faGithubAlt} size="5x" />
              Github
            </button>
          ) : (
            <a
              href={post.frontmatter.code}
              className={style_github_pro}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon fixedWidth icon={faGithubAlt} size="5x" />
              Github
            </a>
          )}

          {openModalTwo === true ? (
            <div className={modalTwo}>
              <div className={content_modalTwo}>
                <button onClick={openingModalTwo} className={close_modal}>
                  <FontAwesomeIcon fixedWidth icon={faTimes} size="2x" />
                </button>

                <div className={content_video_and_app_modal_two}>
                  <a
                    href={post.frontmatter.frontend}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Frontend
                  </a>
                  <a
                    href={post.frontmatter.backend}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Backend
                  </a>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {openModal === true ? (
        <div className={modal}>
          <div className={content_modal}>
            <button onClick={openingModal} className={close_modal}>
              <FontAwesomeIcon fixedWidth icon={faTimes} size="2x" />
            </button>

            <div className={content_video_and_app}>
              <div
                className={videoModal}
                dangerouslySetInnerHTML={{ __html: post.html }}
              ></div>
              <div className={seeApp}>
                You can look at my app
                <br />
                ¡Click in the image!
                <br />
                <a href={post.frontmatter.app} target="_blank" rel="noreferrer">
                  <img
                    style={{ margin: "12px" }}
                    src={post.frontmatter.Img}
                    alt={post.frontmatter.title}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        color
        code
        alternativies
        app
        frontend
        backend
        Technologi1
        Technologi2
        Language
        Information
        Img
      }
    }
  }
`;

export default TemplatesProyects;
