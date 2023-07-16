import React from "react";
import { useNavigate } from "react-router";

function FirstSection() {
  const navigate = useNavigate();
  return (
    <section className="first-section">
      <h2>About our training</h2>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minima!
        Repudiandae omnis delectus quia dolorem, iure et quae molestiae vitae
        consequatur rem quaerat beatae eveniet ut. Odit soluta eligendi aliquam!
      </p>
      <br />
      <button onClick={() => navigate("/signup")}>register</button>
    </section>
  );
}

export default FirstSection;
