import React, { useContext} from 'react';
import { Link} from 'react-router-dom';
import ApplicationCard from './general/ApplicationCard';
import { AppContext } from './contexts/AppContext';

const ApplicationList = () => {
    const {allApps} = useContext(AppContext)
   
    const everyApp = allApps.map(app => (
      <div key={app.id} className="card-item">
      <Link to={`/apps/${app.id}`} className="link">
        <ApplicationCard app={app} />
      </Link>
    </div>
      ));

  return (
    <div className="card-container">
            {everyApp}
    </div>
  )
}

export default ApplicationList
