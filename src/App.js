import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import { ContactPageComplete } from './components/contact.tsx';
import Footer from './components/Footer.jsx';
import { Toaster } from './components/ui/toaster.tsx';
import OurTeamPage from './pages/OurTeamPage';
import ProjectsImpactPage from './pages/ProjectsImpactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import VolunteerPage from './pages/VolunteerPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';

const colors = {
  darkBlue: '#022b3a',
  blue: '#1f7a8c',
  lightBlue: '#bfdbf7',
  paleBlue: '#e1e5f2',
  white: '#ffffff',
};

function App() {
  const navbarRef = useRef(null);
  const [mainPaddingTop, setMainPaddingTop] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      const height = navbarRef.current.offsetHeight;
      console.log('Navbar Height:', height);
      setMainPaddingTop(height);
    }
  }, [navbarRef.current]);

  return (
    <div className="flex flex-col min-h-screen" style={{ background: '#ffffff', fontFamily: 'Helvetica Neue, sans-serif' }}>
      <Navbar ref={navbarRef} />
      <main style={{ minHeight: '60vh', paddingTop: `${mainPaddingTop}px` }}>
        <Routes>
          <Route path="/" element={<ContactPageComplete />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/projects-impact" element={<ProjectsImpactPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:blogId" element={<BlogDetailPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App; 