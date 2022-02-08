import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { toast, ToastContainer} from 'react-toastify'
import { Table,Button } from 'reactstrap'
import Axios from '../../config/Axios'

function FormTable() {
  const [userData, setUserData] = useState([])
  const submitHandler = () => {
    if(!localStorage.getItem('token')){
      <Navigate to="/login" />
    }
      Axios.get('/get_form_data')
        .then((res) => {
          console.log(res.data)
          setUserData(res.data)
          toast('Now you set the Data')
        })
        .catch((err) => {
          console.log(err)
          toast('login is required')
        })
  }
  return (
    <>
      {!userData ? <Button onClick={submitHandler}>Check Your List Now </Button>
      : <Link to="/login">Login</Link> ? (
        <Table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <Navigate to="/login" />
      )}
      <ToastContainer />
    </>
  )
}

export default FormTable
