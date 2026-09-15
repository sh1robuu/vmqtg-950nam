import React from 'react';
import { motion } from 'framer-motion';

// Ornamental Vietnamese heritage divider between sections
export default function SectionDivider() {
  return (
    <div className="relative py-6 flex items-center justify-center overflow-hidden">
      {/* Center ornament */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-4"
      >
        {/* Left line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[1px] bg-gradient-to-l from-[#D4AF37]/80 to-transparent"
        />

        {/* Diamond ornament pattern */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]/40" />
          <span className="w-2 h-2 rotate-45 bg-[#D4AF37]/60 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
          {/* Center SVG – stylized lotus/cloud */}
          <svg width="28" height="16" viewBox="0 0 28 16" fill="none" className="text-[#D4AF37]">
            <path d="M14 2 C10 2 6 6 6 10 C6 6 2 4 0 8 C4 6 8 10 14 14 C20 10 24 6 28 8 C26 4 22 6 22 10 C22 6 18 2 14 2Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6" />
          </svg>
          <span className="w-2 h-2 rotate-45 bg-[#D4AF37]/60 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]/40" />
        </div>

        {/* Right line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[1px] bg-gradient-to-r from-[#D4AF37]/80 to-transparent"
        />
      </motion.div>
    </div>
  );
}
