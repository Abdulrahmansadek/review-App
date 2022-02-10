import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbackData, onDeleteItem }) {
  if (!feedbackData || feedbackData.length === 0) {
    return <p>No feedback yet</p>;
  }
  const deleteItem = (id) => {
    onDeleteItem(id);
  };
  return (
    <div className="feedback-list">
      {feedbackData.map((item) => {
        return (
          <FeedbackItem
            key={item.id}
            items={item}
            handleDeleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
}

export default FeedbackList;
