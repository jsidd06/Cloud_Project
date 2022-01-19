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
        onChange={(event) => console.log(setSearchTerm(event.target.value))}
      />
      {data
        .filter((item) => {
          if (searchTerm === '') {
            return item
          } else if (
            item.name
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return item
          } 
        })
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
