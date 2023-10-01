import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Home = () => {
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
    <>
      <Navbar/>
      <div style={containerStyle}>
        <img src="src\images\school_bg.png" alt="School Background" width="1899" height="320" style={imageStyle}/>
        <div style={textOverlayStyle}>
          <h2 style={{ textAlign: 'center',fontWeight: 'bold',fontSize: '56px'}}>ระบบจัดการสารสนเทศ</h2>
        </div>
      </div>
      <ul class="list-inline small">
        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
        <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
      </ul>
      <h1 class="text-header text-center">ประชาสัมพันธ์</h1>
      <ul class="list-inline small">
        <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
        <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
      </ul>
      <div class="d-flex justify-content-center">
            <ul class="list-group">
                <li class="list-group-item"> <Card /></li>
        </ul>
        </div>
    </>
  );
}

export default Home