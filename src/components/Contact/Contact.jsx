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
          <a href="mailto:denys.severin@gmx.ch" target="_blank">
            <img src={emailIcon} alt="email icon" />
          </a>
          <p>Email</p>
        </li>
        <li className="contact__link">
          <a
            href="https://wa.me/410796020670?text=Hello%20there!"
            target="_blank"
          >
            <img src={whatsAppIcon} alt="whatsapp icon" />
          </a>
          <p>WhatsApp</p>
        </li>
        <li className="contact__link">
          <a href="https://github.com/SeverinDenys" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <p>Github</p>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
