import * as React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { FormInput } from "..";
import { toast } from "material-react-toastify";

const EditForm = ({ match }) => {
  // create a history prop
  const history = useHistory();

  // url for making API calls
  let baseUrl = process.env.REACT_APP_API_URL + `/modules/${match.params.id}`;
  // component state
  const [currentModule, setCurrentModule] = React.useState({
    module_name: "",
    module_id: "",
  });

  //   fetch the existing module from the database
  React.useEffect(() => {
    async function fetchModules() {
      try {
        let module = await axios.get(baseUrl);
        setCurrentModule(module.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchModules();
  }, []);

  // update the module in the database
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      let updateResult = await axios.put(baseUrl, currentModule);
      if (updateResult.status === 200) {
        toast.success("Module updated successfully");
        history.goBack();
      } else {
        toast.error("Failed to update, please try again");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <h1 className="section-header">Edit and save changes to the module</h1>
      <form onSubmit={handleSubmit} className="input-form">
        <FormInput
          name="module_id"
          label="Module Id"
          value={currentModule.module_id}
          onChange={(e) => setCurrentModule({ module_id: e.target.value })}
          placeholder="e.g 1,2,3"
          type="number"
        />
        <FormInput
          name="module_name"
          label="Module Name"
          value={currentModule.module_name}
          onChange={(e) => setCurrentModule({ module_name: e.target.value })}
          placeholder="e.g 1,2,3"
          type="number"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditForm;
