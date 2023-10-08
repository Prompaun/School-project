import React, { useState }from 'react'
import { NavLink } from 'react-router-dom';
import enrollment_icon from "../images/enrollment_icon.png"
import check_status_enroll from "../images/check_status_enroll.png"


function Card_menu_newuser() {
    const [obj, setObj] = useState([
        {
          text: "สมัครเข้าเรียน",
          imageUrl: enrollment_icon, // แทนที่ด้วย URL รูปภาพจริง
          path: "/Open_course"
        },
        {
            text: "ตรวจสอบสถานะผู้สมัคร",
            imageUrl: check_status_enroll, // แทนที่ด้วย URL รูปภาพจริง
            path: "/Checkgrade"
          }
      ]);
    function handleClick() {
        console.log('Link clicked!');
      }
    
      return (
        <div className="card-container">
          {obj.map((item, index) => (
            <div key={index} className="card-menu"style={{ boxShadow: '1px 2px 12px 4px rgba(0, 0, 0, 0.2)' }}>
              <NavLink to={item.path} onClick={handleClick}>
              <img src={item.imageUrl} className="card-img-top" alt={item.text} /></NavLink>
              <div className="card-body">
                <p className="card-text"style={{ textAlign: 'center' }}>{item.text}</p>
              </div>
              {/* </NavLink> */}
            </div>
          ))}
        </div>
      );
}

export default Card_menu_newuser