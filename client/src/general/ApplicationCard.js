import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from '../contexts/AppContext';

const ApplicationCard = () => {
    const {allApps, setAllApps} = useContext(AppContext)


  return (
    <div>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={allApps.image} />
      <Card.Body>
        <Card.Title>{allApps.name}</Card.Title>
        <Card.Text>
          {allApps.description}
        </Card.Text>
        <Card.Text>
            <Link>
                {allApps.link}
            </Link>
        </Card.Text>
        <Card.Text>
            <Link>
                {allApps.demo}
            </Link>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default ApplicationCard
