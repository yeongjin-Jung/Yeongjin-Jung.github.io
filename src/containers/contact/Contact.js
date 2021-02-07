import React from "react";

import "./Contact.css";
import { contactInfo, illustration } from "../../portfolio";
import email from "../../assets/lottie/email";
import { Fade } from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div id="contact">
        <div className="contact__container">
          <div className="contact__image__div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
          <div className="contact__header">
            <h1 className="contact__header__title">{contactInfo.title}</h1>
            <p className="contact__header__subtitle">{contactInfo.subtitle}</p>
            <div className="contact__text">
              <a
                className="contact__phoneNumber"
                href={"tel:" + contactInfo.number}
              >
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact__email"
                href={"mailto:" + contactInfo.emailAddress}
              >
                {contactInfo.emailAddress}
              </a>
              <br />
              <br />
              {/* <SocialMedia /> */}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
