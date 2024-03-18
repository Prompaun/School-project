import React, { useState, useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
import logoImage from '../images/IMG_5416.png';
import Header from '../components/Header';
import axios from 'axios';

function Filter_student_information() {
    const linkStyle = {
        color: 'gray',
        textDecoration: 'none',
        fontFamily: 'Kanit, sans-serif',
        fontSize: '16px',
      };
    
    async function getYearFromClassroom() {
        try {
            const response = await axios.get('http://localhost:8080/get-distinct-years');
            return response.data;
        } catch (error) {
            console.error('Error fetching Year From Classroom:', error);
            throw error;
        }
    }

    async function getPersonnelStudentInfo(Student_ID) {
        try {
            const response = await axios.get('http://localhost:8080/personnel-get-student-info', {
                params: {
                    Student_ID: Student_ID
                }
            });
            return response.data;
        } catch (error) {
            console.log('Error fetching StudentInfo From Classroom:', error);
            // throw error;
            return null;
        }
    }

    const handleSelectYearChange = (event) => {
      setSelectedYear(event.target.value);
    };
    const [YearsList, setYearsList] = useState([]);
    // const YearsList = ["2566", "2565", "2564", "2563", "2562", "2561", "2560"];
    const [selectedYear, setSelectedYear] = useState("");
    // const options = [
    //     { value: 'ระบุหมายเหตุ', label: 'ปีการศึกษา' },
    //     { value: 'เพื่อใช้ในการขอทุนการศึกษา', label: 'ปริญญาตรี' },
    //     { value: 'เพื่อใช้ในการสมัครเข้าศึกษาต่อ', label: 'ปริญญาโท' },
    //     { value: 'เพื่อใช้ในการสมัครเข้าศึกษาต่อ', label: 'ปริญญาเอก' },
    // ];

    useEffect(() => {
        const fetchData = async () => {
            try {
              const Years = await getYearFromClassroom();
              setYearsList(Years);
            } catch (error) {
              console.error('Error fetching semesters:', error);
            }
          }
        fetchData();
      }, []);

    const fontStyle = {
        fontFamily: 'Kanit, sans-serif',
        textDecoration: 'none'
      };

    const handleStudentIDChange = (event) => {
        const inputValue = event.target.value;
        // const idValue = inputValue.replace(/[^0-9]/g, "");
        // if (inputValue !== idValue) {
        //     alert("กรุณากรอกเฉพาะตัวเลขเท่านั้น");
        // event.target.value = idValue;
        // }
    
        setStudentID(inputValue);
      };
    const [StudentID,setStudentID]=useState("");
    
    const CheckInputData = () => {
        
        const YearSelect = document.getElementById('YearSelect');
        const student_id = document.getElementById('student_id');

        console.log("selectedYear",YearSelect.value);
        console.log("StudentID",student_id.value);
        if (YearSelect.value===""&& student_id.value==="") {
            // console.log("selectedYear",selectedYear);
            // console.log("StudentID",StudentID);

            alert("กรุณากรอกข้อมูลที่ต้องการค้นหา");
            // YearSelect.focus();
            // student_id.scrollIntoView({ behavior: 'smooth' });
            // setTimeout(() => student_id.focus(), 100);
            return  false;
        }

        return true;
    }


    const navigate = useNavigate();
    const handleButtonSearchData = async (event) => { // เปลี่ยนเป็น async เพื่อให้ใช้ await ได้
        if (CheckInputData()) {
            try {
                const result = await getPersonnelStudentInfo(StudentID);
                if (result === null) {
                    alert("รหัสนักเรียน:" + StudentID + " ไม่ใช่นักเรียนของท่าน");
                    return;
                }
                else{
                    navigate("/Student_List_Information", { state: { selectedYear: selectedYear, result: result } });
                }
            } catch (error) {
                console.log('Error fetching StudentInfo:', error);
            }
            
        }
    
        return true;
    };


    return (
        <>

      <Header header="ระบบจัดการสารสนเทศ" subhead="บริการสำหรับบุคลากรภายในโรงเรียน" />
      {/* <Sidebar /> */}
      <div className="container-fluid"style={{height: "100vh"}}>
        <div className="row flex-nowrap">
            {/* <Sidebar /> */}
            
    <div className="col-md">
            <div className="d-flex align-items-center flex-column">
                <h2 className="col-sm d-flex align-items-center" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px',paddingTop: '40px' }}>กรอกข้อมูลที่ต้องการค้นหา</h2>
            </div>
    <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif'}}>
    <div className="container">
            <div className="card mx-auto" style={{ boxShadow: '1px 2px 12px 4px rgba(0, 0, 0, 0.2)' ,maxWidth: '100%',Height: '100vh'}} >
    {/* <div className="card mx-auto my-auto" style={{border: '1px solid #D3D3D3' }}> */}
    
        <div className="card-body">
        <div style={{  flexWrap: 'wrap',gap:"10px",padding:"10px"}}>
            <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:"center"}}>
                {/* <div className="d-flex align-items-center">
                    <h2 className="card-heading" style={{ fontSize: '20px', marginTop: '2px', fontWeight: 'bold' }}>Filter</h2>
                </div> */}
                {/* <div className="d-flex align-items-center">
                    <h2 className="card-heading" style={{ fontSize: '22px', padding: "10px" }}>กรอกข้อมูลที่ต้องการค้นหา</h2>
                </div> */}
            </div>
                
               
                <div className="d-flex align-items-center">
                    <h2 className="card-heading" style={{ fontSize: '16px', color: '#808080',padding:"10px" }}>ค้นหารายชื่อจากปีการศึกษา</h2>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '18px'}}>
                    <div className="d-flex align-items-center">
                        <h2 className="card-heading" style={{ fontSize: '18px',fontWeight: 'bold',padding:"10px"}}>ปีการศึกษา</h2>
                    </div>
                    <div className="align-items-center">
                    <div className="dropdown" style={{ maxWidth: '100%'}}>
                             <select value={selectedYear} onChange={handleSelectYearChange} className="custom-select" id="YearSelect">     
                       
                                <option value="">เลือกปีการศึกษา</option>
                                {YearsList.map((year) => (
                                    <option key={year} value={year}>
                                    ปีการศึกษา {year}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>
                </div>
               
                <div className="d-flex align-items-center">
                    <h2 className="card-heading" style={{ fontSize: '16px', color: '#808080',padding:"10px" }}>ค้นหาข้อมูลรายบุคคล</h2>
                </div>

                
                <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: '18px'}}>
                <div className="align-items-center" style={{ display: 'flex', alignItems: 'center', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>           
                    {/* <div className=" d-flex align-items-center"> */}
                    {/* col-sm-5 */}
                        <h2 className="card-heading" style={{ fontSize: '18px',padding:"10px",fontWeight: 'bold'}}>เลขประจำตัวนักเรียน</h2>
                    </div>
                    <div className=" align-items-center">   
                        <input type="text" className="form-control" 
                        id="student_id" 
                        name="student_id" 
                        placeholder="กรอกเลขประจำตัวนักเรียน"
                        style={{maxWidth: '100%'}} 
                        value={StudentID}
                        onChange={handleStudentIDChange}
                        />
                    </div>
                    </div>
               
                {/* <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                    <div className="d-flex align-items-center">
                        <h2 className="card-heading" style={{ fontSize: '18px',padding:"10px",fontWeight: 'bold'}}>ชื่อ</h2>
                    </div>
                    <div className="align-items-center" style={{maxWidth:"100%"}}>
                        <input type="text" className="form-control" id="surname" name="surname" placeholder="กรอกชื่อ"/>
                    </div>
                    
                    <div className="d-flex align-items-center">   
                        <h2 className="card-heading" style={{ fontSize: '18px',padding:"10px",fontWeight: 'bold'}}>นามสกุล</h2>
                    </div>
                    <div className="align-items-center" style={{maxWidth:"100%"}}>    
                        <input type="text" className="form-control" id="lastname" name="lastname" placeholder="กรอกนามสกุล" />
                    </div>
                    
                </div> */}
                <br />
               
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    {/* <Link to="/Student_List_Information"> */}
                    <button 
                        type="submit" 
                        className="btn btn-primary custom-font" 
                        style={{
                        ...fontStyle, 
                        color: 'white', 
                        fontSize: '16px', 
                        textAlign: 'center', 
                        
                        // marginRight: '15px',
                       
                        width:"100%"

                        }}
                        onClick={handleButtonSearchData}
                    >
                        <span>ค้นหาข้อมูล</span>
                    </button>
                    {/* </Link> */}

                   
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
}

export default Filter_student_information;
