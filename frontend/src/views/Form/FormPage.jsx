import React, { useState } from 'react'
import {
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import { formFields } from '../../fake-data'
import { Controller, useForm } from 'react-hook-form'
import Axios from '../../config/Axios'
import { Navigate } from 'react-router-dom'
import FormTable from './FormTable'
import { toast, ToastContainer } from 'react-toastify'
import Layout from '../../Components/data/Layout'
import Select from 'react-select'
function FormPage() {
  const [formData, setFormData] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [newFieldData, setNewFieldData] = useState({})

  // add new form field state
  const [fieldType, setFieldType] = useState(null)
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

  // fires up when new field is submited
  const newFieldHandler = (e) => {
    e.preventDefault()
    // TODO...
    setFormData([...formData, newFieldData])
    setIsOpen(!isOpen)
    setNewFieldData({})
  }
  // then user submit the data we check the data with the help of axios
  const onSubmit = (data) => {
    if (!Object.keys(data).length) {
      toast.error('You must fill the form')
      return
    }
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key]
        if (!element) {
          delete data[key]
        }
        if (typeof element === 'object' && element !== null) {
          data[key] = element.value
        }
      }
    }
    // api call to backend with fronted to use of axios
    Axios.post('/submit-from', data)
      .then((res) => {
        toast('Now you can see the Form List')
        setFormData([])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const dropdownForm = () => {
    return (
      <FormGroup>
        <Label>Enter Values</Label>
        <Input
          type="text"
          name="values"
          value={newFieldData['values']}
          onChange={(e) =>
            setNewFieldData((preValue) => {
              return {
                ...preValue,
                [e.target.name]: e.target.value,
              }
            })
          }
        />
      </FormGroup>
    )
  }

  const inputForm = () => {
    return (
      <FormGroup>
        <Label>Field Type</Label>
        <Select
          options={[
            { label: 'Text', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Number', value: 'number' },
            { label: 'Password', value: 'password' },
            { label: 'Username', value: 'username' },
          ]}
          onChange={(e) =>
            setNewFieldData((preValue) => {
              return {
                ...preValue,
                ['input_type']: e.value,
              }
            })
          }
        />
      </FormGroup>
    )
  }

  console.log('new field data', newFieldData)
  return (
    <Layout className="mt-4">
      <h1 style={{ textAlign: 'center' }} className="mt-5 mb-5">
        Select your Business Data List
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>
            <Row>
              <Col sm="6">
                <h4 className="h4">Selected Form</h4>
              </Col>
              <Col style={{ textAlign: 'right' }} sm="6">
                <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
                  Add New
                </Button>
              </Col>
            </Row>
          </CardTitle>
        </CardHeader>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CardBody
            style={{ minHeight: 450, maxHeight: 450, overflowY: 'auto' }}
          >
            {/* we set the data in map and use controller to use the input */}
            <Row>
              {formData.map((fd, i) => (
                <Col sm={12} md={6}>
                  <FormGroup key={i}>
                    <Label>{fd.label}</Label>
                    {fd.type === 'Input' ? (
                      <Controller
                        name={fd.name}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type={fd.input_type}
                            placeholder={fd.placeholder}
                          />
                        )}
                        control={control}
                      />
                    ) : (
                      <Controller
                        name={fd.name}
                        render={({ field }) => (
                          <Select
                            {...field}
                            label={fd.placeholder}
                            options={fd.values.split(',').map((option) => ({
                              label: option,
                              value: option,
                            }))}
                          />
                        )}
                        control={control}
                      />
                    )}
                    {errors[fd.name] && (
                      <i className="text-danger">This field is required</i>
                    )}
                  </FormGroup>
                </Col>
              ))}
            </Row>
          </CardBody>
          <CardFooter>
            <Button>Submit</Button>
            <ToastContainer />
          </CardFooter>
        </Form>
      </Card>
      <FormTable />
      <Modal isOpen={isOpen} toggle={() => setIsOpen(isOpen)}>
        <ModalHeader toggle={() => setIsOpen(!isOpen)}>Modal title</ModalHeader>
        <Form onSubmit={newFieldHandler}>
          <ModalBody>
            <FormGroup>
              <Label>Enter Field Label</Label>
              <Input
                type="text"
                name="label"
                value={newFieldData['label']}
                onChange={(e) =>
                  setNewFieldData((preValue) => {
                    return {
                      ...preValue,
                      [e.target.name]: e.target.value,
                    }
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label>Enter Field Placeholder</Label>
              <Input
                type="text"
                name="placeholder"
                value={newFieldData['placeholder']}
                onChange={(e) =>
                  setNewFieldData((preValue) => {
                    return {
                      ...preValue,
                      [e.target.name]: e.target.value,
                    }
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label>Enter Field Name</Label>
              <Input
                type="text"
                name="name"
                value={newFieldData['name']}
                onChange={(e) =>
                  setNewFieldData((preValue) => {
                    return {
                      ...preValue,
                      [e.target.name]: e.target.value,
                    }
                  })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label>Enter Field Type</Label>
              <Select
                options={[
                  { label: 'Input Field', value: 'Input' },
                  { label: 'Dropdown', value: 'Select' },
                ]}
                onChange={(e) => {
                  setFieldType(e.value)
                  setNewFieldData((preValue) => {
                    return {
                      ...preValue,
                      ['type']: e.value,
                    }
                  })
                }}
              />
            </FormGroup>
            {fieldType
              ? fieldType === 'Select'
                ? dropdownForm()
                : inputForm()
              : null}
          </ModalBody>
          <ModalFooter>
            <Button>Add New</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </Layout>
  )
}

export default FormPage
