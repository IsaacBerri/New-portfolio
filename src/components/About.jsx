import { Icon } from "@iconify/react";
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <main className="about" id="About">
      <section className="aboutInfo">
        <h2>About me</h2>
        <p>
          Hello! I am a junior <span>full-stack developer</span> passionate
          about creating innovative and functional solutions. On my journey
          toward excellence in <spam>web development</spam>, I have cultivated a
          strong set of technical skills and a creative mindset that seeks to
          challenge the boundaries of the possible.
        </p>

        <p>
          <span>
            I have strong knowledge in front-end and back-end technologies
          </span>
          , allowing me to create complete web applications from scratch and
          take them from concept to implementation.
        </p>
        <a href="/dist/CV.pdf" download="CV Isaac.pdf">
          <button className="btn">
            <Icon icon="material-symbols:download" width="24" height="24" />{" "}
            Curriculum
          </button>
        </a>
      </section>
      <section className="aboutImage">
        <img src="https://i.postimg.cc/501XkyPv/Planet-4.png" alt="" />
      </section>
    </main>
  );
};

export default About;
