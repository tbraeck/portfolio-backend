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
    <div style={{marginRight: "100px"}}>
      <button className="button-image" style={{fontSize: "50px", backgroundColor: "#80e5fb", border: "none", }} onClick={handleGoBack}>
      ◀
        {/* <img src='/6.png' style={{width: "60px"}} alt='Go Back' className="button-image" /> */}
      </button>
      <button className="button-image" style={{fontSize: "50px", backgroundColor: "#80e5fb", border: "none"}} onClick={handleGoForward}>
      ▶
        {/* <img src='/5.png'style={{width: "60px", }} alt='Go Forward' className="button-image" /> */}
      </button>
    </div>
  );
};

export default NavigationButtons;
