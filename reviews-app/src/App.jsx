import "./App.css";
import { useState } from "react";
import data from "./components/data/data";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [reviews, setReviews] = useState(data);
  const handleDeleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete the Item ?")) {
      setReviews(
        reviews.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };
  const handleAddingItem = (newItem) => {
    setReviews([newItem, ...reviews]);
  };

  return (
    <>
      <Header />

      <div className="container">
        <FeedbackForm onAddItem={handleAddingItem} />
        <FeedbackStats feedbackData={reviews} />
        <FeedbackList feedbackData={reviews} onDeleteItem={handleDeleteItem} />
      </div>
    </>
  );
}

export default App;
