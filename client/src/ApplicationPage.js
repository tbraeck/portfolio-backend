import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from './contexts/AppContext';

const ApplicationPage = () => {
    const {allApps, setAllApps} = useContext(AppContext)
    // const selectedApp = allApps.find((app) => app.id === parseInt(id));
    const { id } = useParams();
    
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
console.log(everyApp)
  return (
      <div className="full-height-page">
      <div className="full-width-page">
        <h1 className="pageTitle">{everyApp.name}</h1>
        <p className="pageDescription">Description: {everyApp.description}</p>
        <p className="pageDescription">LINK: {everyApp.link}</p>
        <p className="pageDescription">DEMO: {everyApp.demo}</p>
        <img className='thumbImg' src={everyApp.image} alt="app" />
        {/* <button className="crudButton saveButton" onClick={handleContact}>REPLY</button>  */}
        {/* {showMessageForm && <Chat handleSend={handleSend}/>} */}
      </div>
    </div>  
  )
}

export default ApplicationPage
