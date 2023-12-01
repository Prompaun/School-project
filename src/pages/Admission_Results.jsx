import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admission_Results = () => {

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
            { id: 'XX-XXXX', Applicants_first_name: 'เด็กหญิงฐิตานันนท์', Applicants_last_name: 'สดใส', score: '100', status: 'ผ่าน'},
            { id: 'XX-XXXX', Applicants_first_name: 'เด็กหญิงชาตรี', Applicants_last_name: 'อาทิตย์', score: '30', status: 'ไม่ผ่าน'},
            { id: 'XX-XXXX', Applicants_first_name: 'เด็กหญิงดวง', Applicants_last_name: 'จันทร์', score: '-', status: 'ขาดสอบ'},
            // เพิ่มข้อมูลผลการเรียนตามต้องการ
            ],
        },
        ]);


    return (
        <>        
        <div className="col-md-7">
            <div className="card mx-auto my-auto" style={{maxWidth: "1000px", border: '1px solid white' }}>
                <div className="card-body">
                    <div className="form-group col-md-0 fone" style={{ padding: '32px', margin: '10px', whiteSpace: "nowrap" }}>
                        <div className="d-flex align-items-center">
                            <h2 className="card-heading px-4" style={{ fontSize: '20px', marginTop: '0px' }}>อัปโหลดผลคะแนนตามรายชื่อผู้สมัคร</h2>
                        </div>

                        <div className="card mx-auto my-auto"  style={{ width: "900px"}}>
                            <div className="card-body">
                                <div className="form-group col-md-0 fone" style={{ padding: '10px', whiteSpace: "nowrap" }}>
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-0" style={{ fontSize: '20px', marginTop: '18px', marginLeft: '20px', fontWeight: 'bold' }}>หลักสูตร</h2>
                                        <select value={selectedOption} onChange={handleSelectChange} style={{ fontSize: '18px', fontFamily: 'Kanit, sans-serif', marginLeft: '20px', marginTop: '5px' }}>
                                            <option value="หลักสูตร">เลือกหลักสูตร</option>
                                            <option value="English Program (EP)">English Program (EP)</option>
                                            <option value="Regular Program">Regular Program</option>
                                        </select>
                                    </div>

                                    <br />
                                    <div className="d-flex align-items-center">
                                    <h2 className="card-heading px-0" style={{ fontSize: '18px', marginLeft: '20px', marginRight:'10px', marginTop: '0px' }}>คะแนนรายบุคคล</h2>
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

                                <br />
                                <div className="d-flex align-items-center">
                                    <h2 className="card-heading px-0" style={{ fontSize: '18px', marginLeft: '20px', marginTop: '2px' }}>ตัวอย่างไฟล์ที่อัปโหลด</h2>
                                </div>
                                
                                <div className="container flex-column align-items-center">
                                    <div className="d-flex justify-content-center" style={{ height: '400px', overflowY: 'auto', marginLeft: '0px', padding:'10px' }}>
                                {/* <div className="card mx-auto my-0"  style={{ width: "800px"}}>
                                    <div className="card-body"> */}
                                        <table className="table-bordered" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontFamily: 'Kanit, sans-serif', borderColor: '#D3D3D3' }}>
                                            <thead>
                                                <tr>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>เลขที่สอบ</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ชื่อ-นามสกุล</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>คะแนนที่ได้ (100)</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>สถานะ</th>
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

                                <br />
                                <Link to="/">
                                    <button type="Submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '16px', textAlign: 'right'}}><span>Submit</span></button>
                                </Link>

                                </div>
                            </div>
                        </div>
                            
                        <br /><br />
                        
                        <h2 className="card-heading px-4" style={{ fontSize: '20px', marginTop: '2px' }}>ผลคะแนนรายบุคคล</h2>
                    
                        <div className="card mx-auto my-auto"  style={{ width: "900px"}}>
                            <div className="card-body">                        
                                <div className="form-group col-md-0 fone" style={{ padding: '10px', whiteSpace: "nowrap" }}>
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-0" style={{ fontSize: '20px', marginTop: '18px', marginLeft: '20px', fontWeight: 'bold' }}>หลักสูตร</h2>
                                        <select value={selectedOption} onChange={handleSelectChange} style={{ fontSize: '18px', fontFamily: 'Kanit, sans-serif', marginLeft: '20px', marginTop: '5px' }}>
                                            <option value="เลือกหลักสูตร">เลือกหลักสูตร</option>
                                            <option value="English Program (EP)">English Program (EP)</option>
                                            <option value="Regular Program">Regular Program</option>
                                        </select>

                                        <h2 className="card-heading px-0" style={{ fontSize: '20px', marginTop: '18px', marginLeft: '20px', fontWeight: 'normal' }}>สถานะ</h2>
                                        <select value={selectedOption} onChange={handleSelectChange} style={{ fontSize: '18px', fontFamily: 'Kanit, sans-serif', marginLeft: '20px', marginTop: '5px' }}>
                                            <option value="เลือกสถานะ">เลือกสถานะ</option>
                                            <option value="ผ่าน">ผ่าน</option>
                                            <option value="ไม่ผ่าน">ไม่ผ่าน</option>
                                            <option value="ไม่ผ่าน">ขาดสอบ</option>
                                        </select>

                                        <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '18px', textAlign: 'right', marginTop: '5px', marginLeft: '20px'}}><span>
                                            <i 
                                                class="fs-5 bi-printer" 
                                                style={{
                                                color: 'white',
                                                fontSize: '16px',
                                                marginRight: '5px',
                                                cursor: 'pointer' // เพิ่ม cursor: 'pointer' เพื่อแสดงว่าเป็นองค์ประกอบที่คลิกได้
                                                }}
                                            ></i>พิมพ์รายชื่อ</span>
                                        </button>
                                    </div>
                                    
                                    <br />
                                    <div className="container flex-column align-items-center">
                                        <div className="d-flex justify-content-center" style={{ height: '400px', overflowY: 'auto', marginLeft: '0px', padding:'10px' }}>
                                            <table className="table-bordered" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontFamily: 'Kanit, sans-serif', borderColor: '#D3D3D3' }}>
                                                <thead>
                                                    <tr>
                                                        <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>เลขที่สอบ</th>
                                                        <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ชื่อ-นามสกุล</th>
                                                        <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>คะแนนที่ได้ (100)</th>
                                                        <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>สถานะ</th>
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

                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination justify-content-end">
                                                <li class="page-item"><a class="page-link" href="#"> &lt;&lt; </a></li>
                                                <li class="page-item"><a class="page-link" href="#"> &lt; </a></li>
                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">. . .</a></li>
                                                <li class="page-item"><a class="page-link" href="#">10</a></li>
                                                <li class="page-item"><a class="page-link" href="#"> &gt; </a></li>
                                                <li class="page-item"><a class="page-link" href="#"> &gt;&gt; </a></li>
                                            </ul>
                                        </nav>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /><br />
                        
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default Admission_Results;
