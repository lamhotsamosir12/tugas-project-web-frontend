import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tombol } from "../../components";
import { baseUrl } from "../../helpers";
import "./view.scss";

const View = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [detailEmployee, setDetailEmployee] = useState({});
  const getDetailEmployee = useCallback(async (id) => {
    try {
      const res = await axios.get(`${baseUrl}/api/employees/${id}`);
      setDetailEmployee(res.data.data);
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  useEffect(() => {
    getDetailEmployee(location.state.id);
  }, [getDetailEmployee, location]);

  return (
    <div className="view">
      <div className="view-header">
        <p className="title">View Employe</p>
        <Tombol
          title="BACK"
          icon={<ArrowCircleLeftRoundedIcon className="icon" />}
          setTypeContent={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="view-content">
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{detailEmployee.first_name}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{detailEmployee.last_name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{detailEmployee.email}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{detailEmployee.address}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{detailEmployee.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
