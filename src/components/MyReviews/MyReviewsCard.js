import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const MyReviewsCard = ({ queryReview, handleDelete, handleEdit }) => {
  const { userName, reviewText, _id } = queryReview;
  console.log(userName);

  return (
    <tr>
      <td>{userName}</td>
      {reviewText ? <td>{reviewText}</td> : "No reviews are available"}
        <td>
      <Link to={`/myreviewedit/${_id}`}>
          <button onClick={() => handleEdit(_id)}>
            <AiOutlineEdit />
          </button>
      </Link>
        </td>
      <td>
        <button onClick={() => handleDelete(_id)}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default MyReviewsCard;
