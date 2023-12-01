import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import school_logo from "../images/IMG_5416.png";
import printer_icon from "../images/printer_icon.png";
import search_icon from "../images/search_icon.png";

// import Navbar from '../components/Navbar'
import Header from '../components/Header';
const Check_Applicant_Information = () => {

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
            check_student_data: [
            { Registration_Number: 'XXX1', Registration_Date: '12/05/2566', Applicants_first_name: 'เด็กหญิงฐิตานันนท์', Applicants_last_name: 'สดใส', Attached_Documents: 'หลักฐานการศึกษา สำเนาทะเบียนบ้าน', Educational_Program: 'EP', a: '/Education_information'},
            { Registration_Number: 'XXX2', Registration_Date: '12/05/2566', Applicants_first_name: 'เด็กหญิงทักษพร', Applicants_last_name: 'ใจบุญ', Attached_Documents: '-', Educational_Program: 'EP', a: '/History_request'},
            { Registration_Number: 'XXX3', Registration_Date: '13/05/2566', Applicants_first_name: 'เด็กหญิงกรกช', Applicants_last_name: 'รักดี', Attached_Documents: '-', Educational_Program: 'EP', a: '/Subject_Score_Record'},
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
                        to = "/"
                        style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                        เลือกเมนู
                    </Link>
                </span>
                </div>
            </div>
            </nav>

            <Header header="ระบบรับสมัครนักเรียน" subhead="" />  
             
            <br />
            <div className="card mx-auto my-0" style={{ width: "1000px", border: '1px solid white' }}>
                <div className="card-body">
                    <div className="form-group col-md-0 fone" style={{ padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>
                        <div className="d-flex align-items-center">
                            <h2 className="card-heading px-0" style={{ fontSize: '20px', marginTop: '2px' }}>รายชื่อผู้สมัครเข้าศึกษาต่อชั้นประถมศึกษาปีที่ 1</h2>
                        </div>

                        {/* <br /> */}
                        <div className="d-flex align-items-center">
                            <h2 className="card-heading px-0" style={{ fontSize: '20px', marginTop: '17px', marginRight: '10px' }}>หลักสูตร</h2>
                            <select value={selectedOption} onChange={handleSelectChange} style={{ fontSize: '18px', fontFamily: 'Kanit, sans-serif', marginTop: '5px' }}>
                                <option value="หลักสูตร">เลือกหลักสูตร</option>
                                <option value="English Program (EP)">English Program (EP)</option>
                                <option value="Regular Program">Regular Program</option>
                            </select>
                        </div>

                        <br />
                        <table className="table-bordered" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontFamily: 'Kanit, sans-serif', borderColor: '#D3D3D3' }}>
                            <thead>
                                <tr>
                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>เลขที่สมัคร</th>
                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>วันที่สมัคร</th>
                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ชื่อผู้สมัคร</th>
                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>เอกสารแนบ</th>
                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>หลักสูตร</th>
                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>รายละเอียดเพิ่มเติม</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data[0].check_student_data.map((check_student_data) => (
                                    <tr key={check_student_data.id} style={{ height: '100px' }}>
                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{check_student_data.Registration_Number}</td>
                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{check_student_data.Registration_Date}</td>
                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{check_student_data.Applicants_first_name + "  " + check_student_data.Applicants_last_name}
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
                                        {/* <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{check_student_data.Attached_Documents}</td> */}
                                        <td style={{ backgroundColor: '#FFFFFF' }}>
                                            <a href="/Education_information" style={{ ...fontStyle}}>
                                                <i 
                                                    class="fs-5 bi-download" 
                                                    style={{
                                                        color: 'black',
                                                        fontSize: '20px',
                                                        marginRight: '5px'
                                                    }}
                                                ></i>                 
                                                    <span style={{
                                                        ...fontStyle,
                                                        color: 'black',
                                                        fontSize: '16px',
                                                        textDecoration: 'underline' // เพิ่มการขีดเส้นใต้
                                                    }}>หลักฐานการศึกษา</span>
                                                    

                                                <br />
                                                <i 
                                                    class="fs-5 bi-download" 
                                                    style={{
                                                        color: 'black',
                                                        fontSize: '20px',
                                                        marginRight: '5px'
                                                    }}
                                                ></i>                 
                                                    <span style={{
                                                        ...fontStyle,
                                                        color: 'black',
                                                        fontSize: '16px',
                                                        textDecoration: 'underline' // เพิ่มการขีดเส้นใต้
                                                    }}>สำเนาทะเบียนบ้าน</span>
                                            </a>
                                        </td>
                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{check_student_data.Educational_Program}</td>
                                        <td style={{ backgroundColor: '#FFFFFF' }}>
                                            <a href="/Education_information" style={{ ...fontStyle}}>
                                                {/* <button type="button" class="btn btn-primary" data-mdb-ripple-init>
                                                    <i 
                                                            class="fs-5 bi-search" 
                                                            style={{
                                                                color: 'black',
                                                                fontSize: '20px',
                                                                marginRight: '5px'
                                                            }}
                                                        ></i>
                                                </button> */}
                                                {/* <button type="button" class="btn btn-primary" style={{ fontSize: '20px', backgroundColor: 'transparent', border: '1px solid black', width:'40px', height:'40px', marginRight:'5px' }} data-mdb-ripple-init>
                                                    <i 
                                                        class="fs-5 bi-search" 
                                                        style={{
                                                            color: 'black',
                                                            marginRight: '50px'
                                                        }}
                                                    ></i>
                                                </button> */}
                                                <i 
                                                    class="fs-5 bi-search" 
                                                    style={{
                                                        color: 'black',
                                                        fontSize: '20px', // ตั้งค่าขนาดตัวอักษร
                                                        marginRight: '5px'
                                                        // border: '1px solid black', // เพิ่มกรอบด้วยการตั้งค่า border
                                                        // padding: '1px', // ตั้งค่าการเพิ่มพาดิงขอบ
                                                        // borderRadius: '5px' // ตั้งค่าการเพิ่มมุมขอบสำหรับกรอบ
                                                    }}
                                                ></i> 
                                                <span style={{ ...fontStyle, color: 'black', fontSize: '16px' }}>ดูรายละเอียด</span>
                                            </a>
                                        </td>{/* Additional_Details */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br />
        </>
    );
};

export default Check_Applicant_Information;
