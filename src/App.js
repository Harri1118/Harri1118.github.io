import React, { Suspense, useEffect, lazy } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Game from './game/Game';
import Blog from './blog/blog';
import './App.css';

const Home = lazy(() => import('./Home'));

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>

      <RedirectHandler />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gm" element={<Game />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;