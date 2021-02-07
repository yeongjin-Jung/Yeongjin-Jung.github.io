import React from "react";

import Navbar from "../components/navbar/Navbar";
import Academy from "./academy/Academy";
import Achievement from "./achievements/Achievement";
import Greeting from "./greeting/Greeting";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import SkillsProgress from "./skillsProgress/SkillsProgress";

export default function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Greeting></Greeting>
      <Skills></Skills>
      <SkillsProgress></SkillsProgress>
      <Academy></Academy>
      <Projects></Projects>
      <Achievement></Achievement>
    </div>
  );
}
