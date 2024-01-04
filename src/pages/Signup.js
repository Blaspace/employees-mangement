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

  const handleSignUp = (e) => {
    e.target.innerText = "Loading...";
    e.target.style.backgroundColor = "grey";
    e.target.disabled = true;

    fetch(`${uri}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 409) {
          throw "You already have an acount";
        } else {
          throw "Server Error";
        }
      })
      .then((data) => navigate("/login"))
      .catch((err) => alert(err))
      .finally(() => {
        e.target.innerText = "Login";
        e.target.style.backgroundColor = "#fa163c";
        e.target.disabled = false;
      });
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
        <button onClick={(e) => handleSignUp(e)}>Signup</button>
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
