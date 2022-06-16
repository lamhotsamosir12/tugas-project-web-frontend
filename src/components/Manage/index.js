import React, { useCallback, useEffect, useState } from "react";
import Tombol from "../Tombol";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Actions from "../Actions";
import "./manage.scss";
import { useNavigate } from "react-router-dom";
import DialogKonfirmasi from "../DialogKonfirmasi";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../../helpers";
import SmallLoader from "../SmallLoader";

const Manage = ({ setTypeContent, setIdUpdate }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const [employees, setEmployees] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  toast.success("Employee was delete succsessfully", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notify = () => {
    toast.success("Employee was delete succsessfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  if (openDialog) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const deleteEmployee = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${baseUrl}/api/employees/${id}`);
      setEmployees(employees.filter((item) => item._id !== id));
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

  const getEmployee = useCallback(async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/employees`);
      setEmployees(res.data.data);
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  useEffect(() => {
    getEmployee();
  }, [getEmployee]);

  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="home-header">
        <p className="title">Manage Employees</p>
        <Tombol
          title="ADD"
          icon={<AddCircleRoundedIcon className="icon" />}
          setTypeContent={() => {
            setTypeContent("add");
          }}
        />
      </div>
      <div className="home-content">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
                  <td>
                    <Actions
                      pen={() => {
                        setTypeContent("update");
                        setIdUpdate(item._id);
                      }}
                      eye={() => {
                        navigate(`employees/${item._id}`, {
                          state: {
                            id: item._id,
                          },
                        });
                      }}
                      trash={() => {
                        setEmployeeId(item._id);
                        setOpenDialog(true);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {openDialog && (
        <DialogKonfirmasi
          closeDialog={() => {
            setOpenDialog(false);
          }}
          deleteEmployee={() => {
            deleteEmployee(employeeId);
            setOpenDialog(false);
          }}
        />
      )}
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

export default Manage;
