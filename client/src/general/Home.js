import React from 'react';
import HomeTitle from './HomeTitle';
// import { Link } from 'react-router-dom';
import Header from './Header';
import Logo from './Logo';
import About from '../About';
import BackgroundImg1 from './BackgroundImg1';
import swooshSound from './swoosh.mp3'; 
import oughSound from './ough.mp3';
import punchSound from './punch.mp3';
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
          <HomeTitle sound={swooshSound} sound1={punchSound} sound2={oughSound}/>
        </div>
        <div className="header">
          <Header />
        </div>
        <div style={{paddingBottom: "50px"}}>
          <About/>
        </div>
        <div>

        </div>

      </div>
    </div>

  );
};

export default Home;


