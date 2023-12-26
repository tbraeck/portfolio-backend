import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ApplicationCard = ({ app }) => {

    if (!app) {
        console.error("ApplicationCard: 'app' is undefined");
        return null;
      }
      
  return (
    <div key={app.id}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={app.image} />
        <Card.Body>
          <Card.Title>{app.name}</Card.Title>
          <Card.Text>{app.description}</Card.Text>
          <Card.Text>{app.link}</Card.Text>
          <Card.Text>{app.demo}</Card.Text>
          <Link to={`/apps/${app.id}`}>
            <Button variant="primary">GO TO: {app.name}</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ApplicationCard;
