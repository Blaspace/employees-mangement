import React from "react";

function ComplainBox({ value, setValue }) {
  return (
    <>
      {value && (
        <div className="assignment-box">
          <div>
            <h1
              style={{
                color: "red",
                cursor: "pointer",
                fontWeight: "lighter",
                alignSelf: "end",
              }}
              onClick={() => setValue(null)}
            >
              &times;
            </h1>
            <h2>{value.jobTitle}</h2>
            <br />
            <p>{value.jobDescription}</p>
            <br />
            <span>
              <b>Assigned:</b> {value.dateOfAssignment}
            </span>
            <br />
            <span>
              <b>To be submited:</b> {value.dateOfSubmition}
            </span>
            <br />
            <h3>Lay a complain if any</h3>
            <form>
              <textarea placeholder="lay complain" />
              <br />
              <button>Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ComplainBox;
