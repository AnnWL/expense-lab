import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const handleDelete = (indexToDelete) => {
    const newExpenses = expenses.filter((_, index) => index !== indexToDelete);
    setExpenses(newExpenses);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <br />
      <Form setExpenses={setExpenses} expenses={expenses} />
      <Display expenses={expenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
