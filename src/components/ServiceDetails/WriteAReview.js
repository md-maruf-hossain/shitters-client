import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { HiUser } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const WriteAReview = () => {
  const { user } = useContext(AuthContext);
  const { _id } = useLoaderData();

  const handleReviewSubmission = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewText = form.review.value;
    form.reset();

    const review = {
      reviewText: reviewText,
      serviceId: _id,
      userEmail: user?.email || "No email found",
      userPhoto: user?.photoURL || <HiUser />,
      userName: user?.displayName || "No username found",
    };

    fetch("https://shutters-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully added");
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="p-5">
      <div>
        <h2 className="text-2xl text-center font-bold my-5">Write a review</h2>
        <form onSubmit={handleReviewSubmission}>
          <div className="mt-1 py-5 ">
            <textarea
              id="review"
              name="review"
              rows={5}
              cols={100}
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm border-2 sm:text-sm"
              placeholder="Your review here"
              defaultValue={""}
              required
            />
          </div>
          <button type="submit" className="px-5 py-3 font-semibold border-2 border-gray-300 rounded hover:bg-orange-400">
            Post Review
          </button>
          <div>
            <Toaster />
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteAReview;
