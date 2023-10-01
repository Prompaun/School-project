import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Register = () => {
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

  const [data, setData] = useState([
    {
      year: 'ปีการศึกษา 2566 ภาคการศึกษาที่ 1',
      subjects: [
        { id: '001', name: 'วิชา A', score: 85, grade: 'A', result: 'ดีเด่น' },
        { id: '002', name: 'วิชา B', score: 92, grade: 'A', result: 'ดีมาก' },
        { id: '003', name: 'วิชา C', score: 78, grade: 'B', result: 'ดี' },
        // เพิ่มข้อมูลผลการเรียนตามต้องการ
      ],
    },
  ]);

  const [selectedOption, setSelectedOption] = useState('เลือกสถานะคำร้องขอใบรับรอง');

  useEffect(() => {
    // ตั้งค่าค่าเริ่มต้นของ dropdown เมื่อหน้าจอถูก refresh
    setSelectedOption('เลือกสถานะคำร้องขอใบรับรอง');
  }, []); // ใช้ [] เพื่อให้ useEffect ทำงานเพียงครั้งเดียวหลังจากการ render แรก

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
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
        <img src="src\images\school_bg.png" alt="School Background" width="1899" height="480" style={imageStyle}/>
        <div style={textOverlayStyle}>ตรวจสอบประวัติการขอใบรับรอง</div>
      </div>


      <div className="container mt-5">
        <div className="d-flex align-items-center">
          <h2 className="ms-3 mb-0">สถานะคำร้องขอใบรับรอง</h2>
        </div>
        <div style={{ margin: '20px' }}>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="เลือกสถานะคำร้องขอใบรับรอง">เลือกสถานะคำร้องขอใบรับรอง</option>
            <option value="รอดำเนินการ">รอดำเนินการ</option>
            <option value="ดำเนินการเสร็จสิ้น">ดำเนินการเสร็จสิ้น</option>
            <option value="กำลังดำเนินการ">กำลังดำเนินการ</option>
          </select>
        </div>
        <div className="d-flex" style={{ marginLeft: '20px', marginTop: '20px' }}>
          <table className="table-bordered">
            <thead>
              <tr>
                <th>วันที่ทำรายการ</th>
                <th>เลขที่คำร้อง</th>
                <th>ประเภทใบรับรอง</th>
                <th>รายละเอียด</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1/10/2566</td>
                <td>00001</td>
                <td>ป.พ.7</td>
                <td>ต้องการนำไปขอทุนการศึกษา</td>
                <td>รอดำเนินการ</td>
              </tr>
              <tr>
                <td>1/10/2566</td>
                <td>00002</td>
                <td>ป.พ.1</td>
                <td>ต้องการนำไปสมัครเรียนต่อ</td>
                <td>รอดำเนินการ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
}


export default Register;