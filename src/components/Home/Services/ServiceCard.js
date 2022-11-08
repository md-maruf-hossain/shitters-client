import React from "react";
import { HiStar } from "react-icons/hi";

const ServiceCard = ({ service }) => {
  const { title, img, rating, price, description } = service;
  return (
    <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div class="px-4 py-2">
        <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{description.substring(0, 100)}...</p>
        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 flex items-center">Rating: {rating} <HiStar className="text-yellow-500 text-lg inline"/></p>
      </div>

      <img
        class="object-cover w-full h-48 mt-2"
        src={img} alt="NIKE AIR"
      />

      <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 class="text-lg font-bold text-orange-400">${price}</h1>
        <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
          Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
