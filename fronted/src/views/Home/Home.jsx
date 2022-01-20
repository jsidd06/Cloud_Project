import React from 'react';
import {Link} from "react-router-dom"
function Home() {
  return <div className="mt-5 p-2" style={{textAlign: 'center'}}>
    <h1>Welcome to Add Your Own Business List</h1>
    <Link className="btn btn-danger mt-5"  to='/form'>Click here to Start</Link>
  </div>;
}

export default Home;
