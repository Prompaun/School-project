import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import logoImage from '../images/IMG_5416.png';
import Header from '../components/Header';
import Axios from 'axios';

function CheckEnroll_status() {
    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };

      // const data = [{
      //   "array": ["NID1", "NID2"],
      //   "Name": ["John Doe", "Jane Doe"],
      //   "Enroll_Year": [2022, 2021, 2024],
      //   "Enroll_Course": ["Computer Science", "Engineering", "Business Administration"]
      // }];
    
      
    
     
      
// const handleEnroll_dataDropdownChange = (event) => {
      //   setEnroll_dataDropdownList(event.target.value);
      // };

      const [selectedName, setSelectedName] = useState("");
      const [selectedYear, setSelectedYear] = useState("");
      const [selectedCourse, setSelectedCourse] = useState("");
      const [Enroll_statusList, setEnroll_statusList] = useState([]);
      const [Enroll_dataDropdownList, setEnroll_dataDropdownList] = useState([]);

      const handleNameChange = (event) => {
        setSelectedName(event.target.value);
      };
      const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
      };
      const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
      };

      useState(()=>{
        // const getCheckEnroll_status = () => {
          // Axios.get('http://localhost:8080/CheckEnroll_status/2')
          Axios.get('http://localhost:8080/defaultData_EnrollStatus/parent4@example.com')
            .then((response) => {
              console.log("so sad cannot connect to http://localhost:8080/CheckEnroll_status",response.data);
              setEnroll_statusList(response.data);
            }).catch((err) => {
              console.log(err)
            });

            Axios.get('http://localhost:8080/dropdownArray_EnrollStatus/parent1@example.com')
            .then((response) => {
              console.log("so sad cannot connect to http://localhost:8080/dropdownArray_EnrollStatus",response.data);
              setEnroll_dataDropdownList(response.data);
              
              console.log("hello world",response.data[0].Name);
            }).catch((err) => {
              console.log(err)
            });

        // }
      },[])

      // const sortedsYear =Enroll_dataDropdownList[0].Enroll_Year.sort();
    

      // console.log(response);
      
      // const [obj, setObj] = useState([
      //   {
      //     NameTitle: "เด็กหญิง",
      //     FirstName: "ใจดี",
      //     LastName: "รักสงบ",
      //     Student_NID: "X-XXXX-XXXXX-XX-X",
      //     Enroll_Year: "XXXX",
      //     Enroll_Course:"English Program (EP)",
      //     Enroll_No:"XXXX",
      //     Enroll_Status:"รอการสอบคัดเลือก"
      //   }
      // ]);
  return (
    <>
    {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            <h5 style={{ textAlign: 'right', marginLeft: '10px', marginBottom: '0' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h5>
          </div>
        </Link>
        <div className="nav navbar-nav navbar-right">
          <span className='nav-link'>
          <Link
                // onClick={handleGoBack}
                to = "/NewUser_menu"
                style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                เลือกเมนู
              </Link>
          </span>
        </div>
      </div>
    </nav> */}
    
    <Header header="ระบบรับสมัครนักเรียนแบบออนไลน์" subhead="เพื่อเข้าศึกษาระดับประถมศึกษาปีที่ 1" />
    
    
    <div class="container"style={{height: '100vh' }}>
      <div className="container mt-5 d-flex flex-column align-items-center">
          <h2 className="ms-3 mb-0">ข้อมูลการสมัคร</h2>
      </div>

      <br />
      <div className="container d-flex align-items-center justify-content-center"style={{ flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px', fontSize: '18px' }}>
          <div className="d-flex align-items-center">
            <span style={{ marginRight: "10px" }}>ผู้สมัครเรียน :</span>
          </div>
          <div className="dropdown" style={{ maxWidth: '100%' }}>
            <select value={selectedName} onChange={handleNameChange} className="custom-select">
              <option value="">เลือกผู้สมัคร</option>
              {Enroll_dataDropdownList.length > 0 && Enroll_dataDropdownList[0].Name.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px', fontSize: '18px' }}>
          <div className="d-flex align-items-center">
            <span style={{ marginRight: "10px" }}>ชื่อ :</span>
          </div>
          <div className="dropdown" style={{ maxWidth: '100%' }}>
            <select value={selectedName} onChange={handleNameChange} className="custom-select">
              <option value="">เลือกชื่อ</option>
              {data[0].Name.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div> */}
         
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px', fontSize: '18px'}}>
          <div className="d-flex align-items-center">
            <span style={{marginRight:"10px"}}>เลือกปีการศึกษา:</span>
          </div>
          <div className="dropdown" style={{ maxWidth: '100%' }}>
            <select value={selectedYear} onChange={handleYearChange} className="custom-select">
              <option value="">เลือกปีการศึกษา</option>
              {Enroll_dataDropdownList.length > 0 && Enroll_dataDropdownList[0].Enroll_Year.sort().map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px', fontSize: '18px'}}>
          <div className="d-flex align-items-center">
            <span style={{marginRight:"10px"}}>เลือกหลักสูตร:</span>
          </div>
          <div className="dropdown" style={{ maxWidth: '100%' }}>
            <select value={selectedCourse} onChange={handleCourseChange} className="custom-select">
              <option value="">เลือกหลักสูตร</option>
              {Enroll_dataDropdownList.length > 0 && Enroll_dataDropdownList[0].Enroll_Course.map((name, index) => (
                <option key={index} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center"style={{fontFamily: 'Kanit, sans-serif'}}>
      {Enroll_statusList.length === 0 ? (
       <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px', fontSize: '18px' }}>
        <div className="container mt-5 d-flex flex-column align-items-center">
          <span className="ms-3 mb-0" style={{ color: 'gray' }}>ไม่พบข้อมูลผู้สมัคร</span>
        </div>
      </div>
     
        ) : (
          <>
          <br/>
          <div className="card mx-auto" style={{ maxWidth: '90%', fontFamily: 'Kanit, sans-serif' }}>
          {Enroll_statusList.map((val, key) => (
            
            <div className="card-body">
            
              <div style={{display:"flex", flexWrap: 'wrap',justifyContent:"left"}}>

                <div className="align-items-center"style={{padding:"10px"}}>
                  <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>ชื่อ-นามสกุล</h2>

                  
                  <input
                      type="text"
                      className="form-control"
                      value={`${val.NameTitle} ${val.FirstName} ${val.LastName}`}
                      readOnly
                      style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
                    />
                </div>
                
                {/* </div>
                <div style={{ display:"flex",justifyContent:"center" }}> */}
                <div className="align-items-center"style={{padding:"10px"}} >
                  <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>เลขประจำตัวประชาชน</h2>
                  
                  <input
                      type="text"
                      className="form-control"
                      value={`${val.Student_NID}`}
                      readOnly
                      style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
                    />
                </div>
                {/* </div>
              <div style={{display:"flex", flexWrap: 'wrap',justifyContent:"center"}}> */}
            
                  <div className="align-items-center"style={{padding:"10px"}}>
                    <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>ปีการศึกษา</h2>
                    
                
                    <input
                    type="text"
                    className="form-control"
                    value={`${val.Enroll_Year}`}
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
                  />
                  </div>
                  {/* </div>
                <div style={{ display:"flex",flexWrap: 'wrap' }}> */}
                  <div className="align-items-center"style={{padding:"10px"}}>
                    <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>หลักสูตร</h2>
                  
                    <input
                      type="text"
                      className="form-control"
                      value={`${val.Enroll_Course}`}
                      readOnly
                      style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
                    />
                  </div>
                  {/* </div>
                <div style={{ display:"flex",flexWrap: 'wrap' }}> */}
                <div className="align-items-center"style={{padding:"10px"}}>
                    <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>เลขที่สมัคร</h2>
                    
                    <input
                      type="text"
                      className="form-control"
                      value={`${val.Enroll_No}`}
                      readOnly
                      style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
                    />
                    </div> 
                    </div>
                <div style={{ display:"flex",flexWrap: 'wrap' }}>
                  <div className=" align-items-center"style={{padding:"10px"}}>
                    <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>สถานะ</h2>
                    
                    <h2 className="col-form-label" style={{ fontSize: '18px' }}>{val.Enroll_Status}</h2>
                  
                  </div>
                
              </div>
              {val.Enroll_Status === "รอการสอบคัดเลือก" && (
                  <button
                    type="button"
                    className="btn btn-primary float-end"
                    style={{
                      fontFamily: "Kanit, sans-serif",
                      textAlign: "center",
                      justifyContent: 'flex-end',
                      display: val.Enroll_Status === "รอการสอบคัดเลือก" ? "block" : "none"
                    }}
                    onClick={() => {
                      const fileUrl = "src/assets/พิมพ์ใบสมัครป.1.pdf";
                      const printWindow = window.open(fileUrl, "_blank", "width=1000,height=800");
                      printWindow.print();
                    }}
                  >
                    <span>พิมพ์บัตรประจำตัวผู้สอบ</span>
                  </button>
                )}
            </div>
          ))}
          </div>  
        </>
    )}
    </div>
  </div>
  </>
  )
}

export default CheckEnroll_status