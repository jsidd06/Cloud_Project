import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Input,
  Form,
  FormGroup,
  Button,
  Label,
} from 'reactstrap'
import Layout from '../../Components/data/Layout'
import Axios from '../../config/Axios'

function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [signupData, setDataSignup] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('/signup', {
      username,
      password,
      firstName,
      lastName,
    }).then((res) => {
      console.log(res)
      setDataSignup(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <Layout>
      <Card>
        <CardHeader>
          <CardTitle>Signup</CardTitle>
        </CardHeader>
        <Form>
          <CardBody>
            <FormGroup>
              <Label>First Name</Label>
              <Input type="text" onChange={(e) => setFirstName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input type="text" onChange={(e) => setLastName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label>username</Label>
              <Input type="username" onChange={(e) => setUsername(e.target.value)}/>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </FormGroup>
          </CardBody>
          <CardFooter>
            <Button type="submit" onClick={handleSubmit}>Signup</Button>
          </CardFooter>
        </Form>
      </Card>
    </Layout>
  )
}

export default Signup
