import React from 'react'
// import Header from './general/Header'
import Home from './general/Home';
import ApplicationList from './ApplicationList';
import Blog from './Blog';
import Developer from './general/Developer';
import Designer from './general/Designer';
import Creator from './general/Creator';
import About from './About';
import Footer from './general/Footer';
import {Routes, Route} from 'react-router-dom';
import ApplicationPage from './ApplicationPage';


const App = () => {
  
  return (
    <div className="App">
      <div className='mainContainer'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/about' element={<About />}/>
          <Route path='/developer' element={<Developer />}/>
          <Route path='/designer' element={<Designer />}/>
          <Route path='/creator' element={<Creator />}/>
          <Route  path='/applications' element={<ApplicationList/>}/>
          <Route path="/apps/:id" element={<ApplicationPage  />}/> 
          <Route  path='/blog' element={<Blog />}/>

        </Routes>
      </div>
      <div className='footer--pin'>
              <Footer/>
        </div>
      </div>
  )
}

export default App
