import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import "boxicons";
import "../index.css";

function NewBudget({ setBudget, closeModal }) {
  const [newBudget, setNewBudget] = useState("");

  const handleSaveBudget = () => {
    if (newBudget && !isNaN(newBudget)) {
      setBudget(parseFloat(newBudget));
      closeModal();
    } else {
      alert("Please enter a valid number for the budget.");
    }
  
  
  };
  return (
    <div className="new-budget">
      <div className="budget-header">
        <span onClick={closeModal}>
          <i className="bx bx-x" ></i> {/* Cancel icon */}
        </span>
      </div>
      <label>New Budget : </label>
      <input type="number" placeholder="amount" value={newBudget} onChange={(e)=>setNewBudget(e.target.value)}></input>

      <button onClick={handleSaveBudget}>Save</button>
    </div>
  );
}

export default NewBudget;
