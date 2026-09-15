import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-1 bg-black/40">
      <motion.div
        className="h-full bg-gradient-to-r from-[#8B0000] via-[#D4AF37] to-[#F5E6B3] origin-left shadow-[0_0_12px_rgba(212,175,55,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}

