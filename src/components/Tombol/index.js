import React from "react";

import "./tombol.scss";

const Tombol = ({ title, icon, setTypeContent }) => {
  return (
    <div
      className="tombol"
      onClick={() => {
        setTypeContent();
      }}
    >
      {icon}
      <p className="text">{title}</p>
    </div>
  );
};

export default Tombol;
