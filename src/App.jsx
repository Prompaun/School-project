import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Login_student from './pages/Login_student'
import Select_role_user from './pages/Select_role_user'
import Student_menu from './pages/Student_menu'
import Checkgrade from './pages/Checkgrade'
import Parent_menu from './pages/Parent_menu'
import Request_cert from './pages/Request_cert'

// import select_role_user from './pages/select_role_user'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path ="/Login/Login_student" element={<Login_student />} />
        <Route path ="/Login/login_student/Select_role_user" element={<Select_role_user />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Student_menu" element={<Student_menu />} />
        <Route path="/Parent_menu" element={<Parent_menu />} />
        <Route path="/Checkgrade" element={<Checkgrade/>} />
        <Route path="/Request_cert" element={<Request_cert/>} />


    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;