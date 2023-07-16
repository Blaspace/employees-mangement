import React, { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import UsersContext from "../context/UsersContext";

function AssignJob({ userId, setUserId, setAssignment, assignment }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const { user } = useContext(UsersContext);

  const handleSend = () => {
    const date = new Date();
    fetch("http://localhost:5000/assignment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobTitle: title,
        jobDescription: description,
        dateOfAssignment: date,
        dateOfSubmition: duration,
        userId: userId?._id,
        adminId: user._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => setAssignment([...assignment, data]))
      .catch((err) => {
        alert("error");
        console.log(err);
      })
      .finally(() => setUserId(null));
  };
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
          onClick={() => setUserId(null)}
        >
          &times;
        </h1>
        <span>
          <CgProfile style={{ fontSize: "40px" }} />
          <p>{userId.fullName}</p>
        </span>
        <br />
        <h4>{userId.fullName} Skills:</h4>
        <ul></ul>
        <br />
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Job Title: </label>
          <input
            type="text"
            placeholder="job title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label>Job Description: </label>
          <textarea
            type="text"
            placeholder="job description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <label>to be submited: </label>
          <input
            type="date"
            placeholder="to be submited"
            onChange={(e) => setDuration(e.target.value)}
          />
          <br />
          <button onClick={handleSend}>send</button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default AssignJob;
