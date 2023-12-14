import React, {useContext} from 'react'
import Header from './general/Header'
import Home from './general/Home';
import ApplicationList from './ApplicationList';
import Blog from './Blog';
import About from './About';
import Footer from './general/Footer';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  
  return (
    <div>
       <div className="header">
            <Header/>
        </div>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/about' element={<About />}/>
          <Route  path='/applications' element={<ApplicationList/>}/>
          <Route  path='/blog' element={<Blog />}/>

        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
