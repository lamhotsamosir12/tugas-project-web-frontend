import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import Loading from "../../components/Loading";
import "./main-app.scss";

const MainApp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="main-app">
          <Navbar
            goHome={() => {
              navigate("/");
              window.location.reload();
            }}
          />
          <div className="content">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainApp;
