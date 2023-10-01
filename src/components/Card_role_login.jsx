import React, { useState } from 'react';

const Card_role_login = () => {
    const [obj, setObj] = useState([
        {
          text: "นักเรียน / ผู้ปกครอง",
          imageUrl: "src/images/student_icon.png" // แทนที่ด้วย URL รูปภาพจริง
        },
        {
          text: "บุคลากร",
          imageUrl: "src/images/teacher_icon.png" // แทนที่ด้วย URL รูปภาพจริง
        }
      ]);
    
      return (
        <div className="card-container">
          {obj.map((item, index) => (
            <div key={index} className="card">
              <img src={item.imageUrl} className="card-img-top" alt={item.text} />
              <div className="card-body">
                <p className="card-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      );
}

export default Card_role_login;