export default login_student;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const login_student = () => {
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
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="src\images\IMG_5416.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{ float: 'left', marginRight: '10px' }} />
                        <span style={{ marginLeft: '0px' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</span>
                    </Link>
                    <div className="nav navbar-nav navbar-right">
                        <span className='nav-link'>
                            <Link to='/Register' style={linkStyle}>Register</Link> | <Link to='/Login' style={linkStyle}>Log in</Link>
                        </span>
                    </div>
                </div>
            </nav>
            <div style={containerStyle}>
                <img src="src\images\school_bg.png" alt="School Background" width="1899" height="480" style={imageStyle} />
                <div style={textOverlayStyle}>ระบบบริการข้อมูลสำหรับนักเรียนและผู้ปกครอง</div>
            </div>

            {/* เพิ่มฟอร์มการลงทะเบียน */}
            {/* <div class="list-group"> */}
            <div className="container mt-5">
                <div className="d-flex align-items-center">
                    <img src="src\images\IMG_5416.png" alt="Register Image" width="100" height="100" />
                    <h2 className="ms-3 mb-0">โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3 d-flex">
                        <label htmlFor="username" className="form-label me-3">Username: </label>
                        <input
                            type="text"
                            className="form-control" // สามารถใช้ w-50 w-25, w-10 หรือค่าอื่นๆ ตามที่ต้องการ
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required />
                    </div>
                    <div className="mb-3 d-flex">
                        <label htmlFor="password" className="form-label me-3">Password: </label>
                        <input
                            type="password"
                            className="form-control" // สามารถใช้ w-50 w-25, w-10 หรือค่าอื่นๆ ตามที่ต้องการ
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required />
                    </div>
                    <button type="submit" className="btn btn-primary float-end">Log in</button>
                </form>
            </div>
            {/* </div> */}
        </>
    );
};
