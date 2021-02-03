import React from "react";
import Headroom from "react-headroom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="navbar__logo">
        <a className="navbar__logo__title" href="#">
          <b style={{ color: "orange" }}>Yeong</b>&nbsp;Jin
        </a>
      </div>
      {/* <!-- <div className="navbar__menu"> --> */}
      <ul className="navbar__menu">
        <li className="navbar__menu__item active" data-link="#home">
          Home
        </li>
        <li className="navbar__menu__item" data-link="#about">
          About
        </li>
        <li className="navbar__menu__item" data-link="#skills">
          Skills
        </li>
        <li className="navbar__menu__item" data-link="#work">
          My work
        </li>
        <li className="navbar__menu__item" data-link="#contact">
          Contact
        </li>
      </ul>
      {/* <!-- </div> --> */}

      {/* <!-- Toggle button --> */}
      {/* <button className="navbar__toggle-btn">
        <i className="fas fa-bars"></i>
      </button> */}
    </nav>
  );
}
