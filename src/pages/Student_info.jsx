import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import school_logo from "../images/IMG_5416.png";
import printer_icon from "../images/printer_icon.png";
import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar'
import Header from '../components/Header';
import Parent_Information from './Parent_Information';
import Student_Address from './Student_Address'
import Student_Information from './Student_Information';
const Student_info = () => {

    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };
    
    const fontStyle = {
        color: 'white',
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
        { id: '001', name: 'วิชา A', grade: 'A'},
        { id: '002', name: 'วิชา B', grade: 'A'},
        { id: '003', name: 'วิชา C', grade: 'B'},
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

            <Header header="ระบบจัดการข้อมูลส่วนบุคคล" subhead="" />  
             
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <Sidebar />
            
        <div className="col-md-7">
            {/* <div className="container flex-column align-items-center">
                <h2 className="card-heading text-left mx-auto ml-auto" style={{ fontSize: '20px', marginTop: '2px' }}>ผลการค้นหา</h2>
            </div> */}
            <br />
            <div className="card" style={{ border: '1px solid white' }}>
                
                    <div className="form-group col-md-0 fone" style={{paddingTop: '40px', padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>
                        <div className="d-flex align-items-center" style={{ marginBottom: '20px' }}>
                            <h2 className="card-heading px-4" style={{ fontSize: '25px', fontWeight: 'bold' }}>ผลการค้นหา</h2>
                            <Link to="/Filter_student_information">
                                <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '18px', textAlign: 'right', marginTop: '-15px'}}><span>ค้นหาข้อมูลใหม่</span></button>
                            </Link>
                        </div>

                        <div className="card mx-auto my-auto"  style={{ width: "1300px"}}>
                            <div className="card-body">
                                <div className="form-group col-md-0 fone" style={{ padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-2" style={{ fontSize: '20px', marginTop: '2px' }}>ข้อมูลรายชื่อ</h2>
                                        <h2 className="card-heading px-2" style={{ fontSize: '20px', marginTop: '2px' }}>&gt;</h2>
                                        <h2 className="card-heading px-2" style={{ fontSize: '20px', marginTop: '2px' }}>รายละเอียด</h2>
                                    </div>
                                    {/* <br /> */}
                                <div className="card mx-auto my-auto"  style={{ border: '1px solid white',width: "1200px"}}>
                                    
                                        <div className="form-group col-md-0 fone" style={{ whiteSpace: "nowrap" }}>
                                            <div className="container d-flex justify-content-end">
                                                <span
                                                className="btn btn-link px-0"
                                                style={{ color: 'black', textDecoration: 'none', fontFamily: 'Kanit, sans-serif', marginRight: '4px', cursor: 'pointer', marginTop: '-2px' }}
                                                onClick={() => {
                                                    const fileUrl = "src/assets/พิมพ์ใบสมัครป.1.pdf";
                                                    const printWindow = window.open(fileUrl, "_blank", 'width=1000,height=800');
                                                    printWindow.print();
                                                }}
                                                >
                                                พิมพ์ข้อมูล
                                                </span>

                                                <img
                                                    src={printer_icon}  // Replace with the path to your printer icon image
                                                    alt="Printer Icon"
                                                    style={{ width: '25px', height: '25px', cursor: 'pointer', marginTop: '5px' }}
                                                    // onClick={() => {
                                                    //     const fileUrl = "src/assets/พิมพ์ใบสมัครป.1.pdf";
                                                    //     const printWindow = window.open(fileUrl, "_blank", 'width=1000,height=800');
                                                    //     printWindow.print();
                                                    // }}
                                                />
                                            </div>
                                            
            {/* <div class="card"style={{ border: '10px' }} >                         */}
                <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#menu1" style={{fontFamily: 'Kanit, sans-serif' }}>ข้อมูลนักเรียน</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#menu2" style={{fontFamily: 'Kanit, sans-serif' }}>ที่อยู่ตามทะเบียนบ้าน</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#menu3" style={{fontFamily: 'Kanit, sans-serif' }}>ข้อมูลผู้ปกครอง</a>
                    </li>
                </ul>
            </div>
            <div class="card-body" > 
                <div class="tab-content">
                    <div class="tab-pane container active" id="menu1" ><Student_Information/></div>
                    <div class="tab-pane container fade" id="menu2"><Student_Address/></div>
                    <div class="tab-pane container fade" id="menu3"><Parent_Information /></div>
                </div>
            </div>
            </div>
                                    </div>
                                </div>              
                                <br />
                                <Link to="/Student_List_Information">
                                    <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, fontSize: '16px', textAlign: 'right'}}><span>ย้อนกลับ</span></button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            {/* </div> */}

        </>
    );
};

export default Student_info;
