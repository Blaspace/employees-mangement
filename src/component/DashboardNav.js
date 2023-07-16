import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import UsersContext from "../context/UsersContext";

function DashboardNav() {
  const { user } = useContext(UsersContext);

  return (
    <nav className="dashboard-nav">
      <h1>tier</h1>
      <div>
        <span>
          <CgProfile />
        </span>
        <p>{user?.fullName}</p>
      </div>
    </nav>
  );
}

export default DashboardNav;
