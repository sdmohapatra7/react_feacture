import React from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './components/Home';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
