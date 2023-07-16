import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <h1>tier</h1>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li>Home</li>
        <li onClick={() => navigate("/signups")}>register</li>
      </ul>
      <button onClick={() => navigate("/login")}>Login</button>
    </nav>
  );
}

export default Nav;
