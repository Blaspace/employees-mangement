import React, { useContext, useState } from "react";
import UsersContext from "../context/UsersContext";
import AuthContext from "../context/AuthContext";

function ComplainBox({ value, setValue }) {
  const [complain, setComplain] = useState("");
  const { user } = useContext(UsersContext);
  const { uri } = useContext(AuthContext);
  const [type, setType] = useState(false);

  const handleResulved = (id, e) => {
    e.target.innerText = "Loading...";
    e.target.style.backgroundColor = "lightgray";
    e.target.disabled = true;
    fetch(`${uri}/resulve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    })
      .catch((err) => console.log(err))
      .finally(() => {
        e.target.innerText = "Resulved";
        e.target.style.backgroundColor = "#28354d65";
        e.target.disabled = false;
        setValue(null);
      });
  };

  const handleSend = (e) => {
    e.target.innerText = "Loading...";
    e.target.style.backgroundColor = "lightgray";
    e.target.disabled = true;
    fetch(`${uri}/complain`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        complain,
        userId: user?._id,
        assignmentId: value?._id,
      }),
    })
      .catch((err) => console.log(err))
      .finally(() => {
        e.target.innerText = "Send";
        e.target.style.backgroundColor = "#28354d65";
        e.target.disabled = false;
        setType(false);
        setValue(null);
      });
  };

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
              onClick={() => {
                setValue(null);
                setType(false);
              }}
            >
              &times;
            </h1>
            <h3>{value?.jobTitle}</h3>
            <br />
            <p>{value?.jobDescription}</p>
            <br />
            <span>
              <b>Assigned:</b> {value?.dateOfAssignment}
            </span>
            <br />
            <span>
              <b>To be submited:</b> {value?.dateOfSubmition}
            </span>
            <br />
            {!type && (
              <section>
                <button
                  onClick={(e) => handleResulved(value?._id, e)}
                  style={{ marginRight: "10px" }}
                >
                  Resulved
                </button>
                <button onClick={() => setType(true)}>Lay a complain</button>
              </section>
            )}
            <form>
              {type && (
                <>
                  <h3>Lay a complain if any</h3>
                  <br />
                  <textarea
                    placeholder="lay complain"
                    required
                    onChange={(e) => setComplain(e.target.value)}
                  />
                  <br />
                  <button onClick={handleSend}>Send</button>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ComplainBox;
