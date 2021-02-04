import React from "react";
import "./Academy.css";
import { academy } from "../../portfolio";
import AcademyCard from "../../components/academyCard/AcademyCard";

export default function Academy() {
  return (
    <div className="academy__main">
      <div className="academy__container">
        <h1 className="academy__text">{academy.title}</h1>
        <div className="academy__card__container">
          {academy.academys.map((academy) => {
            return <AcademyCard academy={academy}></AcademyCard>;
          })}
        </div>
      </div>
    </div>
  );
}
