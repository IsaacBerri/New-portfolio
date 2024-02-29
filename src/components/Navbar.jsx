import React from "react";

const Navbar = () => {
  const handleClick = (type) => {
    if (type === "Home") {
      window.scrollTo({
        top: 0
      });
    } else if (type === "About") {
      window.scrollTo({
        top: 700
      })
    } else if (type === "Project") {
      window.scrollTo({
        top: 1400
      })
    } else if (type === "Skills") {
      window.scrollTo({
        top: 2500
      })
    }
  };

  return (
    <nav className="navbar animate__animated animate__zoomInUp">
      <h3>I:Dev</h3>
      <ul className="links">
        <li onClick={() =>handleClick("Home")} >
          <a href="#Home">Home</a>
        </li>
        <li onClick={() =>handleClick("About")}>
          <a href="#About">About</a>
        </li>
        <li onClick={() =>handleClick("Project")}>
          <a href="#Project">Projects</a>
        </li>
        <li onClick={() =>handleClick("Skills")}>
          <a href="#Skills">Skills</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
