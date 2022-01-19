import React from 'react'
import { Container, Row, Col, Card, CardBody, Input } from 'reactstrap'
import { formFields } from '../../fake-data'

function FormPage() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6}></Col>
        <Col sm={12} md={6}>
          {formFields.map((field, index) => (
            <Card key={index} className="m-2 p-4">
              <CardBody>
                <Row>
                  <Col>
                    <p style={{ fontSize: 20 }}>{field.label}</p>
                  </Col>
                  <Col>
                    <Input type="checkbox" style={{ fontSize: 30 }} />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default FormPage
