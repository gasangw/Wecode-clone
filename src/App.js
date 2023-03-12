import React, { Component } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import WeCode from './components/WeCode'
import Program from './components/Program'
import Apply from './components/Apply'
import Footer from './components/Footer'
import MyLogo from './components/MyLogo'
import { Routes, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <Routes>
          <Route path='/home' element={<HomePage />} />  
          <Route path='/wecode' element={<WeCode />} /> 
          <Route path='/program' element={<Program />} /> 
          <Route path='/apply' element={<Apply />} />   
        </Routes>
          <WeCode />
          <MyLogo />
          <Program />
          <Apply />
          <Footer />
      </div>
    )
  }
}
export default App
