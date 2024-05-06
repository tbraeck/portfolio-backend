import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const HomeTitle = () => {
  const developer = useRef(null);
  const designer = useRef(null);
  const creator = useRef(null);

  const scrollToSection = (elementRef) => {
    console.log('Scrolling to section...');
    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <div>
        <Link to='/' ref={developer} onClick={() => scrollToSection(developer)} className='devLink'>
          <h1 className='changa-font1'>DEVELOPER</h1>
        </Link>
      </div>
      <div>
        <Link to='/' ref={designer} onClick={() => scrollToSection(designer)} className='desLink'>
          <h1 className='changa-font2'>DESIGNER</h1>
        </Link>
      </div>
      <div>
        <Link to='/' ref={creator} onClick={() => scrollToSection(creator)} className='creaLink'>
          <h1 className='changa-font3'>CREATOR</h1>
        </Link>
      </div>
      <div id='developerSection' className='developerSection'>
        <h2>Developer</h2>
      </div>
      <div id='designerSection' className='designerSection'>
        <h2>Designer</h2>
      </div>
      <div id='creatorSection' className='creatorSection'>
        <h2>Creator</h2>
      </div>
    </div>
  );
};

export default HomeTitle;
