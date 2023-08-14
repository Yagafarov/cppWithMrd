import React from 'react'
import { Image, Nav } from 'react-bootstrap'
import { FaGithub, FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa'
import aImg from '../assets/images/about.gif'

import '../App.css'

const About = () => {
  return (
    <div className='conOut centerVer'>


      <div className='text-center w-100'  >
        <Image src={aImg} className='img-fluid' />
        <h1>Dasturlash asoslari</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quae laborum, animi accusantium maxime quasi numquam doloribus tempore ipsam debitis reiciendis nesciunt aliquid aut, autem quam sunt neque! Nisi, deleniti!
        </p>
        <Nav className='justify-content-center'>
          <Nav.Item>
            <Nav.Link>
              <FaFacebook className='icon' /> Facebook
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <FaGithub className='icon' /> Github
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <FaInstagram className='icon' /> Instagram
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <FaTelegram className='icon' /> Telegram
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  )
}

export default About