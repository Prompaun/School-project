import Navbar from '../components/Navbar'
import logoImage from '../images/IMG_5416.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card_role_login from '../components/Card_role_login';

function Login() {
  
  const containerStyle = {
    position: 'relative',
    display: 'flex', // Set display to flex to arrange items horizontally
    alignItems: 'center', // Align items vertically in the center
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
      <Navbar/>
      <div style={containerStyle}>
        <img src="src\images\school_bg.png" alt="School Background" width="1899" height="320" style={imageStyle}/>
        <div style={textOverlayStyle}>
          <h2 style={{ textAlign: 'center',fontWeight: 'bold',fontSize: '56px' }}>ระบบจัดการสารสนเทศ</h2>
        </div>
      </div>
      <br></br>
      <br></br>
      <h1 className="text-header text-center">เข้าสู่ระบบ</h1>
      <br></br>

        <Card_role_login />
    </>


  );
}

export default Login