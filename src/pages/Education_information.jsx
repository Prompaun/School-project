import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import school_logo from "../images/IMG_5416.png";
import printer_icon from "../images/printer_icon.png";
import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar'
import Header from '../components/Header';
const Education_information = () => {

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
            {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
               
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
            </nav> */}

            <Header header="ระบบจัดการข้อมูลการศึกษา" subhead="" />  
             
    <div className="container-fluid">
        <div className="row flex-nowrap">
            {/* <Sidebar /> */}
            
        <div className="col-md">
            {/* <div className="container flex-column align-items-center">
                <h2 className="card-heading text-left mx-auto ml-auto" style={{ fontSize: '20px', marginTop: '2px' }}>ผลการค้นหา</h2>
            </div> */}
            <br />
            <div className="card" style={{border: '1px solid white' }}>
                
                    <div className="form-group col-md-0 fone" style={{paddingTop: '40px', padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>
                        <div className="d-flex align-items-center" style={{ marginBottom: '20px' }}>
                            <h2 className="card-heading px-4" style={{ fontSize: '25px', fontWeight: 'bold' }}>ผลการค้นหา</h2>
                            <Link to="/Filter_student_information">
                                <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '18px', textAlign: 'right', marginTop: '-15px'}}><span>ค้นหาข้อมูลใหม่</span></button>
                            </Link>
                        </div>

                        <div className="card "  style={{ width: "1300px"}}>
                            <div className="card-body">
                                <div className="form-group col-md-0 fone" style={{ padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-2" style={{ fontSize: '20px', marginTop: '2px' }}>ข้อมูลรายชื่อ</h2>
                                        <h2 className="card-heading px-2" style={{ fontSize: '20px', marginTop: '2px' }}>&gt;</h2>
                                        <h2 className="card-heading px-2" style={{ fontSize: '20px', marginTop: '2px' }}>รายละเอียด</h2>
                                    </div>

                                <br />
                                <div className="card mx-auto my-auto"  style={{ width: "1200px"}}>
                                    <div className="card-body">
                                        <div className="form-group col-md-0 fone" style={{ padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>
                                            <div className="d-flex align-items-center">
                                                <h2 className="card-heading px-2" style={{ fontSize: '18px', marginTop: '2px' }}>เลขประจำตัวนักเรียน</h2>
                                                <h2 className="card-heading px-3" style={{ fontSize: '18px', marginTop: '4px' }}>6301012630095</h2>
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
                                                        onClick={() => {
                                                            const fileUrl = "src/assets/พิมพ์ใบสมัครป.1.pdf";
                                                            const printWindow = window.open(fileUrl, "_blank", 'width=1000,height=800');
                                                            printWindow.print();
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <br />

                                            <div className="row" style={{ fontFamily: 'Kanit, sans-serif', gap: '0', whiteSpace: "nowrap" }}>
                                            <div className="col-sm d-flex align-items-center">
                                                <h2 className="card-heading px-2" style={{ fontSize: '18px', marginTop: '2px' }}>ชื่อ-นามสกุล</h2>
                                                <h2 className="card-heading px-4" style={{ fontSize: '18px', marginTop: '5px' }}>เด็กหญิงนทณรรณ ฝันดี</h2>
                                            </div>
                                            </div>
                                            <br />
                                            <div className="row" style={{ fontFamily: 'Kanit, sans-serif', gap: '0', whiteSpace: "nowrap" }}>
                                                <div className="col-sm d-flex align-items-center">
                                                    <h2 className="card-heading px-2" style={{ fontSize: '18px', marginTop: '2px' }}>ปีการศึกษา</h2>
                                                    <h2 className="card-heading px-4" style={{ fontSize: '18px', marginTop: '3px' }}>2565</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <br />
                                <div className="container flex-column align-items-center">
                                    <div className="d-flex justify-content-center" style={{ height: '300px', overflowY: 'auto', marginLeft: '0px' }}>
                                        <table className="table-bordered" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontFamily: 'Kanit, sans-serif', borderColor: '#D3D3D3' }}>
                                            <thead>
                                                <tr>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>รหัสวิชา</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ชื่อวิชา</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ผลการเรียน</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {data[0].subjects.map((subject) => (
                                                    <tr key={subject.id} style={{ height: '50px' }}>
                                                        <td style={{ backgroundColor: '#FFFFFF' }}>{subject.id}</td>
                                                        <td style={{ backgroundColor: '#FFFFFF' }}>{subject.name}</td>
                                                        <td style={{ backgroundColor: '#FFFFFF' }}>{subject.grade}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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
            </div>
        
        </>
    );
};

export default Education_information;
