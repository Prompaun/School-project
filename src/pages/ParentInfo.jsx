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
    <div>
        <div className="row" style={{ fontFamily: 'Kanit, sans-serif',fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0'}}>
            <div className="col-sm d-flex align-items-center">
                    <label htmlFor="father_data" className="col-form-label mb-0 mx-2">ข้อมูลบิดา</label>
                </div>
        </div>

        <br></br>
            <div className="d-flex align-items-center" style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                <h2 className="card-heading mb-0 mx-2" style={{fontSize: '16px'}}>เคยบันทึกข้อมูลบิดาแล้วหรือไม่</h2>
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
                <h2 className="card-heading mb-0 mx-2" style={{ fontSize: '16px', color: 'red' }}>
                    **เลือก ใช่ กรณีเคยบันทึกข้อมูลของตนสำหรับใช้สมัครเรียนให้นักเรียน
                </h2>
            </div>
           

        {isFatherRecordData ? (
            <>
                <br />
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                    <div className="col-sm-4 d-flex align-items-center">
                        <label htmlFor="Father_Email" className="col-form-label mb-0 mx-2">อีเมล</label>
                        <input type="text" className="form-control" id="Father_Email" name="Father_Email" placeholder="กรอกอีเมลบิดา" />
                    </div>
                    <h2 className="card-heading mb-0 mx-2" style={{ fontSize: '16px', color: 'blue' }}>
                        (อีเมลที่ท่านกรอกนี้สามารถใช้ตรวจสอบข้อมูลนักเรียนของโรงเรียนซึ่งเป็นบุตรหลานของท่าน)
                    </h2>
                </div>
            </>
        ) : (
            <>
                <br />
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                    <div className="col-sm-4 d-flex align-items-center">
                        <label htmlFor="father_surname" className="col-form-label mb-0 mx-2">ชื่อ</label>
                        <input type="text" className="form-control" id="father_surname" name="father_surname" placeholder="กรอกชื่อ" />
                    </div>
                    <div className="col-sm-4 d-flex align-items-center">
                        <label htmlFor="father_lastname" className="col-form-label mb-0 mx-2">นามสกุล</label>
                        <input type="text" className="form-control" id="father_lastname" name="father_lastname" placeholder="กรอกนามสกุล" />
                    </div>
                    <div className="col-sm-3 d-flex align-items-center">
                        <label htmlFor="father_age" className="col-form-label mb-0 mx-2">อายุ</label>
                        <input type="text" className="form-control" id="father_age" name="father_age" placeholder="กรอกอายุ" />
                        <label htmlFor="year" className="col-form-label mb-0 mx-3">ปี</label>
                    </div>
                </div>

                <br />

                <div className="d-flex align-items-center" style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                    <h2 className="card-heading mb-0 mx-2" style={{fontSize: '16px'}}>เป็นคนต่างชาติใช่หรือไม่</h2>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Fatherforeigner?" id="FatherForeigner" onChange={handleIsFatherForeigner} />
                        <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="FatherForeigner">
                        ใช่
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="Fatherforeigner?" id="FatherNotForeigner" onChange={handleIsFatherForeigner} />
                        <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="FatherNotForeigner">
                        ไม่
                        </label>
                    </div>

                    {/* ใช้เงื่อนไขเพื่อตรวจสอบว่าถ้าเป็นคนต่างชาติให้แสดงส่วนของสัญชาติ */}
                    {isFatherForeigner && (
                        <div className="col-sm-4 d-flex align-items-center">
                        <label htmlFor="father_Nationality" className="col-form-label mb-0 mx-2">สัญชาติ</label>
                        <input type="text" className="form-control" id="father_Nationality" name="father_Nationality" placeholder="กรอกสัญชาติ" />
                        </div>
                    )}
                </div>
                <br></br>

                <div class="h-screen flex justify-center items-center flex-col bg-gray-900" >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px' }}>
                        <div className="col-sm-0 d-flex align-items-center">
                            <label htmlFor="father_Occupation" className="col-form-label mb-0 mx-2">วุฒิการศึกษา</label>
                            <div class="dropdown px-0" style={{ width: '150px' }}> {/* กำหนดความกว้างของ dropdown ที่นี่ */}
                                <select value={selectedOption} onChange={handleSelectChange} class="custom-select" style={{ width: '150px' }}> {/* กำหนดความกว้างของตัวเลือกใน dropdown ที่นี่ */}
                                    <option value="ระบุหมายเหตุ">ระบุวุฒิการศึกษา</option>
                                    <option value="เพื่อใช้ในการขอทุนการศึกษา">ปริญญาตรี</option>
                                    <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">ปริญญาโท</option>
                                    <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">ปริญญาเอก</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex align-items-center">
                            <label htmlFor="father_Occupation" className="col-form-label mb-0 mx-2">อาชีพ</label>
                            <input type="text" className="form-control" id="father_Occupation" name="father_Occupation" placeholder="กรอกอาชีพ" />
                        </div>
                        <div className="col-sm-4 d-flex align-items-center" style={{ marginRight: '3px'}}>
                            <label htmlFor="father_Workplace" className="col-form-label mb-0 mx-2">สถานที่ทำงาน</label>
                            <input type="text" className="form-control" id="father_Workplace" name="father_Workplace" placeholder="กรอกสถานที่ทำงาน" />
                        </div>
                    </div>
                </div>

                <br></br>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                    <div className="col-sm-0 d-flex align-items-center">
                        <label htmlFor="father_phoneNumber" className="col-form-label mb-0 mx-2">โทรศัพท์</label>
                        <input type="text" className="form-control" id="father_phoneNumber" name="father_phoneNumber" placeholder="กรอกหมายเลขโทรศัพท์" />
                    </div>
                </div>
            </>
        )}

        <br />
        <div className="row" style={{ fontFamily: 'Kanit, sans-serif',fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0'}}>
            <div className="col-sm d-flex align-items-center">
                    <label htmlFor="mother_data" className="col-form-label mb-0 mx-2">ข้อมูลมารดา</label>
                </div>
            </div>

            <br></br>
            <div className="d-flex align-items-center" style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                <h2 className="card-heading mb-0 mx-2" style={{fontSize: '16px'}}>เคยบันทึกข้อมูลมารดาแล้วหรือไม่</h2>
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
                <h2 className="card-heading mb-0 mx-2" style={{ fontSize: '16px', color: 'red' }}>
                    **เลือก ใช่ กรณีเคยบันทึกข้อมูลของตนสำหรับใช้สมัครเรียนให้นักเรียน
                </h2>
            </div>

        {isMotherRecordData ? (
            <>
                <br />
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                    <div className="col-sm-4 d-flex align-items-center">
                        <label htmlFor="Mother_Email" className="col-form-label mb-0 mx-2">อีเมล</label>
                        <input type="text" className="form-control" id="Mother_Email" name="Mother_Email" placeholder="กรอกอีเมลมารดา" />
                    </div>
                    <h2 className="card-heading mb-0 mx-2" style={{ fontSize: '16px', color: 'blue' }}>
                        (อีเมลที่ท่านกรอกนี้สามารถใช้ตรวจสอบข้อมูลนักเรียนของโรงเรียนซึ่งเป็นบุตรหลานของท่าน)
                    </h2>
                </div>
            </>
        ) : (
            <>
            <br></br>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                <div className="col-sm-4 d-flex align-items-center">
                    <label htmlFor="mother_surname" className="col-form-label mb-0 mx-2">ชื่อ</label>
                    <input type="text" className="form-control" id="mother_surname" name="mother_surname" placeholder="กรอกชื่อ" />
                </div>
                <div className="col-sm-4 d-flex align-items-center">
                    <label htmlFor="mother_lastname" className="col-form-label mb-0 mx-2">นามสกุล</label>
                    <input type="text" className="form-control" id="mother_lastname" name="mother_lastname" placeholder="กรอกนามสกุล" />
                </div>
                <div className="col-sm-3 d-flex align-items-center">
                    <label htmlFor="mother_age" className="col-form-label mb-0 mx-2">อายุ</label>
                    <input type="text" className="form-control" id="mother_age" name="mother_age" placeholder="กรอกอายุ" />
                    <label htmlFor="year" className="col-form-label mb-0 mx-3">ปี</label>
                </div>
            </div>

            <br></br>
            <div className="d-flex align-items-center" style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                <h2 className="card-heading mb-0 mx-2" style={{fontSize: '16px'}}>เป็นคนต่างชาติใช่หรือไม่</h2>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="Motherforeigner?" id="MotherForeigner" onChange={handleIsMotherForeigner} />
                    <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="MotherForeigner">
                    ใช่
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="Motherforeigner?" id="MotherNotForeigner" onChange={handleIsMotherForeigner} />
                    <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="MotherNotForeigner">
                    ไม่
                    </label>
                </div>

                {isMotherForeigner && (
                    <div className="col-sm-4 d-flex align-items-center">
                    <label htmlFor="father_Nationality" className="col-form-label mb-0 mx-2">สัญชาติ</label>
                    <input type="text" className="form-control" id="father_Nationality" name="father_Nationality" placeholder="กรอกสัญชาติ" />
                    </div>
                )}
                </div>
            <br></br>

            <div class="h-screen flex justify-center items-center flex-col bg-gray-900" >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px' }}>
                    <div className="col-sm-0 d-flex align-items-center">
                        <label htmlFor="mother_Occupation" className="col-form-label mb-0 mx-2">วุฒิการศึกษา</label>
                        <div class="dropdown px-0" style={{ width: '150px' }}> 
                            <select value={selectedOption} onChange={handleSelectChange} class="custom-select" style={{ width: '150px' }}>
                                <option value="ระบุวุฒิการศึกษา">ระบุวุฒิการศึกษา</option>
                                <option value="ปริญญาตรี">ปริญญาตรี</option>
                                <option value="ปริญญาโท">ปริญญาโท</option>
                                <option value="ปริญญาเอก">ปริญญาเอก</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex align-items-center">
                        <label htmlFor="mother_Occupation" className="col-form-label mb-0 mx-2">อาชีพ</label>
                        <input type="text" className="form-control" id="mother_Occupation" name="mother_Occupation" placeholder="กรอกอาชีพ" />
                    </div>
                    <div className="col-sm-4 d-flex align-items-center" style={{ marginRight: '3px'}}>
                        <label htmlFor="mother_Workplace" className="col-form-label mb-0 mx-2">สถานที่ทำงาน</label>
                        <input type="text" className="form-control" id="mother_Workplace" name="mother_Workplace" placeholder="กรอกสถานที่ทำงาน" />
                    </div>
                </div>
            </div>
                <br></br>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                    <div className="col-sm-0 d-flex align-items-center">
                        <label htmlFor="mother_phoneNumber" className="col-form-label mb-0 mx-2">โทรศัพท์</label>
                        <input type="text" className="form-control" id="mother_phoneNumber" name="mother_phoneNumber" placeholder="กรอกหมายเลขโทรศัพท์" />
                    </div>
                </div>
            </>
        )}

        <br></br>
        <div className="row" style={{ fontFamily: 'Kanit, sans-serif',fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0'}}>
            <div className="col-sm d-flex align-items-center">
                <label htmlFor="parents_data" className="col-form-label mb-0 mx-2">ข้อมูลผู้ปกครอง</label>
            </div>
        </div>

            <br></br>
            <div className="d-flex align-items-center" style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                <h2 className="card-heading mb-0 mx-2" style={{fontSize: '16px'}}>ผู้ปกครองเป็น</h2>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="whoAreParent?" id="FatheIsParent" onChange={handlewhoAreParent} />
                    <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="FatheIsParent">
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
                    <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="FatherAndMotherAreParent">
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
                        <div className="d-flex align-items-center" style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                            <h2 className="card-heading mb-0 mx-2" style={{fontSize: '16px'}}>เคยบันทึกข้อมูลผู้ปกครองแล้วหรือไม่</h2>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="usedToRecordParentData?" id="usedToRecordParentData" onChange={handleIsParentRecordData} />
                                <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="usedToRecordFParentData">
                                ใช่
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="usedToRecordParentData?" id="notYetRecordParentData" onChange={handleIsParentRecordData} />
                                <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="notYetRecordParentData">
                                ไม่ใช่
                                </label>
                            </div>
                            <h2 className="card-heading mb-0 mx-2" style={{ fontSize: '16px', color: 'red' }}>
                                **เลือก ใช่ กรณีเคยบันทึกข้อมูลของตนสำหรับใช้สมัครเรียนให้นักเรียน
                            </h2>
                        </div>

                        {isParentRecordData ? (
                    <>
                        <br />
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                            <div className="col-sm-4 d-flex align-items-center">
                                <label htmlFor="Parent_Email" className="col-form-label mb-0 mx-2">อีเมล</label>
                                <input type="text" className="form-control" id="Parent_Email" name="Parent_Email" placeholder="กรอกอีเมลผู้ปกครอง" />
                            </div>
                            <h2 className="card-heading mb-0 mx-2" style={{ fontSize: '16px', color: 'blue' }}>
                                (อีเมลที่ท่านกรอกนี้สามารถใช้ตรวจสอบข้อมูลนักเรียนของโรงเรียนซึ่งเป็นบุตรหลานของท่าน)
                            </h2>
                        </div>
                    </>
                    ) : (
                    <>
                        <br></br>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                            <div className="col-sm-4 d-flex align-items-center">
                                <label htmlFor="SomeoneElseIsParent_surname" className="col-form-label mb-0 mx-2">ชื่อ</label>
                                <input type="text" className="form-control" id="SomeoneElseIsParent_surname" name="SomeoneElseIsParent_surname" placeholder="กรอกชื่อ" />
                            </div>
                            <div className="col-sm-4 d-flex align-items-center">
                                <label htmlFor="SomeoneElseIsParent_lastname" className="col-form-label mb-0 mx-2">นามสกุล</label>
                                <input type="text" className="form-control" id="SomeoneElseIsParent_lastname" name="SomeoneElseIsParent_lastname" placeholder="กรอกนามสกุล" />
                            </div>
                            <div className="col-sm-3 d-flex align-items-center">
                                <label htmlFor="SomeoneElseIsParent_age" className="col-form-label mb-0 mx-2">อายุ</label>
                                <input type="text" className="form-control" id="SomeoneElseIsParent_age" name="SomeoneElseIsParent_age" placeholder="กรอกอายุ" />
                                <label htmlFor="year" className="col-form-label mb-0 mx-3">ปี</label>
                            </div>
                        </div>

                        {/* <br></br>
                        <div className="d-flex align-items-center" style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                            <h2 className="card-heading mb-0 mx-2" style={{fontSize: '16px'}}>เป็นคนต่างชาติใช่หรือไม่</h2>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="Parnetforeigner?" id="ParentForeigner" onChange={handleIsParentForeigner} />
                                <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="ParentForeigner">
                                ใช่
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="Parentforeigner?" id="ParentNotForeigner" onChange={handleIsParentForeigner} />
                                <label className="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} htmlFor="ParentNotForeigner">
                                ไม่
                                </label>
                            </div>

                            {isParentForeigner && (
                                <div className="col-sm-4 d-flex align-items-center">
                                    <label htmlFor="Parent_Nationality" className="col-form-label mb-0 mx-2">สัญชาติ</label>
                                    <input type="text" className="form-control" id="Parent_Nationality" name="Parent_Nationality" placeholder="กรอกสัญชาติ" />
                                </div>
                                )}
                            </div> */}
                        <br></br>

                        <div className="d-flex align-items-center" style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                            <h2 className="card-heading mb-0 mx-2" style={{fontSize: '16px'}}>เป็นคนต่างชาติใช่หรือไม่</h2>
                            {/* <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Parnetforeigner?"
                                    id="ParentForeigner"
                                    onChange={handleIsParentForeigner}
                                    checked={isParentForeigner}
                                />
                                <label className="form-check-label custom-body" style={{ fontSize: '16px', marginRight: '10px' }} htmlFor="ParentForeigner">
                                    ใช่
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Parentforeigner?"
                                    id="ParentNotForeigner"
                                    onChange={handleIsParentForeigner}
                                    checked={!isParentForeigner}
                                />
                                <label className="form-check-label custom-body" style={{ fontSize: '16px', marginRight: '10px' }} htmlFor="ParentNotForeigner">
                                    ไม่
                                </label>
                            </div> */}

                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Parnetforeigner?"
                                    id="ParentForeigner"
                                    onChange={handleIsParentForeigner}
                                    checked={isParentForeigner}
                                />
                                <label className="form-check-label custom-body" style={{ fontSize: '16px', marginRight: '10px' }} htmlFor="ParentForeigner">
                                    ใช่
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="Parentforeigner?"
                                    id="ParentNotForeigner"
                                    onChange={handleIsParentForeigner}
                                    checked={isParentForeigner === false}
                                />
                                <label className="form-check-label custom-body" style={{ fontSize: '16px', marginRight: '10px' }} htmlFor="ParentNotForeigner">
                                    ไม่
                                </label>
                            </div>

                            {isParentForeigner && (
                                <div className="col-sm-4 d-flex align-items-center">
                                    <label htmlFor="Parent_Nationality" className="col-form-label mb-0 mx-2">สัญชาติ</label>
                                    <input type="text" className="form-control" id="Parent_Nationality" name="Parent_Nationality" placeholder="กรอกสัญชาติ" />
                                </div>
                            )}
                        </div>

                        <br />
                        <div class="h-screen flex justify-center items-center flex-col bg-gray-900" >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px' }}>
                                <div className="col-sm-0 d-flex align-items-center">
                                    <label htmlFor="Parent_Occupation" className="col-form-label mb-0 mx-2">วุฒิการศึกษา</label>
                                    <div class="dropdown px-0" style={{ width: '150px' }}> 
                                        <select value={selectedOption} onChange={handleSelectChange} class="custom-select" style={{ width: '150px' }}>
                                            <option value="ระบุวุฒิการศึกษา">ระบุวุฒิการศึกษา</option>
                                            <option value="ปริญญาตรี">ปริญญาตรี</option>
                                            <option value="ปริญญาโท">ปริญญาโท</option>
                                            <option value="ปริญญาเอก">ปริญญาเอก</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-4 d-flex align-items-center">
                                    <label htmlFor="Parent_Occupation" className="col-form-label mb-0 mx-2">อาชีพ</label>
                                    <input type="text" className="form-control" id="Parent_Occupation" name="Parent_Occupation" placeholder="กรอกอาชีพ" />
                                </div>
                                <div className="col-sm-4 d-flex align-items-center" style={{ marginRight: '3px'}}>
                                    <label htmlFor="Parent_Workplace" className="col-form-label mb-0 mx-2">สถานที่ทำงาน</label>
                                    <input type="text" className="form-control" id="Parent_Workplace" name="Parent_Workplace" placeholder="กรอกสถานที่ทำงาน" />
                                </div>
                            </div>
                        </div>

                        <br></br>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
                            <div className="col-sm-0 d-flex align-items-center">
                                <label htmlFor="SomeoneElseIsParent_phoneNumber" className="col-form-label mb-0 mx-2">โทรศัพท์</label>
                                <input type="text" className="form-control" id="SomeoneElseIsParent_phoneNumber" name="SomeoneElseIsParent_phoneNumber" placeholder="กรอกหมายเลขโทรศัพท์" />
                            </div>
                        </div>                    
                    </>
                    )}
                </>
                )}
                
                <br></br>
                {/* <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontFamily: 'Kanit, sans-serif', fontSize: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button type="submit" className="btn btn-primary">ย้อนกลับ</button>
                    </div>
                    <Link to ="/NewUser_menu">
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button type="submit" className="btn btn-primary">ส่งข้อมูล</button>
                        </div>
                    </Link>

                </div> */}

    </div>
  );
}

export default ParentsInfo;
