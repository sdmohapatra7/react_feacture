import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Home />
        <Routes>
        <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
