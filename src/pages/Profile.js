import React, { useContext, useEffect, useState } from "react";
import Courses from "../component/Courses";
import Assignment from "../component/Assignment";
import Users from "../component/Users";
import UsersContext from "../context/UsersContext";
import AssignJob from "../component/AssignJob";
import AuthContext from "../context/AuthContext";
import Notify from "../component/Notify";
import { AiOutlineLoading } from "react-icons/ai";

function Profile() {
  const { user } = useContext(UsersContext);
  const [loading, setLoading] = useState(true);
  const { uri } = useContext(AuthContext);
  const [userId, setUserId] = useState(null);
  const [assignment, setAssignment] = useState([]);
  const [notify, setNotify] = useState();

  useEffect(() => {
    fetch(`${uri}/getassignment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setAssignment(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="body">
      <Courses />
      {loading ? (
        <AiOutlineLoading size={50} className="loader" />
      ) : (
        <div>
          {user?.userRole === "2000" ? (
            <Assignment assignment={assignment} />
          ) : (
            <Users
              setUserId={setUserId}
              assignment={assignment}
              setNotify={setNotify}
            />
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
      )}
      {notify && <Notify setNotify={setNotify} userId={notify?._id} />}
    </div>
  );
}

export default Profile;
