import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, X, Sparkles, ChevronRight, Layers, Eye } from 'lucide-react';
import { HERITAGE_ZONES } from '../data/heritageData';

export default function HeritageMap() {
  const [selectedZone, setSelectedZone] = useState(HERITAGE_ZONES[1]); // Default Khuê Văn Các
  const [hoveredZone, setHoveredZone] = useState(null);
  const [modalZone, setModalZone] = useState(null);

  return (
    <section
      id="map"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#090909] text-[#E8D8B5] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#D4AF37]/30 text-xs text-[#D4AF37] uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Sa Bàn Số 2.5D • Trục Thần Đạo</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-6 tracking-wide">
            Khám Phá <span className="gold-text-gradient">Không Gian</span> Văn Miếu
          </h2>

          <p className="text-sm sm:text-base text-[#E8D8B5]/80 font-light leading-relaxed">
            Toàn bộ quần thể Văn Miếu – Quốc Tử Giám được quy hoạch đăng đối nghiêm cẩn theo trục Thần Đạo Bắc - Nam. Trải qua 5 lớp không gian chuyển tiếp tượng trưng cho từng bước thang rèn đức luyện tài của bậc hiền nho.
          </p>
        </motion.div>

        {/* 5 Zones Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-10">
          {HERITAGE_ZONES.map((zone) => {
            const isSelected = selectedZone?.id === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(zone)}
                className={`p-3.5 rounded-xl border transition-all duration-300 text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1a170d] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-[1.02]'
                    : 'bg-[#111111]/80 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#161616]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs text-[#D4AF37] font-bold">
                    KHU {zone.number}
                  </span>
                  {isSelected && <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />}
                </div>
                <span className={`font-cinzel text-sm font-semibold block transition-colors ${
                  isSelected ? 'text-white' : 'text-[#E8D8B5]/75'
                }`}>
                  {zone.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Map Layout: 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: 2.5D Isometric Interactive Heritage Map Canvas (7 cols) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 bg-[#111111] p-4 sm:p-6 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            
            {/* Header of Map */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs text-[#E8D8B5]/70">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-semibold text-white">Sơ đồ tổng thể Văn Miếu</span>
              </div>
              <span className="text-[11px] text-[#D4AF37]">Click điểm sáng để khám phá</span>
            </div>

            {/* Simulated 2.5D Architectural Canvas */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] max-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0c100f] via-[#101412] to-[#0c0d0d] flex items-center justify-center p-4">
              
              {/* Background Blueprint Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

              {/* SVG 2.5D Architectural Isometric Axis */}
              <svg
                viewBox="0 0 500 700"
                className="w-full h-full max-h-[550px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
              >
                <defs>
                  <linearGradient id="axisGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8B0000" stopOpacity="0.8" />
                    <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#AA7C11" stopOpacity="0.8" />
                  </linearGradient>

                  <linearGradient id="pondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0d3536" />
                    <stop offset="100%" stopColor="#061c1d" />
                  </linearGradient>

                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Outer Wall Boundary */}
                <rect x="70" y="30" width="360" height="640" rx="16" fill="#141816" stroke="#2A2A2A" strokeWidth="2" />
                <rect x="78" y="38" width="344" height="624" rx="12" fill="none" stroke="#D4AF37" strokeOpacity="0.15" strokeDasharray="6 4" />

                {/* Sacred Central Axis Path (Trục Thần Đạo) */}
                <path d="M 250 670 L 250 40" stroke="url(#axisGlow)" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
                <path d="M 250 670 L 250 40" stroke="#FFF6D1" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.6" />

                {/* Zone 5: Khu Thái Học (Top) */}
                <g className="cursor-pointer" onClick={() => setSelectedZone(HERITAGE_ZONES[4])}>
                  <rect x="130" y="55" width="240" height="90" rx="8" fill="#201c18" stroke={selectedZone?.id === 'zone-5' ? '#D4AF37' : '#3d3423'} strokeWidth="2" />
                  {/* Pavilion Roof Double tier */}
                  <polygon points="120,85 250,55 380,85 360,95 250,75 140,95" fill="#8B0000" opacity="0.8" />
                  <text x="250" y="125" textAnchor="middle" fill="#E8D8B5" fontSize="11" fontFamily="Cormorant Garamond, Playfair Display, serif" fontWeight="bold">KHU THÁI HỌC</text>
                </g>

                {/* Dividing Gate 4 */}
                <line x1="100" y1="160" x2="400" y2="160" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

                {/* Zone 4: Khu Đại Thành */}
                <g className="cursor-pointer" onClick={() => setSelectedZone(HERITAGE_ZONES[3])}>
                  <rect x="140" y="180" width="220" height="95" rx="8" fill="#1e1818" stroke={selectedZone?.id === 'zone-4' ? '#D4AF37' : '#3d2525'} strokeWidth="2" />
                  {/* Sanctuary Hall */}
                  <polygon points="130,210 250,180 370,210 350,225 250,205 150,225" fill="#8B0000" opacity="0.9" />
                  <text x="250" y="255" textAnchor="middle" fill="#E8D8B5" fontSize="11" fontFamily="Cormorant Garamond, Playfair Display, serif" fontWeight="bold">ĐIỆN ĐẠI THÀNH</text>
                </g>

                {/* Dividing Gate 3 */}
                <line x1="100" y1="290" x2="400" y2="290" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

                {/* Zone 3: Vườn Bia Tiến Sĩ & Giếng Thiên Quang */}
                <g className="cursor-pointer" onClick={() => setSelectedZone(HERITAGE_ZONES[2])}>
                  {/* Thien Quang Well Square */}
                  <rect x="195" y="320" width="110" height="110" rx="4" fill="url(#pondGrad)" stroke="#D4AF37" strokeWidth="2" />
                  <circle cx="250" cy="375" r="30" fill="none" stroke="#D4AF37" strokeOpacity="0.3" />
                  
                  {/* Stele Corridors Left & Right */}
                  <rect x="110" y="315" width="65" height="120" rx="4" fill="#181c1a" stroke={selectedZone?.id === 'zone-3' ? '#D4AF37' : '#2d3833'} strokeWidth="1.5" />
                  <text x="142" y="375" textAnchor="middle" fill="#D4AF37" fontSize="9" fontWeight="bold" transform="rotate(-90 142 375)">82 BIA TIẾN SĨ</text>

                  <rect x="325" y="315" width="65" height="120" rx="4" fill="#181c1a" stroke={selectedZone?.id === 'zone-3' ? '#D4AF37' : '#2d3833'} strokeWidth="1.5" />
                  <text x="358" y="375" textAnchor="middle" fill="#D4AF37" fontSize="9" fontWeight="bold" transform="rotate(90 358 375)">VƯỜN BIA TẢ</text>
                  
                  <text x="250" y="380" textAnchor="middle" fill="#F5E6B3" fontSize="10" fontWeight="bold">GIẾNG THIÊN QUANG</text>
                </g>

                {/* Dividing Gate 2: Khuê Văn Các */}
                <g className="cursor-pointer" onClick={() => setSelectedZone(HERITAGE_ZONES[1])}>
                  <rect x="205" y="455" width="90" height="65" rx="6" fill="#241b12" stroke={selectedZone?.id === 'zone-2' ? '#D4AF37' : '#57411e'} strokeWidth="2" />
                  {/* Khue Van Cac Roof */}
                  <polygon points="190,480 250,450 310,480 290,490 250,475 210,490" fill="#AA7C11" />
                  <circle cx="250" cy="495" r="8" fill="none" stroke="#D4AF37" strokeWidth="2" />
                  <text x="250" y="514" textAnchor="middle" fill="#E8D8B5" fontSize="10" fontFamily="Cormorant Garamond, Playfair Display, serif" fontWeight="bold">KHUÊ VĂN CÁC</text>
                </g>

                {/* Dividing Gate 1 */}
                <line x1="100" y1="535" x2="400" y2="535" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

                {/* Zone 1: Khu Nhập Đạo (Bottom) */}
                <g className="cursor-pointer" onClick={() => setSelectedZone(HERITAGE_ZONES[0])}>
                  {/* Two Ponds */}
                  <rect x="110" y="560" width="80" height="50" rx="8" fill="url(#pondGrad)" stroke="#23423b" strokeWidth="1.5" />
                  <text x="150" y="590" textAnchor="middle" fill="#7ba399" fontSize="9">Hồ Kim Giám</text>

                  <rect x="310" y="560" width="80" height="50" rx="8" fill="url(#pondGrad)" stroke="#23423b" strokeWidth="1.5" />
                  <text x="350" y="590" textAnchor="middle" fill="#7ba399" fontSize="9">Hồ Nhập Đạo</text>

                  {/* Great Middle Gate (Đại Trung Môn) */}
                  <rect x="210" y="550" width="80" height="35" rx="4" fill="#1f1a14" stroke={selectedZone?.id === 'zone-1' ? '#D4AF37' : '#3d3222'} strokeWidth="1.5" />
                  <text x="250" y="572" textAnchor="middle" fill="#D4AF37" fontSize="9" fontWeight="bold">ĐẠI TRUNG MÔN</text>

                  {/* Main Entry: Văn Miếu Môn */}
                  <rect x="200" y="625" width="100" height="35" rx="4" fill="#2d1b18" stroke="#8B0000" strokeWidth="2" />
                  <text x="250" y="647" textAnchor="middle" fill="#FFF" fontSize="10" fontFamily="Cormorant Garamond, Playfair Display, serif" fontWeight="bold">VĂN MIẾU MÔN</text>
                </g>

                {/* Interactive Glowing Hotspots Pins */}
                {HERITAGE_ZONES.map((zone) => {
                  const isCur = selectedZone?.id === zone.id;
                  // Map coordinates on 500x700 svg
                  const yMap = {
                    'zone-1': 590,
                    'zone-2': 485,
                    'zone-3': 375,
                    'zone-4': 225,
                    'zone-5': 95,
                  }[zone.id];

                  return (
                    <g
                      key={zone.id}
                      className="cursor-pointer group"
                      onClick={() => setSelectedZone(zone)}
                      onMouseEnter={() => setHoveredZone(zone)}
                      onMouseLeave={() => setHoveredZone(null)}
                    >
                      {/* Outer pulse */}
                      <circle
                        cx="250"
                        cy={yMap}
                        r={isCur ? '22' : '14'}
                        fill={isCur ? '#D4AF37' : '#8B0000'}
                        opacity="0.3"
                        className="animate-ping"
                      />
                      {/* Core circle */}
                      <circle
                        cx="250"
                        cy={yMap}
                        r={isCur ? '12' : '8'}
                        fill={isCur ? '#D4AF37' : '#111111'}
                        stroke={isCur ? '#FFF' : '#D4AF37'}
                        strokeWidth="2.5"
                        filter="url(#glow)"
                      />
                      {/* Number inside */}
                      <text
                        x="250"
                        y={yMap + 4}
                        textAnchor="middle"
                        fill={isCur ? '#090909' : '#D4AF37'}
                        fontSize="9"
                        fontWeight="bold"
                      >
                        {zone.number}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* RIGHT: Selected Zone Deep Lore Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              {selectedZone && (
                <motion.div
                  key={selectedZone.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl glass-panel p-6 sm:p-8 border border-[#D4AF37]/40 shadow-[0_0_35px_rgba(212,175,55,0.2)] flex flex-col justify-between"
                >
                  <div>
                    {/* Zone Image with Badge */}
                    <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-white/10 group">
                      <img
                        src={selectedZone.image}
                        alt={selectedZone.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Number Tag */}
                      <div className="absolute top-4 left-4 bg-[#090909]/90 border border-[#D4AF37]/50 px-3 py-1 rounded-full text-xs font-bold text-[#D4AF37] shadow-lg">
                        KHÔNG GIAN {selectedZone.number}
                      </div>

                      {/* View Full 3D/Photo CTA */}
                      <button
                        onClick={() => setModalZone(selectedZone)}
                        className="absolute bottom-4 right-4 bg-[#D4AF37] hover:bg-[#F5E6B3] text-[#090909] px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg transition-all"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Xem chi tiết</span>
                      </button>
                    </div>

                    {/* Zone Titles */}
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-1">
                      {selectedZone.name}
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-medium tracking-wide uppercase mb-4">
                      {selectedZone.subname}
                    </p>

                    <p className="text-sm text-[#E8D8B5] leading-relaxed mb-6">
                      {selectedZone.summary}
                    </p>

                    {/* Architecture & Highlights Bullet points */}
                    <div className="space-y-3 p-4 rounded-xl bg-[#161616]/80 border border-white/5 mb-6">
                      <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
                        Đặc trưng kiến trúc di sản:
                      </span>
                      <p className="text-xs text-[#E8D8B5]/85 leading-relaxed">
                        {selectedZone.details.architecture}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                    <p className="text-xs text-[#E8D8B5]/60 italic font-playfair line-clamp-1">
                      "{selectedZone.details.quote}"
                    </p>
                    <button
                      onClick={() => setModalZone(selectedZone)}
                      className="px-4 py-2 rounded-full border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#090909] text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 ml-2"
                    >
                      <span>Mở hồ sơ</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Deep Inspection Modal */}
      <AnimatePresence>
        {modalZone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md" onClick={() => setModalZone(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="relative w-full max-w-3xl bg-[#111111] border border-[#D4AF37] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.35)] flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-64 sm:h-80 w-full flex-shrink-0">
                <img
                  src={modalZone.image}
                  alt={modalZone.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/60" />

                <button
                  onClick={() => setModalZone(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-white hover:text-[#D4AF37] transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                    Hồ sơ di sản • Khu vực {modalZone.number}
                  </span>
                  <h3 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                    {modalZone.name}
                  </h3>
                  <p className="text-sm text-[#E8D8B5]/80">{modalZone.subname}</p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-[#F5E6B3] mb-2">
                    Tổng Quan & Lịch Sử
                  </h4>
                  <p className="text-sm sm:text-base text-[#E8D8B5] leading-relaxed">
                    {modalZone.details.architecture}
                  </p>
                </div>

                {/* Cultural Symbolism */}
                <div className="p-5 rounded-2xl bg-[#1a170d] border border-[#D4AF37]/40">
                  <h4 className="font-cinzel text-base font-bold text-[#D4AF37] mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Ý Nghĩa Triết Lý & Biểu Tượng
                  </h4>
                  <p className="text-sm text-[#E8D8B5]/90 leading-relaxed font-light">
                    {modalZone.details.symbolism}
                  </p>
                </div>

                {/* Highlights list */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold mb-3">
                    Các Điểm Di Tích Tiêu Biểu:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {modalZone.details.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-[#161616] border border-white/10 text-xs text-[#E8D8B5] flex items-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="border-l-2 border-[#D4AF37] pl-4 py-1 italic font-playfair text-sm text-[#F5E6B3]">
                  "{modalZone.details.quote}"
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setModalZone(null)}
                    className="px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#F5E6B3] text-[#090909] font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Hoàn tất xem
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
