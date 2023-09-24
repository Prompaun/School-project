import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const linkStyle = {
    color: 'gray',      // สีของข้อความ
    textDecoration: 'none'  // ไม่มีเส้นใต้
  };

  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/Home">
          <img src="src\images\IMG_5416.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
           โรงเรียนฤทธิยะวรรณาลัย (ประถม)
         </Link>
         <div className="nav navbar-nav navbar-right">
            <span className='nav-link'>
              <Link to='/Register' style={linkStyle}>Register</Link> | <Link to='/Login' style={linkStyle}>Log in</Link>
            </span>
        </div>
       </div>
    </nav> 
  )
}

export default Home