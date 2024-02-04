import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Date_Picker from '../components/Date_Picker';

function NewStudent_info() {
    

    const allowedFileTypes = ['.pdf', '.jpg', '.jpeg', '.png'];

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const fileType = '.' + file.name.split('.').pop().toLowerCase();
        if (allowedFileTypes.includes(fileType)) {
          // ไฟล์ถูกต้อง ทำตามต้องการทำ
        } else {
          alert('กรุณาเลือกไฟล์ที่มีนามสกุล .pdf, .jpg, .jpeg หรือ .png เท่านั้น');
          // ไม่อนุญาตให้อัพโหลดไฟล์ที่มีนามสกุลไม่ถูกต้อง
          event.target.value = ''; // ล้างค่า input file ให้ว่าง
        }
      }
    };
    
  return (
    <>
        
    <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif'}}>
        <div className="row" style={{fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0',Height: '100vh'}}>
            <div className="col-sm d-flex align-items-center">
                <label htmlFor="surname" className="col-form-label">ข้อมูลส่วนตัวของนักเรียน</label>
            </div>
        </div>
        <br></br>

        <h2 className="col-sm d-flex align-items-center"style={{ marginLeft: '15px',fontSize: '16px'}}>หมายเหตุ : รูปถ่ายต้องถ่ายไว้ไม่เกิน 6 เดือน</h2>
        
        <div style={{fontSize: '18px'}}>
                <div className="align-items-center">
                    <label htmlFor="surname" className="col-form-label px-3">รูปนักเรียน</label>
                </div>
                <div className="align-items-center"style={{marginLeft: '15px',maxWidth:"50%"}}>
                    <input type="file" className="form-control" onChange={handleFileUpload} accept=".pdf, .jpg, .jpeg, .png" />   
                </div>
        </div>
        <br></br>

        <div style={{fontSize: '18px'}}>
            <div className="align-items-center">
                <label htmlFor="student_nid" className="col-form-label px-3">เลขประจำตัวประชาชน</label>
            </div> 
            <div className="align-items-center"style={{ marginLeft: '15px',maxWidth:"50%"}}>    
                <input type="text" className="form-control px-3" id="student_nid" name="student_nid" placeholder="กรอกเลขประจำตัวประชาชน" />
            </div>
        </div>
        <br></br>

       
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '16px',marginLeft: '15px' }}>
        <h2 class="card-heading" style={{fontSize: '18px'}}>คำนำหน้า</h2>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="male" />
                <label class="form-check-label custom-body" style={{fontSize: '16px', flexWrap: "wrap"}} for="male">
                    เด็กชาย
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="female" />
                <label class="form-check-label custom-body"style={{fontSize: '16px', flexWrap: "wrap"}} for="female">
                    เด็กหญิง
                </label>
            </div>
        </div>
    
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '18px',marginLeft: '15px' }}>
            <div className="d-flex align-items-center">
                <label htmlFor="surname" className="col-form-label"style={{flexWrap: 'wrap' }}>ชื่อ</label>
            </div>
            <div className="align-items-center" style={{maxWidth:"100%"}}>
                <input type="text" className="form-control" id="surname" name="surname" placeholder="กรอกชื่อ"/>
            </div>
            
            <div className="d-flex align-items-center">   
                <label htmlFor="lastname" className="col-form-label"style={{flexWrap: 'wrap' }}>นามสกุล</label>
            </div>
            <div className="align-items-center" style={{maxWidth:"100%"}}>    
                <input type="text" className="form-control" id="lastname" name="lastname" placeholder="กรอกนามสกุล" />
            </div>
            
        </div>
        <br></br>

        <div className="row" style={{fontSize: '18px', marginRight: '5px', gap: '0' }}>
            <div className="d-flex align-items-center">
                <h2 htmlFor="surname" className="col-form-label px-3">วัน/เดือน/ปีเกิด</h2>
            </div>
            <div className="align-items-center"style={{ marginLeft: '15px'}}>       
                    <Date_Picker />
            </div>   
            </div> 
        <br />

        <div style={{gap: '20px', fontFamily: 'Kanit, sans-serif', fontSize: '18px'}}>
            <div className="align-items-center">
                <label htmlFor="CopyofStudentIDCard" className="col-form-label px-3">สำเนาสูติบัตร (ของนักเรียน)</label>
            </div>
            <div className="align-items-center"style={{ marginLeft: '15px',maxWidth:"50%"}}>    
                <input type="file" className="form-control" onChange={handleFileUpload} accept=".pdf, .jpg, .jpeg, .png" />
            </div>
        </div>
        <br />

        <div className="row" style={{ fontFamily: 'Kanit, sans-serif',fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0'}}>
            <div className="col-sm d-flex align-items-center">
                <label htmlFor="surname" className="col-form-label">ข้อมูลการศึกษา</label>
            </div>
        </div>

        <h2 htmlFor="surname" className="col-form-label mb-0 mx-3" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px', marginRight: '5px', gap: '0'}}>หลักฐานการศึกษาจากโรงเรียนเดิม</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '16px',marginLeft: '15px' }}>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="selectedOption" id="option1" value="ปพ.1"/>
                <label className="form-check-label" htmlFor="option1">
                    ปพ.1
                </label>
            </div>
        
            <div className="form-check">
                <input className="form-check-input" type="radio" name="selectedOption" id="option2" value="ปพ.6" />
                <label className="form-check-label" htmlFor="option2">
                    ปพ.6
                </label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="selectedOption" id="option3" value="ปพ.7" />
                <label className="form-check-label" htmlFor="option3">
                    ปพ.7
                </label>
            </div>
           
            <div className="form-check">
                <input className="form-check-input" type="radio" name="selectedOption" id="option4" value="ปพ.8" />
                <label className="form-check-label" htmlFor="option4">
                    ปพ.8
                </label>
            </div>
              
        </div>
        <br></br> 
        <div className="align-items-center" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px', marginLeft: '15px',maxWidth:"50%"}}>
                <input type="file" className="form-control px-3" onChange={handleFileUpload} accept=".pdf, .jpg, .jpeg, .png" />
            </div>
   
    <br/>
    
    </div>
      </>
  )
}

export default NewStudent_info