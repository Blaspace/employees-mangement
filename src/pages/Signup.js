import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Signup() {
  const [fullName, setFullname] = useState("");
  const { uri } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    fetch(`${uri}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        password,
      }),
    }).then(() => navigate("/login"));
  };

  return (
    <div className="login">
      <form onSubmit={(e) => e.preventDefault()}>
        <br />
        <label>Full name</label>
        <input
          type="text"
          placeholder="full name..."
          name="name"
          onChange={(e) => setFullname(e.target.value)}
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          placeholder="email..."
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Phone number</label>
        <input
          type="tel"
          placeholder="phone number..."
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="password..."
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleSignUp}>Signup</button>
        <br />
        <p>
          already have an account <NavLink to={"/login"}>Login</NavLink>
        </p>
        <br />
      </form>
    </div>
  );
}

export default Signup;
