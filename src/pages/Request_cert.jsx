import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Button, Modal,Spinner } from 'react-bootstrap';
import Modal_loading from '../components/Modal_loading';
import Modal_success from '../components/Modal_success';


function Request_cert() {

    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
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

/////////////////////////////////////////////////////Button/////////////////////////////////////////////////////////////////////
      const handleSubmitform = async () => {
        // setShowLoadingModal(true);
        // if(checkInputForm()) {

        //     alert("Yeah");
        // }
        // setShowLoadingModal(false);
        setShowSuccessModal(true);

        // return true;
      };

      ///////////////////////////////////////////////////////////////////////////////////////////////
      const [selectedStudent, setSelectedStudent] = useState("");

      const handleStudentChange = (event) => {
        const selectedStudentValue = event.target.value;
        setSelectedStudent(selectedStudentValue);
      };
      const [CheckRequestStudent,setCheckRequestStudent] = useState({ checked: false });
      const [CheckRequestTranscript,setCheckRequestTranscript] = useState({ checked: false });
      const [AmountRequestStudent,setAmountRequestStudent] = useState('');
      const [AmountRequestTranscript,setAmountRequestTranscript] = useState('');
      
      const handleCheckRequestStudentChange= (event) => {
        setCheckRequestStudent({ checked: event.target.checked });
      };
      const handleAmountRequestStudentChange = (event) => {
        const integerValue = event.target.value;
        const AmountRequestStudent = integerValue.replace(/[^0-9]/g, "");
        if (AmountRequestStudent !== integerValue) {
            alert("กรุณากรอกเฉพาะตัวเลขเท่านั้น")
          event.target.value = AmountRequestStudent;
        }
        setAmountRequestStudent(AmountRequestStudent);
      };
      const handleCheckRequestTranscriptChange= (event) => {
        setCheckRequestTranscript({ checked: event.target.checked });
      };
      const handleAmountRequestTranscriptChange= (event) => {
        const inputValue = event.target.value;
        const AmountRequestTranscript = inputValue.replace(/[^0-9]/g, "");
        if (inputValue !== AmountRequestTranscript) {
            alert("กรุณากรอกเฉพาะตัวเลขเท่านั้น")
          event.target.value = AmountRequestTranscript;
        }
        setAmountRequestTranscript(AmountRequestTranscript);
      };

      useEffect(() => {
        
        if (!CheckRequestStudent.checked){
            setAmountRequestStudent('');
        }
        
      }, [CheckRequestStudent]);
      
      useEffect(() => {
        
        if (!CheckRequestTranscript.checked){
            setAmountRequestTranscript('');
        }
        
      }, [CheckRequestTranscript]);

 
      const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const [student_picture_file,setStudent_picture_file] = useState("");
    const allowedFileTypes = ['.pdf', '.jpg', '.jpeg', '.png'];
    const handleFileChange = (event) => {
        event.preventDefault();
        const student_picture_file = event.target;
    
        // if (student_picture_file.files.length === 0){
        //     setStudent_picture_file('');
            // sendImageDataToEnroll('');
        //   }
        
        if (student_picture_file.files && student_picture_file.files.length > 0) {
            const file = student_picture_file.files[0];
            const fileType = '.' + file.name.split('.').pop().toLowerCase();
            if (allowedFileTypes.includes(fileType)) {
                
                let fileName = '';
                if (student_picture_file.files.length === 1) {
                    setStudent_picture_file(event.target.files[0]);
                    fileName = file.name;
                    // console.log("file.name", file.name);
                } else {
                    fileName = student_picture_file.files.length + ' files selected';
                }
                // แสดงชื่อไฟล์ที่ถูกเลือกใน input label
                const fileInputLabel = document.getElementById('fileInputLabel');
                if (fileInputLabel) {
                    fileInputLabel.textContent = fileName;
                }
                // sendImageDataToEnroll(file);
            } else {
                alert('กรุณาเลือกไฟล์ที่มีนามสกุล .pdf, .jpg, .jpeg หรือ .png เท่านั้น');
                // เคลียร์ค่า input file และ label
                event.target.value = '';
                // setStudent_picture_file('');
                // student_picture_file.value = '';
                const fileInputLabel = document.getElementById('fileInputLabel');
                if (fileInputLabel) {
                    fileInputLabel.textContent = 'Select Files';
                }
            }
        }
    };

      const checkInputForm = () => {
        const selectedStudent = document.getElementById('selectedStudent');

        if(selectedStudent.value==="") {
            alert('กรุณาเลือกข้อมูลนักเรียน');
            selectedStudent.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => selectedStudent.focus(), 100);
            return false;
        }

        if (!CheckRequestStudent.checked && !CheckRequestTranscript.checked) {
            alert('กรุณาเลือกประเภทใบรับรอง');
            // CheckRequestStudent.scrollIntoView({ behavior: 'smooth' });
            // setTimeout(() => CheckRequestStudent.focus(), 100);
            return false;
        }
        if (CheckRequestStudent.checked) {
            const AmountRequestStudent = document.getElementById('AmountRequestStudent');
            if(AmountRequestStudent.value===""){
                alert('กรุณาระบุจำนวนใบรับรองการเป็นนักเรียน (ปพ.7)');
                AmountRequestStudent.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => AmountRequestStudent.focus(), 100);
            return false;
            }
        }
        if (CheckRequestTranscript.checked) {
            
            const AmountRequestTranscript = document.getElementById('AmountRequestTranscript');
            if(AmountRequestTranscript.value===""){
                alert('กรณีขอหนังสือรับรองผลการเรียนรายวิชา');
                AmountRequestTranscript.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => AmountRequestTranscript.focus(), 100);
            return false;
            }
        }

        const selectedOption = document.getElementById('selectedOption');

        if(selectedOption.value==="") {
            alert('กรุณาระบุหมายเหตุในการขอใบรับรอง');
            selectedOption.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => selectedOption.focus(), 100);
            return false;
        }
        const customFile = document.getElementById('customFile');

        if(customFile.value==="") {
            alert('กรุณาอัปโหลดรูปภาพนักเรียน');
            customFile.focus();
            return false;
        }
        return true;
      };

      const [ShowInputRequestTranscript,setShowInputRequestTranscript] =useState(false);
      const [ShowInputRequestStudent,setShowInputRequestStudent] =useState(false);
      useEffect(() => {
        
        if (CheckRequestStudent.checked){
            setShowInputRequestStudent(true);
        }
        else {
            setShowInputRequestStudent(false);
        }
        
      }, [CheckRequestStudent]);
      useEffect(() => {
        
        if (CheckRequestTranscript.checked){
            setShowInputRequestTranscript(true);
        }
        else {
            setShowInputRequestTranscript(false);
        }
        
      }, [CheckRequestTranscript]);

      const [showLoadingModal, setShowLoadingModal] = useState(false);
      const [showSuccessModal, setShowSuccessModal] = useState(false);

      return (
        <>
      {showLoadingModal && (
          <Modal_loading show={showLoadingModal} setShow={setShowLoadingModal} />
        )}
      {showSuccessModal && (
          <Modal_success 
          show={showSuccessModal} 
          setShow={setShowSuccessModal} 
          link="/Parent_menu" 
          text="ระบบได้รับคำร้องของท่านแล้ว"
          />
        )}

      <Header header="ระบบยื่นคำร้องขอใบรับรอง" subhead=""/>
      
      <div className="d-flex flex-column align-items-center"style={{ height: '100vh',fontFamily: 'Kanit, sans-serif'}}>
        <div class="card my-5" style={{ maxWidth: '90%',Height: '100vh'}}>  
            <div class="card-body">
                
        {/* <label class="card-heading px-3" style={{fontSize: '20px',fontWeight: 'bolder'}}>ยื่นคำร้องขอใบรับรอง</label> */}
                
            <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px', fontSize: '20px',marginLeft:"15px"}}>
            <div className="d-flex align-items-center">
              <span style={{marginRight:"10px",fontWeight: 'bolder'}}>เลือกข้อมูลนักเรียน :</span>
            </div>
            <div className="dropdown" style={{ maxWidth: '100%',fontSize: '18px' }}>
            <select value={selectedStudent} onChange={handleStudentChange} className="custom-select" id ="selectedStudent">
                <option value="">เลือกข้อมูล</option>
                {StudentData.map((student, index) => (
                  <option key={index}>
                    {student.StudentID} : {student.nameTitle} {student.Firstname} {student.Lastname}
                  </option>
                ))}
              </select>
            </div>
        </div>
        <br />
        <label class="card-heading px-3" style={{fontSize: '20px',fontWeight: 'bolder',marginBottom:"10px"}}>เลือกประเภทใบรับรอง</label>
             {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '16px',marginLeft: '15px' }}> */}
                <div class="form-group col-md-15 fone">
                    <div class="form-check"style={{ marginLeft:"15px",marginBottom:"5px"}}>
                        <input class="form-check-input" type="checkbox" value="ปพ.7" onChange={handleCheckRequestStudentChange} id="CheckRequestStudent"/>
                        <label class="form-check-label custom-body" style={{ fontSize: '18px'}} for="flexCheckDefault">
                            กรณีขอใบรับรองการเป็นนักเรียน (ปพ.7)
                        </label>
                    </div>
                    {ShowInputRequestStudent && (
                    <div className="mb-3 d-flex px-3">
                        <input
                            type="text"
                            id = "AmountRequestStudent"
                            className="form-control ml-3 px-3"
                            placeholder="จำนวน"
                            style={{maxWidth:"50%", fontFamily: 'Kanit, sans-serif'}}
                            value={AmountRequestStudent}
                            onChange={handleAmountRequestStudentChange}
                            required
                        />
                        <h5 className="ms-2 mt-2 custom-body" style={{ fontSize: '18px'}}>ฉบับ</h5>
                    </div>
                    )}       
                    <div class="form-check"style={{ marginLeft:"15px",marginBottom:"5px"}}>
                        <input class="form-check-input" type="checkbox" value="ปพ.1" onChange={handleCheckRequestTranscriptChange} id="flexCheckChecked"/>
                        <label class="form-check-label custom-body" style={{ fontSize: '18px'}} for="flexCheckChecked">
                            กรณีขอหนังสือรับรองผลการเรียนรายวิชา
                        </label>
                    </div>
                    {ShowInputRequestTranscript && (
                    <div className="mb-3 d-flex px-3" >
                        <input
                            type="text"
                            id="AmountRequestTranscript"
                            className="form-control ml-3 px-3"
                            placeholder="จำนวน"
                            style={{maxWidth:"50%", fontFamily: 'Kanit, sans-serif'}}
                            value={AmountRequestTranscript}
                            onChange={handleAmountRequestTranscriptChange}
                            required
                        />
                        <h5 className="ms-2 mt-2 custom-body"style={{ fontSize: '18px'}}>ฉบับ</h5>
                    </div>
                    )}
                    <br></br>
                    
                    <h1 class="card-heading px-3" style={{fontSize: '20px',fontWeight: 'bold'}}>ต้องการขอเอกสารครั้งนี้เพื่อ</h1>
                    <div class="h-screen flex flex-col justify-left sm:flex-row">
                        <div class="sm:w-1_3 sm:pr-3">
                            <div class="dropdown px-3"style={{maxWidth:"70%",fontSize: '18px'}} >
                                <select value={selectedOption} onChange={handleSelectChange} class="custom-select" id="selectedOption">
                                    <option value="">ระบุหมายเหตุ</option>
                                    <option value="เพื่อใช้ในการขอทุนการศึกษา">เพื่อใช้ในการขอทุนการศึกษา</option>
                                    <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">เพื่อใช้ในการสมัครเข้าศึกษาต่อ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <h1 class="card-heading px-3" style={{fontSize: '20px',fontWeight: 'bold'}}>อัปโหลดรูปภาพนักเรียน</h1>
                    <h2 class="card-heading px-3"style={{ fontSize: '18px'}}>หมายเหตุ</h2>
                    <h5 class="card-heading px-3"style={{ fontSize: '16px'}}>1. รูปถ่ายต้องถ่ายไว้ไม่เกิน 6 เดือน</h5>
                    <h5 class="card-heading px-3"style={{ fontSize: '16px'}}>2. รูปถ่ายนักเรียนปัจจุบันต้องแต่งกายถูกต้องตามระเบียบของโรงเรียน</h5>
                    <br></br>
                    <input 
                        type="file" 
                        class="form-control" 
                        id="customFile" 
                        onChange={handleFileChange} 
                        style={{maxWidth:"60%",marginLeft:"15px"}}
                        accept=".pdf, .jpg, .jpeg, .png"
                        required 
                        />
                    <br></br>
                </div>
                    {/* <Link to="/Request_cert">  */}
                    {/* /Parent_menu */}
                    <button type="submit" onClick={handleSubmitform} class="btn btn-primary float-end" style={{ textAlign: 'right' }}>
                      <span>Submit</span>
                    </button>
                    {/* </Link> */}
            </div>
        </div>
    </div>
   
     
      </>
      ) 
}

export default Request_cert