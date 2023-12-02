import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import school_logo from "../images/IMG_5416.png";
import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar'
import Header from '../components/Header';
const Check_Certification_Request = () => {

    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };
    
    const fontStyle = {
        fontFamily: 'Kanit, sans-serif',
        textDecoration: 'none'
      };

    const [selectedOption, setSelectedOption] = useState('เลือกสถานะคำร้องขอใบรับรอง');

    const [data, setData] = useState([
        {
            requests: [
            { request_date: '27/11/2566', request_number: 'xx-xxxx', certificate_type: 'ปพ.1', note: 'ระบุคะแนนรายวิชา', status: 'พิมพ์แล้ว', a: '/Education_information'},
            { request_date: '28/11/2566', request_number: 'xx-xxxx', certificate_type: 'ปพ.7', note: '-', status: 'ยังไม่พิมพ์', a: '/History_request'},
            { request_date: '29/11/2566', request_number: 'xx-xxxx', certificate_type: 'ปพ.7', note: '-', status: 'ยังไม่พิมพ์', a: '/Subject_Score_Record'},
            // เพิ่มข้อมูลผลการเรียนตามต้องการ
            ],
        },
        ]);

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
                {/* Logo and School Name */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={school_logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    <h5 style={{ textAlign: 'right', marginLeft: '10px', marginBottom: '0' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h5>
                </div>
                </Link>
                <div className="nav navbar-nav navbar-right">
                <span className='nav-link'>
                <Link
                        to = "/Login_personnel"
                        style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                        Log out
                    </Link>
                </span>
                </div>
            </div>
            </nav>

            <Header header="ระบบการออกใบรับรอง" subhead="ตรวจสอบคำขอใบรับรอง" />  
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <Sidebar />
        
        <div className="col-md-9">
                       
            <br />
            
        {/* <div className="card mx-auto my-auto" style={{maxWidth: "1000px", border: '1px solid white' }}> */}
            {/* <br /> */}
            {/* <div className="card mx-auto my-0" style={{ width: "1000px", border: '1px solid white' }}> */}
                <div className="card-body">
                    <div className="form-group col-md-0 fone" style={{ padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>
                        <div className="d-flex align-items-center">
                            <h2 className="card-heading px-0" style={{ fontSize: '20px', marginTop: '2px' }}>สถานะคำร้องขอใบรับรอง</h2>
                        </div>

                        {/* <br /> */}
                        <select value={selectedOption} onChange={handleSelectChange} style={{ fontSize: '18px', fontFamily: 'Kanit, sans-serif', marginTop: '5px' }}>
                            <option value="เลือกสถานะคำร้องขอใบรับรอง">เลือกสถานะคำร้องขอใบรับรอง</option>
                            <option value="รอดำเนินการ">รอดำเนินการ</option>
                            <option value="ดำเนินการเสร็จสิ้น">ดำเนินการเสร็จสิ้น</option>
                            <option value="กำลังดำเนินการ">กำลังดำเนินการ</option>
                        </select>

                        <br /><br />
                        <table className="table-bordered" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontFamily: 'Kanit, sans-serif', borderColor: '#D3D3D3' }}>
                            <thead>
                                <tr>
                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>วันที่ทำรายการ</th>
                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>เลขที่คำร้อง</th>
                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ประเภทใบรับรอง</th>
                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>รายละเอียด</th>
                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>พิมพ์ใบรับรอง</th>
                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>อัพเดตสถานะ</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data[0].requests.map((request) => (
                                    <tr key={request.id} style={{ height: '100px' }}>
                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{request.request_date}</td>
                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{request.request_number}</td>
                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{request.certificate_type}
                                            {/* <a href = {request.a} style={{ ...fontStyle}}>
                                               <i 
                                                    class="fs-5 bi-search" 
                                                    style={{
                                                        color: 'black',
                                                        fontSize: '20px',
                                                        marginRight: '5px'
                                                    }}
                                                ></i>                 
                                                <span style={{ ...fontStyle, color: 'black', fontSize: '16px' }}>ดูรายละเอียด</span>         
                                            </a> */}
                                        </td>
                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{request.note}</td>
                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{request.status}</td>
                                        <td style={{ backgroundColor: '#FFFFFF' }}>
                                            <button
                                                style={{
                                                    backgroundColor: 'transparent', // ตั้งค่าสีพื้นหลังเป็นโปร่ง
                                                    border: 'none', // ลบเส้นขอบ
                                                    padding: '0', // ลบ Padding
                                                    cursor: 'pointer' // เพิ่ม cursor: 'pointer' เพื่อแสดงว่าเป็นองค์ประกอบที่คลิกได้
                                                }}
                                                onClick={() => {
                                                    // กระทำตามที่คุณต้องการทำเมื่อปุ่มถูกคลิก
                                                }}
                                            >
                                                <i 
                                                    class="fs-5 bi-check-circle-fill" 
                                                    style={{
                                                        color: '#32CD32',
                                                        fontSize: '20px',
                                                        marginRight: '5px'
                                                    }}
                                                ></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        {/* </div> */}
        {/* </div>        */}
    </div>
    </div> 
        </>
    );
};

export default Check_Certification_Request;
