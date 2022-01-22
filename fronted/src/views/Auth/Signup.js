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

function Signup() {
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
              <Input type="text" />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input type="text" />
            </FormGroup>
            <FormGroup>
              <Label>username</Label>
              <Input type="username" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" />
            </FormGroup>
          </CardBody>
          <CardFooter>
            <Button>Signup</Button>
          </CardFooter>
        </Form>
      </Card>
    </Layout>
  )
}

export default Signup
