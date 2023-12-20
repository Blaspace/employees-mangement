import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { setAuth, uri } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    e.target.innerText = "Loading...";
    e.target.style.backgroundColor = "grey";
    e.target.disabled = true;

    const body = { email, password };

    fetch(`${uri}/login`, {
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
      })
      .finally(() => {
        e.target.innerText = "Login";
        e.target.style.backgroundColor = "#fa163c";
        e.target.disabled = false;
      });
  };
  return (
    <div className="login">
      <form>
        <br />
        <h1>Login</h1>
        <br />
        <label>Email</label>
        <input
          type="text"
          placeholder="email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label>Password</label>
        <input
          type="text"
          placeholder="password..."
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
        <div>
          <section>
            <p>
              <b>Manager:</b>
            </p>
            <p>
              <b>Email:</b> samuel@gmail.com
            </p>
            <p>
              <b>Password:</b> samuel1234
            </p>
          </section>
          <section>
            <p>
              <b>Employee:</b>
            </p>
            <p>
              <b>Email:</b> daniel@gmail.com
            </p>
            <p>
              <b>Password:</b> daniel1234
            </p>
          </section>
        </div>
        <br />
      </form>
    </div>
  );
}

export default Login;
