import React from 'react'
import { Button, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'

function FormPage() {
  return (
    <Container style={{textAlign: 'center'}}>
      <h1>Add Your Order List</h1>
      <FormGroup style={{marginTop:10}}>
        <Row className="mt-3" >
          <Col md="6"><Label>Full Name</Label>
          <Input type="text"/>
          </Col>
          <Col md="6"><Label>Email</Label>
          <Input type="email"/>
          </Col>
        </Row>
        <Row className="mt-3" >
          <Col md="6"><Label>Phone Number</Label>
          <Input type="number"/>
          </Col>
          <Col md="6"><Label>Enter a City Name</Label>
          <Input type="text"/>
          </Col>
        </Row>
        <Row className="mt-3" >
          <Col md="6"><Label>Quantity of Product</Label>
          <Input type="number"/>
          </Col>
          <Col md="6"><Label>Received order</Label>
          <Input type="number"/>
          </Col>
        </Row>
        <Row className="mt-3" >
          <Col md="4"><Label>Received Cheque</Label>
          <Input type="number"/>
          </Col>
          <Col md="4"><Label>Date</Label>
          <Input type="date"/>
          </Col>
          <Col md="4">
          <Label>Payment info</Label>
          <Input type="text"/>
          </Col>
        </Row>
        <Button className="mt-3" type="submit">Submit</Button>
      </FormGroup>
    </Container>
  )
}

export default FormPage
