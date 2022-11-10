import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCards from './ServiceCards';

const Services = () => {
    const services = useLoaderData()
    useTitle("Services")
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-3xl font-bold text-orange-400 text-center my-5'>SERVICES</h2>
            <div className='grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 p-10'>
                {
                    services.map( service=> <ServiceCards
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;