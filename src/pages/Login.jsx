import Navbar from '../components/Navbar'
import React from 'react';
import Card_role_login from '../components/Card_role_login';
import Header from '../components/Header';
function Login() {

  return (
    <>
      <Navbar/>
      <Header header="ระบบจัดการสารสนเทศ" subhead=""/>
      <br></br>
      <br></br>
      <h1 className="text-header text-center">เข้าสู่ระบบ</h1>
      <br></br>

        <Card_role_login />
    </>


  );
}

export default Login