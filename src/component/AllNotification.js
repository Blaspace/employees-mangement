import React, { useContext, useEffect, useState } from "react";
import UsersContext from "../context/UsersContext";

function AllNotification() {
  const [notif, setNotif] = useState([]);
  const { notification, user, users } = useContext(UsersContext);

  useEffect(() => {
    console.log(notification);
    if (user?.userRole === "1999") {
      setNotif(notification);
    } else {
      const x = notification?.filter((i) => user?._id === i?.userId);
      setNotif(x);
    }
  }, [user]);
  return (
    <div className="notification">
      {notif?.map((value) => {
        const sender = users?.filter((v) => v?._id === value?.senderId);
        const messageFor = users?.filter((v) => v?._id === value?.userId);
        return (
          <div key={value?._id}>
            <p>
              <b>{sender[0]?.fullName}</b> sent a notification to
              <b> {messageFor[0]?.fullName}</b>
            </p>
            <p>{value?.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllNotification;
