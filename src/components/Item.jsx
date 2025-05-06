import Button from "./Button";

const Item = ({ index, className, item, price, date, onDelete }) => {
  return (
    <>
      <div key={index} className={className}>
        <p>Item: {item}</p>
        <p>Price: ${price}</p>
        <p>Date: {date}</p>
        <Button className="delete-btn" onClick={() => onDelete(index)}>
          Delete
        </Button>
      </div>
    </>
  );
};

export default Item;
