import React from "react";

import Navbar from "../components/navbar/Navbar";
import Academy from "./academy/Academy";
import Achievement from "./achievements/Achievement";
import Blogs from "./blogs/Blogs";
import Greeting from "./greeting/Greeting";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import SkillsProgress from "./skillsProgress/SkillsProgress";
import Contact from "./contact/Contact";

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
      <Blogs></Blogs>
      <Contact></Contact>
    </div>
  );
}
