import React from "react";

function FeedbackStats({ feedbackData }) {
  let averageRating =
    feedbackData.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbackData.length;
  averageRating = averageRating.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedbackData.length} Reviews</h4>
      <h4>Average rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
}

export default FeedbackStats;
