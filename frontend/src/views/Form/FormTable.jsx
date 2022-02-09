import React, {  useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Table, Button } from 'reactstrap'
import Axios from '../../config/Axios'
import { formFields } from '../../fake-data'
import SearchBar from './SearchBar'

function FormTable() {
  const [userData, setUserData] = useState(null)
  const submitHandler = () => {
    Axios.get('/get_form_data')
      .then((res) => {
        console.log(res.data)
        setUserData(res.data)
        toast('Now you see the Data')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <Button onClick={submitHandler}>Check Your List Now </Button>
      <SearchBar userData={userData} setUserData={setUserData} />
      {userData && (
        <Table className="table-hover-animation text-center " responsive>
          <thead>
            <tr>
              {formFields.map((d) => {
                return <th style={{ minWidth: 200 }}>{d.label}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {userData.map((d) => {
              return (
                <tr>
                  {formFields.map((f) => {
                    return <td>{d[f.name] || 'Empty'}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </Table>
      )}
      <ToastContainer />
    </>
  )
}

export default FormTable
