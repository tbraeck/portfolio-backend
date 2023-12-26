import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from './contexts/AppContext';
import { useParams } from 'react-router-dom';

const ApplicationPage = () => {
    const {allApps, setAllApps} = useContext(AppContext)
    const { id } = useParams();

    const selectedApp = allApps.find((app) => app.id === parseInt(id));
   
    if (!selectedApp) {
      return <div>Loading...</div>;
    }

  return (
    <div className="full-height-page">
      <div className="full-width-page">
        <h1 className="pageTitle">{selectedApp.name}</h1>
        <p className="pageDescription">Description: {selectedApp.description}</p>
        <p className="pageDescription">LINK: {selectedApp.link}</p>
        <p className="pageDescription">DEMO: {selectedApp.demo}</p>
        <img className='thumbImg' src={selectedApp.image} alt="Free Stuff" />

      </div>
    </div> 
  )
}

export default ApplicationPage
