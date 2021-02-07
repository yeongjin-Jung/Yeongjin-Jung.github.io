import React from "react";
import "./Achievement.css";

import { achievements } from "../../portfolio";
import AchievementCard from "../../components/achievementCard/AchievementCard";

export default function Achievement() {
  return (
    <div className="achievement__container">
      <h1 className="proejcts__text">{achievements.title}</h1>
      <h2 className="proejcts__subtext">{achievements.subtitle}</h2>
      <div className="achievements">
        {achievements.achievementList.map((achievement) => {
          return <AchievementCard cardInfo={achievement}></AchievementCard>;
        })}
      </div>
    </div>
  );
}
