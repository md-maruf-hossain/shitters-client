import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { GiPriceTag } from "react-icons/gi";
import { HiStar } from "react-icons/hi";
import ServiceReview from "./ServiceReview";
const ServiceDetails = () => {
  const { title, img, rating, price, description } = useLoaderData();
  return (
    <div className="flex flex-col items-center my-5">
      {/* details */}
      <div className="w-3/4 p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="space-y-4">
          <div className="space-y-2">
            <img src={img} alt="" className="block object-cover object-center w-full rounded-md dark:bg-gray-500" />
            <div className="flex items-center text-xs"></div>
          </div>
          <div className="space-y-2">
            <Link rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-2xl font-semibold dark:text-violet-400">{title}</h3>
            </Link>
            <p className="leading-snug text-justify dark:text-gray-400">{description}</p>
            <div className="flex justify-between">
              <p className="leading-snug dark:text-gray-400 text-xl font-semibold flex items-center">
                <GiPriceTag className="text-emerald-600 text-2xl mr-2" /> Price: ${price}
              </p>
              <p className="leading-snug dark:text-gray-400 text-xl font-semibold flex items-center">
                Rating: {rating} <HiStar className="text-yellow-500 text-2xl ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------
                review 
        ----------------------*/}
      <ServiceReview/>
    </div>
  );
};

export default ServiceDetails;
