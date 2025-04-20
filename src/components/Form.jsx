import React, { useState } from "react";

const Form = ({ expenses, setExpenses }) => {
  const currentDate = new Date().toISOString().split("T")[0];
  const initExpense = { item: "", price: 0, date: currentDate };
  const [newExpense, setNewExpense] = useState(initExpense);

  const handleInputChange = (event) => {
    setNewExpense({ ...newExpense, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setExpenses([...expenses, newExpense]);
    setNewExpense(initExpense);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <li>
          <label htmlFor="item">Item: </label>
          <input
            id="item"
            name="item"
            value={newExpense.item}
            onChange={handleInputChange}
          />
        </li>
        <li>
          <label htmlFor="price">Price: </label>
          <input
            id="price"
            name="price"
            value={newExpense.price}
            onChange={handleInputChange}
          />
        </li>
        <li>
          <label htmlFor="date">Date: </label>
          <input
            id="date"
            name="date"
            value={newExpense.date}
            onChange={handleInputChange}
          />
        </li>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
