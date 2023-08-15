import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {AiOutlineRollback} from 'react-icons/ai'
const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = () => {
    if (loginData.username === 'admin' && loginData.password === 'admin') {
      window.location.href = '/admin';
    } else {
      alert("login yoki parol xato");
    }
  };
  
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='conOut centerVer'>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="text-center mb-4">
              <h2>Tizimga kirish</h2>
            </div>
            <Form>
              <Form.Group controlId="formBasicEmail" className='mb-4'>
                <Form.Label>Login</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Login"
                  value={loginData.username}
                  onChange={handleChange}
                  />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className='mb-4'>
                <Form.Label>Parol</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Parol"
                  value={loginData.password}
                  onChange={handleChange}
                  />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                block
                className='w-100'
                onClick={handleLogin}
                >
                Kirish
              </Button>
            </Form>
            <div className=' my-3 text-center'>
                <Link to={"/"} className='bg-light' style={{fontSize:"20px"}}>
                <AiOutlineRollback/>
                </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
