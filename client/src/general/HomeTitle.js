import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';

const HomeTitle = ({ sound, sound1, sound2 }) => {
  const [isHovered, setIsHovered] = useState(null);
  const [play] = useSound(null); 
  const developer = useRef(null);
  const designer = useRef(null);
  const creator = useRef(null);


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const handleHover = (element, sound) => {
    setIsHovered(element);
    playSound(sound); // Play the sound when hovering over an element
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const playSound = (sound) => {
    if (sound) {
      play({ src: sound, volume: 0.1 }); // Play the provided sound
    }
  };

  return (
    <div>
      <div>
        <Link ref={developer} className='devLink'>
          <h1
            className='changa-font1'
            onMouseEnter={() => handleHover('developer', sound)}
            // onMouseLeave={handleMouseLeave}
            onClick={() => scrollToSection(developer)}
            style={{ display: "flex", flexDirection: "row" }}
          >
            DEVELOPER
          </h1>
        </Link>
      </div>
      <div>
        <Link ref={designer} className='desLink'>
          <h1
            className='changa-font2'
            onMouseEnter={() => handleHover('designer', sound1)}
            onMouseLeave={handleMouseLeave}
            onClick={() => scrollToSection(designer)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            DESIGNER
          </h1>
        </Link>
      </div>
      <div>
        <Link ref={creator} className='creaLink'>
          <h1
            className='changa-font3'
            onMouseEnter={() => handleHover('creator', sound2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => scrollToSection(creator)}
            style={{ display: "flex", flexDirection: "column", left: "150px" }}
          >
            CREATOR
          </h1>
        </Link>
      </div>
      {isHovered === 'developer' && sound1 && <audio autoPlay src={sound1} />}
      {isHovered === 'designer' && sound && <audio autoPlay src={sound} />}
      {isHovered === 'creator' && sound2 && <audio autoPlay src={sound2} />}
    </div>
  );
};

export default HomeTitle;
