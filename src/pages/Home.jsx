import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/Home">
          <img src="src\images\IMG_5416.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
           โรงเรียนฤทธิยะวรรณาลัย (ประถม)
         </Link>
         <ul class="nav navbar-nav navbar-right">
            <li><Link className='nav-link' to='/Register'>Register</Link></li>
            <li><Link className='nav-link' to='/Login'>Log in</Link></li>
        </ul>
       </div>
    </nav> 
    
  )
}

export default Home