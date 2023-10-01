import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Home = () => {
  const linkStyle = {
    color: 'gray',
    textDecoration: 'none'
  };

  const containerStyle = {
    position: 'relative',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    textAlign: 'left', // ตั้งให้ข้อความชิดซ้าย
  };

  const imageStyle = {
    filter: 'brightness(25%)',
  };

  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
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
      <div style={containerStyle}>
        <img src="src\images\school_bg.png" alt="School Background" width="1899" height="480" style={imageStyle}/>
        <div style={textOverlayStyle}>
          <h2 style={{ textAlign: 'left' }}>ระบบจัดการสารสนเทศ</h2>
        </div>
      </div>
      <h1 class="text-header text-center">ประชาสัมพันธ์</h1>
      <div class="d-flex justify-content-center">
            <ul class="list-group">
                <li class="list-group-item"> <Card /></li>
        </ul>
        </div>
    </>
  );
}

export default Home