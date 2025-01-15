import React from "react";
import { softSkillsData } from "../../../softSkills";

const SoftSkills = () => {
  return (
    <section className="soft-skills" id="soft-skills">
      <h2 className="soft-skills__title">Soft Skills</h2>
      <p>
        Before pursuing frontend development, I worked in two
        prestigious hotels in Lucerne, Switzerland: Grand Hotel
        National and Chateau Gütsch. During this time, I developed
        essential skills that now support my technical journey.
      </p>
      <div className="soft-skills__container">
        <ul className="soft-skills__list">
          {softSkillsData.map((skill, index) => (
            <li key={index} className="skill">
              <div>
                <span>{skill.icon}</span>{" "}
                <strong>{skill.title}:</strong>
              </div>
              <div>
                <p>{skill.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SoftSkills;
