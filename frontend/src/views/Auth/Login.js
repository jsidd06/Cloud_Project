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
import { Link, Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginData, setDataLogin] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === '' || password === '') {
      toast('Please correctly fill your username and password!')
    }
    Axios.post('/login', {
      username,
      password,
    })
      .then((res) => {
        console.log(res)
        setDataLogin(res.data)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('name', res.data.firstName)
        toast('Login Successfully!')
        window.location.href = '/form'
      })
      .catch((err) => {
        console.log(err)
        toast('This not valid Please fill login process properly!')
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
                value={username}
                placeholder="Enter your username"
                required
                invalid={username === '' ? true : false}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                invalid={password === '' ? true : false}
              />
            </FormGroup>
          </CardBody>
          <CardFooter>
            {loginData ? null : (
              <Button className="btn btn-primary m-2 " onClick={handleSubmit}>
                Login
              </Button>
            )}
            <Link className="btn btn-primary" to="/signup">
              Signup
            </Link>
            <ToastContainer />
          </CardFooter>
        </Form>
      </Card>
    </Layout>
  )
}

export default Login
