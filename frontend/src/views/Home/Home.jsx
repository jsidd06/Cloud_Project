import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/data/Layout'
import Video from "../../video/list.mp4"
function Home() {
  return (
    <Layout>
      <div className="mt-5 p-2" style={{ textAlign: 'center' }}>
        <h1>Welcome to Add Your Own Business List</h1>
        <Link className="btn btn-warning mt-5" to="/form">
          Click here to Start
        </Link>
        <video
          muted
          loop
          autoPlay
          preload="auto"
          style={{ maxWidth: '100%', marginTop: '10px' }}
          src={Video}
        ></video>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p>
          Developed by AKSHAY KUMAR SINGH & SIDDHARTH JAIN
          <p>Copyright &copy;2022</p>
        </p>
      </div>
    </Layout>
  )
}

export default Home
