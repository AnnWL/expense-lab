import React from "react";

const Display = ({ expenses, onDelete }) => {
  return (
    <>
      <div className="ExpenseItemsDiv">
        {expenses.map((expense, index) => {
          return (
            <div key={index} className="ExpenseItem">
              <p>Item: {expense.item}</p>
              <p>Price: ${expense.price}</p>
              <p>Date: {expense.date}</p>
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Display;
