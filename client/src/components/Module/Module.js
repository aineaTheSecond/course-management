import React from "react";

const Module = ({ module_id, module_name, course_name }) => {
  return (
    <div className="module">
      <div className="module-content">
        <span>{module_id}</span>
        <span>{module_name}</span>
        <span>{course_name}</span>
      </div>
    </div>
  );
};

export default Module;
