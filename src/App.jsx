import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import AudioPlayerFloating from './components/AudioPlayerFloating';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import HeritageMap from './components/HeritageMap';
import Gallery from './components/Gallery';
import Multimedia from './components/Multimedia';
import VRExperience from './components/VRExperience';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#090909] text-[#E8D8B5] relative selection:bg-[#D4AF37] selection:text-[#090909]">
      {/* 1. Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Custom Glowing Golden Cursor */}
      <CustomCursor />

      {/* 3. Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* 4. Floating Vietnamese Traditional Ambient Music Toggle */}
      <AudioPlayerFloating />

      {/* 5. Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero />

        <SectionDivider />

        {/* Section 2: Timeline 950 Years */}
        <Timeline />

        <SectionDivider />

        {/* Section 3: 2.5D Heritage Space Map */}
        <HeritageMap />

        <SectionDivider />

        {/* Section 4: Doctor Steles Digital Gallery */}
        <Gallery />

        <SectionDivider />

        {/* Section 5: Multimedia (Video & Podcasts) */}
        <Multimedia />

        <SectionDivider />

        {/* Section 6: VR 360 Virtual Tour Experience */}
        <VRExperience />
      </main>

      {/* Section 7: Footer */}
      <Footer />
    </div>
  );
}
