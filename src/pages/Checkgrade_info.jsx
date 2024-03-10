import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom'
import Header from '../components/Header';

const Checkgrade_info = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  
  const [StudentData, setStudentData] = useState([
    {
      StudentID: "12345",
      nameTitle: "เด็กหญิง",
      Firstname: "น้ำใส",
      Lastname: "ใจดี"
    },
    {
      StudentID: "5678",
      nameTitle: "เด็กชาย",
      Firstname: "น้ำหนึ่ง",
      Lastname: "ใจดี"
    }
  ]);

  const [Yeardata, setYearData] = useState(
    {
      Year : ["2565","2564","2563"],
      Semester : ["1","2"]
    }
         
  );
  const { Year,Semester } = Yeardata;
  
  const [subjectObject, setSubjectObject] = useState(
    [
      { id: '001', name: 'วิชา A', score: 85, credits:'0.5', between_full:'80', final_full:'20', between_get:'79', final_get:'20', totalScore:'99', grade: 'A', result: 'ดีเด่น' },
      { id: '002', name: 'วิชา B', score: 92, credits:'1', between_full:'70', final_full:'30', between_get:'56', final_get:'24',  totalScore:'80', grade: 'A', result: 'ดีมาก' },
      { id: '003', name: 'วิชา C', score: 78, credits:'1', between_full:'70', final_full:'30', between_get:'53', final_get:'20', totalScore:'73', grade: 'B', result: 'ดี' },
    ]
    
    );

  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [tableHeader, setTableHeader] = useState("");
 
  const handleStudentChange = (event) => {
    const selectedStudentValue = event.target.value;
    setSelectedStudent(selectedStudentValue);
  };
  
  const handleYearChange = (event) => {
    const selectedYearValue = event.target.value;
    setSelectedYear(selectedYearValue);
    setSelectedSemester("");
    // if (selectedYearValue) {
    //   const semesters = subjectObject[selectedYearValue];
    //   setChapters(semesters);
    // } else {
    //   setChapters([]); // เมื่อไม่ได้เลือกปีการศึกษาให้ล้าง chapters
    // }
  };
  
  const handleSemesterChange = (event) => {
    const selectedSemesterValue = event.target.value;
    setSelectedSemester(selectedSemesterValue);
  };

  useEffect(() => {
    
    if (selectedYear && selectedSemester) {
      setTableHeader(`ปีการศึกษา ${selectedYear} ภาคการศึกษาที่ ${selectedSemester}`);
    }
    else {
      setTableHeader(`ปีการศึกษา ${Year[0]} ภาคการศึกษาที่ ${Semester[0]}`);
    }
  }, [selectedYear, selectedSemester]);


  return (
    <>
      

      <Header header="ระบบจัดการสารสนเทศ" subhead="บริการสำหรับผู้ปกครอง" />
      <br />
      <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif',height:"100vh"}}>
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ marginLeft: 'auto', marginRight: 'auto',fontWeight:"bold" }}>
        <h2>ระบบตรวจสอบผลการเรียน</h2>
      </div>

      <div className="container d-flex align-items-center justify-content-center"style={{ flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px', fontSize: '18px'}}>
            <div className="d-flex align-items-center">
              <span style={{marginRight:"10px"}}>เลือกข้อมูลนักเรียน :</span>
            </div>
            <div className="dropdown" style={{ maxWidth: '100%' }}>
            <select value={selectedStudent} onChange={handleStudentChange} className="custom-select">
                <option value="">เลือกข้อมูล</option>
                {StudentData.map((student, index) => (
                  <option key={index}>
                    {student.StudentID} : {student.nameTitle} {student.Firstname} {student.Lastname}
                  </option>
                ))}
              </select>
            </div>
        </div>

      </div>
      <div className="container d-flex align-items-center justify-content-center"style={{ flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px', fontSize: '18px'}}>
            <div className="d-flex align-items-center">
              <span style={{marginRight:"10px"}}>ปีการศึกษา :</span>
            </div>
            <div className="dropdown" style={{ maxWidth: '100%' }}>
              <select value={selectedYear} onChange={handleYearChange} className="custom-select">
                <option value="">เลือกปีการศึกษา</option>
                {Year.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
        </div>
         
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px', fontSize: '18px'}}>
          <div className="d-flex align-items-center">
            <span style={{marginRight:"10px"}}>ภาคเรียนที่ :</span>
          </div>
          <div className="dropdown" style={{ maxWidth: '100%' }}>
                <select value={selectedSemester} onChange={handleSemesterChange} className="custom-select">
                  <option value="">เลือกภาคเรียน</option>
                  {Semester.map((semesterData) => (
                        <option key={semesterData} value={semesterData}>
                          {semesterData}
                        </option>
                      ))}
                </select>
              </div>
        </div>
      </div>
      <br /> {/* เพิ่มแท็ก <br /> เพื่อสร้างการเว้นบรรทัด margin: 'auto', */}
        
        <div className="container flex-column align-items-center">
        {/* <table className="table-bordered" style={{ textAlign: 'center',fontFamily: 'Kanit, sans-serif'}}> */}
        <div className="d-flex justify-content-center" style={{ height: 'auto', overflowY: 'auto' }}>
        <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover" style={{ borderCollapse: 'collapse', textAlign: 'center',fontFamily: 'Kanit, sans-serif' }}>


        <thead>          
          <tr>
          <th colSpan="9" style={{ textAlign: 'center' }}>{tableHeader}</th>
          </tr>

          <tr>
            <th rowSpan="3">รหัสวิชา</th>
            <th rowSpan="3">ชื่อวิชา</th>
            <th rowSpan="3">หน่วยกิต</th>
            <th colSpan="4" style={{ textAlign: 'center' }}>ผลการเรียน</th>
            <th rowSpan="3">คะแนนรวม</th>
            <th rowSpan="3">เกรด</th>
          </tr>
          <tr>
            <th colSpan="2">ระหว่างภาค</th>
            <th colSpan="2">ปลายภาค</th>
          </tr>
          <tr>
            <th>เต็ม</th>
            <th>ได้</th>
            <th>เต็ม</th>
            <th>ได้</th>
          </tr>
        </thead>

        <tbody>
        {subjectObject.map((subject) => (
        <tr key={subject.id} style={{ height: '50px' }}>
          <td >{subject.id}</td>
          <td >{subject.name}</td>
          <td >{subject.credits}</td>
          <td >{subject.between_full}</td>
          <td >{subject.between_get}</td>
          <td >{subject.final_full}</td>
          <td >{subject.final_get}</td>
          <td >{subject.totalScore}</td>
          <td >{subject.grade}</td>
        </tr>
      ))}
    </tbody>


        </table>
        </div>
        </div>
        
        </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Checkgrade_info