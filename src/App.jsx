import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Layout components
import { Header } from './components/layout/Header.jsx';
import { Footer } from './components/layout/Footer.jsx';

// Section components - Các phần chính của trang
import { Hero } from './components/sections/Hero.jsx';
import { About } from './components/sections/About.jsx';
import { Benefits } from './components/sections/Benefits.jsx';
import { Sustainability } from './components/sections/Sustainability.jsx';
import { Process } from './components/sections/Process.jsx';
import { Gallery } from './components/sections/Gallery.jsx';
import { TeamVision } from './components/sections/TeamVision.jsx';
import { CTA } from './components/sections/CTA.jsx';

// Pages
import { PrivacyPolicy } from './pages/PrivacyPolicy.jsx';
import { TermsOfService } from './pages/TermsOfService.jsx';

// Widget components
import { ChatWidget } from './components/widgets/ChatWidget.jsx';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F2] font-sans text-[#5A4633] selection:bg-[#3D7D4E] selection:text-white">
      {/* Background decoration elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20 -z-10">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#E8DCC3] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-[#3D7D4E]/10 rounded-full blur-[150px]" />
      </div>

      <Header />
      
      <main>
        <Hero />
        <About />
        <Benefits />
        <Sustainability />
        <Process />
        <Gallery />
        <TeamVision />
        <CTA />
      </main>

      <Footer />
      {/* <ChatWidget /> */}
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}




