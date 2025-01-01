import React from "react";
import { projects } from "../../../skills";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__list">
        {projects.map((project, id) => {
          return (
            <div className="projects__item" key={id}>
              <img
                src={project.imageSrc}
                className="projects__image"
                alt={project.title}
              />
              <h3 className="projects__item-title">
                {project.title}
              </h3>
              <p className="projects__item-description">
                {project.description}
              </p>
              <ul className="projects__skills">
                {project.skills.map((skill, id) => {
                  return (
                    <li className="projects__skill" key={id}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
              <div className="projects__links">
                <a
                  href={project.demo}
                  target="_blank"
                  className="projects__link"
                >
                  Demo
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  className="projects__link"
                >
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
