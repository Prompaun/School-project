import React,{useState,useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
// import Tab_enroll from '../components/Tab_enroll';
import Date_Picker from '../components/Date_Picker';

import 'react-datepicker/dist/react-datepicker.css';
function Enrollment_info() {
  const fontStyle = {
    fontFamily: 'Kanit, sans-serif',
    textDecoration: 'none'
  };
  //ข้อมูลนักเรียน NewStudentinfo
  const allowedFileTypes = ['.pdf', '.jpg', '.jpeg', '.png'];
    const [message, setMessage] = useState('');
    const [studentNID, setStudentNID] = useState('');
    const [nameTitle, setnameTitle] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [Transcript_type, setTranscript_type] = useState('');

    const [Student_picture_file, setStudent_picture_file] = useState('');
    const [CopyofStudentIDCardFile, setCopyofStudentIDCardFile] = useState('');
    const [PreviousSchoolEducationalRecordsFile, setPreviousSchoolEducationalRecordsFile] = useState('');
  const handleStudentNIDChange = (event) => {
    setStudentNID(event.target.value);
};

const handlenameTitleChange = (event) => {
    setnameTitle(event.target.value); 
    console.log(nameTitle)
    // sendnameTitleToEnroll(nameTitle)s
};

const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
};

const handleLastNameChange = (event) => {
    setLastName(event.target.value);
};

const handleDateOfBirthChange = (date) => {
    // ใช้ date-fns เพื่อแปลงวันที่ให้เป็นรูปแบบ 'ปี-เดือน-วัน'
    // const formattedDate = format(date, 'yyyy-MM-dd');
    // เซ็ตค่าวันที่ที่แปลงรูปแบบแล้ว
    setDateOfBirth(date);
    // console.log("say hi1", formattedDate);
};

const handleTranscript_typeChange = (event) => {
    setTranscript_type(event.target.value); // เมื่อมีการเลือก radio input ให้เรียกฟังก์ชันนี้
};



const handleFileChange = (event) => {
    event.preventDefault();
    const student_picture_file = event.target;

    // if (student_picture_file.files.length === 0){
        // setStudent_picture_file('');
        // sendImageDataToEnroll('');
    //   }
    
    if (student_picture_file.files && student_picture_file.files.length > 0) {
        const file = student_picture_file.files[0];
        const fileType = '.' + file.name.split('.').pop().toLowerCase();
        if (allowedFileTypes.includes(fileType)) {
            setStudent_picture_file(event);

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
            // sendImageDataToEnroll(file);
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
    const CopyofStudentIDCardFile = event.target;

    if (CopyofStudentIDCardFile.files.length === 0){
        setCopyofStudentIDCardFile('');
        // sendCopyofStudentIDCardFileToEnroll('');
      }
    
    if (CopyofStudentIDCardFile.files && CopyofStudentIDCardFile.files.length > 0) {
        const file = CopyofStudentIDCardFile.files[0];
        const fileType = '.' + file.name.split('.').pop().toLowerCase();
        if (allowedFileTypes.includes(fileType)) {
            let fileName = '';
            if (CopyofStudentIDCardFile.files.length === 1) {
                fileName = file.name;
            } else {
                fileName = CopyofStudentIDCardFile.files.length + ' files selected';
            }
            // แสดงชื่อไฟล์ที่ถูกเลือกใน input label
            // const fileInputLabel = document.getElementById('fileInputLabel');
            // if (fileInputLabel) {
            //     fileInputLabel.textContent = fileName;
            // }
            // sendCopyofStudentIDCardFileToEnroll(file);
        } else {
            alert('กรุณาเลือกไฟล์ที่มีนามสกุล .pdf, .jpg, .jpeg หรือ .png เท่านั้น');
            // เคลียร์ค่า input file และ label
            CopyofStudentIDCardFile.value = '';
            // const fileInputLabel = document.getElementById('fileInputLabel');
            // if (fileInputLabel) {
            //     fileInputLabel.textContent = 'Select Files';
            // }
        }
    }
};

const handlePreviousSchoolEducationalRecordsFileChange = (event) => {
    event.preventDefault();
    const PreviousSchoolEducationalRecordsFile = event.target;

    if (PreviousSchoolEducationalRecordsFile.files.length === 0){
        setPreviousSchoolEducationalRecordsFile('');
        // sendPreviousSchoolEducationalRecordsFileToEnroll('');
      }
    
    if (PreviousSchoolEducationalRecordsFile.files && PreviousSchoolEducationalRecordsFile.files.length > 0) {
        const file = PreviousSchoolEducationalRecordsFile.files[0];
        const fileType = '.' + file.name.split('.').pop().toLowerCase();
        if (allowedFileTypes.includes(fileType)) {
            let fileName = '';
            if (PreviousSchoolEducationalRecordsFile.files.length === 1) {
                fileName = file.name;
            } else {
                fileName = PreviousSchoolEducationalRecordsFile.files.length + ' files selected';
            }
            // sendPreviousSchoolEducationalRecordsFileToEnroll(file);
            console.log("ploy1", file);
        } else {
            alert('กรุณาเลือกไฟล์ที่มีนามสกุล .pdf, .jpg, .jpeg หรือ .png เท่านั้น');
            // เคลียร์ค่า input file และ label
            PreviousSchoolEducationalRecordsFile.value = '';
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
      {/* -------------------------------------------------------------------------------------*/} 


      const [HouseNumber, setHouseNumber] = useState('');
      const [Moo, setMoo] = useState('');
      const [Soi, setSoi] = useState('');
      const [Road, setRoad] = useState('');
      const [Province, setProvince] = useState('');
      const [District, setDistrict] = useState('');
      const [SubDistrict, setSubDistrict] = useState('');
      const [HouseReg_file, setHouseReg_file] = useState('');
    
      // Dummy data for Provinces, Districts, and sub-Districts
      const Provinces = ['กรุงเทพมหานคร', 'นนทบุรี', 'ปทุมธานี', 'สมุทรปราการ', 'สมุทรสงคราม'];
      const DistrictOptions = {
        'กรุงเทพมหานคร': ['พระนคร', 'ดุสิต', 'หนองจอก', 'บางรัก'],
        'นนทบุรี': ['เมืองนนทบุรี', 'บางกรวย', 'ปากเกร็ด'],
        // Add more Provinces and corresponding Districts here
      };
      const SubDistrictOptions = {
        'พระนคร': ['พระบรมมหาราชวัง', 'วัดราชบพิธ', 'สำราญราษฎร์'],
        'ดุสิต': ['วชิรพยาบาล', 'สวนจตุจักร', 'อนุสาวรีย์'],
        // Add more Districts and corresponding sub-Districts here
      };
    
      const RoadOptions = {
        'พระบรมมหาราชวัง': ['ถนน1', 'ถนน2', 'ถนน3'],
        'วชิรพยาบาล': ['สามเสน', 'ศรีอยุธยา ', 'ราชวิถี'],
        // Add more Districts and corresponding sub-Districts here
      };
      const handleHouseNumber = (event) => {
        setHouseNumber(event.target.value);
      };
    
      const handleMoo = (event) => {
        setMoo(event.target.value);
      };
    
      const handleSoi = (event) => {
        setSoi(event.target.value);
      };
    
      const handleRoad = (event) => {
        setRoad(event.target.value);
      };
    
      const handleProvince = (event) => {
        setProvince(event.target.value);
      };
    
      const handleDistrict = (event) => {
        setDistrict(event.target.value);
      };
    
      const handleSubDistrict = (event) => {
        setSubDistrict(event.target.value);
      };
    
      const handleHouseReg_file = (event) => {
        setHouseReg_file(event.target.value);
      };
    
      const handleProvinceChange = (e) => {
        const selectedProvince = e.target.value;
        setProvince(selectedProvince);
        setDistrict('');
        setSubDistrict('');
      };
    
      const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setDistrict(selectedDistrict);
        setSubDistrict('');
      };
    
      const handleSubDistrictChange = (e) => {
        const selectedSubDistrict = e.target.value;
        setSubDistrict(selectedSubDistrict);
        // setRoad('');
      };
    
    
      const handleFileUpload = (event) => {
        event.preventDefault();
        const HouseReg_file = event.target;
    
        // console.log('-----------------------', HouseReg_file.files.length);
    
         if (HouseReg_file.files.length === 0){
          setHouseReg_file('');
          sendHouseReg_fileToEnroll('');
        }
       
        if (HouseReg_file.files && HouseReg_file.files.length > 0) {
            const file = HouseReg_file.files[0];
            const fileType = '.' + file.name.split('.').pop().toLowerCase();
            if (allowedFileTypes.includes(fileType)) {
                let fileName = '';
                if (HouseReg_file.files.length === 1) {
                    fileName = file.name;
                } else {
                    fileName = HouseReg_file.files.length + ' files selected';
                }
                sendHouseReg_fileToEnroll(file);
            } else {
                alert('กรุณาเลือกไฟล์ที่มีนามสกุล .pdf, .jpg, .jpeg หรือ .png เท่านั้น');
                HouseReg_file.value = '';
            }
        }
       
       
    
    };
    
      // const handleSubmit = (event) => {
      //   event.preventDefault();
        
      //   // Basic validation: Check if required fields are empty
      //   if (!HouseNumber || !Moo || !Province || !District || !SubDistrict || !Road || !Soi || !HouseReg_file) {
      //     alert('Please fill out all fields and upload a HouseReg_file.');
      //     // return;
      //   }
      
      //   // Perform form submission logic here (e.g., send data to server via API call)
      //   // You can also show a loading spinner during the submission process
      
      //   // Reset the form fields after submission
      //   // setHouseNumber('');
      //   // setMoo('');
      //   // setProvince('');
      //   // setDistrict('');
      //   // setSubDistrict('');
      //   // setRoad('');
      //   // setSoi('');
      //   // setHouseReg_file('');
      
      //   // Show a success message to the user
      //   alert('Form submitted successfully!');
      // };
    
      const [activeTab, setActiveTab] = useState('menu1');
    
      const handleTabChange = (tabId) => {
        setActiveTab(tabId);
      };    


      // ------------------------------------------------------------------------------

      const [isFatherRecordData, setIsFatherRecordData] = useState(false);
      const [FatherFirstname, setFatherFirstname] = useState('');
      const [FatherLastname, setFatherLastname] = useState('');
      const [FatherDateOfBirth, setFatherDateOfBirth] = useState('');
      const [isFatherForeigner, setIsFatherForeigner] = useState(false); // State สำหรับเก็บข้อมูลว่าเป็นคนต่างชาติหรือไม่
      const [FatherNationality, setFatherNationality] = useState(''); // State สำหรับเก็บข้อมูลสัญชาติ
      const [FatherOccupation, setFatherOccupation] = useState('');
      const [FatherOffice, setFatherOffice] = useState('');
      const [FatherTel, setFatherTel] = useState('');
      const [FatherRole, setFatherRole] = useState('');
    
      const [isMotherRecordData, setIsMotherRecordData] = useState(false);
      const [MotherFirstname, setMotherFirstname] = useState('');
      const [MotherLastname, setMotherLastname] = useState('');
      const [MotherDateOfBirth, setMotherDateOfBirth] = useState('');
      const [isMotherForeigner, setIsMotherForeigner] = useState(false); // State สำหรับเก็บข้อมูลว่าเป็นคนต่างชาติหรือไม่
      const [MotherNationality, setMotherNationality] = useState(''); // State สำหรับเก็บข้อมูลสัญชาติ
      const [MotherOccupation, setMotherOccupation] = useState('');
      const [MotherOffice, setMotherOffice] = useState('');
      const [MotherTel, setMotherTel] = useState('');
      const [MotherRole, setMotherRole] = useState('');
    
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
  
  
      const [FoundFather, setFoundFather] = useState(true);
      const [FoundMother, setFoundMother] = useState(true);
      const [FoundParent, setFoundParent] = useState(true);
  
      const [FatherEmail, setFatherEmail] = useState('');
      const [MotherEmail, setMotherEmail] = useState('');
      const [ParentEmail, setParentEmail] = useState('');
  
      const [whoAreParent, setwhoAreParent] = useState('');
  
      const handleFatherDateOfBirthChange = (date) => {
          // ใช้ date-fns เพื่อแปลงวันที่ให้เป็นรูปแบบ 'วัน/เดือน/ปี'
          // const formattedDate = format(date, 'dd/MM/yyyy');
          if(FatherDateOfBirth === ''){
              setFatherDateOfBirth(date);
          }
          // if (!isFatherRecordData) { // ตรวจสอบว่าสามารถแก้ไขได้หรือไม่
          //     setFatherDateOfBirth(date); // อัปเดตค่าเฉพาะเมื่อสามารถแก้ไขได้
          // }
  
          // ใช้ date-fns เพื่อแปลงวันที่ให้เป็นรูปแบบ 'ปี-เดือน-วัน'
          // const formattedDate = format(date, 'yyyy-MM-dd');
          console.log("FatherDateOfBirth--------------:", date);
      };
  
      const handlMotherDateOfBirthChange = (date) => {
          // const formattedDate = format(date, 'yyyy-MM-dd');
          setMotherDateOfBirth(date);
          // console.log("MotherDateOfBirth", formattedDate);
      };
  
      const handlParentDateOfBirthChange = (date) => {
          // const formattedDate = format(date, 'yyyy-MM-dd');
          setParentDateOfBirth(date);
          // console.log("MotherDateOfBirth", formattedDate);
      };
  
      const handleFatherEmailChange = (event) => {
        setFatherEmail(event.target.value);
    };

    const handleMotherEmailChange = (event) => {
        setMotherEmail(event.target.value);
    };
    const handleParentEmailChange = (event) => {
            setParentEmail(event.target.value);
        };
        const handleFatherFirstnameChange = (event) => {
          setFatherFirstname(event.target.value);
      };
  
      const handleFatherLastnameChange = (event) => {
          setFatherLastname(event.target.value);
      };
  
      const handleIsFatherForeigner = (event) => {
          setIsFatherForeigner(event.target.id === 'FatherForeigner'); // ถ้าเลือก 'ใช่' ให้เป็น true, ถ้า 'ไม่' ให้เป็น false
      }; 
  
      const handleFatherNationalityChange = (event) => {
          setFatherNationality(event.target.value);
          // console.log("FatherNationality",FatherNationality);
      };
  
      const handleFatherOccupationChange = (event) => {
          setFatherOccupation(event.target.value);
      }
  
      const handleFatherOfficeChange = (event) => {
          setFatherOffice(event.target.value);
      }
      
      const handleFatherTelChange = (event) => {
          setFatherTel(event.target.value);
      }
  
      //handle Mother data change--------------------------
      const handleMotherFirstnameChange = (event) => {
          setMotherFirstname(event.target.value);
      };
  
      const handleMotherLastnameChange = (event) => {
          setMotherLastname(event.target.value);
      };
  
      const handleIsMotherForeigner = (event) => {
          setIsMotherForeigner(event.target.id === 'MotherForeigner');
      }; 
  
      const handleMotherNationalityChange = (event) => {
          setMotherNationality(event.target.value);
      };
  
      const handleMotherOccupationChange = (event) => {
          setMotherOccupation(event.target.value);
      }
  
      const handleMotherOfficeChange = (event) => {
          setMotherOffice(event.target.value);
      }
      
      const handleMotherTelChange = (event) => {
          setMotherTel(event.target.value);
      }
  
      //handle Parent data change--------------------------
      const handleParentFirstnameChange = (event) => {
          setParentFirstname(event.target.value);
      };
  
      const handleParentLastnameChange = (event) => {
          setParentLastname(event.target.value);
      };
  
      const handleIsParentForeigner = (event) => {
          setIsParentForeigner(event.target.id === 'ParentForeigner');
      }; 
  
      const handleParentNationalityChange = (event) => {
          setParentNationality(event.target.value);
      };
  
      const handleParentOccupationChange = (event) => {
          setParentOccupation(event.target.value);
      }
  
      const handleParentOfficeChange = (event) => {
          setParentOffice(event.target.value);
      }
      
      const handleParentTelChange = (event) => {
          setParentTel(event.target.value);
      }
  
      const handleParentRoleChange = (event) => {
          setParentRole(event.target.value);
      }
      
      const handlewhoAreParent = (event) => {
          setwhoAreParent(event.target.id);
          // setwhoAreParent(true);
          if (event.target.id === "FatherIsParent" || event.target.id === "MotherIsParent" || event.target.id === "FatherAndMotherAreParent"){
              setIsParentRecordData(true);
              console.log('okokokokok',event.target.id);
          }
      };
      const checkFather_Email = async (email) => {
        try {
            const response = await axios.get(`http://localhost:8080/check-email?email=${email}`);
            const data = response.data;

            if (data.results) {
                console.log("data.results",data.results);
                setFatherFirstname(data.results[0].FirstName);
                setFatherLastname(data.results[0].LastName);

                // กำหนดวันที่ในรูปแบบ 'YYYY-MM-DD'
                const dateString = data.results[0].DateOfBirth;

                // แปลงวันที่ในรูปแบบ 'YYYY-MM-DD' เป็นวันที่ใน JavaScript
                const date = new Date(dateString);

                // รูปแบบวันที่ใน JavaScript โดยใช้วิธี toLocaleDateString()
                const formattedDate = date.toLocaleDateString();

                setFatherDateOfBirth(date);
                // handleFatherDateOfBirthChange(date);

                setFatherNationality(data.results[0].Nationality);
                setIsFatherRecordData(true);
                setFatherOccupation(data.results[0].Occupation);
                setFatherOffice(data.results[0].Office);
                setFatherTel(data.results[0].Tel);

                return true;
            } 
            else {
                if (isFatherRecordData){
                    setFatherFirstname('');
                    setFatherLastname('');
                    setFatherDateOfBirth('');
                    setFatherNationality('');
                    setFatherOccupation('');
                    setFatherOffice('');
                    setFatherTel('');
                }

                setIsFatherRecordData(false);
                return false;
            }
        } catch (error) {
            console.error('Error checking email:', error);
            alert('An error occurred while checking email.');
        }
    };

    const checkMother_Email = async (email) => {
        try {
            const response = await axios.get(`http://localhost:8080/check-email?email=${email}`);
            const data = response.data;

            if (data.results) {
                console.log("data.results",data.results);
                setMotherFirstname(data.results[0].FirstName);
                setMotherLastname(data.results[0].LastName);

                // กำหนดวันที่ในรูปแบบ 'YYYY-MM-DD'
                const dateString = data.results[0].DateOfBirth;

                // แปลงวันที่ในรูปแบบ 'YYYY-MM-DD' เป็นวันที่ใน JavaScript
                const date = new Date(dateString);

                // รูปแบบวันที่ใน JavaScript โดยใช้วิธี toLocaleDateString()
                const formattedDate = date.toLocaleDateString();

                setMotherDateOfBirth(date);
                setMotherNationality(data.results[0].Nationality);
                setIsMotherRecordData(true);
                setMotherOccupation(data.results[0].Occupation);
                setMotherOffice(data.results[0].Office);
                setMotherTel(data.results[0].Tel);

                return true;
            } 
            else {
                if (isMotherRecordData){
                    setMotherFirstname('');
                    setMotherLastname('');
                    setMotherDateOfBirth('');
                    setMotherNationality('');
                    setMotherOccupation('');
                    setMotherOffice('');
                    setMotherTel('');
                }

                setIsMotherRecordData(false);
                return false;
            }
        } catch (error) {
            console.error('Error checking Mother email:', error);
            alert('An error occurred while checking Mother email.');
        }
    };

    const checkParent_Email = async (email) => {
        try {
            const response = await axios.get(`http://localhost:8080/check-email?email=${email}`);
            const data = response.data;

            if (data.results) {
                console.log("data.results",data.results);
                setParentFirstname(data.results[0].FirstName);
                setParentLastname(data.results[0].LastName);

                // กำหนดวันที่ในรูปแบบ 'YYYY-MM-DD'
                const dateString = data.results[0].DateOfBirth;

                // แปลงวันที่ในรูปแบบ 'YYYY-MM-DD' เป็นวันที่ใน JavaScript
                const date = new Date(dateString);

                // รูปแบบวันที่ใน JavaScript โดยใช้วิธี toLocaleDateString()
                const formattedDate = date.toLocaleDateString();

                setParentDateOfBirth(date);

                setParentNationality(data.results[0].Nationality);
                setIsParentRecordData(true);
                setParentOccupation(data.results[0].Occupation);
                setParentOffice(data.results[0].Office);
                setParentTel(data.results[0].Tel);

                return true;
            } 
            else {
                if (isParentRecordData){
                    setParentFirstname('');
                    setParentLastname('');
                    setParentDateOfBirth('');
                    setParentNationality('');
                    setParentOccupation('');
                    setParentOffice('');
                    setParentTel('');
                }

                setIsParentRecordData(false);
                return false;
            }
        } catch (error) {
            console.error('Error checking email:', error);
            alert('An error occurred while checking email.');
        }
    };
    
            
            // hide personal info

            const handlePersonalNextClick = () => {
                if (checkInputStudent()) {
                   
                    setStudent_info(false);
                    setHousehold(true);
                }
                
              };
            // hide household
            
            const handleHouseholdBackClick = () => {
                if (checkInputHousehold()) {
                   
                    setStudent_info(true);
                    setHousehold(false);
                }
                
              };

              const handleHouseholdNextClick = () => {
                if (checkInputHousehold()) {

                    setStudent_info(false);
                    setParent_info(true);
                    setHousehold(false);
                }
                
              };
            //   hide parent
            const handleParentBackClick = () => {
                if (checkInputParent()) {

                    setStudent_info(false);
                    setHousehold(true);
                    setParent_info(false);
                   
                }
                
              };

        // ------------------------------------------------------------------------------------

        const checkInputStudent = () => {
          const student_picture_file_input = document.getElementById('student_picture_file_input');
          const student_nid_input = document.getElementById('student_nid_input');
          const maleRadio = document.getElementById('male');
          const femaleRadio = document.getElementById('female');
          const surname = document.getElementById('surname');
          const LastName = document.getElementById('LastName');
          const DOB = dateOfBirth;
          const CopyofStudentIDCard = document.getElementById('CopyofStudentIDCard');

        
        //   if (student_picture_file_input.value === "") {
        //     alert('กรุณาเลือกไฟล์รูปภาพของนักเรียน');
        //     student_picture_file_input.focus();
            
        //     return false;
        //   }
        //   if (student_nid_input.value === "") {
        //     alert('กรุณากรอกเลขประจำตัวประชาชนของนักเรียน');
        //     student_nid_input.scrollIntoView({ behavior: 'smooth' });
        //     setTimeout(() => student_nid_input.focus(), 100);
        //     return false;
        //   }
        // if (!maleRadio.checked && !femaleRadio.checked) {
        //     alert('กรุณาเลือกคำนำหน้าชื่อของนักเรียน');
        //     return false;
        // }
        //   if (surname.value === "") {
        //     alert('กรุณากรอกชื่อของนักเรียน');
        //     surname.scrollIntoView({ behavior: 'smooth' });
        //     setTimeout(() => surname.focus(), 100);
        //     return false;
        //   }
        // if (LastName.value === "") {
        //     alert('กรุณากรอกนามสกุลของนักเรียน');
        //     LastName.scrollIntoView({ behavior: 'smooth' });
        //     setTimeout(() => LastName.focus(), 100);
        //     return false;
        //   }
        //   if (!DOB) {
        //     alert('กรุณากรอก วัน/เดือน/ปีเกิด ของนักเรียน');
        //     // DOB.scrollIntoView({ behavior: 'smooth' });
        //     DOB.focus();
        //     return false;
        //   }
        //  if (CopyofStudentIDCard.value === "") {
        //     alert('กรุณาเลือกไฟล์สำเนาสูติบัตรของนักเรียน');
        //     CopyofStudentIDCard.scrollIntoView({ behavior: 'smooth' });
        //     setTimeout(() => CopyofStudentIDCard.focus(), 100);
        //     return false;
        //   }

        const option1 = document.getElementById('option1');
        const option2 = document.getElementById('option2');
        const option3 = document.getElementById('option3');
        const option4 = document.getElementById('option4');

        // if (!option1.checked && !option2.checked && !option3.checked && !option4.checked) {
        //     alert('กรุณาเลือกประเภทของหลักฐานการศึกษาจากโรงเรียนเดิม');
        //     return false;
        // }
        // const PreviousSchoolEducationalRecordsFile = document.getElementById('PreviousSchoolEducationalRecordsFile');
        // if (PreviousSchoolEducationalRecordsFile.value === "") {
        //     alert('กรุณาเลือกไฟล์ประกาศนียบัตรการศึกษาจากโรงเรียนเดิม');
        //     PreviousSchoolEducationalRecordsFile.scrollIntoView({ behavior: 'smooth' });
        //     setTimeout(() => PreviousSchoolEducationalRecordsFile.focus(), 100);
        //     return false;
        //   }

          return true;
        }


        const checkInputHousehold = () => {
            const HouseNumber_input = document.getElementById('HouseNumber_input');
            const Province = document.getElementById('Province');
            const District = document.getElementById('District');
            const SubDistrict = document.getElementById('SubDistrict');
  
            // if (HouseNumber_input.value === "") {
            //   alert('กรุณากรอกบ้านเลขที่');
            //   HouseNumber_input.scrollIntoView({ behavior: 'smooth' });
            // setTimeout(() => HouseNumber_input.focus(), 100);
              
            //   return false;
            // }
            // if (Province.value === "") {
            //   alert('กรุณากรอกจังหวัดของที่อยู่ตามทะเบียนบ้าน');
            //   Province.scrollIntoView({ behavior: 'smooth' });
            //     setTimeout(() => Province.focus(), 100);
  
            //   return false;
            // }
            // if (District.value === "") {
            //     alert('กรุณากรอกเขต/อำเภอของที่อยู่ตามทะเบียนบ้าน');
            //     District.scrollIntoView({ behavior: 'smooth' });
            //       setTimeout(() => District.focus(), 100);
    
            //     return false;
            //   }
            //   if (SubDistrict.value === "") {
            //     alert('กรุณากรอกแขวง/ตำบลของที่อยู่ตามทะเบียนบ้าน');
            //     SubDistrict.scrollIntoView({ behavior: 'smooth' });
            //       setTimeout(() => SubDistrict.focus(), 100);
    
            //     return false;
            //   }
            //   const HouseReg_file = document.getElementById('HouseReg_file');
            //   if (HouseReg_file.value === "") {
            //     alert('กรุณาอัพโหลดไฟล์สำเนาทะเบียนบ้าน');
            //     HouseReg_file.scrollIntoView({ behavior: 'smooth' });
            //       setTimeout(() => HouseReg_file.focus(), 100);
    
            //     return false;
            //   }

            return true;
          }
          const checkInputParent = () => {
            const Father_Email = document.getElementById('Father_Email');
  
            // if (Father_Email.value === "") {
            //   alert('กรุณากรอกอีเมลบิดา');
            //     Father_Email.scrollIntoView({ behavior: 'smooth' });
            //     setTimeout(() => Father_Email.focus(), 100);
            //   return false;
            // }
            
            // if (!isFatherRecordData) {
            //     const isFatherDataValid = checkFatherRecordData();
            //     if (!isFatherDataValid) {
            //         return false;
            //     }
                
            // }
            // const Mother_Email = document.getElementById('Mother_Email');
            // if (Mother_Email.value === "") {
            //   alert('กรุณากรอกอีเมลมารดา');
            //   Mother_Email.scrollIntoView({ behavior: 'smooth' });
            //     setTimeout(() => Mother_Email.focus(), 100);
            //   return false;
            // }
            // if (!isMotherRecordData) {
            //     const isMotherDataValid = checkMotherRecordData();
            //     if (!isMotherDataValid) {
            //         return false;
            //     }
                
            // }

            const FatherIsParent = document.getElementById('FatherIsParent');
            const MotherIsParent = document.getElementById('MotherIsParent');
            const FatherAndMotherAreParent = document.getElementById('FatherAndMotherAreParent');
            const SomeoneElseIsParent = document.getElementById('SomeoneElseIsParent');

            if (!FatherIsParent.checked && !MotherIsParent.checked && !FatherAndMotherAreParent.checked && !SomeoneElseIsParent.checked ) {
                alert('กรุณาเลือกข้อมูลผู้ปกครอง');
                return false;
            }
            if (SomeoneElseIsParent.checked) {
                const checkParentRecordDataValid = checkParentRecordData();
                if (!checkParentRecordDataValid) {
                    return false;
                }
            }
            
            return true;
          }

        // ----------------------check father---------------------------------------------
          const checkFatherRecordData = () => {
            
            // const father_Firstname = document.getElementById('father_Firstname');
            // if (father_Firstname.value === "") {
            //     alert('กรุณากรอกชื่อบิดา');
            //     father_Firstname.scrollIntoView({ behavior: 'smooth' });
            //     setTimeout(() => father_Firstname.focus(), 100);
            //     return false;
            // }
            // const father_lastname = document.getElementById('father_lastname');

            // if (father_lastname.value === "") {
            //     alert('กรุณากรอกนามสกุลบิดา');
            //     father_lastname.scrollIntoView({ behavior: 'smooth' });
            //     setTimeout(() => father_lastname.focus(), 100);
            //     return false;
            // }
            // const father_DOB = FatherDateOfBirth;

            // if (!father_DOB) {
            //     alert('กรุณากรอกวัน/เดือน/ปีเกิดของบิดา');
            //     return false;
            // } 
            const FatherForeigner = document.getElementById('FatherForeigner');
            const FatherNotForeigner = document.getElementById('FatherNotForeigner');

            if (!FatherForeigner.checked && !FatherNotForeigner.checked) {
                alert('กรุณาเลือกสัญชาติของบิดา');
                return false;
            }
            if (FatherForeigner.checked) {
                const isFatherForeignerValid = checkFatherForeigner();
                if (!isFatherForeignerValid) {
                    return false;
                }
            }
            // const father_Occupation = document.getElementById('father_Occupation');
            // if (father_Occupation.value === "") {
            //     alert('กรุณากรอกอาชีพของบิดา');
            //     father_Occupation.scrollIntoView({ behavior: 'smooth' });
            //     setTimeout(() => father_Occupation.focus(), 100);
            //     return false;
            // }
            // const father_Workplace = document.getElementById('father_Workplace');
            // if (father_Workplace.value === "") {
            //     alert('กรุณากรอกสถานที่ทำงานของบิดา');
            //     father_Workplace.scrollIntoView({ behavior: 'smooth' });
            //     setTimeout(() => father_Workplace.focus(), 100);
            //     return false;
            // }
            
            const father_phoneNumber = document.getElementById('father_phoneNumber');
            if (father_phoneNumber.value === "") {
                alert('กรุณากรอกเลขเบอร์โทรศัพท์ของบิดา');
                father_phoneNumber.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => father_phoneNumber.focus(), 100);
                return false;
            }

            return true;
          }
        
        
        useEffect(() => {
            const FatherNotForeigner = document.getElementById('FatherNotForeigner');
            if (FatherNotForeigner) {
                setFatherNationality("");
            }
       
        }, [isFatherForeigner]); 


          const checkFatherForeigner = () => {
            const father_Nationality = document.getElementById('father_Nationality');
            if (father_Nationality.value ==="") {
                alert('กรุณากรอกสัญชาติของบิดา');
                father_Nationality.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => father_Nationality.focus(), 100);
                return false;
            }
            
            return true;
          }

        // ---------------------------------check mother--------------------------------------
        const checkMotherRecordData = () => {
            
            const mother_Firstname = document.getElementById('mother_Firstname');
            if (mother_Firstname.value === "") {
                alert('กรุณากรอกชื่อมารดา');
                mother_Firstname.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => mother_Firstname.focus(), 100);
                return false;
            }
            const mother_lastname = document.getElementById('mother_lastname');

            if (mother_lastname.value === "") {
                alert('กรุณากรอกนามสกุลมารดา');
                mother_lastname.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => mother_lastname.focus(), 100);
                return false;
            }
            const Mother_DOB = MotherDateOfBirth;

            if (!Mother_DOB) {
                alert('กรุณากรอกวัน/เดือน/ปีเกิดของมารดา');
                return false;
            } 
            const MotherForeigner = document.getElementById('MotherForeigner');
            const MotherNotForeigner = document.getElementById('MotherNotForeigner');

            if (!MotherForeigner.checked && !MotherNotForeigner.checked) {
                alert('กรุณาเลือกสัญชาติของมารดา');
                return false;
            }
            if (MotherForeigner.checked) {
                const isMotherForeignerValid = checkMotherForeigner();
                if (!isMotherForeignerValid) {
                    return false;
                }
            }
            const mother_Occupation = document.getElementById('mother_Occupation');
            if (mother_Occupation.value === "") {
                alert('กรุณากรอกอาชีพของบิดา');
                mother_Occupation.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => mother_Occupation.focus(), 100);
                return false;
            }
            const mother_Workplace = document.getElementById('mother_Workplace');
            if (mother_Workplace.value === "") {
                alert('กรุณากรอกสถานที่ทำงานของบิดา');
                mother_Workplace.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => mother_Workplace.focus(), 100);
                return false;
            }
            
            const mother_phoneNumber = document.getElementById('mother_phoneNumber');
            if (mother_phoneNumber.value === "") {
                alert('กรุณากรอกเลขเบอร์โทรศัพท์ของบิดา');
                mother_phoneNumber.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => mother_phoneNumber.focus(), 100);
                return false;
            }

            return true;
          }
        
        
        useEffect(() => {
            const MotherNotForeigner = document.getElementById('MotherNotForeigner');
            if (MotherNotForeigner) {
                setMotherNationality("");
            }
       
        }, [isMotherForeigner]); 


          const checkMotherForeigner = () => {
            const mother_Nationality = document.getElementById("mother_Nationality");
            if (mother_Nationality.value ==="") {
                alert('กรุณากรอกสัญชาติของมารดา');
                mother_Nationality.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => mother_Nationality.focus(), 100);
                return false;
            }
            
            return true;
          }
        

        // ---------------------------------check parent--------------------------------------
        const checkParentRecordData = () => {
            
            const ParentEmail = document.getElementById('ParentEmail');
            if (ParentEmail.value === "") {
                alert('กรุณากรอกอีเมลผู้ปกครอง');
                ParentEmail.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => ParentEmail.focus(), 100);
                return false;
            }
            const SomeoneElseIsParent_surname = document.getElementById('SomeoneElseIsParent_surname');

            if (SomeoneElseIsParent_surname.value === "") {
                alert('กรุณากรอกชื่อผู้ปกครอง');
                SomeoneElseIsParent_surname.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => SomeoneElseIsParent_surname.focus(), 100);
                return false;
            }
            const SomeoneElseIsParent_lastname = document.getElementById('SomeoneElseIsParent_lastname');

            if (SomeoneElseIsParent_lastname.value === "") {
                alert('กรุณากรอกนามสกุลผู้ปกครอง');
                SomeoneElseIsParent_lastname.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => SomeoneElseIsParent_lastname.focus(), 100);
                return false;
            }

            const Parent_DOB = ParentDateOfBirth;

            if (!Parent_DOB) {
                alert('กรุณากรอกวัน/เดือน/ปีเกิดของผู้ปกครอง');
                return false;
            } 
            const ParentForeigner = document.getElementById('ParentForeigner');
            const ParentNotForeigner = document.getElementById('ParentNotForeigner');

            if (!ParentForeigner.checked && !ParentNotForeigner.checked) {
                alert('กรุณาเลือกสัญชาติของผู้ปกครอง');
                return false;
            }
            if (ParentForeigner.checked) {
                const isParentForeignerValid = checkParentForeigner();
                if (!isParentForeignerValid) {
                    return false;
                }
            }
            const Parent_Occupation = document.getElementById('Parent_Occupation');
            if (Parent_Occupation.value === "") {
                alert('กรุณากรอกอาชีพของผู้ปกครอง');
                Parent_Occupation.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => Parent_Occupation.focus(), 100);
                return false;
            }
            const Parent_Workplace = document.getElementById('Parent_Workplace');
            if (Parent_Workplace.value === "") {
                alert('กรุณากรอกสถานที่ทำงานของผู้ปกครอง');
                Parent_Workplace.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => Parent_Workplace.focus(), 100);
                return false;
            }
            
            const SomeoneElseIsParent_phoneNumber = document.getElementById('SomeoneElseIsParent_phoneNumber');
            if (SomeoneElseIsParent_phoneNumber.value === "") {
                alert('กรุณากรอกเลขเบอร์โทรศัพท์ของผู้ปกครอง');
                SomeoneElseIsParent_phoneNumber.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => SomeoneElseIsParent_phoneNumber.focus(), 100);
                return false;
            }
            const Parent_Relation = document.getElementById('Parent_Relation');
            if (Parent_Relation.value === "") {
                alert('กรุณากรอกความเกี่ยวข้องกับผู้สมัคร');
                Parent_Relation.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => Parent_Relation.focus(), 100);
                return false;
            }

            return true;
          }
        
        
        useEffect(() => {
            const ParentNotForeigner = document.getElementById('ParentNotForeigner');
            if (ParentNotForeigner) {
                setParentNationality("");
            }
       
        }, [isParentForeigner]); 


          const checkParentForeigner = () => {
            const parent_Nationality = document.getElementById("parent_Nationality");
            if (parent_Nationality.value ==="") {
                alert('กรุณากรอกสัญชาติของผู้ปกครอง');
                parent_Nationality.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => parent_Nationality.focus(), 100);
                return false;
            }
            
            return true;
          }


        const [Student_info, setStudent_info] = useState(true); 
        const [Household, setHousehold] = useState(false); 
        const [Parent_info, setParent_info] = useState(false); 


return (
        <>
      
       
      
      <Header header="ระบบรับสมัครนักเรียนแบบออนไลน์" subhead="กรอกข้อมูลการสมัคร"/>
      
      <div className="mt-5 d-flex flex-column align-items-center"style={{ height: '100vh'}}>
          {/* <Tab_enroll /> */}
         

          <div className="container d-flex align-items-center justify-content-center"style={{ flexWrap: 'wrap'}}>
                        
    <div className="card card-shadow"  style={{maxWidth: "100%"}}>
        <div className="card-body">   

         {/* -------------------------------------------------------------------------------------*/}

     {Student_info &&(
    <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif',padding:"30px"}} id="personalInfoContainer">
        <div className="row" style={{fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0',Height:"100vh"}}>
            <div className="col-sm d-flex align-items-center">
                <label htmlFor="Personal_Information_label" id="Personal_Information_label" className="col-form-label">ข้อมูลส่วนตัวของนักเรียน</label>
            </div>
        </div>
        <br></br>

        
        
        <div style={{ fontSize: '18px' }}>
        <h2 className="col-sm d-flex align-items-center"style={{ marginLeft: '15px',fontSize: '16px'}} id="personalInfoContainer">หมายเหตุ : รูปถ่ายต้องถ่ายไว้ไม่เกิน 6 เดือน</h2>
            <div className="align-items-center">
                <label htmlFor="student_picture_file_label" id="student_picture_file_label" className="col-form-label px-3">รูปนักเรียน</label>
            </div>
            <div className="align-items-center" style={{ marginLeft: '15px', maxWidth: "50%" }}>
            <input
                id="student_picture_file_input"
                type="file"
                name="student_picture_file_input"
                className="form-control"
                value={Student_picture_file ? Student_picture_file.name : ''}
                onChange={handleFileChange}
                accept=".pdf, .jpg, .jpeg, .png"
               required
              
                />
                {/* <label htmlFor="student_picture_file_input" id="fileInputLabel">Select Files</label> */}
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
                    required
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
                <input className="form-check-input" type="radio" name="gender" id="female" value="เด็กหญิง"  onChange={handlenameTitleChange} />
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
                <input type="text" className="form-control" id="surname" name="surname" placeholder="กรอกชื่อ" value={FirstName} onChange={handleFirstNameChange} />
            </div>

            <div className="d-flex align-items-center">
                <label htmlFor="LastName" className="col-form-label" style={{ flexWrap: 'wrap' }}>นามสกุล</label>
            </div>

            <div className="align-items-center" style={{ maxWidth: "100%" }}>
                <input type="text" className="form-control" id="LastName" name="LastName" placeholder="กรอกนามสกุล" value={LastName} onChange={handleLastNameChange} />
            </div>
        </div>
        <br></br>

        <div className="row" style={{ fontSize: '18px', marginRight: '5px', gap: '0' }}>
            <div className="d-flex align-items-center">
                <h2 htmlFor="DOB" className="col-form-label px-3">วัน/เดือน/ปีเกิด</h2>
            </div>
            <div className="align-items-center" style={{ marginLeft: '15px' }}>
                <Date_Picker id="DOB_student"value={dateOfBirth} onChange={handleDateOfBirthChange} />
            </div>
        </div>
        <br />

        <div style={{gap: '20px', fontFamily: 'Kanit, sans-serif', fontSize: '18px'}}>
            <div className="align-items-center">
                <label htmlFor="CopyofStudentIDCard" className="col-form-label px-3">สำเนาสูติบัตร (ของนักเรียน)</label>
            </div>
            <div className="align-items-center"style={{ marginLeft: '15px',maxWidth:"50%"}}>    
                <input id = "CopyofStudentIDCard"type="file" className="form-control" onChange={handleCopyofStudentIDCardFileChange} accept=".pdf, .jpg, .jpeg, .png" />
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
                <input className="form-check-input" type="radio" name="selectedOption" id="option1" value="ปพ.1" onChange={handleTranscript_typeChange} />
                <label className="form-check-label" htmlFor="option1">
                    ปพ.1
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="selectedOption" id="option2" value="ปพ.6" onChange={handleTranscript_typeChange} />
                <label className="form-check-label" htmlFor="option2">
                    ปพ.6
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="selectedOption" id="option3" value="ปพ.7" onChange={handleTranscript_typeChange} />
                <label className="form-check-label" htmlFor="option3">
                    ปพ.7
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="selectedOption" id="option4" value="ปพ.8" onChange={handleTranscript_typeChange} />
                <label className="form-check-label" htmlFor="option4">
                    ปพ.8
                </label>
            </div>
        </div>

        <br></br> 
        <div className="align-items-center" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px', marginLeft: '15px',maxWidth:"50%"}}>
                <input id = "PreviousSchoolEducationalRecordsFile"type="file" className="form-control px-3" onChange={handlePreviousSchoolEducationalRecordsFileChange} accept=".pdf, .jpg, .jpeg, .png" />
        </div>

        
        <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'flex-end' }}>

                <button id="next-button" type="button" onClick={handlePersonalNextClick} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px' }}>
                ถัดไป
                </button>
          </div>
          
    
    
    </div>)}
      
      
    {/* -----------------------------------------------------------------------------------   */}
    {Household &&(
    <div className="d-flex flex-column" 
    style={{
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Kanit, sans-serif',
      padding:"30px"
    }} id="Household_Information_container">
        <div className="row" style={{fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0',Height: '100vh'}}>
            <div className="col-sm d-flex align-items-center">
                <label htmlFor="Household_Information_label" id="Household_Information_label" className="col-form-label">ข้อมูลที่อยู่ตามทะเบียนบ้าน</label>
            </div>
        </div>
        <br></br>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif', fontSize: '16px' }}>
         
          <div className="d-flex align-items-center">
              <span style={{flexWrap: 'wrap' }}>บ้านเลขที่ :</span>
          </div>
          <div className="align-items-center"style={{maxWidth:"100%"}}> 
            <input
              type="text"
              className="form-control"
              id="HouseNumber_input"
              name="HouseNumber_input"
              placeholder="กรอกบ้านเลขที่"
              value={HouseNumber}
              // onChange={(e) => setHouseNumber(e.target.value)}
              onChange = {handleHouseNumber}
              required
            />
          </div>
    
          <div className="d-flex align-items-center">
              <span style={{flexWrap: 'wrap' }}>หมู่ที่ :</span>
          </div>
          <div className="align-items-center"style={{maxWidth:"100%"}}> 
            <input
              type="text"
              className="form-control"
              id="Moo_input"
              name="Moo_input"
              placeholder="กรอกหมู่"
              value={Moo}
              onChange = {handleMoo}
              // onChange={(e) => setMoo(e.target.value)}
            />
          </div>
    
          <div className="d-flex align-items-center">
              <span style={{flexWrap: 'wrap' }}>ซอย :</span>
          </div>
          <div className="align-items-center"style={{maxWidth:"100%"}}> 
            <input
              type="text"
              className="form-control"
              id="Soi_input"
              name="Soi_input"
              placeholder="กรอกซอย"
              value={Soi}
              onChange = {handleSoi}
            />
          </div>
    
          <div className="d-flex align-items-center">
            <label>
              <span style={{flexWrap: 'wrap' }}>ถนน :</span>
            </label>
          </div>
          <div className="align-items-center"style={{maxWidth:"100%"}}> 
            <input
              type="text"
              className="form-control"
              id="Road_input"
              name="Road_input"
              placeholder="กรอกถนน"
              value={Road}
              onChange = {handleRoad}
            />
          </div>

        </div>
    
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', fontFamily: 'Kanit, sans-serif', fontSize: '16px', marginTop: '20px' }}>
          <div className="d-flex align-items-center">
           
              <span style={{flexWrap: 'wrap' }}>จังหวัด :</span>
              </div>
              <div class="h-screen flex flex-col justify-left sm:flex-row">
                {/* <div class="sm:w-1_3 sm:pr-3"> */}
                    <div class="dropdown" style={{ maxWidth: "100%" }}>
                        <select value={Province} onChange={handleProvinceChange} class="custom-select w-full" id="Province">
                            <option value="">กรุณาเลือกจังหวัด</option>
                            {Provinces.map((Province) => (
                                <option key={Province} value={Province}>
                                    {Province}
                                </option>
                            ))}
                        </select>
                    </div>
                {/* </div> */}
            </div>

    
          <div className="d-flex align-items-center">
            
              <span style={{flexWrap: 'wrap' }}>เขต/อำเภอ :</span>
              </div>
              <div class="h-screen flex flex-col justify-left sm:flex-row">
                 <div class="sm:w-1_3 sm:pr-3">
                    <div class="dropdown"style={{maxWidth:"100%"}} >
                      <select value={District} onChange={handleDistrictChange} class="custom-select w-full" id ="District">
                        <option value="">กรุณาเลือกเขต/อำเภอ</option>
                        {DistrictOptions[Province] && DistrictOptions[Province].map((District) => (
                          <option key={District} value={District}>
                            {District}
                          </option>
                        ))}
                      </select>
                  </div>
                </div>
          </div>
    
          <div className="d-flex align-items-center"style={{ flexWrap: "wrap" }}>
            
              <span style={{  flexWrap: "wrap" }}>แขวง/ตำบล :</span>
              </div>
              <div class="h-screen flex flex-col justify-left sm:flex-row">
                 <div class="sm:w-1_3 sm:pr-3">
                    <div class="dropdown"style={{maxWidth:"100%"}} >
                        <select value={SubDistrict} onChange={handleSubDistrictChange} class="custom-select w-full" id="SubDistrict" >
                          <option value="">กรุณาเลือกแขวง/ตำบล</option>
                          {SubDistrictOptions[District] && SubDistrictOptions[District].map((SubDistrict) => (
                            <option key={SubDistrict} value={SubDistrict}>
                              {SubDistrict}
                            </option>
                          ))}
                        </select>
                        </div>
                </div>
          </div>
        </div>
    
        <div style={{ fontSize: '16px',marginTop:"20px"}}>
          <div className="align-items-center"style={{ marginRight: '10px' }}>
          <label className="col-form-label">อัพโหลดไฟล์สำเนาทะเบียนบ้าน :</label>
              
            </div>
              <div className="align-items-center">
              <input id="HouseReg_file"type="File" className="form-control" style={{maxWidth:"70%"}} onChange={handleFileUpload} accept=".pdf, .jpg, .jpeg, .png" />
          <br />
        </div>
      
      </div>
      <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between', width: '100%' }}>

                  <div style={{ display: 'flex',justifyContent: 'flex-start' }}>
                    <button type="button" 
                    onClick={handleHouseholdBackClick}
                     className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                      ย้อนกลับ
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" 
                     onClick={handleHouseholdNextClick}
                    className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                      ถัดไป
                    </button>
                  </div>
                  
                </div>
      <br></br>

      </form>
    </div>
    )}
   {/* --------------------------------------------------------------------------------------- */}
   {Parent_info && (
   <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif',padding:"30px"}}>
        <div className="row" style={{fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0',Height: '100vh'}}>
            <div className="col-sm d-flex align-items-center">
                    <label htmlFor="father_data" className="col-form-label">ข้อมูลบิดา</label>
                </div>
        </div>
            {/* <br /> */}
        {/* <h2 className="col-sm d-flex align-items-center" style={{marginLeft: '15px',fontSize: '18px'}}>เคยบันทึกข้อมูลบิดาแล้วหรือไม่</h2> */}
        {/* <h2 className="card-heading mb-0 mx-3" style={{ fontSize: '16px', color: 'red' ,marginTop:"5px"}}>
            **เลือก ใช่ กรณีเคยบันทึกข้อมูลของตนสำหรับใช้สมัครเรียนให้บุตรหลานของท่าน
        </h2> */}

        {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '16px',marginLeft: '15px' ,marginTop:"5px"}}>
            <div className="form-check" style={{ marginTop: '10px',maxWidth:"100%"}}>
                <input className="form-check-input" type="radio" name="usedToRecordFatherData?" id="usedToRecordFatherData" value="ใช่" onChange={handleIsFatherRecordData} />
                <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="usedToRecordFatherData">
                ใช่
                </label>
            </div>
            <div className="form-check" style={{ marginTop: '10px',maxWidth:"100%"}}>
                <input className="form-check-input" type="radio" name="usedToRecordFatherData?" id="notYetRecordFatherData" value="ไม่ใช่" onChange={handleIsFatherRecordData} />
                <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="notYetRecordFatherData">
                ไม่ใช่
                </label>
            </div>
        </div> */}

        {/* {!isFatherRecordData ? (
            <> */}
                <div style={{fontSize: '18px',marginTop:"5px"}}>
                    <div className="d-flex align-items-center"style={{flexWrap:"wrap"}}>
                        <label htmlFor="Father_Email" className="col-form-label mb-0 mx-3">อีเมล</label>
                    {/* </div>   
                    <div className="d-flex align-items-center">   */}
                        <h2 className="card-heading mb-0 mx-3" style={{ fontSize: '16px', color: 'blue' }}>
                        (อีเมลที่ท่านกรอกนี้สามารถใช้ตรวจสอบข้อมูลนักเรียนของโรงเรียนซึ่งเป็นบุตรหลานของท่าน)
                    </h2>
                    </div>
                
                    <div className="align-items-center"style={{ marginTop: '5px',maxWidth:"65%"}}> 
                        <input type="text" className="form-control mb-0 mx-3" id="Father_Email" name="Father_Email" value={FatherEmail} placeholder="กรอกอีเมลบิดา" onChange={handleFatherEmailChange}/>
                    </div>
                </div>
            {/* </>
        ) : (
            <> */}
            <br />

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' , marginTop: '0px',maxWidth:"100%"}}>

                    <div className="d-flex align-items-center" >
                        <label htmlFor="father_Firstname" className="col-form-label">ชื่อ</label>
                    </div>

                    <div className="align-items-center" style={{ maxWidth: "100%" }}>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="father_Firstname" 
                            name="father_Firstname" 
                            placeholder="กรอกชื่อ" 
                            value={FatherFirstname} 
                            onChange={handleFatherFirstnameChange} 
                            readOnly={isFatherRecordData} // กำหนด prop readOnly ตามค่าของ isFatherRecordData
                            // required
                        />
                    </div>

                    <div className="align-items-center">
                        <label htmlFor="father_lastname" className="col-form-label">นามสกุล</label>
                    </div>

                    <div className="align-items-center" style={{maxWidth:"100%"}}>
                        <input
                            type="text"
                            className="form-control"
                            id="father_lastname"
                            name="father_lastname"
                            placeholder="กรอกนามสกุล"
                            value={FatherLastname}
                            onChange={handleFatherLastnameChange}
                            readOnly={isFatherRecordData}/>
                    </div>

                    <div className="align-items-center">
                        <label htmlFor="father_dob" className="col-form-label">วัน/เดือน/ปีเกิด</label>
                    </div>

                    <div className="align-items-center" style={{ marginLeft: '15px' }}>
                        <Date_Picker value={FatherDateOfBirth} onChange={handleFatherDateOfBirthChange} readOnly={isFatherRecordData}/>
                    </div>

                </div>

               

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>

                    <h2 className="col-form-label" style={{ marginTop: '5px', fontFamily: 'Kanit, sans-serif', fontSize: '18px'}}>เป็นคนต่างชาติใช่หรือไม่</h2>
                    <div className="d-flex align-items-center"style={{ flexWrap: 'wrap'}} >
                        <div className="form-check" style={{ marginTop: '5px',maxWidth:"100%"}}>
                            <input className="form-check-input" type="radio" name="Fatherforeigner?" id="FatherForeigner" value={isFatherForeigner} onChange={handleIsFatherForeigner} />
                            <label className="form-check-label custom-body"style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="FatherForeigner">
                            ใช่
                            </label>
                        </div>
                        <div className="form-check" style={{ marginTop: '5px',maxWidth:"100%"}}>
                            <input className="form-check-input" type="radio" name="Fatherforeigner?" id="FatherNotForeigner" value={isFatherForeigner} onChange={handleIsFatherForeigner} />
                            <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="FatherNotForeigner">
                            ไม่
                            </label>
                        </div>
                    </div>
                {/* </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', whiteSpace: 'nowrap', fontSize: '18px',marginLeft: '15px' }}> */}
                    {/* ใช้เงื่อนไขเพื่อตรวจสอบว่าถ้าเป็นคนต่างชาติให้แสดงส่วนของสัญชาติ */}
                    {isFatherForeigner && (
                        <>
                        <div className="d-flex align-items-center" style={{ marginTop: '5px',maxWidth:"100%"}}>
                            <label htmlFor="father_Nationality" className="col-form-label">สัญชาติ</label>
                        </div>
                        <div className="align-items-center" style={{marginTop: '5px',maxWidth:"100%"}}>
                            <input type="text" className="form-control" id="father_Nationality" name="father_Nationality" placeholder="กรอกสัญชาติ" value={FatherNationality} onChange={handleFatherNationalityChange}/>
                        </div>
                        </>
                    )}
                </div>
                
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>
                        <div className="d-flex align-items-center" style={{ marginTop: '5px',maxWidth:"100%"}}>
                            <label htmlFor="father_Occupation" className="col-form-label">อาชีพ</label>
                        </div>
                        <div className="align-items-center" style={{ marginTop: '5px',maxWidth:"100%"}}>       
                            <input type="text" className="form-control" id="father_Occupation" name="father_Occupation" value={FatherOccupation} placeholder="กรอกอาชีพ" onChange={handleFatherOccupationChange}/>
                        </div>
                        <div className="d-flex align-items-center" style={{ marginTop: '5px',maxWidth:"100%"}}>
                            <label htmlFor="father_Workplace" className="col-form-label">สถานที่ทำงาน</label>
                        </div>
                        <div className="align-items-center" style={{ marginTop: '5px',maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="father_Workplace" name="father_Workplace" value={FatherOffice} placeholder="กรอกสถานที่ทำงาน" onChange={handleFatherOfficeChange}/>
                        </div>
                        <div className="d-flex align-items-center" style={{ marginTop: '5px',maxWidth:"100%"}}>
                            <label htmlFor="father_phoneNumber" className="col-form-label">โทรศัพท์</label>
                            </div>
                        <div className="align-items-center" style={{ marginTop: '5px',maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="father_phoneNumber" name="father_phoneNumber" value={FatherTel} placeholder="กรอกหมายเลขโทรศัพท์" onChange={handleFatherTelChange}/>
                        </div>
                        
                        
                </div>
            {/* </>
        )} */}






        <br />
        <div className="row" style={{fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0',Height: '100vh'}}>
            <div className="col-sm d-flex align-items-center">
                    <label htmlFor="mother_data" className="col-form-label">ข้อมูลมารดา</label>
                </div>
            </div>

            {/* <br></br> */}
            {/* <h2 className="col-sm d-flex align-items-center" style={{marginLeft: '15px',fontSize: '18px'}}>เคยบันทึกข้อมูลมารดาแล้วหรือไม่</h2> */}
            {/* <h2 className="card-heading mb-0 mx-3" style={{ fontSize: '16px', color: 'red' ,marginTop:"5px"}}>
                    **เลือก ใช่ กรณีเคยบันทึกข้อมูลของตนสำหรับใช้สมัครเรียนให้บุตรหลานของท่าน
                </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '16px',marginLeft: '15px' ,marginTop:"5px"}}>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="usedToRecordMotherData?" id="usedToRecordMotherData" onChange={handleIsMotherRecordData} />
                    <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="usedToRecordMotherData">
                    ใช่
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="usedToRecordMotherData?" id="notYetRecordMotherData" onChange={handleIsMotherRecordData} />
                    <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="notYetRecordMotherData">
                    ไม่ใช่
                    </label>
                </div>
            </div> */}

        {/* {isMotherRecordData ? (
            <> */}
                <div style={{fontSize: '18px',marginTop:"5px"}}>
                    <div className="d-flex align-items-center"style={{flexWrap:"wrap"}}>
                        <label htmlFor="Mother_Email" className="col-form-label mb-0 mx-3">อีเมล</label>
                        <h2 className="card-heading mb-0 mx-3" style={{ fontSize: '16px', color: 'blue' }}>
                            (อีเมลที่ท่านกรอกนี้สามารถใช้ตรวจสอบข้อมูลนักเรียนของโรงเรียนซึ่งเป็นบุตรหลานของท่าน)
                        </h2>
                    </div>
                    <div className="align-items-center"style={{ marginTop: '5px',maxWidth:"35%"}}>  
                        <input type="text" className="form-control mb-0 mx-3" id="Mother_Email" name="Mother_Email" placeholder="กรอกอีเมลมารดา" value={MotherEmail} onChange={handleMotherEmailChange} />
                    </div>
                </div>
            {/* </>
        ) : (
            <> */}
            {/* <br></br> */}
            <br />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px', marginLeft: '15px' }}>

                    <div className="d-flex align-items-center">
                        <label htmlFor="mother_Firstname" className="col-form-label">ชื่อ</label>
                    </div>
                    <div className="align-items-center" style={{maxWidth:"100%"}}>
                        <input type="text" className="form-control" id="mother_Firstname" name="mother_Firstname" placeholder="กรอกชื่อ" value={MotherFirstname} onChange={handleMotherFirstnameChange} />
                        </div>
                    <div className="align-items-center">
                        <label htmlFor="mother_lastname" className="col-form-label">นามสกุล</label>
                        </div>
                    <div className="align-items-center" style={{maxWidth:"100%"}}>
                        <input type="text" className="form-control" id="mother_lastname" name="mother_lastname" placeholder="กรอกนามสกุล"value={MotherLastname} onChange={handleMotherLastnameChange}  />
                        </div>
                    <div className="align-items-center">
                        <label htmlFor="mother_dob" className="col-form-label">วัน/เดือน/ปีเกิด</label>
                    </div>
                    <div className="d-flex align-items-center" style={{maxWidth:"100%"}}>
                        <Date_Picker value={MotherDateOfBirth} onChange={handlMotherDateOfBirthChange} />
                        {/* <input type="text" className="form-control" id="mother_age" name="mother_age" placeholder="กรอกอายุ" /> */}
                        {/* <label htmlFor="year" className="col-form-label"style={{marginLeft: '15px'}}>ปี</label> */}
                    </div>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px', marginTop:'5px' }}>

                    <h2 className="col-form-label" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px'}}>เป็นคนต่างชาติใช่หรือไม่</h2>
                    <div className="d-flex align-items-center"style={{ flexWrap: 'wrap'}} >
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Motherforeigner?" id="MotherForeigner" value={isMotherForeigner} onChange={handleIsMotherForeigner} />
                            <label className="form-check-label custom-body"style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="MotherForeigner">
                            ใช่
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Motherforeigner?" id="MotherNotForeigner" value={isMotherForeigner} onChange={handleIsMotherForeigner} />
                            <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="MotherNotForeigner">
                            ไม่
                            </label>
                        </div>
                    </div>
                    {/* </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', whiteSpace: 'nowrap', fontSize: '18px',marginLeft: '15px' }}> */}
                    {/* ใช้เงื่อนไขเพื่อตรวจสอบว่าถ้าเป็นคนต่างชาติให้แสดงส่วนของสัญชาติ */}
                    {isMotherForeigner && (
                        <>
                        <div className="d-flex align-items-center">
                        <label htmlFor="mother_Nationality" className="col-form-label">สัญชาติ</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>
                        <input type="text" className="form-control" id="mother_Nationality" name="mother_Nationality" placeholder="กรอกสัญชาติ"value={MotherNationality} onChange={handleMotherNationalityChange}/>
                        </div>
                        </>
                    )}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>
                
                            {/* <div className="d-flex align-items-center">
                                <label htmlFor="mother_Occupation" className="col-form-label">วุฒิการศึกษา</label>
                            </div>
                            <div class="h-screen flex flex-col justify-left sm:flex-row">
                                <div class="sm:w-1_3 sm:pr-3">
                                    <div class="dropdown" style={{ maxWidth: '100%' }}> 
                                        <select value={selectedOption} onChange={handleSelectChange} class="custom-select w-full">
                                            <option value="ระบุหมายเหตุ">ระบุวุฒิการศึกษา</option>
                                            <option value="เพื่อใช้ในการขอทุนการศึกษา">ปริญญาตรี</option>
                                            <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">ปริญญาโท</option>
                                            <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">ปริญญาเอก</option>
                                        </select>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px', margintop: '5px' }}>
                        <div className="d-flex align-items-center">
                            <label htmlFor="mother_Occupation" className="col-form-label">อาชีพ</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>       
                            <input type="text" className="form-control" id="mother_Occupation" name="mother_Occupation" placeholder="กรอกอาชีพ"value={MotherOccupation} onChange={handleMotherOccupationChange} />
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="mother_Workplace" className="col-form-label">สถานที่ทำงาน</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="mother_Workplace" name="mother_Workplace" placeholder="กรอกสถานที่ทำงาน"value={MotherOffice} onChange={handleMotherOfficeChange} />
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="mother_phoneNumber" className="col-form-label">โทรศัพท์</label>
                            </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="mother_phoneNumber" name="mother_phoneNumber" placeholder="กรอกหมายเลขโทรศัพท์"value={MotherTel} onChange={handleMotherTelChange} />
                        </div>
                     
                        
                </div>
            {/* </>
        )} */}

        <br></br>
        <div className="row" style={{fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0',Height: '100vh'}}>

            <div className="col-sm d-flex align-items-center" >
                <label htmlFor="parents_data" className="col-form-label">ข้อมูลผู้ปกครอง</label>
            </div>
        </div>

            <br></br>
                <h2 className="col-sm d-flex align-items-center" style={{marginLeft: '15px',fontSize: '16px'}}>ผู้ปกครองเป็น</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '16px',marginLeft: '15px' ,marginTop:"5px"}}>
                
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="whoAreParent?" id="FatherIsParent" onChange={handlewhoAreParent} />
                    <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="FatherIsParent">
                    บิดา
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="whoAreParent?" id="MotherIsParent" onChange={handlewhoAreParent} />
                    <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="MotherIsParent">
                    มารดา
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="whoAreParent?" id="FatherAndMotherAreParent" onChange={handlewhoAreParent} />
                   
                    <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px', flexWrap: "wrap" }} htmlFor="FatherAndMotherAreParent">
                    บิดาและมารดา
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="whoAreParent?" id="SomeoneElseIsParent" onChange={handlewhoAreParent} />
                    <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="SomeoneElseIsParent">
                    อื่นๆ
                    </label>
                </div>
            
                </div>
                {/* <br></br> */}

                {(whoAreParent === 'SomeoneElseIsParent') && (
                    <>
                        {/* <h2 className="col-sm d-flex align-items-center" style={{marginLeft: '15px',fontSize: '18px'}}>เคยบันทึกข้อมูลผู้ปกครองแล้วหรือไม่</h2>
                        <h2 className="card-heading mb-0 mx-3" style={{ fontSize: '16px', color: 'red' ,marginTop:"5px"}}>
                                **เลือก ใช่ กรณีเคยบันทึกข้อมูลของตนสำหรับใช้สมัครเรียนให้บุตรหลานของท่าน
                            </h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '16px',marginLeft: '15px' ,marginTop:"5px"}}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="usedToRecordParentData?" id="usedToRecordParentData" onChange={handleIsParentRecordData} />
                                <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="usedToRecordParentData">
                                ใช่
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="usedToRecordParentData?" id="notYetRecordParentData" onChange={handleIsParentRecordData} />
                                <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="notYetRecordParentData">
                                ไม่ใช่
                                </label>
                            </div>
                        </div> */}

                        {/* {isParentRecordData ? (
                    <> */}
                        <div style={{fontSize: '18px',marginTop:"10px"}}>
                            <div className="d-flex align-items-center" style={{flexWrap:"wrap"}}>
                                <label htmlFor="ParentEmail" className="col-form-label mb-0 mx-3">อีเมล</label>
                                <h2 className="card-heading mb-0 mx-3" style={{ fontSize: '16px', color: 'blue' }}>
                                    (อีเมลที่ท่านกรอกนี้สามารถใช้ตรวจสอบข้อมูลนักเรียนของโรงเรียนซึ่งเป็นบุตรหลานของท่าน)
                                </h2>
                            </div>
                            <div className="align-items-center"style={{ marginTop: '5px',maxWidth:"65%"}}>  
                                <input type="text" className="form-control mb-0 mx-3" id="ParentEmail" name="ParentEmail" placeholder="กรอกอีเมลผู้ปกครอง" value={ParentEmail} onChange={handleParentEmailChange}/>
                            </div>
                        </div>
                    {/* </>
                    ) : (
                    <>  */}
                    {/* //SomeoneElseIsParent */}
                    <br></br>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>

                        <div className="d-flex align-items-center">
                            <label htmlFor="SomeoneElseIsParent_surname" className="col-form-label">ชื่อ</label>
                        </div>
                        
                        <div className="align-items-center" style={{maxWidth:"100%"}}>
                            <input type="text" className="form-control" id="SomeoneElseIsParent_surname" name="SomeoneElseIsParent_surname" placeholder="กรอกชื่อ" value={ParentFirstname} onChange={handleParentFirstnameChange}/>
                        </div>

                        <div className="align-items-center">
                            <label htmlFor="SomeoneElseIsParent_lastname" className="col-form-label">นามสกุล</label>
                        </div>

                        <div className="align-items-center" style={{maxWidth:"100%"}}>
                            <input type="text" className="form-control" id="SomeoneElseIsParent_lastname" name="SomeoneElseIsParent_lastname" placeholder="กรอกนามสกุล" value={ParentLastname} onChange={handleParentLastnameChange}/>
                        </div>

                        {/* <div className="align-items-center">
                            <label htmlFor="SomeoneElseIsParent_age" className="col-form-label">อายุ</label>
                        </div>

                        <div className="d-flex align-items-center" style={{maxWidth:"100%"}}>
                            <input type="text" className="form-control" id="SomeoneElseIsParent_age" name="SomeoneElseIsParent_age" placeholder="กรอกอายุ" />
                            <label htmlFor="year" className="col-form-label"style={{marginLeft: '15px'}}>ปี</label>
                        </div> */}

                        <div className="align-items-center">
                            <label htmlFor="SomeoneElseIsParent_dob" className="col-form-label">วัน/เดือน/ปีเกิด</label>
                        </div>
                        <div className="d-flex align-items-center" style={{maxWidth:"100%"}}>
                            <Date_Picker value={ParentDateOfBirth} onChange={handlParentDateOfBirthChange} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>

                        <h2 className="col-form-label" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px'}}>เป็นคนต่างชาติใช่หรือไม่</h2>
                        <div className="d-flex align-items-center"style={{ flexWrap: 'wrap'}}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="Parentforeigner?" id="ParentForeigner" value={isParentForeigner} onChange={handleIsParentForeigner} />
                                <label className="form-check-label custom-body"style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="ParentForeigner">
                                ใช่
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="Parentforeigner?" id="ParentNotForeigner" value={isParentForeigner}onChange={handleIsParentForeigner} />
                                <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="ParentNotForeigner">
                                ไม่
                                </label>
                            </div>
                        </div>
                        {/* </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', whiteSpace: 'nowrap', fontSize: '18px',marginLeft: '15px' }}> */}
                        {/* ใช้เงื่อนไขเพื่อตรวจสอบว่าถ้าเป็นคนต่างชาติให้แสดงส่วนของสัญชาติ */}
                        {isParentForeigner && (
                            <>
                            <div className="d-flex align-items-center">
                                <label htmlFor="parent_Nationality" className="col-form-label">สัญชาติ</label>
                            </div>
                            <div className="align-items-center" style={{maxWidth:"100%"}}>
                                <input type="text" className="form-control" id="parent_Nationality" name="parent_Nationality" placeholder="กรอกสัญชาติ"value={ParentNationality} onChange={handleParentNationalityChange}/>
                            </div>
                            </>
                        )}
                    </div>

                       
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>
                        <div className="d-flex align-items-center">
                            <label htmlFor="Parent_Occupation" className="col-form-label">อาชีพ</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>       
                            <input type="text" className="form-control" id="Parent_Occupation" name="Parent_Occupation" placeholder="กรอกอาชีพ" value={ParentOccupation} onChange={handleParentOccupationChange}/>
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="Parent_Workplace" className="col-form-label">สถานที่ทำงาน</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="Parent_Workplace" name="Parent_Workplace" placeholder="กรอกสถานที่ทำงาน" value={ParentOffice} onChange={handleParentOfficeChange}/>
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="SomeoneElseIsParent_phoneNumber" className="col-form-label">โทรศัพท์</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="SomeoneElseIsParent_phoneNumber" name="SomeoneElseIsParent_phoneNumber" placeholder="กรอกหมายเลขโทรศัพท์" value={ParentTel} onChange={handleParentTelChange} />
                        </div>
                        {/* <div className="d-flex align-items-center">
                        {/* <div className="d-flex align-items-center">
                            <label htmlFor="SomeoneElseIsParentEmail" className="col-form-label">อีเมล</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="SomeoneElseIsParentEmail" name="SomeoneElseIsParentEmail" placeholder="กรอกอีเมลผู้ปกครอง"/>
                        </div> */}
                    {/* </div>  */}
                        <div className="d-flex align-items-center">
                            <label htmlFor="Parent_Relation" className="col-form-label">เกี่ยวข้องเป็น</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="Parent_Relation" name="Parent_Relation" placeholder="กรอกความเกี่ยวข้องกับผู้สมัคร" value={ParentRole} onChange={handleParentRoleChange}/>
                        </div>
                        
                    </div>
            
                    </>
                //     )}
                // </>
                )}
                
                <br></br>

                <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-between', width: '100%' }}>

              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <button type="button" onClick={handleParentBackClick}
                  className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                  ย้อนกลับ
                </button>
              </div>

              <div>
                {/* {message && <p>{message}</p>} //แสดงข้อความแจ้งเตือนในกรณีที่มีข้อผิดพลาด */}

                {/* {message === "Successfully uploaded to drive" ? ( */}
                  {/* <Link to="/NewUser_menu" > */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button type="button" className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px' }}>
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
    </div> )}






    </div>
      </div>
      </div>
      </div>
      </>
      ) 
}

export default Enrollment_info