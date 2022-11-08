import React from 'react';
import Header from './Header';
import PhotoGallery from './PhotoGallery';
import Services from './Services/Services';
import Statistics from './Statistics';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <Statistics/>
            <PhotoGallery/>
            <Subscribe/>
        </div>
    );
};

export default Home;