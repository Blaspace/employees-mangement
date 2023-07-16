import React from "react";
import img from "../utils/code.jpg";
import imge from "../utils/computer.jpg";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div>
          <h1>
            Full stack <span>web</span> development traning
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            dolore, enim asperiores debitis dicta dolorem maxime quis, ipsa
            ullam quam ut dolor velit amet sit commodi ipsam laborum soluta cum!
          </p>
          <br />
          <button onClick={() => navigate("/signup")}>Register</button>
        </div>
        <div>
          <img src={img} alt="code" className="img" />
          <img src={imge} alt="code" className="img2" />
        </div>
      </header>
    </>
  );
}

export default Header;
