import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const Services = () => {
    const services = useLoaderData();
    return (
        <div className='mt-14 flex flex-col items-center'>
            <h2 className='text-4xl font-bold text-orange-500 text-center mb-5'>Services</h2>
            <div className='grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                {
                    services.slice(0, 3).map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
            <Link to='/services' className='text-lg font-semibold mt-10 hover:text-orange-500 hover:underline flex items-center'>See More <HiOutlineArrowNarrowRight className='ml-1'/></Link>
        </div>
    );
};

export default Services;