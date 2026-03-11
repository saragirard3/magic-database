// src/components/CreateTask.jsx
import React, { useState } from "react";
import app from "../firebase";
import { getDatabase, ref, set, push } from "firebase/database"
import { useNavigate } from "react-router-dom";

function AddCard() {

  const navigate = useNavigate();

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const handleSubmit = async () => {
    const db = getDatabase(app);
    const Collection = push(ref(db, "Collection"));
    set(Collection, {
      MtgApi: inputValue1,
      Quantity: inputValue2,
      TagId: inputValue3
    }).then(() => {
      alert("Card successfully added to Collection");
    }).catch((error) => {
      alert("Error while adding Card", error.message, + " Please try again");
    });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <>
      <div>
        <h1></h1>
        <input type="text"
          value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} onKeyDown={handleKeyDown}
        />
        <input type="text"
          value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>Create Task</button>
        <button onClick={() => navigate("/Read")}>Go To Read</button>
        <button onClick={() => navigate("/Update")}>Go To Update Task</button>
      </div>
    </>
  );
}
export default CreateTask;