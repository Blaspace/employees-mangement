import React, { useState, useContext, useEffect } from "react";
import AllComplain from "../component/AllComplain";
import { AiOutlineLoading } from "react-icons/ai";
import UsersContext from "../context/UsersContext";
import AuthContext from "../context/AuthContext";

function Complain() {
  const [loading, setLoading] = useState(true);
  const [complain, setComplain] = useState([]);
  const { user, users, assignment } = useContext(UsersContext);
  const { uri } = useContext(AuthContext);

  const handleGetComplains = () => {
    fetch(`${uri}/allcomplain`, {
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
