import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { CgProfile } from "react-icons/cg";
import UsersContext from "../context/UsersContext";
import AuthContext from "../context/AuthContext";

function DashboardSideBar() {
  const { user, toggle, setToggle } = useContext(UsersContext);
  const { handleLogout } = useContext(AuthContext);

  const side = useRef();

  useEffect(() => {
    if (window.innerWidth < 870) {
      if (toggle) {
        side.current.style.display = "block";
      } else {
        side.current.style.display = "none";
      }
    }
  }, [toggle]);

  const handleNav = (e) => {
    setToggle(false);
    navigate(e);
  };

  const navigate = useNavigate();
  return (
    <div className="side-bar" ref={side}>
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
            {user?.userRole === "2000" && `${user?.role} developer`}
          </b>
        </p>
      </div>
      <ul>
        <li onClick={(e) => handleNav("dashboard")}>Dashboard</li>
        <li onClick={(e) => handleNav("dashboard/complains")}>Complains</li>
        <li onClick={(e) => handleNav("dashboard/assignment")}>Assignments</li>
        <li onClick={(e) => handleNav("dashboard/notification")}>
          Notification
        </li>
        <li onClick={handleLogout} style={{ color: "red", fontSize: "larger" }}>
          Logout
        </li>
      </ul>
    </div>
  );
}

export default DashboardSideBar;
