import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import school_logo from "../images/IMG_5416.png";
import printer_icon from "../images/printer_icon.png";
import search_icon from "../images/search_icon.png";

// import Navbar from '../components/Navbar'
import Header from '../components/Header';
const Student_List_Information = () => {

    const linkStyle = {
        color: 'gray',
        textDecoration: 'none'
      };
    
    const fontStyle = {
        fontFamily: 'Kanit, sans-serif',
        textDecoration: 'none'
      };

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [selectedSemester, setSelectedSemester] = useState('เลือกปีการศึกษา');
    const handleSelectChange = (event) => {
        setSelectedSemester(event.target.value);
      };
    
    const [data, setData] = useState([
    {
        year: 'ปีการศึกษา 2566 ภาคการศึกษาที่ 1',
        subjects: [
        { student_id: '6301012630095', first_name: 'เด็กหญิงนทณรรณ', last_name: 'ฝันดี'},
        { student_id: '6301012630133', first_name: 'เด็กหญิงพรหมพร', last_name: 'จุ๊บจิ๊บ'},
        { student_id: '6301012610000', first_name: 'เด็กหญิงตั้งใจเรียน', last_name: 'เรียนดี'},
        // เพิ่มข้อมูลผลการเรียนตามต้องการ
        ],
    },
    ]);

    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                {/* Logo and School Name */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={school_logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    <h5 style={{ textAlign: 'right', marginLeft: '10px', marginBottom: '0' }}>โรงเรียนฤทธิยะวรรณาลัย (ประถม)</h5>
                </div>
                </Link>
                <div className="nav navbar-nav navbar-right">
                <span className='nav-link'>
                <Link
                        to = "/"
                        style={{ ...linkStyle, fontFamily: 'Kanit, sans-serif' }}>
                        เลือกเมนู
                    </Link>
                </span>
                </div>
            </div>
            </nav>

            <Header header="ระบบจัดการข้อมูลการศึกษา" subhead="" />  
             
            <br />
            {/* <div className="container flex-column align-items-center">
                <h2 className="card-heading text-left mx-auto ml-auto" style={{ fontSize: '20px', marginTop: '2px' }}>ผลการค้นหา</h2>
            </div> */}
            <div className="card mx-auto my-0" style={{ width: "1000px", border: '1px solid white' }}>
                <div className="card-body">
                    <div className="form-group col-md-0 fone" style={{ padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>
                        <div className="d-flex align-items-center">
                            <h2 className="card-heading px-4" style={{ fontSize: '20px', marginTop: '2px' }}>ผลการค้นหา</h2>
                            <Link to="/">
                                <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '18px', textAlign: 'right', marginTop: '-15px'}}><span>ค้นหาข้อมูลใหม่</span></button>
                            </Link>
                        </div>

                        <div className="card mx-auto my-0"  style={{ width: "900px"}}>
                            <div className="card-body">
                                <div className="form-group col-md-0 fone" style={{ padding: '10px', margin: '10px', whiteSpace: "nowrap" }}>
                                    <div className="d-flex align-items-center">
                                        <h2 className="card-heading px-2" style={{ fontSize: '20px', marginTop: '2px' }}>ข้อมูลรายชื่อ</h2>
                                    </div>


                                
                                <br />
                                <div className="container flex-column align-items-center">
                                    <div className="d-flex justify-content-center" style={{ height: '300px', overflowY: 'auto', marginLeft: '0px' }}>
                                        <table className="table-bordered" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontFamily: 'Kanit, sans-serif', borderColor: '#D3D3D3' }}>
                                            <thead>
                                                <tr>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>เลขประจำตัวนักเรียน</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ชื่อ-สกุล</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>ดูผลการเรียน</th>
                                                    <th rowSpan="1" style={{ backgroundColor: '#FFFFFF', fontWeight: 'normal' }}>พิมพ์ข้อมูล</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {data[0].subjects.map((subject) => (
                                                    <tr key={subject.id} style={{ height: '50px' }}>
                                                        <td style={{ backgroundColor: '#FFFFFF' }}>{subject.student_id}</td>
                                                        <td style={{ backgroundColor: '#FFFFFF' }}>{subject.first_name + "  " + subject.last_name}</td>
                                                        <td style={{ backgroundColor: '#FFFFFF' }}>
                                                            {/* <img src={search_icon} alt="search_icon" style={{ width: '25px', height: '25px', cursor: 'pointer', marginTop: '-5px'}} />{" "}
                                                            <a href="/" style={{...fontStyle, color: 'black', fontSize: '16px'}}>ดูรายละเอียด</a> */}

                                                            <a href="/" style={{ ...fontStyle}}>
                                                                <img src={search_icon} alt="search_icon" style={{ width: '25px', height: '25px', cursor: 'pointer', marginTop: '-5px'}} /> {" "}
                                                                <span style={{ ...fontStyle, color: 'black', fontSize: '16px' }}>ดูรายละเอียด</span>
                                                            </a>
                                                        </td>
                                                        <td style={{ backgroundColor: '#FFFFFF' }}><img src={printer_icon} alt="printer_icon" style={{ width: '25px', height: '25px', cursor: 'pointer'}}
                                                        onClick={() => {
                                                            const fileUrl = "src/assets/พิมพ์ใบสมัครป.1.pdf";
                                                            const printWindow = window.open(fileUrl, "_blank", 'width=1000,height=800');
                                                            printWindow.print();
                                                        }}/></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                <br />
                                <Link to="/">
                                    <button type="submit" class="btn btn-primary float-end" style={{ ...fontStyle, color: 'white', fontSize: '16px', textAlign: 'right'}}><span>ย้อนกลับ</span></button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br />
        </>
    );
};

export default Student_List_Information;
