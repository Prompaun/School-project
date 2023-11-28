import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import logoImage from '../images/IMG_5416.png';

function Sidebar() {
  const linkStyle = {
    color: 'gray',
    textDecoration: 'none',
    fontFamily: 'Kanit, sans-serif',
    fontSize: '16px',
  };
  // const [isOpen, setIsopen] = useState(false);

  // const ToggleSidebar = () => {
  //     isOpen === true ? setIsopen(false) : setIsopen(true);
  // }
  return (
    <>

      {/* <div className="container-fluid" style={{ fontFamily: 'Kanit, sans-serif' }}>
        <div className="row flex-nowrap"> */}
          {/* <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" style={{ fontFamily: 'Kanit, sans-serif' }}> */}
          <div className="col-auto col-md-3 col-xl-2 bg-dark" style={{ fontFamily: 'Kanit, sans-serif' }}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white min-vh-100">
              <br />
              
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                {/* <li className="nav-item">
                  <a href="/personnel_page" id="personnel_home-tab" className="nav-link align-middle px-0" aria-controls="personnel_home" aria-selected="true">
                    <i className="fs-5 bi-house"></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                      หน้าหลัก
                    </span>
                  </a>
                </li> */}
                {/* <br /> */}
                <li>
                  <a href="/Filter_student_information" id="search_info-tab" className="nav-link align-middle px-0"  aria-controls="search_info" aria-selected="false">
                    <i className="fs-5 bi-search"></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                      ระบบจัดการสารสนเทศ
                    </span>
                  </a>
                </li>
                <br />
                <li>
                  <a href="#submenu1" className="nav-link px-0 align-middle" data-bs-toggle="collapse" >
                    <i className="fs-5 bi-database"></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                      ระบบจัดการข้อมูลการศึกษา
                    </span>
                  </a>

                  <ul className="collapse nav show flex-column ms-1" id="submenu1" >
                    <li className="nav-item">
                      <a href="/Subject_Score_Record" id="Grade_record-tab" className="nav-link px-0"  aria-controls="Grade_record" aria-selected="false">
                        <span className="d-none d-sm-inline" style={{ fontSize: '18px', marginLeft: '25px' }}>
                          บันทึกคะแนนรายวิชา
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  <a href="#submenu2" className="nav-link px-0 align-middle" data-bs-toggle="collapse" >
                    <i className="fs-5 bi-inbox-fill"></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                      ระบบการออกใบรับรอง
                    </span>
                  </a>

                  <ul className="collapse nav show flex-column ms-1" id="submenu2" >
                    <li className="nav-item">
                      <a href="/Check_Certification_Request" id="Check_Certification_Request-tab" className="nav-link px-0"  aria-controls="Check_Certification_Request" aria-selected="false">
                        <span className="d-none d-sm-inline" style={{ fontSize: '18px', marginLeft: '25px' }}>
                          ตรวจสอบคำขอใบรับรอง
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  <a href="#" id="Enroll_student-tab" className="nav-link px-0 align-middle" aria-controls="Enroll_student" aria-selected="false">
                    <i className="fs-5 bi-file-earmark-plus"></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                      ระบบการรับสมัครนักเรียน
                    </span>
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          
        {/* </div>
      </div> */}
    </>
  );
}

export default Sidebar;
