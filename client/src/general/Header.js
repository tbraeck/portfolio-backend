import React from 'react'
import NavBar from './NavBar'
import NavigationButtons from './NavigationButtons'

const Header = () => {
  return (
  <div className="headerCont">
    <a href='http://localhost:4000/' className="logo"> <img src="/LOGO.ico" style={{width: "200px"}}  alt="Portfolio Logo" /></a>  
    <div style={{marginLeft: "35px", color: "black"}}>
      <h1 className='display-4'>TATE BRAECKEL</h1>
      <h1 className='display-5'>FULLSTACK DEVELOPER</h1>
      <h1 className='display-5'>DESIGNER</h1>

    </div> 
      <div className='navbar'>
        <NavBar />
      </div>
      <div className='nav_f_b'>
        <NavigationButtons />
      </div>
 </div>
  )
}

export default Header
