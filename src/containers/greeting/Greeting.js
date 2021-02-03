import React from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import "./Greeting.css";

import profileImg from "../../assets/profile/Profile.jpg";
import { greeting } from "../../portfolio";
import Button from "../../components/button/Button";

export default function Greeting() {
  return (
    <Fade id="main" bottom duration={1000} distance="40px">
      <div id="greeting">
        <div className="greeting__main">
          <div className="greeting__text__container">
            <h1 className="greeting__text">
              {" "}
              {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting__text__subtitle">{greeting.subTitle}</p>
            <div className="greeting__text__button">
              <Button text="Contact me" href="#contact"></Button>
              <Button
                text="이력서 보기"
                newTab={true}
                href={greeting.resumeLink}
              ></Button>
            </div>
          </div>
          <div className="greeting__img__container">
            <img alt="my profile img" src={profileImg}></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
