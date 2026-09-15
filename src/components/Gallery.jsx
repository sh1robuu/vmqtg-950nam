import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Feather, Shield, ZoomIn, X, Sparkles, ChevronRight } from 'lucide-react';
import { DOCTOR_STELES_DATA } from '../data/heritageData';

export default function Gallery() {
  const [selectedEra, setSelectedEra] = useState(DOCTOR_STELES_DATA.eras[0]);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <section
      id="gallery"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b] text-[#E8D8B5] overflow-hidden"
    >
      {/* Museum Dramatic Ceiling Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#D4AF37]/30 text-xs text-[#D4AF37] uppercase tracking-widest mb-4">
            <Feather className="w-3.5 h-3.5" />
            <span>Không Gian Triển Lãm Di Sản Số</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-6 tracking-wide">
            Câu Chuyện <span className="gold-text-gradient">Tiến Sĩ</span>
          </h2>

          <p className="text-sm sm:text-base text-[#E8D8B5]/80 font-light leading-relaxed">
            82 tấm bia đá đặt trên lưng rùa tại Văn Miếu – Quốc Tử Giám là pho sử đá độc nhất vô nhị trên thế giới, vinh danh 1.307 nhà trí thức đại khoa của dân tộc Việt qua hơn 300 năm khoa cử.
          </p>
        </motion.div>

        {/* 1. HERO QUOTE SPOTLIGHT: "Hiền tài là nguyên khí quốc gia" */}
        <div className="relative rounded-3xl p-8 sm:p-12 mb-20 bg-gradient-to-br from-[#16140e] via-[#111111] to-[#140e0e] border border-[#D4AF37]/40 shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden">
          
          {/* Background Watermark Calligraphy */}
          <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none select-none text-[180px] font-serif font-black text-[#D4AF37]">
            賢才
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-4 block">
              Triết Lý Bất Hủ Của Thân Nhân Trung (1484)
            </span>

            <blockquote className="font-playfair text-xl sm:text-3xl md:text-4xl text-white font-semibold leading-relaxed mb-6 italic">
              "{DOCTOR_STELES_DATA.quote}"
            </blockquote>

            <div className="inline-flex items-center gap-3 border-t border-[#D4AF37]/30 pt-4 px-6 text-xs sm:text-sm text-[#E8D8B5]/75">
              <span className="font-bold text-[#F5E6B3]">{DOCTOR_STELES_DATA.author}</span>
              <span>•</span>
              <span className="text-[#D4AF37]">{DOCTOR_STELES_DATA.authorTitle}</span>
            </div>
          </div>
        </div>

        {/* 2. SYMBOLISM: HÌNH TƯỢNG RÙA ĐỘI BIA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          
          {/* Left: Big Artifact Image with Zoom Reveal (6 cols) */}
          <div className="lg:col-span-6 relative group">
            <div className="relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_0_35px_rgba(0,0,0,0.8)]">
              <img
                src="/images/turtle-stele.jpg"
                alt="Hình tượng rùa đá đội bia Tiến sĩ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Zoom Button overlay */}
              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute bottom-6 right-6 bg-[#D4AF37] hover:bg-[#F5E6B3] text-[#090909] px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl transition-all"
              >
                <ZoomIn className="w-4 h-4" />
                <span>Soi chi tiết bia đá</span>
              </button>

              <div className="absolute bottom-6 left-6 max-w-xs">
                <span className="text-[11px] text-[#D4AF37] uppercase tracking-wider font-semibold block mb-1">
                  Hiện vật độc bản UNESCO
                </span>
                <p className="text-sm font-cinzel font-bold text-white">
                  Bia Tiến Sĩ Khoa Nhâm Tuất (1442)
                </p>
              </div>
            </div>
          </div>

          {/* Right: Symbolism Interpretation (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181611] border border-[#D4AF37]/30 text-xs text-[#D4AF37]">
              <Shield className="w-3.5 h-3.5" />
              <span>Ý Nghĩa Biểu Tượng Ngàn Năm</span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-white">
              {DOCTOR_STELES_DATA.symbolismTurtle.title}
            </h3>

            <p className="text-sm text-[#D4AF37] font-medium tracking-wide">
              {DOCTOR_STELES_DATA.symbolismTurtle.subtitle}
            </p>

            <p className="text-sm sm:text-base text-[#E8D8B5]/90 leading-relaxed font-light">
              {DOCTOR_STELES_DATA.symbolismTurtle.content}
            </p>

            <div className="space-y-3 pt-2">
              {DOCTOR_STELES_DATA.symbolismTurtle.keyPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#141414] border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[#E8D8B5]">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. ARTISTIC EVOLUTION: SỰ THAY ĐỔI ĐIÊU KHẮC QUA 3 THỜI KỲ */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#121212] border border-[#D4AF37]/30 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block mb-1">
                Tiến Trình Mỹ Thuật Điêu Khắc
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Nghệ Thuật Điêu Khắc Qua Các Triều Đại
              </h3>
            </div>

            {/* Era Tabs */}
            <div className="flex flex-wrap gap-2">
              {DOCTOR_STELES_DATA.eras.map((era) => {
                const isActive = selectedEra.id === era.id;
                return (
                  <button
                    key={era.id}
                    onClick={() => setSelectedEra(era)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#D4AF37] text-[#090909] shadow-[0_0_15px_#D4AF37]'
                        : 'bg-[#1a1a1a] text-[#E8D8B5]/75 hover:bg-[#252525] border border-white/10'
                    }`}
                  >
                    {era.period.split(' (')[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Era Card Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEra.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    {selectedEra.period}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#8B0000]/30 text-[#FF8A8A] border border-[#8B0000]/50 font-medium">
                    {selectedEra.styleName}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#E8D8B5] leading-relaxed">
                  {selectedEra.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs uppercase text-[#D4AF37] font-bold block">
                    Đặc trưng điêu khắc nhận diện:
                  </span>
                  {selectedEra.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#E8D8B5]/85">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-lg">
                <img
                  src="/images/vuon-bia.jpg"
                  alt={selectedEra.styleName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs text-[#E8D8B5]/90">
                  <span className="text-[#D4AF37] font-semibold block">{selectedEra.styleName}</span>
                  Chi tiết hoa văn rồng mây và đài sen triều đại.
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* High-Resolution Artifact Zoom Modal */}
      <AnimatePresence>
        {isZoomOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl" onClick={() => setIsZoomOpen(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZoomOpen(false)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-black/80 text-white hover:text-[#D4AF37] border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full h-[75vh] rounded-2xl overflow-hidden border border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.4)] relative">
                <img
                  src="/images/turtle-stele.jpg"
                  alt="Chi tiết Bia Tiến Sĩ"
                  className="w-full h-full object-cover cursor-grab"
                />
                <div className="absolute bottom-4 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-[#D4AF37]/40 text-xs sm:text-sm text-[#E8D8B5] flex items-center justify-between">
                  <span>Khắc chạm chữ Hán chân phương và trán bia rồng mây tinh xảo thế kỷ XV</span>
                  <span className="font-mono text-[#D4AF37]">UNESCO Memory of the World</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
