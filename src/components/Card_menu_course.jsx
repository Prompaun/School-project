import React, { useState }from 'react'
import { NavLink } from 'react-router-dom';
import general_course_icon from "../images/general_course_icon.png"
import EP_icon from "../images/EP_icon.png"

function Card_menu_course() {
    const [obj, setObj] = useState([
        {
          text: "English Program (EP)",
          imageUrl: EP_icon, // แทนที่ด้วย URL รูปภาพจริง
          path: "/Tab_enroll"
        },
        {
            text: "หลักสูตรทั่วไป",
            imageUrl: general_course_icon, // แทนที่ด้วย URL รูปภาพจริง
            path: "/Tab_enroll"
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
                        <div className="card-body d-flex flex-column align-items-center">
                            <img src={item.imageUrl} className="card-img-top" alt={item.text} style={{ width: '220px', height: '220px' }} />
                        </div>
                    </NavLink>
                    <br />
                        <p className="card-text" style={{ textAlign: 'center' }}>{item.text}</p>
            </div>
          ))}
        </div>
      );
}

export default Card_menu_course