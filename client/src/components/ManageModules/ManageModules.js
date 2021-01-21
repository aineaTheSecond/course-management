import React from "react";
import axios from "axios";

import { ModuleList } from "..";

const ManageModules = ({ match }) => {
  // urls for making async requests
  const courseUrl = `http://localhost:5000/courses/${match.params.id}`;
  let url = "http://localhost:5000/modules/list";

  // component state
  const [modules, setModules] = React.useState([]);
  const [course, setCourse] = React.useState([]);

  // fetch modules from the database
  React.useEffect(() => {
    // retrieve modules from the database
    async function fetchModules() {
      try {
        let resp = await axios.get(url);
        // update the state with the retrieved modules
        setModules(resp.data.response);
      } catch (error) {
        alert(error);
      }
    }

    // retrieve the course provided the id
    async function getCourseById() {
      try {
        let course = await axios.get(courseUrl);
        setCourse(course.data[0]);
      } catch (error) {
        alert(error);
      }
    }

    getCourseById();
    fetchModules();
  }, []);
  return (
    <div>
      <ModuleList modules={modules} course={course} />
    </div>
  );
};

export default ManageModules;
