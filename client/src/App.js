import React, {useContext} from 'react'
import Header from './general/Header'
import Home from './general/Home';
import ApplicationList from './ApplicationList';
import Blog from './Blog';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/applications' element={<ApplicationList/>}/>
          <Route  path='/blog' element={<Blog />}/>

        </Routes>
      </div>
    </div>
  )
}

export default App
