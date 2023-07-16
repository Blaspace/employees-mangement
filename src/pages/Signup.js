import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const selectRef = useRef();

  const handleSignUp = () => {
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        password,
        role: selectRef.current.value,
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
        <select ref={selectRef}>
          <option>Select your role</option>
          <option>Front end</option>
          <option>Back end</option>
          <option>Full stack</option>
        </select>
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