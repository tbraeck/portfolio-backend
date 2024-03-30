import React, { useContext } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { AppContext } from './contexts/AppContext';
import NavigationButtons from './general/NavigationButtons';

const ApplicationPage = () => {
    const { allApps } = useContext(AppContext);
    const { id } = useParams();

    const selectedApp = allApps.find((app) => app.id === parseInt(id));
   
    if (!selectedApp) {
      return <div>Loading...</div>;
    }

    return (
        <div className="full-height-page">
          <NavigationButtons/>
            <Card style={{ marginTop: "0px" }}>
                <ReactPlayer url={selectedApp.demo} controls width="100%" />
                <Card.Body>
                    <Card.Title>{selectedApp.name}</Card.Title>
                    <Card.Text>{selectedApp.description}</Card.Text>
                    <Link to={selectedApp.link} target="_blank" rel="noopener noreferrer">
                        GITHUB
                    </Link>
                    {/* <br />
                    <Link to={selectedApp.demo} target="_blank" rel="noopener noreferrer">
                        DEMO
                    </Link> */}
                </Card.Body>
            </Card>
            <div style={{display: "flex", flexDirection: "row"}}>
                    
            </div>
        </div>
    );
}

export default ApplicationPage;
