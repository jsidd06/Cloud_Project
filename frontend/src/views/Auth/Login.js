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
import Axios from '../../config/Axios'
import Layout from '../../Components/data/Layout'
import { Navigate } from 'react-router-dom'
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginData, setDataLogin] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('/login', {
      username,
      password,
    })
      .then((res) => {
        console.log(res)
        setDataLogin(res.data)
        localStorage.setItem('token', res.data.token)
      })
      .catch((err) => {
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
              <Label>Username</Label>
              <Input
                type="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
          </CardBody>
          <CardFooter>
           {loginData ? <Navigate to="/form" /> : <Button onClick={handleSubmit}>Login</Button>}
          </CardFooter>
        </Form>
      </Card>
    </Layout>
  )
}

export default Login
