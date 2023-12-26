import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import ApplicationCard from './general/ApplicationCard';
import { useParams } from 'react-router-dom';
import { AppContext } from './contexts/AppContext';

const ApplicationList = () => {
    const {allApps} = useContext(AppContext)
   
    console.log(allApps)
    const everyApp = allApps.map(app => (
        <div key={app.id}>
          <Link to={`/apps/${app.id}`} className="link">
            <ApplicationCard app={app}/>  
          </Link>  
        </div>
      ));

  return (
    <div className="forum-container">
    <div className="forum-list">
      {everyApp}
    </div>
  </div>  
  )
}

export default ApplicationList
