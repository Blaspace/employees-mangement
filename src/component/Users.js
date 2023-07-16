import React, { useContext } from "react";
import UsersContext from "../context/UsersContext";

function Users({ setUserId, assignment }) {
  const { users, user } = useContext(UsersContext);

  const Users = users?.filter((value) => {
    return value?.role === user?.role && value?._id !== user?._id;
  });

  return (
    <>
      <div className="list">
        <ul className="list-header">
          <li>user Name</li>
          <li>User tittle</li>
          <li>Team</li>
          <li>jobs assigned</li>
          <li>actions</li>
        </ul>
        {Users?.map((value) => {
          const numAssignment = assignment?.filter(
            (ass) => ass.userId === value?._id
          );

          return (
            <ul key={value?._id} className="list-ul">
              <li>{value?.fullName}</li>
              <li>{value?.userRole === "2000" ? "Employee" : "Admin"}</li>
              <li>{value?.role}</li>
              <li>{numAssignment?.length}</li>
              <li>
                <button onClick={(e) => setUserId(value)}>Assign job</button>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}

export default Users;
