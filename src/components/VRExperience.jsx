import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, RotateCw, Move, Maximize2, Sparkles, Video, Compass } from 'lucide-react';

export default function VRExperience() {
  const [activeTab, setActiveTab] = useState('interactive'); // 'interactive' | 'youtube'
  const [isDragging, setIsDragging] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Auto slow panorama drift
  useEffect(() => {
    let animId;
    if (isAutoRotating && !isDragging) {
      const step = () => {
        setPanOffset((prev) => ({
          ...prev,
          x: (prev.x + 0.15) % 100,
        }));
        animId = requestAnimationFrame(step);
      };
      animId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(animId);
  }, [isAutoRotating, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = (e.clientX - dragStartRef.current.x) * 0.15;
    const deltaY = (e.clientY - dragStartRef.current.y) * 0.1;
    dragStartRef.current = { x: e.clientX, y: e.clientY };

    setPanOffset((prev) => ({
      x: (prev.x - deltaX + 100) % 100,
      y: Math.max(-15, Math.min(15, prev.y - deltaY)),
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setIsAutoRotating(false);
    dragStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    const deltaX = (touch.clientX - dragStartRef.current.x) * 0.15;
    const deltaY = (touch.clientY - dragStartRef.current.y) * 0.1;
    dragStartRef.current = { x: touch.clientX, y: touch.clientY };

    setPanOffset((prev) => ({
      x: (prev.x - deltaX + 100) % 100,
      y: Math.max(-15, Math.min(15, prev.y - deltaY)),
    }));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  return (
    <section
      id="vr360"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#090909] text-[#E8D8B5] overflow-hidden"
    >
      {/* Golden Radial Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#D4AF37]/30 text-xs text-[#D4AF37] uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Thực Tế Ảo • Virtual Reality 360°</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-6 tracking-wide">
            Trải Nghiệm Văn Miếu Trong <span className="gold-text-gradient">Không Gian 360°</span>
          </h2>

          <p className="font-playfair text-lg sm:text-xl text-[#F5E6B3] italic mb-4">
            “Đi qua từng góc nhỏ của di sản bằng công nghệ thực tế ảo.”
          </p>

          <p className="text-sm text-[#E8D8B5]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Công nghệ panorama 360 độ đưa bạn hòa mình vào khuôn viên Giếng Thiên Quang và Khuê Văn Các cổ kính như đang đứng trực tiếp tại thánh đường tri thức ngàn xưa.
          </p>
        </motion.div>

        {/* Mode Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-full bg-[#141414] border border-[#D4AF37]/30">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'interactive'
                  ? 'bg-[#D4AF37] text-[#090909] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'text-[#E8D8B5]/75 hover:text-white'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>Toàn cảnh 360° Tương tác trực tiếp</span>
            </button>

            <button
              onClick={() => setActiveTab('youtube')}
              className={`px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'youtube'
                  ? 'bg-[#8B0000] text-white shadow-[0_0_20px_rgba(139,0,0,0.5)]'
                  : 'text-[#E8D8B5]/75 hover:text-white'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-red-400" />
              <span>YouTube VR 360 Stream</span>
            </button>
          </div>
        </div>

        {/* Big Glow Frame for 360 Experience */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/20 to-[#8B0000]/40 shadow-[0_0_60px_rgba(212,175,55,0.25)]">
          <div className="rounded-[22px] overflow-hidden bg-black relative aspect-[16/9] min-h-[450px]">
            
            {activeTab === 'interactive' ? (
              /* MODE 1: Interactive Panorama Viewer */
              <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="w-full h-full relative cursor-grab active:cursor-grabbing overflow-hidden select-none touch-none"
              >
                {/* Panorama Image Layer with Dynamic Background Position */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url('/images/vr-panorama.jpg')`,
                    backgroundSize: '220% 120%',
                    backgroundPosition: `${panOffset.x}% ${50 + panOffset.y}%`,
                    transition: isDragging ? 'none' : 'background-position 0.1s linear',
                  }}
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />

                {/* Drag Guidance Overlay (Fades after interact) */}
                <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs text-[#E8D8B5]">
                  <Move className="w-4 h-4 text-[#D4AF37] animate-pulse" />
                  <span>Kéo chuột để xoay 360° xung quanh</span>
                </div>

                {/* Right Control Bar */}
                <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
                  <button
                    onClick={toggleAutoRotate}
                    className={`px-3 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md border transition-all ${
                      isAutoRotating
                        ? 'bg-[#D4AF37] text-[#090909] border-[#D4AF37]'
                        : 'bg-black/70 text-white border-white/20 hover:border-[#D4AF37]'
                    }`}
                  >
                    <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'animate-spin-slow' : ''}`} />
                    <span>{isAutoRotating ? 'Dừng tự xoay' : 'Tự xoay'}</span>
                  </button>
                </div>

                {/* Center Badge Info */}
                <div className="absolute top-6 left-6 z-20 bg-black/75 backdrop-blur-md border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-full text-xs text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-cinzel text-[#F5E6B3]">Khuê Văn Các & Giếng Thiên Quang</span>
                </div>
              </div>
            ) : (
              /* MODE 2: YouTube VR360 Embed */
              <div className="w-full h-full">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/WIUkSn7Z1V0?si=heritage360&autoplay=0&rel=0"
                  title="Văn Miếu VR 360 Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
