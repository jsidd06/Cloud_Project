import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Input,
  FormGroup,
  CardFooter,
  Button,
  CardHeader,
  CardTitle,
  Label,
} from 'reactstrap'
import { formFields } from '../../fake-data'

function FormPage() {
  const [formData, setFormData] = React.useState([])
  console.log(formData)
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={12} md={6}>
          <Card>
            <CardHeader>
              <CardTitle>Selected Form</CardTitle>
            </CardHeader>
            <CardBody>
              {formData.map((fd, i) => (
                <FormGroup key={i}>
                  <Label>{fd.label}</Label>
                  <Input type={fd.type} />
                </FormGroup>
              ))}
            </CardBody>
            <CardFooter>
              <Button>Submit</Button>
            </CardFooter>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          {formFields.map((field, index) => (
            <Card key={index} className="m-2 p-4">
              <CardBody>
                <Row>
                  <Col>
                    <p style={{ fontSize: 20 }}>{field.label}</p>
                  </Col>
                  <Col>
                    <Input
                      type="checkbox"
                      style={{ fontSize: 30 }}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData((preValue) => [
                            ...preValue,
                            formFields[index],
                          ])
                        } else {
                          setFormData([])
                        }
                      }}
                    />
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
