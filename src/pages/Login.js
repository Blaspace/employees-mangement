import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { CgProfile } from "react-icons/cg";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { setAuth } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const body = { email, password };

    fetch("http://localhost:5000/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        setAuth(data);
        navigate("/dashboard");
      })
      .catch((err) => {
        alert("wrong user name/password");
      });
  };
  return (
    <div className="login">
      <form>
        <br />
        <CgProfile className="i" />
        <br />
        <label>Email</label>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label>Password</label>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button onClick={(e) => handleLogin(e)}>Login</button>
        <br />
        <p>
          Don't have an account!. <NavLink to={"/signup"}>Signup</NavLink>
        </p>
        <br />
      </form>
    </div>
  );
}

export default Login;
