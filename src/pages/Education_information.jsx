import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import school_logo from "../images/IMG_5416.png";
import school_bg from "../images/school_bg.png";
// import Navbar from '../components/Navbar'

const Education_information = () => {

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

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [selectedSemester, setSelectedSemester] = useState('เลือกปีการศึกษา');
    const handleSelectChange = (event) => {
        setSelectedSemester(event.target.value);
      };

    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                {/* Logo and School Name */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={school_logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    <h5 style={{ textAlign: 'right', marginLeft: '10px', marginBottom: '0' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h5>
                </div>
                </Link>
                <div className="nav navbar-nav navbar-right">
                <span className='nav-link'>
                <Link
                        to = "/"
                        style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                        เลือกเมนู
                    </Link>
                </span>
                </div>
            </div>
            </nav>

            <div style={containerStyle}>
            <img
                src={school_bg}
                alt="School Background"
                style={{
                    ...imageStyle,
                    width: '100vw', // 100vw คือ 100% ของความกว้างของ viewport
                    maxHeight: '40vh',  // 40vh คือ 40% ของความสูงของ viewport
                    objectFit: 'cover'  // ภาพจะทำการ crop หรือ stretch เพื่อให้เต็มพื้นที่ที่กำหนด
                }}
                />
                <div style={textOverlayStyle}>
                    <h2 style={{ textAlign: 'center',fontWeight: 'bold' ,fontSize: '56px'}}>ระบบจัดการข้อมูลการศึกษา</h2>
                    {/* <h5 style={{ textAlign: 'center',fontWeight: 'bold' ,fontSize: '32px'}}>สำหรับบุคลากรภายในโรงเรียน</h5> */}
                    </div>
            </div>

            <div className="card w-40 mx-auto mt-5" style={{ boxShadow: '1px 2px 12px 4px rgba(0, 0, 0, 0.2)' }}>
                <div className="card-body">
                {/* ,fontWeight: 'bold' */}
                <div className="row" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '20px', marginRight: '5px', gap: '0'}}>
                    <div className="col-sm d-flex align-items-center">
                            <label htmlFor="father_data" className="col-form-label mb-0 mx-2">Filter</label>
                        </div>
                    </div>
                
                <div className="row" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px', marginRight: '5px', gap: '0'}}>
                    <div className="col-sm d-flex align-items-center">
                            <label htmlFor="father_data" className="col-form-label mb-0 mx-2">ปีการศึกษา</label>
                        </div>
                    </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px' }}>
                    <div className="col-sm-0 d-flex align-items-center">
                        {/* <label htmlFor="father_Occupation" className="col-form-label mb-0 mx-2">วุฒิการศึกษา</label> */}
                        <div class="dropdown px-2" style={{ width: '150px' }}> {/* กำหนดความกว้างของ dropdown ที่นี่ */}
                            <select value={selectedSemester} onChange={handleSelectChange} class="custom-select" style={{ width: '350px' }}> {/* กำหนดความกว้างของตัวเลือกใน dropdown ที่นี่ */}
                                <option value="เลือกปีการศึกษา">เลือกปีการศึกษา</option>
                                <option value="2560">2560</option>
                                <option value="2561">2561</option>
                                <option value="2562">2562</option>
                            </select>
                        </div>
                    </div>
                </div>

{/* 
                    <Link to="/">
                        <button type="submit" className="btn btn-primary float-end">Log in</button>
                    </Link> */}
                </div>
            </div>
        </>
    );
};

export default Education_information;
