import React from "react";

const myServices = () => {
  return (
    <div className="my-10">
      <h2 className="text-center text-3xl font-bold">Add more services </h2>
      <form className="flex flex-col  items-center">
        {/* ---------------- */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Service ID (It should be unique)</span>
          </label>
          <input type="text" name="id" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
        </div>
        {/* ---------------- */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name="title" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
        </div>
        {/* ---------------- */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input type="text" name="imgURL" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
        </div>
        {/* ---------------- */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Ratings</span>
          </label>
          <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
        </div>
        {/* ---------------- */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
        </div>
        {/* ---------------- */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name="description" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
        </div>
        {/* ---------------- */}
        <button className="btn mt-5 bg-orange-500 text-black hover:bg-orange-300">Submit</button>
      </form>
    </div>
  );
};

export default myServices;
