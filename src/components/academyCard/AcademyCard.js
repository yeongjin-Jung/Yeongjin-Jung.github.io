import React, { createRef, useContext } from "react";
import "./AcademyCard.css";
import { Fade, Slide, Zoom } from "react-reveal";

export default function AcademyCard({ academy }) {
  const imgRef = createRef();
  return (
    <div>
      <Fade left duration={1000}>
        <div className="academy__card">
          <div className="academy__card__left">
            <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="academy__img"
              alt={academy.academyName}
              src={academy.logo}
            ></img>
          </div>
          <div className="academy__card_right">
            <h3 className="academy__Name">{academy.academyName}</h3>
            <div className="academy__detail">
              <h5 className="academy__desc">{academy.desc}</h5>
              <h5 className="academy__duration">{academy.duration}</h5>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="academy__card__border"></div>
      </Slide>
    </div>
  );
}
