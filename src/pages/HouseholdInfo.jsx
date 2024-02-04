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

  const allowedFileTypes = ['.pdf', '.jpg', '.jpeg', '.png'];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = '.' + file.name.split('.').pop().toLowerCase();
      if (allowedFileTypes.includes(fileType)) {
        // ไฟล์ถูกต้อง ทำตามต้องการทำ
      } else {
        alert('กรุณาเลือกไฟล์ที่มีนามสกุล .pdf, .jpg, .jpeg หรือ .png เท่านั้น');
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

  const [activeTab, setActiveTab] = useState('menu1');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Kanit, sans-serif',
    }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontFamily: 'Kanit, sans-serif', fontSize: '16px' }}>
          <div className="d-flex align-items-center">
          
              <span style={{flexWrap: 'wrap' }}>บ้านเลขที่ :</span>
              </div>
              <div className="align-items-center"style={{maxWidth:"100%"}}> 
            <input type="text" className="form-control" placeholder="กรอกบ้านเลขที่" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} />
          </div>
    
          <div className="d-flex align-items-center">
           
              <span style={{flexWrap: 'wrap' }}>หมู่ที่ :</span>
              </div>
              <div className="align-items-center"style={{maxWidth:"100%"}}> 
            <input type="text" className="form-control" placeholder="กรอกหมู่" value={villageNumber} onChange={(e) => setVillageNumber(e.target.value)} />
          </div>
    
          <div className="d-flex align-items-center">
            
              <span style={{flexWrap: 'wrap' }}>ซอย :</span>
              </div>
              <div className="align-items-center"style={{maxWidth:"100%"}}> 
            <input type="text" className="form-control" id="Alley" name="Alley" placeholder="กรอกซอย" />
          </div>
    
          <div className="d-flex align-items-center">
            <label>
              
              <span style={{flexWrap: 'wrap' }}>ถนน :</span>
            </label>
            </div>
            <div className="align-items-center"style={{maxWidth:"100%"}}> 
            <input type="text" className="form-control" id="streety" name="street" placeholder="กรอกถนน" />
          </div>
        </div>
    
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', fontFamily: 'Kanit, sans-serif', fontSize: '16px', marginTop: '20px' }}>
          <div className="d-flex align-items-center">
           
              <span style={{flexWrap: 'wrap' }}>จังหวัด :</span>
              </div>
              <div class="h-screen flex flex-col justify-left sm:flex-row">
                 <div class="sm:w-1_3 sm:pr-3">
                    <div class="dropdown"style={{maxWidth:"100%"}} >
                  <select value={province} onChange={handleProvinceChange} class="custom-select w-full">
                    <option value="">กรุณาเลือกจังหวัด</option>
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                  </div>
              </div>
          </div>
    
          <div className="d-flex align-items-center">
            
              <span style={{flexWrap: 'wrap' }}>เขต/อำเภอ :</span>
              </div>
              <div class="h-screen flex flex-col justify-left sm:flex-row">
                 <div class="sm:w-1_3 sm:pr-3">
                    <div class="dropdown"style={{maxWidth:"100%"}} >
                      <select value={district} onChange={handleDistrictChange} class="custom-select w-full">
                        <option value="">กรุณาเลือกเขต/อำเภอ</option>
                        {districtOptions[province] && districtOptions[province].map((district) => (
                          <option key={district} value={district}>
                            {district}
                          </option>
                        ))}
                      </select>
                  </div>
                </div>
          </div>
    
          <div className="d-flex align-items-center"style={{ flexWrap: "wrap" }}>
            
              <span style={{  flexWrap: "wrap" }}>แขวง/ตำบล :</span>
              </div>
              <div class="h-screen flex flex-col justify-left sm:flex-row">
                 <div class="sm:w-1_3 sm:pr-3">
                    <div class="dropdown"style={{maxWidth:"100%"}} >
                        <select value={subDistrict} onChange={(e) => setSubDistrict(e.target.value)} class="custom-select w-full">
                          <option value="">กรุณาเลือกแขวง/ตำบล</option>
                          {subDistrictOptions[district] && subDistrictOptions[district].map((subDistrict) => (
                            <option key={subDistrict} value={subDistrict}>
                              {subDistrict}
                            </option>
                          ))}
                        </select>
                        </div>
                </div>
          </div>
        </div>
    
        <div style={{ fontSize: '16px',marginTop:"20px"}}>
          <div className="align-items-center"style={{ marginRight: '10px' }}>
          <label className="col-form-label">อัพโหลดไฟล์สำเนาทะเบียนบ้าน :</label>
              
            </div>
              <div className="align-items-center">
          <input type="file" className="form-control" style={{maxWidth:"70%"}}onChange={handleFileUpload} accept=".pdf, .jpg, .jpeg, .png" />
          <br />
        </div>
      
      </div>
      <br></br>

      </form>
    </div>
  );
};

export default HouseholdInfo;
