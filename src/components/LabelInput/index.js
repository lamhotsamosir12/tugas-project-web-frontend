import React from "react";
import "./label-input.scss";

const LabelInput = ({ title, setValue, defaultValue = "" }) => {
  return (
    <div className="label-input">
      <p className="title">
        {title} <span className="bintang">*</span>
      </p>
      <input
        defaultValue={defaultValue}
        className="text-input"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default LabelInput;
