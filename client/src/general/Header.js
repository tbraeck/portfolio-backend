import React from 'react'
import NavBar from './NavBar'
import NavigationButtons from './NavigationButtons'

const Header = () => {
  return (
  <div className="headerCont">
    <a href='https://tate-braeckel-web-dev-portfolio.onrender.com/' className="logo"> <img src="/LOGO.ico" style={{width: "150px", marginLeft: "40px"}}  alt="Portfolio Logo" /></a> 
    <div style={{marginLeft: "55px", color: "gray", height: "200px", marginTop: "50px"}}>
      <h1 className='display-5'>TATE BRAECKEL</h1>
      <h1 className='display-7'>FULLSTACK DEVELOPER | DESIGNER</h1>
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
