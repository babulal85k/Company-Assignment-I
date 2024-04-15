import React from 'react';
import NavBar from '../component/NavBar';
import Navigation from '../component/Navigation';
import './Home.css';
import Carousel from '../component/Carousel';

const Home = () => {
  return (
    <>
        <NavBar />
        <Navigation />
        <Carousel />
    </>
  )
}

export default Home;