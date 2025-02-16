import React from "react";
import figmaIcon from "../../images/solar_figma-bold-duotone.png";
import cursorIcon from "../../images/cursorIcon.png";
import serverIcon from "../../images/serverIcon.png";
import emailIcon from "../../images/emailIcon.png";
import githubIcon from "../../images/githubIcon.png";
import whatsAppIcon from "../../images/icons8-whatsapp.svg";

const About = () => {
  return (
    <section className="aboutContainer" id="about">
      <h2 className="aboutContainer__title">About</h2>
      <p className="aboutContainer__description">
        I’m a self-taught frontend developer currently diving deep
        into the world of React and web development.
      </p>
      <div className="aboutContainer__content">
        <ul className="aboutContainer__items">
          <li className="aboutContainer__item">
            <img
              src={cursorIcon}
              alt="A cursor icon representing frontend development"
            />
            <div className="infoContainer">
              <h3>Frontend Developer</h3>
              <p>
                I'm an aspiring frontend developer with experience in
                building responsive and optimized websites
              </p>
            </div>
          </li>
          <li className="aboutContainer__item">
            <img
              src={figmaIcon}
              alt="the golden orange icon of figma"
            />
            <div className="infoContainer">
              <h3>Figma User</h3>
              <p>
                I have experience in working and addapting Figma
                designs
              </p>
            </div>
          </li>
          <li className="aboutContainer__item">
            <img
              src={serverIcon}
              alt="Server icon representing backend knowledge"
            />
            <div className="infoContainer">
              <h3>Backend knowledge</h3>
              <p>I have experience working with Firebase</p>
            </div>
          </li>
          <li className="aboutContainer__item aboutContainer__item--contact">
            <div>
              <h3>Contact</h3>
              <p>Feel free to reach out</p>
              <div className="contactIcons">
                <ul className="contactIcons__links" role="list">
                  <li className="contactIcons__link" role="listitem">
                    <a
                      href="mailto:denys.severin@gmx.ch"
                      target="_blank"
                      aria-label="Send an email to Denys"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={emailIcon}
                        className="iconImage"
                        alt="Email icon for contacting me"
                      />
                    </a>
                  </li>
                  <li className="contactIcons__link" role="listitem">
                    <a
                      href="https://wa.me/410796020670?text=Hello%20there!"
                      target="_blank"
                      aria-label="Chat with Denys on WhatsApp"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={whatsAppIcon}
                        className="iconImage"
                        alt="WhatsApp icon for messaging me"
                      />
                    </a>
                  </li>
                  <li className="contactIcons__link" role="listitem">
                    <a
                      href="https://github.com/SeverinDenys"
                      target="_blank"
                      aria-label="Visit Denys' GitHub profile"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={githubIcon}
                        className="iconImage"
                        alt="WhatsApp icon for reaching me"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
