import * as React from "react";
import axios from "axios";

import { AddButton } from "..";
import "./ModuleList.css";

let url = "http://localhost:5000/modules/list";

const ModuleList = ({ history, match }) => {
  const courseUrl = `http://localhost:5000/courses/${match.params.id}`;

  // component state
  const [modules, setModules] = React.useState([]);
  const [course, setCourse] = React.useState([]);

  // fetch modules from the database
  React.useEffect(() => {
    // retrieve modules from the database
    async function fetchModules() {
      try {
        let resp = await axios.get(url);
        // update the state with the retrieved modules
        setModules(resp.data.response);
      } catch (error) {
        alert(error);
      }
    }

    // retrieve the course provided the id
    async function getCourseById() {
      try {
        let course = await axios.get(courseUrl);
        setCourse(course.data[0]);
      } catch (error) {
        console.log(error);
      }
    }

    getCourseById();
    fetchModules();
  }, []);

  async function handleUpdates() {
    let result = await axios.put();
  }

  return (
    <div className="module-list container">
      <h1 className="section-header">
        List of modules in {course.course_name}{" "}
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
                <span class="material-icons module-icon">create</span>
              </td>
              <td>
                <span class="material-icons module-icon">delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-btn">
        <AddButton onClick={() => history.push("/modules/new")} />
      </div>
    </div>
  );
};

export default ModuleList;
