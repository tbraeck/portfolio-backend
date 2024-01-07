import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ApplicationCard = ({ app, className }) => {

    if (!app) {
        console.error("ApplicationCard: 'app' is undefined");
        return null;
      }

  return (
    <div key={app.id} >
      <Card className={className}  style={{ width: '18rem', height: "450px" }}>
        <Card.Img variant="top" src={app.image} />
        <Card.Body>
          <Link to={`/apps/${app.id}`} >
        {app.name.toUpperCase()}
          </Link>
          <Card.Text>{app.description}</Card.Text>
          <Link to={app.link} target="_blank" rel="noopener noreferrer">
           GITHUB
          </Link>
          <br></br>
          <Link to={app.demo} target="_blank" rel="noopener noreferrer">
           DEMO VIDEO
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ApplicationCard;
