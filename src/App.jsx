import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Home />
      <Routes>
      <Route>
        {/* <Route path="Home" element={<Home />} /> */}
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
