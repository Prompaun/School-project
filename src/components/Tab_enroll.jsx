import React, { useState, useEffect, useRef  } from 'react';

import NewStudent_info from '../pages/NewStudent_info';
import HouseholdInfo from '../pages/HouseholdInfo';
import ParentsInfo from '../pages/ParentInfo';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Tab_enroll({ user }) {

  const linkStyle = {
      color: 'gray',
      textDecoration: 'none',
  };

  const fontStyle = {
    fontFamily: 'Kanit, sans-serif',
    textDecoration: 'none'
  };

  const [activeTab, setActiveTab] = useState('menu1');

  const handleTabChange = (tabId) => {
      setActiveTab(tabId);
  };

  const [ParentEmail, setParentEmail] = useState({});
  // console.log("user",user);


  const [studentData, setStudentData] = useState({});
    
  const [message, setMessage] = useState('');
  const [HelloWorld, setHelloWorld] = useState('');
  const [studentNID, setStudentNID] = useState('');
  const [nameTitle, setnameTitle] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [DateOfBirth, setDateOfBirth] = useState('');
  const [EducationalProof, setEducationalProof] = useState('');
  const [StudentImageFile, setStudentImageFile] = useState('');
  const [CopyofStudentIDCardFile, setCopyofStudentIDCardFile] = useState('');
  const [PreviousSchoolEducationalRecordsFile, setPreviousSchoolEducationalRecordsFile] = useState('');


    const receiveStudentData = (data) => {
      setStudentData(data);
      // ไม่ควรตั้งค่า imageUploaded โดยตรงที่นี่
      // if (data.image) {
      //     setImageUploaded(true);
      // }
  };

  const [imageUploaded, setImageUploaded] = useState(false);

  const sendstudentNIDToEnroll = (studentNID) => {
    console.log('Received studentNID:', studentNID);
    setStudentNID(studentNID);
  };

  const sendnameTitleToEnroll = (nameTitle) => {
    console.log('Received nameTitle:', nameTitle);
    setnameTitle(nameTitle);
  };

  const sendFirstNameToEnroll = (FirstName) => {
    console.log('Received name:', FirstName);
    setFirstName(FirstName);
  };

  const sendLastNameToEnroll = (LastName) => {
    console.log('Received LastNamee:', LastName);
    setLastName(LastName);
  };

  const sendDateOfBirthToEnroll = (dateOfBirth) => {
    console.log('Received dateOfBirth:', dateOfBirth);
    setDateOfBirth(dateOfBirth);
  };

  const sendEducationalProofToEnroll = (educationalProof) => {
    console.log('Received educationalProof:', educationalProof);
    setEducationalProof(educationalProof);
  };

  const sendCopyofStudentIDCardFileToEnroll = (fileData) => {
    console.log('Received fileData:', fileData);
    setCopyofStudentIDCardFile(fileData);
  };

  const sendImageDataToEnroll = (fileData) => {
    console.log('Received image data:', fileData);
    setStudentImageFile(fileData); // เก็บค่า imageData ลงใน state StudentImageFile
    setImageUploaded(true); // ตั้งค่า imageUploaded เมื่อได้รับรูปภาพ
    // handleSubmit(imageData); // เรียกใช้ handleSubmit และส่ง imageData เข้าไปด้วย
  };

  const sendPreviousSchoolEducationalRecordsFileToEnroll = (fileData) => {
    console.log('Received fileData:', fileData);
    setPreviousSchoolEducationalRecordsFile(fileData);
  };

  const navigate = useNavigate();
  const handleSubmit = async (StudentImageFile, CopyofStudentIDCardFile, PreviousSchoolEducationalRecordsFile, studentNID, nameTitle, FirstName, LastName, DateOfBirth, EducationalProof) => {
    const confirmSubmit = window.confirm("ยืนยันที่จะส่งข้อมูลหรือไม่?");
    if (confirmSubmit) {
      try {
          // แสดงกล่องข้อความยืนยันและตรวจสอบผลลัพธ์
          const formData = new FormData();
          formData.append('file', StudentImageFile);
          formData.append('file', CopyofStudentIDCardFile);
          formData.append('file', PreviousSchoolEducationalRecordsFile);
          
          // เพิ่มข้อมูลของนักเรียนเข้าไปใน formData
          formData.append('Student_NID', studentNID);
          formData.append('NameTitle', nameTitle);
          formData.append('FirstName', FirstName);
          formData.append('LastName', LastName);
          formData.append('Student_DOB', DateOfBirth);
          formData.append('EducationalProof', EducationalProof);
          formData.append('ParentEmail', ParentEmail);
    
          await axios.post('http://localhost:8080/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
    
          setMessage('Successfully uploaded to drive');
          navigate("/NewUser_menu");
        
      } catch (error) {
        if (error.response && error.response.status === 409) {
          setMessage('Identification number already exists. Please try with a different one.');
          alert('Identification number already exists. Please try with a different one.');
        } else {
          setMessage('Was not uploaded' + error);
          console.error(error);
        }
      }
    }
  };
  
  const handleButtonClick = async () => {
    await handleSubmit(StudentImageFile, CopyofStudentIDCardFile, PreviousSchoolEducationalRecordsFile, studentNID, nameTitle, FirstName, LastName, DateOfBirth, EducationalProof);
  };

  const handleNewstudent_infoClick = async () => {
    if (!studentNID) {
      alert('กรุณากรอก studentNID ด้วยค่ะ');
      return;
    }
    if (!nameTitle) {
      alert('กรุณากรอก nameTitle ด้วยค่ะ');
      return;
    }
    if (!FirstName) {
      alert('กรุณากรอก FirstName ด้วยค่ะ');
      return;
    }
    if (!LastName) {
      alert('กรุณากรอก LastName ด้วยค่ะ');
      return;
    }
    if (!DateOfBirth) {
      alert('กรุณากรอก DateOfBirth ด้วยค่ะ');
      return;
    }
    if (!EducationalProof) {
      alert('กรุณากรอก EducationalProof ด้วยค่ะ');
      return;
    }
    if (!StudentImageFile) {
      alert('กรุณาเลือกไฟล์รูปภาพของนักเรียน ด้วยค่ะ');
      return;
    }
    if (!CopyofStudentIDCardFile) {
      alert('กรุณาเลือกไฟล์สำเนาบัตรประชาชนของนักเรียน ด้วยค่ะ');
      return;
    }
    if (!PreviousSchoolEducationalRecordsFile) {
      alert('กรุณาเลือกไฟล์ประกาศนียบัตรการศึกษาของโรงเรียนก่อนหน้า ด้วยค่ะ');
      return;
    }

    handleTabChange('menu2');
  
    // กรณีที่ข้อมูลทั้งหมดถูกกรอกครบ
    setParentEmail(user.emails[0].value);
    if (user && user.emails[0].value) {
      console.log("user", user.emails[0].value);
    } else {
      console.log('User email is not available.');
    }
  };




    return (
      <div className="d-flex flex-column align-items-center">
        <div class="card" style={{width: '60vw', height: 'auto'}}>
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a
                  class={`nav-link ${activeTab === 'menu1' ? 'active' : ''}`}
                  data-bs-toggle="tab"
                  href="#menu1"
                  style={{ fontFamily: 'Kanit, sans-serif' }}
                  onClick={() => handleTabChange('menu1')}
                >
                  ข้อมูลนักเรียน
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={`nav-link ${activeTab === 'menu2' ? 'active' : ''}`}
                  data-bs-toggle="tab"
                  href="#menu2"
                  style={{ fontFamily: 'Kanit, sans-serif' }}
                  onClick={() => handleTabChange('menu2')}
                >
                  ที่อยู่ตามทะเบียนบ้าน
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={`nav-link ${activeTab === 'menu3' ? 'active' : ''}`}
                  data-bs-toggle="tab"
                  href="#menu3"
                  style={{ fontFamily: 'Kanit, sans-serif' }}
                  onClick={() => handleTabChange('menu3')}
                >
                  ข้อมูลผู้ปกครอง
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content">
              <div class={`tab-pane container ${activeTab === 'menu1' ? 'active' : ''}`} id="menu1" >
              <div>
                  <NewStudent_info
                      sendImageDataToEnroll={sendImageDataToEnroll}
                      sendCopyofStudentIDCardFileToEnroll={sendCopyofStudentIDCardFileToEnroll}
                      sendPreviousSchoolEducationalRecordsFileToEnroll={sendPreviousSchoolEducationalRecordsFileToEnroll}
                      sendstudentNIDToEnroll={sendstudentNIDToEnroll}
                      sendnameTitleToEnroll={sendnameTitleToEnroll}
                      sendDateOfBirthToEnroll={sendDateOfBirthToEnroll}
                      sendEducationalProofToEnroll={sendEducationalProofToEnroll}
                      sendFirstNameToEnroll={sendFirstNameToEnroll}
                      sendLastNameToEnroll={sendLastNameToEnroll}
                  />
              </div>

              {imageUploaded ? (
                  <p>ไฟล์รูปถูกส่งมาแล้ว</p>
              ) : (
                  <p>โปรดเลือกไฟล์รูปเพื่ออัพโหลด</p>
              )}


                
                  <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'flex-end' }}>
                    <button type="button" onClick={() => { handleNewstudent_infoClick();} } className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                      ถัดไป
                    </button>
                  </div>
                  
              </div>
              
              
              <div class={`tab-pane container ${activeTab === 'menu2' ? 'active' : ''}`} id="menu2">
                
                <HouseholdInfo />
              
                <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between', width: '100%' }}>

                  <div style={{ display: 'flex',justifyContent: 'flex-start' }}>
                    <button type="button" onClick={() => {handleTabChange('menu1');  }} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                      ย้อนกลับ
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" onClick={() => {handleTabChange('menu3');  }} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                      ถัดไป
                    </button>
                  </div>
                  
                </div>

              </div>
              <div class={`tab-pane container ${activeTab === 'menu3' ? 'active' : ''}`} id="menu3">
                <ParentsInfo />

                <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between', width: '100%' }}>

                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button type="button" onClick={() => handleTabChange('menu2')} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                      ย้อนกลับ
                    </button>
                  </div>

                  <div>
                    {/* {message && <p>{message}</p>} //แสดงข้อความแจ้งเตือนในกรณีที่มีข้อผิดพลาด */}

                    {/* {message === "Successfully uploaded to drive" ? ( */}
                      {/* <Link to="/NewUser_menu" > */}
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <button type="button" onClick={() => { handleTabChange('menu3'); handleButtonClick(); }} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px' }}>
                            ส่งข้อมูล
                          </button>
                        </div>
                      {/* </Link> */}
                     {/* ) : ( */}
                       {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}> */}
                         {/* <button
                          type="button"
                          onClick={handleButtonClick}
                          className="btn btn-primary"
                          style={{ ...fontStyle, color: 'white', fontSize: '16px' }}
                        >
                          ส่งข้อมูล
                        </button>
                      </div>
                    )} */}

                    {/* </div> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
          <br />
        </div>
        </div>
      );
    };

export default Tab_enroll;