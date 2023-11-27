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

  return (
    <>

      {/* <div className="container-fluid" style={{ fontFamily: 'Kanit, sans-serif' }}>
        <div className="row flex-nowrap"> */}
          {/* <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" style={{ fontFamily: 'Kanit, sans-serif' }}> */}
          <div className="col-auto col-md-3 col-xl-2 bg-dark" style={{ fontFamily: 'Kanit, sans-serif' }}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white min-vh-100">
              <br />

              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                   {/* /personnel_page */}
                  <a href="/personnel_page" id="personnel_home-tab" className="nav-link align-middle px-0" aria-controls="personnel_home" aria-selected="true">
                    <i className="fs-5 bi-house"></i> <span className="ms-1 d-none d-sm-inline" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                      หน้าหลัก
                    </span>
                  </a>
                </li>
                <br />
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

                  <ul className="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                    <li className="nav-item">
                      <a href="#" id="Grade_record-tab" className="nav-link px-0"  aria-controls="Grade_record" aria-selected="false">
                        <span className="d-none d-sm-inline" style={{ fontSize: '18px', marginLeft: '25px' }}>
                          บันทึกคะแนนรายวิชา
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
          {/* <div className="col py-3">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="personnel_home" role="tabpanel" aria-labelledby="personnel_home-tab">
                Hello home
              </div>
              <div className="tab-pane fade" id="search_info" role="tabpanel" aria-labelledby="search_info-tab">
                Hello
              </div>
              <div className="tab-pane fade" id="Grade_record" role="tabpanel" aria-labelledby="Grade_record-tab">
                hi
              </div>
              <div className="tab-pane fade" id="Enroll_student" role="tabpanel" aria-labelledby="Enroll_student-tab">
                เย่
              </div>
            </div>
          </div> */}
        {/* </div>
      </div> */}
    </>
  );
}

export default Sidebar;
