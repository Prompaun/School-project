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
    return (
        <>
            

            <Header header="ระบบจัดการข้อมูลการศึกษา" subhead="" />  
             
            <div className="container"style={{height:"100vh"}}> 
            <div className="flex-column"> 
                <div className="justify-content-center"> 
           
                <div className="container d-flex align-items-center"style={{ flexWrap: 'wrap',marginTop:"20px"  }}>
                        <div className="d-flex align-items-center">
                            <h2 className="card-heading" style={{ fontSize: '25px', fontWeight: 'bold',padding:"10px"}}>ผลการค้นหา</h2>
                        </div>
                        
                        <div className="d-flex align-items-center">
                            <Link to="/Filter_student_information">
                                <button type="submit" class="btn btn-primary" style={{ ...fontStyle, color: 'white', textAlign: 'center',padding:"10px"}}><span>ค้นหาข้อมูลใหม่</span></button>
                            </Link>
                        </div>
                        </div>
                    <div className="container d-flex align-items-center"style={{ flexWrap: 'wrap',marginTop:"20px"  }}>

                        <div className="card" style={{width: "100vw"}}>
                            <div className="card-body">
                                
                                <div className="form-group col-md-0 fone">
                                <div className="d-flex align-items-center"style={{ flexWrap: 'wrap' }}>
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading" style={{ fontSize: '20px', marginTop: '2px',padding:"10px" ,flexWrap: 'wrap'}}>ข้อมูลรายชื่อ</h2>
                                        </div>   
                                        <div className="d-flex align-items-center">    
                                        <h2 className="card-heading" style={{ fontSize: '20px', marginTop: '2px',padding:"10px",flexWrap: 'wrap' }}>&gt;</h2>
                                        </div>
                                        <div className="d-flex align-items-center">   
                                        <h2 className="card-heading" style={{ fontSize: '20px', marginTop: '2px',padding:"10px",flexWrap: 'wrap' }}>รายละเอียด</h2>
                                    </div>
                                    </div>

                                <br />
                                
                                <div className="card" style={{ width: "auto" }}>
                                {/* maxWidth:"100%",justifyContent:"center" */}
                                    <div className="card-body">
                                        
                                        <div style={{ display: 'flex',flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif'}}>   
                                        <div style={{ fontSize: '18px'}}> 
                                        <div className="align-items-center">
                                                
                                                <label htmlFor="Student_ID" className="col-form-label"style={{ fontWeight:"bold"}}>เลขประจำตัวนักเรียน</label>
                                                </div> 
                                            <div className="align-items-center"style={{maxWidth:"100%"}}>  
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="Student_ID"
                                                    name="Student_ID"
                                                    value="13333"
                                                    readOnly
                                                    style={{ backgroundColor: '#DCDCDC', color: 'black'}} 
                                                    />            
                                            </div>
                                                                                
                                            </div>                                  
                                        <div style={{ fontSize: '18px'}}> 
                                                <div className="align-items-center">
                                                    <label htmlFor="title" className="col-form-label"style={{ fontWeight:"bold"}}>ชื่อ-นามสกุล</label>
                                                    </div> 
                                                <div className="align-items-center"style={{width:"auto"}}> 
                                                    <input 
                                                        type="text" 
                                                        className="form-control"
                                                        id="title" 
                                                        name="title" 
                                                        value="เด็กหญิงนทณรรณ ดีใจ" 
                                                        readOnly 
                                                        style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                                                        // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                                                    />
                                                </div>
                                                </div>
                                            {/* <div style={{ fontSize: '18px'}}>    
                                                <div className=" align-items-center">
                                                    <label htmlFor="surname" className="col-form-label"style={{ fontWeight:"bold"}}>ชื่อ</label>
                                                    </div> 
                                                <div className=" align-items-center"style={{maxWidth:"100%"}}> 
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="surname"
                                                        name="surname"
                                                        value="ดวง"
                                                        readOnly
                                                        style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                                                    />
                                                </div>           
                                                </div>
                                                <div style={{ fontSize: '18px'}}> 
                                                <div className="align-items-center">
                                                    <label htmlFor="lastname" className="col-form-label"style={{ fontWeight:"bold"}}>นามสกุล</label>
                                                    </div> 
                                                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="lastname"
                                                        name="lastname"
                                                        value="จันทร์"
                                                        readOnly
                                                        style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                                                        />
                                                </div>
                                            </div> */}
                                        </div>
                                            <br />
                                            <div className="d-flex align-items-center"style={{ flexWrap: 'wrap', fontFamily: 'Kanit, sans-serif' }}>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '18px'}}>
                                                    <div className="d-flex align-items-center">
                                                    <span style={{marginRight:"5px",fontWeight:"bold"}}>ปีการศึกษา :</span>
                                                    </div>
                                                    <div className="dropdown" style={{ maxWidth: '100%' ,padding:"5px"}}>
                                                    <select value={selectedYear} onChange={handleYearChange} className="custom-select">
                                                        <option value="">เลือกปีการศึกษา</option>
                                                        {Object.keys(subjectObject).map((year) => (
                                                        <option key={year} value={year}>
                                                            {year}
                                                        </option>
                                                        ))}
                                                    </select>
                                                    </div>
                                                </div>
                                                
                                                <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '18px'}}>
                                                <div className="d-flex align-items-center">
                                                    <span style={{marginRight:"5px",fontWeight:"bold"}}>ภาคเรียนที่ :</span>
                                                </div>
                                                <div className="dropdown" style={{ maxWidth: '100%' ,padding:"5px"}}>
                                                    <select value={selectedSemester} onChange={handleSemesterChange} className="custom-select">
                                                    <option value="">เลือกภาคเรียน</option>
                                                    {chapters.map((semester) => (
                                                        <option key={semester} value={semester}>
                                                        {semester}
                                                        </option>
                                                    ))}
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                        
                                    </div>
                                </div>
                                
                                <br />
                                <div className="align-items-center">
                                                <div className="container d-flex justify-content-end">
                                                    <span
                                                    className="btn btn-link"
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
                                <div className="container flex-column align-items-center">
                                    {/* <table className="table-bordered" style={{ textAlign: 'center',fontFamily: 'Kanit, sans-serif'}}> */}
                                    <div className="d-flex justify-content-center" style={{ height: 'auto', overflowY: 'auto' }}>
                                    <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hover" style={{ borderCollapse: 'collapse', textAlign: 'center',fontFamily: 'Kanit, sans-serif' }}>


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
           
        
        </>
    );
};

export default Education_information;
