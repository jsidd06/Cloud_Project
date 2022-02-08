import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap'

function Header() {
  return (
    <Fragment>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Firebase</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/form">Form</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            {localStorage.getItem('name') || <Link to="/login">Login</Link>}
          </NavbarText>
        </Collapse>
      </Navbar>
    </Fragment>
  )
}

export default Header
