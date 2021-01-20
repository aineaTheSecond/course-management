import React from "react";

const FormInput = ({ error, name, label, placeholder, value, onChange }) => {
  let inputClass = "group";

  return (
    <div className={inputClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          required
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormInput;
