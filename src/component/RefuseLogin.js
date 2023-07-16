import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Outlet } from "react-router";

function RefuseLogin() {
  const { handleLogout, setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/refresh", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 401) {
          handleLogout();
        }
      })
      .then((data) => setAuth(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return <>{!loading && <Outlet />}</>;
}

export default RefuseLogin;
