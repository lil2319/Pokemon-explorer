import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Pokedex from './pages/Pokedex.jsx';

export default function App() {
  return (
    <Router basename="/Pokemon-explorer">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
        </Route>
      </Routes>
    </Router>
  );
}
