import React from 'react'
import { useState } from 'react'
import useSound from 'use-sound'
import ragSound from './ragtime.mp3'


const Logo = () => {
  const soundUrl = ragSound;
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const [play] = useSound(soundUrl, { volume: 0.1 });

  const handleHover = () => {
    if (!isButtonHovered) {
      play();
      setIsButtonHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsButtonHovered(false);
  };

  return (
    <div>
       <a href='http://localhost:4000' className="logo" style={{ marginLeft: '50px', marginRight: '20px' }}>
                <img src="/LOGO.ico" style={{ width: "350px", display: "flex", flexDirection: "column" }} alt="Portfolio Logo" 
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}/>
        </a>
    </div>
  )
}

export default Logo
