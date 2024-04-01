import React, {useContext} from 'react'
import NavigationButtons from './NavigationButtons'
import { DesignContext } from '../contexts/DesignContext'
import DesignCard from './DesignCard'

const Designer = () => {
  const {allDesigns} = useContext(DesignContext)

const everyDesign = allDesigns.map(design => (
<div key={design.id} className="card-item">
       <DesignCard design={design} />
      {/* <Link to={`/designs/${design.id}`} className="link">
       
      </Link> */}
    </div>
      ));
  return (
    <div>
      <h1>Designer is here</h1>
      <NavigationButtons/>
      <div className="card-container" >
        {everyDesign}
      </div>
    </div>
  )
}

export default Designer
