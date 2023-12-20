import React, { useContext, useEffect, useState } from "react";
import UsersContext from "../context/UsersContext";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLoading } from "react-icons/ai";

function AllComplain({ complain }) {
  const { user, users, assignment } = useContext(UsersContext);

  return (
    <div className="all-complain">
      {complain?.map((value) => {
        let singleUser = users?.filter((j) => j?._id === value?.userId);
        let singleAssignment = assignment?.filter(
          (y) => y?._id === value?.assignmentId
        );

        return (
          <div key={value?._id}>
            <h3>
              <CgProfile size={30} />
              <span> {singleUser && singleUser[0]?.fullName}</span>
            </h3>
            <p>{value?.complain}</p>
            <section>
              <h4>{singleAssignment && singleAssignment[0]?.jobTitle}</h4>
              <p>{singleAssignment && singleAssignment[0]?.jobDescription}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default AllComplain;
