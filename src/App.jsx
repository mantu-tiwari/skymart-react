import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      {/* <Register/> */}
      {/* <Login/> */}
      <Navbar/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
