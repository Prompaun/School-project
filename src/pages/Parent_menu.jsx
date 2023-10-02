import React from 'react'
import { Link } from 'react-router-dom';
import logoImage from '../images/IMG_5416.png';
import School_bg from "../images/school_bg.png"
import Card_menu_parent from '../components/Card_menu_parent';

function Parent_menu() {
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
              <Link to='/Login/login_student/Select_role_user' style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>หน้าแรก</Link>
              </span>
            </div>
            {/* <div className="nav navbar-nav navbar-right"> */}
              {/* <span className='nav-link'>
                <Link to='/Register' style={linkStyle}>Register</Link> | <Link to='/Login' style={linkStyle}>Log in</Link>
              </span> */}
            {/* </div> */}
          </div>
        </nav>
        <div style={containerStyle}>
        <img src={School_bg} alt="School Background" width="1899" height="320" style={imageStyle}/>
        <div style={textOverlayStyle}>
        <h2 style={{ textAlign: 'center',fontWeight: 'bold',fontSize: '56px' }}>ระบบจัดการสารสนเทศ</h2>
        <h5 style={{ textAlign: 'center',fontWeight: 'bold',fontSize: '32px' }}>บริการสำหรับผู้ปกครอง</h5>
        </div>
      </div>
      <br></br>
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <h2 className="ms-3 mb-0">บริการข้อมูลสำหรับผู้ปกครอง</h2>
        </div>
      </div>
      <br></br>
      <br></br>
      <Card_menu_parent  /> 
      <br></br>
      <br></br>
      </>
      )
}

export default Parent_menu