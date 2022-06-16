import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <ClimbingBoxLoader color="#fff" loading={true} size={30} />
    </div>
  );
};

export default Loading;
