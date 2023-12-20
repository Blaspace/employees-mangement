import React from "react";
import { useNavigate } from "react-router";

function Nav() {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.open("http://localhost:3000/login");
  };
  return (
    <nav className="nav">
      <h1>tier</h1>
      <ul>
        <a href="#first">
          <li>About</li>
        </a>
        <a href="#second">
          <li>Admin</li>
        </a>
        <a href="#third">
          <li>Employee</li>
        </a>
        <a href="#fourth">
          <li>Aim</li>
        </a>
      </ul>
      <button onClick={() => handleLogin()}>Login</button>
    </nav>
  );
}

export default Nav;
