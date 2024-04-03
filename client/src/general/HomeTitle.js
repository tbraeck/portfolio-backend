import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';

const HomeTitle = ({ sound, sound1, sound2 }) => {
  // const [isHovered, setIsHovered] = useState(null);
  // const [play] = useSound(null); 
  const developer = useRef(null);
  const designer = useRef(null);
  const creator = useRef(null);

  const scrollToSection = (elementRef) => {
    console.log('Scrolling to section...');
    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  

  // const handleHover = (element, sound) => {
  //   setIsHovered(element);
  //   playSound(sound); // Play the sound when hovering over an element
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(null);
  // };

  // const playSound = (sound) => {
  //   if (sound) {
  //     play({ src: sound, volume: 0.1 }); // Play the provided sound
  //   }
  // };

  return (
    <div style={{width: "100vw"}}>
      
        <Link to='#'  ref={developer} 
        onClick={() => scrollToSection(developer)} 
        className='devLink'>
          <h1
            className='changa-font1'
            // onMouseEnter={() => handleHover('developer', sound)}
            // onMouseLeave={handleMouseLeave}
            
            style={{ display: "flex", flexDirection: "row" }}
          >
            DEVELOPER
          </h1>
        </Link>
        <Link ref={designer} className='desLink'>
          <h1
            className='changa-font2'
            // onMouseEnter={() => handleHover('designer', sound1)}
            // onMouseLeave={handleMouseLeave}
            onClick={() => scrollToSection(designer)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            DESIGNER
          </h1>
        </Link>
        <Link ref={creator} className='creaLink'>
          <h1
            className='changa-font3'
            // onMouseEnter={() => handleHover('creator', sound2)}
            // onMouseLeave={handleMouseLeave}
            onClick={() => scrollToSection(creator)}
            style={{ display: "flex", flexDirection: "column", left: "150px" }}
          >
            CREATOR
          </h1>
        </Link>
      <div id='developer' className='developerSection'>
        <h2>Developer</h2>
      </div>
      <div id='designer' className='designerSection'>
        <h2>Designer</h2>
      </div>
      <div id='creator' className='creatorSection'>
        <h2>Creator</h2>
      </div>
      {/* {isHovered === 'developer' && sound1 && <audio autoPlay src={sound1} />}
      {isHovered === 'designer' && sound && <audio autoPlay src={sound} />}
      {isHovered === 'creator' && sound2 && <audio autoPlay src={sound2} />} */}
    </div>
  );
};

export default HomeTitle;
