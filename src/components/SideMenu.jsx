import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const SideMenu = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);

    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, []);

  const handleClick = () => {
    if (isMobile) {
      props.Con();
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="side-menu-nav" className="mt-lg-5" onClick={handleClick}>
        Menu
      </Navbar.Toggle>
      <Navbar.Collapse id="side-menu-nav">
        <Nav className="flex-column">
          <Nav.Link href="#introduction" onClick={handleClick}>
            Kirish
          </Nav.Link>
          <Nav.Link href="#variables" onClick={handleClick}>
            O'zgaruvchilar
          </Nav.Link>
          <Nav.Link href="#control-structures" onClick={handleClick}>
            Strukturalar
          </Nav.Link>
          <Nav.Link href="#functions" onClick={handleClick}>
            Funksiyalar
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SideMenu;
