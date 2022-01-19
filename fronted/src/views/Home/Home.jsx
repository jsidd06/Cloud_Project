import React from 'react'
import { useState } from 'react'
import { Container, Input } from 'reactstrap'
import data from '../../Components/data/Data'
function Home() {
  const [search, setSearch] = useState("")
  return (
    <Container>
      <Input
        placeholder="Search"
        type="text"
        onChange={(event) => console.log(setSearch(event.target.value))}
      />

      {data.map((item, index) =>  { return (
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
