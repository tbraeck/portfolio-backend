import React, {useContext} from 'react'
import { AppContext } from './contexts/AppContext'

const ApplicationList = () => {
    const {allApps, setAllApps} = useContext(AppContext)

    const everyApp = allApps.map(app => (
        <div key={app.id}>
          <h1>{app.name}</h1>
          <p>{app.description}</p>
          <div>
            <a href={app.link} target="_blank" rel="noopener noreferrer">LINK TO APP</a>
          </div>
          <div>
            <a href={app.demo} target="_blank" rel="noopener noreferrer">DEMO</a>
          </div>
        </div>
      ));
  return (
    <div>
       <ul>
        {everyApp}
      </ul>
    </div>
  )
}

export default ApplicationList
