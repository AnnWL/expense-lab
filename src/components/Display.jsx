import Item from "./Item";

const Display = ({ expenses, onDelete }) => {
  return (
    <>
      <div className="ExpenseItemsDiv">
        {expenses.map((expense, index) => {
          return (
            <Item
              key={index}
              index={index}
              className="ExpenseItem"
              item={expense.item}
              price={expense.price}
              date={expense.date}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default Display;
