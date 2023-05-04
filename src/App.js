import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TutorList from './components/TutorList';
import FavoriteList from './components/FavoriteList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<TutorList />} />
          <Route path="/favorites" element={<FavoriteList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
