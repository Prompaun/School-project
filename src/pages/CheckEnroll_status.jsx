import React from 'react'
import { Link } from 'react-router-dom';
import logoImage from '../images/IMG_5416.png';
import Header from '../components/Header';

function CheckEnroll_status() {
    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };

  return (
    <><nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {/* Logo and School Name */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            <h5 style={{ textAlign: 'right', marginLeft: '10px', marginBottom: '0' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h5>
          </div>
        </Link>
        <div className="nav navbar-nav navbar-right">
          <span className='nav-link'>
          <Link
                // onClick={handleGoBack}
                to = "/NewUser_menu"
                style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                เลือกเมนู
              </Link>
          </span>
        </div>
      </div>
    </nav>
    
  <Header header="ระบบรับสมัครนักเรียนแบบออนไลน์" subhead="เพื่อเข้าศึกษาระดับประถมศึกษาปีที่ 1" />
  
  <br></br>
  <br></br>
  <div className="d-flex align-items-center justify-content-center">
          <h2 className="ms-3 mb-0">ข้อมูลการสมัคร</h2>
        </div>
        <br></br>
    <div className="card w-50 mx-auto">
    <div className="card-body">
        <div class="form-group col-md-15 fone"style={{ padding: '10px', margin: '10px',whiteSpace: "nowrap" }}>
        
        
        <div class="d-flex align-items-center">
            <h2 class="card-heading px-3" style={{fontSize: '18px',fontWeight: 'bold'}}>ชื่อ-นามสกุล</h2>
            <h2 class="card-heading px-3" style={{fontSize: '18px'}}>เด็กหญิงใจดี รักสงบ</h2>

            <h2 class="card-heading px-3" style={{fontSize: '18px',fontWeight: 'bold'}}>เลขประจำตัวประชาชน</h2>
            <h2 class="card-heading px-3" style={{fontSize: '16px'}}>X-XXXX-XXXXX-XX-X</h2>
        </div>
        <br></br>
                      
          
            <div className="row" style={{ fontFamily: 'Kanit, sans-serif', marginRight: '10px', gap: '0',whiteSpace: "nowrap" }}>
                <div className="col-sm d-flex align-items-center">
                <h2 class="card-heading px-3" style={{fontSize: '18px',fontWeight: 'bold'}}>ปีการศึกษา</h2>
                <h2 class="card-heading px-4" style={{fontSize: '18px'}}>XXXX</h2>   
                
                <h2 class="card-heading px-3" style={{fontSize: '18px',fontWeight: 'bold'}}>หลักสูตร</h2>
                <h2 class="card-heading px-3" style={{fontSize: '18px'}}>English Program (EP)</h2>
                </div>
            </div>
            <br/>
            <div className="row" style={{ fontFamily: 'Kanit, sans-serif', marginRight: '10px', gap: '0',whiteSpace: "nowrap" }}>
                <div className="col-sm d-flex align-items-center">
                <h2 class="card-heading px-3" style={{fontSize: '18px',fontWeight: 'bold'}}>เลขที่สมัคร</h2>
                <h2 class="card-heading px-4" style={{fontSize: '18px'}}>XXXX</h2>   
              
               
                <h2 class="card-heading px-3" style={{fontSize: '18px',fontWeight: 'bold'}}>สถานะ</h2>
                <h2 class="card-heading px-3" style={{fontSize: '18px'}}>รอการสอบคัดเลือก</h2>   
                </div>
            </div>
            <br></br>
            </div>
            {/* <button 
                type="button" 
                class="btn btn-primary float-end" 
                style={{  fontFamily: 'Kanit, sans-serif',textAlign: 'right', marginRight: '20px', marginLeft: '10px'}}
                onClick={() => {
                    const printWindow = window.open('', '', 'width=600,height=400');
                    printWindow.document.open();
                    printWindow.document.write(`
                        <html>
                        <head>
                            <title>พิมพ์บัตรประจำตัวผู้สอบ</title>
                        </head>
                        <body>
                            <!-- Your content to print goes here -->
                            <h1>ใบสมัครเข้าศึกษาต่อชั้นประถมศึกษาปีที่ 1 ปีการศึกษา XXXX</h1>
                            <p>This is the content you want to print.</p>
                        </body>
                        </html>
                    `);
                    printWindow.document.close();
                    printWindow.print();
                }}
            >
                <span>พิมพ์บัตรประจำตัวผู้สอบ</span>
            </button> */}
            <button 
                type="button" 
                class="btn btn-primary float-end" 
                style={{  fontFamily: 'Kanit, sans-serif',textAlign: 'right', marginRight: '20px', marginLeft: '10px'}}
                onClick={() => {
                    const fileUrl = "src/assets/พิมพ์ใบสมัครป.1.pdf";
                    const printWindow = window.open(fileUrl, "_blank", 'width=1000,height=800');
                    printWindow.print();
                }}
            >
                <span>พิมพ์บัตรประจำตัวผู้สอบ</span>
            </button>

            {/* <button 
                type="button" 
                class="btn btn-primary float-end" 
                style={{ fontFamily: 'Kanit, sans-serif', textAlign: 'right'}}
                onClick={() => {
                    setTimeout(() => {
                    const newWindow = window.open(" ", " ", "width=600,height=400");
                    if (newWindow) {
                        newWindow.open();
                        newWindow.document.write(`
                            <html>
                            <head>
                                <title>Print</title>
                            </head>
                            <body>
                                <!-- Your content to print goes here -->
                                <h1>Content to Print</h1>
                                <p>This is the content you want to print.</p>
                            </body>
                            </html>
                        `);
                        newWindow.document.close();
                    } else {
                        alert("Please allow pop-ups for this website to view the application form.");
                    }
                }, 100);
                }}
            >
                <span>ดูใบสมัคร</span>
            </button> */}
        </div>
        </div>
        <br></br>
        <br></br>
  </>
  )
}

export default CheckEnroll_status