import React from "react";
import { Link, withRouter } from "react-router-dom";
import ReactBootstrap, {Navbar, Container, Nav} from 'react-bootstrap'

function Navigation(props) {
   const handleSelect = (eventKey) => {
       if(sessionStorage.getItem("username")==null)
       {
          // alert("I am here")
          props.location.pathnam = "/Login";
       }
   };   
  return (
    <div className="navigation">
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand   href="/">Sagarika's Profile</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
       <Nav activeKey = {props.location.pathname} onSelect={handleSelect}  className="justify-content-end" >
      <Nav.Link href="/About">About her</Nav.Link>
      <Nav.Link href="/Experience">
       Work Experience
      </Nav.Link>
      <Nav.Link href="/Technologies">
       Technologies
      </Nav.Link>
      <Nav.Link href="/Login">
       Login to Access
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}

export default withRouter(Navigation);