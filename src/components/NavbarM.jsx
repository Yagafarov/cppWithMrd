import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import {FaGithub} from 'react-icons/fa'

import '../App.css'

const NavbarM = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">CppWithMrd</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Bosh sahifa</Nav.Link>
            <Nav.Link href="/tutorial">Qo'llanma</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">Biz haqimizda</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link target='__blank__' href="https://github.com/Yagafarov">
              <FaGithub className='icon' />
            </Nav.Link>
            <Nav.Link eventKey={2} href="/about">
               Info
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarM