import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import school_logo from "../images/IMG_5416.png";
import printer_icon from "../images/printer_icon.png";
import search_icon from "../images/search_icon.png";
import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar'
import Header from '../components/Header';

const Student_List_Information = () => {

    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };
    
    const fontStyle = {
        fontFamily: 'Kanit, sans-serif',
        textDecoration: 'none'
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
    
    const [data, setData] = useState([
    {
        year: 'ปีการศึกษา 2566 ภาคการศึกษาที่ 1',
        subjects: [
        { student_id: '6301012630095', first_name: 'เด็กหญิงนทณรรณ', last_name: 'ฝันดี'},
        { student_id: '6301012630133', first_name: 'เด็กหญิงพรหมพร', last_name: 'จุ๊บจิ๊บ'},
        { student_id: '6301012610000', first_name: 'เด็กหญิงตั้งใจเรียน', last_name: 'เรียนดี'},
        // เพิ่มข้อมูลผลการเรียนตามต้องการ
        ],
    },
    ]);

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
                <Link to="/Login//Login_personnel" style={linkStyle}>
                Log out
              </Link>
                </span>
                </div>
            </div>
            </nav>

            <Header header="ระบบจัดการข้อมูลการศึกษา" subhead="" />  
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <Sidebar />
            
        <div className="col-md-7">
            {/* <div className="d-flex align-items-center flex-column">
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px',paddingTop: '40px' }}>การจัดการข้อมูลการศึกษา</h2>
            </div> */}
            {/* <br /> */}
            {/* <div className="container flex-column align-items-center">
                <h2 className="card-heading text-left mx-auto ml-auto" style={{ fontSize: '20px', marginTop: '2px' }}>ผลการค้นหา</h2>
            </div> */}
            <div className="card mx-0 my-auto" style={{maxWidth: "1000px", border: '1px solid white' }}>
                <div className="card-body">
                    <div className="form-group col-md-0 fone" style={{paddingTop: '40px', padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>
                        <div className="d-flex align-items-center" style={{ marginBottom: '20px' }}>
                            <h2 className="card-heading px-4" style={{ fontSize: '25px', fontWeight: 'bold' }}>ผลการค้นหา</h2>
                            <Link to="/Filter_student_information">
                                <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '18px', textAlign: 'right', marginTop: '-15px'}}><span>ค้นหาข้อมูลใหม่</span></button>
                            </Link>
                        </div>

                        <div className="card mx-auto my-auto"  style={{ width: "1200px"}}>
                            <div className="card-body">
                                <div className="form-group col-md-0 fone" style={{ padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-2" style={{ fontSize: '20px', marginTop: '2px' }}>ข้อมูลรายชื่อ</h2>
                                    </div>


                                
                                <br />
                                <div className="container flex-column align-items-center">
                                    <div className="d-flex justify-content-center" style={{ height: '300px', overflowY: 'auto', marginLeft: '0px' }}>
                                        <table className="table-bordered" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontFamily: 'Kanit, sans-serif', borderColor: '#D3D3D3' }}>
                                            <thead>
                                                <tr>
                                                    <th rowSpan="2" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>เลขประจำตัวนักเรียน</th>
                                                    <th rowSpan="2" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ชื่อ-สกุล</th>
                                                    <th colSpan="2" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ข้อมูลส่วนบุคคล</th>
                                                    <th colSpan="2" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ข้อมูลการศึกษา</th>
                                                    <th colSpan="2" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ข้อมูลสุขภาพ</th>
                                                </tr>

                                                <tr>
                                                    <th colSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ดูข้อมูลส่วนบุคคล</th>
                                                    <th colSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>พิมพ์ข้อมูล</th>
                                                    <th colSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ดูข้อมูลการศึกษา</th>
                                                    <th colSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>พิมพ์ข้อมูล</th>
                                                    <th colSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ดูข้อมูลสุขภาพ</th>
                                                    <th colSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>พิมพ์ข้อมูล</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {data[0].subjects.map((subject) => (
                                                    <tr key={subject.id} style={{ height: '50px' }}>
                                                        <td style={{ backgroundColor: '#FFFFFF' }}>{subject.student_id}</td>
                                                        <td style={{ backgroundColor: '#FFFFFF' }}>{subject.first_name + "  " + subject.last_name}</td>
                                                        {/* <td style={{ backgroundColor: '#FFFFFF' }}>
                                                        <Link to="/Education_information" className="d-flex justify-content-center" style={{ textDecoration: 'none' }}>
                                                            <button type="submit" class="btn btn-custom" style={{ ...fontStyle, backgroundColor: '#A0C3D2', color: 'white', fontSize: '16px' }}>
                                                                <span>ดูข้อมูลส่วนบุคคล</span>
                                                            </button>
                                                        </Link>

                                                        </td> */}
                                                        <td style={{ backgroundColor: '#FFFFFF' }}>
                                                            <a href="/Education_information" style={{ ...fontStyle}}>
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
                                                                <span style={{ ...fontStyle, color: 'black', fontSize: '16px' }}>ดูข้อมูลส่วนบุคคล</span>      
                                                            </a>
                                                        </td>
                                                        <td style={{ backgroundColor: '#FFFFFF' }}>
                                                            <i 
                                                                class="fs-5 bi-printer" 
                                                                style={{
                                                                color: 'black',
                                                                fontSize: '20px',
                                                                marginRight: '5px',
                                                                cursor: 'pointer' // เพิ่ม cursor: 'pointer' เพื่อแสดงว่าเป็นองค์ประกอบที่คลิกได้
                                                                }}
                                                                onClick={() => {
                                                                const fileUrl = "src/assets/พิมพ์ใบสมัครป.1.pdf";
                                                                const printWindow = window.open(fileUrl, "_blank", 'width=1000,height=800');
                                                                printWindow.print();
                                                                }}
                                                            ></i>
                                                        </td>

                                                        <td style={{ backgroundColor: '#FFFFFF' }}>
                                                        <Link to="/Education_information" className="d-flex justify-content-center" style={{ textDecoration: 'none' }}>
                                                            {/* <button type="submit" class="btn btn-custom" style={{ ...fontStyle, backgroundColor: '#A0C3D2', color: 'white', fontSize: '16px' }}>
                                                                <span>ดูข้อมูลส่วนการศึกษา</span>
                                                            </button> */}
                                                            <a href="/Education_information" style={{ ...fontStyle}}>
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
                                                                <span style={{ ...fontStyle, color: 'black', fontSize: '16px' }}>ดูข้อมูลการศึกษา</span>      
                                                            </a>
                                                        </Link>

                                                        </td>
                                                        <td style={{ backgroundColor: '#FFFFFF' }}>
                                                            <i 
                                                                class="fs-5 bi-printer" 
                                                                style={{
                                                                color: 'black',
                                                                fontSize: '20px',
                                                                marginRight: '5px',
                                                                cursor: 'pointer' // เพิ่ม cursor: 'pointer' เพื่อแสดงว่าเป็นองค์ประกอบที่คลิกได้
                                                                }}
                                                                onClick={() => {
                                                                const fileUrl = "src/assets/พิมพ์ใบสมัครป.1.pdf";
                                                                const printWindow = window.open(fileUrl, "_blank", 'width=1000,height=800');
                                                                printWindow.print();
                                                                }}
                                                            ></i>
                                                        </td>

                                                        <td style={{ backgroundColor: '#FFFFFF' }}>
                                                            <Link to="/Education_information" className="d-flex justify-content-center" style={{ textDecoration: 'none' }}>
                                                            {/* <button type="submit" class="btn btn-custom" style={{ ...fontStyle, backgroundColor: '#A0C3D2', color: 'white', fontSize: '16px' }}>
                                                                <span>ดูข้อมูลสุขภาพ</span>
                                                            </button> */}
                                                            <a href="/Education_information" style={{ ...fontStyle}}>
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
                                                                <span style={{ ...fontStyle, color: 'black', fontSize: '16px' }}>ดูข้อมูลสุขภาพ</span>      
                                                            </a>
                                                            </Link>
                                                        </td>
                                                        <td style={{ backgroundColor: '#FFFFFF' }}>
                                                            <i 
                                                                class="fs-5 bi-printer" 
                                                                style={{
                                                                color: 'black',
                                                                fontSize: '20px',
                                                                marginRight: '5px',
                                                                cursor: 'pointer' // เพิ่ม cursor: 'pointer' เพื่อแสดงว่าเป็นองค์ประกอบที่คลิกได้
                                                                }}
                                                                onClick={() => {
                                                                const fileUrl = "src/assets/พิมพ์ใบสมัครป.1.pdf";
                                                                const printWindow = window.open(fileUrl, "_blank", 'width=1000,height=800');
                                                                printWindow.print();
                                                                }}
                                                            ></i>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                <br />
                                <Link to="/Filter_student_information">
                                    <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '16px', textAlign: 'right'}}><span>ย้อนกลับ</span></button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
            </div>
        </div> 
    </div> 
        </>
    );
};

export default Student_List_Information;
