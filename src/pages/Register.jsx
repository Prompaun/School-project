import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import schoolBackground from '../components/school_background'; // เปลี่ยนชื่อ component เป็นตามนี้
import Navbar from '../components/Navbar'

const Register = () => {
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
        <img src="src\images\school_bg.png" alt="School Background" width="1899" height="320" style={imageStyle}/>
        <div style={textOverlayStyle}>
        <h2 style={{ textAlign: 'center',fontWeight: 'bold' ,fontSize: '56px'}}>ระบบรับสมัครนักเรียนแบบออนไลน์</h2>
        <h5 style={{ textAlign: 'center',fontWeight: 'bold' ,fontSize: '32px'}}>เพื่อเข้าศึกษาระดับประถมศึกษาปีที่ 1</h5>
        </div>
      </div>

      {/* เพิ่มฟอร์มการลงทะเบียน */}
      <br></br>
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <h2 className="ms-3 mb-0">สร้างบัญชีผู้ใช้งาน</h2>
        </div>
        
       {/* เพิ่มแท็ก <br /> เพื่อสร้างการเว้นบรรทัด */}
        <div className="card mx-auto mt-5"style={{ boxShadow: '1px 2px 12px 4px rgba(0, 0, 0, 0.2)' }}>
  <div className="card-body">
    <form onSubmit={handleSubmit} className="w-100">
      <div className="mb-3">
        <label htmlFor="username" className="form-label custom-font">เลขประจำตัวประชาชน (ผู้สมัครเข้าศึกษา): </label>
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
      <div className="mb-3">
        <label htmlFor="password" className="form-label custom-font">รหัสผ่าน: </label>
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
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label custom-font">ยืนยันรหัสผ่าน: </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary custom-font">สร้างบัญชีและดำเนินการต่อ</button>
    </form>
  </div>
</div>
</div>
    </>
  );
}


{/* <div className="list-group">
  <h2 className="list-group-item list-group-item-action active">เข้าสู่ระบบ</h2>
  <form onSubmit={handleSubmit}>

      <label htmlFor="username" className="form-label me-3">Username: </label>
      <input
        type="text"
        className="form-control w-50"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="password" className="form-label me-3">Password: </label>
      <input
        type="password"
        className="form-control w-50"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />


      <button type="submit" className="btn btn-primary float-end">Log-in</button>

  </form>
</div> */}

export default Register;
