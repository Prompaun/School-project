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
        <>
      
       
      
      <Header header="ระบบรับสมัครนักเรียนแบบออนไลน์" subhead="กรอกข้อมูลการสมัคร"/>
      
      <div className="mt-5 d-flex flex-column align-items-center"style={{ height: '100vh'}}>
          <Tab_enroll />
      
      </div>
      <br></br>
      <br></br>
      </>
      ) 
}

export default Enrollment_info