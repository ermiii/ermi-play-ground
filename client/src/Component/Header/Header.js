import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: white;
  }
  .navbar-brand {
    margin: 0;
    padding: 0;
  }
  .logo {
    height: 50px;
    padding-left: 5px;
    padding-right: 15px;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #414141;
    &:hoover {
      color: black;
    }
  }

  // Extra small devices (portrait phones, less than 576px)
  // No media query since this is the default in Bootstrap

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    .nav-bar {
      position: absolute;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    ...;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    ...;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    ...;
  }
  @media screen and (max-width: 520px){

}
`;

function Header() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand>
          <img
            className="img-responsive logo"
            src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavItem>
              <Nav.Link href="/#">Login</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/#/signUp">signUp</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
export default Header;
