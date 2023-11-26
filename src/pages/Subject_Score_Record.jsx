import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import school_logo from "../images/IMG_5416.png";
import printer_icon from "../images/printer_icon.png";
import search_icon from "../images/search_icon.png";

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

    //   const handleSelectYearChange = (event) => {
    //     setSelectedYear(event.target.value);
    //   };
      
      const yearsList = ["2566", "2565", "2564", "2563", "2562", "2561", "2560"];
    //   const [selectedYear, setSelectedYear] = useState();

    const [selectedYear, setSelectedYear] = useState("เลือกปีการศึกษา");
    const [selectedSemester, setSelectedSemester] = useState("เลือกภาคการศึกษา");
    const [selectedSubject, setSelectedSubject] = useState("เลือกวิชา");
    const [selectedRoom, setSelectedRoom] = useState("เลือกห้อง");
    
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

            <Header header="ระบบจัดการข้อมูลการศึกษา" subhead="" />  
             
            <br />
            <div className="card mx-auto my-0" style={{ width: "1000px", border: '1px solid white' }}>
                <div className="card-body">
                    <div className="form-group col-md-0 fone" style={{ padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>
                        <div className="d-flex align-items-center">
                            <h2 className="card-heading px-4" style={{ fontSize: '20px', marginTop: '2px' }}>บันทึกคะแนน</h2>
                        </div>

                        <div className="card mx-auto my-0"  style={{ width: "900px"}}>
                            <div className="card-body">
                                <div className="form-group col-md-0 fone" style={{ padding: '10px', whiteSpace: "nowrap" }}>
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-2" style={{ fontSize: '20px', marginTop: '2px' }}>รายละเอียด</h2>
                                    </div>

                                    <br />
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginTop: '2px', marginLeft: '20px', marginRight: '20px' }}>ปีการศึกษา</h2>
                                        <div className="dropdown px-0" style={{ width: '150px', marginRight: '30px' }}>
                                            <select
                                            value={selectedYear}
                                            onChange={handleSelectYearChange}
                                            className="custom-select"
                                            style={{ width: '150px' }}
                                            >
                                            <option value="เลือกปีการศึกษา">เลือกปีการศึกษา</option>
                                            {yearsList.map((year) => (
                                                <option key={year} value={year}>
                                                {/* ปีการศึกษา {year} */}
                                                {year}
                                                </option>
                                            ))}
                                            </select>
                                        </div>

                                        {/* แสดง "ภาคการศึกษา" เมื่อเลือก "ปีการศึกษา" */}
                                        
                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginTop: '2px', marginRight: '20px' }}>ภาคการศึกษา</h2>
                                        <div className="dropdown px-0" style={{ width: '150px', marginRight: '30px' }}>
                                            <select
                                            value={selectedSemester}
                                            onChange={handleSelectSemesterChange}
                                            className="custom-select"
                                            style={{ width: '150px' }}
                                            >
                                                
                                            <option value="เลือกภาคการศึกษา">เลือกภาคการศึกษา</option>
                                                {selectedYear !== "เลือกปีการศึกษา" && (
                                                <>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                </>
                                                    )}
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <br />
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginTop: '2px', marginLeft: '20px', marginRight: '20px' }}>วิชา</h2>
                                        <div className="dropdown px-0" style={{ width: '150px', marginRight: '30px' }}>
                                            <select
                                            value={selectedSubject}
                                            onChange={handleSelectSubjectChange}
                                            className="custom-select"
                                            style={{ width: '150px' }}
                                            >
                                            <option value="เลือกวิชา">เลือกวิชา</option>

                                            {selectedSemester !== "เลือกภาคการศึกษา" && (
                                            <>
                                                <option value="คณิต">คณิต</option>
                                                <option value="ไทย">ไทย</option>
                                            </>
                                            )}
                                            </select>
                                        </div>
                                               
                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginTop: '2px', marginRight: '20px' }}>ห้อง</h2>
                                        <div className="dropdown px-0" style={{ width: '150px' }}>
                                            <select
                                            value={selectedRoom}
                                            onChange={handleSelectRoomChange}
                                            className="custom-select"
                                            style={{ width: '150px' }}
                                            >
                                            <option value="เลือกห้อง">เลือกห้อง</option>
                                                {selectedSubject !== "เลือกวิชา" && (
                                                    <>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                    </>
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginTop: '2px', marginLeft: '20px', marginRight: '20px' }}>ปีการศึกษา</h2>
                                        <div class="dropdown px-0" style={{ width: '150px', marginRight: '30px' }}>
                                            <select
                                                value={selectedYear}
                                                onChange={handleSelectYearChange}
                                                class="custom-select"
                                                style={{ width: '150px' }}
                                                >
                                                <option value="เลือกปีการศึกษา">เลือกปีการศึกษา</option>
                                                {yearsList.map((year) => (
                                                    <option key={year} value={year}>
                                                    ปีการศึกษา {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginTop: '2px', marginRight: '20px' }}>ภาคการศึกษา</h2>
                                        <div class="dropdown px-0" style={{ width: '150px' }}>
                                            <select
                                                value={selectedYear}
                                                onChange={handleSelectYearChange}
                                                class="custom-select"
                                                style={{ width: '150px' }}
                                                >
                                                <option value="เลือกปีการศึกษา">เลือกปีการศึกษา</option>
                                                {yearsList.map((year) => (
                                                    <option key={year} value={year}>
                                                    ปีการศึกษา {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <br />
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginTop: '2px', marginLeft: '20px', marginRight: '20px' }}>วิชา</h2>
                                        <div class="dropdown px-0" style={{ width: '150px', marginRight: '30px' }}>
                                            <select
                                                value={selectedYear}
                                                onChange={handleSelectYearChange}
                                                class="custom-select"
                                                style={{ width: '150px' }}
                                                >
                                                <option value="เลือกปีการศึกษา">เลือกปีการศึกษา</option>
                                                {yearsList.map((year) => (
                                                    <option key={year} value={year}>
                                                    ปีการศึกษา {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginTop: '2px', marginRight: '20px' }}>ห้อง</h2>
                                        <div class="dropdown px-0" style={{ width: '150px' }}>
                                            <select
                                                value={selectedYear}
                                                onChange={handleSelectYearChange}
                                                class="custom-select"
                                                style={{ width: '150px' }}
                                                >
                                                <option value="เลือกปีการศึกษา">เลือกปีการศึกษา</option>
                                                {yearsList.map((year) => (
                                                    <option key={year} value={year}>
                                                    ปีการศึกษา {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div> */}
                                <br />
                                <Link to="/">
                                    <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '16px', textAlign: 'right'}}><span>บันทึก</span></button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br />
        </>
    );
};

export default Student_List_Information;
