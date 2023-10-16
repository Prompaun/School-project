import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import schoolBackground from '../components/school_background'; // เปลี่ยนชื่อ component เป็นตามนี้
import school_logo from "../images/IMG_5416.png";
import school_bg from "../images/school_bg.png";
import Navbar from '../components/Navbar'

const login_student = () => {

    const [student_id, setstudent_id] = useState('');

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

        if (!student_id) {
            alert('Please fill out all fields ');
            return;
          }

        setstudent_id('');

        // Show a success message to the user
        alert('Form submitted successfully!');

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
                {/* <div className="mb-3 d-flex">
                    <label htmlFor="username" className="form-label me-3">รหัสประจำตัวนักเรียน: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div> placeholder="กรอกเลขประจำตัวนักเรียน"*/}
                <div className="mb-3 d-flex" style={{gap: '15px'}}>
                    <label>
                        <span style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>รหัสประจำตัวนักเรียน:</span>
                    </label>
                    {/* <div className="col-sm-4 d-flex align-items-center"> */}
                        <input type="student_id" className="form-control"  value={student_id} onChange={(e) => setstudent_id(e.target.value)} />
                    {/* </div> */}
                    
                </div>

                <div className="mb-3 d-flex">
                    <label>
                        <span htmlFor="password" className="form-label me-3"style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>รหัสประจำตัวประชาชน:</span>
                    </label>
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
