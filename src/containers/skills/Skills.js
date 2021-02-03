import React from "react";
import { Fade } from "react-reveal";
import { skills } from "../../portfolio";

export default function Skills() {
  if (!skills.display) {
    return null;
  }

  return (
    <div className="skills">
      <div className="skills__main">
        <Fade left duration={1000}>
          <div className="skills__text">
            <h1>{skills.title}</h1>
            <p className="skills__text__subtitle">{skills.subTitle}</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
