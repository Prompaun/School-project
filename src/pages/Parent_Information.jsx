import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Parent_Information() {
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
                    <label htmlFor="father_data" className="col-form-labe">ข้อมูลบิดา</label>
            </div>
        </div>
        <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif'}}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif'}}>            
        <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="name_father" className="col-form-label">ชื่อ</label>
                </div>
              <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input 
                    type="text" 
                    className="form-control"
                    id="name_father" 
                    name="name_father" 
                    value="สมใจ" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>
            </div>
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="lastname_father" className="col-form-label">นามสกุล</label>
                </div>
              <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="lastname_father"
                    name="lastname_father"
                    value="ปรารถนา"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                />
                </div>         
            </div>
            </div>
       
       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif'}}>  
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="DOB_father" className="col-form-label">วัน/เดือน/ปีเกิด</label>
                </div>
              <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="DOB_father"
                    name="DOB_father"
                    value="45"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                    />
                
            </div>
        </div>
                  
        <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="Nationality_father" className="col-form-label">สัญชาติ</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input 
                    type="text" 
                    className="form-control"
                    id="Nationality_father" 
                    name="Nationality_father" 
                    value="ไทย" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black' }} 
                />
            </div>
            
        </div>
        
                  
                  <div style={{ fontSize: '18px'}}> 
       
            <div className="align-items-center">
                <label htmlFor="Educational_qualification_father" className="col-form-label">วุฒิการศึกษา</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input 
                    type="text" 
                    className="form-control"
                    id="Educational_qualification_father" 
                    name="Educational_qualification_father" 
                    value="ปริญญาเอก" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>
            </div>
                  
                  <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="Occupation_father" className="col-form-label">อาชีพ</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="Occupation_father"
                    name="Occupation_father"
                    value="ธุกิจส่วนตัว"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                />
            </div>
            </div>
                  
                  <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="Workplace_father" className="col-form-label">สถานที่ทำงาน</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="Workplace_father"
                    name="Workplace_father"
                    value="บริษัทสมใจปรารถนา"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                    />
            </div>
        
        </div>
                  
            <div style={{ fontSize: '18px'}}> 
                <div className="align-items-center">
                    <label htmlFor="Phone_father" className="col-form-label">โทรศัพท์</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                    <input 
                        type="text" 
                        className="form-control"
                        id="Phone_father" 
                        name="Phone_father" 
                        value="0600000000" 
                        readOnly 
                        style={{ backgroundColor: '#DCDCDC', color: 'black'}} 
                    />
                </div>
            </div>
    </div>
    <br />

    <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif'}}>        
        <div className="d-flex align-items-center" style={{fontWeight:"bold",fontSize:"20px"}}>
                    <div className="align-items-center">
                            <label htmlFor="mother_data" className="col-form-label">ข้อมูลมารดา</label>
                        </div>
                
            </div>
        
            </div>
            <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif'}}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif'}}>            
        <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="name_mother" className="col-form-label">ชื่อ</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input 
                    type="text" 
                    className="form-control"
                    id="name_mother" 
                    name="name_mother" 
                    value="สมพร" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>
            </div>
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="lastname_mother" className="col-form-label">นามสกุล</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="lastname_mother"
                    name="lastname_mother"
                    value="ปรารถนา"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                />
                        
            </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif'}}>  
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="DOB_mother" className="col-form-label">วัน/เดือน/ปีเกิด</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="DOB_mother"
                    name="DOB_mother"
                    value="45"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                    />
              
            </div>
            </div>
            <div style={{ fontSize: '18px'}}>
            <div className="align-items-center">
                <label htmlFor="Nationality_mother" className="col-form-label">สัญชาติ</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input 
                    type="text" 
                    className="form-control"
                    id="Nationality_mother" 
                    name="Nationality_mother" 
                    value="ไทย" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}} 
                />
            </div>
        
            </div>
            <div style={{ fontSize: '18px'}}> 
       
            <div className="align-items-center">
                <label htmlFor="Educational_qualification_mother" className="col-form-label">วุฒิการศึกษา</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input 
                    type="text" 
                    className="form-control"
                    id="Educational_qualification_mother" 
                    name="Educational_qualification_mother" 
                    value="ปริญญาเอก" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>
            </div>
           
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="Occupation_mother" className="col-form-label">อาชีพ</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="Occupation_mother"
                    name="Occupation_mother"
                    value="ธุกิจส่วนตัว"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                />
            </div>
            </div>
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="Workplace_mother" className="col-form-label">สถานที่ทำงาน</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="Workplace_mother"
                    name="Workplace_mother"
                    value="บริษัทสมใจปรารถนา"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                    />
            </div>
            </div>
        
            <div style={{ fontSize: '18px'}}> 
        
            <div className="align-items-center">
                <label htmlFor="Phone_mother" className="col-form-label">โทรศัพท์</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input 
                    type="text" 
                    className="form-control"
                    id="Phone_mother" 
                    name="Phone_mother" 
                    value="0600000000" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}} 
                />
            </div>
            </div>

        </div>
        </div>
        
       <br />
       <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif'}}>        
        <div className="d-flex align-items-center" style={{fontWeight:"bold",fontSize:"20px"}}>
            <div className="align-items-center">
                    <label htmlFor="data_parent" className="col-form-label">ข้อมูลผู้ปกครอง</label>
                </div>
        </div>
        </div>
        <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif'}}>   

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif'}}>  
        <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="name_parent" className="col-form-label">ชื่อ</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input 
                    type="text" 
                    className="form-control"
                    id="name_parent" 
                    name="name_parent" 
                    value="-" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>
            </div>
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="lastname_parent" className="col-form-label">นามสกุล</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="lastname_parent"
                    name="lastname_parent"
                    value="-"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                />
                        
            </div>
     
            </div>
           
            </div> 
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif'}}>  
        <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
                <label htmlFor="DOB_parent" className="col-form-label">วัน/เดือน/ปีเกิด</label>
                </div>
                <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="DOB_parent"
                    name="DOB_parent"
                    value="-"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                    />
                
            </div>
        </div>
        

            <div style={{ fontSize: '18px'}}> 
                <div className="align-items-center">
                    <label htmlFor="Phone_parent" className="col-form-label">เกี่ยวข้องเป็น</label>
                    </div>
                    <div className="align-items-center"style={{maxWidth:"100%"}}> 
                    <input 
                        type="text" 
                        className="form-control"
                        id="Phone_parent" 
                        name="Phone_parent" 
                        value="-" 
                        readOnly 
                        style={{ backgroundColor: '#DCDCDC', color: 'black'}} 
                    />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  );
}

export default Parent_Information;
