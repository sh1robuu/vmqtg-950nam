import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onFinish();
          }, 400);
          return 100;
        }
        // Smooth random increment
        return Math.min(prev + Math.floor(Math.random() * 8) + 4, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090909] text-[#E8D8B5] overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0,rgba(9,9,9,0.95)_70%)] pointer-events-none" />

      {/* Floating golden particles simulation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {useMemo(() => [...Array(24)].map((_, i) => ({
          w: Math.random() * 4 + 2,
          top: Math.random() * 100,
          left: Math.random() * 100,
          opacity: Math.random() * 0.7 + 0.3,
          dur: 3 + Math.random() * 3,
          yRange: -40 - Math.random() * 50,
        })), []).map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D4AF37]"
            style={{
              width: `${p.w}px`,
              height: `${p.w}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, p.yRange, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Center Emblem: Khuê Văn Các Stylized Symbol */}
      <div className="relative flex flex-col items-center z-10 px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mb-8"
        >
          {/* Outer rotating golden ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full border border-dashed border-[#D4AF37]/40 flex items-center justify-center"
          />

          {/* Inner pulse ring */}
          <div className="absolute inset-0 m-auto w-24 h-24 rounded-full border border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center bg-[#111111]/80 backdrop-blur-sm">
            {/* SVG Khuê Văn Các Silhouette Icon */}
            <svg
              className="w-12 h-12 text-[#D4AF37]"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Roof */}
              <path d="M12 26 L32 14 L52 26" />
              <path d="M8 28 Q32 10 56 28" />
              <path d="M20 18 L32 10 L44 18" />
              {/* Upper Pavilion with Sun window */}
              <rect x="18" y="26" width="28" height="18" />
              <circle cx="32" cy="35" r="5" fill="#D4AF37" fillOpacity="0.2" />
              <line x1="32" y1="26" x2="32" y2="44" strokeDasharray="1 3" />
              <line x1="18" y1="35" x2="46" y2="35" strokeDasharray="1 3" />
              {/* 4 Pillars */}
              <line x1="20" y1="44" x2="20" y2="58" strokeWidth="2.5" />
              <line x1="28" y1="44" x2="28" y2="58" strokeWidth="2.5" />
              <line x1="36" y1="44" x2="36" y2="58" strokeWidth="2.5" />
              <line x1="44" y1="44" x2="44" y2="58" strokeWidth="2.5" />
              {/* Stone Base */}
              <path d="M12 58 L52 58" strokeWidth="3" />
            </svg>
          </div>
        </motion.div>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-2 font-medium"
        >
          Di sản Thăng Long Hà Nội • 1070 – 2026
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-cinzel text-xl md:text-2xl font-bold tracking-wider text-white mb-2"
        >
          VĂN MIẾU – QUỐC TỬ GIÁM
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2 text-sm text-[#E8D8B5]/80 font-light mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin-slow" />
          <span>Đang mở cánh cửa lịch sử...</span>
        </motion.div>

        {/* Progress bar container */}
        <div className="w-56 h-1 bg-[#1A1A1A] rounded-full overflow-hidden border border-[#D4AF37]/30 p-[1px]">
          <motion.div
            className="h-full bg-gradient-to-r from-[#8B0000] via-[#D4AF37] to-[#F5E6B3] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <span className="mt-3 font-mono text-xs text-[#D4AF37]">
          {progress}%
        </span>
      </div>
    </motion.div>
  );
}
