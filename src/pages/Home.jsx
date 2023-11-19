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
        <br></br>
        <br></br>

    </>
  );
}

export default Home