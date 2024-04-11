import React from 'react'
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
   <>
   <BrowserRouter>
    <Signup />
    </BrowserRouter>
   </>
  )
}
