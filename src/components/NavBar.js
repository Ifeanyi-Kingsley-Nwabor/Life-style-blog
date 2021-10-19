import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import bkk from '../img/bkk.jpg'
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
      <div>

  <nav className='NavBarcontainer'>
              
              <Navbar.Brand className='logobtn bkk' href="#home"><img src={bkk} alt=''/></Navbar.Brand>
              <NavLink to="/" className="homebtn">Home</NavLink>
              
              <NavLink to="/about" className="aboutbtn">About us</NavLink>
              
              <NavLink to="/trending" className="trendbtn">Trending</NavLink>
              
              <NavLink to="/contact" className="contactbtn" activeClassName="special-link">Contact</NavLink>
            
            </nav>
        
        </div>
      )
    }
    
    export default NavBar;
    // <div>
    //   <Navbar bg="primary" variant="dark" sticky='top'>
    //     <Container className='NavBarcontainer'>
    //       <Navbar.Brand className='logobtn bkk' href="#home"><img src={bkk} alt=''/></Navbar.Brand>
    //       <Nav className="me-auto">
    //       <Nav.Link className="homebtn" href="#home">Home</Nav.Link>
    //       <Nav.Link className="aboutbtn" href="#about">About</Nav.Link>
    //       <Nav.Link className="trendbtn" href="#trending">Trending</Nav.Link>
    //       <Nav.Link className="contactbtn" href="#contact">Contact</Nav.Link>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    // </div>