import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import ChessBoard from './pages/ChessBoard';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chess" element={<ChessBoard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;