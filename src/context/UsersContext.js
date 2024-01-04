import React, { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [assignment, setAssignment] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [notification, setNotification] = useState([]);
  const { uri } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${uri}/getuser`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`${uri}/getusers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`${uri}/getassignment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setAssignment(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <UsersContext.Provider
      value={{
        user,
        users,
        setUser,
        setUsers,
        assignment,
        setAssignment,
        setToggle,
        toggle,
        setNotification,
        notification,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export default UsersContext;
