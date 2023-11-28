import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
// import Select_role_user from './pages/Select_role_user'
import Login_student from './pages/Login_student'
import Login_parent from './pages/Login_parent'
import Student_menu from './pages/Student_menu'
import Checkgrade from './pages/Checkgrade'
import Parent_menu from './pages/Parent_menu'
import Request_cert from './pages/Request_cert'
import History_request from './pages/History_request'
import NewUser_menu from './pages/NewUser_menu'
import Open_course from './pages/Open_course'
import Tab_enroll from './pages/Tab_enroll'
import CheckEnroll_status from './pages/CheckEnroll_status'
import Class_instructor_menu from './pages/Class_instructor_menu'
import Login_personnel from './pages/Login_personnel'
import Subject_instructor_menu from './pages/Subject_Instructor_menu'
import Education_information from './pages/Education_information'
import Student_List_Information from './pages/Student_List_Information'
import Filter_student_information from './pages/Filter_student_information'
import Subject_Score_Record from './pages/Subject_Score_Record'
import Personnel_page from './pages/Personnel_page'
import Check_Certification_Request from './pages/Check_Certification_Request'
import Sidebar from './components/Sidebar'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path ="/Login/Login_student" element={<Login_student />} />
        <Route path ="/Login/Login_parent" element={<Login_parent />} />
        <Route path ="/Login/Login_student/Student_menu" element={<Student_menu />} />
        <Route path ="/Login/Login_parent/Parent_menu" element={<Parent_menu />} />
        
        <Route path="/Register" element={<Register />} />
        <Route path="/NewUser_menu" element={<NewUser_menu />} />
        <Route path="/Tab_enroll" element={<Tab_enroll />} />
        <Route path="/Open_course" element={<Open_course />} />
        <Route path="/CheckEnroll_status" element={<CheckEnroll_status/>} />
        
        <Route path="/Student_menu" element={<Student_menu />} />
        <Route path="/Parent_menu" element={<Parent_menu />} />
        <Route path="/Checkgrade" element={<Checkgrade/>} />
        <Route path="/Request_cert" element={<Request_cert/>} />
        <Route path="/History_request" element={<History_request/>} />

        <Route path ="/Login_personnel" element={<Login_personnel />} />
        <Route path="/Login_personnel/Class_instrctor_menu" element={<Class_instructor_menu />} />
        <Route path="/Subject_instrctor_menu" element={<Subject_instructor_menu/>} />

        <Route path="/Education_information" element={<Education_information />} />
        <Route path="/Student_List_Information" element={<Student_List_Information />} />
        <Route path="/Filter_student_information" element={<Filter_student_information />} />
        <Route path="/Personnel_page" element={<Personnel_page />} />
        {/* <Route path="/Sidebar" element={<Sidebar />} /> */}

        <Route path="/Subject_Score_Record" element={<Subject_Score_Record />} />

        <Route path="/Check_Certification_Request" element={<Check_Certification_Request />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;