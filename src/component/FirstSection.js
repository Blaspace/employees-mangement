import React from "react";
import { useNavigate } from "react-router";

function FirstSection() {
  const navigate = useNavigate();
  return (
    <section className="first-section">
      <h2>About Our Application</h2>
      <br />
      <p>
        Welcome to our Employee Management Application, a powerful tool designed
        to streamline employee management, boost productivity, and enhance
        collaboration. Whether you're an employee or a manager, our platform has
        something to offer for everyone.
      </p>
      <br />
      <button onClick={() => navigate("/login")}>Get Started</button>
    </section>
  );
}

export default FirstSection;
