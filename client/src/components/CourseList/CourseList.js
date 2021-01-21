import * as React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Course, AddButton } from "..";

const url = "http://localhost:5000/courses/list";

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
