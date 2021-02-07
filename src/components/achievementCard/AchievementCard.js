import React from "react";

import "./AchievementCard.css";

import { Fade } from "react-reveal";

export default function AchievementCard({ cardInfo }) {
  return (
    <div className="achievementCard__container">
      <div className="achievementCard__image__div">
        <Fade bottom duraction={1000} distance="20px">
          <img
            src={cardInfo.image}
            alt="achievementImg"
            className="achievementCard__image"
          ></img>
          <p className="achievementCard__title">{cardInfo.title}</p>
        </Fade>
      </div>
    </div>
  );
}
