import './App.css';

import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer'

import HomePage from './Pages/HomePage'
import BookingPage from './Pages/BookingPage'

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <HomePage/> }></Route>
        <Route path="/book" element={ <BookingPage/> }></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
