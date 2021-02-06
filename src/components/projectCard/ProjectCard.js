import React from "react";
import "./ProjectCard.css";
import { Fade } from "react-reveal";

export default function ProjectCard({ project }) {
  return (
    <div>
      <Fade bottom duraction={1000} distance="20px">
        <div className="projectCard">
          <a className="projectCard__link" href={project.git}>
            <img
              className="project__img"
              src={project.logo}
              alt="project picture"
            ></img>
            <div className="project__info">
              <h2 className="project__Name">{project.projectName}</h2>
              <p className="project__desc">{project.desc}</p>
            </div>
          </a>
        </div>
      </Fade>
    </div>
  );
}
