import React from "react";
import "../styles/Project.css";
import usePagination from "../hooks/usePagination.jsx";
import useGetProject from "../hooks/useGetProject.jsx";

const Project = () => {
  const { projects } = useGetProject();

  console.log("projects", projects);
  const width = () => {
    if (window.innerWidth <= 600) {
      return 1;
    }
    return 3;
  };

  const {
    currentProjects,
    nextPage,
    prevPage,
    currentPage,
    indexOfLastProject,
  } = usePagination(projects, width());

  return (
    <section className="project" id="Project">
      <h2>Projects</h2>
      <section className="projectContainer">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="btn btnPrev"
        >
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
          disabled={indexOfLastProject >= projects.length}
        >
          Next
        </button>
      </section>
    </section>
  );
};

export default Project;
