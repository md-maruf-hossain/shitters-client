import React from 'react';
import useTitle from '../../hooks/useTitle';
import Header from './Header';
import PhotoGallery from './PhotoGallery';
import Services from './Services/Services';
import Statistics from './Statistics';
import Subscribe from './Subscribe';

const Home = () => {
    useTitle("Home")
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