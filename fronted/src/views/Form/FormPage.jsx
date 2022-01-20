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
  Form,
} from 'reactstrap'
import { formFields } from '../../fake-data'
import { Controller, useForm } from 'react-hook-form'

function FormPage() {
  const [formData, setFormData] = React.useState([])
  const { control, handleSubmit, setValue } = useForm()
  const onSubmit = (data) => {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key]
        if (!element) {
          delete data[key]
        }
      }
    }
    console.log(data)
  }
  return (
    <Container className="mt-4">
      <h1 style={{textAlign: 'center'}} className="mt-5 mb-5">Select your Business Data List</h1>
      <Row>
        <Col sm={12} md={6}>
          <Card>
            <CardHeader>
              <CardTitle>Selected Form</CardTitle>
            </CardHeader>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <CardBody
                style={{ minHeight: 450, maxHeight: 450, overflowY: 'auto' }}
              >
                {formData.map((fd, i) => (
                  <FormGroup key={i}>
                    <Label>{fd.label}</Label>
                    <Controller
                      name={fd.name}
                      render={({ field }) => (
                        <Input {...field} type={fd.type} />
                      )}
                      control={control}
                    />
                  </FormGroup>
                ))}
              </CardBody>
              <CardFooter>
                <Button>Submit</Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
        <Col sm={12} md={6} style={{ maxHeight: 560, overflowY: 'auto' }}>
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
                          setValue(field.name, '')
                          setFormData(
                            formData.filter((fd) => fd.id !== field.id)
                          )
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
