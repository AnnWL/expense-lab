import { useState } from "react";
import Button from "./Button";
import Label from "./Label";
import Input from "./Input";

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
          <Label htmlFor="item">Item:</Label>
          <Input
            id="item"
            name="item"
            value={newExpense.item}
            onChange={handleInputChange}
          />
        </li>
        <li>
          <Label htmlFor="price">Price:</Label>
          <Input
            id="price"
            name="price"
            value={newExpense.price}
            onChange={handleInputChange}
          />
        </li>
        <li>
          <Label htmlFor="date">Date:</Label>
          <Input
            id="date"
            name="date"
            value={newExpense.date}
            onChange={handleInputChange}
          />
        </li>
        <br />
        <Button type="submit" className="submit-btn">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
