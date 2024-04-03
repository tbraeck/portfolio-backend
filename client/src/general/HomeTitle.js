import React, {  useRef } from 'react';
import { Link } from 'react-router-dom';
// import useSound from 'use-sound';

const HomeTitle = () => {
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

  // const scrollToSection = (elementRef) => {
  //   elementRef.current?.scrollIntoView({ block: "start", inline: "start", behavior: "smooth" });
  // };
  
  return (

    <div style={{width: "100vw"}}>
        <Link to='#/developer'  ref={developer} 
        onClick={() => scrollToSection(developer)} 
        className='devLink'>
          <h1
            className='changa-font1'
            style={{ display: "flex", flexDirection: "row" }}
          >
            DEVELOPER
          </h1>
        </Link>
        <Link to='#/designer' ref={designer} className='desLink'>
          <h1
            className='changa-font2'
            onClick={() => scrollToSection(designer)}
            style={{ display: "flex", flexDirection: "column" }}
          >
            DESIGNER
          </h1>
        </Link>
        <Link to='#/creator' ref={creator} className='creaLink'>
          <h1
            className='changa-font3'
            onClick={() => scrollToSection(creator)}
            style={{ display: "flex", flexDirection: "column", left: "150px" }}
          >
            CREATOR
          </h1>
        </Link>
    </div>
  );
};

export default HomeTitle;
