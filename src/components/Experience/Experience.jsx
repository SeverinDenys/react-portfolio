import React from "react";
import { skills } from "../../../skills";

const Experience = () => {
  return (
    <section className="experienceContainer" id="experience">
      <h2 className="experienceContainer__title">Experience</h2>
      <div className="experienceContainer__content">
        <div className="experienceContainer__skills">
          {skills.map((skill, id) => (
            <div className="experienceContainer__skill" key={id}>
              <div className="experienceContainer__skillImageContainer">
                <img src={skill.imageSrc} alt="image" />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
