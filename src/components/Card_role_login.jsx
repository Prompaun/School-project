import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

const Card_role_login = () => {
    const [obj, setObj] = useState([
        {
          text: "นักเรียน / ผู้ปกครอง",
          imageUrl: "src/images/student_icon.png", // แทนที่ด้วย URL รูปภาพจริง
          path: "/Login/login_student"
        },
        {
          text: "บุคลากร",
          imageUrl: "src/images/teacher_icon.png", // แทนที่ด้วย URL รูปภาพจริง
          path: "/Login/login_student"
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

export default Card_role_login;