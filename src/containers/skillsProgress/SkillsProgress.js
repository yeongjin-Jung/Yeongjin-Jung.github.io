import React from "react";
import { Fade } from "react-reveal";
import frontend from "../../assets/frontend.gif";
import { skillsProgress } from "../../portfolio";

import "./SkillsProgress.css";

export default function SkillsProgress() {
  return (
    <Fade bottom duraction={1000} distance="20px">
      <div className="skillsProgress">
        <div className="progress__container">
          <h1 className="progress__title">{skillsProgress.title}</h1>
          {skillsProgress.skills.map((skills, i) => {
            const progressStyle = {
              width: skills.percentage,
            };
            return (
              <div key={i} className="skill">
                <div className="skill__text">
                  <p>{skills.skillName}</p>
                  <p>{skills.percentage}</p>
                </div>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="progressImg">
          <img alt="front-end skills gif" src={frontend}></img>
        </div>
      </div>
    </Fade>
  );
}
