import React from 'react'
import { useState } from 'react'
import { Container, Input } from 'reactstrap'
import data from '../../Components/data/Data'
function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <Container>
      <Input
        placeholder="Search.."
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {data
        .filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
              <p>{item.age}</p>
            </div>
          )
        })}
    </Container>
  )
}

export default Home
