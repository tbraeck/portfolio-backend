import React from 'react';
import Card from 'react-bootstrap/Card';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';

const ApplicationCard = ({ app, className }) => {

    if (!app) {
        console.error("ApplicationCard: 'app' is undefined");
        return null;
      }

      
  return (
    <div key={app.id} >
      <Card className={className}  style={{ width: '18rem', height: "450px", margin: "30px" }}>
      <Link to={`/apps/${app.id}`} >
                    <Card.Img 
                    variant="top" 
                    src={app.image} 
                    className="hover-zoom"  />
                </Link>

        <Card.Body>
    <div>
            <Popup trigger=
                { <h3 >
                {app.name.toUpperCase()}
                  </h3>}
                position="right center">
                <div>
                 <ul>
                  <li>
                    {app.name.toUpperCase()}
                  </li>
                  <li>
                    {app.description.toUpperCase()}
                  </li>
                 </ul>
                </div>
            </Popup>
        </div>
         
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
