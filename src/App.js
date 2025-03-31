import React from 'react';
import Home from './Home';
import Game from './game/Game';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from './blog/blog';
// Added comment
const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Harri1118" element={<Home />} />
          <Route path="/gm" element={<Game />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
