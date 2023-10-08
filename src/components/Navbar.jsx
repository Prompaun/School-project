import logoImage from '../images/IMG_5416.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const linkStyle = {
    color: 'gray',
    textDecoration: 'none'
  };

  const containerStyle = {
    position: 'relative', // เพื่อให้สามารถใส่คำว่า "ระบบ" ลงในภาพได้
    overflow: 'hidden', // ป้องกันข้อความเลื่อนออกนอกพื้นที่ของ container
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '50%',           // จัดตำแหน่งตรงกลางด้านบน
    left: '50%',          // จัดตำแหน่งตรงกลางด้านซ้าย
    transform: 'translate(-50%, -50%)', // ย้ายข้อความลงมาจากตรงกลางด้านบนและด้านซ้าย
    color: 'white',       // สีของข้อความ
    fontSize: '28px',     // ขนาดของข้อความ
    fontWeight: 'bold',   // ตัวหนา
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // เงาข้อความ
    textAlign: 'center',
    maxWidth: '100vw', // ข้อความจะไม่ขยายเกินภาพพื้นหลัง
    whiteSpace: 'nowrap', // ข้อความจะไม่ขึ้นบรรทัดใหม่
  };

  const imageStyle = {
    filter: 'brightness(25%)',
  };

  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* Logo and School Name */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            <h5 style={{ textAlign: 'right', marginLeft: '10px', marginBottom: '0' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h5>
          </div>
        </Link>
        <div className="nav navbar-nav navbar-right">
          <span className='nav-link'>
            <Link to='/Register' style={linkStyle}>Register</Link> | <Link to='/Login' style={linkStyle}>Log in</Link>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar