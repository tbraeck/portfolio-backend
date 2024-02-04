import React from 'react';
import { Link } from 'react-router-dom';
import ApplicationList from '../ApplicationList.js';

const Home = () => {
  return (
    <div className="home">
      {/* <div className="background-image" style={{ marginLeft: "50px" }} ></div> */}
      <div className="content">
        <div className="header-box">
          <div className="mainPageItemsContainer" key="mainPageItemsContainer">
          {/* <div>
              <img
                src='./ME.jpeg'
                alt='myImage'
                style={{
                  width: "250px",
                  height: "auto",
                  marginLeft: "200px", // Adjust the marginLeft value
                  marginTop: "90px",  // Adjust the marginTop value
                }}
              />
            </div> 
             <div className="card-item" style={{ marginLeft: 'auto', marginRight: '220px', maxWidth: "900px" }}>
              <Link to={`/applications`} className="link header-link">
                <h1 className='category-column-h1' style={{ textAlign: 'center', marginBottom: "0px" }}>APPLICATIONS</h1>
              </Link>
              <div className="card-container" style={{ display: 'flex', padding: '0px', justifyContent: 'center' }}>
                <ApplicationList style={{ marginRight: "10px" }} />
              </div>
            </div> */}
            
            <div>
              <h1 className='changa-font'>WEB DEVELOPER</h1>
            </div>
            <div>
              <h1 className='changa-font'>DESIGNER</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
