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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif'}}>            
        <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
            <label className="col-form-label"style={{flexWrap: 'wrap' }}>บ้านเลขที่ :</label>
            </div>
              <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input 
                    type="text" 
                    className="form-control"
                    id="Address_Number" 
                    name="Address_Number" 
                    value="11/1" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                />
            </div>
            </div>
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
           
              <label className="col-form-label"style={{flexWrap: 'wrap' }}>หมู่ที่ :</label>
              </div>
              <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="Village"
                    name="Village"
                    value="5"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                />
            </div>
            </div>
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
            
            <label className="col-form-label" style={{flexWrap: 'wrap' }}>ซอย :</label>
            </div>
            <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="Alley"
                    name="Alley"
                    value="อ่อนนุช 11"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                    />
 </div>
 </div>
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
            
              <label className="col-form-label"style={{flexWrap: 'wrap' }}>ถนน :</label>
            </div>
            <div className="align-items-center"style={{maxWidth:"100%"}}> 
                <input
                    type="text"
                    className="form-control"
                    id="Road"
                    name="Road"
                    value="สุขุมวิท"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                />
                        
            </div>
        
        </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif'}}>            
        <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
           
              <label className="col-form-label"style={{flexWrap: 'wrap' }}>จังหวัด :</label>
              </div>
              <div className="align-items-center" style={{maxWidth:"100%"}}>
                <input 
                    type="text" 
                    className="form-control"
                    id="Province" 
                    name="Province" 
                    value="กรุงเทพมหานครฯ" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                />
            </div>

            </div>
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
            
              <label className="col-form-label"style={{flexWrap: 'wrap' }}>เขต/อำเภอ :</label>
              </div>
              <div className="align-items-center" style={{maxWidth:"100%"}}>
                <input
                    type="text"
                    className="form-control"
                    id="District"
                    name="District"
                    value="ประเวศ"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                />
            </div>
            </div>
            <div style={{ fontSize: '18px'}}> 
            <div className="align-items-center">
            
            <label className="col-form-label"style={{flexWrap: 'wrap' }}>แขวง/ตำบล :</label>
            </div>
            <div className="align-items-center" style={{maxWidth:"100%"}}>
              <input 
                  type="text" 
                  className="form-control"
                  id="Subdistrict" 
                  name="Subdistrict" 
                  value="สวนหลวง" 
                  readOnly 
                  style={{ backgroundColor: '#DCDCDC', color: 'black'}}
                  // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
              />
          </div>
          </div>
            
          </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px',  fontFamily: 'Kanit, sans-serif',fontSize:"18px"}}>
          <div className="align-items-center">
          <label className="col-form-label">สำเนาทะเบียนบ้าน  </label>
                <button 
                    type="submit" 
                    className="btn btn-custom" 
                    style={{
                    ...fontStyle, 
                    color: 'white', 
                    fontSize: '18px', 
                    textAlign: 'center', 
                    // marginTop: '10px', 
                    margin: '5px',
                    
                    backgroundColor: '#EE82EE',
                    width: 'auto', // กำหนดความกว้าง
                    height: 'auto',  // กำหนดความสูง
                    fontSize:"18px"
                    }}
                >
                    <span>file</span>
                </button>
            </div>
        </div>
        
        </div>

    </div>
  );
}

export default Parent_Information;
