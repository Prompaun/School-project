import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom'
import Header from '../components/Header';
import axios from 'axios';

const Checkgrade = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  // const history = useHistory();
  const linkStyle = {
    color: 'gray',
    textDecoration: 'none'
  };

  async function getYearSemestersByStudentId(studentId) {
    try {
        const response = await axios.get('http://localhost:8080/get-year-semesters-by-student-id', {
            params: {
                studentId: studentId
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching year and semesters by student ID:', error);
        throw error;
    }
  };

  async function getYearByStudentId(studentId) {
    try {
        const response = await axios.get('http://localhost:8080/get-years-by-student-id', {
            params: {
                studentId: studentId
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching year by student ID:', error);
        throw error;
    }
  };

  async function getSemesterByStudentId(selectedStudent_ID, selectedYear) {
    try {
        const response = await axios.get('http://localhost:8080/get-semesters-by-student-id', {
            params: {
                studentId: selectedStudent_ID,
                Year: selectedYear
            }
        })
        return response.data;
    } catch (error) {
        console.error('Error fetching Semester by student ID:', error);
        throw error;
    }
  };

  async function getGradeInfo(selectedStudent_ID, selectedYear, Semesters) {
    try {
        const response = await axios.get('http://localhost:8080/get-grade-info', {
            params: {
                studentId: selectedStudent_ID,
                year: selectedYear,
                semester: Semesters
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching Grade by student ID:', error);
        throw error;
    }
  };

  // const [StudentData, setStudentData] = useState([]);
  // const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedStudent_ID, setSelectedStudent_ID] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  // const [Semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [tableHeader, setTableHeader] = useState("");
  const [subjectObject, setSubjectObject] = useState([]);
  const initialState = {
    Year: [],
    Semester: []
  };
  const [YearData, setYearData] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
        try {
              const yearSemesters = await getYearSemestersByStudentId("ID1");
              console.log('yearSemesters:', yearSemesters);

              // หา Year และ Semester ที่มีค่ามากที่สุด
              let maxYear = 0;
              // let maxSemester = 0;
              yearSemesters.forEach(({ Year, Semester }) => {
                  maxYear = Math.max(maxYear, parseInt(Year));
              });

              const getSemester = await getSemesterByStudentId("ID1", maxYear);
              // console.log('getSemester:', getSemester);
              const maxSemester = Math.max(...getSemester.map(sem => parseInt(sem)));
              console.log('getSemester:', getSemester);
              console.log('maxSemester:', maxSemester);
              const gradeInfo = await getGradeInfo("ID1", maxYear, maxSemester);
              const mappedGradeInfo = gradeInfo.map(item => ({
                id: item.Subject_ID,
                name: item.Subject_Name,
                score: item.Score_mid,
                credits: item.Subject_Credit,
                between_full: item.Full_score_mid,
                final_full: item.Full_score_final,
                between_get: item.Score_mid,
                final_get: item.Score_final,
                totalScore: item.Total_score,
                grade: item.Subject_grade,
              }));
              setSubjectObject(mappedGradeInfo);
              console.log('Max Year:', maxYear);
              console.log('Max Semester:', maxSemester);
              setTableHeader(`ปีการศึกษา ${maxYear} ภาคการศึกษาที่ ${maxSemester}`);
              setSelectedYear(maxYear);
              setSelectedSemester(maxSemester);
              const years = await getYearByStudentId("ID1");
              // const semesters = await getSemesterByStudentId("ID1", maxYear);

              // setYearData({
              //     Year: years.map(year => year.toString()).sort(),
              //     Semester: semesters.sort()
              // });
              setYearData(prevState => ({
                ...prevState,
                Year: years.map(year => year.toString()).sort()
              }));

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);

useEffect(() => {
  const fetchData = async () => {
    if (selectedYear) {
      console.log('useEffect No.3');
      try {
        const semesters = await getSemesterByStudentId("ID1", selectedYear);
        // setSemesters(semesters);
        setYearData(prevState => ({
          ...prevState,
          Semester: semesters.sort()
        }));
      } catch (error) {
        console.error('Error fetching semesters:', error);
      }
    }
    else{
      setYearData(prevState => ({
        ...prevState,
        Semester: []
      }));
    }
  };

  fetchData();
}, [selectedYear]);

useEffect(() => {
  if (selectedYear && selectedSemester) {
    console.log('useEffect No.4');
    const fetchData = async () => {
      try {
        
        const gradeInfo = await getGradeInfo("ID1", selectedYear, selectedSemester);
        console.log('Grade info:', gradeInfo);
        const mappedGradeInfo = gradeInfo.map(item => ({
          id: item.Subject_ID,
          name: item.Subject_Name,
          score: item.Score_mid,
          credits: item.Subject_Credit,
          between_full: item.Full_score_mid,
          final_full: item.Full_score_final,
          between_get: item.Score_mid,
          final_get: item.Score_final,
          totalScore: item.Total_score,
          grade: item.Subject_grade,
        }));
        setSubjectObject(mappedGradeInfo);
      } catch (error) {
        console.error('Error fetching grade information:', error);
      }
    };

    fetchData(); 
  }
}, [selectedSemester]);

  
  
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

    // ตั้งค่า initialState สำหรับ YearData
    // const initialState = {
    //   Year: [],
    //   Semester: []
    // };
  
  // สร้าง useState โดยกำหนด initialState
  // const [YearData, setYearData] = useState(initialState);

  // const [YearData, setYearData] = useState(
  //   {
  //     Year : ["2565","2564","2563"],
  //     Semester : ["1","2"]
  //   }  
  // );
  
  const { Year,Semester } = YearData;
  // const [subjectObject, setSubjectObject] = useState([])

  // const [subjectObject, setSubjectObject] = useState(
  //   [
  //     { id: '001', name: 'วิชา A', score: 85, credits:'0.5', between_full:'80', final_full:'20', between_get:'79', final_get:'20', totalScore:'99', grade: 'A', result: 'ดีเด่น' },
  //     { id: '002', name: 'วิชา B', score: 92, credits:'1', between_full:'70', final_full:'30', between_get:'56', final_get:'24',  totalScore:'80', grade: 'A', result: 'ดีมาก' },
  //     { id: '003', name: 'วิชา C', score: 78, credits:'1', between_full:'70', final_full:'30', between_get:'53', final_get:'20', totalScore:'73', grade: 'B', result: 'ดี' },
  //   ]
    
  //   );

  // const [selectedYear, setSelectedYear] = useState("");
  // const [selectedSemester, setSelectedSemester] = useState("");
  // const [chapters, setChapters] = useState([]);

  // const handleYearChange = (event) => {
  //   const selectedYearValue = event.target.value;
  //   setSelectedYear(selectedYearValue);
  //   setSelectedSemester("");
  //   // if (selectedYearValue) {
  //   //   const semesters = subjectObject[selectedYearValue];
  //   //   setChapters(semesters);
  //   // } else {
  //   //   setChapters([]); // เมื่อไม่ได้เลือกปีการศึกษาให้ล้าง chapters
  //   // }
  // };
  
  // const handleSemesterChange = (event) => {
  //   const selectedSemesterValue = event.target.value;
  //   setSelectedSemester(selectedSemesterValue);
  // };
  // const [selectedYear, setSelectedYear] = useState("");
  // const [selectedSemester, setSelectedSemester] = useState("");
  // const [tableHeader, setTableHeader] = useState("");
  
  const handleYearChange = (event) => {
    const selectedYearValue = event.target.value;
    setSelectedYear(selectedYearValue);
    setSelectedSemester(""); // Reset the semester when changing the year
    // Filter data based on the selected year
    
  };
  
  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };
  
  useEffect(() => {
    if (selectedYear && selectedSemester) {
      setTableHeader(`ปีการศึกษา ${selectedYear} ภาคการศึกษาที่ ${selectedSemester}`);
    }
    // else {
    //   setTableHeader(`ปีการศึกษา ${Year[0]} ภาคการศึกษาที่ ${Semester[0]}`);
    // }
  }, [selectedYear, selectedSemester]);

  return (
    <>
      

      <Header header="ระบบจัดการสารสนเทศ" subhead="บริการสำหรับนักเรียน" />
      <br />
      <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif',height:"100vh"}}>
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <h2>ระบบตรวจสอบผลการเรียน</h2><br />
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
        <br />
        </div>
        </div>
        
        </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Checkgrade