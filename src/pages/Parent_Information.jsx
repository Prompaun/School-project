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

        {/* <div className="row" style={{ fontFamily: 'Kanit, sans-serif',fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0'}}> */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap',fontWeight: 'bold', fontFamily: 'Kanit, sans-serif', fontSize: '20px'}}>
            <div className="col-sm-4 d-flex align-items-center">
                    <label htmlFor="father_data" className="col-form-label mb-0 mx-3">ข้อมูลบิดา</label>
                </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-5 d-flex align-items-center">
                <label htmlFor="name_father" className="col-form-label mb-0 mx-3">ชื่อ</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="name_father" 
                    name="name_father" 
                    value="สมใจ" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '155px'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>

            <div className="col-sm-5 d-flex align-items-center">
                <label htmlFor="lastname_father" className="col-form-label mb-0 mx-3">นามสกุล</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastname_father"
                    name="lastname_father"
                    value="ปรารถนา"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '155px'}}
                />
                        
            </div>

            <div className="col-sm-1 d-flex align-items-center">
                <label htmlFor="age_father" className="col-form-label mb-0 mx-3">อายุ</label>
                <input
                    type="text"
                    className="form-control"
                    id="age_father"
                    name="age_father"
                    value="45"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '60px'}}
                    />
                <label htmlFor="year" className="col-form-label mb-0 mx-3">ปี</label>
            </div>
        </div>
        
        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-3 d-flex align-items-center">
                <label htmlFor="Nationality_father" className="col-form-label mb-0 mx-3">สัญชาติ</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="Nationality_father" 
                    name="Nationality_father" 
                    value="ไทย" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '100px' }} 
                />
            </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-2.5 d-flex align-items-center">
                <label htmlFor="Educational_qualification_father" className="col-form-label mb-0 mx-3">วุฒิการศึกษา</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="Educational_qualification_father" 
                    name="Educational_qualification_father" 
                    value="ปริญญาเอก" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '155px'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>

            <div className="col-sm-2.5 d-flex align-items-center">
                <label htmlFor="Occupation_father" className="col-form-label mb-0 mx-3">อาชีพ</label>
                <input
                    type="text"
                    className="form-control"
                    id="Occupation_father"
                    name="Occupation_father"
                    value="ธุกิจส่วนตัว"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '155px'}}
                />
            </div>

            <div className="col-sm-4 d-flex align-items-center">
                <label htmlFor="Workplace_father" className="col-form-label mb-0 mx-3">สถานที่ทำงาน</label>
                <input
                    type="text"
                    className="form-control"
                    id="Workplace_father"
                    name="Workplace_father"
                    value="บริษัทสมใจปรารถนา"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '155px'}}
                    />
            </div>
        </div>
        
        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-2.5 d-flex align-items-center">
                <label htmlFor="Phone_father" className="col-form-label mb-0 mx-3">โทรศัพท์</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="Phone_father" 
                    name="Phone_father" 
                    value="0600000000" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '100px' }} 
                />
            </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap',fontWeight: 'bold', fontFamily: 'Kanit, sans-serif', fontSize: '20px'}}>
            <div className="col-sm-4 d-flex align-items-center">
                    <label htmlFor="mother_data" className="col-form-label mb-0 mx-3">ข้อมูลมารดา</label>
                </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-5 d-flex align-items-center">
                <label htmlFor="name_mother" className="col-form-label mb-0 mx-3">ชื่อ</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="name_mother" 
                    name="name_mother" 
                    value="สมพร" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '155px'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>

            <div className="col-sm-5 d-flex align-items-center">
                <label htmlFor="lastname_mother" className="col-form-label mb-0 mx-3">นามสกุล</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastname_mother"
                    name="lastname_mother"
                    value="ปรารถนา"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '155px'}}
                />
                        
            </div>

            <div className="col-sm-1 d-flex align-items-center">
                <label htmlFor="age_mother" className="col-form-label mb-0 mx-3">อายุ</label>
                <input
                    type="text"
                    className="form-control"
                    id="age_mother"
                    name="age_mother"
                    value="45"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '60px'}}
                    />
                <label htmlFor="year" className="col-form-label mb-0 mx-3">ปี</label>
            </div>
        </div>
        
        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-3 d-flex align-items-center">
                <label htmlFor="Nationality_mother" className="col-form-label mb-0 mx-3">สัญชาติ</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="Nationality_mother" 
                    name="Nationality_mother" 
                    value="ไทย" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '100px' }} 
                />
            </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-2.5 d-flex align-items-center">
                <label htmlFor="Educational_qualification_mother" className="col-form-label mb-0 mx-3">วุฒิการศึกษา</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="Educational_qualification_mother" 
                    name="Educational_qualification_mother" 
                    value="ปริญญาเอก" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '155px'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>

            <div className="col-sm-2.5 d-flex align-items-center">
                <label htmlFor="Occupation_mother" className="col-form-label mb-0 mx-3">อาชีพ</label>
                <input
                    type="text"
                    className="form-control"
                    id="Occupation_mother"
                    name="Occupation_mother"
                    value="ธุกิจส่วนตัว"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '155px'}}
                />
            </div>

            <div className="col-sm-4 d-flex align-items-center">
                <label htmlFor="Workplace_mother" className="col-form-label mb-0 mx-3">สถานที่ทำงาน</label>
                <input
                    type="text"
                    className="form-control"
                    id="Workplace_mother"
                    name="Workplace_mother"
                    value="บริษัทสมใจปรารถนา"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '155px'}}
                    />
            </div>
        </div>
        
        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-2.5 d-flex align-items-center">
                <label htmlFor="Phone_mother" className="col-form-label mb-0 mx-3">โทรศัพท์</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="Phone_mother" 
                    name="Phone_mother" 
                    value="0600000000" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '100px' }} 
                />
            </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap',fontWeight: 'bold', fontFamily: 'Kanit, sans-serif', fontSize: '20px'}}>
            <div className="col-sm-4 d-flex align-items-center">
                    <label htmlFor="data_parent" className="col-form-label mb-0 mx-3">ข้อมูลผู้ปกครอง</label>
                </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-5 d-flex align-items-center">
                <label htmlFor="name_parent" className="col-form-label mb-0 mx-3">ชื่อ</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="name_parent" 
                    name="name_parent" 
                    value="-" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '155px'}}
                    // style={{ backgroundColor: '#DCDCDC', color: 'black', borderColor: '#808080' }}
                />
            </div>

            <div className="col-sm-5 d-flex align-items-center">
                <label htmlFor="lastname_parent" className="col-form-label mb-0 mx-3">นามสกุล</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastname_parent"
                    name="lastname_parent"
                    value="-"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '155px'}}
                />
                        
            </div>

            <div className="col-sm-1 d-flex align-items-center">
                <label htmlFor="age_parent" className="col-form-label mb-0 mx-3">อายุ</label>
                <input
                    type="text"
                    className="form-control"
                    id="age_parent"
                    name="age_parent"
                    value="-"
                    readOnly
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '60px'}}
                    />
                <label htmlFor="year" className="col-form-label mb-0 mx-3">ปี</label>
            </div>
        </div>

        <br />
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
            <div className="col-sm-2.5 d-flex align-items-center">
                <label htmlFor="Phone_parent" className="col-form-label mb-0 mx-3">เกี่ยวข้องเป็น</label>
                <input 
                    type="text" 
                    className="form-control"
                    id="Phone_parent" 
                    name="Phone_parent" 
                    value="-" 
                    readOnly 
                    style={{ backgroundColor: '#DCDCDC', color: 'black', minWidth: '100px' }} 
                />
            </div>
        </div>
    </div>
  );
}

export default Parent_Information;
