import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Film, Headphones, Sparkles, Clock, Mic, CheckCircle2 } from 'lucide-react';
import { PODCAST_EPISODES, VIDEO_PROJECT_DATA } from '../data/heritageData';

export default function Multimedia() {
  const [activePodcastId, setActivePodcastId] = useState(null);
  const [podcastElapsed, setPodcastElapsed] = useState(0);

  // Podcast play simulation
  const togglePodcast = (id) => {
    if (activePodcastId === id) {
      setActivePodcastId(null);
    } else {
      setActivePodcastId(id);
      setPodcastElapsed(0);
    }
  };

  useEffect(() => {
    let interval = null;
    if (activePodcastId !== null) {
      interval = setInterval(() => {
        setPodcastElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activePodcastId]);

  return (
    <section
      id="multimedia"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#090909] text-[#E8D8B5] overflow-hidden"
    >
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#8B0000]/15 rounded-full blur-3xl pointer-events-none" />

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
            <Headphones className="w-3.5 h-3.5" />
            <span>Đa Phương Tiện & Trải Nghiệm Số</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-6 tracking-wide">
            Tiếng Vọng <span className="gold-text-gradient">Tiền Nhân</span>
          </h2>

          <p className="text-sm sm:text-base text-[#E8D8B5]/80 font-light leading-relaxed">
            Lắng nghe và chiêm ngưỡng di sản sống động qua góc nhìn khám phá của thế hệ trẻ. Nơi tiếng chuông đồng xưa hòa nhịp cùng thước phim và podcast thời đại số.
          </p>
        </motion.div>

        {/* ================================================== */}
        {/* A. VIDEO: CÁC BẠN TRẺ ĐI KHÁM PHÁ VĂN MIẾU */}
        {/* ================================================== */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-6 gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase text-[#D4AF37] tracking-wider font-semibold mb-1">
                <Film className="w-4 h-4" />
                <span>Phim Ngắn Di Sản • Tác phẩm Thuyết minh Thực tế</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Các Bạn Trẻ Đi Khám Phá Văn Miếu
              </h3>
            </div>
            <span className="text-xs text-[#E8D8B5]/60">
              Sản xuất bởi: Nhóm <strong className="text-[#D4AF37]">Song Sát Sâu Sắc</strong> (THPT FPT Hà Nội)
            </span>
          </div>

          {/* Cinematic Video Player Container */}
          <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/50 bg-black shadow-[0_0_50px_rgba(212,175,55,0.25)]">
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ZZpKsv5wrY4?rel=0&modestbranding=1&color=white"
                title="Vẻ Đẹp Văn Miếu – Song Sát Sâu Sắc – Thuyết Minh"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>

          {/* Video Metadata Callout */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#121212] border border-white/5 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <p className="text-xs text-[#E8D8B5]/85">
                <strong>Thông điệp kịch bản:</strong> "Từng viên gạch, từng phiến đá nơi đây không chỉ là quá khứ, mà chính là nguồn cội của tương lai."
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#121212] border border-white/5 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <p className="text-xs text-[#E8D8B5]/85">
                <strong>Đội ngũ thực hiện:</strong> Nguyễn Quí Phong (Hậu kỳ & Quay phim) & Nguyễn Nam Khánh (Kịch bản & Ý tưởng).
              </p>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* B. PODCAST: DANH SÁCH 3 TẬP CHUYÊN SÂU */}
        {/* ================================================== */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-2">
            <div>
              <span className="text-xs text-[#D4AF37] uppercase tracking-wider font-semibold block mb-1">
                Âm Thanh & Tri Thức Số
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Chuỗi Podcast: Tiếng Nói Từ Di Sản
              </h3>
            </div>
            <span className="text-xs text-[#E8D8B5]/60">
              3 tập chuyên đề lịch sử và tư tưởng hiếu học
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PODCAST_EPISODES.map((item) => {
              const isPlayingThis = activePodcastId === item.id;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl glass-panel p-6 border transition-all duration-300 flex flex-col justify-between ${
                    isPlayingThis
                      ? 'border-[#D4AF37] bg-[#16140e] shadow-[0_0_30px_rgba(212,175,55,0.25)]'
                      : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                  }`}
                >
                  <div>
                    {/* Top Row: Tag & Duration */}
                    <div className="flex items-center justify-between mb-4 text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] font-semibold border border-[#D4AF37]/30">
                        {item.episode}
                      </span>
                      <span className="flex items-center gap-1 text-[#E8D8B5]/70 font-mono">
                        <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {item.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-cinzel text-lg font-bold text-white mb-2 line-clamp-2">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-[#E8D8B5]/75 leading-relaxed mb-6 line-clamp-3">
                      {item.description}
                    </p>

                    {/* Animated Waveform Visualizer */}
                    <div className="h-12 bg-[#090909] rounded-xl p-3 border border-white/5 flex items-center justify-between gap-1 mb-6">
                      {item.waveform.map((height, idx) => (
                        <span
                          key={idx}
                          className={`w-1 rounded-full transition-all duration-300 ${
                            isPlayingThis
                              ? 'bg-gradient-to-t from-[#8B0000] to-[#D4AF37] animate-wave'
                              : 'bg-white/20'
                          }`}
                          style={{
                            height: isPlayingThis ? `${height}%` : `${height * 0.4}%`,
                            animationDelay: `${idx * 60}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row: Narrator & Play Button */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mic className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span className="text-[11px] text-[#E8D8B5]/70 truncate max-w-[130px]">
                        {item.narrator}
                      </span>
                    </div>

                    <button
                      onClick={() => togglePodcast(item.id)}
                      className={`p-3 rounded-full font-bold text-xs flex items-center gap-2 transition-all ${
                        isPlayingThis
                          ? 'bg-[#D4AF37] text-[#090909] shadow-[0_0_15px_#D4AF37]'
                          : 'bg-[#1e1e1e] text-[#E8D8B5] hover:bg-[#D4AF37] hover:text-[#090909] border border-white/10'
                      }`}
                    >
                      {isPlayingThis ? (
                        <>
                          <Pause className="w-4 h-4 fill-current" />
                          <span>Tạm dừng</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                          <span>Xem trước</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
