import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import {FaGithub, FaTelegram, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom';

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
    <footer className='pt-4 fixed-bottom'>
      <div className="text-center p-3 bg-secondary text-light">
        © {new Date().getFullYear()} CppWithMrd . Barcha huquqlar <Link style={{textDecoration:"none",color:"inherit",cursor:"pointer"}} to={'/login'}>himoya</Link>langan.
      </div>
    </footer>
  );
};

export default Footer;
