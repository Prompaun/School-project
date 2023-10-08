import React from 'react'
import { Link } from 'react-router-dom';
import logoImage from '../images/IMG_5416.png';
import School_bg from "../images/school_bg.png"
import Card_menu_course from '../components/Card_menu_course';

function Open_course() {
    const handleGoBack = () => {
        window.history.back();
      };
    
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
    <><nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
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
          <Link
                // onClick={handleGoBack}
                to = "/NewUser_menu"
                style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                เลือกเมนู
              </Link>
          </span>
        </div>
      </div>
    </nav>
    <div style={containerStyle}>
    <img
        src={School_bg}
        alt="School Background"
        style={{
            ...imageStyle,
            width: '100vw', // 100vw คือ 100% ของความกว้างของ viewport
            maxHeight: '40vh',  // 40vh คือ 40% ของความสูงของ viewport
            objectFit: 'cover'  // ภาพจะทำการ crop หรือ stretch เพื่อให้เต็มพื้นที่ที่กำหนด
        }}
        />
    <div style={textOverlayStyle}>
    <h2 style={{ textAlign: 'center',fontWeight: 'bold',fontSize: '56px' }}>ระบบรับสมัครนักเรียนแบบออนไลน์</h2>
    <h5 style={{ textAlign: 'center',fontWeight: 'bold',fontSize: '32px' }}>เพื่อเข้าศึกษาระดับประถมศึกษาปีที่ 1</h5>
    </div>
  </div>
  {/* <br></br> */}
  <div className="container mt-5 d-flex flex-column align-items-center">
        <div className="d-flex align-items-center mb-3">
          <h2 className="ms-3 mb-0">หลักสูตรที่เปิดรับสมัคร</h2>
        </div> 
    </div>
    <br></br>
        <Card_menu_course/>
    <br></br>
    <br></br>

  </>
  )
}

export default Open_course