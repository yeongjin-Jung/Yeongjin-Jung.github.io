import React from "react";
import "./SoftwareSkill.css";
import { skills } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software__skills__main">
        <ul className="dev-icons">
          {skills.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software__skills__item"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
