import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ApplicationCard = ({ app, className }) => {

    if (!app) {
        console.error("ApplicationCard: 'app' is undefined");
        return null;
      }

  return (
    <div key={app.id}>
      <Card className={className}  style={{ width: '18rem' }}>
        <Card.Img variant="top" src={app.image} />
        <Card.Body>
          <Card.Title>{app.name.toUpperCase()}</Card.Title>
          <Card.Text>{app.description}</Card.Text>
          <Link to={app.link} target="_blank" rel="noopener noreferrer">
            {app.name.toUpperCase()} GITHUB
          </Link>
          <Card.Text>{app.demo}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ApplicationCard;
