import React, { useEffect, useState } from 'react';
import Home from './Home';
import Game from './game/Game'
import { Route, Routes } from "react-router-dom";
const App = () =>{

  return (
    <>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gm" element={<Game/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;