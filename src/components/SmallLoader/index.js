import React from "react";
import "./small-loader.scss";

const SmallLoader = () => {
  return (
    <div className="modal-container">
      <div className="overlay"></div>
      <div className="loader"></div>
    </div>
  );
};

export default SmallLoader;
