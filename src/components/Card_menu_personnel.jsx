import React, { useState }from 'react'
import {Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import enrollment_icon from "../images/enrollment_icon.png"
import student_icon from "../images/student_icon.png"
import health_icon from "../images/health_icon.png"
import Request_cert from "../images/request_cert.png"
import analyze from "../images/analyze.png"
import Postnews from "../images/promotion.png"

function Card_menu_personnel() {
    const [obj, setObj] = useState([
        {
          text: "ระบบจัดการสารสนเทศ",
          imageUrl: analyze, // แทนที่ด้วย URL รูปภาพจริง
          path: "/Filter_student_information"
        },
        {
          text: "ระบบจัดการข้อมูลการศึกษา",
          imageUrl: student_icon, // แทนที่ด้วย URL รูปภาพจริง
          path: "/Subject_Score_Record"
        },
        // {
        //   text: "ระบบจัดการข้อมูลสุขภาพ",
        //   imageUrl: health_icon, // แทนที่ด้วย URL รูปภาพจริง
        //   path: "/Manage_health_data"
        // },
        {
          text: "ระบบจัดการออกใบรับรอง",
          imageUrl: Request_cert, // แทนที่ด้วย URL รูปภาพจริง
          path: "/Check_Certification_Request"
        },
        {
          text: "ข่าวประชาสัมพันธ์",
          imageUrl: Postnews, // แทนที่ด้วย URL รูปภาพจริง
          path: "/PostNews"
        },
        {
          text: "ระบบการรับสมัครนักเรียนใหม่",
          imageUrl: enrollment_icon,
          // path: "/Enrollment_Student",
          dropdown: [
            { text: "ตรวจสอบข้อมูลผู้สมัคร", path: "/Check_Applicant_Information" },
            { text: "จัดการช่วงเวลาเปิดรับสมัคร", path: "/OpenCourse_period" },

            // { text: "อัปโหลดผลคะแนนการสอบ", path: "/Upload_applicant_scores" },
            // { text: "ผลคะแนนการสอบรายบุคคล", path: "/Admission_Results" },
            // { text: "อัปโหลดสถานะการมอบตัว", path: "/Upload_Enrollment_Status" },
            // { text: "สถานะการมอบตัวรายบุคคล", path: "/Enrollment_Status" },

          ],
        },
      ]);
    function handleClick() {
        console.log('Link clicked!');
      }
    
      return (
      

        <div className="d-flex align-items-center justify-content-center" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', fontFamily: 'Kanit, sans-serif'}}>
          {obj.map((item, index) => (
            <div key={index} className="card-menu" style={{ boxShadow: '1px 2px 12px 4px rgba(0, 0, 0, 0.2)' }}>
              <div className="card-body">
                <p className="card-text mt-3" style={{ textAlign: 'center',margin: "5px" }}>{item.text}</p>
              
              </div>
              <NavLink to={item.path} onClick={handleClick}>
                <img src={item.imageUrl} className="card-img-top" alt={item.text} style={{ width: '100%', height: 'auto', alignSelf: 'center', objectFit: 'cover' }} />
              </NavLink>
              {item.dropdown && (
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic"style={{ width: "100%", padding: "10px" }}>
                      Menu
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {item.dropdown.map((subItem, subIndex) => (
                        <Dropdown.Item key={subIndex} as={NavLink} to={subItem.path} style={{color: "black" }}>
                          {subItem.text}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
            </div>
          ))}
        </div>
      );
}

export default Card_menu_personnel