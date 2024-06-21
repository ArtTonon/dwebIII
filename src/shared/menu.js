import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Navbar style={{backgroundColor: 'blue'}} >
      <Container >
          <Nav >
            <Nav.Link ><Link to={"home"} style={{color: 'white', textDecoration: 'none'}}>Home</Link></Nav.Link>
            <Nav.Link><Link to={"login"}style={{color: 'white', textDecoration: 'none'}} >Login</Link></Nav.Link>
            <Nav.Link><Link to={"checkout"}style={{color: 'white', textDecoration: 'none'}}>Checkout</Link></Nav.Link>
            <Nav.Link><Link to={"account"}style={{color: 'white', textDecoration: 'none'}}>Account</Link></Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
