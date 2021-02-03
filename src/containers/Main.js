import React from "react";

import Navbar from "../components/navbar/Navbar";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";

export default function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Greeting></Greeting>
      <Skills></Skills>
    </div>
  );
}
