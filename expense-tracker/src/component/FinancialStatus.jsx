import React from 'react'
import "../index.css";

function FinancialStatus({children}) {
  return (
    <>
    <div className="FinancialStatus-Div">
      {children} {/* Render the children passed to the component */}
    </div>
     
    </>
   
  )
}

export default FinancialStatus
