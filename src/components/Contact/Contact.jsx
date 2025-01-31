import React from "react";
import emailIcon from "../../images/emailContactIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";
import githubIcon from "../../images/githubContactIcon.png";
import whatsAppIcon from "../../images/whatsAppContactIcon.png";

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
            <div className="contact__icon">
              <img src={emailIcon} alt="email icon" />
            </div>
          </a>
          <p>EMAIL</p>
        </li>
        <li className="contact__link">
          <a
            href="https://github.com/SeverinDenys" target="_blank"
            
            
          >
            
            <div className="contact__icon">
              <img src={githubIcon} alt="github icon" />
            </div>
          </a>
          <p>GITHUB</p>
        </li>
        <li className="contact__link">
          <a href="https://wa.me/410796020670?text=Hello%20there!">
            <div className="contact__icon">
              <img src={whatsAppIcon} alt="whatsapp icon" />
            </div>
          </a>
          <p>WHATSAPP</p>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
