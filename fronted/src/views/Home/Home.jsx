import React from "react";
import { Link } from "react-router-dom";

const div = {
  textAlign: "center",
  fontSize: "3rem",
  marginTop: "10%",
};

function Home() {
  return (
    <div style={div}>
      <h1 style={div}>Welcome to the Home Page</h1>
      <Link to="/form">Go</Link>
    </div>
  );
}

export default Home;
