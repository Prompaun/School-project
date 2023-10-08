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
    <>
      <Navbar/>
      <div style={containerStyle}>
      <img
          src="src\images\school_bg.png"
          alt="School Background"
          style={{
            ...imageStyle,
            width: '100vw', // 100vw คือ 100% ของความกว้างของ viewport
            maxHeight: '40vh',  // 70vh คือ 70% ของความสูงของ viewport
            objectFit: 'cover'  // ภาพจะทำการ crop หรือ stretch เพื่อให้เต็มพื้นที่ที่กำหนด
          }}
        />
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