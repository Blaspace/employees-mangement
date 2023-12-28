import React, { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  //const uri = "http://localhost:5000";

  const uri = "https://employee-server-5yst.onrender.com";

  const handleLogout = () => {
    fetch(`${uri}/logout`, {
      method: "POST",
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        setAuth(null);
      } else {
        return;
      }
    });
  };

  const refresh = () => {
    fetch(`${uri}/refresh`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 401) {
          handleLogout();
        }
      })
      .then((data) => setAuth(data))
      .catch((err) => console.log(err));
  };
  setTimeout(refresh, 1000 * 60 * 5);
  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogout, refresh, uri }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
