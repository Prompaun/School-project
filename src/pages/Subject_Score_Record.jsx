import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import school_logo from "../images/IMG_5416.png";
import Sidebar from '../components/Sidebar';
// import Navbar from '../components/Navbar'
import Header from '../components/Header';
const Subject_Score_Record = () => {

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

    const [data, setData] = useState([
        {
            subjects: [
            { activity: '1', Assessment5: '-กลางภาค', Assessment6: '-ปลายภาค', Assessment_Ratio: '70'},
            { activity: '2', Assessment1: '-การบ้าน/ทดสอบย่อย', Assessment2: '-บทที่ 1', Assessment3: '-บทที่ 2', Assessment4: '-บทที่ 3', Assessment5: '-บทที่ 4', Assessment6: '-บทที่ 5', Assessment7: '-บทที่ 6', Assessment8: '-บทที่ 7', Assessment9: '-บทที่ 8', Assessment10: '-บทที่ 9', Assessment11: '-บทที่ 10', Assessment_Ratio: '30'},
            // { activity: '6301012610000', Assessment1: 'เด็กหญิงตั้งใจเรียน', Assessment2: 'เรียนดี'},
            // เพิ่มข้อมูลผลการเรียนตามต้องการ
            ]
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
                <Link
                        to = "/Login_personnel"
                        style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                        Log out
                    </Link>
                </span>
                </div>
            </div>
            </nav> */}

            <Header header="ระบบจัดการข้อมูลการศึกษา" subhead="บันทึกคะแนนรายวิชา" />  
             
    <div className="container-fluid">
        <div className="row flex-nowrap">
            {/* <Sidebar /> */}
        
        <div className="col-md">
                       
            {/* <br /> */}
            
            <div className="card " style={{maxWidth: "1300px", border: '1px solid white' }}>
                <div className="card-body">
                    <div className="form-group col-md-0 fone" style={{ padding: '32px', margin: '10px', whiteSpace: "nowrap" }}>
                        <div className="d-flex align-items-center">
                            <h2 className="card-heading px-4" style={{ fontSize: '20px', marginTop: '2px' }}>บันทึกคะแนน</h2>
                        </div>

                        <div className="card mx-auto my-auto"  style={{ width: "1200px"}}>
                            <div className="card-body">
                                <div className="form-group col-md-0 fone" style={{ padding: '10px', whiteSpace: "nowrap" }}>
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-2" style={{ fontSize: '20px', marginTop: '2px' }}>รายละเอียด</h2>
                                    </div>

                                    <br />
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginTop: '2px', marginLeft: '20px', marginRight: '15px' }}>ปีการศึกษา</h2>
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
                                        
                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginTop: '2px', marginRight: '15px' }}>ภาคการศึกษา</h2>
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
                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginTop: '2px', marginLeft: '20px', marginRight: '15px' }}>วิชา</h2>
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
                                               
                                        <h2 className="card-heading px-0" style={{ fontSize: '18px', marginTop: '2px', marginRight: '15px' }}>ห้อง</h2>
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
                                </div>
                            </div>
                        </div>
                            
                        <br /><br />
                        
                            <h2 className="card-heading px-4" style={{ fontSize: '20px', marginTop: '2px' }}>เกณฑ์การให้คะแนน</h2>
                        
                            <div className="card mx-auto my-auto"  style={{ width: "1200px"}}>
                        <div className="card-body">                        
                            <div className="d-flex justify-content-center" style={{ height: '500px', overflowY: 'auto', marginLeft: '0px' }}>
                                <table className="table-bordered" style={{ fontSize: '16px', width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontFamily: 'Kanit, sans-serif', borderColor: '#D3D3D3', marginTop: '0px' }}>
                                    <thead>
                                        <tr style={{ height: '50px' }}>
                                            <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>กิจกรรมที่</th>
                                            <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>การประเมิน</th>
                                            <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>สัดส่วนการประเมิน</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr style={{ height: '110px' }}>
                                        <td>1</td>
                                        <td rowSpan="1">-กลางภาค<br />-ปลายภาค</td>
                                        <td rowSpan="1">30</td>
                                        </tr>
 
                                        <tr>
                                            <td >2</td>
                                            <td >-การบ้าน/ทดสอบย่อย<br />-บทที่ 1<br />-บทที่ 2<br />-บทที่ 3<br />-บทที่ 4<br />-บทที่ 5<br />-บทที่ 6<br />-บทที่ 7<br />-บทที่ 8<br />-บทที่ 9<br />-บทที่ 10</td>
                                            <td >70</td>
                                        </tr>
                                    </tbody>

                                    {/* <tbody>
                                        {data[0].subjects.map((subject) => (
                                            <tr key={subject.id} style={{ height: '100px' }}>
                                                <td style={{ backgroundColor: '#FFFFFF' }}>{subject.activity}</td>
                                                <td style={{ backgroundColor: '#FFFFFF' }}>
                                                    {subject.Assessment1}<br />
                                                    {subject.Assessment2}<br />
                                                    {subject.Assessment3}<br />
                                                    {subject.Assessment4}<br />
                                                    {subject.Assessment5}<br />
                                                    {subject.Assessment6}<br />
                                                    {subject.Assessment7}<br />
                                                    {subject.Assessment8}<br />
                                                    {subject.Assessment9}<br />
                                                    {subject.Assessment10}<br />
                                                    {subject.Assessment11}
                                                    {subject.id === 2}
                                                </td>
                                                <td style={{ backgroundColor: '#FFFFFF' }}>{subject.Assessment_Ratio}</td>
                                            </tr>
                                        ))}
                                    </tbody> */}
                                </table>
                                
                                <br />
                            </div>
                        </div>
                        </div>
                        <br /><br />
                        <div className="d-flex align-items-center">
                            <h2 className="card-heading px-4" style={{ fontSize: '20px', marginTop: '2px' }}>การบันทึกคะแนน</h2>
                        </div>

                        <div className="card mx-auto my-0"  style={{ width: "1200px"}}>
                            <div className="card-body">
                                <div className="form-group col-md-0 fone" style={{ padding: '10px', whiteSpace: "nowrap" }}>

                                {/* <div className="container flex-column align-items-center">
                                </div> */}

                                <div className="d-flex align-items-center">
                                    <h2 className="card-heading px-2" style={{ fontSize: '18px', marginLeft: '20px', marginTop: '10px' }}>อัปโหลดไฟล์คะแนน</h2>
                                    <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '18px', textAlign: 'right', marginTop: '1px'}}><span>Export file</span></button>
                                    <h2 className="card-heading px-2" style={{ fontSize: '18px', marginTop: '10px' }}>/ Update data</h2>
                                    <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '18px', textAlign: 'right', marginTop: '1px'}}><span>
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

                                <br />
                                <div className="d-flex align-items-center">
                                    <h2 className="card-heading px-2" style={{ fontSize: '16px', marginLeft: '20px', marginTop: '2px' }}>ตัวอย่างไฟล์ที่อัปโหลด</h2>
                                </div>

                                {/* <div className="container flex-column align-items-center"> */}
                                
                                <div className="card mx-auto my-0"  style={{ width: "800px"}}>
                                    <div className="card-body">
                                        {/* <div className="form-group col-md-0 fone" style={{ padding: '10px', whiteSpace: "nowrap" }}>
                                
                                        </div> */}
                                    </div>
                                </div>
                                {/* </div> */}

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
        </div>
        </div>
      
    </div>
        </>
    );
};

export default Subject_Score_Record;
