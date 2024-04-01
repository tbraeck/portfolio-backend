import React from 'react';
import Card from 'react-bootstrap/Card';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';


const DesignCard = ({ app, className }) => {

  if (!app) {
    console.error("ApplicationCard: 'app' is undefined");
    return null;
  }

  console.log(app)
  return (
    <div key={app.id}>
      <Card className={className} style={{ width: '18rem', height: '375px', margin: '5px' }}>
        <Card.Body>
          <div>
            <Popup
              trigger={  <Card.Img variant="top" src={app.image} className="hover-zoom" style={{ width: '100%' }}/>}
            position="bottom "
              contentStyle={{ width: '500px', padding: '20px' }}
            >
              <div style={{ color: '#614E54'}}>
                <Card.Img variant="top" src={app.image} className="hover-zoom" style={{ width: '100%' }} />
                <ul>
                  <li>{app.description.toUpperCase()}</li>
                </ul>
              </div>
            </Popup>
          </div>
          <div style={{marginTop: "20px"}}>
          <Link to={`/apps/${app.id}`} >
          <Card.Text >{app.name.toUpperCase()}</Card.Text>
        </Link>
          </div>
          
          <Card.Text>{app.description}</Card.Text>
          <Link to={app.link} target="_blank" rel="noopener noreferrer">
            GITHUB
          </Link>
          <br />
          <Link to={app.demo} target="_blank" rel="noopener noreferrer">
            DEMO VIDEO
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DesignCard;
