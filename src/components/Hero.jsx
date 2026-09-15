import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, ChevronRight, Eye } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);

  // Golden Particle Dust Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 65 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      fadeSpeed: Math.random() * 0.005 + 0.002,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#D4AF37';

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.alpha += p.fadeSpeed;
        if (p.alpha > 0.8 || p.alpha < 0.2) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Slow Zoom (Ken Burns Effect) */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <img
          src="/images/hero.jpg"
          alt="Văn Miếu - Quốc Tử Giám về đêm"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1]"
        />
      </motion.div>

      {/* Cinematic Dark Overlays and Radial Golden Atmosphere */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#090909] via-[#090909]/60 to-black/40" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.18)_0%,transparent_70%)]" />

      {/* Canvas for Golden Dust Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[2] pointer-events-none"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Heritage Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111]/80 border border-[#D4AF37]/40 shadow-[0_0_25px_rgba(212,175,55,0.25)] mb-6 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#F5E6B3] font-medium">
            Bảo Tàng Số • Kỷ Niệm 950 Năm (1070 – 2026)
          </span>
        </motion.div>

        {/* Main Heading: Staggered Fade & Slide */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-tight"
        >
          Bước vào hành trình{' '}
          <span className="gold-text-gradient block sm:inline">
            950 năm
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-playfair text-xl sm:text-2xl md:text-3xl text-[#E8D8B5] italic font-normal mb-6"
        >
          "Một Văn Miếu – Nhiều cách khám phá"
        </motion.p>

        {/* Message Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl mx-auto mb-10 px-4"
        >
          <p className="text-sm sm:text-base text-[#E8D8B5]/85 leading-relaxed font-light border-y border-[#D4AF37]/20 py-3">
            “Công nghệ không thay thế di sản, mà thổi hồn vào di sản.”
          </p>
        </motion.div>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Main Gold Glow CTA */}
          <button
            onClick={() => scrollToSection('timeline')}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#F5E6B3] text-[#090909] font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:shadow-[0_0_50px_rgba(212,175,55,0.9)] hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
          >
            {/* Shimmer light pass */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <span>Khám phá hành trình</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-[#090909]" />
          </button>

          {/* Secondary Virtual Tour CTA */}
          <button
            onClick={() => scrollToSection('map')}
            className="px-6 py-4 rounded-full bg-[#111111]/80 hover:bg-[#1f1f1f] text-[#E8D8B5] hover:text-[#D4AF37] font-medium text-sm sm:text-base tracking-wide border border-[#D4AF37]/40 hover:border-[#D4AF37] backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <Eye className="w-4 h-4 text-[#D4AF37]" />
            <span>Tham quan bản đồ di sản</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        onClick={() => scrollToSection('timeline')}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase text-[#E8D8B5]/60 group-hover:text-[#D4AF37] transition-colors">
          Cuộn để khám phá
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
