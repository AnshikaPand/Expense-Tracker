import React, { useEffect, useState } from "react";
import 'boxicons/css/boxicons.min.css';
import 'boxicons';
import "../index.css";

function AddExpense({ expense, onSaveExpense, onCancel }) {
  const [expenseData, setExpenseData] = useState({
    date: "",
    name: "",
    amount: "",
  });

  useEffect(() => {
    if (expense) {
      setExpenseData({
        date: expense.date,
        name: expense.name,
        amount: expense.amount,
      });
    }
  }, [expense]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log("Submitting expense data:", expenseData); // Log the expense data
  
    if (expenseData.date && expenseData.name && expenseData.amount) {
      console.log("Saving expense data:", expenseData);
      
      // Call onSaveExpense with all required parameters
      onSaveExpense(expenseData, expense ? true : false, expense ? expense.index : null);
  
      // Clear form and close the modal
      setExpenseData({ date: "", name: "", amount: "" });
      onCancel();
    } else {
      console.log("Please fill out all fields before submitting."); // Log missing fields
    }
  };
  

  return (
    <div className="add-expense">
      <div className="header">
        <p><strong>{expense ? "AddEditExpense" : "AddNewExpense"}</strong></p>
        <span onClick={onCancel}>
          <i className="bx bx-x"></i> {/* Cancel icon */}
        </span>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="date"
          value={expenseData.date}
          onChange={(e) => setExpenseData({ ...expenseData, date: e.target.value })}
        />
        <br />
        <label>Expense:</label>
        <select
          value={expenseData.name}
          onChange={(e) => setExpenseData({ ...expenseData, name: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="Food & Drinks">Food & Drink</option>
          <option value="Health">Health</option>
          <option value="Travel">Travel</option>
          <option value="Groceries">Groceries</option>
        </select>
        <br />
        <label>Amount:</label>
        <input
          type="number"
          value={expenseData.amount}
          onChange={(e) => setExpenseData({ ...expenseData, amount: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddExpense;
