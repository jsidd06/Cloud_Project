import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import Header from '../../Components/data/Header'

function Layout({ children, ...rest }) {
  return (
    <Fragment>
      <Header />
      <Container {...rest} className="mt-5">
        {children}
      </Container>
    </Fragment>
  )
}

export default Layout
