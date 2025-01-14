import React, { useState } from "react";
import { projects } from "../../../skills";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__list">
        {displayedProjects.map((project, id) => (
          <div className="projects__item" key={id}>
            <img
              src={project.imageSrc}
              className="projects__image"
              alt={project.title}
            />
            <h3 className="projects__item-title">{project.title}</h3>
            <p className="projects__item-description">
              {project.description}
            </p>
            <ul className="projects__skills">
              {project.skills.map((skill, id) => (
                <li className="projects__skill" key={id}>
                  {skill}
                </li>
              ))}
            </ul>
            <div className="projects__links">
              {project.demo ? (
                <>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="projects__link"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    className="projects__link"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                </>
              ) : (
                <a
                  href={project.source}
                  target="_blank"
                  className="projects__link"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {projects.length > 6 && (
        <div className="projects__show-more">
          <a
            className="projects__button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </a>
        </div>
      )}
    </section>
  );
};

export default Projects;
