import React from "react";
import "./InputField.css";
const InputField = ({ register, error, name, value }) => {
  return (
    <div>
      <input
        className="input-field"
        {...register(name)}
        name={name}
        error={error}
        value={value}
      />
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default InputField;
