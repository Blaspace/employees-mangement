import React, { useContext, useEffect, useState } from "react";
import AllNotification from "../component/AllNotification";
import UsersContext from "../context/UsersContext";
import AuthContext from "../context/AuthContext";
import { AiOutlineLoading } from "react-icons/ai";

function Notification() {
  const { setNotification } = useContext(UsersContext);
  const { uri } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${uri}/notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setNotification(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="body">
      <br />
      <br />
      <>
        {loading ? (
          <AiOutlineLoading size={50} className="loader" />
        ) : (
          <AllNotification />
        )}
      </>
    </div>
  );
}

export default Notification;
