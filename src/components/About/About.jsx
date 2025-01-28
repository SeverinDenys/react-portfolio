import React from "react";
import figmaIcon from "../../images/solar_figma-bold-duotone.png";
import cursorIcon from "../../images/cursorIcon.png";
import serverIcon from "../../images/serverIcon.png";
import arrowUpIcon from "../../images/arrowUpIcon.png";
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
            <img src={cursorIcon} alt="cursorIcon" />
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
            <img src={serverIcon} alt="server Icon" />
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
                <ul className="contactIcons__links">
                  <li className="contactIcons__link">
                    <a
                      href="mailto:denys.severin@gmx.ch"
                      target="_blank"
                    >
                      <img
                        src={emailIcon}
                        className="iconImage"
                        alt="email icon"
                      />
                    </a>
                  </li>
                  <li className="contactIcons__link">
                    <a
                      href="https://wa.me/410796020670?text=Hello%20there!"
                      target="_blank"
                    >
                      <img
                        src={whatsAppIcon}
                        className="iconImage"
                        alt="whatsapp icon"
                      />
                    </a>
                  </li>
                  <li className="contactIcons__link">
                    <a
                      href="https://github.com/SeverinDenys"
                      target="_blank"
                    >
                      <img
                        src={githubIcon}
                        className="iconImage"
                        alt="github icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="aboutContainer__arrowIcon">
              <img
                src={arrowUpIcon}
                alt="arrow up icon"
                className="arrouUpIcon"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
