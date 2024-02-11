import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
import logoImage from '../images/IMG_5416.png';
import Header from '../components/Header';

function Filter_student_information() {
    const linkStyle = {
        color: 'gray',
        textDecoration: 'none',
        fontFamily: 'Kanit, sans-serif',
        fontSize: '16px',
      };

    const [selectedOption, setSelectedOption] = useState('ระบุหมายเหตุ');
    const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    };

    

    const handleSelectYearChange = (event) => {
      setSelectedYear(event.target.value);
    };
    
    const yearsList = ["2566", "2565", "2564", "2563", "2562", "2561", "2560"];
    const [selectedYear, setSelectedYear] = useState();
    // const options = [
    //     { value: 'ระบุหมายเหตุ', label: 'ปีการศึกษา' },
    //     { value: 'เพื่อใช้ในการขอทุนการศึกษา', label: 'ปริญญาตรี' },
    //     { value: 'เพื่อใช้ในการสมัครเข้าศึกษาต่อ', label: 'ปริญญาโท' },
    //     { value: 'เพื่อใช้ในการสมัครเข้าศึกษาต่อ', label: 'ปริญญาเอก' },
    // ];

    const fontStyle = {
        fontFamily: 'Kanit, sans-serif',
        textDecoration: 'none'
      };

    return (
        <>
   <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logoImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
              <h5 style={{ textAlign: 'right', marginLeft: '10px', marginBottom: '0' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h5>
            </div>
          </Link>
          <div className="nav navbar-nav navbar-right">
            <span className="nav-link" style={{ fontFamily: 'Kanit, sans-serif' }}>
            <Link to="/Login_personnel" style={linkStyle}>
                Log out
              </Link>
            </span>
          </div>
        </div>
      </nav>

      <Header header="ระบบจัดการสารสนเทศ" subhead="บริการสำหรับบุคลากรภายในโรงเรียน" />
      {/* <Sidebar /> */}
      <div className="container-fluid"style={{height: "100vh"}}>
        <div className="row flex-nowrap">
            {/* <Sidebar /> */}
            
    <div className="col-md">
            <div className="d-flex align-items-center flex-column justify-content-center">
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px',paddingTop: '40px' }}>การจัดการสารสนเทศ</h2>
            </div>
    <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif'}}>
    <div className="container">
            <div className="card mx-auto mt-auto" style={{ boxShadow: '1px 2px 12px 4px rgba(0, 0, 0, 0.2)' ,maxWidth: '100%',Height: '100vh'}} >
    {/* <div className="card mx-auto my-auto" style={{border: '1px solid #D3D3D3' }}> */}
    
        <div className="card-body">
        <div style={{  flexWrap: 'wrap',gap:"10px"}}>
                <div className="d-flex align-items-center">
                    <h2 className="card-heading px-4" style={{ fontSize: '20px', marginTop: '2px',fontWeight: 'bold' }}>Filter</h2>
                </div>

                <br />
                <div className="d-flex align-items-center">
                    <h2 className="card-heading px-4" style={{ fontSize: '16px', marginTop: '2px' }}>กรอกข้อมูลที่ต้องการค้นหา</h2>
                </div>

                <br />
                <div className="d-flex align-items-center">
                    <h2 className="card-heading px-4" style={{ fontSize: '16px', marginTop: '2px', color: '#808080' }}>ค้นหารายชื่อจากปีการศึกษา</h2>
                </div>
                
                <br />
                <div className="d-flex align-items-center">
                    <h2 className="card-heading px-4" style={{ fontSize: '18px', marginTop: '2px',fontWeight: 'bold' }}>ปีการศึกษา</h2>
                
                    <div class="dropdown px-0" style={{ width: '150px' }}>
                        <select
                            value={selectedYear}
                            onChange={handleSelectYearChange}
                            class="custom-select"
                            style={{ width: '150px' }}
                            >
                            <option value="เลือกปีการศึกษา">เลือกปีการศึกษา</option>
                            {yearsList.map((year) => (
                                <option key={year} value={year}>
                                ปีการศึกษา {year}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

                <br />
                <div className="d-flex align-items-center">
                    <h2 className="card-heading px-4" style={{ fontSize: '16px', marginTop: '2px', color: '#808080' }}>ค้นหาข้อมูลรายบุคคล</h2>
                </div>

                <br />
                <div className="d-flex align-items-center" style={{ display: 'flex', gap: '20px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>           
                    <div className=" d-flex align-items-center">
                    {/* col-sm-5 */}
                        <h2 className="card-heading px-4" style={{ fontSize: '16px', marginTop: '2px'}}>เลขประจำตัวนักเรียน</h2>
                        <input type="text" className="form-control" id="student_id" name="student_id" placeholder="กรอกเลขประจำตัวนักเรียน" />
                    </div>
                    <div className=" d-flex align-items-center">
                        <h2 className="card-heading px-4" style={{ fontSize: '16px', marginTop: '2px'}}>ชื่อ-นามสกุล</h2>
                        <input type="text" className="form-control" id="student_id" name="student_id" placeholder="กรอก ชื่อ-นามสกุล" />
                    </div>
                </div>
                
                <br />
                {/* <div className="container d-flex justify-content-center">
                    <h2 className="card-heading px-4" style={{ fontSize: '20px', marginTop: '2px' }}>เลือกข้อมูล</h2>
                </div> */}
                
                {/* <br /> */}
                <div className="container d-flex justify-content-center">
                    {/* <Link to="/">
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{
                        ...fontStyle, 
                        color: 'white', 
                        fontSize: '16px', 
                        textAlign: 'center', 
                        marginTop: '10px', 
                        marginRight: '15px',
                        width: '150px', // กำหนดความกว้าง
                        height: '40px'  // กำหนดความสูง
                        }}
                    >
                        <span>ข้อมูลส่วนบุคคล</span>
                    </button>
                    </Link> */}

                    <Link to="/Student_List_Information">
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{
                        ...fontStyle, 
                        color: 'white', 
                        fontSize: '16px', 
                        textAlign: 'center', 
                        marginTop: '10px', 
                        // marginRight: '15px',
                        width: '150px', // กำหนดความกว้าง
                        height: '40px'  // กำหนดความสูง
                        }}
                    >
                        <span>ค้นหาข้อมูล</span>
                    </button>
                    </Link>

                    {/* <Link to="/">
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{
                        ...fontStyle, 
                        color: 'white', 
                        fontSize: '16px', 
                        textAlign: 'center', 
                        marginTop: '10px',
                        width: '150px', // กำหนดความกว้าง
                        height: '40px'  // กำหนดความสูง
                        }}
                    >
                        <span>ข้อมูลสุขภาพ</span>
                    </button>
                    </Link> */}
                </div>
                

            </div>
        </div> 
        </div>
        </div>
    </div>
            
            </div>
        </div>  
    </div>
    </>
  );
}

export default Filter_student_information;
