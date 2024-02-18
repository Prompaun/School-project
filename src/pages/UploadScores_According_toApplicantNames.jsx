import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import school_logo from "../images/IMG_5416.png";
const UploadScores_According_toApplicantNames = () => {

    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };
    
    const fontStyle = {
        fontFamily: 'Kanit, sans-serif',
        textDecoration: 'none'
      };

    const [selectedCourseOption, setSelectedCourseOption] = useState('เลือกหลักสูตร');
    // const [selectedStatusOption, setSelectedStatusOption] = useState('เลือกสถานะ');
    
    // const handleSelectYearChange = (event) => {
    //   setSelectedYear(event.target.value);
    //   // ตั้งค่าให้ดรอปดาวน์ "ภาคการศึกษา" เป็นค่าเริ่มต้น
    //   setSelectedSemester("เลือกภาคการศึกษา");
    //   setSelectedSubject("เลือกวิชา");
    //   setSelectedRoom("เลือกห้อง");
    // };
    
    // const handleSelectSemesterChange = (event) => {
    //   setSelectedSemester(event.target.value);
    //   setSelectedSubject("เลือกวิชา");
    //   setSelectedRoom("เลือกห้อง");
    // };
    
    // const handleSelectSubjectChange = (event) => {
    //   setSelectedSubject(event.target.value);
    //   setSelectedRoom("เลือกห้อง");
    // };
    
    // const handleSelectRoomChange = (event) => {
    //   setSelectedRoom(event.target.value);
    // };

    useEffect(() => {
        // ตั้งค่าค่าเริ่มต้นของ dropdown เมื่อหน้าจอถูก refresh
        setSelectedCourseOption('เลือกหลักสูตร');
    }, []); // ใช้ [] เพื่อให้ useEffect ทำงานเพียงครั้งเดียวหลังจากการ render แรก

    // useEffect(() => {
    //     // ตั้งค่าค่าเริ่มต้นของ dropdown เมื่อหน้าจอถูก refresh
    //     setSelectedStatusOption('เลือกหลักสูตร');
    // }, []); // ใช้ [] เพื่อให้ useEffect ทำงานเพียงครั้งเดียวหลังจากการ render แรก

    const handleSelectChange = (event) => {
        setSelectedCourseOption(event.target.value);
        // setSelectedStatusOption("");
      };

    //   const handleStatusChange = (event) => {
    //     setSelectedStatusOption(event.target.value);
    //   };

      const [data, setData] = useState([
        {
            enrollments: [
            { id: 'XX-XXXX', Applicants_first_name: 'เด็กหญิงฐิตานันนท์', Applicants_last_name: 'สดใส', score: '100', status: 'ผ่าน'},
            { id: 'XX-XXXX', Applicants_first_name: 'เด็กหญิงชาตรี', Applicants_last_name: 'อาทิตย์', score: '30', status: 'ไม่ผ่าน'},
            { id: 'XX-XXXX', Applicants_first_name: 'เด็กหญิงดวง', Applicants_last_name: 'จันทร์', score: '-', status: 'ขาดสอบ'},
            // เพิ่มข้อมูลผลการเรียนตามต้องการ
            ],
        },
        ]);


    return (
        <>  


            <Header header="ระบบการรับสมัครนักเรียน" subhead="อัปโหลดผลคะแนนตามรายชื่อผู้สมัคร" />  
             
            <div style={{height:"150vh",fontFamily:"Kanit, sans-serif"}}>
            <div className="container"> 
            <div className="flex-column"> 
                <div className="justify-content-center"> 
                       
                <div className="container d-flex align-items-center"style={{ flexWrap: 'wrap',marginTop:"20px"  }}>
                            <h2 className="card-heading"style={{ fontSize: '25px', fontWeight: 'bold'}}>อัปโหลดผลคะแนนตามรายชื่อผู้สมัคร</h2>
                        </div>
                    
                    <div className="container d-flex align-items-center"style={{ flexWrap: 'wrap',marginTop:"20px"  }}>
                        
                        <div className="card"  style={{width: "100vw"}}>
                            <div className="card-body">
                                <div className="form-group col-md-0 fone" style={{ padding: '10px'}}>
                                    {/* <br /> */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '18px'}}>
                                    <div className="d-flex align-items-center">
                                    <span style={{margin:"10px"}}>หลักสูตร :</span>
                                    </div>
                                        <div className="d-flex align-items-center">
                                        <div className="dropdown" style={{ maxWidth: '100%',marginRight:"5px"}}>
                                        <select value={selectedCourseOption} onChange={handleSelectChange} className="custom-select">
                                            <option value="หลักสูตร">เลือกหลักสูตร</option>
                                            <option value="English Program (EP)">English Program (EP)</option>
                                            <option value="Regular Program">Regular Program</option>
                                        </select>
                                    </div>
                                    </div>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '18px'}}>
                                    <div className="align-items-center">
                                    <h2 className="card-heading" style={{fontSize: '18px',margin:"10px" }}>คะแนนรายบุคคล</h2>
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
                                    </div>
                                <div className="d-flex align-items-center">
                                    <h2 className="card-heading" style={{ fontSize: '16px', marginLeft: '20px', marginTop: '2px' }}>ตัวอย่างไฟล์ที่อัปโหลด</h2>
                                </div>
                                
                                <div className="container flex-column align-items-center">
                            {/* <table className="table-bordered" style={{ textAlign: 'center',fontFamily: 'Kanit, sans-serif'}}> */}
                            <div className="d-flex justify-content-center" style={{ height: 'auto', overflowY: 'auto' }}>
                            <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover" style={{ borderCollapse: 'collapse', textAlign: 'center',fontFamily: 'Kanit, sans-serif', fontSize: '18px' }}>
                                            <thead>
                                                <tr>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF'}}>เลขที่สอบ</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF'}}>ชื่อ-นามสกุล</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF' }}>คะแนนที่ได้ (100)</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF' }}>สถานะ</th>
                                                </tr>
                                            </thead>
                                            {/* #32CD32 */}
                                            <tbody>
                                                {data[0].enrollments.map((enrollment) => (
                                                    <tr key={enrollment.id} style={{ height: '100px' }}>
                                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{enrollment.id}</td>
                                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px' }}>{enrollment.Applicants_first_name + "  " + enrollment.Applicants_last_name}</td>
                                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px'}}>{enrollment.score}</td>
                                                        <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px'}}>{enrollment.status}</td>
                                                        {/* <td style={{ backgroundColor: '#FFFFFF', fontSize: '16px', color: '#32CD32', fontWeight: 'bold' }}>{enrollment.status}</td> */}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>
                                <br />
                                <Link to="/">
                                    <button type="Submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '16px', textAlign: 'right'}}><span>Submit</span></button>
                                </Link>

                                
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

export default UploadScores_According_toApplicantNames;
