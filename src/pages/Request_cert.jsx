import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Request_cert() {
    const [selectedOption, setSelectedOption] = useState('ระบุหมายเหตุ');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };
      
      return (
        <>
        {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="src\images\IMG_5416.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{ float: 'left', marginRight: '10px' }} />
            <span style={{  fontFamily: 'Kanit, sans-serif',marginLeft: '0px' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</span>
          </Link>
          <div className="nav navbar-nav navbar-right">
            <span className='nav-link'>
            <Link to='/Parent_menu' style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>เลือกเมนู</Link>
            </span>
          </div>
        </div>
      </nav>  */}
       
      
      <Header header="ระบบยื่นคำร้องขอใบรับรอง" subhead=""/>

      <div className="d-flex flex-column align-items-center"style={{ height: '100vh'}}>
        <div class="card my-5" style={{ maxWidth: '90%',Height: '100vh'}}>  
            <div class="card-body">
                <label class="card-heading px-3" style={{fontSize: '28px',fontWeight: 'bold'}}>เลือกประเภทใบรับรอง</label>
                <br></br>
                <br></br>
             {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '16px',marginLeft: '15px' }}> */}
                <div class="form-group col-md-15 fone">
                    <div class="form-check"style={{ marginLeft:"15px",marginBottom:"5px"}}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label custom-body" style={{ fontSize: '18px'}} for="flexCheckDefault">
                            กรณีขอใบรับรองการเป็นนักเรียน (ปพ.7)
                        </label>
                    </div>

                    <div className="mb-3 d-flex px-3">
                        <input
                            type="text"
                            className="form-control ml-3 px-3"
                            placeholder="จำนวน"
                            style={{maxWidth:"50%", fontFamily: 'Kanit, sans-serif'}}
                        />
                        <h5 className="ms-2 mt-2 custom-body" style={{ fontSize: '18px'}}>ฉบับ</h5>
                    </div>
                              
                    <div class="form-check"style={{ marginLeft:"15px",marginBottom:"5px"}}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                        <label class="form-check-label custom-body" style={{ fontSize: '18px'}} for="flexCheckChecked">
                            กรณีขอหนังสือรับรองผลการเรียนรายวิชา
                        </label>
                    </div>
                    
                    <div className="mb-3 d-flex px-3" >
                        <input
                            type="text"
                            className="form-control ml-3 px-3"
                            placeholder="จำนวน"
                            style={{maxWidth:"50%", fontFamily: 'Kanit, sans-serif'}}
                        />
                        <h5 className="ms-2 mt-2 custom-body"style={{ fontSize: '18px'}}>ฉบับ</h5>
                    </div>
                    <br></br>
                    
                    <h1 class="card-heading px-3" style={{fontSize: '20px',fontWeight: 'bold'}}>ต้องการขอเอกสารครั้งนี้เพื่อ</h1>
                    <div class="h-screen flex flex-col justify-left sm:flex-row">
                        <div class="sm:w-1_3 sm:pr-3">
                            <div class="dropdown px-3"style={{maxWidth:"70%"}} >
                                <select value={selectedOption} onChange={handleSelectChange} class="custom-select w-full">
                                    <option value="ระบุหมายเหตุ">ระบุหมายเหตุ</option>
                                    <option value="เพื่อใช้ในการขอทุนการศึกษา">เพื่อใช้ในการขอทุนการศึกษา</option>
                                    <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">เพื่อใช้ในการสมัครเข้าศึกษาต่อ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <h1 class="card-heading px-3" style={{fontSize: '20px',fontWeight: 'bold'}}>อัปโหลดรูปภาพนักเรียน</h1>
                    <h2 class="card-heading px-3"style={{ fontSize: '18px'}}>หมายเหตุ</h2>
                    <h5 class="card-heading px-3"style={{ fontSize: '16px'}}>1. รูปถ่ายต้องถ่ายไว้ไม่เกิน 6 เดือน</h5>
                    <h5 class="card-heading px-3"style={{ fontSize: '16px'}}>2. รูปถ่ายนักเรียนปัจจุบันต้องแต่งกายถูกต้องตามระเบียบของโรงเรียน</h5>
                    <br></br>
                    <input type="file" class="form-control" id="customFile"style={{maxWidth:"60%",marginLeft:"15px"}} />
                    <br></br>
                </div>
                    <Link to="/Parent_menu">
                        <button type="submit" class="btn btn-primary float-end" style={{ textAlign: 'right'}}><span>Submit</span></button>
                    </Link>
            </div>
        </div>
    </div>
     
      </>
      ) 
}

export default Request_cert