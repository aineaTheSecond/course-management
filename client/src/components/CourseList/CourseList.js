import * as React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Course } from "..";

const url = "http://localhost:5000/courses";

const CourseList = ({ history }) => {
  const [courses, setCourses] = React.useState([]);

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
    <div className="course-list">
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

        {console.log(courses)}
      </div>
      <button
        className="cta"
        onClick={() => history.push("/courses/new")}
        style={{
          width: "6rem",
          height: "6rem",
          padding: "1rem",
          marginTop: "2rem",
          marginBottom: "2rem",
          position: "absolute",
          right: "10rem",
          zIndex: "3",
          borderRadius: "50%",
        }}
      >
        <span style={{ fontSize: "2rem" }}>+ </span>
      </button>
    </div>
  );
};

export default withRouter(CourseList);
