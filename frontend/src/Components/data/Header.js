import React, { Fragment, useState } from 'react'
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
  Tooltip,
} from 'reactstrap'

import { LogOut } from 'react-feather'

function Header() {
  const logoutHandler = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    window.location.href = '/login'
  }
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
      <Navbar color="light" expand="md" light>
        <NavbarBrand className="me-auto" href="/">
          Business List
        </NavbarBrand>
        <NavbarToggler className="m2-2" onClick={() => setOpen(!open)} />
        <Collapse navbar isOpen={open}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/form">Form</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            {localStorage.getItem('name') ? (
              <>
                <span>Welcome {localStorage.getItem('name')}</span>
                <span
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Logout"
                  style={{ marginLeft: 20, padding: 10, cursor: 'pointer' }}
                  onClick={logoutHandler}
                >
                  <LogOut size={30} />
                </span>
              </>
            ) : (
              <Link className="btn btn-default" to="/login">
                Login
              </Link>
            )}
          </NavbarText>
        </Collapse>
      </Navbar>
    </Fragment>
  )
}

export default Header
