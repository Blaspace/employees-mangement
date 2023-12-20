import React from "react";
import img from "../utils/img9.webp";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div>
          <h1>Employee Management Application</h1>
          <br />
          <p>A Comprehensive Solution for Efficient Workforce Management</p>
          <br />
          <button onClick={() => navigate("/login")}>Get Started</button>
        </div>
        <section>
          <span className="img">
            <img src={img} alt="code" />
          </span>
        </section>
      </header>
    </>
  );
}

export default Header;
