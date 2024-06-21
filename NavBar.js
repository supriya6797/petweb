
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const NavBar = () => {
    return ( <>
      <Navbar collapseOnSelect expand="md" className="navbar" fixed="top">
      <Container>
        <Navbar.Brand href="/home">GLOCAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Categories">Categories</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">product</Nav.Link>
            <Nav.Link href="#deets">Contact</Nav.Link> 
          </Nav>
          {/*  */} 
      <Nav className="button" activeKey="/home">
        <Nav.Item className='one'>
          <Nav.Link href="/home">Signin</Nav.Link>
        </Nav.Item>
        <Nav.Item className='two'>
          <Nav.Link eventKey="link-1">Register</Nav.Link>
        </Nav.Item>
      
      </Nav>
          </Navbar.Collapse> 
      </Container>
       
    </Navbar>
   
   
    
    </> );
}
 
export default NavBar;

