import React from 'react'
import { Link } from 'react-router-dom';
import logoImage from '../images/IMG_5416.png';
import Card_menu_newuser from '../components/Card_menu_newuser';
import Header from '../components/Header';
function NewUser_menu() {
    const handleGoBack = () => {
        window.history.back();
      };
    
    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };
      
  return (
    <>
    {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          //  Logo and School Name 
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            <h5 style={{ textAlign: 'right', marginLeft: '10px', marginBottom: '0' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h5>
          </div>
        </Link>
        <div className="nav navbar-nav navbar-right">
          <span className='nav-link'>
          <Link
                // onClick={handleGoBack}
                to = "/Login"
                style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                Log out
              </Link>
          </span>
        </div>
      </div>
    </nav> */}
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
            <Link to='/Login' style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                Log out
              </Link>
          </span>
        </div>
      </div>
    </nav>
   
  <Header header="ระบบรับสมัครนักเรียนแบบออนไลน์" subhead="เพื่อเข้าศึกษาระดับประถมศึกษาปีที่ 1"/>
  <br></br>
  <br></br>
  <div className="d-flex justify-content-center">
        <Card_menu_newuser/>
      </div>
  </>
  )
}

export default NewUser_menu