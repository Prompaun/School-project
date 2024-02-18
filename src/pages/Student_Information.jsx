import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Student_Information() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [selectedOption, setSelectedOption] = useState('ระบุหมายเหตุ');
  const [nationality, setNationality] = useState(''); // State สำหรับเก็บข้อมูลสัญชาติ
  const [isFatherForeigner, setIsFatherForeigner] = useState(false); // State สำหรับเก็บข้อมูลว่าเป็นคนต่างชาติหรือไม่
  const [isMotherForeigner, setIsMotherForeigner] = useState(false); // State สำหรับเก็บข้อมูลว่าเป็นคนต่างชาติหรือไม่
  const [whoAreParent, setParent] = useState('');

  const handleIsFatherForeigner = (event) => {
    setIsFatherForeigner(event.target.id === 'FatherForeigner'); // ถ้าเลือก 'ใช่' ให้เป็น true, ถ้า 'ไม่' ให้เป็น false
  }; 

  const handleIsMotherForeigner = (event) => {
    setIsMotherForeigner(event.target.id === 'MotherForeigner');
  }; 

    const handlewhoAreParent = (event) => {
        setParent(event.target.id);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, e.g., send data to server via API call
    console.log('Form submitted:', { firstName, lastName, age });
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const fontStyle = {
    fontFamily: 'Kanit, sans-serif',
    textDecoration: 'none'
  };

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Kanit, sans-serif',
      }}>

        <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif'}}>
        
            <div className="d-flex align-items-center" style={{fontWeight:"bold",fontSize:"20px"}}>
                <label htmlFor="surname" className="col-form-label">ข้อมูลส่วนตัวของนักเรียน</label>
            </div>
        
        <div style={{ display: 'flex',flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif' }}>   
        <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="National_ID_Number" className="col-form-label">เลขประจำตัวประชาชน</label>
                </div> 
            <div className="align-items-center"style={{maxWidth:"100%"}}>       
                <input 
                    type="text" 
                    className="form-control"
                    id="National_ID_Number" 
                    name="National_ID_Number" 
                    value="1-0000-00000-11-1" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black' }} 
                />
            </div>
            </div>
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
           
                <label htmlFor="Student_ID" className="col-form-label">เลขประจำตัวนักเรียน</label>
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
            </div>
      
      <div style={{ display: 'flex',flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif' }}> 
        <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="title" className="col-form-label">คำนำหน้า</label>
                </div> 
            <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input 
                    type="text" 
                    className="form-control"
                    id="title" 
                    name="title" 
                    value="เด็กหญิง" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>
            </div>
        <div style={{ fontSize: '18px'}}>    
            <div className=" align-items-center">
                <label htmlFor="surname" className="col-form-label">ชื่อ</label>
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
                <label htmlFor="lastname" className="col-form-label">นามสกุล</label>
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
        </div>

        <div style={{fontSize: '18px' }}>
            <div className="align-items-center"style={{ flexWrap: 'wrap' }}>
                <label htmlFor="Date_of_Birth" className="col-form-label">วัน/เดือน/ปีเกิด</label>
                </div> 
            <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="Date_of_Birth"
                    name="Date_of_Birth"
                    value="01/05/2559"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}} 
                    />            
            </div>
        </div>
        </div>
       
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', fontFamily: 'Kanit, sans-serif', fontSize: '18px'}}> 
            
                <div className="align-items-center"style={{flexWrap:"wrap", fontSize: '18px'}}>
                <label htmlFor="Copy_of_the_birth_certificate" className="col-form-label">สำเนาสูติบัตร (ของนักเรียน)</label>
                
                </div> 
                <button 
                        type="submit" 
                        className="btn btn-custom" 
                        style={{
                        ...fontStyle, 
                        color: 'white', 
                        fontSize: '18px', 
                        textAlign: 'center', 
                       
                        backgroundColor: '#EE82EE',
                        width: 'auto', // กำหนดความกว้าง
                        height: 'auto'  // กำหนดความสูง
                        }}
                    >
                        <span>file</span>
                </button>
            
        </div>
      

            {/* <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <button type="submit" className="btn btn-primary">file</button>
            </div> */}

            <div className="d-flex align-items-center" style={{fontWeight:"bold",fontSize:"20px"}}>
                <label htmlFor="surname" className="col-form-label">ข้อมูลการศึกษา</label>
            </div>
        

        
        <div style={{ display: 'flex',flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif' }}>
            <div className="align-items-center"style={{flexWrap:"wrap", fontSize: '18px'}}>
                <label htmlFor="Education_Document" className="col-form-label">หลักฐานการศึกษาจากโรงเรียนเดิม</label>
                
                </div> 
            <div className="align-items-center"style={{ maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="Education_Document"
                    name="Education_Document"
                    value="ปพ.1"
                    readOnly
                    style={{
                        backgroundColor: '#DCDCDC',
                        color: 'black',
                         // กำหนดความกว้างขั้นต่ำ
                        boxSizing: 'border-box',  // ตั้งค่า box-sizing
                        fontSize: '18px'
                    }} 
                />
            </div>

            {/* <div className="align-items-center"> */}
                <button 
                        type="submit" 
                        className="btn btn-custom" 
                        style={{
                        ...fontStyle, 
                        color: 'white', 
                        fontSize: '18px', 
                        textAlign: 'center', 
                        
                        backgroundColor: '#EE82EE',
                        width: 'auto', // กำหนดความกว้าง
                        height: 'auto'  // กำหนดความสูง
                        }}
                    >
                        <span>file</span>
                </button>

               
        </div>

        </div>
        </div>
    
  );
}

export default Student_Information;
