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
           
            <Header header="ระบบจัดการข้อมูลการศึกษา" subhead="บันทึกคะแนนรายวิชา" />  
             <div style={{height:"150vh",fontFamily:"Kanit, sans-serif"}}>
            <div className="container"> 
            <div className="flex-column"> 
                <div className="justify-content-center"> 
                       
                <div className="container d-flex align-items-center"style={{ flexWrap: 'wrap',marginTop:"20px"  }}>
                            <h2 className="card-heading"style={{ fontSize: '25px', fontWeight: 'bold'}}>บันทึกคะแนน</h2>
                        </div>
                    
                    <div className="container d-flex align-items-center"style={{ flexWrap: 'wrap',marginTop:"20px"  }}>
                        
                        <div className="card"  style={{width: "100vw"}}>
                            <div className="card-body">
                                <div className="form-group col-md-0 fone" style={{ padding: '10px' }}>
                                <div className="d-flex align-items-center"style={{ flexWrap: 'wrap'}}>
                                    <span style={{margin:"10px",fontWeight: 'bold',fontSize:"20px"}}>เกณฑ์การให้คะแนน</span>
                                    </div>
                        
                                    <div className="d-flex align-items-center"style={{ flexWrap: 'wrap' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '18px'}}>
                                    <div className="d-flex align-items-center">
                                        <span style={{margin:"10px"}}>ปีการศึกษา :</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                        <div className="dropdown" style={{ maxWidth: '100%' }}>
                                            <select
                                            value={selectedYear}
                                            onChange={handleSelectYearChange}
                                            className="custom-select"
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
                                        </div>
                                        </div>
                                        {/* แสดง "ภาคการศึกษา" เมื่อเลือก "ปีการศึกษา" */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '18px'}}>
                                    <div className="d-flex align-items-center">
                                    <span style={{margin:"10px"}}>ภาคการศึกษา :</span>
                                    </div>
                                        <div className="d-flex align-items-center">
                                        <div className="dropdown" style={{ maxWidth: '100%' }}>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <select
                                            value={selectedSemester}
                                            onChange={handleSelectSemesterChange}
                                            className="custom-select"
                                            
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
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '18px'}}>
                                    <div className="d-flex align-items-center">
                                    <span style={{margin:"10px"}}>วิชา :</span>
                                    </div>
                                        <div className="d-flex align-items-center">
                                        <div className="dropdown" style={{ maxWidth: '100%' }}>
                                            <select
                                            value={selectedSubject}
                                            onChange={handleSelectSubjectChange}
                                            className="custom-select"
                                      
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
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '18px'}}>
                                    <div className="d-flex align-items-center">    
                                    <span style={{margin:"10px"}}>ห้อง :</span>
                                    </div>
                                        <div className="d-flex align-items-center">
                                        <div className="dropdown" style={{ maxWidth: '100%' }}>
                                            <select
                                            value={selectedRoom}
                                            onChange={handleSelectRoomChange}
                                            className="custom-select"
                                           
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
                            </div>
                       
                        
                           
                        <div className="container flex-column align-items-center">
                            {/* <table className="table-bordered" style={{ textAlign: 'center',fontFamily: 'Kanit, sans-serif'}}> */}
                            <div className="d-flex justify-content-center" style={{ height: 'auto', overflowY: 'auto' }}>
                            <div className="table-responsive">
                            <table className="table table-bordered table-hover" style={{ borderCollapse: 'collapse', textAlign: 'center',fontFamily: 'Kanit, sans-serif' }}>
                                    <thead>
                                        <tr style={{ height: '50px' }}>
                                            <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'bold',fontSize:"18px" }}>กิจกรรมที่</th>
                                            <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'bold',fontSize:"18px" }}>การประเมิน</th>
                                            <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'bold',fontSize:"18px" }}>สัดส่วนการประเมิน</th>
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
                        
                        
                       
                                <div className="form-group col-md-0 fone" style={{ padding: '10px'}}> 
                                <div className="d-flex align-items-center"style={{ flexWrap: 'wrap'}}>
                                    <span style={{margin:"10px",fontWeight: 'bold',fontSize:"20px"}}>การบันทึกคะแนน</span>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '18px',padding:"10px"}}>
                                        <div className="align-items-center">
                                            <h2 className="card-heading" style={{ fontSize: '18px', marginTop: '10px',marginRight:"5px" }}>อัปโหลดไฟล์คะแนน</h2>
                                            </div>
                                            <div className="align-items-center">
                                            <button type="submit" class="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '18px', textAlign: 'right', marginTop: '1px',marginRight:"5px"}}><span>Export file</span></button>
                                            </div>
                                   
                                        <div className="align-items-center">
                                        <h2 className="card-heading" style={{ fontSize: '18px', marginTop: '10px',marginRight:"5px" }}>/ Update data</h2>
                                        </div>
                                        <div className="align-items-center">
                                        <button type="submit" class="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '18px', textAlign: 'right', marginTop: '1px',marginRight:"5px"}}><span>
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
                                    <div className="align-items-center"style={{ padding: '10px'}}>
                                <div className="d-flex align-items-center">
                                    <h2 className="card-heading" style={{ fontSize: '16px', marginTop: '2px' }}>ตัวอย่างไฟล์ที่อัปโหลด</h2>
                                </div>

                                {/* <div className="container flex-column align-items-center"> */}
                                
                                <div className="card"  style={{ maxWidth:"100%"}}>
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
