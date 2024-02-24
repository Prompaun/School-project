
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Date_Picker from '../components/Date_Picker';
import axios from 'axios';

function NewStudent_info({ 
    sendImageDataToEnroll, 
    sendCopyofStudentIDCardFileToEnroll,
    sendPreviousSchoolEducationalRecordsFileToEnroll,
    sendstudentNIDToEnroll,
    sendnameTitleToEnroll,
    sendNameToEnroll,
    sendLastNameToEnroll,
    sendDateOfBirthToEnroll,
    sendEducationalProofToEnroll
    
    // sendNationalDataToEnroll,
    // sendAgeDataToEnroll
  }) {
    const allowedFileTypes = ['.pdf', '.jpg', '.jpeg', '.png'];
    const [message, setMessage] = useState('');
    const [studentNID, setStudentNID] = useState('');
    const [nameTitle, setnameTitle] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [educationalProof, setEducationalProof] = useState('');

    useEffect(() => {
        if (studentNID !== '' && studentNID.length === 13) {
            sendstudentNIDToEnroll(studentNID);
        }
    }, [studentNID, sendstudentNIDToEnroll]);
    
    useEffect(() => {
        if (nameTitle !== '') {
            sendnameTitleToEnroll(nameTitle);
        }
    }, [nameTitle, sendnameTitleToEnroll]);    

    useEffect(() => {
        if (dateOfBirth !== '') {
            sendstudentNIDToEnroll(dateOfBirth);
        }
    }, [dateOfBirth, sendDateOfBirthToEnroll]);
    
    useEffect(() => {
        if (educationalProof !== '') {
            sendnameTitleToEnroll(educationalProof);
        }
    }, [educationalProof, sendEducationalProofToEnroll]);    

    useEffect(() => {
        if (name !== '') {
            sendnameTitleToEnroll(name);
        }
    }, [name, sendNameToEnroll]);    

    useEffect(() => {
        if (lastName !== '') {
            sendnameTitleToEnroll(lastName);
        }
    }, [lastName, sendLastNameToEnroll]);    

    // ฟังก์ชัน handleStudentNIDChange สำหรับการเปลี่ยนแปลงค่า studentNID
    const handleStudentNIDChange = (event) => {
        setStudentNID(event.target.value);
    };

    const handlenameTitleChange = (event) => {
        setnameTitle(event.target.value);
        // sendnameTitleToEnroll(nameTitle)s
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleDateOfBirthChange = (date) => {
        // ต้องแปลง date ให้เป็น string ก่อนเซ็ตค่า
        setDateOfBirth(date.toString());
        console.log("say hi", date);
    };

    const handleEducationalProofChange = (event) => {
        setEducationalProof(event.target.value); // เมื่อมีการเลือก radio input ให้เรียกฟังก์ชันนี้
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = '.' + file.name.split('.').pop().toLowerCase();
            if (allowedFileTypes.includes(fileType)) {
                const dataToSend = {
                    file: file,
                    student_nid: studentNID // เพิ่มเลขประจำตัวประชาชน
                };
                // sendImageDataToEnroll(dataToSend);
            } else {
                alert('กรุณาเลือกไฟล์ที่มีนามสกุล .pdf, .jpg, .jpeg หรือ .png เท่านั้น');
                event.target.value = '';
            }
        }
    };

    const handleFileChange = (event) => {
        event.preventDefault();
        const student_picture_file = event.target;
        
        if (student_picture_file.files && student_picture_file.files.length > 0) {
            const file = student_picture_file.files[0];
            const fileType = '.' + file.name.split('.').pop().toLowerCase();
            if (allowedFileTypes.includes(fileType)) {
                let fileName = '';
                if (student_picture_file.files.length === 1) {
                    fileName = file.name;
                } else {
                    fileName = student_picture_file.files.length + ' files selected';
                }
                // แสดงชื่อไฟล์ที่ถูกเลือกใน input label
                const fileInputLabel = document.getElementById('fileInputLabel');
                if (fileInputLabel) {
                    fileInputLabel.textContent = fileName;
                }
                sendImageDataToEnroll(file);
            } else {
                alert('กรุณาเลือกไฟล์ที่มีนามสกุล .pdf, .jpg, .jpeg หรือ .png เท่านั้น');
                // เคลียร์ค่า input file และ label
                student_picture_file.value = '';
                const fileInputLabel = document.getElementById('fileInputLabel');
                if (fileInputLabel) {
                    fileInputLabel.textContent = 'Select Files';
                }
            }
        }
    };

    const handleCopyofStudentIDCardFileChange = (event) => {
        event.preventDefault();
        const student_picture_file = event.target;
        
        if (student_picture_file.files && student_picture_file.files.length > 0) {
            const file = student_picture_file.files[0];
            const fileType = '.' + file.name.split('.').pop().toLowerCase();
            if (allowedFileTypes.includes(fileType)) {
                let fileName = '';
                if (student_picture_file.files.length === 1) {
                    fileName = file.name;
                } else {
                    fileName = student_picture_file.files.length + ' files selected';
                }
                // แสดงชื่อไฟล์ที่ถูกเลือกใน input label
                // const fileInputLabel = document.getElementById('fileInputLabel');
                // if (fileInputLabel) {
                //     fileInputLabel.textContent = fileName;
                // }
                sendCopyofStudentIDCardFileToEnroll(file);
            } else {
                alert('กรุณาเลือกไฟล์ที่มีนามสกุล .pdf, .jpg, .jpeg หรือ .png เท่านั้น');
                // เคลียร์ค่า input file และ label
                student_picture_file.value = '';
                // const fileInputLabel = document.getElementById('fileInputLabel');
                // if (fileInputLabel) {
                //     fileInputLabel.textContent = 'Select Files';
                // }
            }
        }
    };

    const handlePreviousSchoolEducationalRecordsFileChange = (event) => {
        event.preventDefault();
        const student_picture_file = event.target;
        
        if (student_picture_file.files && student_picture_file.files.length > 0) {
            const file = student_picture_file.files[0];
            const fileType = '.' + file.name.split('.').pop().toLowerCase();
            if (allowedFileTypes.includes(fileType)) {
                let fileName = '';
                if (student_picture_file.files.length === 1) {
                    fileName = file.name;
                } else {
                    fileName = student_picture_file.files.length + ' files selected';
                }
                sendPreviousSchoolEducationalRecordsFileToEnroll(file);
                console.log("ploy1", file);
            } else {
                alert('กรุณาเลือกไฟล์ที่มีนามสกุล .pdf, .jpg, .jpeg หรือ .png เท่านั้น');
                // เคลียร์ค่า input file และ label
                student_picture_file.value = '';
            }
        }
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formElem = event.target;
        
        try {
            const formData = new FormData(formElem);
            console.log("yoky", formData);
            await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage('Successfully uploaded to drive');
            document.getElementById("myButton").style.backgroundColor = "green";
            document.getElementById('fileInputLabel').textContent = "Select Files";
        } catch (error) {
            setMessage('Was not uploaded' + error);
            console.error(error);
        }
    };
      
    <NewStudent_info 
    sendImageDataToEnroll={sendImageDataToEnroll} 
    sendCopyofStudentIDCardFileToEnroll={sendCopyofStudentIDCardFileToEnroll} 
    sendPreviousSchoolEducationalRecordsFileToEnroll={sendPreviousSchoolEducationalRecordsFileToEnroll}
    sendstudentNIDToEnroll={sendstudentNIDToEnroll}
    sendnameTitleToEnroll={sendnameTitleToEnroll}
    sendNameToEnroll={sendLastNameToEnroll}
    sendLastNameToEnroll={sendLastNameToEnroll}
    sendDateOfBirthToEnroll={sendDateOfBirthToEnroll}
    sendEducationalProofToEnroll={sendEducationalProofToEnroll}
    />

  return (
    <>

         {/* <div>
             <h2>Select Files to Upload To Google Drive</h2>
             <p>{message}</p>
             <form onSubmit={handleSubmit}>
                 <div className="custom-file-input">
                     <input id="fileInput" type="file" name="file" required multiple onChange={handleFileChange} accept=".pdf, .jpg, .jpeg, .png"  />
                     <label htmlFor="fileInput" id="fileInputLabel">Select Files</label>
                 </div>
                 <button id="myButton" type="submit">Submit</button>
             </form>
         </div> */}

        
    <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif'}}>
        <div className="row" style={{fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0',Height: '100vh'}}>
            <div className="col-sm d-flex align-items-center">
                <label htmlFor="Personal_Information_label" id="Personal_Information_label" className="col-form-label">ข้อมูลส่วนตัวของนักเรียน</label>
            </div>
        </div>
        <br></br>

        <h2 className="col-sm d-flex align-items-center"style={{ marginLeft: '15px',fontSize: '16px'}}>หมายเหตุ : รูปถ่ายต้องถ่ายไว้ไม่เกิน 6 เดือน</h2>
        
        <div style={{ fontSize: '18px' }}>
            <div className="align-items-center">
                <label htmlFor="student_picture_file_label" id="student_picture_file_label" className="col-form-label px-3">รูปนักเรียน</label>
            </div>
            <div className="align-items-center" style={{ marginLeft: '15px', maxWidth: "50%" }}>
                <input id="student_picture_file_input" type="file" name="student_picture_file_input" className="form-control" onChange={handleFileChange} accept=".pdf, .jpg, .jpeg, .png" />
                <label htmlFor="student_picture_file_input" id="fileInputLabel">Select Files</label>
            </div>
        </div>

        <br></br>

        <div style={{ fontSize: '18px' }}>
            <div className="align-items-center">
                <label htmlFor="student_nid_label" id="student_nid_label" className="col-form-label px-3">เลขประจำตัวประชาชน</label>
            </div>
            <div className="align-items-center" style={{ marginLeft: '15px', maxWidth: "50%" }}>
                <input
                    type="text"
                    className="form-control px-3"
                    id="student_nid_input"
                    name="student_nid_input"
                    placeholder="กรอกเลขประจำตัวประชาชน"
                    value={studentNID}
                    // onChange={(e) => setStudentNID(e.target.value)}
                    onChange={handleStudentNIDChange}
                />
            </div>
        </div>
        <br></br>

       
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '16px', marginLeft: '15px' }}>
            <h2 className="card-heading" style={{ fontSize: '18px' }}>คำนำหน้า</h2>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="male" value="เด็กชาย" onChange={handlenameTitleChange} />
                <label className="form-check-label custom-body" style={{ fontSize: '16px', flexWrap: "wrap" }} htmlFor="male">
                    เด็กชาย
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="gender" id="female" value="เด็กหญิง" onChange={handlenameTitleChange} />
                <label className="form-check-label custom-body" style={{ fontSize: '16px', flexWrap: "wrap" }} htmlFor="female">
                    เด็กหญิง
                </label>
            </div>
        </div>
    
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px', marginLeft: '15px' }}>
            <div className="d-flex align-items-center">
                <label htmlFor="surname" className="col-form-label" style={{ flexWrap: 'wrap' }}>ชื่อ</label>
            </div>

            <div className="align-items-center" style={{ maxWidth: "100%" }}>
                <input type="text" className="form-control" id="surname" name="surname" placeholder="กรอกชื่อ" value={name} onChange={handleNameChange} />
            </div>

            <div className="d-flex align-items-center">
                <label htmlFor="lastname" className="col-form-label" style={{ flexWrap: 'wrap' }}>นามสกุล</label>
            </div>

            <div className="align-items-center" style={{ maxWidth: "100%" }}>
                <input type="text" className="form-control" id="lastname" name="lastname" placeholder="กรอกนามสกุล" value={lastName} onChange={handleLastNameChange} />
            </div>
        </div>
        <br></br>

        <div className="row" style={{ fontSize: '18px', marginRight: '5px', gap: '0' }}>
            <div className="d-flex align-items-center">
                <h2 htmlFor="DOB" className="col-form-label px-3">วัน/เดือน/ปีเกิด</h2>
            </div>
            <div className="align-items-center" style={{ marginLeft: '15px' }}>
                <Date_Picker onChange={handleDateOfBirthChange} />
            </div>
        </div>
        <br />

        <div style={{gap: '20px', fontFamily: 'Kanit, sans-serif', fontSize: '18px'}}>
            <div className="align-items-center">
                <label htmlFor="CopyofStudentIDCard" className="col-form-label px-3">สำเนาสูติบัตร (ของนักเรียน)</label>
            </div>
            <div className="align-items-center"style={{ marginLeft: '15px',maxWidth:"50%"}}>    
                <input type="file" className="form-control" onChange={handleCopyofStudentIDCardFileChange} accept=".pdf, .jpg, .jpeg, .png" />
            </div>
        </div>
        <br />

        <div className="row" style={{ fontFamily: 'Kanit, sans-serif',fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0'}}>
            <div className="col-sm d-flex align-items-center">
                <label htmlFor="Education_data" className="col-form-label">ข้อมูลการศึกษา</label>
            </div>
        </div>

        <h2 htmlFor="surname" className="col-form-label mb-0 mx-3" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px', marginRight: '5px', gap: '0'}}>หลักฐานการศึกษาจากโรงเรียนเดิม</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '16px', marginLeft: '15px' }}>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="selectedOption" id="option1" value="ปพ.1" onChange={handleEducationalProofChange} />
                <label className="form-check-label" htmlFor="option1">
                    ปพ.1
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="selectedOption" id="option2" value="ปพ.6" onChange={handleEducationalProofChange} />
                <label className="form-check-label" htmlFor="option2">
                    ปพ.6
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="selectedOption" id="option3" value="ปพ.7" onChange={handleEducationalProofChange} />
                <label className="form-check-label" htmlFor="option3">
                    ปพ.7
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="selectedOption" id="option4" value="ปพ.8" onChange={handleEducationalProofChange} />
                <label className="form-check-label" htmlFor="option4">
                    ปพ.8
                </label>
            </div>
        </div>

        <br></br> 
        <div className="align-items-center" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px', marginLeft: '15px',maxWidth:"50%"}}>
                <input type="file" className="form-control px-3" onChange={handlePreviousSchoolEducationalRecordsFileChange} accept=".pdf, .jpg, .jpeg, .png" />
        </div>

        
   
    <br/>
    
    </div>
      </>
  )
}

export default NewStudent_info;