import React, { Suspense, useEffect, lazy } from 'react';
import { BrowserRouter, HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import Game from './game/Game';
import Blog from './blog/blog';
import './App.css';

const Home = lazy(() => import('pages/Home'));
const Game = lazy(() => import('pages/Game'));
const Blog = lazy(() => import('pages/blog'));

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');
    if (redirectPath) {
      console.log(redirectPath)
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
};

const App = () => {
  
  return (
    <HashRouter>

      <RedirectHandler />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gm" element={<Game />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;