import React, { Suspense, useEffect, lazy } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import 'assets/styles/App.css'

const Home = lazy(() => import('pages/Home'));
const Game = lazy(() => import('pages/Game'));
const Blog = lazy(() => import('pages/blog'));

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