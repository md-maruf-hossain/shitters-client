import React from "react";

const Statistics = () => {
  return (
    <div className="my-10">
    <section>
        <h2 className="text-3xl uppercase font-bold text-center text-orange-500">Our Achievements</h2>
    </section>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
            <p className="text-sm sm:text-base text-orange-600">Happy Clients</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
            <p className="text-sm sm:text-base text-orange-600">Followers on social media</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">20+</p>
            <p className="text-sm sm:text-base text-orange-600">Professional Services</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">200+</p>
            <p className="text-sm sm:text-base text-orange-600">Successful Events</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">5+</p>
            <p className="text-sm sm:text-base text-orange-600">Years of experience</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">12+</p>
            <p className="text-sm sm:text-base text-orange-600">Workshops</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
