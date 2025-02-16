import React from "react";
import { skills } from "../../../skills";

const Experience = () => {
  return (
    <section className="experienceContainer" id="experience">
      <h2 className="experienceContainer__title">Experience</h2>
      <div className="experienceContainer__content">
        <div
          className="experienceContainer__skills"
          aria-label="List of technical skills"
        >
          {skills.map((skill, id) => (
            <div className="experienceContainer__skill" key={id}>
              <div className="experienceContainer__skillImageContainer">
                <img
                  src={skill.imageSrc}
                  alt={`${skill.title} technology icon`}
                />
              </div>
              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
