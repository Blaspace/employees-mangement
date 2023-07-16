import React, { useContext, useEffect, useState } from "react";
import Courses from "../component/Courses";
import Assignment from "../component/Assignment";
import Users from "../component/Users";
import UsersContext from "../context/UsersContext";
import AssignJob from "../component/AssignJob";

function Profile() {
  const { user } = useContext(UsersContext);
  const [userId, setUserId] = useState(null);
  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getassignment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setAssignment(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="body">
      <Courses />
      {user?.userRole === "2000" ? (
        <Assignment assignment={assignment} />
      ) : (
        <Users setUserId={setUserId} assignment={assignment} />
      )}
      {userId && (
        <AssignJob
          userId={userId}
          setUserId={setUserId}
          setAssignment={setAssignment}
          assignment={assignment}
        />
      )}
    </div>
  );
}

export default Profile;
