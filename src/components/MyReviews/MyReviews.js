import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MyReviewsCard from "./MyReviewsCard";

const MyReviews = () => {
  useTitle("My Reviews");

  const { user } = useContext(AuthContext);
  const [queryReviews, setQueryReviews] = useState([]);

  console.log(user);

  useEffect(() => {
    fetch(`https://shutters-server.vercel.app/review?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setQueryReviews(data));
  }, [user.email]);
  console.log(queryReviews);
  const handleDelete = (id) => {
    console.log(id);
    const deleteData = window.confirm("Are you se to delete this data?");
    if (deleteData) {
      fetch(`https://shutters-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("data deleted");
            const remaining = queryReviews.filter((rv) => rv._id !== id);
            setQueryReviews(remaining);
          }
        });
    }
  };
  const handleEdit = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Review</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {queryReviews
              .sort((a, b) => (a._id < b._id ? 1 : -1))
              .map((queryReview) => (
                <MyReviewsCard key={queryReview?._id} handleDelete={handleDelete} queryReview={queryReview} handleEdit={handleEdit} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
