import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/data/Layout'
function Home() {
  return (
    <Layout>
      <div className="mt-5 p-2" style={{ textAlign: 'center' }}>
        <h1>Welcome to Add Your Own Business List</h1>
        <Link className="btn btn-warning mt-5" to="/form">
          Click here to Start
        </Link>
      </div>
    </Layout>
  )
}

export default Home
