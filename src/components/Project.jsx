import React, { useEffect, useState } from "react";
import "../styles/Project.css";
import usePagination from "../hooks/usePagination";

const Project = () => {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/public/api/Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);


  const width = () => {
    if (window.innerWidth <= 600) {
      return 1;
    }
    return 3;
  }

  const {
    currentProjects,
    nextPage,
    prevPage,
    currentPage,
    indexOfLastProject,
  } = usePagination(Projects, width());

  return (
    <section className="project" id="Project">
      <h2>Projects</h2>
      <section className="projectContainer">
        <button onClick={prevPage} disabled={currentPage === 1} className="btn btnPrev">
          Prev
        </button>
        {currentProjects.map((project) => (
          <article key={project.id} className="projectCard">
            <span className="typeProject">{project.typeProject}</span>
            <div>
              <a className="projectLink" href={project.url} target="_blank">
                <img className="projectImg" src={project.imageUrl} alt="" />
                <span className="view">View</span>
              </a>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <div className="projectCardFooter">
              {project.technologies.map((tech, i) => (
                <span className="tech" key={i}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
        <button
          className="btn btnNext"
          onClick={nextPage}
          disabled={indexOfLastProject >= Projects.length}
        >
          Next
        </button>
      </section>
    </section>
  );
};

export default Project;
