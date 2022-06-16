import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import LabelInput from "../LabelInput";
import Tombol from "../Tombol";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../helpers";
import SmallLoader from "../SmallLoader";

const Update = ({ setTypeContent, idUpdate }) => {
  const [detailEmployee, setDetailEmployee] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const notify = () => {
    toast.success("Employee was updated succsessfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const getDetailEmployee = useCallback(async (id) => {
    try {
      const res = await axios.get(`${baseUrl}/api/employees/${id}`);
      const employee = res.data.data;
      setDetailEmployee(employee);
      setFirstName(employee.first_name);
      setLastName(employee.last_name);
      setAddress(employee.address);
      setPhone(employee.phone);
      setEmail(employee.email);
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  const updateEmployee = async (
    firstName,
    lastName,
    email,
    address,
    phone,
    id
  ) => {
    try {
      setLoading(true);
      await axios.patch(`${baseUrl}/api/employees/${id}`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        address: address,
      });
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
      notify();
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, [3000]);
    }
  };

  useEffect(() => {
    getDetailEmployee(idUpdate);
  }, [getDetailEmployee, idUpdate]);

  return (
    <div className="add">
      <div className="add-header">
        <p className="title">Update Employe </p>
        <Tombol
          title="BACK"
          icon={<ArrowCircleLeftRoundedIcon className="icon" />}
          setTypeContent={() => {
            setTypeContent();
          }}
        />
      </div>
      <div className="add-content">
        <LabelInput
          setValue={setFirstName}
          defaultValue={detailEmployee.first_name}
          title="First Name"
        />
        <LabelInput
          setValue={setLastName}
          defaultValue={detailEmployee.last_name}
          title="Last Name"
        />
        <LabelInput
          setValue={setEmail}
          defaultValue={detailEmployee.email}
          title="Email"
        />
        <LabelInput
          setValue={setAddress}
          defaultValue={detailEmployee.address}
          title="Address"
        />
        <LabelInput
          setValue={setPhone}
          defaultValue={detailEmployee.phone}
          title="Phone"
        />
        <div className="button-container">
          <Tombol
            title="SUBMIT"
            setTypeContent={() => {
              updateEmployee(
                firstName,
                lastName,
                email,
                address,
                phone,
                idUpdate
              );
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

export default Update;
