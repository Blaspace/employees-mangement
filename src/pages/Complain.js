import React, { useState, useContext, useEffect } from "react";
import AllComplain from "../component/AllComplain";
import { AiOutlineLoading } from "react-icons/ai";
import UsersContext from "../context/UsersContext";

function Complain() {
  const [loading, setLoading] = useState(true);
  const [complain, setComplain] = useState([]);
  const { user, users, assignment } = useContext(UsersContext);

  const handleGetComplains = () => {
    fetch("http://localhost:5000/allcomplain", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setComplain(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  useEffect(handleGetComplains, [assignment, users]);
  return (
    <div className="body">
      <br />
      <br />
      {loading ? (
        <AiOutlineLoading size={50} className="loader" />
      ) : (
        <AllComplain complain={complain} />
      )}
    </div>
  );
}

export default Complain;
