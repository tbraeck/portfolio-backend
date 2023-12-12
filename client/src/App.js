import React, {useContext} from 'react'
import { AppContext } from './contexts/AppContext'

const App = () => {
  const [allApps, setAllApps] = useContext(AppContext)
  
  console.log(allApps)
  const everyApp = allApps.map(app => (
    <div>
      <h1>{app.name}</h1>
      <h1>{app.description}</h1>
      <h1>{app.link}</h1>
      <h1>{app.demo}</h1>
    </div>
  ))
  return (
    <div>
      <h1> This is App</h1>
      <ul>
        {everyApp}
      </ul>
    </div>
  )
}

export default App
