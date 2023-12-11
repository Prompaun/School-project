import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Tab_enroll from '../components/Tab_enroll';


function Enrollment_info() {
    const [selectedOption, setSelectedOption] = useState('ระบุหมายเหตุ');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };
      
      return (
        <><nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="src\images\IMG_5416.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{ float: 'left', marginRight: '10px' }} />
            <span style={{  fontFamily: 'Kanit, sans-serif',marginLeft: '0px' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</span>
          </Link>
          <div className="nav navbar-nav navbar-right">
            <span className='nav-link'>
            <Link to='/Open_course' style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>เลือกเมนู</Link>
            </span>
          </div>
        </div>
      </nav> 
       
      
      <Header header="ระบบรับสมัครนักเรียนแบบออนไลน์" subhead="กรอกข้อมูลการสมัคร"/>
      <br></br>
      <br></br>
    {/* <div class="container justify-content-center"> */}
    {/* <div class="card mx-auto" style={{ width: "1300px"}}> */}
        <Tab_enroll/>
        {/* </div>  */}
      <br></br>
      <br></br>
      </>
      ) 
}

export default Enrollment_info