import React from 'react';
import HomeTitle from './HomeTitle';
// import { Link } from 'react-router-dom';
import Header from './Header';
import Logo from './Logo';
import About from '../About';
import BackgroundImg1 from './BackgroundImg1';
import pianoSound1 from './piano1.mp3'; 
import pianoSound2 from './piano2.mp3';
import pianoSound3 from './piano3.mp3';
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
          <HomeTitle sound={pianoSound1} sound1={pianoSound2} sound2={pianoSound3}/>
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


