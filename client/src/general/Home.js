import React, {useContext} from 'react';
import { Link} from 'react-router-dom';
import { AppContext } from '../contexts/AppContext.js';
import ApplicationPage from '../ApplicationPage.js';

const Home = () => {
  const { allApps, setAllApps } = useContext(AppContext)
  
  const theApps = allApps.map((app) => (
    <div key={app.id} className="forum-item">
          <Link to={`/apps/${app.id}`} className="link">
            <h2>{app.name}</h2>
            <img src={app.image} alt="app image"/>
          </Link>
    </div>
  ));
  

  return (
    <div className="home">
      {/* <div className='searchBar'><SearchBar/></div> */}
      <div className="background-image"></div>
      <div className="content">
        <div className="header-box">
          <div className="mainPageItemsContainer" key="mainPageItemsContainer">
          <div className="category-column" style={{ backgroundColor: '#ffb3ba' }}>
              <Link to={`/applications`} className="link header-link">
                <h1 className='category-column-h1'>APPLICATIONS</h1>
              </Link>
              {theApps}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Home;
