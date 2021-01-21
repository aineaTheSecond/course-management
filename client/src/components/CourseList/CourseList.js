import * as React from "react";

import { withRouter } from "react-router-dom";
import { Course, AddButton } from "..";

const CourseList = ({ courses, history }) => {
  return (
    <div className="course-list">
      {courses.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridGap: "2rem",
            justifyContent: "space-between",
            gridTemplateColumns: "repeat(3, minmax(20rem, 1fr))",
          }}
        >
          {courses.map((course) => (
            <Course key={course.course_id} {...course} />
          ))}
        </div>
      ) : (
        <div>Add some courses so they can be displayed here</div>
      )}
      <AddButton onClick={() => history.push("courses/new")} />
    </div>
  );
};

export default withRouter(CourseList);
