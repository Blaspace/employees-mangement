import React from "react";
import img from "../utils/admin.PNG";

function SecondSection() {
  return (
    <div className="second-section">
      <h2>Manager Dashboard</h2>
      <br />
      <br />
      <div className="admin">
        <div>
          <p>
            With the Manager Dashboard, you can effortlessly manage your team,
            allocate tasks, and maintain a high level of organization within
            your workforce. Whether it's keeping track of employee assignments
            or ensuring smooth leave management, this tool simplifies the
            process, leaving you more time to focus on what matters most
            achieving your team's goals.
          </p>
          <br />
          <p>You can login as Samuel who is a manager:</p>
          <p>
            <b>Email:</b> samuel@gmail.com
          </p>
          <p>
            <b>Password:</b> samuel1234
          </p>
        </div>
        <span>
          <img src={img} alt="hello" />
        </span>
      </div>
    </div>
  );
}

export default SecondSection;
