import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import FeedbackRating from "./FeedbackRating";
import { v4 as uuidv4 } from "uuid";

function FeedbackForm({ onAddItem }) {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState(null);
  const [rating, setRating] = useState(10);

  const handleChange = (e) => {
    if (text === "") {
      setDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setDisabled(true);
      setMessage("the text must be at least 10 characters");
    } else {
      setDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSelect = (rating) => {
    setRating(rating);
  };

  const newItem = {
    id: uuidv4(),
    rating,
    text,
  };

  const addNewItem = (e) => {
    e.preventDefault();
    onAddItem(newItem);
  };
  return (
    <Card>
      <form onSubmit={addNewItem}>
        <h2>How would you rate your service with us?</h2>
        <FeedbackRating select={handleSelect} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleChange}
          />

          <Button type="submit" isDisabled={disabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
