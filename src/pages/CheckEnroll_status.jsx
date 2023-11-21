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
    
    {/* <br></br>
    <br></br> */}
    {/* <div className="d-flex align-items-center justify-content-center"> */}
    {/* <div class="container justify-content-center"> */}
    <div className="container mt-5 d-flex flex-column align-items-center">
        <h2 className="ms-3 mb-0">ข้อมูลการสมัคร</h2>
    </div>
    <br></br>
    {/* <div class="container-fluid" style={{ textAlign: 'center' }}>
        <div class="card mx-auto my-0" style={{ width: "800px" }}>  
            <div className="card-body"> */}
    {/* <div class="container-fluid" style={{ textAlign: 'center' }}>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card mx-auto my-0">  
                <div className="card-body">
                <div class="form-group col-md-0 fone"style={{ padding: '10px', margin: '10px',whiteSpace: "nowrap" }}>

                <div class="d-flex align-items-center">
                    <h2 class="card-heading px-1" style={{fontSize: '18px',fontWeight: 'bold'}}>ชื่อ-นามสกุล</h2>
                    <h2 class="card-heading px-3" style={{fontSize: '18px'}}>เด็กหญิงใจดี รักสงบ</h2>

                    <h2 class="card-heading px-3" style={{fontSize: '18px',fontWeight: 'bold'}}>เลขประจำตัวประชาชน</h2>
                    <h2 class="card-heading px-3" style={{fontSize: '16px'}}>X-XXXX-XXXXX-XX-X</h2>
                </div>
                <br></br>
                        
            
                <div className="row" style={{ fontFamily: 'Kanit, sans-serif', marginRight: '10px', gap: '0',whiteSpace: "nowrap" }}>
                    <div className="col-sm d-flex align-items-center">
                    <h2 class="card-heading px-1" style={{fontSize: '18px',fontWeight: 'bold'}}>ปีการศึกษา</h2>
                    <h2 class="card-heading px-4" style={{fontSize: '18px'}}>XXXX</h2>   
                    
                    <h2 class="card-heading px-3" style={{fontSize: '18px',fontWeight: 'bold'}}>หลักสูตร</h2>
                    <h2 class="card-heading px-3" style={{fontSize: '18px'}}>English Program (EP)</h2>
                    </div>
                </div>
                <br/>
                <div className="row" style={{ fontFamily: 'Kanit, sans-serif', marginRight: '10px', gap: '0',whiteSpace: "nowrap" }}>
                    <div className="col-sm d-flex align-items-center">
                    <h2 class="card-heading px-1" style={{fontSize: '18px',fontWeight: 'bold'}}>เลขที่สมัคร</h2>
                    <h2 class="card-heading px-4" style={{fontSize: '18px'}}>XXXX</h2>   
                
                
                    <h2 class="card-heading px-3" style={{fontSize: '18px',fontWeight: 'bold'}}>สถานะ</h2>
                    <h2 class="card-heading px-3" style={{fontSize: '18px'}}>รอการสอบคัดเลือก</h2>   
                    </div>
                </div>
                <br></br>
                </div>
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
                </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* <div className="container-fluid" style={{ textAlign: 'center' }}>
  <div className="row justify-content-center">
    <div className="col-md-0"> */}
      <div className="card mx-auto my-0"  style={{ width: "820px"}}>
        <div className="card-body">
          <div className="form-group col-md-0 fone" style={{ padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>

            <div className="d-flex align-items-center">
              <h2 className="card-heading px-2" style={{ fontSize: '18px', fontWeight: 'bold' }}>ชื่อ-นามสกุล</h2>
              <h2 className="card-heading px-3" style={{ fontSize: '18px' }}>เด็กหญิงใจดี รักสงบ</h2>

              <h2 className="card-heading px-3" style={{ fontSize: '18px', fontWeight: 'bold' }}>เลขประจำตัวประชาชน</h2>
              <h2 className="card-heading px-3" style={{ fontSize: '16px' }}>X-XXXX-XXXXX-XX-X</h2>
            </div>
            <br />

            <div className="row" style={{ fontFamily: 'Kanit, sans-serif', gap: '0', whiteSpace: "nowrap" }}>
              <div className="col-sm d-flex align-items-center">
                <h2 className="card-heading px-2" style={{ fontSize: '18px', fontWeight: 'bold' }}>ปีการศึกษา</h2>
                <h2 className="card-heading px-4" style={{ fontSize: '18px' }}>XXXX</h2>

                <h2 className="card-heading px-3" style={{ fontSize: '18px', fontWeight: 'bold' }}>หลักสูตร</h2>
                <h2 className="card-heading px-3" style={{ fontSize: '18px' }}>English Program (EP)</h2>
              </div>
            </div>
            <br />
            <div className="row" style={{ fontFamily: 'Kanit, sans-serif', gap: '0', whiteSpace: "nowrap" }}>
              <div className="col-sm d-flex align-items-center">
                <h2 className="card-heading px-2" style={{ fontSize: '18px', fontWeight: 'bold' }}>เลขที่สมัคร</h2>
                <h2 className="card-heading px-4" style={{ fontSize: '18px' }}>XXXX</h2>

                <h2 className="card-heading px-3" style={{ fontSize: '18px', fontWeight: 'bold' }}>สถานะ</h2>
                <h2 className="card-heading px-3" style={{ fontSize: '18px' }}>รอการสอบคัดเลือก</h2>
              </div>
            </div>
            {/* <br /> */}
          </div>
          <button
            type="button"
            className="btn btn-primary float-end"
            style={{ fontFamily: 'Kanit, sans-serif', textAlign: 'right', marginRight: '20px', marginLeft: '10px' }}
            onClick={() => {
              const fileUrl = "src/assets/พิมพ์ใบสมัครป.1.pdf";
              const printWindow = window.open(fileUrl, "_blank", 'width=1000,height=800');
              printWindow.print();
            }}
          >
            <span>พิมพ์บัตรประจำตัวผู้สอบ</span>
          </button>
        </div>
      </div>
    {/* </div>
  </div>
</div> */}

        <br></br>
        <br></br>
  </>
  )
}

export default CheckEnroll_status