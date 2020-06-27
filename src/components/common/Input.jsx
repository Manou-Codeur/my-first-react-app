import React from "react";

const Input = ({ label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        className="form-control"
        id={label}
        {...rest}
        aria-describedby="emailHelp"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
