import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { toast } from "material-react-toastify";

import "./Course.css";

const Course = ({ course_id, course_name, modules, history }) => {
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
      <div className="course-footer">
        <span
          onClick={async () => {
            try {
              let delResponse = await axios(
                `http://localhost:5000/courses/${course_id}`,
                { method: "DELETE" }
              );
              if (delResponse.status === 200) {
                toast.success("Deleted successfully");
                history.push("/courses");
              } else {
                toast.error("failed to delete ");
              }
            } catch (error) {
              alert(error);
            }
          }}
          className="material-icons module-icon"
        >
          delete
        </span>

        <button
          onClick={() => history.push(`course/${course_id}`)}
          className="cta"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default withRouter(Course);
