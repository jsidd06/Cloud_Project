import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
    if(username === '' || password === '' || firstName === '' || lastName === ''){
      alert('Please fill all the fields')
    }else{
      Axios.post('/signup', {
        username,
        password,
        firstName,
        lastName,
      })
        .then((res) => {
          console.log(res)
          setDataSignup(res.data)
          localStorage.setItem('token', res.data.token)
        })
        .catch((err) => {
          console.log(err)
        })
    }
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
              <Input type="text" required onChange={(e) => setFirstName(e.target.value)} />
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
            <Link to="/login"  className="btn btn-primary mr-4" onClick={handleSubmit}>Signup</Link>
          </CardFooter>
        </Form>
      </Card>
    </Layout>
  )
}

export default Signup
