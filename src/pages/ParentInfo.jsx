import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ParentsInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [selectedOption, setSelectedOption] = useState('ระบุหมายเหตุ');
  const [isFatherRecordData, setIsFatherRecordData] = useState(false);
  const [isMotherRecordData, setIsMotherRecordData] = useState(false);
  const [isParentRecordData, setIsParentRecordData] = useState(false);
  const [nationality, setNationality] = useState(''); // State สำหรับเก็บข้อมูลสัญชาติ
  const [isFatherForeigner, setIsFatherForeigner] = useState(false); // State สำหรับเก็บข้อมูลว่าเป็นคนต่างชาติหรือไม่
  const [isMotherForeigner, setIsMotherForeigner] = useState(false); // State สำหรับเก็บข้อมูลว่าเป็นคนต่างชาติหรือไม่
  const [isParentForeigner, setIsParentForeigner] = useState(false); // State สำหรับเก็บข้อมูลว่าเป็นคนต่างชาติหรือไม่
  const [whoAreParent, setParent] = useState('');

  const handleIsFatherRecordData = (event) => {
    setIsFatherRecordData(event.target.id === 'usedToRecordFatherData'); // ถ้าเลือก 'ใช่' ให้เป็น true, ถ้า 'ไม่' ให้เป็น false
  }; 

  const handleIsMotherRecordData = (event) => {
    setIsMotherRecordData(event.target.id === 'usedToRecordMotherData'); // ถ้าเลือก 'ใช่' ให้เป็น true, ถ้า 'ไม่' ให้เป็น false
  }; 

  const handleIsParentRecordData = (event) => {
    setIsParentRecordData(event.target.id === 'usedToRecordParentData'); // ถ้าเลือก 'ใช่' ให้เป็น true, ถ้า 'ไม่' ให้เป็น false
  }; 

  const handleIsFatherForeigner = (event) => {
    setIsFatherForeigner(event.target.id === 'FatherForeigner'); // ถ้าเลือก 'ใช่' ให้เป็น true, ถ้า 'ไม่' ให้เป็น false
  }; 

  const handleIsMotherForeigner = (event) => {
    setIsMotherForeigner(event.target.id === 'MotherForeigner');
  }; 

  const handleIsParentForeigner = (event) => {
    setIsParentForeigner(event.target.id === 'ParentForeigner');
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

  return (
    <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif'}}>
        <div className="row" style={{fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0',Height: '100vh'}}>
            <div className="col-sm d-flex align-items-center">
                    <label htmlFor="father_data" className="col-form-label">ข้อมูลบิดา</label>
                </div>
        </div>
            <br />
        <h2 className="col-sm d-flex align-items-center" style={{marginLeft: '15px',fontSize: '18px'}}>เคยบันทึกข้อมูลบิดาแล้วหรือไม่</h2>
        <h2 className="card-heading mb-0 mx-3" style={{ fontSize: '16px', color: 'red' ,marginTop:"5px"}}>
                    **เลือก ใช่ กรณีเคยบันทึกข้อมูลของตนสำหรับใช้สมัครเรียนให้บุตรหลานของท่าน
                </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '16px',marginLeft: '15px' ,marginTop:"5px"}}>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="usedToRecordFatherData?" id="usedToRecordFatherData" onChange={handleIsFatherRecordData} />
                    <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="usedToRecordFatherData">
                    ใช่
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="usedToRecordFatherData?" id="notYetRecordFatherData" onChange={handleIsFatherRecordData} />
                    <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="notYetRecordFatherData">
                    ไม่ใช่
                    </label>
                </div>
            </div>

        {isFatherRecordData ? (
            <>
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
                        <input type="text" className="form-control mb-0 mx-3" id="Father_Email" name="Father_Email" placeholder="กรอกอีเมลบิดา" />
                </div>
                </div>
            </>
        ) : (
            <>
            <br />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>

                    <div className="d-flex align-items-center">
                        <label htmlFor="father_surname" className="col-form-label">ชื่อ</label>
                    </div>
                    <div className="align-items-center" style={{maxWidth:"100%"}}>
                        <input type="text" className="form-control" id="father_surname" name="father_surname" placeholder="กรอกชื่อ" />
                        </div>
                    <div className="align-items-center">
                        <label htmlFor="father_lastname" className="col-form-label">นามสกุล</label>
                        </div>
                    <div className="align-items-center" style={{maxWidth:"100%"}}>
                        <input type="text" className="form-control" id="father_lastname" name="father_lastname" placeholder="กรอกนามสกุล" />
                        </div>
                    <div className="align-items-center">
                        <label htmlFor="father_age" className="col-form-label">อายุ</label>
                        </div>
                    <div className="d-flex align-items-center" style={{maxWidth:"100%"}}>
                        <input type="text" className="form-control" id="father_age" name="father_age" placeholder="กรอกอายุ" />
                        {/* </div>
                    <div className="align-items-center"> */}
                        <label htmlFor="year" className="col-form-label"style={{marginLeft: '15px'}}>ปี</label>
                    </div>
                </div>

               

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>

                    <h2 className="col-form-label" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px'}}>เป็นคนต่างชาติใช่หรือไม่</h2>
                    <div className="d-flex align-items-center"style={{ flexWrap: 'wrap'}}>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Fatherforeigner?" id="FatherForeigner" onChange={handleIsFatherForeigner} />
                            <label className="form-check-label custom-body"style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="FatherForeigner">
                            ใช่
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Fatherforeigner?" id="FatherNotForeigner" onChange={handleIsFatherForeigner} />
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
                        <div className="d-flex align-items-center">
                        <label htmlFor="father_Nationality" className="col-form-label">สัญชาติ</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>
                        <input type="text" className="form-control" id="father_Nationality" name="father_Nationality" placeholder="กรอกสัญชาติ" />
                        </div>
                        </>
                    )}
                </div>
                

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>
                
                        <div className="d-flex align-items-center">
                            <label htmlFor="father_Occupation" className="col-form-label">วุฒิการศึกษา</label>
                        </div>
                        <div class="h-screen flex flex-col justify-left sm:flex-row">
                        <div class="sm:w-1_3 sm:pr-3">
                            <div class="dropdown" style={{ maxWidth: '100%' }}> {/* กำหนดความกว้างของ dropdown ที่นี่ */}
                                <select value={selectedOption} onChange={handleSelectChange} class="custom-select w-full" > {/* กำหนดความกว้างของตัวเลือกใน dropdown ที่นี่ */}
                                    <option value="ระบุหมายเหตุ">ระบุวุฒิการศึกษา</option>
                                    <option value="เพื่อใช้ในการขอทุนการศึกษา">ปริญญาตรี</option>
                                    <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">ปริญญาโท</option>
                                    <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">ปริญญาเอก</option>
                                </select>
                            </div>
                        </div>
                        </div>
                        
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>
                        <div className="d-flex align-items-center">
                            <label htmlFor="father_Occupation" className="col-form-label">อาชีพ</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>       
                            <input type="text" className="form-control" id="father_Occupation" name="father_Occupation" placeholder="กรอกอาชีพ" />
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="father_Workplace" className="col-form-label">สถานที่ทำงาน</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="father_Workplace" name="father_Workplace" placeholder="กรอกสถานที่ทำงาน" />
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="father_phoneNumber" className="col-form-label">โทรศัพท์</label>
                            </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="father_phoneNumber" name="father_phoneNumber" placeholder="กรอกหมายเลขโทรศัพท์" />
                        </div>
                        
                </div>
            </>
        )}

        <br />
        <div className="row" style={{fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0',Height: '100vh'}}>
            <div className="col-sm d-flex align-items-center">
                    <label htmlFor="mother_data" className="col-form-label">ข้อมูลมารดา</label>
                </div>
            </div>

            <br></br>
            <h2 className="col-sm d-flex align-items-center" style={{marginLeft: '15px',fontSize: '18px'}}>เคยบันทึกข้อมูลมารดาแล้วหรือไม่</h2>
            <h2 className="card-heading mb-0 mx-3" style={{ fontSize: '16px', color: 'red' ,marginTop:"5px"}}>
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
            </div>

        {isMotherRecordData ? (
            <>
                <div style={{fontSize: '18px',marginTop:"5px"}}>
                    <div className="d-flex align-items-center"style={{flexWrap:"wrap"}}>
                        <label htmlFor="Mother_Email" className="col-form-label mb-0 mx-3">อีเมล</label>
                        <h2 className="card-heading mb-0 mx-3" style={{ fontSize: '16px', color: 'blue' }}>
                            (อีเมลที่ท่านกรอกนี้สามารถใช้ตรวจสอบข้อมูลนักเรียนของโรงเรียนซึ่งเป็นบุตรหลานของท่าน)
                        </h2>
                    </div>
                    <div className="align-items-center"style={{ marginTop: '5px',maxWidth:"65%"}}>  
                        <input type="text" className="form-control mb-0 mx-3" id="Mother_Email" name="Mother_Email" placeholder="กรอกอีเมลมารดา" />
                    </div>
                </div>
            </>
        ) : (
            <>
            <br></br>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>

                    <div className="d-flex align-items-center">
                        <label htmlFor="mother_surname" className="col-form-label">ชื่อ</label>
                    </div>
                    <div className="align-items-center" style={{maxWidth:"100%"}}>
                        <input type="text" className="form-control" id="mother_surname" name="mother_surname" placeholder="กรอกชื่อ" />
                        </div>
                    <div className="align-items-center">
                        <label htmlFor="mother_lastname" className="col-form-label">นามสกุล</label>
                        </div>
                    <div className="align-items-center" style={{maxWidth:"100%"}}>
                        <input type="text" className="form-control" id="mother_lastname" name="mother_lastname" placeholder="กรอกนามสกุล" />
                        </div>
                    <div className="align-items-center">
                        <label htmlFor="mother_age" className="col-form-label">อายุ</label>
                        </div>
                    <div className="d-flex align-items-center" style={{maxWidth:"100%"}}>
                        <input type="text" className="form-control" id="mother_age" name="mother_age" placeholder="กรอกอายุ" />
                        {/* </div>
                    <div className="align-items-center"> */}
                        <label htmlFor="year" className="col-form-label"style={{marginLeft: '15px'}}>ปี</label>
                    </div>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>

                    <h2 className="col-form-label" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px'}}>เป็นคนต่างชาติใช่หรือไม่</h2>
                    <div className="d-flex align-items-center"style={{ flexWrap: 'wrap'}} >
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Motherforeigner?" id="MotherForeigner" onChange={handleIsMotherForeigner} />
                            <label className="form-check-label custom-body"style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="MotherForeigner">
                            ใช่
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="Motherforeigner?" id="MotherNotForeigner" onChange={handleIsMotherForeigner} />
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
                        <input type="text" className="form-control" id="mother_Nationality" name="mother_Nationality" placeholder="กรอกสัญชาติ" />
                        </div>
                        </>
                    )}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>
                
                            <div className="d-flex align-items-center">
                                <label htmlFor="mother_Occupation" className="col-form-label">วุฒิการศึกษา</label>
                            </div>
                            <div class="h-screen flex flex-col justify-left sm:flex-row">
                                <div class="sm:w-1_3 sm:pr-3">
                                <div class="dropdown" style={{ maxWidth: '100%' }}> {/* กำหนดความกว้างของ dropdown ที่นี่ */}
                                    <select value={selectedOption} onChange={handleSelectChange} class="custom-select w-full"> {/* กำหนดความกว้างของตัวเลือกใน dropdown ที่นี่ */}
                                        <option value="ระบุหมายเหตุ">ระบุวุฒิการศึกษา</option>
                                        <option value="เพื่อใช้ในการขอทุนการศึกษา">ปริญญาตรี</option>
                                        <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">ปริญญาโท</option>
                                        <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">ปริญญาเอก</option>
                                    </select>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>
                        <div className="d-flex align-items-center">
                            <label htmlFor="mother_Occupation" className="col-form-label">อาชีพ</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>       
                            <input type="text" className="form-control" id="mother_Occupation" name="mother_Occupation" placeholder="กรอกอาชีพ" />
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="mother_Workplace" className="col-form-label">สถานที่ทำงาน</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="mother_Workplace" name="mother_Workplace" placeholder="กรอกสถานที่ทำงาน" />
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="mother_phoneNumber" className="col-form-label">โทรศัพท์</label>
                            </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="mother_phoneNumber" name="mother_phoneNumber" placeholder="กรอกหมายเลขโทรศัพท์" />
                        </div>
                        
                </div>
            </>
        )}

        <br></br>
        <div className="row" style={{fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0',Height: '100vh'}}>

            <div className="col-sm d-flex align-items-center">
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
            
                </div><br></br>

                {(whoAreParent === 'SomeoneElseIsParent') && (
                    <>
                        <h2 className="col-sm d-flex align-items-center" style={{marginLeft: '15px',fontSize: '18px'}}>เคยบันทึกข้อมูลผู้ปกครองแล้วหรือไม่</h2>
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
                        </div>

                        {isParentRecordData ? (
                    <>
                        <div style={{fontSize: '18px',marginTop:"5px"}}>
                            <div className="d-flex align-items-center">
                                <label htmlFor="Parent_Email" className="col-form-label mb-0 mx-3">อีเมล</label>
                                <h2 className="card-heading mb-0 mx-3" style={{ fontSize: '16px', color: 'blue' }}>
                                    (อีเมลที่ท่านกรอกนี้สามารถใช้ตรวจสอบข้อมูลนักเรียนของโรงเรียนซึ่งเป็นบุตรหลานของท่าน)
                                </h2>
                            </div>
                            <div className="align-items-center"style={{ marginTop: '5px',maxWidth:"65%"}}>  
                                <input type="text" className="form-control mb-0 mx-3" id="Parent_Email" name="Parent_Email" placeholder="กรอกอีเมลผู้ปกครอง" />
                            </div>
                        </div>
                    </>
                    ) : (
                    <> 
                    {/* //SomeoneElseIsParent */}
                    <br></br>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>

                        <div className="d-flex align-items-center">
                            <label htmlFor="SomeoneElseIsParent_surname" className="col-form-label">ชื่อ</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>
                            <input type="text" className="form-control" id="SomeoneElseIsParent_surname" name="SomeoneElseIsParent_surname" placeholder="กรอกชื่อ" />
                            </div>
                        <div className="align-items-center">
                            <label htmlFor="SomeoneElseIsParent_lastname" className="col-form-label">นามสกุล</label>
                            </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>
                            <input type="text" className="form-control" id="SomeoneElseIsParent_lastname" name="SomeoneElseIsParent_lastname" placeholder="กรอกนามสกุล" />
                            </div>
                        <div className="align-items-center">
                            <label htmlFor="SomeoneElseIsParent_age" className="col-form-label">อายุ</label>
                            </div>
                        <div className="d-flex align-items-center" style={{maxWidth:"100%"}}>
                            <input type="text" className="form-control" id="SomeoneElseIsParent_age" name="SomeoneElseIsParent_age" placeholder="กรอกอายุ" />
                            {/* </div>
                        <div className="align-items-center"> */}
                            <label htmlFor="year" className="col-form-label"style={{marginLeft: '15px'}}>ปี</label>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>

                        <h2 className="col-form-label" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px'}}>เป็นคนต่างชาติใช่หรือไม่</h2>
                        <div className="d-flex align-items-center"style={{ flexWrap: 'wrap'}}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="Parentforeigner?" id="ParentForeigner" onChange={handleIsParentForeigner} />
                                <label className="form-check-label custom-body"style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="ParentForeigner">
                                ใช่
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="Parentforeigner?" id="ParentNotForeigner" onChange={handleIsParentForeigner} />
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
                            <input type="text" className="form-control" id="parent_Nationality" name="parent_Nationality" placeholder="กรอกสัญชาติ" />
                            </div>
                            </>
                        )}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>
                
                            <div className="d-flex align-items-center">
                                <label htmlFor="Parent_Occupation" className="col-form-label">วุฒิการศึกษา</label>
                            </div>
                            <div class="h-screen flex flex-col justify-left sm:flex-row">
                                <div class="sm:w-1_3 sm:pr-3">
                                <div class="dropdown" style={{ maxWidth: '100%' }}> {/* กำหนดความกว้างของ dropdown ที่นี่ */}
                                    <select value={selectedOption} onChange={handleSelectChange} class="custom-select w-full"> {/* กำหนดความกว้างของตัวเลือกใน dropdown ที่นี่ */}
                                        <option value="ระบุหมายเหตุ">ระบุวุฒิการศึกษา</option>
                                        <option value="เพื่อใช้ในการขอทุนการศึกษา">ปริญญาตรี</option>
                                        <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">ปริญญาโท</option>
                                        <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">ปริญญาเอก</option>
                                    </select>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>
                        <div className="d-flex align-items-center">
                            <label htmlFor="Parent_Occupation" className="col-form-label">อาชีพ</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>       
                            <input type="text" className="form-control" id="Parent_Occupation" name="Parent_Occupation" placeholder="กรอกอาชีพ" />
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="Parent_Workplace" className="col-form-label">สถานที่ทำงาน</label>
                        </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="Parent_Workplace" name="Parent_Workplace" placeholder="กรอกสถานที่ทำงาน" />
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="SomeoneElseIsParent_phoneNumber" className="col-form-label">โทรศัพท์</label>
                            </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="SomeoneElseIsParent_phoneNumber" name="SomeoneElseIsParent_phoneNumber" placeholder="กรอกหมายเลขโทรศัพท์" />
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="Parent_Relation" className="col-form-label">เกี่ยวข้องเป็น</label>
                            </div>
                        <div className="align-items-center" style={{maxWidth:"100%"}}>   
                            <input type="text" className="form-control" id="Parent_Relation" name="Parent_Relation" placeholder="กรอกความเกี่ยวข้องกับผู้สมัคร" />
                        </div>
                        
                </div>
            
                    </>
                    )}
                </>
                )}
                
                <br></br>

    </div>
  );
}

export default ParentsInfo;
