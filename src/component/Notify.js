import React, { useState, useContext, useEffect } from "react";
import UsersContext from "../context/UsersContext";
import AuthContext from "../context/AuthContext";

function Notify({ setNotify, userId }) {
  const [message, setMessage] = useState(null);
  const [currentUser, setCurrentUser] = useState([]);
  const { user, setNotification, users } = useContext(UsersContext);
  const { uri } = useContext(AuthContext);
  const handleSend = (e) => {
    e.target.innerText = "Loading...";
    e.target.style.backgroundColor = "lightgray";
    e.target.disabled = true;
    fetch(`${uri}/notify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        userId,
        senderId: user?._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setNotification(data);
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        e.target.innerText = "Send";
        e.target.style.backgroundColor = "#28354d65";
        e.target.disabled = false;
        setNotify(null);
      });
  };
  useEffect(() => {
    const x = users?.filter((i) => i?._id === userId);
    setCurrentUser(x);
  }, []);
  return (
    <div className="asign-con">
      <div className="asign" style={{ position: "relative" }}>
        <h1
          style={{
            color: "red",
            position: "absolute",
            right: "20px",
            cursor: "pointer",
            fontWeight: "lighter",
          }}
          onClick={() => {
            setNotify(null);
          }}
        >
          &times;
        </h1>

        <h3>Send a Notification to: {currentUser[0]?.fullName}</h3>
        <br />
        <form onSubmit={(e) => e.preventDefault()}>
          <textarea
            placeholder="lay complain"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <button onClick={handleSend}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Notify;
