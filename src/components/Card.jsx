import React, { useState } from 'react';

const Card = () => {
  const [obj,setObj] = useState([
    {
        title: "ประกาศรับสมัครนักเรียนใหม่",
        content: "รับสมัครนักเรียนใหม่ แผนการเรียน English Program (EP)"
    },
    {
        title: "ระเบียบการลงทะเบียนสำหรับผู้ใช้ใหม่",
        content: "ขั้นตอนการลงทะเบียนเข้าสู่ระบบ"
    }
  ]);
  return (
    <>
      {obj.map((item, index) => (
        <div key={index} >
          <div class="d-flex justify-content-center align-items-center">
        
        {/* <div class="card py-2 px-3"> */}
          <div className="card-info py-2 px-3">
            <h2 className="card-title" style={{ textAlign: 'left' }}>{item.title}</h2>
            <h5 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: 'left' }}>{item.content}</h5>
            <div class="card-footer">
            <div className="button-container">
              <a href="#" className="btn btn-primary">more</a>
            </div>
            </div>
          </div>
          </div>
        </div>
        
        
      ))}

    </>
  );
}

export default Card;