import React from 'react';
import Home from "./pages/Home";

import Login from './pages/Login';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ConditionSearch from './pages/ConditionSearch';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        {/* <Route exact path="/condition/:id" element={<ConditionSearch/>}/> */}
      </Routes>
    </Router>
    

  )
}

export default App
