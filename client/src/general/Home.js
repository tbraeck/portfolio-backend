import React from 'react';
import HomeTitle from './HomeTitle';
// import { Link } from 'react-router-dom';
import Header from './Header';
import Logo from './Logo';
import About from '../About';
// import Background from './Background';
// import ApplicationList from '../ApplicationList.js';

const Home = () => {
  return (
        <div className='homeContainer' >
      <div>
        <div className="logo">
          <Logo />
        </div>
        <div className='homeTitle'>
          <HomeTitle />
        </div>
      
        <div className="header">
          <Header />
        </div>
        <div style={{paddingBottom: "50px"}}>
          <About/>
        </div>

      </div>
    </div>

  );
};

export default Home;


