import React from "react";
import "./ProjectCard.css";
import { Fade } from "react-reveal";

export default function ProjectCard({ project }) {
  return (
    <div>
      <Fade bottom duraction={1000} distance="20px">
        <div className="projectCard">
          <a className="projectCard__link" href={project.git}>
            <p className="project__name">{project.projectName}</p>
            <img
              className="project__img"
              src={project.logo}
              alt="project img"
            ></img>
            <div className="project__info">
              {/* <p className="project__Name">{project.projectName}</p> */}
              <p className="project__desc">{project.desc}</p>
            </div>
          </a>
        </div>
      </Fade>
    </div>
  );
}
