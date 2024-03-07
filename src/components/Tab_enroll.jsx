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

  const [ParentEmail, setParentEmail] = useState('');
  // console.log("user",user);


  const [studentData, setStudentData] = useState({});
    
  const [message, setMessage] = useState('');
  const [HelloWorld, setHelloWorld] = useState('');
  const [studentNID, setStudentNID] = useState('');
  const [nameTitle, setnameTitle] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [DateOfBirth, setDateOfBirth] = useState('');
  const [Transcript_type, setTranscript_type] = useState('');
  const [StudentImageFile, setStudentImageFile] = useState('');
  const [CopyofStudentIDCardFile, setCopyofStudentIDCardFile] = useState('');
  const [PreviousSchoolEducationalRecordsFile, setPreviousSchoolEducationalRecordsFile] = useState('');

  const [HouseNumber, setHouseNumber] = useState('');
  const [Moo, setMoo] = useState('');
  const [Soi, setSoi] = useState('');
  const [Road, setRoad] = useState('');
  const [Province, setProvince] = useState('');
  const [District, setDistrict] = useState('');
  const [SubDistrict, setSubDistrict] = useState('');
  const [HouseReg_file, setHouseReg_file] = useState('');

  const [FoundFather, setFoundFather] = useState(false);
  const [FoundMother, setFoundMother] = useState(false);
  const [FoundParent, setFoundParent] = useState(false);
  const [FoundParentData, setFoundParentData] = useState('');
  const [FatherEmail, setFatherEmail] = useState('');


  const [MotherEmail, setMotherEmail] = useState('22');
  const [SomeoneElseEmail, setSomeoneElseEmail] = useState('');

  const [isFatherRecordData, setIsFatherRecordData] = useState(false);
  const [FatherFirstname, setFatherFirstname] = useState('');
  const [FatherLastname, setFatherLastname] = useState('');
  const [FatherDateOfBirth, setFatherDateOfBirth] = useState('');
  const [isFatherForeigner, setIsFatherForeigner] = useState(false); // State สำหรับเก็บข้อมูลว่าเป็นคนต่างชาติหรือไม่
  const [FatherNationality, setFatherNationality] = useState(''); // State สำหรับเก็บข้อมูลสัญชาติ
  const [FatherOccupation, setFatherOccupation] = useState('');
  const [FatherOffice, setFatherOffice] = useState('');
  const [FatherTel, setFatherTel] = useState('');

  const [isMotherRecordData, setIsMotherRecordData] = useState(false);
  const [MotherFirstname, setMotherFirstname] = useState('');
  const [MotherLastname, setMotherLastname] = useState('');
  const [MotherDateOfBirth, setMotherDateOfBirth] = useState('');
  const [isMotherForeigner, setIsMotherForeigner] = useState(false); // State สำหรับเก็บข้อมูลว่าเป็นคนต่างชาติหรือไม่
  const [MotherNationality, setMotherNationality] = useState(''); // State สำหรับเก็บข้อมูลสัญชาติ
  const [MotherOccupation, setMotherOccupation] = useState('');
  const [MotherOffice, setMotherOffice] = useState('');
  const [MotherTel, setMotherTel] = useState('');

  const [isParentRecordData, setIsParentRecordData] = useState(false);
  const [ParentFirstname, setParentFirstname] = useState('');
  const [ParentLastname, setParentLastname] = useState('');
  const [ParentDateOfBirth, setParentDateOfBirth] = useState('');
  const [isParentForeigner, setIsParentForeigner] = useState(false); // State สำหรับเก็บข้อมูลว่าเป็นคนต่างชาติหรือไม่
  const [ParentNationality, setParentNationality] = useState(''); // State สำหรับเก็บข้อมูลสัญชาติ
  const [ParentOccupation, setParentOccupation] = useState('');
  const [ParentOffice, setParentOffice] = useState('');
  const [ParentTel, setParentTel] = useState('');
  const [ParentRole, setParentRole] = useState('');

    const receiveStudentData = (data) => {
      setStudentData(data);
      // ไม่ควรตั้งค่า imageUploaded โดยตรงที่นี่
      // if (data.image) {
      //     setImageUploaded(true);
      // }
  };

  const [imageUploaded, setImageUploaded] = useState(false);

  const sendstudentNIDToEnroll = (studentNID) => {
    // console.log('Received studentNID:', studentNID);
    setStudentNID(studentNID);
  };

  const sendnameTitleToEnroll = (nameTitle) => {
    // console.log('Received nameTitle:', nameTitle);
    setnameTitle(nameTitle);
  };

  const sendFirstNameToEnroll = (FirstName) => {
    // console.log('Received name:', FirstName);
    setFirstName(FirstName);
  };

  const sendLastNameToEnroll = (LastName) => {
    // console.log('Received LastNamee:', LastName);
    setLastName(LastName);
  };

  const sendDateOfBirthToEnroll = (dateOfBirth) => {
    // console.log('Received dateOfBirth:', dateOfBirth);
    setDateOfBirth(dateOfBirth);
  };

  const sendTranscript_typeToEnroll = (Transcript_type) => {
    // console.log('Received Transcript_type:', Transcript_type);
    setTranscript_type(Transcript_type);
  };

  const sendCopyofStudentIDCardFileToEnroll = (fileData) => {
    // console.log('Received fileData:', fileData);
    setCopyofStudentIDCardFile(fileData);
  };

  const sendImageDataToEnroll = (fileData) => {
    // console.log('Received image data:', fileData);
    setStudentImageFile(fileData); // เก็บค่า imageData ลงใน state StudentImageFile
    setImageUploaded(true); // ตั้งค่า imageUploaded เมื่อได้รับรูปภาพ
  };

  const sendPreviousSchoolEducationalRecordsFileToEnroll = (fileData) => {
    // console.log('Received fileData:', fileData);
    setPreviousSchoolEducationalRecordsFile(fileData);
  };

  //household Info file
  const sendHouseNumberToEnroll = (HouseNumber) => {
    // console.log('Received HouseNumber:', HouseNumber);
    setHouseNumber(HouseNumber);
  };

  const sendMooToEnroll = (Moo) => {
    // console.log('Received Moo:', Moo);
    setMoo(Moo);
  };

  const sendSoiToEnroll = (Soi) => {
    // console.log('Received Soi:', Soi);
    setSoi(Soi);
  };

  const sendRoadToEnroll = (Road) => {
    // console.log('Received Road:', Road);
    setRoad(Road);
  };

  const sendProvinceToEnroll = (Province) => {
    // console.log('Received Province:', Province);
    setProvince(Province);
  };

  const sendDistrictToEnroll = (District) => {
    // console.log('Received District:', District);
    setDistrict(District);
  };

  const sendSubDistrictToEnroll = (SubDistrict) => {
    // console.log('Received SubDistrict:', SubDistrict);
    setSubDistrict(SubDistrict);
  };

  const sendHouseReg_fileToEnroll = (HouseReg_file) => {
    // console.log('Received HouseReg_file:', HouseReg_file);
    setHouseReg_file(HouseReg_file);
  };

  //Parent Info file
  const sendFatherEmailToEnroll = (FatherEmail) => {
    // console.log('Received FatherEmail:', FatherEmail);
    setFatherEmail(FatherEmail);
  };

  const sendMotherEmailToEnroll = (MotherEmail) => {
    // console.log('Received Mother_Email:', MotherEmail);
    setMotherEmail(MotherEmail);
  };

  const sendSomeoneElseEmailToEnroll = (SomeoneElseEmail) => {
    // console.log('Received SomeoneElseEmail:', SomeoneElseEmail);
    setSomeoneElseEmail(SomeoneElseEmail);
  };
///////////////////////////////////////////////////////////////////////////////////////////////////
  const sendisFatherRecordDataToEnroll= (isFatherRecordData) => {
    // console.log('Received isFatherRecordData:', isFatherRecordData);
    setIsFatherRecordData(isFatherRecordData);
  };

  const sendisMotherRecordDataToEnroll= (isMotherRecordData) => {
    // console.log('Received isMotherRecordData:', isMotherRecordData);
    setIsMotherRecordData(isMotherRecordData);
  };

  const sendisParentRecordDataToEnroll= (isParentRecordData) => {
    // console.log('Received isParentRecordData:', isParentRecordData);
    setIsParentRecordData(isParentRecordData);
  };
///////////////////////////////////////////////////////////////////////////////////////////////////
  const sendFatherFirstnameToEnroll = (FatherFirstname) => {
    console.log('Received FatherFirstname:', FatherFirstname);
    setFatherFirstname(FatherFirstname);
  };

  const sendFatherLastnameToEnroll = (FatherLastname) => {
    console.log('Received FatherLastname:', FatherLastname);
    setFatherLastname(FatherLastname);
  };

  const sendFatherDateOfBirthToEnroll = (FatherDateOfBirth) => {
    console.log('Received FatherDateOfBirth:', FatherDateOfBirth);
    setFatherDateOfBirth(FatherDateOfBirth);
  };

  const sendisFatherForeignerToEnroll = (IsFatherForeigner) => {
    console.log('Received FatherForeigner:', IsFatherForeigner);
    setIsFatherForeigner(IsFatherForeigner);
  };

  const sendFatherNationalityToEnroll = (FatherNationality) => {
    console.log('Received FatherNationality:', FatherNationality);
    setFatherNationality(FatherNationality);
  };

  const sendFatherOccupationToEnroll = (FatherOccupation) => {
    console.log('Received FatherOccupation:', FatherOccupation);
    setFatherOccupation(FatherOccupation);
  };

  const sendFatherOfficeToEnroll = (FatherOffice) => {
    console.log('Received FatherOffice:', FatherOffice);
    setFatherOffice(FatherOffice);
  };

  const sendFatherTelToEnroll = (FatherTel) => {
    console.log('Received FatherTel:', FatherTel);
    setFatherTel(FatherTel);
  };

///////////////////////////////////////////////////////////////////////////////////////////////////

const sendMotherFirstnameToEnroll = (MotherFirstname) => {
  console.log('Received MotherFirstname:', MotherFirstname);
  setMotherFirstname(MotherFirstname);
};

const sendMotherLastnameToEnroll = (MotherLastname) => {
  console.log('Received MotherLastname:', MotherLastname);
  setMotherLastname(MotherLastname);
};

const sendMotherDateOfBirthToEnroll = (MotherDateOfBirth) => {
  console.log('Received MotherDateOfBirth:', MotherDateOfBirth);
  setMotherDateOfBirth(MotherDateOfBirth);
};

const sendisMotherForeignerToEnroll = (IsMotherForeigner) => {
  console.log('Received IsMotherForeigner:', IsMotherForeigner);
  setIsMotherForeigner(IsMotherForeigner);
};

const sendMotherNationalityToEnroll = (MotherNationality) => {
  console.log('Received MotherNationality:', MotherNationality);
  setMotherNationality(MotherNationality);
};

const sendMotherOccupationToEnroll = (MotherOccupation) => {
  console.log('Received MotherOccupation:', MotherOccupation);
  setMotherOccupation(MotherOccupation);
};

const sendMotherOfficeToEnroll = (MotherOffice) => {
  console.log('Received MotherOffice:', MotherOffice);
  setMotherOffice(MotherOffice);
};

const sendMotherTelToEnroll = (MotherTel) => {
  console.log('Received MotherTel:', MotherTel);
  setMotherTel(MotherTel);
};
///////////////////////////////////////////////////////////////////////////////////////////////////
const sendParentFirstnameToEnroll = (ParentFirstname) => {
  console.log('Received ParentFirstname:', ParentFirstname);
  setParentFirstname(ParentFirstname);
};

const sendParentLastnameToEnroll = (ParentLastname) => {
  console.log('Received ParentLastname:', ParentLastname);
  setParentLastname(ParentLastname);
};

const sendParentDateOfBirthToEnroll = (ParentDateOfBirth) => {
  console.log('Received ParentDateOfBirth:', ParentDateOfBirth);
  setParentDateOfBirth(ParentDateOfBirth);
};

const sendisParentForeignerToEnroll = (IsParentForeigner) => {
  console.log('Received IsParentForeigner:', IsParentForeigner);
  setIsParentForeigner(IsParentForeigner);
};

const sendParentNationalityToEnroll = (ParentNationality) => {
  console.log('Received ParentNationality:', ParentNationality);
  setParentNationality(ParentNationality);
};

const sendParentOccupationToEnroll = (ParentOccupation) => {
  console.log('Received ParentOccupation:', ParentOccupation);
  setParentOccupation(ParentOccupation);
};

const sendParentOfficeToEnroll = (ParentOffice) => {
  console.log('Received ParentOffice:', ParentOffice);
  setParentOffice(ParentOffice);
};

const sendParentTelToEnroll = (ParentTel) => {
  console.log('Received ParentTel:', ParentTel);
  setParentTel(ParentTel);
};

const sendParentRoleToEnroll = (ParentRole) => {
  console.log('Received ParentRole:', ParentRole);
  setParentRole(ParentRole);
};
///////////////////////////////////////////////////////////////////////////////////////////////////

  const navigate = useNavigate();
  const handleSubmit = async (StudentImageFile, CopyofStudentIDCardFile, PreviousSchoolEducationalRecordsFile, studentNID, nameTitle, FirstName, LastName, DateOfBirth, Transcript_type, HouseNumber, Moo, Soi, Road, Province, District, SubDistrict, HouseReg_file) => {
    // const confirmSubmit = window.confirm("ยืนยันที่จะส่งข้อมูลหรือไม่?");
    // if (confirmSubmit) {
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
          formData.append('Transcript_type', Transcript_type);
          formData.append('ParentEmail', ParentEmail);

          formData.append('HouseNumber', HouseNumber);
          formData.append('Moo', Moo || '-');
          formData.append('Soi', Soi || '-');
          formData.append('Road', Road || '-');
          formData.append('Province', Province);
          formData.append('District', District);
          formData.append('SubDistrict', SubDistrict);
          formData.append('file', HouseReg_file);
    

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
          // alert('Identification number already exists. Please try with a different one.');
//**************ปล่อยไป แต่จะไปเช็คตอนเก็บข้อมูลลงตาราง enrollment ว่าเคยสมัครปีนั้น หลักสูตรนั้นแล้วรึยัง************
        } else {
          setMessage('Was not uploaded' + error);
          console.error(error);
        }
      }
    // }
  };
  
  const checkEmail = async (email) => {
    try {
        const response = await axios.get(`http://localhost:8080/check-email?email=${email}`);
        const data = response.data;
        // console.log("11111111111111111111");

        if (data.found) {
            // alert('ท่านเคยบันทึกข้อมูลของท่านแล้ว โดยใช้อีเมล' + email);
            return true;
        } 
          else {
            // alert('ไม่พบอีเมล ' + email + " ในฐานข้อมูล กรุณากรอกข้อมูลของท่านด้วยค่ะ");
            return false;
        }
    } catch (error) {
        console.error('Error checking email:', error);
        alert('An error occurred while checking email.');
    }
};
  
  // const handleButtonClick = async () => {

    // const parentData = [{
    //   Avatar: 'hh',
    //   FirstName: 'hh',
    //   LastName: 'hh',
    //   Age: '4',
    //   Nationality: 'hh',
    //   Office: 'h',
    //   Occupation: 'h',
    //   Role: 'h',
    //   Tel: '00',
    //   Email: 'hh'
    // }];
    
    // // ส่งข้อมูลไปยังเส้นทาง /Parent_information โดยใช้ Axios
    // axios.post('http://localhost:8080/Parent_information', parentData)
    //   .then(response => {
    //     console.log(response.data);
    //     // ดำเนินการเพิ่มข้อมูลสำเร็จ
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     // เกิดข้อผิดพลาดในการเพิ่มข้อมูล
    //   });
    // เรียกใช้ฟังก์ชัน checkEmail

    const handleButtonClick = async () => {
      console.log('fatherfirstname',FatherFirstname);
      const confirmSubmit = window.confirm("ยืนยันที่จะส่งข้อมูลหรือไม่?");
      setFoundParentData('');
      if (confirmSubmit) {
          try {
              //ทำฟังก์ชันเก็บข้อมูล applicants_parent
              //ทำฟังก์ชันเก็บข้อมูล enrollment ต้องกำหนดชื่อหลักสูตร
              await handleSubmit(
                  StudentImageFile, 
                  CopyofStudentIDCardFile,
                  PreviousSchoolEducationalRecordsFile,
                  studentNID,
                  nameTitle,
                  FirstName,
                  LastName,
                  DateOfBirth,
                  Transcript_type,
                  HouseNumber,
                  Moo,
                  Soi,
                  Road,
                  Province,
                  District,
                  SubDistrict,
                  HouseReg_file
              );

              
            } catch (error) {
                console.error('Error handling button click:', error);
            }
          }
      };

  const holyhola = async () => {
    console.log("555555555555555555555555555555");
    if (!FoundFather){
      setFoundParentData(prevData => prevData + "ไม่พบข้อมูลบิดาในฐานข้อมูล ");
    }

    if (!FoundMother){
      setFoundParentData(prevData => prevData + "ไม่พบข้อมูลมารดาในฐานข้อมูล ");
    }

    if (!FoundParent){
      setFoundParentData(prevData => prevData + "ไม่พบข้อมูลผู้ปกครองในฐานข้อมูล");
    }
  }

  

  const handleNewstudent_infoClick = async () => {
    // handleTabChange('menu1');
    let numMissingFields = 0;
    if (!StudentImageFile) {
      numMissingFields++;
     
    }
    if (!studentNID) {
      numMissingFields++;
     
      
    }
    if (!nameTitle) {
      numMissingFields++;
      
    }
    if (!FirstName) {
      numMissingFields++;
      
    }
    if (!LastName) {
      numMissingFields++;
     
    }
    if (!DateOfBirth) {
      numMissingFields++;
      
    }
    if (!Transcript_type) {
      numMissingFields++;
      
    }
    
    if (!CopyofStudentIDCardFile) {
      numMissingFields++;
      
    }
    if (!PreviousSchoolEducationalRecordsFile) {
      numMissingFields++;
     
    }

    if (numMissingFields > 1) {
      alert('กรุณากรอกข้อมูลส่วนตัวนักเรียนให้ครบถ้วน');
      handleTabChange('menu1');
      return false;
    }
    else{
      if (!StudentImageFile) {   
        alert('กรุณาเลือกไฟล์รูปภาพของนักเรียนด้วยค่ะ');
      }
      if (!studentNID) {    
        alert('กรุณากรอกเลขประจำตัวประชาชนของนักเรียนด้วยค่ะ');
        
      }
      if (!nameTitle) {      
        alert('กรุณากรอกคำนำหน้าชื่อของนักเรียนด้วยค่ะ');
        
      }
      if (!FirstName) {       
        alert('กรุณากรอกชื่อของนักเรียนด้วยค่ะ');
        
      }
      if (!LastName) {        
        alert('กรุณากรอกนามสกุลของนักเรียนด้วยค่ะ');
        
      }
      if (!DateOfBirth) {        
        alert('กรุณากรอก วัน/เดือน/ปีเกิด ของนักเรียนด้วยค่ะ');
       
      }
      if (!Transcript_type) {
        alert('กรุณากรอกประเภทของหลักฐานการศึกษาจากโรงเรียนเดิมด้วยค่ะ');
        
      }
      
      if (!CopyofStudentIDCardFile) {
        alert('กรุณาเลือกไฟล์สำเนาบัตรประชาชนของนักเรียนด้วยค่ะ');
        
      }
      if (!PreviousSchoolEducationalRecordsFile) {
        alert('กรุณาเลือกไฟล์ประกาศนียบัตรการศึกษาของโรงเรียนก่อนหน้าด้วยค่ะ');
        
      }
    }
    
    if (user && user.emails[0].value) {
      setParentEmail(user.emails[0].value);
      console.log("user", user.emails[0].value);
    } else {
      console.log('User email is not available.');
    }
    
    // กรณีที่ผ่านเงื่อนไขทั้งหมด
    return true;

      

  };
  const handleHousehold_infoClick = async () => {
    let numMissingFields = 0;
  
    if (!HouseNumber) {
      numMissingFields++;
    }
    if (!Province) {
      numMissingFields++;
    }
    if (!District) {
      numMissingFields++;
    }
    if (!SubDistrict) {
      numMissingFields++;
    }
    if (!HouseReg_file) {
      numMissingFields++;
    }

    if (numMissingFields > 1) {
      alert('กรุณากรอกข้อมูลที่อยู่ตามทะเบียนบ้านให้ครบถ้วน');
      handleTabChange('menu2');
      return false;
    }
    else {
      if (!HouseNumber) {
        alert('กรุณากรอกบ้านเลขที่ด้วยค่ะ');
      }
      if (!Province) {
        alert('กรุณากรอกจังหวัดของที่อยู่ตามทะเบียนบ้านด้วยค่ะ');
      }
      if (!District) {
        alert('กรุณากรอกเขต/อำเภอของที่อยู่ตามทะเบียนบ้านด้วยค่ะ');
      }
      if (!SubDistrict) {
        alert('กรุณากรอกแขวง/ตำบลของที่อยู่ตามทะเบียนบ้านด้วยค่ะ');
      }
      if (!HouseReg_file) {
        alert('กรุณาอัพโหลดไฟล์สำเนาทะเบียนบ้านด้วยค่ะ');
      }
  
    }


    return true;
  };
  const handleParentinfoClick = async () => {
    let numMissingFields = 0;

    if (!FatherEmail) {
      numMissingFields++;
    }
    if (!MotherEmail) {
      numMissingFields++;
    }
    
    if (!isFatherRecordData) {

      if (!FatherFirstname) {
        numMissingFields++;
      }
      if (!FatherLastname) {
        numMissingFields++;
      }
      if (!FatherDateOfBirth) {
        numMissingFields++;
      }
      if (isFatherForeigner) {
        if (!FatherNationality) {
          numMissingFields++;
        }
      }
      else {
        setFatherNationality("ไทย");
      }
      if (!FatherOccupation) {
        numMissingFields++;
      }
      if (!FatherOffice) {
        numMissingFields++;
      }
      if (!FatherTel) {
        numMissingFields++;
      }
    }
    if (!isMotherRecordData) {

      if (!MotherFirstname) {
        numMissingFields++;
      }
      if (!MotherLastname) {
        numMissingFields++;
      }
      if (!MotherDateOfBirth) {
        numMissingFields++;
      }
      if (isMotherForeigner) {
        if (!MotherNationality) {
          numMissingFields++;
        }
      }
      else {
        setFatherNationality("ไทย");
      }
      if (!MotherOccupation) {
        numMissingFields++;
      }
      if (!MotherOffice) {
        numMissingFields++;
      }
      if (!MotherTel) {
        numMissingFields++;
      }
    }
    if (!SomeoneElseEmail){
      numMissingFields++;
    }
    if (!isParentRecordData) {

      if (!ParentFirstname) {
        numMissingFields++;
      }
      if (!ParentLastname) {
        numMissingFields++;
      }
      if (!ParentDateOfBirth) {
        numMissingFields++;
      }
      if (isParentForeigner) {
        if (!ParentNationality) {
          numMissingFields++;
        }
      }
      else {
        setFatherNationality("ไทย");
      }
      if (!ParentOccupation) {
        numMissingFields++;
      }
      if (!ParentOffice) {
        numMissingFields++;
      }
      if (!ParentTel) {
        numMissingFields++;
      }
    }
    if (numMissingFields > 1) {
      alert('กรุณากรอกข้อมูลผู้ปกครองให้ครบถ้วน');
      handleTabChange('menu3');
      return false;
    }
    else {
      if (!FatherEmail) {
        alert('กรุณากรอกอีเมลบิดา');
      }
      if (!MotherEmail) {
        alert('กรุณากรอกอีเมลมารดา');
      }
      if (!isFatherRecordData) {
        if (!FatherFirstname) {
          alert('กรุณากรอกชื่อบิดา');
        }
        if (!FatherLastname) {
          alert('กรุณากรอกนามสกุลบิดา');
        }
        if (!FatherDateOfBirth) {
          alert('กรุณากรอกวัน/เดือน/ปีเกิดของบิดา');
        }
        if (isFatherForeigner) {
          if (!FatherNationality) {
            alert('กรุณากรอกสัญชาติของบิดา');
          }
        }
        
        if (!FatherOccupation) {
          alert('กรุณากรอกอาชีพของบิดา');
        }
        if (!FatherOffice) {
          alert('กรุณากรอกสถานที่ทำงานของบิดา');
        }
        if (!FatherTel) {
          alert('กรุณากรอกเลขเบอร์โทรศัพท์ของบิดา');
        }
      }
      if (!isMotherRecordData) {
        if (!MotherFirstname) {
          alert('กรุณากรอกชื่อมารดา');
        }
        if (!MotherLastname) {
          alert('กรุณากรอกนามสกุลมารดา');
        }
        if (!MotherDateOfBirth) {
          alert('กรุณากรอกวัน/เดือน/ปีเกิดของมารดา');
        }
        if (isMotherForeigner) {
          if (!MotherNationality) {
            alert('กรุณากรอกสัญชาติของมารดา');
          }
        }
        
        if (!MotherOccupation) {
          alert('กรุณากรอกอาชีพของมารดา');
        }
        if (!MotherOffice) {
          alert('กรุณากรอกสถานที่ทำงานของมารดา');
        }
        if (!MotherTel) {
          alert('กรุณากรอกเลขเบอร์โทรศัพท์ของมารดา');
        }
    }
    if (!SomeoneElseEmail){
      alert('กรุณากรอกอีเมลผู้ปกครอง');
    }
    if (!isParentRecordData) {
      if (!ParentFirstname) {
        alert('กรุณากรอกชื่อผู้ปกครอง');
      }
      if (!ParentLastname) {
        alert('กรุณากรอกนามสกุลผู้ปกครอง');
      }
      if (!ParentDateOfBirth) {
        alert('กรุณากรอกวัน/เดือน/ปีเกิดของผู้ปกครอง');
      }
      if (isParentForeigner) {
        if (!ParentNationality) {
          alert('กรุณากรอกสัญชาติของผู้ปกครอง');
        }
      }
      
      if (!ParentOccupation) {
        alert('กรุณากรอกอาชีพของผู้ปกครอง');
      }
      if (!ParentOffice) {
        alert('กรุณากรอกสถานที่ทำงานของผู้ปกครอง');
      }
      if (!ParentTel) {
        alert('กรุณากรอกเลขเบอร์โทรศัพท์ของผู้ปกครอง');
      }
  }
    return true;
  }};
  
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
                onClick={() =>  handleTabChange('menu2') }
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
                      sendTranscript_typeToEnroll={sendTranscript_typeToEnroll}
                      sendFirstNameToEnroll={sendFirstNameToEnroll}
                      sendLastNameToEnroll={sendLastNameToEnroll}
                  />
              </div>

              {/* {imageUploaded ? (
                  <p>ไฟล์รูปถูกส่งมาแล้ว</p>
              ) : (
                  <p>โปรดเลือกไฟล์รูปเพื่ออัพโหลด</p>
              )} */}


                
                  <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'flex-end' }}>
                    <button type="button" onClick={() => { 
                      if (studentNID && nameTitle && FirstName && LastName && DateOfBirth && Transcript_type && StudentImageFile && CopyofStudentIDCardFile && PreviousSchoolEducationalRecordsFile) 
                      {
                        handleTabChange('menu2');
                      };
                      handleNewstudent_infoClick();
                    }} 
                    
                    className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                      ถัดไป
                    </button>
                  </div>
                  
              </div>
              
              
              <div class={`tab-pane container ${activeTab === 'menu2' ? 'active' : ''}`} id="menu2">
                
                <HouseholdInfo
                  sendHouseNumberToEnroll={sendHouseNumberToEnroll}
                  sendMooToEnroll={sendMooToEnroll}
                  sendSoiToEnroll={sendSoiToEnroll}
                  sendRoadToEnroll={sendRoadToEnroll}
                  sendProvinceToEnroll={sendProvinceToEnroll}
                  sendDistrictToEnroll={sendDistrictToEnroll}
                  sendSubDistrictToEnroll={sendSubDistrictToEnroll}
                  sendHouseReg_fileToEnroll={sendHouseReg_fileToEnroll}
                />
              
                <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between', width: '100%' }}>

                  <div style={{ display: 'flex',justifyContent: 'flex-start' }}>
                    <button type="button" 
                    onClick={() => {
                     
                        if (HouseNumber && Province && District && SubDistrict && HouseReg_file) {
                          // ทำงานเมื่อผ่านเงื่อนไขทุกอย่าง
                          handleTabChange('menu1');
                        };
                        
                        handleHousehold_infoClick();
                       

                    }} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                      ย้อนกลับ
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" onClick={() => {
                     
                     if (HouseNumber && Province && District && SubDistrict && HouseReg_file) {
                      // ทำงานเมื่อผ่านเงื่อนไขทุกอย่าง
                      handleTabChange('menu3');
                      
                      // href="#menu2"
                    };

                    handleHousehold_infoClick();
                    
                    }} 
                    
                    className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                      ถัดไป
                    </button>
                  </div>
                  
                </div>

              </div>
              <div class={`tab-pane container ${activeTab === 'menu3' ? 'active' : ''}`} id="menu3">
              <ParentsInfo
                sendFatherEmailToEnroll={sendFatherEmailToEnroll} 
                sendisFatherRecordDataToEnroll={sendisFatherRecordDataToEnroll}
                sendFatherFirstnameToEnroll={sendFatherFirstnameToEnroll}
                sendFatherLastnameToEnroll={sendFatherLastnameToEnroll}
                sendFatherDateOfBirthToEnroll={sendFatherDateOfBirthToEnroll}
                sendisFatherForeignerToEnroll={sendisFatherForeignerToEnroll}
                sendFatherNationalityToEnroll={sendFatherNationalityToEnroll}
                sendFatherOccupationToEnroll={sendFatherOccupationToEnroll}
                sendFatherOfficeToEnroll={sendFatherOfficeToEnroll}
                sendFatherTelToEnroll={sendFatherTelToEnroll}

                sendMotherEmailToEnroll={sendMotherEmailToEnroll} 
                sendisMotherRecordDataToEnroll={sendisMotherRecordDataToEnroll}
                sendMotherFirstnameToEnroll={sendMotherFirstnameToEnroll}
                sendMotherLastnameToEnroll={sendMotherLastnameToEnroll}
                sendMotherDateOfBirthToEnroll={sendMotherDateOfBirthToEnroll}
                sendisMotherForeignerToEnroll={sendisMotherForeignerToEnroll}
                sendMotherNationalityToEnroll={sendMotherNationalityToEnroll}
                sendMotherOccupationToEnroll={sendMotherOccupationToEnroll}
                sendMotherOfficeToEnroll={sendMotherOfficeToEnroll}
                sendMotherTelToEnroll={sendMotherTelToEnroll}

                sendSomeoneElseEmailToEnroll={sendSomeoneElseEmailToEnroll}
                sendisParentRecordDataToEnroll={sendisParentRecordDataToEnroll}
                sendParentFirstnameToEnroll={sendParentFirstnameToEnroll}
                sendParentLastnameToEnroll={sendParentLastnameToEnroll}
                sendParentDateOfBirthToEnroll={sendParentDateOfBirthToEnroll}
                sendisParentForeignerToEnroll={sendisParentForeignerToEnroll}
                sendParentNationalityToEnroll={sendParentNationalityToEnroll}
                sendParentOccupationToEnroll={sendParentOccupationToEnroll}
                sendParentOfficeToEnroll={sendParentOfficeToEnroll}
                sendParentTelToEnroll={sendParentTelToEnroll}
                sendParentRoleToEnroll={sendParentRoleToEnroll}
                />

                <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between', width: '100%' }}>

                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button type="button" onClick={() => {
                      if (FatherEmail && FatherFirstname && FatherLastname && FatherDateOfBirth && FatherNationality && FatherOccupation && FatherOffice && FatherTel &&
                        MotherEmail && MotherFirstname && MotherLastname && MotherDateOfBirth && MotherNationality && MotherOccupation && MotherOffice && MotherTel &&
                        SomeoneElseEmail && MotherFirstname && ParentLastname && ParentDateOfBirth && ParentNationality && ParentOccupation && ParentOffice && ParentTel
                        
                        ) {
                        // if (FatherEmail && isFatherRecordData) {

                        // ทำงานเมื่อผ่านเงื่อนไขทุกอย่าง
                        handleTabChange('menu2');
                        
                        // href="#menu2"
                      };
                       handleParentinfoClick();
                    
                    }} 
                      
                      className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
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