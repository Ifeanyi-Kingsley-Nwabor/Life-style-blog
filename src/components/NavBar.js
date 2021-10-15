import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import bkk from '../img/bkk.jpg'


const NavBar = () => {
    return (
        <div>
          <Navbar bg="primary" variant="dark" sticky='top'>
            <Container className='NavBarcontainer'>
              <Navbar.Brand className='logobtn bkk' href="#home"><img src={bkk} alt=''/></Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link className="homebtn" href="#home">Home</Nav.Link>
              <Nav.Link className="aboutbtn" href="#about">About</Nav.Link>
              <Nav.Link className="trendbtn" href="#trending">Trending</Nav.Link>
              <Nav.Link className="contactbtn" href="#contact">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
    )
}

export default NavBar;