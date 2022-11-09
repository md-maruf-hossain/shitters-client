import React from "react";

const ServiceReviewCard = ({ review }) => {
  const { reviewText, userEmail, userPhoto, userName } = review;
  return (
    <div>
      <div className="flex gap-5 p-5">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
            <img src={userPhoto} alt="" />
          </div>
        </div>
        <div>
          <h2>name: {userName}</h2>
          <h2>email: {userEmail}</h2>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p>{reviewText}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceReviewCard;
