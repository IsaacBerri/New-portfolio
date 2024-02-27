import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar animate__animated animate__zoomInUp">
      <h3>I:Dev</h3>
      <ul className="links">
        <a href="#Home">
          <li>Home</li>
        </a>
        <a href="#About">
          <li>About</li>
        </a>
        <a href="#Project">
          <li>Projects</li>
        </a>
        <a href="#Skills">
          <li>Skills</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
