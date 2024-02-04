import React, { useState } from 'react';

const Card = () => {
  const [obj,setObj] = useState([
    {
        title: "ประกาศรับสมัครนักเรียนใหม่",
        content: "รับสมัครนักเรียนใหม่ แผนการเรียน English Program (EP)",
        DateTime : "12-10-2565"
    },
    {
        title: "ระเบียบการลงทะเบียนสำหรับผู้ใช้ใหม่",
        content: "ขั้นตอนการลงทะเบียนเข้าสู่ระบบ",
        DateTime : "12-10-2565"
    }
  ]);
  return (
    <>
      {/* {obj.map((item, index) => (
        <div key={index} >
          <div class="d-flex justify-content-center align-items-center">
        
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
        
        
      ))} */}
    {obj.map((item, index) => (
      <div key={index} >
      
    <div class="row">
        
            <ul class="list-group shadow">
                {/* <!-- list group item--> */}
                <li class="list-group-item">
                    {/* <!-- Custom content--> */}
                    <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                            <h5 class="mt-0 font-weight-bold mb-2">{item.title}</h5>
                            <p class="font-italic text-muted mb-0 small">{item.content}</p>
                            <div class="d-flex align-items-center justify-content-between mt-1">
                                <h6 class="font-weight-bold my-2">{item.DateTime}</h6>
                                <ul class="list-inline small">
                                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                   
                                    {/* <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li> */}
                                </ul>
                            </div>
                        </div>
                        {/* <img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/> */}
                    </div> 
                </li> 
            </ul> 
        {/* </div> */}
    </div>
</div>)) 
}
</>
     );
}

export default Card;