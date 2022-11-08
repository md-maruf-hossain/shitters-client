import React from "react";
import toast, { Toaster } from "react-hot-toast";
import cover from "../../assets/subscription.jpg";

const Subscribe = () => {
  const handleSubscribe = (event) =>{
    event.preventDefault();
    toast.success('Subcribed Successfully!');
    event.target.reset();
  }
  return (
    <div>
      <div className="w-full dark:bg-gray-500" style={{ backgroundImage: `url(${cover})` }}>
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center text-orange-400 dark:text-gray-100">Get Our Updates</h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100 text-white">Find out about events and other news</p>
          <form onSubmit={handleSubscribe} className="flex flex-row">
            <Toaster/>
            <input type="email" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" required/>
            <button type="submit" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-orange-400">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
