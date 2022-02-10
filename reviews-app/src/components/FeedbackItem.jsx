import React from "react";
import Card from "./UI/Card";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ items, handleDeleteItem }) {
  const deleteItem = () => {
    handleDeleteItem(items.id);
  };
  return (
    <Card>
      <div className="num-display">{items.rating} </div>
      <button className="close" onClick={deleteItem}>
        <FaTimes />
      </button>
      <div className="text-display">{items.text}</div>
    </Card>
  );
}

export default FeedbackItem;
