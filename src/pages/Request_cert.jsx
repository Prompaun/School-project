import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import logoImage from '../images/IMG_5416.png';
import School_bg from "../images/school_bg.png"
import Upload_img from "../images/Upload_img.png"

function Request_cert() {
    const [selectedOption, setSelectedOption] = useState('ระบุหมายเหตุ');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };
    const containerStyle = {
        position: 'relative',
      };
    
      const textOverlayStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '28px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        textAlign: 'left', // ตั้งให้ข้อความชิดซ้าย
      };
    
      const imageStyle = {
        filter: 'brightness(25%)',
      };
      return (
        <><nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="src\images\IMG_5416.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{ float: 'left', marginRight: '10px' }} />
            <span style={{  fontFamily: 'Kanit, sans-serif',marginLeft: '0px' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</span>
          </Link>
          <div className="nav navbar-nav navbar-right">
            <span className='nav-link'>
            <Link to='/Parent_menu' style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>เลือกเมนู</Link>
            </span>
          </div>
        </div>
      </nav> 
        <div style={containerStyle}>
        <img
                src={School_bg}
                alt="School Background"
                style={{
                    ...imageStyle,
                    width: '100vw', // 100vw คือ 100% ของความกว้างของ viewport
                    maxHeight: '40vh',  // 40vh คือ 40% ของความสูงของ viewport
                    objectFit: 'cover'  // ภาพจะทำการ crop หรือ stretch เพื่อให้เต็มพื้นที่ที่กำหนด
                }}
                />
        {/* <div style={{...textOverlayStyle,fontFamily: 'Kanit, sans-serif',textAlign: 'center',fontWeight: 'bold',fontSize: '56px' }}>ระบบยื่นคำร้องขอใบรับรอง */}
        {/* <h2 style={{ textAlign: 'center',fontWeight: 'bold',fontSize: '56px' }}>ระบบยื่นคำร้องขอใบรับรอง</h2> */}
         {/* <h5 style={{ textAlign: 'center',fontWeight: 'bold',fontSize: '32px' }}>บริการสำหรับผู้ปกครอง</h5> */}
        {/* </div> */}
        <div style={{...textOverlayStyle,fontFamily: 'Kanit, sans-serif',textAlign: 'center',fontWeight: 'bold',fontSize: '56px'}}>ระบบยื่นคำร้องขอใบรับรอง</div>
      </div>
      {/* <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <h2 className="ms-3 mb-0"></h2>
        </div>
      </div> */}

        {/* <h2 class="card-heading px-3 d-flex justify-content-center" style={{ fontWeight: 'bold'}}>ฟอร์มยื่นคำร้องขอใบรับรอง</h2> */}
      <div class="container d-flex justify-content-center">
	<div class="card mx-5 my-5" style={{ width: "700px"}}>
		{/* <div class="card-body px-1"> */}
        
        <div class="card-body">

			{/* <h2 class="card-heading px-3">อัปโหลดรูปภาพนักเรียน</h2> */}
            {/* <label class="form-label" for="customFile">อัปโหลดรูปภาพนักเรียน</label>
            <div>
                <div class="mb-4 d-flex ">
                    <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                    alt="example placeholder" style={{ width: "300px"}} />
                </div>
                <div class="d-flex">
                    <div class="btn btn-primary btn-rounded">
                        <label class="form-label text-white m-1" for="customFile1">Choose file</label>
                        <input type="file" class="form-control d-none" id="customFile1" />
                    </div>
                </div>
            </div> */}

			<label class="card-heading px-3" style={{fontSize: '28px',fontWeight: 'bold'}}>เลือกประเภทใบรับรอง</label>
            <br></br>
            <br></br>

			<div class="form-group col-md-15 fone">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label custom-body" style={{ fontSize: '18px'}} for="flexCheckDefault">
                        กรณีขอใบรับรองการเป็นนักเรียน (ปพ.7)
                    </label>
                    </div>
                    <div className="mb-3 d-flex w-50 px-3">
                        <input
                            type="text"
                            className="form-control ml-3 px-3"
                            placeholder="จำนวน"
                        />
                        <h5 className="ms-2 mt-2 custom-body" style={{ fontSize: '18px'}}>ฉบับ</h5>
                    </div>
                      
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                    <label class="form-check-label custom-body" style={{ fontSize: '18px'}} for="flexCheckChecked">
                        กรณีขอหนังสือรับรองผลการเรียนรายวิชา
                    </label>
                    </div>
                    <div className="mb-3 d-flex w-50 px-3">
                        <input
                            type="text"
                            className="form-control ml-3 px-3"
                            placeholder="จำนวน"
                        />
                        <h5 className="ms-2 mt-2 custom-body"style={{ fontSize: '18px'}}>ฉบับ</h5>
                    </div>
                    <br></br>
                    <h1 class="card-heading px-3" style={{fontSize: '20px',fontWeight: 'bold'}}>ต้องการขอเอกสารครั้งนี้เพื่อ</h1>
                    <div class="h-screen flex justify-left bg-gray-900">
                    {/* <div class="container d-flex justify-content-center align-items-center"> */}

                    <div class="dropdown px-3">
                    <select value={selectedOption} onChange={handleSelectChange} class="custom-select ">
                        <option value="ระบุหมายเหตุ">ระบุหมายเหตุ</option>
                        <option value="เพื่อใช้ในการขอทุนการศึกษา">เพื่อใช้ในการขอทุนการศึกษา</option>
                        <option value="เพื่อใช้ในการสมัครเข้าศึกษาต่อ">เพื่อใช้ในการสมัครเข้าศึกษาต่อ</option>
                    </select>
                        
                    {/* </div> */}

                        

                </div>
            </div>
            <br></br>
            <br></br>
            {/* <label class="form-label custom-body" for="customFile">อัปโหลดรูปภาพนักเรียน</label>
             */}
             <h1 class="card-heading px-3" style={{fontSize: '20px',fontWeight: 'bold'}}>อัปโหลดรูปภาพนักเรียน</h1>

             <h2 class="card-heading px-3"style={{ fontSize: '18px'}}>หมายเหตุ</h2>
            {/* <h5 class="card-heading px-3"style={{ fontSize: '16px'}}>1. กรอกข้อมูลให้ครบถ้วนและชัดเจน</h5> */}
            <h5 class="card-heading px-3"style={{ fontSize: '16px'}}>1. รูปถ่ายต้องถ่ายไว้ไม่เกิน 6 เดือน</h5>
            <h5 class="card-heading px-3"style={{ fontSize: '16px'}}>2. รูปถ่ายนักเรียนปัจจุบันต้องแต่งกายถูกต้องตามระเบียบของโรงเรียน</h5>
            <br></br>
             {/* <h1 class="card-heading px-3" style={{fontSize: '20px'}}>อัปโหลดรูปภาพนักเรียน</h1> */}
            <input type="file" class="form-control px-3" id="customFile" />
            <br></br>
            
            </div>
			{/* <div class="row rfour">
				<div class="col-md-4 ml-3"> */}
                <Link to="/Parent_menu">
					<button type="submit" class="btn btn-primary float-end" style={{ textAlign: 'right'}}><span>Submit</span></button>
				{/* </div> */}</Link>
			{/* </div> */}
			{/* </form> */}
            {/* </div> */}
		</div>
	</div>
</div>
      <br></br>
      <br></br>
      </>
      ) 
}

export default Request_cert