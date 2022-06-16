import React, { useState } from "react";
import Tombol from "../Tombol";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import LabelInput from "../LabelInput";
import "./add.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../helpers";
import SmallLoader from "../SmallLoader";

const Add = ({ setTypeContent }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const notify = () => {
    toast.success("Employee was added succsessfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const blankForm = () => {
    const input = document.querySelectorAll(".text-input");
    input.forEach((item) => {
      item.value = "";
    });
  };

  const addEmployee = async (firstName, lastName, email, address, phone) => {
    try {
      setLoading(true);
      await axios.post(`${baseUrl}/api/employees/add`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        address: address,
      });
      blankForm();
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
      notify();
      blankForm();
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, [3000]);
    }
  };

  return (
    <div className="add">
      <div className="add-header">
        <p className="title">New Employe</p>
        <Tombol
          title="BACK"
          icon={<ArrowCircleLeftRoundedIcon className="icon" />}
          setTypeContent={() => {
            setTypeContent();
          }}
        />
      </div>
      <div className="add-content">
        <LabelInput title="First Name" setValue={setFirstName} />
        <LabelInput title="Last Name" setValue={setLastName} />
        <LabelInput title="Email" setValue={setEmail} />
        <LabelInput title="Address" setValue={setAddress} />
        <LabelInput title="Phone" setValue={setPhone} />
        <div className="button-container">
          <Tombol
            title="SUBMIT"
            setTypeContent={() => {
              addEmployee(firstName, lastName, email, address, phone);
            }}
          />
        </div>
      </div>
      {showToast && (
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          limit={1}
        />
      )}
      {loading && <SmallLoader />}
    </div>
  );
};

export default Add;
