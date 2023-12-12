import React, {useContext} from 'react'
import Header from './Header'
import Home from './Home';
import { AppContext } from './contexts/AppContext'
import {Routes, Route} from 'react-router-dom';

const App = () => {
  const {allApps, setAllApps} = useContext(AppContext)
  
  console.log(allApps)
  const everyApp = allApps.map(app => (
    <div key={app.id}>
      <h1>{app.name}</h1>
      <p>{app.description}</p>
      <div>
        <a href={app.link} target="_blank" rel="noopener noreferrer">LINK TO APP</a>
      </div>
      <div>
        <a href={app.demo} target="_blank" rel="noopener noreferrer">DEMO</a>
      </div>
    </div>
  ));
  return (
    <div>
      <div>
      <Header/>
      </div>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </div>
      <ul>
        {everyApp}
      </ul>
    </div>
  )
}

export default App
