import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import GamePage from './pages/GamePage';
import Menu from './pages/Menu';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Menu />}
      />
      <Route
        path="/game"
        element={<GamePage />}
      />
    </Routes>
  );
}

export default App;
