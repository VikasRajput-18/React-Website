import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route , Navigate } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact='true' path="/" element={<Home />} />
        <Route exact='true' path="/about" element={<About />} />
        <Route exact='true' path="/contact" element={<Contact />} />
        <Route exact='true' path="/service" element={<Service />} />
         <Route path='/*' exact='true' element= {<Home/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
