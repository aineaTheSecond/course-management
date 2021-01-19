import * as React from "react";
import { CourseList } from "../../components";

const CoursesPage = () => {
  return (
    <section className="container">
      <h1 className=" section-header">Available courses</h1>
      {/* render the course list component */}
      <CourseList />
    </section>
  );
};

export default CoursesPage;
