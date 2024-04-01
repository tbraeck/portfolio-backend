import React, { useContext } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { AppContext } from './contexts/AppContext';
import NavBar from './general/NavBar';
import NavigationButtons from './general/NavigationButtons';

const ApplicationPage = () => {
    const { allApps } = useContext(AppContext);
    const { id } = useParams();

    const selectedApp = allApps.find((app) => app.id === parseInt(id));
   
    if (!selectedApp) {
      return <div>Loading...</div>;
    }

    return (
        <div className="app-height-page">
           
            <Card style={{ marginTop: "20px", marginBottom: "20px", display: "flex", flexDirection: "column" }}>
                <ReactPlayer url={selectedApp.demo}   
                playing={true}
                controls width="100%" />
                <Card.Body>
                    <Card.Title>{selectedApp.name}</Card.Title>
                    <Card.Text>{selectedApp.description}</Card.Text>
                    <Link to={selectedApp.link} target="_blank" rel="noopener noreferrer">
                        GITHUB
                    </Link>
                    <div className='appTechnologies'>
                        <h3>Technologies:</h3>
                        <ul>
                            {Object.entries(selectedApp.technologies).map(([key, value]) => (
                                <li key={key}>
                                    <strong>{key}: </strong>{value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ApplicationPage;
