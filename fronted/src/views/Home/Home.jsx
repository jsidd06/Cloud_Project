import React from 'react'
import { Container } from 'reactstrap'
import data from '../../Components/data/Data'
function Home() {
  
  return (
    <Container>
      {data.map((user) => (
      <div>{user.name}</div>
    ))}
    </Container>
  )
}

export default Home
