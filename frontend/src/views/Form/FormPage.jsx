import React, { useState } from 'react'
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
import Axios from '../../config/Axios'
import { Navigate } from 'react-router-dom'
import FormTable from './FormTable'
import { toast, ToastContainer } from 'react-toastify'
function FormPage() {
  const [formData, setFormData] = useState([])
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()
  // if user is not login the first login and I'm checking the local storage generated token with the help of jwt
  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" />
  }
  // then user submit the data we check the data with the help of axios
  const onSubmit = (data) => {
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key]
        if (!element) {
          delete data[key]
        }
      }
    }
    // api call to backend with fronted to use of axios
    Axios.post('/submit-from', data)
      .then((res) => {
        toast('Now you set the Data')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Container className="mt-4">
      <h1 style={{ textAlign: 'center' }} className="mt-5 mb-5">
        Select your Business Data List
      </h1>
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
                {/* we set the data in map and use controller to use the input */}
                {formData.map((fd, i) => (
                  <FormGroup key={i}>
                    <Label>{fd.label}</Label>
                    <Controller
                      name={fd.name}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Input {...field} type={fd.type} />
                      )}
                      control={control}
                    />
                    {errors[fd.name] && (
                      <i className="text-danger">This field is required</i>
                    )}
                  </FormGroup>
                ))}
              </CardBody>
              <CardFooter>
                <Button>Submit</Button>
                <ToastContainer />
              </CardFooter>
            </Form>
          </Card>
        </Col>
        <Col sm={12} md={6} style={{ maxHeight: 560, overflowY: 'auto' }}>
          {/* show to table data using fake data info */}
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

      <FormTable />
    </Container>
  )
}

export default FormPage
