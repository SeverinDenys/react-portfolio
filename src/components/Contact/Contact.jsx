import React from "react";
import emailIcon from "../../images/emailContactIcon.png";
import linkedinIcon from "../../images/icons8-linkedin-48.png";
import githubIcon from "../../images/githubContactIcon.png";
import whatsAppIcon from "../../images/whatsAppContactIcon.png";

const Contact = () => {
  return (
    <footer className="contact__container" id="contact">
      <div className="contact__text">
        <h2>Contacts</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className="contact__links">
        <li className="contact__link">
          <a
            href="mailto:denys.severin@gmx.ch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email to Denys"
          >
            <div className="contact__icon">
              <img
                src={emailIcon}
                alt="Email envelope icon in orange and white to write Denys"
              />
            </div>
          </a>
          <p>EMAIL</p>
        </li>
        <li className="contact__link">
          <a
            href="https://github.com/SeverinDenys"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Denys' GitHub profile"
          >
            <div className="contact__icon">
              <img
                src={githubIcon}
                alt="GitHub logo icon in black and white to reach Denys"
              />
            </div>
          </a>
          <p>GITHUB</p>
        </li>
        <li className="contact__link">
          <a
            href="https://wa.me/410796020670?text=Hello%20there!"
            rel="noopener noreferrer"
            aria-label="Chat with Denys on WhatsApp"
          >
            <div className="contact__icon">
              <img
                src={whatsAppIcon}
                alt="WhatsApp logo icon in green and white to contact Denys"
              />
            </div>
          </a>
          <p>WHATSAPP</p>
        </li>
        <li className="contact__link">
          <a
            href="https://www.linkedin.com/in/denys-severin-41528a348/"
            rel="noopener noreferrer"
            aria-label="Connect with Denys on LinkedIn"
          >
            <div className="contact__icon">
              <img
                src={linkedinIcon}
                alt="LinkedIn logo icon in blue and white to contact Denys"
              />
            </div>
          </a>
          <p>LINKEDIN</p>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
