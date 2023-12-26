import React, {useContext} from 'react';
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
  <div className='headerBack'>  
    <div className="btn ">
    <Link to="/" className='btn '>
      <button className='btn btn-secondary' type='button'>
      <img src="/sun.png" style={{width:"50px"}} alt="User Icon" className='user_icon' />
        <span className='user-text'>HOME</span>
      </button>
    </Link>
    <Link to="/about" className='btn '>
      <button  type='button' className='btn btn-secondary'>
      <img src="/home.png" style={{width:"50px"}} alt="User Icon" className='user_icon' />
      <span className='user-text'>ABOUT</span>
      </button>
    </Link>
    <Link to="/applications" className='btn '>
      <button  type='button' className='btn btn-secondary'>
      <img src="/sun1.png" style={{width:"50px"}} alt="User Icon" className='user_icon' />
      <span className='user-text'>APPLICATIONS</span>
      </button>
    </Link>
    <Link to="/blog" className='btn '>
      <button  type='button' className='btn btn-secondary'>
      <img src="/farmer.png" style={{width:"50px"}} alt="User Icon" className='user_icon' />
      <span className='user-text'>BLOG</span>
      </button>
    </Link>
   {/* {user ? (
     <Link to="/user-profile" className='btn'>
     <div  type='button' className='btn btn-secondary' >
       <img src="/farmer.png" alt="User Icon" className='user_icon' />
       <span className='user-text'>ACCOUNT</span>
     </div>
   </Link>
   ) : null} */}

  
    {/* {user ? (
      <div className='btn '>
        <h2 className='welcomeText'>Welcome, {user.username}!</h2>
        <button type='submit' onClick={handleLogoutClick} className='btn btn-secondary' >LOGOUT</button>
      </div>
    ) : 
    <Link to="/login" className='btn'>
      <div  type='button' className='btn btn-secondary' >
        <img src="/enter.png" alt="User Icon" className='user_icon' />
        <span className='user-text'>LOGIN</span>
      </div>
    </Link>
      } */}
{/* {user ? (
  <Link to="/create_post" className='btn'>
      <div  type='button' className='btn btn-secondary' >
        <img src="/tab.png" alt="User Icon" className='user_icon' />
        <span className='user-text'>CREATE POST</span>
      </div>
    </Link>
     ) : null} */}
  </div>
</div>
)
}

export default NavBar

