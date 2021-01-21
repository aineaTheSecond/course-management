import * as React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FormInput } from "..";
import { toast } from "material-react-toastify";

const ModuleForm = ({ match }) => {
  let url = `http://localhost:5000/course/${match.params.id}/modules/new`;
  // component state
  const [moduleId, setModuleId] = React.useState("");
  const [moduleName, setModuleName] = React.useState("");

  // react router dom history
  const history = useHistory();

  // function to send a module to the server for saving
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const resp = await axios.post(url, {
        module_id: moduleId,
        module_name: moduleName,
      });

      if (resp.status === 200) {
        toast.success("Saved successfully");
        history.goBack();
      } else {
        toast.error("could not save module, please try again");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container module-form">
      {console.log(match)}
      <h1 className="section-header">Use this form to create a new module</h1>
      <form onSubmit={handleSubmit} className="input-form">
        <FormInput
          name="module_id"
          label="Module Id"
          value={moduleId}
          onChange={(e) => setModuleId(e.target.value)}
          placeholder="e.g 1,2,3"
          type="number"
        />
        <FormInput
          name="module_name"
          label="Module Name"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          placeholder="e.g 1,2,3"
          type="number"
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ModuleForm;
