import React, { useContext, useState } from "react";
import UsersContext from "../context/UsersContext";
import AssignmentBox from "./AssignmentBox";

function List({ assignment }) {
  const { user } = useContext(UsersContext);
  const [value, setValue] = useState(null);

  const userAssignment = assignment.filter((ass) => ass.userId === user._id);

  return (
    <div className="list">
      <ul className="list-header">
        <li>Job Title</li>
        <li>Job Description</li>
        <li>Date Of Asignment</li>
        <li>Job Duration</li>
        <li>actions</li>
      </ul>
      {userAssignment?.map((value) => {
        return (
          <ul
            key={value._id}
            className="list-ul"
            onClick={() => setValue(value)}
          >
            <li>
              {value.jobTitle.slice(0, 15)}
              {value.jobTitle.length <= 15 && "..."}
            </li>
            <li>
              {value.jobDescription.slice(0, 20)}
              {value.jobTitle.length <= 20 && "..."}
            </li>
            <li>
              {value.dateOfAssignment.slice(0, 20)}
              {value.jobTitle.length <= 20 && "..."}
            </li>
            <li>{value.dateOfSubmition}</li>
            <li>
              <button onClick={() => alert("hello")}>done</button>
            </li>
          </ul>
        );
      })}
      <AssignmentBox value={value} setValue={setValue} />
    </div>
  );
}

export default List;
