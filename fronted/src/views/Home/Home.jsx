import React from 'react'
import { Container } from 'reactstrap'
import data from '../../Components/data/Data'
function Home() {
  
  return (
    <Container>
      {data.map((user,index) => (
        <>
          <div key={index}>{user.name}</div>
          <div>{user.age}</div>
        </>
      ))}
    </Container>
  )
}

export default Home
