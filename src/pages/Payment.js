import React, { useContext } from "react";
import UserContexts from "../context/UsersContext.js";

function Payment() {
  const { users } = useContext(UserContexts);
  return <div className="payment"></div>;
}

export default Payment;
