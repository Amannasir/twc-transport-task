import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "react-bootstrap/Image";
function NavMenu() {
  return (
    <Navbar className="colourTheme" expand="lg"  >
      <div style={{marginLeft:120 }}>
      <Image  className="m-0 " constant style={{width:160,height:60,}}
        src=
            "https://www.extraordinarybodies.org.uk/wp-content/uploads/2017/04/Telford-and-Wrekin-Council.jpg" 
        rounded
      /></div>
    <Container className="text-danger p-1" >
    
      <Navbar.Brand href="#home" constant style={ {color:"white"}}> <h4>TWC Transport</h4> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" constant style={ {color:"white"}}>Home </Nav.Link>
          <Nav.Link href="#link" constant style={ {color:"white"}}>Registration</Nav.Link>
          {/* <NavDropdown title="Services" id="basic-nav-dropdown"constant style={ {color:"white"}} >
            <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              London bridge
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">lane 1</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
             lane 2
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavMenu;

