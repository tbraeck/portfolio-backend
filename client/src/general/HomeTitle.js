import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';

const HomeTitle = ({ sound, sound1, sound2 }) => {
  const [isHovered, setIsHovered] = useState(null);
  const [play] = useSound(null); // Initialize the play function

  const handleHover = (element, sound) => {
    setIsHovered(element);
    playSound(sound); // Play the sound when hovering over an element
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const playSound = (sound) => {
    if (sound) {
      play({ src: sound, volume: 0.5 }); // Play the provided sound
    }
  };

  return (
    <div>
      <div>
        <Link to="/developer" className='devLink'>
          <h1
            className='changa-font1'
            onMouseEnter={() => handleHover('developer', sound)}
            onMouseLeave={handleMouseLeave}
            style={{ display: "flex", flexDirection: "row" }}
          >
            DEVELOPER
          </h1>
        </Link>
      </div>
      <div>
        <Link to="/designer" className='desLink'>
          <h1
            className='changa-font2'
            onMouseEnter={() => handleHover('designer', sound1)}
            onMouseLeave={handleMouseLeave}
            style={{ display: "flex", flexDirection: "column" }}
          >
            DESIGNER
          </h1>
        </Link>
      </div>
      <div>
        <Link to="/creator" className='creaLink'>
          <h1
            className='changa-font3'
            onMouseEnter={() => handleHover('creator', sound2)}
            onMouseLeave={handleMouseLeave}
            style={{ display: "flex", flexDirection: "column", left: "150px" }}
          >
            CREATOR
          </h1>
        </Link>
      </div>
      {/* Conditional rendering of audio based on the hovered element */}
      {isHovered === 'developer' && sound && <audio autoPlay src={sound} />}
      {isHovered === 'designer' && sound1 && <audio autoPlay src={sound1} />}
      {isHovered === 'creator' && sound2 && <audio autoPlay src={sound2} />}
    </div>
  );
};

export default HomeTitle;
