import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Award, Compass, X, Sparkles, BookOpen } from 'lucide-react';
import { HERITAGE_TIMELINE } from '../data/heritageData';

export default function Timeline() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollNext = () => {
    if (activeIndex < HERITAGE_TIMELINE.length - 1) {
      setActiveIndex((prev) => prev + 1);
      scrollToIndex(activeIndex + 1);
    }
  };

  const scrollPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollToIndex = (idx) => {
    setActiveIndex(idx);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 380; // approximate card width + gap
      container.scrollTo({
        left: idx * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="timeline"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#090909] overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-[#8B0000]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#D4AF37]/30 text-xs text-[#D4AF37] uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Biên Niên Sử Vàng • 1070 – 2026</span>
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-6 tracking-wide">
            Hành Trình <span className="gold-text-gradient">950 Năm</span> Lưu Giữ Tri Thức
          </h2>
          
          <p className="text-sm sm:text-base text-[#E8D8B5]/80 leading-relaxed font-light">
            Trải qua gần một thiên niên kỷ thăng trầm cùng lịch sử dân tộc, Văn Miếu – Quốc Tử Giám luôn là thánh đường của đạo học, nơi kết tinh nguyên khí quốc gia và hun đúc tinh thần bất khuất của dân tộc Việt Nam.
          </p>
        </motion.div>

        {/* Quick Year Selector Ribbon (Desktop) */}
        <div className="hidden lg:flex items-center justify-between max-w-4xl mx-auto mb-12 relative px-8">
          {/* Connecting golden line */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 z-0" />

          {HERITAGE_TIMELINE.map((item, idx) => (
            <button
              key={item.year}
              onClick={() => scrollToIndex(idx)}
              className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-cinzel font-bold text-xs transition-all duration-300 ${
                  activeIndex === idx
                    ? 'bg-[#D4AF37] text-[#090909] shadow-[0_0_20px_#D4AF37] scale-125'
                    : 'bg-[#161616] border border-[#D4AF37]/40 text-[#E8D8B5] group-hover:border-[#D4AF37] group-hover:scale-110'
                }`}
              >
                {item.year}
              </div>
              <span
                className={`text-[11px] font-medium mt-2 transition-colors ${
                  activeIndex === idx ? 'text-[#D4AF37]' : 'text-[#E8D8B5]/50 group-hover:text-[#E8D8B5]'
                }`}
              >
                {item.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Desktop Controls (Prev / Next) */}
        <div className="hidden lg:flex items-center justify-end gap-3 mb-6">
          <button
            onClick={scrollPrev}
            disabled={activeIndex === 0}
            className="p-3 rounded-full border border-[#D4AF37]/40 bg-[#111111]/80 text-[#E8D8B5] disabled:opacity-30 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
            aria-label="Previous milestone"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={activeIndex === HERITAGE_TIMELINE.length - 1}
            className="p-3 rounded-full border border-[#D4AF37]/40 bg-[#111111]/80 text-[#E8D8B5] disabled:opacity-30 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
            aria-label="Next milestone"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* DESKTOP: Horizontal Timeline Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="hidden lg:flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {HERITAGE_TIMELINE.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              className={`flex-shrink-0 w-[380px] snap-start rounded-2xl glass-panel p-6 border transition-all duration-500 cursor-pointer group flex flex-col justify-between ${
                activeIndex === idx
                  ? 'border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.25)] bg-[#141414]'
                  : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:bg-[#161616]'
              }`}
              onClick={() => setSelectedMilestone(milestone)}
              whileHover={{ y: -6 }}
            >
              <div>
                {/* Card Image */}
                <div className="relative h-48 rounded-xl overflow-hidden mb-5 border border-white/10">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Era Badge */}
                  <span className="absolute top-3 left-3 bg-[#090909]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-[#D4AF37] border border-[#D4AF37]/30">
                    {milestone.era}
                  </span>

                  {/* Big Year Overlay */}
                  <span className="absolute bottom-2 right-3 font-cinzel font-black text-3xl text-white/90 drop-shadow-md">
                    {milestone.year}
                  </span>
                </div>

                {/* Milestone Info */}
                <h3 className="font-cinzel text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {milestone.title}
                </h3>
                
                <p className="text-sm text-[#E8D8B5]/80 line-clamp-3 leading-relaxed mb-4">
                  {milestone.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#D4AF37]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  {milestone.tag}
                </span>
                <span className="text-[11px] text-[#E8D8B5]/60 group-hover:text-[#E8D8B5] transition-colors">
                  Bấm xem chi tiết →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE: Vertical Timeline Stack */}
        <div className="lg:hidden relative pl-6 border-l-2 border-[#D4AF37]/30 space-y-10">
          {HERITAGE_TIMELINE.map((milestone) => (
            <div key={milestone.year} className="relative">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#090909] shadow-[0_0_10px_#D4AF37]" />

              <div
                onClick={() => setSelectedMilestone(milestone)}
                className="glass-panel p-5 rounded-xl border border-[#D4AF37]/30 cursor-pointer active:scale-[0.99] transition-transform"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-cinzel font-bold text-2xl gold-text-gradient">
                    {milestone.year}
                  </span>
                  <span className="text-[10px] text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded-full border border-[#D4AF37]/20">
                    {milestone.era}
                  </span>
                </div>

                <div className="h-40 rounded-lg overflow-hidden mb-3 border border-white/10">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-cinzel text-lg font-bold text-white mb-2">
                  {milestone.title}
                </h3>
                <p className="text-xs text-[#E8D8B5]/80 leading-relaxed mb-3">
                  {milestone.description}
                </p>

                <div className="text-[11px] text-[#D4AF37] font-medium flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Xem ý nghĩa lịch sử</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal for Selected Milestone */}
      <AnimatePresence>
        {selectedMilestone && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md" onClick={() => setSelectedMilestone(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#111111] border border-[#D4AF37] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.3)] flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-64 sm:h-72 w-full flex-shrink-0">
                <img
                  src={selectedMilestone.image}
                  alt={selectedMilestone.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/60" />

                {/* Close button */}
                <button
                  onClick={() => setSelectedMilestone(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:text-[#D4AF37] hover:bg-black/90 transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Floating Big Year */}
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                    {selectedMilestone.era}
                  </span>
                  <h3 className="font-cinzel text-3xl sm:text-4xl font-black text-white">
                    Năm {selectedMilestone.year}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="font-cinzel text-2xl font-bold text-[#F5E6B3] mb-3">
                    {selectedMilestone.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#E8D8B5] leading-relaxed">
                    {selectedMilestone.description}
                  </p>
                </div>

                {/* Historical Significance Box */}
                <div className="p-4 rounded-xl bg-[#181611] border border-[#D4AF37]/30">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D4AF37] font-bold mb-2">
                    <Award className="w-4 h-4" />
                    <span>Ý Nghĩa Lịch Sử & Di Sản</span>
                  </div>
                  <p className="text-sm text-[#E8D8B5]/90 italic font-playfair">
                    "{selectedMilestone.significance}"
                  </p>
                </div>

                {/* Archival Photos from Historical Archives */}
                <div className="rounded-xl overflow-hidden border border-[#D4AF37]/40 bg-black/40">
                  <div className="p-3 border-b border-[#D4AF37]/20 flex items-center gap-2 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    <span>Tư liệu nhiếp ảnh cổ thời Pháp thuộc (Tonkin - Hà Nội xưa)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-3">
                    <div className="relative group/arch">
                      <img
                        src="/images/archival-gate.jpg"
                        alt="Cổng Văn Miếu thời Pháp thuộc"
                        className="w-full h-32 sm:h-40 object-cover rounded-lg border border-white/10 group-hover/arch:border-[#D4AF37]/60 transition-all"
                      />
                      <span className="absolute bottom-1.5 left-2 text-[10px] bg-black/80 text-[#F5E6B3] px-2 py-0.5 rounded">
                        Cổng Văn Miếu Môn
                      </span>
                    </div>
                    <div className="relative group/arch">
                      <img
                        src="/images/archival-khue-van-cac.jpg"
                        alt="Khuê Văn Các thời Pháp thuộc"
                        className="w-full h-32 sm:h-40 object-cover rounded-lg border border-white/10 group-hover/arch:border-[#D4AF37]/60 transition-all"
                      />
                      <span className="absolute bottom-1.5 left-2 text-[10px] bg-black/80 text-[#F5E6B3] px-2 py-0.5 rounded">
                        Khuê Văn Các
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedMilestone(null)}
                    className="px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#F5E6B3] text-[#090909] font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Đóng cửa sổ
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
