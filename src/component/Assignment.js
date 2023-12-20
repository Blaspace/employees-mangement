import React, { useContext, useState } from "react";
import UsersContext from "../context/UsersContext";
import AssignmentBox from "./AssignmentBox";

function List({ assignment }) {
  const { user } = useContext(UsersContext);
  const [value, setValue] = useState(null);

  const userAssignment = assignment?.filter(
    (ass) => ass?.userId === user?._id && !ass?.resulved
  );

  return (
    <table className="list">
      <tr className="list-header">
        <th>Job Title</th>
        <th>Job Description</th>
        <th>Date Of Assignment</th>
        <th>Job Duration</th>
      </tr>
      {userAssignment?.map((value) => {
        return (
          <tr
            key={value?._id}
            className="list-ul"
            onClick={() => setValue(value)}
          >
            <td data-label="Job Title">
              <span>{value?.jobTitle}</span>
            </td>
            <td data-label="Job Description">
              <span>
                {value?.jobDescription?.slice(0, 20)}
                {value?.jobDescription?.length >= 20 && (
                  <span style={{ color: "grey" }}>...</span>
                )}
              </span>
            </td>
            <td data-label="Date Of Assignment">
              <span> {value?.dateOfAssignment.slice(0, 10)}</span>
            </td>
            <td data-label="Job Duration">
              <span>{value?.dateOfSubmition}</span>
            </td>
          </tr>
        );
      })}
      <AssignmentBox value={value} setValue={setValue} />
    </table>
  );
}

export default List;
