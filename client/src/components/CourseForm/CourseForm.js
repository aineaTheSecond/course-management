import * as React from "react";
import axios from "axios";
import { FormInput } from "..";

const url = "http://localhost:5000/new";

function CourseForm() {
  const [courseName, setCourseName] = React.useState("");
  const [courseId, setCourseId] = React.useState("");
  const [course_modules, setCourseModules] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url, {
        course_id: courseId,
        course_name: courseName,
        modules: course_modules,
      });
      return response;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className="container course-form" onSubmit={handleSubmit}>
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
        value={course_modules}
        onChange={(e) => setCourseModules(e.target.value)}
        placeholder="e.g 10"
        type="number"
      />
      <button>Save</button>
    </form>
  );
}

export default CourseForm;
