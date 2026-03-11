// src/components/CreateTask.jsx
import React, { useState } from "react";
import app from "../firebase";
import { getDatabase, ref, set, push } from "firebase/database"
import { useNavigate } from "react-router-dom";

function Collection() {

  const navigate = useNavigate();



//   const [inputValue1, setInputValue1] = useState("");
//   const [inputValue2, setInputValue2] = useState("");
//   const [inputValue3, setInputValue3] = useState("");
//   const handleSubmit = async () => {
//     const db = getDatabase(app);
//     const Collection = push(ref(db, "Collection"));
//     set(Collection, {
//       MtgApi: inputValue1,
//       Quantity: inputValue2,
//       TagId: inputValue3
//     }).then(() => {
//       alert("Card successfully added to Collection");
//     }).catch((error) => {
//       alert("Error while creating Card", error.message, + " Please try again");
//     });
//   };
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleSubmit();
//     }
//   };
  return (
    <>
      <div>
        <h1>Collection</h1>
      
      </div>
    </>
  );
}
export default Collection;