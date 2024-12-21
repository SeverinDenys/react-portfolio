import React from "react";
import emailIcon from "../../images/emailIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";
import githubIcon from "../../images/githubIcon.png";

const Contact = () => {
  return (
    <footer className="contact__container" id="contact">
      <div className="contact__text">
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className="contact__links">
        <li className="contact__link">
          <img src={emailIcon} alt="" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className="contact__link">
          <img src={linkedinIcon} alt="" />
          <a href="https://www.linkedin.com/myname">
            linkedin.com/myname
          </a>
        </li>
        <li className="contact__link">
          <img src={githubIcon} alt="" />
          <a href="https://www.github.com/myname">
            github.com/myname
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
