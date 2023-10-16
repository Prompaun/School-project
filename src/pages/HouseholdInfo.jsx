import React, { useState } from 'react';

const HouseholdInfo = () => {
  const [houseNumber, setHouseNumber] = useState('');
  const [villageNumber, setVillageNumber] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [street, setStreet] = useState('');
  const [alley, setAlley] = useState('');
  const [file, setFile] = useState(null);

  // Dummy data for provinces, districts, and sub-districts
  const provinces = ['กรุงเทพมหานคร', 'นนทบุรี', 'ปทุมธานี', 'สมุทรปราการ', 'สมุทรสงคราม'];
  const districtOptions = {
    'กรุงเทพมหานคร': ['พระนคร', 'ดุสิต', 'หนองจอก', 'บางรัก'],
    'นนทบุรี': ['เมืองนนทบุรี', 'บางกรวย', 'ปากเกร็ด'],
    // Add more provinces and corresponding districts here
  };
  const subDistrictOptions = {
    'พระนคร': ['พระบรมมหาราชวัง', 'วัดราชบพิธ', 'สำราญราษฎร์'],
    'ดุสิต': ['วชิรพยาบาล', 'สวนจตุจักร', 'อนุสาวรีย์'],
    // Add more districts and corresponding sub-districts here
  };

  const streetOptions = {
    'พระบรมมหาราชวัง': ['ถนน1', 'ถนน2', 'ถนน3'],
    'วชิรพยาบาล': ['สามเสน', 'ศรีอยุธยา ', 'ราชวิถี'],
    // Add more districts and corresponding sub-districts here
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);
    setDistrict('');
    setSubDistrict('');
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);
    setSubDistrict('');
  };

  const handlesubDistrictChange = (e) => {
    const selectedsubDistrict = e.target.value;
    setSubDistrict(selectedsubDistrict);
    setStreet('');
  };

  const allowedFileTypes = ['.jpg', '.jpeg', '.png'];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = '.' + file.name.split('.').pop().toLowerCase();
      if (allowedFileTypes.includes(fileType)) {
        // ไฟล์ถูกต้อง ทำตามต้องการทำ
      } else {
        alert('กรุณาเลือกไฟล์ที่มีนามสกุล .pdf .jpg, .jpeg หรือ .png เท่านั้น');
        // ไม่อนุญาตให้อัพโหลดไฟล์ที่มีนามสกุลไม่ถูกต้อง
        event.target.value = ''; // ล้างค่า input file ให้ว่าง
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Basic validation: Check if required fields are empty
    if (!houseNumber || !villageNumber || !province || !district || !subDistrict || !street || !alley || !file) {
      alert('Please fill out all fields and upload a file.');
      return;
    }
  
    // Perform form submission logic here (e.g., send data to server via API call)
    // You can also show a loading spinner during the submission process
  
    // Reset the form fields after submission
    setHouseNumber('');
    setVillageNumber('');
    setProvince('');
    setDistrict('');
    setSubDistrict('');
    setStreet('');
    setAlley('');
    setFile(null);
  
    // Show a success message to the user
    alert('Form submitted successfully!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontFamily: 'Kanit, sans-serif' }}>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} onSubmit={handleSubmit}><br />
      
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>

        <label>
          <span style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>บ้านเลขที่:</span>
        </label>
        <div className="col-sm-1.2 d-flex align-items-center">
            <input type="text" className="form-control" placeholder="กรอกบ้านเลขที่" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} />
        </div>
        

        <label>
          <span style={{ margin: '0 20px' }}></span> 
          <span style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>หมู่ที่:</span>
        </label>
          <div className="col-sm-1 d-flex align-items-center">
            <input type="text" className="form-control" placeholder="กรอกหมู่" value={villageNumber} onChange={(e) => setVillageNumber(e.target.value)} />
          </div>
        

        <label>
          <span style={{ margin: '0 20px' }}></span> 
          <span style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>ซอย:</span>
        </label>
          <div className="col-sm-2 d-flex align-items-center">
            <input type="text" className="form-control" id="Alley" name="Alley" placeholder="กรอกซอย" />
          </div>
        
          <label>
          <span style={{ margin: '0 20px' }}></span> 
          <span style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>ถนน:</span>
        </label>
          <div className="col-sm-3 d-flex align-items-center">
            <input type="text" className="form-control" id="streety" name="street" placeholder="กรอกถนน" />
          </div>

      </div><br />

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
        <label style={{ marginRight: '20px' }}>
          <span style={{ marginRight: '10px' }}>จังหวัด:</span>
            <select value={province} onChange={handleProvinceChange}>
              <option value="">กรุณาเลือกจังหวัด</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
        </label><br />
        <label style={{ marginRight: '20px' }}>
          <span style={{ marginRight: '10px' }}>เขต/อำเภอ:</span>
          <select value={district} onChange={handleDistrictChange}>
            <option value="">กรุณาเลือกเขต/อำเภอ</option>
            {districtOptions[province] && districtOptions[province].map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </label><br />
        <label style={{ marginRight: '20px' }}>
          <span style={{ marginRight: '10px' }}>แขวง/ตำบล:</span>
          <select value={subDistrict} onChange={(e) => setSubDistrict(e.target.value)}>
            <option value="">กรุณาเลือกแขวง/ตำบล</option>
            {subDistrictOptions[district] && subDistrictOptions[district].map((subDistrict) => (
              <option key={subDistrict} value={subDistrict}>
                {subDistrict}
              </option>
            ))}
          </select>
        </label><br />
      </div><br />

      {/* <div style={{ display: 'flex', gap: '10px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
        <label style={{ marginRight: '20px' }}>
          <span style={{ marginRight: '10px' }}>แขวง/ตำบล:</span>
          <select value={subDistrict} onChange={(e) => setSubDistrict(e.target.value)}>
            <option value="">กรุณาเลือกแขวง/ตำบล</option>
            {subDistrictOptions[district] && subDistrictOptions[district].map((subDistrict) => (
              <option key={subDistrict} value={subDistrict}>
                {subDistrict}
              </option>
            ))}
          </select>
        </label><br />
        <label style={{ marginRight: '20px' }}>
          <span style={{ marginRight: '10px' }}>ถนน:</span>
          <select value={street} onChange={(e) => setStreet(e.target.value)}>
            <option value="">กรุณาเลือกถนน</option>
            {streetOptions[subDistrict] && streetOptions[subDistrict].map((street) => (
              <option key={street} value={street}>
                {street}
              </option>
            ))}
          </select>
        </label><br />
      </div><br /> */}

      {/* <div style={{ display: 'flex', alignItems: 'center' }}>
        <label style={{ marginRight: '10px' }}>
          อัพโหลดไฟล์สำเนาทะเบียนบ้าน:
          <input type="file" class="form-control px-3" id="customFile" onChange={handleFileUpload} />
        </label><br />
      </div><br /> */}

      {/* <div style={{ display: 'flex', alignItems: 'center' }}>
        <label style={{ marginRight: '10px' }}>
          อัพโหลดไฟล์สำเนาทะเบียนบ้าน:
        </label>
        <input type="file" className="form-control px-3" onChange={handleFileUpload} />
      </div><br /> */}

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: 'Kanit, sans-serif', fontSize: '16px'}}>
          <label style={{ marginRight: '10px', whiteSpace: 'nowrap' }}>
            อัพโหลดไฟล์สำเนาทะเบียนบ้าน:
          </label>
          <input type="file" className="form-control px-3" onChange={handleFileUpload} accept=".pdf .jpg, .jpeg, .png" />
        </div>
      <br />



      </form>
      {/* <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-start' }}> */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <button type="submit" className="btn btn-primary">ย้อนกลับ</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="submit" className="btn btn-primary">ถัดไป</button>
        </div>
      </div>
    </div>
  );
};

export default HouseholdInfo;
