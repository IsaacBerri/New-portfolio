import { Icon } from "@iconify/react";
import React from "react";
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="headerContainer" id="Home">
      <section className="headerInfo animate__animated animate__zoomInLeft">
        <div className="headerText">
          <h1>
            Hi, <span>I'm Isaac</span>
          </h1>
          <h2>Full Stack Developer</h2>
          <p>Building digital experiences, one line of code at a time.</p>
        </div>
        <div className="headerContact">
          <a href="www.linkedin.com/in/isaacberrio" target="_blank">
            <Icon icon="mdi:linkedin" width="24" height="24" /> Linkedin
          </a>
          <a href="https://github.com/IsaacBerri" target="_blank">
            <Icon icon="mdi:github" width="24" height="24" /> Github
          </a>
          <a href="mailto:berrioisaac15@gmail.com" target="_blank">
            <Icon icon="ic:baseline-email" width="24" height="24" /> Email
          </a>
        </div>
      </section>
      <section className="headerImage animate__animated animate__zoomInRight">
        <img
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-dibujos-animados-de-astronauta-espacial.png"
          alt="Isaac"
        />
      </section>
    </header>
  );
};

export default Header;
