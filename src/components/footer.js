import React, { useEffect } from "react";

//Styles
import {
  footer,
  section_email,
  section_social_media,
  btn_contact,
  icons_content,
  iconEachOne,
  footer_last,
} from "./footer.module.css";

//Icons Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faFacebookF,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

//Form validation

import { useForm } from "react-hook-form";

//Email
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

//Alert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//Animated
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const MySwal = withReactContent(Swal);

  init("user_xaY3ul5kgdae3LlvGsgl2");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
  

    //reset values
      e.target.reset(); // reset after form submit
      reset({
        name: "",
        email:"",
        enquiry: "",
        message: ""
      })

    //Alerts
    let timerInterval;
    Swal.fire({
      title: "Sending..",
      html: "I will close in <b></b> milliseconds.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer();
          if (content) {
            const b = content.querySelector("b");
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });

    emailjs.send("service_lp8l9un", "template_f39m7y9", data).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);

        if (response.status === 200) {
          MySwal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 2800,
          });

          
        }
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

  
  };

  useEffect(() => {
    Aos.init({
      duration: 200,
      disable: window.innerWidth < 1024,
    });
  }, []);



  return (
    <footer id="contact-section" className={footer}>
      <h1>Contact</h1>
      <form className={section_email} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nombre">Your name:</label>
        <input
         
          name="nombre"
          type="text"
          {...register("name", { required: true, minLength:2 })}
        />
        {errors.name && <span>Name is required</span>}

        <label htmlFor="email">Your email Address:</label>
        <input
        
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>Email is required</span>}

        <label htmlFor="enquiry">Subject:</label>
        <input
      
          {...register("enquiry", { required: true })}
        />
        {errors.enquiry && <span>Subject is required</span>}

        <label htmlFor="message">Message:</label>
        <textarea
         
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && <span>Message is required</span>}

        <button className={btn_contact} type="submit">
          Submit
        </button>
      </form>

      <div data-aos="fade-right" className={section_social_media}>
        <span></span>
        <div className={icons_content}>
          <a
            href="https://github.com/Josue140596"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={iconEachOne}
              fixedWidth
              icon={faGithubAlt}
              size="3x"
            />
          </a>
          <a
            href="https://www.facebook.com/sanch.loms.7/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={iconEachOne}
              fixedWidth
              icon={faFacebookF}
              size="3x"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bryan-s%C3%A1nchez-rodr%C3%ADguez-82b29b1a9/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={iconEachOne}
              fixedWidth
              icon={faLinkedin}
              size="3x"
            />
          </a>
          <a href="mailto:josue140596@gmail.com">
            <FontAwesomeIcon
              className={iconEachOne}
              fixedWidth
              icon={faEnvelope}
              size="3x"
            />
          </a>
          <a
            href="https://twitter.com/LomsSanch"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={iconEachOne}
              fixedWidth
              icon={faTwitter}
              size="3x"
            />
          </a>
        </div>
        <span></span>
      </div>
      <div className={footer_last}>
        <p>
          {" "}
          Made with{" "}
          <span role="img" aria-label="si">
            &#128147;
          </span>{" "}
          by Bryan. <br /> Copyright{" "}
          <span role="img" aria-label="yes">
            {" "}
            &copy;
          </span>
          All rights reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
