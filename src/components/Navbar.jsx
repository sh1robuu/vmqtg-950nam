import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Hành trình 950 năm', href: '#timeline' },
  { label: 'Không gian Văn Miếu', href: '#map' },
  { label: 'Câu chuyện Tiến sĩ', href: '#gallery' },
  { label: 'Tiếng vọng tiền nhân', href: '#multimedia' },
  { label: 'VR360', href: '#vr360' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3.5 bg-[#090909]/85 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#111111]/80 shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-transform group-hover:scale-105">
              <Compass className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <span className="font-cinzel font-bold text-sm tracking-widest text-white block group-hover:text-[#D4AF37] transition-colors">
                VĂN MIẾU
              </span>
              <span className="text-[10px] tracking-wider text-[#D4AF37] block -mt-1 font-light">
                QUỐC TỬ GIÁM • 950 NĂM
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`relative px-3.5 py-2 text-xs xl:text-sm font-medium transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-[#D4AF37] bg-[#D4AF37]/10'
                      : 'text-[#E8D8B5]/75 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action / 950 Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 border border-[#D4AF37]/30 bg-[#161616]/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-[#E8D8B5]">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="font-cinzel text-[#D4AF37] font-semibold">1070 - 2026</span>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="lg:hidden p-2 rounded-lg text-[#E8D8B5] hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0c0c0c]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 z-30 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/30'
                        : 'text-[#E8D8B5] hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-[#D4AF37]" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
