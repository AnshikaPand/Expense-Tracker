import React from "react";
import "../index.css";

function FinancialStatus({ budget, title, iconClick = () => {}}) {
  return (
    <>
      <div className="FinancialStatus-Div">
        <p>{title}</p>
        <i className="bx bx-edit-alt icon-with-blue-background " onClick={iconClick}></i>
        <h3>₹{budget}/m</h3>
        {/* {children}  */}
        {/* Render the children passed to the component */}
      </div>
    </>
  );
}

export default FinancialStatus;
