import React from "react";
import "./dialog-konfirmasi.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const DialogKonfirmasi = ({ deleteEmployee, closeDialog }) => {
  return (
    <div className="modal-container">
      <div
        className="overlay"
        onClick={() => {
          closeDialog();
        }}
      ></div>
      <div className="modal-content">
        <div className="top">
          <p className="text">Delete Confirmation</p>
          <div
            onClick={() => {
              closeDialog();
            }}
          >
            <CloseRoundedIcon className="icon" />
          </div>
        </div>
        <div className="mid">Are you sure you want to delete?</div>
        <div className="bot">
          <div
            onClick={() => {
              closeDialog();
            }}
            className="button-cancel"
          >
            CANCEL
          </div>
          <div
            onClick={() => {
              deleteEmployee();
            }}
            className="button-ok"
          >
            OK
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogKonfirmasi;
