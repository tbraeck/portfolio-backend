import React, {useContext} from 'react'
import { AppContext } from './contexts/AppContext'

const App = () => {
  const [allApps, setAllApps] = useContext(AppContext)
  
  console.log(allApps)
  
  return (
    <div>
      <h1> This is App</h1>
      <ul>

      </ul>
    </div>
  )
}

export default App
