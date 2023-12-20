import React, { useContext, useEffect, useState } from "react";
import UsersContext from "../context/UsersContext";
import AuthContext from "../context/AuthContext";

function Users({ setUserId, assignment, setNotify }) {
  const { users, user, setUsers } = useContext(UsersContext);
  const { uri } = useContext(AuthContext);
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    if (!users) {
      fetch(`${uri}/getusers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    const i = users?.filter((value) => {
      return value?.userRole === "2000" && value?._id !== user?._id;
    });
    setNewUsers(i);
  }, [users]);

  return (
    <>
      <table className="list">
        <tr className="list-header">
          <th>User Name</th>
          <th>User tittle</th>
          <th>Skills</th>
          <th>Jobs Assigned</th>
          <th>Actions</th>
        </tr>
        {newUsers?.map((value) => {
          const numAssignment = assignment?.filter(
            (ass) => ass?.userId === value?._id
          );

          return (
            <tr key={value?._id} className="list-ul">
              <td data-label="User name">{value?.fullName}</td>
              <td data-label="User tittle">
                {value?.userRole === "2000" ? "Employee" : "Admin"}
              </td>
              <td data-label="Team">{value?.role}</td>
              <td data-label="Jobs assigned">{numAssignment?.length}</td>
              <td data-label="Action">
                <button onClick={(e) => setUserId(value)}>Assign Job</button>
                <button onClick={(e) => setNotify(value)}>Notify</button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default Users;
