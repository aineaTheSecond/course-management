import * as React from "react";
import axios from "axios";
import { CourseList } from "../../components";

const CoursesPage = () => {
  const [courses, setCourses] = React.useState([]);

  const url = "http://localhost:5000/courses/list";

  React.useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(url);
        setCourses(result.data.response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="container">
      <h1 className=" section-header">Available courses</h1>
      {/* render the course list component */}
      <CourseList courses={courses} />
    </section>
  );
};

export default CoursesPage;
