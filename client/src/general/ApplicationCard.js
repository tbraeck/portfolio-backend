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
      <Card className={className}  style={{ width: '18rem', height: "550px" }}>
        <Card.Img variant="top" src={app.image} />
        <Card.Body>
          <Card.Title>{app.name.toUpperCase()}</Card.Title>
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
