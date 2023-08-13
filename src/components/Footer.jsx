import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import {FaGithub, FaTelegram, FaInstagram} from 'react-icons/fa'

const footerText ={
  about:"Biz bilabn bu sahifa orqali C++ dasturlash tilini mukammal tarzda o'rganishingiz mumkin bo'ladi.",
  email:"dinmuhammadyagafarov@gmail.com",
  tel:"+998 (94) 022-73-77",
  socLink:{
    link1:"/",
    link2:"/",
    link3:"/",
  }

}

const Footer = () => {
  return (
    <footer className='border pt-4'>
      <Container>
        <Row>
          <Col md={4}>
            <h3>Biz haqimizda</h3>
            <p>{footerText.about}</p>
          </Col>
          <Col md={4}>
            <h3>Bog'lanish</h3>
            <p>Email: {footerText.email}</p>
            <p>Phone: {footerText.tel}</p>
          </Col>
          <Col md={4}>
            <h3>Obuna bo'ling</h3>
            <p>Bizning ijtimoiy tarmoqlardagi sahifalarimiz</p>
            <Nav>
              <Nav.Link href={footerText.socLink.link1} className="me-3"> <FaGithub/> Github</Nav.Link>
              <Nav.Link href={footerText.socLink.link2} className="me-3"> <FaTelegram/> Telegram</Nav.Link>
              <Nav.Link href={footerText.socLink.link3} className="me-3"> <FaInstagram/> Instagram</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-secondary text-light">
        © {new Date().getFullYear()} CppWithMrd . Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
