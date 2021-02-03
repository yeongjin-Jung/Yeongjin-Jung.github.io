import React from "react";
import { Fade } from "react-reveal";
import { skills } from "../../portfolio";
import codeImg from "../../assets/coding.gif";
import SoftwareSkills from "../../components/softwareSkills/SoftwareSkill";

import "./Skills.css";

export default function Skills() {
  if (!skills.display) {
    return null;
  }

  return (
    <div className="skills">
      <div className="skills__main">
        <Fade left duration={1000}>
          <div className="skills__img">
            <img alt="a notebook coding" src={codeImg}></img>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills__subtitle">
            <h1>{skills.title}</h1>
            <p className="skills__subtitle__text">{skills.subTitle}</p>
            <SoftwareSkills></SoftwareSkills>
            <div>
              {skills.skills.map((skills, i) => {
                return (
                  <p key={i} className={"subtitle__text"}>
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
