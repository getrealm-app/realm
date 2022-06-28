import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import EarlyAccess from './components/EarlyAccess';
import Home from './components/Home';
import Layout from './components/Layout';
import './static/css/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          {/* <Route path="/early-access" element={<EarlyAccess />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
