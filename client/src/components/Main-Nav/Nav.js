import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="main-nav container">
      <div className="nav-brand">
        <Link to="/" className="nav-link">
          Course Management
        </Link>
      </div>
      <ul className="nav-links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/courses">
          Courses
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
