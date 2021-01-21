import * as React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import { AddButton } from "..";
import "./ModuleList.css";
import { Redirect } from "react-router-dom";
import { toast } from "material-react-toastify";

const ModuleList = ({ course, modules }) => {
  const [redirect, setRedirect] = React.useState(false);
  const history = useHistory();

  return (
    <div className="module-list container">
      {redirect && <Redirect to="modules/edit" />}
      {console.log(course)}
      <h1 className="section-header">
        List of modules in {course.course_name}
      </h1>
      <table className="module-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Course</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* render modules */}
          {modules.map((module) => (
            <tr key={module.module_id}>
              <td>{module.module_name}</td>
              <td>{course.course_name}</td>
              <td>
                <Link
                  to={`/course/${course.course_id}/module/${module.module_id}`}
                >
                  <span
                    onClick={() => setRedirect(true)}
                    className="material-icons module-icon"
                  >
                    create
                  </span>
                </Link>
              </td>
              <td>
                <span
                  onClick={async () => {
                    try {
                      let delResponse = await axios(
                        `http://localhost:5000/modules/${module.module_id}`,
                        { method: "DELETE" }
                      );
                      if (delResponse.status === 200) {
                        toast.success("Deleted successfully");
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-btn">
        <AddButton
          onClick={() => {
            history.push(`/course/${course.course_id}/modules/new`);
          }}
        />
      </div>
    </div>
  );
};

export default ModuleList;
