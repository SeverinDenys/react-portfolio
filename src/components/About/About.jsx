import React from "react";

import aboutPicture from "../../images/aboutPicture.jpg";
import cursorIcon from "../../images/cursorIcon.png";
import serverIcon from "../../images/serverIcon.png";

const About = () => {
  return (
    <section className="aboutContainer" id="about">
      <h2 className="aboutContainer__title">About</h2>
      <div className="aboutContainer__content">
        <img
          src={aboutPicture}
          className="aboutContainer__img"
          alt="aboutIcon"
        />
        <ul className="aboutContainer__items">
          <li className="aboutContainer__item">
            <img src={cursorIcon} alt="cursorIcon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I'm an aspiring frontend developer with experience in
                building responsive and optimized websites
              </p>
            </div>
          </li>
          <li className="aboutContainer__item">
            <img src={serverIcon} alt="serverIcon" />
            <div>
              <h3>Backend knowledge</h3>
              <p>I have experience working with Firebase</p>
            </div>
          </li>
          <li className="aboutContainer__item">
            <img src={cursorIcon} alt="cursorIcon" />
            <div>
              <h3>Figma User</h3>
              <p>
                I have experience in working and addapting Figma
                designs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
