import React from 'react'
import NavBar from './NavBar'
import NavigationButtons from './NavigationButtons'

const Header = () => {
  return (
  <div className="headerCont">
    <a href='http://localhost:4000/' className="logo"> <img src="/LOGO.ico" style={{width: "200px"}}  alt="Portfolio Logo" /></a>      
        <NavBar  className='navbar'/>  
      <div className='nav_f_b'>
        <NavigationButtons />
      </div>
 </div>
  )
}

export default Header
