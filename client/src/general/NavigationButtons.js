import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationButtons = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  const handleGoForward = () => {
    navigate(1); 
  };

  return (
    <div style={{marginRight: "200px",}}>
      <button className="button-image" style={{fontSize: "70px", backgroundColor: "#e3e1e1", border: "none", color: "gray", margin: "20px"  }} onClick={handleGoBack}>
      ◀
        {/* <img src='/6.png' style={{width: "60px"}} alt='Go Back' className="button-image" /> */}
      </button>
      <button className="button-image" style={{fontSize: "70px", backgroundColor: "#e3e1e1", border: "none", color: "gray" }} onClick={handleGoForward}>
      ▶
        {/* <img src='/5.png'style={{width: "60px", }} alt='Go Forward' className="button-image" /> */}
      </button>
    </div>
  );
};

export default NavigationButtons;
