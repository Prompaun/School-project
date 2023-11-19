import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../images/IMG_5416.png';
import Header from '../components/Header';
import NewStudent_info from './NewStudent_info';
import HouseholdInfo from './HouseholdInfo';
import ParentsInfo from './ParentInfo';


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
           
            <Header header="ระบบรับสมัครนักเรียนแบบออนไลน์" subhead="เพื่อเข้าศึกษาระดับประถมศึกษาปีที่ 1"/>
                {/* <br></br> */}
                <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <h2 className="ms-3 mb-0">ข้อมูลนักเรียนผู้สมัครเข้าศึกษา</h2>
        </div>
            </div>
            <br></br>
            <div class="card w-75 mx-auto" >
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
                    <div class="tab-pane container fade" id="menu2"style={{height: "230px"}}><HouseholdInfo/></div>
                    <div class="tab-pane container fade" id="menu3"><ParentsInfo/></div>
                </div>
            </div>
            <br/>
        </div><br /><br /><br /><br /><br /><br /><br /><br />
        <br/>
            <br/>
            <br/>
                </>
    );
}

export default Tab_enroll;