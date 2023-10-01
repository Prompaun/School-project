// // export default App

// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register'
// // import login_student from './pages/login_student'

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Register" element={<Register />} />
//         {/* <Route path="/login_student" element={<login_student />} /> */}
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Login_student from './pages/Login_student'
// import select_role_user from './pages/select_role_user'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
{/* 
          <Route path="login_student" element={<Login_student />} />
        </Route > */}
        <Route path ="/Login/Login_student" element={<Login_student />} />
        <Route path="/Register" element={<Register />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;