import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import { ContactPageComplete } from './components/contact.tsx';
import Footer from './components/Footer.jsx';
import { Toaster } from './components/ui/toaster.tsx';
import OurTeamPage from './pages/OurTeamPage';
import ProjectsImpactPage from './pages/ProjectsImpactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

const colors = {
  darkBlue: '#022b3a',
  blue: '#1f7a8c',
  lightBlue: '#bfdbf7',
  paleBlue: '#e1e5f2',
  white: '#ffffff',
};

function App() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: '#ffffff', fontFamily: 'Helvetica Neue, sans-serif' }}>
      <Navbar />
      <main style={{ minHeight: '60vh' }}>
        <Routes>
          <Route path="/" element={<ContactPageComplete />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/projects-impact" element={<ProjectsImpactPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App; 