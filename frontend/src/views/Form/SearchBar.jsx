import React from 'react'
import { Container, Input } from 'reactstrap'
import Axios from '../../config/Axios'

function SearchBar({ userData, setUserData }) {
  const searchButton = (e) => {
    e.preventDefault()
    Axios.post('/search', {
      search: e.target.value,
    })
      .then((res) => {
        console.log(res.data)
        setUserData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Container>
        <Input type="number" onChange={searchButton} />
    </Container>
  )
}

export default SearchBar
