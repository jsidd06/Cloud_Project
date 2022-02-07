import React from 'react'
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
function Login() {
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
              <Input type="username" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" />
            </FormGroup>
          </CardBody>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Form>
      </Card>
    </Layout>
  )
}

export default Login
