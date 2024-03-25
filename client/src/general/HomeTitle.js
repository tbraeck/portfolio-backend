import React from 'react'
import { Link } from 'react-router-dom'

const HomeTitle = () => {
  return (
    <div   >
            <div  >
            <Link to="/developer" className='devLink'>
              <h1 className='changa-font1' style={{display: "flex", flexDirection: "row"}}>DEVELOPER</h1>
            </Link>
            </div>
            <div  >
            <Link to="/designer" className='desLink'>
              <h1 className='changa-font2' style={{display: "flex", flexDirection: "column"}}>DESIGNER</h1>
            </Link>
            </div>
            <div  >
            <Link to="/creator" className='creaLink'>
              <h1 className='changa-font3' style={{display: "flex", flexDirection: "column", left: "150px"}}>CREATOR</h1>
            </Link>
            </div>
    </div>
   
  )
}

export default HomeTitle
