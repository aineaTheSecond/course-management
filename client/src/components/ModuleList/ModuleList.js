import * as React from "react";
import "./ModuleList.css";

const ModuleList = () => {
  // fetch modules

  const modules = [
    {
      module_name: "Introduction",
      module_id: 1,
      course_name: "Computer Science",
    },
    {
      module_name: "Networking",
      module_id: 2,
      course_name: "Computer Science",
    },
  ];

  return (
    <div className="module-list container">
      <h1>list of modules in course: </h1>
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
              <td>{module.course_name}</td>
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
    </div>
  );
};

export default ModuleList;
