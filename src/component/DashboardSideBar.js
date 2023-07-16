import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CgProfile } from "react-icons/cg";
import UsersContext from "../context/UsersContext";
import AuthContext from "../context/AuthContext";

function DashboardSideBar() {
  const { user } = useContext(UsersContext);
  const { handleLogout } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <div className="side-bar">
      <br />
      <div className="side-bar-profile">
        <span>
          <CgProfile />
        </span>
        <p>{user?.fullName}</p>
        <p>
          <b>
            {user?.userRole === "1999" && user?.role}{" "}
            {user?.userRole === "1999" && "Admin"}
            {user?.userRole === "2000" && user?.role + " " + "developer"}
          </b>
        </p>
      </div>
      <ul>
        <li onClick={() => navigate("dashboard")}>Profile</li>
        <li onClick={() => navigate("dashboard/video")}>Complains</li>
        <li onClick={() => navigate("dashboard/setting")}>Setting</li>
        <li onClick={handleLogout} style={{ color: "red", fontSize: "larger" }}>
          Logout
        </li>
      </ul>
    </div>
  );
}

export default DashboardSideBar;
