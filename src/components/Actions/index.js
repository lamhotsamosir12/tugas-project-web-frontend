import React from "react";
import "./actions.scss";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";

const Actions = ({ pen, eye, trash }) => {
  return (
    <div className="actions">
      <div
        onClick={() => {
          eye();
        }}
      >
        <VisibilityRoundedIcon className="eye" />
      </div>
      <div
        onClick={() => {
          pen();
        }}
      >
        <BorderColorRoundedIcon className="pen" />
      </div>
      <div
        onClick={() => {
          trash();
        }}
      >
        <DeleteForeverRoundedIcon className="trash" />
      </div>
    </div>
  );
};

export default Actions;
