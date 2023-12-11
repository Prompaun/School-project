import React, { useState } from 'react';

// import Navbar from '../components/Navbar'
import Medical_History from '../pages/Medical_History';
import Health_Checkup from '../pages/Health_Checkup';
import Result_health_data from '../pages/Result_health_data';

const Tab_health = () => {

    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };
    
    const fontStyle = {
        color: 'white',
        fontFamily: 'Kanit, sans-serif',
        textDecoration: 'none'
      };

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });


    return (
        <>
                                            
            {/* <div class="card"style={{ border: '10px' }} >                         */}
            {/* <div class="card mx-auto" style={{ width: "1300px"}}> */}
        
                <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#menu1" style={{fontFamily: 'Kanit, sans-serif' }}>Overview</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#menu2" style={{fontFamily: 'Kanit, sans-serif' }}>ประวัติการเจ็บป่วย</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#menu3" style={{fontFamily: 'Kanit, sans-serif' }}>การให้ภูมิคุ้มกัน</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#menu4" style={{fontFamily: 'Kanit, sans-serif' }}>การตรวจสุขภาพ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#menu5" style={{fontFamily: 'Kanit, sans-serif' }}>การเจริญเติบโตและภาวะโภชนาการ</a>
                    </li>
                    
                </ul>
            </div>
            <div class="card-body" > 
                <div class="tab-content">
                    <div class="tab-pane container active" id="menu1" ><Result_health_data/></div>
                    <div class="tab-pane container fade" id="menu2"><Medical_History/></div>
                    <div class="tab-pane container fade" id="menu3"></div>
                    <div class="tab-pane container fade" id="menu4"><Health_Checkup/></div>
                    <div class="tab-pane container fade" id="menu5"></div>
                </div>
            </div>
            {/* </div>  */}

        </>
    );
};

export default Tab_health;
