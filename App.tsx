
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Candidate from './pages/Candidate';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<Company />} />
            <Route path="/candidato" element={<Candidate />} />
          </Routes>
        </main>
        <Footer />
        <LegalModals />
      </div>
    </Router>
  );
};

export default App;
