import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/Header';
const History_request = () => {
  const linkStyle = {
    color: 'gray',
    textDecoration: 'none'
  };

  // เพิ่ม state สำหรับเก็บข้อมูลจากฟอร์ม
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // รับค่า input จากฟอร์มและอัปเดต state ตามชื่อ input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // สร้างฟังก์ชันสำหรับการ submit ฟอร์ม
  const handleSubmit = (event) => {
    event.preventDefault();
    // ทำสิ่งที่คุณต้องการเมื่อกด submit ฟอร์ม
    console.log('Submit Form', formData);
    // เช่น ส่งข้อมูลไปยังเซิร์ฟเวอร์หรือทำการตรวจสอบข้อมูล
  };

  const [data, setData] = useState([
    {
      DateRequest: '1/10/2566',
      NoRequest: '00001',
      RequestType: 'ปพ.7',
      RequestDetail: 'เพื่อใช้ในการขอทุนการศึกษา',
      RequestStatus: 'รอดำเนินการ'
    },
    {
      DateRequest: '3/10/2566',
      NoRequest: '00002',
      RequestType: 'ปพ.7',
      RequestDetail: 'เพื่อใช้ในการขอทุนการศึกษา',
      RequestStatus: 'ดำเนินการเสร็จสิ้น'
    },
    {
      DateRequest: '5/10/2566',
      NoRequest: '00003',
      RequestType: 'ปพ.7',
      RequestDetail: 'เพื่อใช้ในการขอทุนการศึกษา',
      RequestStatus: 'กำลังดำเนินการ'
    },
  ]);
  const [selectedOption, setSelectedOption] = useState('เลือกสถานะคำร้องขอใบรับรอง');
  

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const filteredData = data.filter((item) => {
    if (selectedOption === 'เลือกสถานะคำร้องขอใบรับรอง') {
      return true;
    }
    return item.RequestStatus === selectedOption;
  });


  useEffect(() => {
    // ตั้งค่าค่าเริ่มต้นของ dropdown เมื่อหน้าจอถูก refresh
    setSelectedOption('เลือกสถานะคำร้องขอใบรับรอง');
  }, []); // ใช้ [] เพื่อให้ useEffect ทำงานเพียงครั้งเดียวหลังจากการ render แรก

 
  return (
    <>
      

      <Header header="ตรวจสอบประวัติการขอใบรับรอง" subhead="" />  

    
    <div className="d-flex flex-column"style={{fontFamily: 'Kanit, sans-serif',height:"100vh"}}>
      <div className="container flex-column align-items-center">
        <div className="mb-3"><br />
          <h2 className="align-items-center justify-content-center"style={{fontWeight:"bolder",fontSize:"25px"}}>สถานะคำร้องขอใบรับรอง</h2>
          <br />
          <div className="d-flex"style={{ flexWrap: 'wrap', margin: 'auto', fontSize: '18px' }}>
              <div>
                  <span style={{fontWeight:"bolder",fontSize:"20px",marginRight:"10px"}}>เลือกสถานะ</span>
                </div>
          <div className="dropdown" style={{ maxWidth: '100%'}}>
          <select value={selectedOption} onChange={handleSelectChange}className="custom-select w-full">
            <option value="เลือกสถานะคำร้องขอใบรับรอง">เลือกสถานะคำร้องขอใบรับรอง</option>
            <option value="รอดำเนินการ">รอดำเนินการ</option>
            <option value="ดำเนินการเสร็จสิ้น">ดำเนินการเสร็จสิ้น</option>
            <option value="กำลังดำเนินการ">กำลังดำเนินการ</option>
          </select>
          </div>
          </div>
        </div>

        
        {/* <div className="d-flex justify-content-center" style={{ height: 'auto', overflowY: 'auto' }}>
          <table className="table-bordered" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center',fontFamily: 'Kanit, sans-serif' }}>
            <thead>
              <tr>
                <th>วันที่ทำรายการ</th>
                <th>เลขที่คำร้อง</th>
                <th>ประเภทใบรับรอง</th>
                <th>รายละเอียด</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} style={{ height: '50px' }}>
                <td>{item.DateRequest}</td>
                <td>{item.NoRequest}</td>
                <td>{item.RequestType}</td>
                <td>{item.RequestDetail}</td>
                <td>{item.RequestStatus}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div> */}

            <div className="d-flex justify-content-center" style={{ height: 'auto', overflowY: 'auto' }}>
              <div className="table-wrapper">
                <table className="table table-bordered table-striped table-hover" style={{borderCollapse: 'collapse', textAlign: 'center',fontFamily: 'Kanit, sans-serif' }}>
                  <thead>
                    <tr>
                      <th>วันที่ทำรายการ</th>
                      <th>เลขที่คำร้อง</th>
                      <th>ประเภทใบรับรอง</th>
                      <th>รายละเอียด</th>
                      <th>สถานะ</th>
                    </tr>
                  </thead>
                  <tbody>
                  {filteredData.map((item, index) => (
                      <tr key={index} style={{ height: '50px' }}>
                        <td>{item.DateRequest}</td>
                        <td>{item.NoRequest}</td>
                        <td>{item.RequestType}</td>
                        <td>{item.RequestDetail}</td>
                        <td>{item.RequestStatus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
      </div>
      </div>

    </>
  );
}
export default History_request;