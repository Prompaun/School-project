import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import logoImage from '../images/IMG_5416.png';
import Header from '../components/Header';
import Axios from 'axios';

function CheckEnroll_status() {
    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };
      

      const [Enroll_statusList, setEnroll_statusList] = useState([]);

      useState(()=>{
        // const getCheckEnroll_status = () => {
          Axios.get('http://localhost:8080/CheckEnroll_status/2')
            .then((response) => {
              console.log("so sad",response.data);
              setEnroll_statusList(response.data);
            }).catch((err) => {
              console.log(err)
            });
        // }
      },[])
    

      // console.log(response);
      
      // const [obj, setObj] = useState([
      //   {
      //     NameTitle: "เด็กหญิง",
      //     FirstName: "ใจดี",
      //     LastName: "รักสงบ",
      //     Student_NID: "X-XXXX-XXXXX-XX-X",
      //     Enroll_Year: "XXXX",
      //     Enroll_Course:"English Program (EP)",
      //     Enroll_No:"XXXX",
      //     Enroll_Status:"รอการสอบคัดเลือก"
      //   }
      // ]);
  return (
    <>
    {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            <h5 style={{ textAlign: 'right', marginLeft: '10px', marginBottom: '0' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h5>
          </div>
        </Link>
        <div className="nav navbar-nav navbar-right">
          <span className='nav-link'>
          <Link
                // onClick={handleGoBack}
                to = "/NewUser_menu"
                style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                เลือกเมนู
              </Link>
          </span>
        </div>
      </div>
    </nav> */}
    
    <Header header="ระบบรับสมัครนักเรียนแบบออนไลน์" subhead="เพื่อเข้าศึกษาระดับประถมศึกษาปีที่ 1" />
    
    
    <div class="container"style={{height: '100vh' }}>
    <div className="container mt-5 d-flex flex-column align-items-center">
        <h2 className="ms-3 mb-0">ข้อมูลการสมัคร</h2>
    </div>
    <br></br>
    <div className="d-flex flex-column justify-content-center"style={{fontFamily: 'Kanit, sans-serif'}}>
      <div className="card mx-auto" style={{ maxWidth: '90%', fontFamily: 'Kanit, sans-serif' }}>
      {Enroll_statusList.map((val, key) => (
        <div className="card-body">
        
          <div style={{display:"flex", flexWrap: 'wrap',justifyContent:"left"}}>

            <div className="align-items-center"style={{padding:"10px"}}>
              <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>ชื่อ-นามสกุล</h2>

              
              <input
                  type="text"
                  className="form-control"
                  value={`${val.NameTitle} ${val.FirstName} ${val.LastName}`}
                  readOnly
                  style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
                />
            </div>
            {/* </div>
             <div style={{ display:"flex",justifyContent:"center" }}> */}
            <div className="align-items-center"style={{padding:"10px"}} >
              <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>เลขประจำตัวประชาชน</h2>
              
              <input
                  type="text"
                  className="form-control"
                  value={`${val.Student_NID}`}
                  readOnly
                  style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
                />
            </div>
            {/* </div>
          <div style={{display:"flex", flexWrap: 'wrap',justifyContent:"center"}}> */}
        
              <div className="align-items-center"style={{padding:"10px"}}>
                <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>ปีการศึกษา</h2>
                
            
                <input
                type="text"
                className="form-control"
                value={`${val.Enroll_Year}`}
                readOnly
                style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
              />
              </div>
              {/* </div>
             <div style={{ display:"flex",flexWrap: 'wrap' }}> */}
              <div className="align-items-center"style={{padding:"10px"}}>
                <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>หลักสูตร</h2>
               
                <input
                  type="text"
                  className="form-control"
                  value={`${val.Enroll_Course}`}
                  readOnly
                  style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
                />
              </div>
              {/* </div>
             <div style={{ display:"flex",flexWrap: 'wrap' }}> */}
            <div className="align-items-center"style={{padding:"10px"}}>
                <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>เลขที่สมัคร</h2>
                
                <input
                  type="text"
                  className="form-control"
                  value={`${val.Enroll_No}`}
                  readOnly
                  style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
                />
                </div> 
                </div>
             <div style={{ display:"flex",flexWrap: 'wrap' }}>
              <div className=" align-items-center"style={{padding:"10px"}}>
                <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>สถานะ</h2>
                
                <h2 className="col-form-label" style={{ fontSize: '18px' }}>{val.Enroll_Status}</h2>
              
              </div>
            
          </div>
          {val.Enroll_Status === "รอการสอบคัดเลือก" && (
              <button
                type="button"
                className="btn btn-primary float-end"
                style={{
                  fontFamily: "Kanit, sans-serif",
                  textAlign: "center",
                  justifyContent: 'flex-end',
                  display: val.Enroll_Status === "รอการสอบคัดเลือก" ? "block" : "none"
                }}
                onClick={() => {
                  const fileUrl = "src/assets/พิมพ์ใบสมัครป.1.pdf";
                  const printWindow = window.open(fileUrl, "_blank", "width=1000,height=800");
                  printWindow.print();
                }}
              >
                <span>พิมพ์บัตรประจำตัวผู้สอบ</span>
              </button>
            )}
        </div>
      ))}
       </div>  
  </div>
</div>
  </>
  )
}

export default CheckEnroll_status

// import React,{ useState } from 'react'
// import { Link } from 'react-router-dom';
// import logoImage from '../images/IMG_5416.png';
// import Header from '../components/Header';

// function CheckEnroll_status() {
//     const linkStyle = {
//         color: 'gray',
//         textDecoration: 'none'
//       };
//       const [obj, setObj] = useState([
//         {
//           eName_title: "เด็กหญิง",
//           eFirstName: "ใจดี",
//           eLastName: "รักสงบ",
//           ID: "X-XXXX-XXXXX-XX-X",
//           Enroll_Year: "XXXX",
//           Enroll_Course:"English Program (EP)",
//           Enroll_No:"XXXX",
//           Enroll_Status:"รอการสอบคัดเลือก"
//         }
//       ]);
//   return (
//     <><nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           {/* Logo and School Name */}
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <img src={logoImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
//             <h5 style={{ textAlign: 'right', marginLeft: '10px', marginBottom: '0' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h5>
//           </div>
//         </Link>
//         <div className="nav navbar-nav navbar-right">
//           <span className='nav-link'>
//           <Link
//                 // onClick={handleGoBack}
//                 to = "/NewUser_menu"
//                 style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
//                 เลือกเมนู
//               </Link>
//           </span>
//         </div>
//       </div>
//     </nav>
    
//     <Header header="ระบบรับสมัครนักเรียนแบบออนไลน์" subhead="เพื่อเข้าศึกษาระดับประถมศึกษาปีที่ 1" />
    
    
//     <div class="container"style={{height: '100vh' }}>
//     <div className="container mt-5 d-flex flex-column align-items-center">
//         <h2 className="ms-3 mb-0">ข้อมูลการสมัคร</h2>
//     </div>
//     <br></br>
//     <div className="d-flex flex-column justify-content-center"style={{fontFamily: 'Kanit, sans-serif'}}>
//       <div className="card mx-auto" style={{ maxWidth: '90%', fontFamily: 'Kanit, sans-serif' }}>
//       {obj.map((item) => (
//         <div className="card-body">
        
//           <div style={{display:"flex", flexWrap: 'wrap',justifyContent:"left"}}>

//             <div className="align-items-center"style={{padding:"10px"}}>
//               <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>ชื่อ-นามสกุล</h2>

              
//               <input
//                   type="text"
//                   className="form-control"
//                   value={`${item.eName_title} ${item.eFirstName} ${item.eLastName}`}
//                   readOnly
//                   style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
//                 />
//             </div>
//             {/* </div>
//              <div style={{ display:"flex",justifyContent:"center" }}> */}
//             <div className="align-items-center"style={{padding:"10px"}} >
//               <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>เลขประจำตัวประชาชน</h2>
              
//               <input
//                   type="text"
//                   className="form-control"
//                   value={`${item.ID}`}
//                   readOnly
//                   style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
//                 />
//             </div>
//             {/* </div>
//           <div style={{display:"flex", flexWrap: 'wrap',justifyContent:"center"}}> */}
        
//               <div className="align-items-center"style={{padding:"10px"}}>
//                 <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>ปีการศึกษา</h2>
                
            
//                 <input
//                 type="text"
//                 className="form-control"
//                 value={`${item.Enroll_Year}`}
//                 readOnly
//                 style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
//               />
//               </div>
//               {/* </div>
//              <div style={{ display:"flex",flexWrap: 'wrap' }}> */}
//               <div className="align-items-center"style={{padding:"10px"}}>
//                 <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>หลักสูตร</h2>
               
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={`${item.Enroll_Course}`}
//                   readOnly
//                   style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
//                 />
//               </div>
//               {/* </div>
//              <div style={{ display:"flex",flexWrap: 'wrap' }}> */}
//             <div className="align-items-center"style={{padding:"10px"}}>
//                 <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>เลขที่สมัคร</h2>
                
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={`${item.Enroll_No}`}
//                   readOnly
//                   style={{ backgroundColor: '#DCDCDC', color: 'black', maxWidth: '100%' }}
//                 />
//                 </div> 
//                 </div>
//              <div style={{ display:"flex",flexWrap: 'wrap' }}>
//               <div className=" align-items-center"style={{padding:"10px"}}>
//                 <h2 className="col-form-label" style={{ fontSize: '18px', fontWeight: 'bold' }}>สถานะ</h2>
                
//                 <h2 className="col-form-label" style={{ fontSize: '18px' }}>{item.Enroll_Status}</h2>
              
//               </div>
            
//           </div>
//           {item.Enroll_Status === "รอการสอบคัดเลือก" && (
//               <button
//                 type="button"
//                 className="btn btn-primary float-end"
//                 style={{
//                   fontFamily: "Kanit, sans-serif",
//                   textAlign: "center",
//                   justifyContent: 'flex-end',
//                   display: item.Enroll_Status === "รอการสอบคัดเลือก" ? "block" : "none"
//                 }}
//                 onClick={() => {
//                   const fileUrl = "src/assets/พิมพ์ใบสมัครป.1.pdf";
//                   const printWindow = window.open(fileUrl, "_blank", "width=1000,height=800");
//                   printWindow.print();
//                 }}
//               >
//                 <span>พิมพ์บัตรประจำตัวผู้สอบ</span>
//               </button>
//             )}
//         </div>
//       ))}
//        </div>  
//   </div>
// </div>
//   </>
//   )
// }

// export default CheckEnroll_status