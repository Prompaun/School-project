import React, { useState, useEffect, useRef  } from 'react';

import NewStudent_info from '../pages/NewStudent_info';
import HouseholdInfo from '../pages/HouseholdInfo';
import ParentsInfo from '../pages/ParentInfo';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Tab_enroll() {

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


  const handleSubmit = async (StudentImageFile, CopyofStudentIDCardFile, PreviousSchoolEducationalRecordsFile, studentNID, nameTitle, FirstName, LastName, DateOfBirth, EducationalProof) => {
    try {
        const formData = new FormData();
        formData.append('file', StudentImageFile);
        formData.append('file', CopyofStudentIDCardFile);
        formData.append('file', PreviousSchoolEducationalRecordsFile);

        // เพิ่มข้อมูลของนักเรียนเข้าไปใน formData
        formData.append('studentNID', studentNID);
        formData.append('nameTitle', nameTitle);
        formData.append('FirstName', FirstName);
        formData.append('LastName', LastName);
        formData.append('DateOfBirth', DateOfBirth);
        formData.append('EducationalProof', EducationalProof);

        await axios.post('http://localhost:8080/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        setMessage('Successfully uploaded to drive');
    } catch (error) {
        setMessage('Was not uploaded' + error);
        console.error(error);
    }
};

  const handleButtonClick = () => {
    handleSubmit(StudentImageFile, CopyofStudentIDCardFile, PreviousSchoolEducationalRecordsFile, studentNID, nameTitle, FirstName, LastName, DateOfBirth, EducationalProof);
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
                    <button type="button" onClick={() => handleTabChange('menu2')} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>ถัดไป</button>
                  </div>
                  
              </div>
              
              
              <div class={`tab-pane container ${activeTab === 'menu2' ? 'active' : ''}`} id="menu2">
                
                <HouseholdInfo />
              
                <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between', width: '100%' }}>

                  <div style={{ display: 'flex',justifyContent: 'flex-start' }}>
                    <button type="button" onClick={() => handleTabChange('menu1')} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                      ย้อนกลับ
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" onClick={() => handleTabChange('menu3')} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>ถัดไป</button>
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

                  <Link to ="/NewUser_menu">
                        {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button type="submit" className="btn btn-primary">ส่งข้อมูล</button>
                        </div> */}
                  {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" onClick={() => handleTabChange('menu3')} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>ส่งข้อมูล</button>
                  </div> */}

                  {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button type="button" onClick={handleSubmit} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                          ส่งข้อมูล
                      </button>
                  </div> */}

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button type="button" onClick={() => {handleTabChange('menu3'); handleButtonClick();}} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                          ส่งข้อมูล
                      </button>
                  </div>


                  </Link>
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