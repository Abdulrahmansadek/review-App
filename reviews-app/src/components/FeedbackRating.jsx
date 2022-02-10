import React, { useState } from "react";
import Rating from "./data/Rating";

function FeedbackRating({ select }) {
  const [selected, setSelected] = useState("10");
  const handleChange = (e) => {
    setSelected(+e.target.value);
    select(e.target.value);
  };

  return (
    <ul className="rating">
      {Rating.map((rate, index) => {
        return (
          <li key={index}>
            <input
              type="radio"
              id={`num${rate}`}
              name="rating"
              value={rate}
              onChange={handleChange}
              checked={selected === { rate }}
            />
            <label htmlFor={`num${rate}`}>{rate}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default FeedbackRating;
