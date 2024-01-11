import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
const Register = () => {
  
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
      <Header header="ระบบลงทะเบียนสำหรับเข้าใช้เว็บไซต์" subhead=""/>
      {/* เพิ่มฟอร์มการลงทะเบียน */}
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <h2 className="ms-3 mb-0">สร้างบัญชีผู้ใช้งาน</h2>
        </div>
        
       {/* เพิ่มแท็ก <br /> เพื่อสร้างการเว้นบรรทัด */}
        <div className="card mx-auto mt-5"style={{ boxShadow: '1px 2px 12px 4px rgba(0, 0, 0, 0.2)' }}>
  <div className="card-body">
    <form onSubmit={handleSubmit} className="w-100">
      <div className="mb-3">
        {/* <label htmlFor="username" className="form-label custom-font">เลขประจำตัวประชาชน (ผู้สมัครเข้าศึกษา): </label> */}
        <label htmlFor="email" className="form-label custom-font">อีเมลผู้ปกครอง (สำหรับใช้สร้างบัญชีผู้ใช้งาน): </label>
        <input
          type="text"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
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
      <button type="button" className="btn btn-primary custom-font" style={{ textAlign: 'right', fontFamily: 'Kanit, sans-serif' }}>
        <Link to="/NewUser_menu" style={{ color: 'white', textDecoration: 'none' }}>
          สร้างบัญชีและดำเนินการต่อ
        </Link>
    </button>
    </form>
  </div>
</div>
</div>
<br></br>
<br></br>

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
