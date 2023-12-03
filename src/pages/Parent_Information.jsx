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
    <div>
        {/* <br />
        <div class="d-flex align-items-center">
            <h2 class="card-heading px-3" style={{fontSize: '16px'}}>เลขประจำตัวประชาชน</h2>
            <h2 class="card-heading px-3" style={{fontSize: '16px'}}>1-0000-00000-11-1</h2>
        </div>

        <br />
        <div class="d-flex align-items-center">
            <h2 class="card-heading px-3" style={{fontSize: '16px'}}>เลขประจำตัวนักเรียน</h2>
            <h2 class="card-heading px-3" style={{fontSize: '16px'}}>13333</h2>
        </div> */}

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-4 d-flex align-items-center">
                <label htmlFor="National_ID_Number" className="col-form-label mb-0 mx-3">เลขประจำตัวประชาชน</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="National_ID_Number" 
                    name="National_ID_Number" 
                    value="1-0000-00000-11-1" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '180px' }} 
                />
            </div>
        </div>
        
        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-3 d-flex align-items-center">
                <label htmlFor="Student_ID" className="col-form-label mb-0 mx-3">เลขประจำตัวนักเรียน</label>
                <input
                    type="text"
                    className="form-control"
                    id="Student_ID"
                    name="Student_ID"
                    value="13333"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '100px' }} 
                    />            
            </div>
        </div>

        <br></br>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-3 d-flex align-items-center">
                <label htmlFor="title" className="col-form-label mb-0 mx-3">คำนำหน้า</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="title" 
                    name="title" 
                    value="เด็กหญิง" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '90px'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>

            <div className="col-sm-3 d-flex align-items-center">
                <label htmlFor="surname" className="col-form-label mb-0 mx-3">ชื่อ</label>
                <input
                    type="text"
                    className="form-control"
                    id="surname"
                    name="surname"
                    value="ดวง"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '200px'}}
                />
                        
            </div>

            <div className="col-sm-3 d-flex align-items-center">
                <label htmlFor="lastname" className="col-form-label mb-0 mx-3">นามสกุล</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    value="จันทร์"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '200px'}}
                    />
            </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-2 d-flex align-items-center">
                <label htmlFor="Date_of_Birth" className="col-form-label mb-0 mx-3">วัน/เดือน/ปีเกิด</label>
                <input
                    type="text"
                    className="form-control"
                    id="Date_of_Birth"
                    name="Date_of_Birth"
                    value="01/05/2559"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '120px' }} 
                    />            
            </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-3 d-flex align-items-center">
                <label htmlFor="Copy_of_the_birth_certificate" className="col-form-label mb-0 mx-3">สำเนาสูติบัตร (ของนักเรียน)</label>
                {/* <button type="submit" className="btn btn-primary">file</button> */}

                <button 
                    type="submit" 
                    className="btn btn-custom" 
                    style={{
                    ...fontStyle, 
                    color: 'white', 
                    fontSize: '16px', 
                    textAlign: 'center', 
                    // marginTop: '10px', 
                    // marginRight: '15px',
                    backgroundColor: '#EE82EE',
                    width: '80px', // กำหนดความกว้าง
                    height: '38px'  // กำหนดความสูง
                    }}
                >
                    <span>file</span>
                </button>
            </div>
        </div>

            {/* <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <button type="submit" className="btn btn-primary">file</button>
            </div> */}

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px', color: '#808080'}}>
            <div className="col-sm-3 d-flex align-items-center">
                <label htmlFor="Education_data" className="col-form-label mb-0 mx-3">ข้อมูลการศึกษา</label>
           </div>
        </div>

        

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-0 d-flex align-items-center">
                <label htmlFor="Education_Document" className="col-form-label mb-0 mx-3">หลักฐานการศึกษาจากโรงเรียนเดิม</label>
                {/* <input
                    type="text"
                    className="form-control"
                    id="Education_Document"
                    name="Education_Document"
                    value="ปพ.1"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black' }} 
                    /> */}

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
                        minWidth: '70px',  // กำหนดความกว้างขั้นต่ำ
                        boxSizing: 'border-box',  // ตั้งค่า box-sizing
                    }} 
                />
            </div>

            <div className="col-sm-0 d-flex align-items-center">
                <button 
                        type="submit" 
                        className="btn btn-custom" 
                        style={{
                        ...fontStyle, 
                        color: 'white', 
                        fontSize: '16px', 
                        textAlign: 'center', 
                        marginLeft: '-5px',
                        backgroundColor: '#EE82EE',
                        width: '80px', // กำหนดความกว้าง
                        height: '38px'  // กำหนดความสูง
                        }}
                    >
                        <span>file</span>
                </button>

                
                {/* <button 
    type="submit" 
    className="btn btn-custom" 
    style={{
        ...fontStyle, 
        color: 'white', 
        fontSize: '16px', 
        textAlign: 'center', 
        marginLeft: '15px',
        backgroundColor: '#EE82EE',
        width: '80px',
        height: '38px',
        padding: '8px',  // เพิ่ม padding
        boxSizing: 'border-box',  // ตั้งค่า box-sizing
    }}
>
    <span>file</span>
</button> */}

            </div>
        </div>

        <br></br>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', fontFamily: 'Kanit, sans-serif', fontSize: '16px' }}>
            <Link to="/NewUser_menu">
                {/* <button type="submit" className="btn btn-primary">ถัดไป</button> */}
                <button 
                        type="submit" 
                        className="btn btn-custom" 
                        style={{
                        ...fontStyle, 
                        color: 'white', 
                        fontSize: '16px', 
                        textAlign: 'center', 
                        // marginTop: '10px', 
                        // marginRight: '15px',
                        // marginLeft: '15px',
                        backgroundColor: '#40C0E0',
                        width: '80px', // กำหนดความกว้าง
                        height: '38px'  // กำหนดความสูง
                        }}
                    >
                        <span>ถัดไป</span>
                </button>
            </Link>
        </div>



    </div>
  );
}

export default Parent_Information;
