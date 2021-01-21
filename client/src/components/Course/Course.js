import React from "react";
import { useHistory } from "react-router-dom";

import "./Course.css";

const Course = ({ course_id, course_name, modules }) => {
  const history = useHistory();

  return (
    <div className="course">
      <div className="course-content">
        <div className="course-img">
          <span className="icon">
            <i className="material-icons md-48">school</i>
          </span>
        </div>

        <div className="course-text">
          <h3 className="course-name">{course_name}</h3>

          <h3 className="course-modules">{modules} modules</h3>
        </div>
      </div>
      <button
        onClick={() => history.push(`course/${course_id}`)}
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
