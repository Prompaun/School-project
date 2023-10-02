import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import schoolBackground from '../components/school_background'; // เปลี่ยนชื่อ component เป็นตามนี้
import school_logo from "../images/IMG_5416.png";
import school_bg from "../images/school_bg.png";
import Navbar from '../components/Navbar'

const login_student = () => {
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
        textAlign: 'left',
    };

    const imageStyle = {
        filter: 'brightness(25%)',
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

    return (
        <>
            <Navbar/>
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
                    <h2 style={{ textAlign: 'center',fontWeight: 'bold' ,fontSize: '56px'}}>ระบบบริการข้อมูล</h2>
                    <h5 style={{ textAlign: 'center',fontWeight: 'bold' ,fontSize: '32px'}}>สำหรับนักเรียนและผู้ปกครอง</h5>
                    </div>
            </div>
          
            {/* เพิ่มฟอร์มการลงทะเบียน */}
            {/* <div class="list-group"> */}
            <div className="container mt-5">
    <div className="card mx-auto mt-5" style={{ boxShadow: '1px 2px 12px 4px rgba(0, 0, 0, 0.2)' }}>
        <div className="card-body">
            <div className="d-flex align-items-center">
                <img src={school_logo} alt="Register Image" width="100" height="100" />
                <h2 className="ms-3 mb-0">โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-3 d-flex">
                    <label htmlFor="username" className="form-label me-3">Username: </label>
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
                <div className="mb-3 d-flex">
                    <label htmlFor="password" className="form-label me-3">Password: </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <Link to="Select_role_user">
                <button type="submit" className="btn btn-primary float-end">Log in</button>
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
