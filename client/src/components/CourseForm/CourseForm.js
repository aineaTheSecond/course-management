import * as React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { FormInput } from "..";
import "./CourseForm.css";
import { toast } from "material-react-toastify";

function CourseForm() {
  const [courseName, setCourseName] = React.useState("");
  const [courseId, setCourseId] = React.useState("");
  const [modules, setModules] = React.useState("");

  const url = "http://localhost:5000/courses/new";

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url, {
        course_id: courseId,
        course_name: courseName,
        modules: modules,
      });
      if (response.status === 200) {
        toast.success("course added successfully");
      } else {
        toast.error("could not add course");
        history.goBack();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container course-form">
      <h1 className="section-header">Use this form to create a new course</h1>
      <form onSubmit={handleSubmit} className="input-form">
        <FormInput
          name="course_id"
          label="Course Id"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          placeholder="e.g 1,2,3"
          type="number"
        />
        <FormInput
          name="course_name"
          label="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="e.g Computer Science "
          type="text"
        />
        <FormInput
          name="modules"
          label="Modules"
          value={modules}
          onChange={(e) => setModules(e.target.value)}
          placeholder="e.g 10"
          type="number"
        />
        <button>Save</button>
      </form>
    </div>
  );
}

export default CourseForm;
