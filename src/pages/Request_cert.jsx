import React from 'react'
import { Link } from 'react-router-dom';
import logoImage from '../images/IMG_5416.png';
import School_bg from "../images/school_bg.png"

function Request_cert() {
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
              {/* Logo and School Name */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logoImage} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                <h5 style={{ textAlign: 'right', marginLeft: '10px', marginBottom: '0' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h5>
              </div>
            </Link>
            
            <div className="nav navbar-nav navbar-right"> 
              <span className='nav-link'>
              <Link to='/Parent_menu' style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>เลือกเมนู</Link>
              </span>
            </div>
          </div>
        </nav>
        <div style={containerStyle}>
        <img src={School_bg} alt="School Background" width="1899" height="320" style={imageStyle}/>
        <div style={textOverlayStyle}>
        <h2 style={{ textAlign: 'center',fontWeight: 'bold',fontSize: '56px' }}>ระบบยื่นคำร้องขอใบรับรอง</h2>
         {/* <h5 style={{ textAlign: 'center',fontWeight: 'bold',fontSize: '32px' }}>บริการสำหรับผู้ปกครอง</h5> */}
        </div>
      </div>
      <br></br>
      {/* <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <h2 className="ms-3 mb-0"></h2>
        </div>
      </div> */}
      <div class="container d-flex justify-content-center">
	<div class="card mx-5 my-5">
		<div class="card-body px-2">
			<h2 class="card-heading px-3">เลือกประเภทใบรับรอง</h2>
			{/* <h5 class="card-subheading px-3 pb-3">It's quick and easy.</h5> */}
			<form>
			<div class="row rone">
				<div class="form-group col-md-5 fone">
					<input type="text" class="form-control" placeholder="First name"/>
				</div>
				<div class="form-group col-md-5 ftwo">
					<input type="text" class="form-control ml-3" placeholder="Last name"/>
				</div>
			</div>
			<div class="row rtwo">
				<div class="form-group col-md-12 fthree">
					<input type="email" class="form-control" placeholder="Mobile number or Email"/>
					<small class="text-muted"><p class="para1 pt-2 pl-1">You'll need to confirm that email or phone belongs to you.</p></small>
				</div>
			</div>
			<div class="row rthree">
				<div class="form-group col-md-5 ffour">
					<input type="password" class="form-control" placeholder="Password"/>
				</div>
				<div class="form-group col-md-5 ffive">
					<input type="password" class="form-control ml-3" placeholder="Confirm password"/>
				</div>
				<small class="text-muted px-3"><p class="para2 pl-3">Use 8 or more characters with a mix of letters,numbers &<br></br>symbols</p></small>
			</div>
			<div class="row rfour">
				<div class="col-md-4 ml-3">
					<button type="submit" class="btn btn-primary mt-3"><span>Next step</span></button>
				</div>
			</div>
			</form>
		</div>
	</div>
</div>
      </>
      ) 
}

export default Request_cert