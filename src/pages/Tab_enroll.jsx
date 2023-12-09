import React, { useState, useEffect, useRef  } from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../images/IMG_5416.png';
import Header from '../components/Header';
import NewStudent_info from './NewStudent_info';
import HouseholdInfo from './HouseholdInfo';
import ParentsInfo from './ParentInfo';
import { Link } from 'react-router-dom';

function Tab_enroll() {

    const linkStyle = {
        color: 'gray',
        textDecoration: 'none',
    };

    const fontStyle = {
      fontFamily: 'Kanit, sans-serif',
      textDecoration: 'none'
    };

    const [activeTab, setActiveTab] = useState('menu1');

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };
  

    return (
        <div class="card mx-auto" style={{ width: "1100px"}}>
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a
                  class={`nav-link ${activeTab === 'menu1' ? 'active' : ''}`}
                  data-bs-toggle="tab"
                  href="#menu1"
                  style={{ fontFamily: 'Kanit, sans-serif' }}
                  onClick={() => handleTabChange('menu1')}
                >
                  ข้อมูลนักเรียน
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={`nav-link ${activeTab === 'menu2' ? 'active' : ''}`}
                  data-bs-toggle="tab"
                  href="#menu2"
                  style={{ fontFamily: 'Kanit, sans-serif' }}
                  onClick={() => handleTabChange('menu2')}
                >
                  ที่อยู่ตามทะเบียนบ้าน
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={`nav-link ${activeTab === 'menu3' ? 'active' : ''}`}
                  data-bs-toggle="tab"
                  href="#menu3"
                  style={{ fontFamily: 'Kanit, sans-serif' }}
                  onClick={() => handleTabChange('menu3')}
                >
                  ข้อมูลผู้ปกครอง
                </a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content">
              <div class={`tab-pane container ${activeTab === 'menu1' ? 'active' : ''}`} id="menu1" style={{ height: "700px" }}>
                <NewStudent_info />
                
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" onClick={() => handleTabChange('menu2')} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>ถัดไป</button>
                  </div>
                  
              </div>
              
              
              <div class={`tab-pane container ${activeTab === 'menu2' ? 'active' : ''}`} id="menu2" style={{ height: "230px" }}>
                
                <HouseholdInfo />
              
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button type="button" onClick={() => handleTabChange('menu1')} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                      ย้อนกลับ
                    </button>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" onClick={() => handleTabChange('menu3')} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>ถัดไป</button>
                  </div>
                  
                </div>

              </div>
              <div class={`tab-pane container ${activeTab === 'menu3' ? 'active' : ''}`} id="menu3">
                <ParentsInfo />

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <button type="button" onClick={() => handleTabChange('menu2')} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>
                      ย้อนกลับ
                    </button>
                  </div>

                  <Link to ="/NewUser_menu">
                        {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button type="submit" className="btn btn-primary">ส่งข้อมูล</button>
                        </div> */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="button" onClick={() => handleTabChange('menu3')} className="btn btn-primary" style={{ ...fontStyle, color: 'white', fontSize: '16px'}}>ส่งข้อมูล</button>
                  </div>
                  </Link>
                </div>
              </div>

            </div>
          </div>
          <br />
        </div>
      );
    };

export default Tab_enroll;