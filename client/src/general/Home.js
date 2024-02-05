import React from 'react';
import HomeTitle from './HomeTitle';
// import { Link } from 'react-router-dom';
import Header from './Header';
// import ApplicationList from '../ApplicationList.js';

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="header-box">
          <div className="mainPageItemsContainer" key="mainPageItemsContainer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <a href='https://tate-braeckel-web-dev-portfolio.onrender.com/' className="logo" style={{ marginLeft: '50px', marginRight: '20px' }}>
              <img src="/LOGO.ico" style={{ width: "350px", display: "flex", flexDirection: "column" }} alt="Portfolio Logo" />
            </a>
            <HomeTitle />
          </div>
          <div>
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


