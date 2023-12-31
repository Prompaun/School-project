import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import DatePicker, { registerLocale } from "react-datepicker";
import th from "date-fns/locale/th"; // the locale you want
registerLocale("th", th); // register it with the name you want
import 'react-datepicker/dist/react-datepicker.css';

function NewStudent_info() {
    const [startDate, setStartDate] = useState(new Date());
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1989 }, (_, index) => 1990 + index);
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

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
    <div class="form-group col-md-15 fone">
        

        <div className="row" style={{ fontFamily: 'Kanit, sans-serif',fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0'}}>
            <div className="col-sm d-flex align-items-center">
                <label htmlFor="surname" className="col-form-label mb-0 mx-3">ข้อมูลส่วนตัวของนักเรียน</label>
            </div>
        </div>
        <br></br>

        <h2 class="card-heading px-3"style={{ fontSize: '16px'}}>หมายเหตุ : รูปถ่ายต้องถ่ายไว้ไม่เกิน 6 เดือน</h2>
        <div className="row" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px', marginRight: '5px', gap: '0'}}>
                <div className="col-sm d-flex align-items-center">
                {/* <input type="file" class="form-control px-4" id="customFile" /> */}
                <label htmlFor="surname" className="col-form-label mb-0 mx-3">รูปนักเรียน</label>
                <input type="file" className="form-control px-3" onChange={handleFileUpload} accept=".pdf, .jpg, .jpeg, .png" />
                <br />
            </div>
        </div>
        <br></br>

        <div class="d-flex align-items-center">
            <h2 class="card-heading px-3" style={{fontSize: '18px'}}>เลขประจำตัวประชาชน</h2>
            <h2 class="card-heading px-3" style={{fontSize: '16px'}}>X-XXXX-XXXXX-XX-X</h2>
        </div>
        <br></br>

        <div class="d-flex align-items-center">
            <h2 class="card-heading px-3" style={{fontSize: '18px'}}>คำนำหน้า</h2>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="male" />
                <label class="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} for="male">
                    เด็กชาย
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" id="female" />
                <label class="form-check-label custom-body" style={{ fontSize: '16px',marginRight: '10px' }} for="female">
                    เด็กหญิง
                </label>
            </div>
        </div>      
        <br></br>
          
        <div className="row" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px', marginRight: '10px', gap: '0' }}>
            <div className="col-sm d-flex align-items-center">
                <label htmlFor="surname" className="col-form-label mb-0 mx-3">ชื่อ</label>
                <input type="text" className="form-control" id="surname" name="surname" placeholder="กรอกชื่อ" />
            </div>
            <div className="col-sm d-flex align-items-center">
                <label htmlFor="lastname" className="col-form-label mb-0 mx-3">นามสกุล</label>
                <input type="text" className="form-control" id="lastname" name="lastname" placeholder="กรอกนามสกุล" />
            </div>
        </div>
        <br></br>

        <div className="row" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px', marginRight: '5px', gap: '0' }}>
            <div className="col-sm d-flex align-items-center">
                <h2 htmlFor="surname" className="col-form-label mb-0 mx-3">วัน/เดือน/ปีเกิด</h2>
                    
                <DatePicker locale="th"
                    dateFormat="dd/MM/yyyy"
                    renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                    }) => (
                        <div
                        style={{
                            margin: 10,
                            display: "flex",
                            justifyContent: "center",
                            fontFamily: 'Kanit, sans-serif'
                        }}
                        >
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                            {"<"}
                        </button>
                        <select
                                    value={date.getFullYear()}
                                    onChange={({ target: { value } }) => changeYear(value)}
                                >
                                    {years.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    value={months[date.getMonth()]}  
                                    onChange={({ target: { value } }) =>
                                        changeMonth(months.indexOf(value))
                                    }
                                >
                                    {months.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>

                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                            {">"}
                        </button>
                        </div>
                    )}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    />
            </div>
        </div>    
        <br />

        <div className="row" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px', marginRight: '5px', gap: '0'}}>
            <div className="d-flex align-items-center">
                <label htmlFor="CopyofStudentIDCard" className="col-form-label mb-0 mx-3">สำเนาสูติบัตร (ของนักเรียน)</label>
                {/* <input type="file" class="form-control px-4" id="customFile" /> */}
                <input type="file" className="form-control px-3" onChange={handleFileUpload} accept=".pdf, .jpg, .jpeg, .png" />
            </div>
        </div>
        <br />

        <div className="row" style={{ fontFamily: 'Kanit, sans-serif',fontWeight: 'bold', fontSize: '20px', marginRight: '5px', gap: '0'}}>
            <div className="col-sm d-flex align-items-center">
                <label htmlFor="surname" className="col-form-label mb-0 mx-3">ข้อมูลการศึกษา</label>
            </div>
        </div>

        <h2 htmlFor="surname" className="col-form-label mb-0 mx-3" style={{ fontFamily: 'Kanit, sans-serif', fontSize: '18px', marginRight: '5px', gap: '0'}}>หลักฐานการศึกษาจากโรงเรียนเดิม</h2>
        
        <div className="d-flex align-items-center mb-3"style={{ fontFamily: 'Kanit, sans-serif', fontSize: '16px', marginRight: '5px', gap: '0'}}>
            <div className="form-check mx-3">
                <input className="form-check-input" type="radio" name="selectedOption" id="option1" value="ปพ.1" />
                <label className="form-check-label" htmlFor="option1">
                    ปพ.1
                </label>
            </div>

            <div className="form-check mx-3">
                <input className="form-check-input" type="radio" name="selectedOption" id="option2" value="ปพ.6" />
                <label className="form-check-label" htmlFor="option2">
                    ปพ.6
                </label>
            </div>

            <div className="form-check mx-3">
                <input className="form-check-input" type="radio" name="selectedOption" id="option3" value="ปพ.7" />
                <label className="form-check-label" htmlFor="option3">
                    ปพ.7
                </label>
            </div>

            <div className="form-check mx-3">
                <input className="form-check-input" type="radio" name="selectedOption" id="option4" value="ปพ.8" />
                <label className="form-check-label" htmlFor="option4">
                    ปพ.8
                </label>
            </div>
            {/* <input type="file" class="form-control px-4 mb-0 mx-3" id="customFile" /> */}
            <input type="file" className="form-control px-3" onChange={handleFileUpload} accept=".pdf, .jpg, .jpeg, .png" />
        </div>
    </div>
    <br/>
    {/* <Link >
        <button type="submit" class="btn btn-primary float-end mb-0 mx-3" style={{fontFamily: 'Kanit, sans-serif', textAlign: 'right'}}><span>ถัดไป</span></button>
    </Link> */}
      </>
  )
}

export default NewStudent_info