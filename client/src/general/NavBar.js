import React from 'react';
import { Link } from 'react-router-dom'
// import { AppContext } from '../contexts/AppContext';

const NavBar = () => {
// const {allApps, setAllApps} = useContext(AppContext)

// const handleLogout = ()=> {
//   setUser(null)
// }

// const handleLogoutClick = () => {
//   fetch("/logout", {
//     method: "DELETE",
//   })
//   .then((r)=> {
//     if(r.ok){
//       handleLogout(null)
//       navigate('/');  
//     }
//   })
// }

return (
  <div className='headerBack' style={{ marginLeft: "300px" }}>
    <div className="btn" style={{ display: 'flex', justifyContent: 'center' }}>
      <Link to="/" className='btn'>
        <button className='btn btn-secondary' type='button'>
          <img  src="/home.png" style={{ width: "50px", paddingRight: "15px" }} alt="User Icon" className='user_icon' />
          <span className='user-text'>HOME</span>
        </button>
      </Link>
      <Link to="/about" className='btn'>
        <button type='button'  className='btn btn-secondary'>
          <img  src="/sun.png"style={{ width: "50px", paddingRight: "15px" }} alt="User Icon" className='user_icon' />
          <span className='user-text'>ABOUT</span>
        </button>
      </Link>
      <Link to="/applications" className='btn'>
        <button type='button' className='btn btn-secondary'>
          <img src="/sun1.png" style={{ width: "50px", paddingRight: "15px" }} alt="User Icon" className='user_icon' />
          <span className='user-text'>APPLICATIONS</span>
        </button>
      </Link>
      <Link to="/blog" className='btn'>
        <button type='button' className='btn btn-secondary'>
          <img src="/farmer.png" style={{ width: "50px", paddingRight: "15px" }} alt="User Icon" className='user_icon' />
          <span className='user-text'>BLOG</span>
        </button>
      </Link>
    </div>
  </div>
);
}

export default NavBar

