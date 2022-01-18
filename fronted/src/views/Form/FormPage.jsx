import React from 'react'
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
function FormPage() {
  return (
    <Container>
      <FormGroup>
        <Row >
          <Col md="6"><Label>Name</Label>
          <Input type="text"/>
          </Col>
          <Col md="6"><Label>Name</Label>
          <Input type="text"/>
          </Col>
        </Row>
      </FormGroup>
    </Container>
  )
}

export default FormPage
