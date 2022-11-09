import React, { useEffect, useState } from 'react';
import ServiceReviewCard from './ServiceReviewCard';

const ServiceReview = () => {
    const [reviews, setReview] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

    return (
        <div className='grid gap-5 grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                reviews.map(review => <ServiceReviewCard key={review._id} review={review}/>)
            }
        </div>
    );
};

export default ServiceReview;