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
  Label,
  Button,
} from 'reactstrap'
import Layout from '../../Components/data/Layout'
import Axios from '../../config/Axios'
  import { ToastContainer, toast } from 'react-toastify'
function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [signupData, setDataSignup] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    if(username === '' || password === '' || firstName === '' || lastName === ''){
      toast('Please fill the all fields correctly!')
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
              <Input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                value={lastName}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>username</Label>
              <Input
                type="username"
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </FormGroup>
          </CardBody>
          <CardFooter>
           {signupData ? <Link to="/login" className="btn btn-danger">Login</Link> : <Button onClick={handleSubmit}>Signup</Button>}
            <ToastContainer />
          </CardFooter>
        </Form>
      </Card>
    </Layout>
  )
}

export default Signup
