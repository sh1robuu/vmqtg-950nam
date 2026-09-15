import React from 'react';
import { Compass, Heart, Award, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060606] text-[#E8D8B5] border-t border-[#D4AF37]/30 pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_20px_#D4AF37]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer: Brand & Slogan */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10 text-center md:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-[#111111] flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.35)]">
              <Compass className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-bold text-white tracking-wider">
                VĂN MIẾU – QUỐC TỬ GIÁM
              </h3>
              <p className="font-playfair text-[#D4AF37] text-sm italic">
                “Một Văn Miếu – Nhiều cách khám phá.”
              </p>
            </div>
          </div>

          {/* Slogan Quote Badge */}
          <div className="text-center md:text-right max-w-md">
            <p className="text-xs text-[#E8D8B5]/80 font-light leading-relaxed">
              Dự án số hóa di sản bảo tồn văn hóa Thăng Long nghìn năm văn hiến, hướng tới đại lễ kỷ niệm 950 năm thành lập Văn Miếu (1070 – 2026).
            </p>
          </div>
        </div>

        {/* Middle Footer: Team Credits */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#E8D8B5]/75 border-b border-white/10">
          <div>
            <span className="text-[#D4AF37] font-semibold uppercase tracking-wider block mb-2">
              Đơn Vị Thực Hiện
            </span>
            <p className="text-white font-medium">Nhóm Học sinh THPT FPT Hà Nội</p>
            <p className="text-[#D4AF37] font-mono mt-0.5">Tên nhóm: Song Sát Sâu Sắc</p>
          </div>

          <div>
            <span className="text-[#D4AF37] font-semibold uppercase tracking-wider block mb-2">
              Nhóm Tác Giả Sáng Tạo
            </span>
            <p className="text-white">
              <strong className="text-[#F5E6B3]">Nguyễn Quí Phong</strong> (Trưởng nhóm - Hậu kỳ & Quay phim)
            </p>
            <p className="text-white mt-1">
              <strong className="text-[#F5E6B3]">Nguyễn Nam Khánh</strong> (Kịch bản & Phát triển Ý tưởng)
            </p>
          </div>

          <div className="flex flex-col md:items-end justify-center">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#090909] text-xs font-bold text-[#D4AF37] transition-all"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#E8D8B5]/60">
          <p>
            © 2026 Văn Miếu - Quốc Tử Giám. Thiết kế bởi Nhóm Học sinh THPT FPT.
          </p>
          <div className="flex items-center gap-2">
            <span>Ứng dụng công nghệ vì di sản văn hóa Việt Nam</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
