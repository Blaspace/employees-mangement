import React from "react";
import { Outlet } from "react-router";
import Nav from "./Nav";

function RootRoute() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default RootRoute;
