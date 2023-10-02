import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom'

const Checkgrade = () => {
  const handleGoBack = () => {
    window.history.back();
  };


  // const history = useHistory();
  const linkStyle = {
    color: 'gray',
    textDecoration: 'none'
  };

  const containerStyle = {
    position: 'relative',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    textAlign: 'left',
  };

  const imageStyle = {
    filter: 'brightness(25%)',
  };

  // เพิ่ม state สำหรับเก็บข้อมูลจากฟอร์ม
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // รับค่า input จากฟอร์มและอัปเดต state ตามชื่อ input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // สร้างฟังก์ชันสำหรับการ submit ฟอร์ม
  const handleSubmit = (event) => {
    event.preventDefault();
    // ทำสิ่งที่คุณต้องการเมื่อกด submit ฟอร์ม
    console.log('Submit Form', formData);
    // เช่น ส่งข้อมูลไปยังเซิร์ฟเวอร์หรือทำการตรวจสอบข้อมูล
  };

  const [data, setData] = useState([
    {
      year: 'ปีการศึกษา 2566 ภาคการศึกษาที่ 1',
      subjects: [
        { id: '001', name: 'วิชา A', score: 85, credits:'0.5', between_full:'80', final_full:'20', between_get:'79', final_get:'20', totalScore:'99', grade: 'A', result: 'ดีเด่น' },
        { id: '002', name: 'วิชา B', score: 92, credits:'1', between_full:'70', final_full:'30', between_get:'56', final_get:'24',  totalScore:'80', grade: 'A', result: 'ดีมาก' },
        { id: '003', name: 'วิชา C', score: 78, credits:'1', between_full:'70', final_full:'30', between_get:'53', final_get:'20', totalScore:'73', grade: 'B', result: 'ดี' },
        // เพิ่มข้อมูลผลการเรียนตามต้องการ
      ],
    },
  ]);

  const [subjectObject, setSubjectObject] = useState({
    "2560": [
      "เทอม1",
      "เทอม2"
    ],
    "2561": [
      "เทอม1",
      "เทอม2"
    ],
    "2562": [
      "เทอม1",
      "เทอม2"
    ],
    "2563": [
      "เทอม1",
      "เทอม2"
    ],
    "2564": [
      "เทอม1",
      "เทอม2"
    ],
    "2565": [
      "เทอม1",
      "เทอม2"
    ]
  });

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [chapters, setChapters] = useState([]);
  const handleYearChange = (event) => {
    const selectedYearValue = event.target.value;
    setSelectedYear(selectedYearValue);
    setSelectedSemester("");
    if (selectedYearValue) {
      const semesters = subjectObject[selectedYearValue];
      setChapters(semesters);
    } else {
      setChapters([]); // เมื่อไม่ได้เลือกปีการศึกษาให้ล้าง chapters
    }
  };
  
  const handleSemesterChange = (event) => {
    const selectedSemesterValue = event.target.value;
    setSelectedSemester(selectedSemesterValue);
  };

  // const handleYearChange = (event) => {
  //   const selectedYearValue = event.target.value;
  //   setSelectedYear(selectedYearValue);
  //   setSelectedSemester("");
  //   setChapters([]);
  //   if (selectedYearValue) {
  //     const semesters = Object.keys(subjectObject[selectedYearValue]);
  //     setChapters(semesters);
  //   }
  // };

  // const handleSemesterChange = (event) => {
  //   const selectedSemesterValue = event.target.value;
  //   setSelectedSemester(selectedSemesterValue);
  // };
  
  
  
  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="src\images\IMG_5416.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{ float: 'left', marginRight: '10px' }} />
            <span style={{ fontFamily: 'Kanit, sans-serif',marginLeft: '0px' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</span>
          </Link>
          <div className="nav navbar-nav navbar-right">
            <span className='nav-link'>
              <Link
                onClick={handleGoBack}
                style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                เลือกเมนู
              </Link>

            </span>
          </div>
        </div>
      </nav> 
      <div style={containerStyle}>
        <img src="src\images\school_bg.png" alt="School Background" width="1899" height="320" style={imageStyle}/>
        <div style={textOverlayStyle}>
        <h2 style={{ textAlign: 'center',fontWeight: 'bold',fontSize: '56px' }}>ระบบจัดการสารสนเทศ</h2>
        <h5 style={{ textAlign: 'center',fontWeight: 'bold',fontSize: '32px' }}>บริการสำหรับนักเรียน</h5>
        </div>
      </div>

      {/* เพิ่มฟอร์มการลงทะเบียน */}
      <div className="container mt-5 d-flex flex-column align-items-center">
        <div className="d-flex align-items-center mb-3">
          <h2 className="ms-3 mb-0">ระบบตรวจสอบผลการเรียน</h2>
        </div><br />

        {/* <div>

          <form name="form1" id="form1" action="/action_page.php">
            ปีการศึกษา: <select name="school_year" id="school_year">
              <option value="" selected="selected">เลือกปีการศึกษา</option>
            </select>


            ภาคเรียนที่: <select name="semester" id="semester">
              <option value="" selected="selected">เลือกภาคเรียน</option>
            </select>
          </form>
        </div> */}

        <div style={{  fontFamily: 'Kanit, sans-serif' }}>
          ปีการศึกษา:
          <select value={selectedYear} onChange={handleYearChange}>
            <option value="">เลือกปีการศึกษา</option>
            {Object.keys(subjectObject).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          ภาคเรียนที่:
          <select value={selectedSemester} onChange={handleSemesterChange}>
            <option value="">เลือกภาคเรียน</option>
            {chapters.map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>
        
        <br /> {/* เพิ่มแท็ก <br /> เพื่อสร้างการเว้นบรรทัด margin: 'auto', */}
        <table className="table-bordered" style={{ textAlign: 'center',fontFamily: 'Kanit, sans-serif'}}>
        

        <thead>          
          <tr>
            <th colSpan="9" style={{ textAlign: 'center' }}>{data[0].year}</th>
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
      {data[0].subjects.map((subject) => (
        <tr key={subject.id} style={{ height: '50px' }}>
          <td style={{ minWidth: '100px', maxWidth: '150px', width: '10%' }}>{subject.id}</td>
          <td style={{ minWidth: '200px', maxWidth: '300px', width: '20%' }}>{subject.name}</td>
          <td style={{ width: '10%' }}>{subject.credits}</td>
          <td style={{ width: '10%' }}>{subject.between_full}</td>
          <td style={{ width: '10%' }}>{subject.between_get}</td>
          <td style={{ width: '10%' }}>{subject.final_full}</td>
          <td style={{ width: '10%' }}>{subject.final_get}</td>
          <td style={{ width: '10%' }}>{subject.totalScore}</td>
          <td style={{ width: '10%' }}>{subject.grade}</td>
        </tr>
      ))}
    </tbody><br /><br /><br /><br /><br />


        </table>
      </div>
    </>
  );
}

export default Checkgrade