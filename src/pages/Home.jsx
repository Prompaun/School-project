import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
const Home = () => {


  return (
    <>
      <Navbar/>
   
      <Header header="ระบบจัดการสารสนเทศ" subhead="" />  
      
    <div class="d-flex flex-column align-items-center ">
  
  <h1 class="mt-5" >ประชาสัมพันธ์</h1>
 
  <div class="list-group mt-5"style={{ maxWidth: '90%', height: '100vh' }}>
    {/* <li class="list-group-item"><Card /></li> */}
    <Card />
  </div>
</div>

    </>
  );
}

export default Home