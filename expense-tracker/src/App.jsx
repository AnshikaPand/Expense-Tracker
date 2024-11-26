import { useState } from "react";
import 'boxicons/css/boxicons.min.css';
import "./App.css";
import Navbar from "./component/Navbar";
import FinancialStatus from "./component/FinancialStatus";
import SearchBar from "./component/SearchBar";
import ExpenseTable from "./component/ExpenseTable";
import AddExpense from "./component/AddExpense";
import NewBudget from "./component/NewBudget";

function App() {
  const [budget, setBudget] = useState(10000);
  const [isEditing, setIsEditing] = useState(false); 

   

  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false); 

 




  const [expenses, setExpenses] = useState([
    { date: "21-10-2024", name: "Groceries", amount: 1200 },
    { date: "21-10-2024", name: "Travel", amount: 3500 },
    { date: "21-10-2024", name: "Health", amount: 3500 },
    { date: "21-10-2024", name: "kuchbhi", amount: 3500 },
    { date: "21-10-2024", name: "Travel", amount: 3500 },
    { date: "21-10-2024", name: "Travel", amount: 3500 },
  ]);

  const [totalExpense, setTotalExpense] = useState(
    expenses.reduce((sum, expense) => sum + expense.amount  , 0)
  );

  // Handle Add or Edit Expense
  const handleAddOrEditExpense = (expense, isEditing = false, index = null) => {
    if (isEditing) {
      const updatedExpenses = [...expenses];
      const oldAmount = updatedExpenses[index].amount;
      updatedExpenses[index] = expense;
      setExpenses(updatedExpenses);
      setTotalExpense(totalExpense - oldAmount + expense.amount);
    } else {
      setExpenses([...expenses, expense]);
      setTotalExpense(totalExpense + expense.amount);
    }
  };

  // Handle Delete Expense
  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    setTotalExpense(totalExpense - updatedExpenses[index].amount);
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  // Toggle visibility of AddExpense form
  const toggleAddExpense = () => {
    setShowAddExpenseForm((prev) => !prev); // Toggle the modal visibility
  };

  
  

  return (
    <>
      <Navbar />
      <div className="user-name">
        <h1>Hello, Anshika</h1>
      </div>

      <div className="FinancialStatus-wrapper">
        <FinancialStatus>
          <p>Your Budget</p>
          <i className="bx bx-edit-alt icon-with-blue-background "></i>
          <h3>₹{budget}/m</h3>
        </FinancialStatus>

        <FinancialStatus>
          <p>Total Expense</p>
          <i className="bx bx-line-chart icon-with-blue-background"></i>
          <h3>₹{totalExpense}</h3>
        </FinancialStatus>

        <FinancialStatus>
          <p>Remaining Budget</p>
          <i className="bx bx-line-chart icon-with-blue-background"></i>
          <h3>₹{budget - totalExpense}</h3>
        </FinancialStatus>
      </div>

      {/* SearchBar and Add Expense buttons */}
      <div className="search-bar-wrapper">
        <SearchBar setBudget={setBudget} toggleAddExpense={toggleAddExpense} />
      </div>

      {/* Expense Table */}
      <div className="expense-list-wrapper">
        <ExpenseTable
          expenses={expenses}
          onDeleteExpense={handleDeleteExpense}
          onEditExpense={handleAddOrEditExpense}
        />
      </div>
       

      {/* Conditionally render the AddExpense component */}
      {showAddExpenseForm && (
        <AddExpense
          onSaveExpense={handleAddOrEditExpense}
          onCancel={toggleAddExpense}
        />
      )}
     
    

    </>
  );
}

export default App;
