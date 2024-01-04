import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import DashboardNav from "./DashboardNav";
import DashboardSideBar from "./DashboardSideBar";
import AuthContext from "../context/AuthContext";
import UsersContext from "../context/UsersContext";

function DashboardRoute() {
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
