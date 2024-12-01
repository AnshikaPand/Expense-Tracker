import React from 'react'
import "../index.css";

function ExpenseTable({ expenses, onDeleteExpense, onEditExpense }) {

  
  const handleEditClick = (index) => {
    const expenseToEdit = expenses[index];
    const updatedExpense = { ...expenseToEdit, name: prompt("Enter new name:", expenseToEdit.name) || expenseToEdit.name };
    const updatedAmount = parseInt(prompt("Enter new amount:", expenseToEdit.amount), 10) || expenseToEdit.amount;
    onEditExpense({ ...updatedExpense, amount: updatedAmount }, true, index);
  };

  
  return (
    <div className='expense-table-container'>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Date</th>
            <th>Expense</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{expense.date}</td>
              <td>{expense.name}</td>
              <td>₹{expense.amount}</td>
              <td>
                <button onClick={() => handleEditClick(index)}className=''>Edit</button>
                <button onClick={() => onDeleteExpense(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// console.log(expense)

export default ExpenseTable

