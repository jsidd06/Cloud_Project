import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import FormPage from './views/Form/FormPage'
import FormTable from './views/Form/FormTable'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/formtable" element={<FormTable />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
