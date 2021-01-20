import React from "react";

import "./Course.css";

const Course = ({ name, modules }) => {
  return (
    <div className="course">
      <div className="course-content">
        <div className="course-img">
          <span className="icon">
            <i class="material-icons md-48">school</i>
          </span>
        </div>

        <div className="course-text">
          <h3 className="course-name">{name}</h3>

          <h3 className="course-modules">{modules} modules</h3>
        </div>
      </div>
      <button
        className="cta"
        style={{
          marginTop: "2rem",
        }}
      >
        Explore
      </button>
    </div>
  );
};

export default Course;
