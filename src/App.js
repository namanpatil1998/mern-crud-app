import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './component/Home';
import Navbar from './component/navbar';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from './component/Register';
import Edit from './component/Edit';
import Details from './component/Details';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Register" element={<Register/>}/>
        <Route exact path="/Edit/:id" element={<Edit/>}/>
        <Route exact path="/view/:id" element={<Details/>}/>
      </Routes>
    </>
  );
}

export default App;
