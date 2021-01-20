import React from "react";

const AddButton = ({ ...props }) => {
  return (
    <button
      className="cta"
      {...props}
      style={{
        width: "4rem",
        height: "4rem",
        position: "relative",
        zIndex: "3",
        borderRadius: "50%",
        margin: "1rem 0",
      }}
    >
      <span
        style={{
          fontSize: "2rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        +{" "}
      </span>
    </button>
  );
};

export default AddButton;
