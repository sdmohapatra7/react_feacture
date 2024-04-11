import React from 'react'
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
