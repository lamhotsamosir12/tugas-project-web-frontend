import React from "react";
import "./navbar.scss";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const Navbar = ({ goHome }) => {
  return (
    <div className="navbar">
      <div
        className="icon"
        onClick={() => {
          goHome();
        }}
      >
        <HomeRoundedIcon />
      </div>

      <div className="title">
        <PersonRoundedIcon className="icon" />
        <p className="text">Employee Management</p>
      </div>
    </div>
  );
};

export default Navbar;
