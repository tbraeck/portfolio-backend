import React from 'react'
import NavigationButtons from './NavigationButtons'
import NavBar from './NavBar'
import ApplicationList from '../ApplicationList'

const Developer = () => {

  return (
    <div className='devPage' style={{display: "flex", flexDirection: "column" }}>
        
        <ApplicationList/>
    </div>
  )
}

export default Developer
