import * as React from "react";
import "./FormInput.css";

const FormInput = ({ name, label, placeholder, value, onChange }) => {
  let inputClass = "group";

  return (
    <div className={inputClass}>
      <input
        name={name}
        className="form-input"
        // placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
      />

      {label ? (
        <label htmlFor={name} className="form-input-label">
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
