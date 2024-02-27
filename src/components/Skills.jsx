import { Icon } from "@iconify/react";
import React from "react";
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="Skills">
      <img className="planet1" src="https://i.postimg.cc/N0CHSXMZ/Planet-1.png" alt="" />
      <img className="planet2" src="https://i.postimg.cc/zBdxXKdk/planet-2.png" alt="" />
      <img className="planet3" src="https://i.postimg.cc/L5Kg1CSR/Planet-3.png" alt="" />
      <h2>Skills</h2>
      <p>
        In my journey through the world of web development, I have cultivated
        experience and skills in a variety of technologies. <span>My technology stack
        includes:</span> 
      </p>
      <section className="skillsContainer">
        <article className="skill">
          <h3 className="frontend">Frontend</h3>
          <ul>
            <li>
              <Icon icon="vscode-icons:file-type-html" width="50" height="50" />
              <span>HTML</span>
            </li>
            <li>
              <Icon icon="vscode-icons:file-type-css" width="50" height="50" />
              <span>CSS</span>
            </li>
            <li>
              <Icon
                icon="vscode-icons:file-type-js-official"
                width="50"
                height="50"
              />
              <span>JavaScript</span>
            </li>
            <li>
              <Icon
                icon="vscode-icons:file-type-reactjs"
                width="50"
                height="50"
              />
              <span>React</span>
            </li>
            <li>
              <Icon icon="devicon:tailwindcss" width="50" height="50" />
              <span>Tailwind</span>
            </li>
            <li>
              <Icon icon="devicon:bootstrap" width="50" height="50" />
              <span>Bootstrap</span>
            </li>
          </ul>
        </article>
        <article className="skill">
          <h3 className="backend">Backend</h3>
          <ul>
            <li>
              <Icon icon="logos:nodejs-icon" width="50" height="50" />
              <span>NodeJS</span>
            </li>
            <li>
              <Icon icon="simple-icons:express" width="50" height="50" />
              <span>Express</span>
            </li>
            <li>
              <Icon icon="logos:postgresql" width="50" height="50" />
              <span>PostgreSQL</span>
            </li>
            <li>
              <Icon icon="logos:mongodb-icon" width="50" height="50" />
              <span>MongoDB</span>
            </li>
            <li>
              <Icon icon="logos:graphql" width="50" height="50" />
              <span>GraphQL</span>
            </li>
            <li>
              <Icon icon="logos:java" width="50" height="50" />
              <span>Java</span>
            </li>
          </ul>
        </article>
        <article className="skill">
          <h3 className="learning">Learning</h3>
          <ul>
            <li>
              <Icon icon="devicon:typescript" width="50" height="50" />
              <span>Typescript</span>
            </li>
            <li>
              <Icon icon="akar-icons:nextjs-fill" width="50" height="50" />
              <span>NextJS</span>
            </li>
          </ul>
        </article>
        <article className="skill">
          <h3 className="tools">Tools</h3>
          <ul>
            <li>
              <Icon icon="logos:git-icon" width="50" height="50" />
              <span>Git</span>
            </li>
            <li>
              <Icon icon="mdi:github" width="50" height="50" />
              <span>Github</span>
            </li>
            <li>
              <Icon icon="codicon:terminal-bash" width="50" height="50" />
              <span>Terminal</span>
            </li>
            <li>
              <Icon icon="logos:visual-studio-code" width="50" height="50" />
              <span>Visual Studio</span>
            </li>
            <li>
              <Icon icon="devicon:npm-wordmark" width="50" height="50" />
              <span>NPM</span>
            </li>
            <li>
              <Icon icon="devicon:postman" width="50" height="50" />
              <span>Postman</span>
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
};

export default Skills;
