import * as React from "react";
import axios from "axios";
import { FormInput } from "..";

let url = "http://localhost:5000/modules/new";

const ModuleForm = () => {
  const [moduleId, setModuleId] = React.useState("");
  const [moduleName, setModuleName] = React.useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const resp = await axios.post(url, {
        module_id: moduleId,
        module_name: moduleName,
      });

      return resp;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container module-form">
      <h1 className="section-header">Use this form to create a new module</h1>
      <form onSubmit={handleSubmit}>
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
