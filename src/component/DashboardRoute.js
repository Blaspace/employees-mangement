import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import DashboardNav from "./DashboardNav";
import DashboardSideBar from "./DashboardSideBar";
import AuthContext from "../context/AuthContext";
import UsersContext from "../context/UsersContext";

function DashboardRoute() {
  const { auth, uri } = useContext(AuthContext);
  const { setUser, setUsers } = useContext(UsersContext);

  useEffect(() => {
    fetch(`${uri}/getuser`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`${uri}/getusers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <DashboardNav />
      <div className="dashboard-route">
        <DashboardSideBar />
        <Outlet />
      </div>
    </>
  );
}

export default DashboardRoute;
