import React from "react";
import emailIcon from "../../images/emailIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";
import githubIcon from "../../images/githubIcon.png";
import whatsAppIcon from "../../images/icons8-whatsapp.svg";

const Contact = () => {
  return (
    <footer className="contact__container" id="contact">
      <div className="contact__text">
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className="contact__links">
        <li className="contact__link">
          <img src={emailIcon} alt="email icon" />
          <a href="mailto:denys.severin@gmx.ch" target="_blank">
            Email
          </a>
        </li>
        <li className="contact__link">
          <img src={whatsAppIcon} alt="whatsapp icon" />
          <a
            href="https://wa.me/410796020670?text=Hello%20there!"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </li>
        <li className="contact__link">
          <img src={githubIcon} alt="github icon" />
          <a href="https://github.com/SeverinDenys" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
