import React from "react";
import img from "../utils/empoyee.PNG";

function ThirdSection() {
  return (
    <div className="third-section">
      <h2>Manager Dashboard</h2>
      <br />
      <br />
      <div className="admin">
        <span>
          <img src={img} alt="hello" />
        </span>
        <div>
          <p>
            The employee dashboard is a centralized space for efficient project
            management. Upon login, employees find a curated list of assignments
            and projects, each with clear details and deadlines. The dashboard
            enables quick access to project briefs and tasks, promoting
            effective workflow planning. Employees can mark tasks as resolved
            directly from the dashboard, facilitating seamless communication
            with managers. This user-friendly interface encourages collaboration
            and empowers employees to contribute effectively to the
            organization's success.
          </p>
          <br />
          <p>You can login as Daniel who is an employee:</p>
          <p>
            <b>Email:</b> daniel@gmail.com
          </p>
          <p>
            <b>Password:</b> daniel1234
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
