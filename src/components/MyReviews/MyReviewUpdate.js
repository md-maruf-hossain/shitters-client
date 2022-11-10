import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyReviewUpdate = () => {
  const review = useLoaderData();
  const [update, setUpdate] = useState(review);
  
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(update);
  };
  const handleChange = (e) => {
    const updateReview = e.target.reviewText;
    const reviewFieldValue = e.target.value;
    const newReview = { ...update };
    newReview[updateReview] = reviewFieldValue;
    setUpdate(newReview);
  };
  return (
    <div className="my-10">
      <h2 className="text-3xl text-center">Update {review.userName}'s Review:</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="reviewText" defaultValue={review.reviewText} placeholder="Type here" onChange={handleChange} className="input input-bordered input-lg w-full max-w-xs" />
        <button type="submit" className="btn my-4">
          Update
        </button>
      </form>
    </div>
  );
};

export default MyReviewUpdate;
