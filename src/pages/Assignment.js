import React, { useContext, useEffect, useRef, useState } from "react";
import UsersContext from "../context/UsersContext";
import AuthContext from "../context/AuthContext";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLoading } from "react-icons/ai";

function Assignment() {
  const { assignment, user, setAssignment, users } = useContext(UsersContext);
  const [userAssignment, setUserAssignment] = useState([]);
  const [loading, setLoading] = useState(true);
  const { uri } = useContext(AuthContext);

  const stat = useRef();

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
  useEffect(() => {
    /* if (stat.innerText === "Resulved") {
      stat.current.style.color = "green";
    } else {
      stat.current.style.color = "black";
    }*/
  }, []);

  useEffect(() => {
    if (user?.userRole === "1999") {
      const i = assignment?.filter((v) => v?.adminId === user?._id);
      setUserAssignment(i);
    } else if (user?.userRole === "2000") {
      const j = assignment?.filter((v) => v?.userId === user?._id);
      setUserAssignment(j);
    }
  }, [assignment]);
  console.log(userAssignment?.length);

  return (
    <div className="body">
      <br />
      <br />
      {loading ? (
        <AiOutlineLoading size={50} className="loader" />
      ) : (
        <>
          {userAssignment?.map((value) => {
            const currentUser = users?.filter((v) => v?._id === value?.userId);
            const currentAdmin = users?.filter(
              (v) => v?._id === value?.adminId
            );
            return (
              <div key={value?._id} className="assignment-slice">
                <div>
                  <h3>
                    <CgProfile size={25} />{" "}
                    <small>{currentUser[0]?.fullName}</small>
                  </h3>
                  <p>
                    <b> {value?.jobTitle}</b>
                  </p>
                  <p>{value?.jobDescription}</p>
                </div>
                <span ref={stat} style={{ fontWeight: "600" }}>
                  {value?.resulved ? "Resulved" : "Pendding..."}
                </span>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Assignment;
