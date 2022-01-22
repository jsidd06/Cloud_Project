import React, { Fragment } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
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
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Form
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>User Name</NavbarText>
        </Collapse>
      </Navbar>
    </Fragment>
  )
}

export default Header
