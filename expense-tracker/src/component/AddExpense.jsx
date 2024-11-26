import React, { useState } from "react";
import 'boxicons/css/boxicons.min.css';
import 'boxicons';
import "../index.css";

function AddExpense({ onSaveExpense, onCancel }) {
  const [expense, setExpense] = useState({
    date: "",
    name: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.date && expense.name && expense.amount) {
      onSaveExpense(expense); // Save the expense to the parent
      setExpense({ date: "", name: "", amount: "" }); // Clear form
      onCancel(); // Close the form after submit
    }
  };

  return (
    <div className="add-expense">
      <div className="header">
        <p><strong>Add New Expense</strong></p>
        <span onClick={onCancel}>
          <i className="bx bx-x"></i> {/* Cancel icon */}
        </span>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="date"
          value={expense.date}
          onChange={(e) => setExpense({ ...expense, date: e.target.value })}
        />
        <br />
        <label>Expense:</label>
        <input
          type="text"
          value={expense.name}
          onChange={(e) => setExpense({ ...expense, name: e.target.value })}
        />
        <br />
        <label>Amount:</label>
        <input
          type="number"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddExpense;
