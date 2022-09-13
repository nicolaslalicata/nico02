import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/LOGO.png";
import github from "../assets/github.png";
import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";
import wsp from "../assets/wsp.png";
import telegram from "../assets/telegram.png";
function NavBar() {
  const [isShownHome, setIsShownHome] = useState(false);
  const [isShownWho, setIsShownWho] = useState(false);
  const [isShownFunc, setIsShownFunc] = useState(false);
  const [isShownDocs, setIsShownDocs] = useState(false);
  const [isShownContact, setIsShownContact] = useState(false);
  return (
    <div className="navBar">
      <img className="logo" src={logo} alt="logo" />
      <div className="menu">
        <button
          type="button"
          onMouseEnter={() => setIsShownHome(true)}
          onMouseLeave={() => setIsShownHome(false)}
          className={isShownHome ? "nes-btn is-warning" : "nes-btn"}
        >
          Home
        </button>
        <button
          type="button"
          onMouseEnter={() => setIsShownWho(true)}
          onMouseLeave={() => setIsShownWho(false)}
          className={isShownWho ? "nes-btn is-warning" : "nes-btn"}
        >
          Who am I?
        </button>
        <button
          type="button"
          onMouseEnter={() => setIsShownFunc(true)}
          onMouseLeave={() => setIsShownFunc(false)}
          className={isShownFunc ? "nes-btn is-warning" : "nes-btn"}
        >
          Functions
        </button>
        <button
          type="button"
          onMouseEnter={() => setIsShownDocs(true)}
          onMouseLeave={() => setIsShownDocs(false)}
          className={isShownDocs ? "nes-btn is-warning" : "nes-btn"}
        >
          Docs
        </button>
        <button
          type="button"
          onMouseEnter={() => setIsShownContact(true)}
          onMouseLeave={() => setIsShownContact(false)}
          className={isShownContact ? "nes-btn is-warning" : "nes-btn"}
        >
          Contact
        </button>
      </div>
      <div className="imgContainer1">
        <a href="facebook.com" target="_blank">
          <img className="imagen" src={github} alt="" />
        </a>
        <a href="facebook.com" target="_blank">
          <img className="imagen" src={email} alt="" />
        </a>
        <a href="facebook.com" target="_blank">
          <img className="imagen" src={linkedin} alt="" />
        </a>
      </div>
      <div className="imgContainer2">
        <a href="facebook.com" target="_blank">
          <img className="imagen" src={wsp} alt="" />
        </a>
        <a href="facebook.com" target="_blank">
          <img className="imagen" src={telegram} alt="" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
