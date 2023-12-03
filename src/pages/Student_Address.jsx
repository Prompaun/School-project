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
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-3 d-flex align-items-center">
                <label htmlFor="Address_Number" className="col-form-label mb-0 mx-3">บ้านเลขที่</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="Address_Number" 
                    name="Address_Number" 
                    value="11/1" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '100px'}}
                />
            </div>

            <div className="col-sm-3 d-flex align-items-center">
                <label htmlFor="Village" className="col-form-label mb-0 mx-3">หมู่ที่</label>
                <input
                    type="text"
                    className="form-control"
                    id="Village"
                    name="Village"
                    value="5"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '100px'}}
                />
            </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-4 d-flex align-items-center">
                <label htmlFor="Province" className="col-form-label mb-0 mx-3">จังหวัด</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="Province" 
                    name="Province" 
                    value="กรุงเทพมหานครฯ" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '150px'}}
                />
            </div>

            <div className="col-sm-4 d-flex align-items-center">
                <label htmlFor="District" className="col-form-label mb-0 mx-3">เขต/อำเภอ</label>
                <input
                    type="text"
                    className="form-control"
                    id="District"
                    name="District"
                    value="ประเวศ"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '150px'}}
                />
            </div>
        </div>

        <br></br>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-4 d-flex align-items-center">
                <label htmlFor="Subdistrict" className="col-form-label mb-0 mx-3">แขวง/ตำบล</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="Subdistrict" 
                    name="Subdistrict" 
                    value="สวนหลวง" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '150px'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>

            <div className="col-sm-4 d-flex align-items-center">
                <label htmlFor="Road" className="col-form-label mb-0 mx-3">ถนน</label>
                <input
                    type="text"
                    className="form-control"
                    id="Road"
                    name="Road"
                    value="สุขุมวิท"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '150px'}}
                />
                        
            </div>

            <div className="col-sm-4 d-flex align-items-center">
                <label htmlFor="Alley" className="col-form-label mb-0 mx-3">ซอย</label>
                <input
                    type="text"
                    className="form-control"
                    id="Alley"
                    name="Alley"
                    value="อ่อนนุช 11"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '200px'}}
                    />
            </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-3 d-flex align-items-center">
                <label htmlFor="Copy_of_the_birth_certificate" className="col-form-label mb-0 mx-3">สำเนาทะเบียนบ้าน</label>
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
        
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontFamily: 'Kanit, sans-serif', fontSize: '16px' }}>
            <Link to="/NewUser_menu" style={{ display: 'flex', alignItems: 'center',
                textDecoration: 'none' }}>
                <button 
                    type="submit" 
                    className="btn btn-custom" 
                    style={{
                        ...fontStyle, 
                        color: 'white', 
                        fontSize: '16px', 
                        textAlign: 'center', 
                        backgroundColor: '#40C0E0',
                        width: '100px',
                        height: '38px'
                    }}
                >
                    <span>ย้อนกลับ</span>
                </button>
            </Link>

            <Link to="/NewUser_menu" style={{ display: 'flex', alignItems: 'center',
                textDecoration: 'none' }}>
                <button 
                    type="submit" 
                    className="btn btn-custom" 
                    style={{
                        ...fontStyle, 
                        color: 'white', 
                        fontSize: '16px', 
                        textAlign: 'center', 
                        backgroundColor: '#40C0E0',
                        width: '80px',
                        height: '38px'
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
