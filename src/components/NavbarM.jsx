import React, { useEffect } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import { FaGithub } from 'react-icons/fa'

import '../App.css'

const NavbarM = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && (event.key === 'm' || event.key === 'M')) {
        window.location.href = '/login';
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  return (
    
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand href="/" className='text-primary' >CppWithMrd</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Bosh sahifa</Nav.Link>
              <Nav.Link href="/tutorial">Qo'llanma</Nav.Link>
              <NavDropdown title="Qiziqarli" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/">Ternar operatori</NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Dimamik o'zgaruvchilar
                </NavDropdown.Item>
                <NavDropdown.Item href="/">OOP haqida</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  Ko'proq bilish
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">Biz haqimizda</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link target='__blank__' href="https://github.com/Yagafarov">
                <FaGithub className='icon' /> Github
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarM