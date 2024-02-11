import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import school_logo from "../images/IMG_5416.png";
import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar'
import Header from '../components/Header';
const Manage_health_data = () => {

    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };
    
    const fontStyle = {
        fontFamily: 'Kanit, sans-serif',
        textDecoration: 'none'
      };

    //   const handleSelectYearChange = (event) => {
    //     setSelectedYear(event.target.value);
    //   };
      
      const yearsList = ["2566", "2565", "2564", "2563", "2562", "2561", "2560"];
    //   const [selectedYear, setSelectedYear] = useState();

    const [selectedYear, setSelectedYear] = useState("เลือกปีการศึกษา");
    const [selectedSemester, setSelectedSemester] = useState("เลือกภาคการศึกษา");
    const [selectedSubject, setSelectedSubject] = useState("เลือกวิชา");
    const [selectedRoom, setSelectedRoom] = useState("เลือกห้อง");

    const [selectedOption, setSelectedOption] = useState('เลือกหลักสูตร');
    
    const handleSelectYearChange = (event) => {
      setSelectedYear(event.target.value);
      // ตั้งค่าให้ดรอปดาวน์ "ภาคการศึกษา" เป็นค่าเริ่มต้น
      setSelectedSemester("เลือกภาคการศึกษา");
      setSelectedSubject("เลือกวิชา");
      setSelectedRoom("เลือกห้อง");
    };
    
    const handleSelectSemesterChange = (event) => {
      setSelectedSemester(event.target.value);
      setSelectedSubject("เลือกวิชา");
      setSelectedRoom("เลือกห้อง");
    };
    
    const handleSelectSubjectChange = (event) => {
      setSelectedSubject(event.target.value);
      setSelectedRoom("เลือกห้อง");
    };
    
    const handleSelectRoomChange = (event) => {
      setSelectedRoom(event.target.value);
    };

    useEffect(() => {
        // ตั้งค่าค่าเริ่มต้นของ dropdown เมื่อหน้าจอถูก refresh
        setSelectedOption('เลือกหลักสูตร');
    }, []); // ใช้ [] เพื่อให้ useEffect ทำงานเพียงครั้งเดียวหลังจากการ render แรก

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };

      const [data, setData] = useState([
        {
            enrollments: [
            { id: '44789', Applicants_first_name: 'เด็กหญิงกรกนก', Applicants_last_name: 'เทพไทย', status: 'มอบตัวสำเร็จ'},
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
                <Link
                        to = "/Login_personnel"
                        style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                        Log out
                    </Link>
                </span>
                </div>
            </div>
            </nav>

            <Header header="ระบบจัดการข้อมูลสุขภาพ" subhead="อัปโหลดข้อมูลสุขภาพ" />  
             
    <div className="container-fluid">
        <div className="row flex-nowrap">
            {/* <Sidebar />        */}
        <div className="col-md">
            <div className="card " style={{maxWidth: "1300px", border: '1px solid white' }}>
                <div className="card-body">
                    <div className="form-group col-md-0 fone" style={{ padding: '32px', margin: '10px', whiteSpace: "nowrap" }}>
                        <div className="d-flex align-items-center">
                            <h2 className="card-heading px-4" style={{ fontSize: '20px', marginTop: '0px' }}>รายชื่อนักเรียน</h2>
                        </div>

                        <div className="card mx-auto my-auto"  style={{ width: "1200px"}}>
                            <div className="card-body">
                                <div className="form-group col-md-0 fone" style={{ padding: '10px', whiteSpace: "nowrap" }}>
                                    {/* <br /> */}
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginLeft: '20px', marginRight:'0px', marginTop: '15px' }}>ปีการศึกษา</h2>

                                        <select value={selectedOption} onChange={handleSelectChange} style={{ fontSize: '18px', fontFamily: 'Kanit, sans-serif', marginLeft: '10px', marginRight:'20px', marginTop: '0px' }}>
                                            <option value="เลือกหลักสูตร">เลือกปีการศึกษา</option>
                                            <option value="English Program (EP)">2566</option>
                                            <option value="Regular Program">2565</option>
                                        </select>

                                        <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '18px', textAlign: 'right', marginTop: '-9px'}}><span>Export file</span></button>
                                        <h2 className="card-heading px-2" style={{ fontSize: '18px', marginTop: '10px' }}>/ Update data</h2>
                                        
                                        <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '18px', textAlign: 'right', marginTop: '-9px'}}><span>
                                        <i 
                                            class="fs-5 bi-cloud-upload" 
                                            style={{
                                            color: 'white',
                                            fontSize: '20px',
                                            marginRight: '5px',
                                            cursor: 'pointer' // เพิ่ม cursor: 'pointer' เพื่อแสดงว่าเป็นองค์ประกอบที่คลิกได้
                                            }}
                                        ></i>Upload file</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <br />
                        <div className="card mx-auto my-auto"  style={{ width: "1200px"}}>
                            <div className="card-body">
                                <div className="container flex-column align-items-center">
                                    <div className="d-flex justify-content-center" style={{ height: '150px', overflowY: 'auto', marginLeft: '0px', padding:'10px' }}>
                                {/* <div className="card mx-auto my-0"  style={{ width: "800px"}}>
                                    <div className="card-body"> */}
                                        <table className="table-bordered" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontFamily: 'Kanit, sans-serif', borderColor: '#D3D3D3' }}>
                                            <thead>
                                                <tr>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>เลขประจำตัวนักเรียน</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ชื่อ-นามสกุล</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>รายละเอียด</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>พิมพ์ข้อมูล</th>
                                                </tr>
                                            </thead>
                                            {/* #32CD32 */}
                                            <tbody>
                                                {data[0].enrollments.map((enrollment) => (
                                                    <tr key={enrollment.id} style={{ height: '100px' }}>
                                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{enrollment.id}</td>
                                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{enrollment.Applicants_first_name + "  " + enrollment.Applicants_last_name}</td>
                                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px'}}>
                                                            <a href="/Education_information" style={{ ...fontStyle}}>
                                                                <i 
                                                                    class="fs-5 bi-search" 
                                                                    style={{
                                                                        color: 'black',
                                                                        fontSize: '20px',
                                                                        marginRight: '5px'
                                                                    }}
                                                                ></i>                 
                                                                <span style={{ ...fontStyle, color: 'black', fontSize: '16px' }}>ดูข้อมูลสุขภาพ</span>         
                                                            </a>
                                                        </td>
                                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px'}}><a href="/Education_information" style={{ ...fontStyle}}>
                                                            <i 
                                                                class="fs-5 bi-printer" 
                                                                style={{
                                                                    color: 'black',
                                                                    fontSize: '20px',
                                                                    marginRight: '5px'
                                                                }}
                                                            ></i>                      
                                                            </a>
                                                        </td>
                                                        {/* <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px', color: '#32CD32', fontWeight: 'bold' }}>{enrollment.status}</td> */}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                {/* <br /> */}
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

export default Manage_health_data;
