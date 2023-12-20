import React, { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import UsersContext from "../context/UsersContext";

function DashboardNav() {
  const { user, toggle, setToggle } = useContext(UsersContext);

  const handleToggle = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <nav className="dashboard-nav">
      <h1>tier</h1>
      <h2 onClick={handleToggle}>
        {!toggle ? (
          <>&#x2630;</>
        ) : (
          <small style={{ fontSize: "30px" }}>&times;</small>
        )}
      </h2>
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
