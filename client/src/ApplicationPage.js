import React, { useContext, useState } from 'react';
import { AppContext } from './contexts/AppContext';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ApplicationPage = () => {
    const {allApps} = useContext(AppContext)
    const { id } = useParams();

    const selectedApp = allApps.find((app) => app.id === parseInt(id));
   
    if (!selectedApp) {
      return <div>Loading...</div>;
    }

  return (
    <div className="full-height-page">
      <div className="full-width-page">
        {/* <h1 className="pageTitle">{selectedApp.name}</h1>
        <p className="pageDescription">Description: {selectedApp.description}</p>
        <p className="pageDescription">LINK: {selectedApp.link}</p>
        <p className="pageDescription">DEMO: {selectedApp.demo}</p>
        <img className='thumbImg' src={selectedApp.image} alt="Free Stuff" /> */}
        <Card style={{ width: '112rem', alignItems: "center" }}>
        <Card.Img style={{width: "18rem"}} variant="top" src={selectedApp.image} />
        <Card.Body>
          <Card.Title>{selectedApp.name}</Card.Title>
          <Card.Text>{selectedApp.description}</Card.Text>
          <Card.Text>{selectedApp.link}</Card.Text>
          <Card.Text>{selectedApp.demo}</Card.Text>
          {/* <Link to={`/apps/${selectedApp.id}`}>
            <Button variant="primary">GO TO: {selectedApp.name}</Button>
          </Link> */}
        </Card.Body>
      </Card>
      </div>
    </div> 
  )
}

export default ApplicationPage
