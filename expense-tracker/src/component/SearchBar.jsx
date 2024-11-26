import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import 'boxicons'
import "../index.css";
import NewBudget from './NewBudget';

function SearchBar({ setBudget, toggleAddExpense }) {

  

  const[isNewBudgetModalOpen,setIsNewBudgetModalOpen]=useState(false)
     
  function handleAddBudget (){
    setIsNewBudgetModalOpen(true)
  }
 
  function closeModal (){
    setIsNewBudgetModalOpen(false)
  }
  

  return (
    <div className='search-bar'>
      <input type='text' placeholder='Search' />
      <div className='categories'>
        <button><box-icon name='pizza' type='solid' className='icon'></box-icon>Food & Drinks</button>
        <button><box-icon name='shopping-bag' className='icon'></box-icon>Groceries</button>
        <button><box-icon name='briefcase-alt' className='icon'></box-icon>Travel</button>
        <button><box-icon name='shield-plus' className='icon'></box-icon>Health</button>

        <button className='primary-button' onClick={handleAddBudget}>
          <box-icon name='plus' className='icon'></box-icon>Add Budget
        </button>

        {/* Button to trigger Add Expense */}
        <button className='secondry-button' style={{ background: '#5c6aff', color: '#ffffff' }} onClick={toggleAddExpense}>
          <box-icon name='plus' color='#ffffff'></box-icon>Add Expense
        </button>
      </div>
      {isNewBudgetModalOpen && <NewBudget setBudget={setBudget} closeModal={closeModal}/>}
    </div>
  );
}

export default SearchBar;