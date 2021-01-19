import React from "react";
import { Course } from "..";

const courses = [
  {
    name: "Electrical Engineering",
    modules: 24,
  },
  {
    name: "Computer Science",
    modules: 20,
  },
  {
    name: "Medicine",
    modules: 30,
  },
];

const CourseList = () => {
  return (
    <div
      className="course-list"
      style={{
        display: "grid",
        gridGap: "2rem",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(3, minmax(20rem, 1fr))",
      }}
    >
      {courses.map((course) => (
        <Course key={Math.random()} {...course} />
      ))}
    </div>
  );
};

export default CourseList;
