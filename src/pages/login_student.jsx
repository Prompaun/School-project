
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import school_logo from "../images/IMG_5416.png";
import Navbar from "../components/Navbar";
import eye_open from "../images/eye-open.png";
import eye_closed from "../images/eye-closed.png";
import Header from '../components/Header';
const login_student = () => {

      const linkStyle = {
        color: 'red',
        textDecoration: 'none',
        fontFamily: 'Kanit, sans-serif',
        fontSize: '16px'
      };
    

    // เพิ่ม state สำหรับเก็บข้อมูลจากฟอร์ม
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // รับค่า input จากฟอร์มและอัปเดต state ตามชื่อ input
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // สร้างฟังก์ชันสำหรับการ submit ฟอร์ม
    const handleSubmit = (event) => {
        event.preventDefault();
        // ทำสิ่งที่คุณต้องการเมื่อกด submit ฟอร์ม
        console.log('Submit Form', formData);
        // เช่น ส่งข้อมูลไปยังเซิร์ฟเวอร์หรือทำการตรวจสอบข้อมูล
    };

    const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

    return (
        <>
            <Navbar/>
           
            <Header header="ระบบบริการข้อมูล" subhead="สำหรับนักเรียน"/>
            {/* เพิ่มฟอร์มการลงทะเบียน */}
            {/* <div class="list-group"> */}
            <div className="container mt-5">
                <div className="card mx-auto mt-5" style={{ boxShadow: '1px 2px 12px 4px rgba(0, 0, 0, 0.2)' }}>
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <img src={school_logo} alt="Register Image" width="100" height="100" />
                            <h2 className="ms-3 mb-0">โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h2>
                        </div>
                        <br></br>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 d-flex" style={{gap: '7px'}}>
                                <label>
                                    <span htmlFor="email" className="form-label me-3"style={{ marginRight: '10px',marginLeft: '0px', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px' }}>รหัสประจำตัวนักเรียน:  </span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="mb-3 d-flex align-items-center" >
                                <label>
                                    <span htmlFor="password" className="form-label me-5" style={{ marginRight: '10px', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px' }}>รหัสผ่านประจำตัว:</span>
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={handleTogglePassword}
                                    style={{
                                        padding: '0',
                                        border: 'none',
                                        background: 'none',
                                        cursor: 'pointer',
                                        border: '1px solid #dcdcdc', // เพิ่ม border สีเทา
                                        color: 'gray',
                                        borderRadius: '5px', // เพิ่มขอบมนเม็ด
                                        padding: '5px', // ปรับขนาด padding
                                    }}
                                    >
                                    <img
                                        src={showPassword ? eye_closed : eye_open}
                                        alt={showPassword ? 'ปิดตา' : 'เปิดตา'}
                                        style={{ width: '20px', height: '12px' }} // ปรับขนาดตามที่คุณต้องการ
                                    />
                                </button>
                            </div>

                            
                            {/* <Link to="/login_student/Class_instrctor_menu">
                            <button type="submit" className="btn btn-primary float-end">ลืมรหัสประจำตัวนักเรียน</button>
                            </Link> */}
                            <Link to='/Register' style={linkStyle}>ลืมรหัสผ่าน</Link>
                            <Link to="Student_menu">
                            <button type="submit" className="btn btn-primary float-end" style={{fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>Log in</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>

            {/* </div> */}
        </>
    );
};

export default login_student;
