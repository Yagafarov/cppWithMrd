import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import '../App.css';

import hImg from '../assets/images/home.gif';

const Home = () => {

  const handleClick = () => {
    // Boshqa sahifaga o'tish
    window.location.href = '/tutorial';
  };

  return (
    <Row className='conOut centerVer'>
      <Col xs={12} md={6} className='hContent' >
        <h1 className='text-primary text-uppercase'>Dasturlashni o'rganish uchun</h1>
        <p>
          Turli xil algoritmlar va ularni c++ dasturlash tilida realizatsiya qilish, C++ dasturlash tili sintaksisi va hayot tarzingizni
          osonlashtira oladigan texnologiyalar haiqda bilishni istaysizmi?
        </p>
        <Button variant='primary' onClick={handleClick} >Boshlash</Button>
      </Col>
      <Col xs={12} md={6} className='hImg'>
        <div className='home'>
          <Image src={hImg} className='img-fluid' />
        </div>
      </Col>
    </Row>
  );
};

export default Home;
