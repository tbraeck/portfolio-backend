import React from 'react';
import { Link} from 'react-router-dom';
import ApplicationList from '../ApplicationList.js';

const Home = () => {
  
  

  return (
    <div className="home">
      <div className="background-image"></div>
      <div className="content">
        <div className="header-box">
          <div className="mainPageItemsContainer" key="mainPageItemsContainer">
            <div className="card-item" style={{ marginLeft: 'auto', marginRight: '20px' }}>
              <Link to={`/applications`} className="link header-link">
                <h1 className='category-column-h1' style={{ textAlign: 'center' }}>APPLICATIONS</h1>
              </Link>
              <div className="card-container" style={{ display: 'flex', padding: '20px', justifyContent: 'center' }}>
                <ApplicationList style={{marginRight: "10px"}}/>
                {/* Add more ApplicationList components as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Home;
