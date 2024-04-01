import React, { useContext} from 'react';
import { Link} from 'react-router-dom';
import ApplicationCard from './general/ApplicationCard';
import NavigationButtons from './general/NavigationButtons';
import NavBar from './general/NavBar';
import { AppContext } from './contexts/AppContext';

const ApplicationList = () => {
    const {allApps} = useContext(AppContext)
   
    const everyApp = allApps.map(app => (
      <div key={app.id} className="card-item">
       <ApplicationCard app={app} />
      <Link to={`/apps/${app.id}`} className="link">
      </Link>
    </div>
      ));

  return (
    <div className='appList' style={{justifyContent: "center", alignItems: "center"}}>
    
      <h1 >Development Examples</h1>
      <div className="card-container" >
        {everyApp}
      </div>
    </div>
   
  )
}

export default ApplicationList
