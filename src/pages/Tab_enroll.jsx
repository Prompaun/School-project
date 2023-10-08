import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../images/IMG_5416.png';
import School_bg from '../images/school_bg.png';
import NewStudent_info from './NewStudent_info';


function Tab_enroll() {
    const linkStyle = {
        color: 'gray',
        textDecoration: 'none',
    };

    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={logoImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            <h5 style={{ textAlign: 'right', marginLeft: '10px', marginBottom: '0' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h5>
                        </div>
                    </NavLink>
                    <div className="nav navbar-nav navbar-right">
                        <span className="nav-link">
                            <NavLink exact to="/Open_course" style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                                เลือกหลักสูตร
                            </NavLink>
                        </span>
                    </div>
                </div>
            </nav>
            <div style={{ position: 'relative' }}>
                <img
                    src={School_bg}
                    alt="School Background"
                    style={{
                        filter: 'brightness(25%)',
                        width: '100vw',
                        maxHeight: '40vh',
                        objectFit: 'cover',
                    }}
                />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '56px' }}>ระบบรับสมัครนักเรียนแบบออนไลน์</h2>
                    <h5 style={{ fontWeight: 'bold', fontSize: '32px' }}>เพื่อเข้าศึกษาระดับประถมศึกษาปีที่ 1</h5>
                </div>
            </div>
                {/* <br></br> */}
                <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <h2 className="ms-3 mb-0">ข้อมูลนักเรียนผู้สมัครเข้าศึกษา</h2>
        </div>
            </div>
            <br></br>
            <div class="card w-50 mx-auto" >
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#menu1" style={{fontFamily: 'Kanit, sans-serif' }}>ข้อมูลนักเรียน</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#menu2" style={{fontFamily: 'Kanit, sans-serif' }}>ที่อยู่ตามทะเบียนบ้าน</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#menu3" style={{fontFamily: 'Kanit, sans-serif' }}>ข้อมูลผู้ปกครอง</a>
                    </li>
                </ul>
            </div>
            <div class="card-body" > 
                <div class="tab-content">
                    <div class="tab-pane container active" id="menu1" style={{height: "450px"}}><NewStudent_info/></div>
                    <div class="tab-pane container fade" id="menu2">ใส่หน้าที่อยู่ตามทะเบียนบ้าน</div>
                    <div class="tab-pane container fade" id="menu3">ใส่หน้าข้อมูลผู้ปกครอง</div>
                </div>
            </div>
            <br/>
        </div>
        <br/>
            <br/>
            <br/>
                </>
    );
}

export default Tab_enroll;
