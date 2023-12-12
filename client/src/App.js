import React, {useContext} from 'react'
import Header from './Header'
import Home from './Home';
import { AppContext } from './contexts/AppContext'
import {Routes, Route, Link} from 'react-router-dom';

const App = () => {
  const {allApps, setAllApps} = useContext(AppContext)
  
  console.log(allApps)
  const everyApp = allApps.map(app => (
    <div key={app.id}>
      <h1>{app.name}</h1>
      <p>{app.description}</p>
     
     <Link to={app.link} className='btn'>
        <div  type='button' className='btn btn-secondary' >
          <img src="/link.png" alt="Link Icon" className='user_icon' />
          {/* <span className='user-text'>LINK TO APP</span> */}
        </div>
      </Link>
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
