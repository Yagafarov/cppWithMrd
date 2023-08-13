import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import '../App.css'

import hImg from '../assets/images/home.gif'

const Home = () => {
  return (
      <Row className='centerVer'>
        <Col>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit, provident dolores atque, suscipit rem nihil quidem sapiente maiores architecto ratione repellendus accusantium tempore ipsa laboriosam totam dolorum molestias vero?</p>
          <Button variant="primary">Boshlash</Button>
        </Col>
        <Col>
          <div className="home">
            <Image src={hImg} />
          </div>
        </Col>
      </Row>
  )
}

export default Home