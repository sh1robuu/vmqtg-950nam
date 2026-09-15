import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { heritageAudio } from '../utils/audioSynth';

export default function AudioPlayerFloating() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide initial tooltip after 7 seconds
    const timer = setTimeout(() => setShowTooltip(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    const active = heritageAudio.toggle();
    setIsPlaying(active);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip hint */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#111111]/90 border border-[#D4AF37]/40 px-3 py-1.5 rounded-full text-xs text-[#E8D8B5] shadow-lg backdrop-blur-md animate-pulse">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span>Bật nhã nhạc cổ phong</span>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleToggle}
        title={isPlaying ? "Tắt nhạc truyền thống" : "Bật âm nhạc cổ phong Việt Nam"}
        className={`relative group p-3.5 rounded-full border transition-all duration-300 shadow-lg backdrop-blur-md flex items-center justify-center ${
          isPlaying
            ? 'bg-[#1a170d] border-[#D4AF37] text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
            : 'bg-[#111111]/80 border-white/20 text-[#E8D8B5]/70 hover:border-[#D4AF37] hover:text-[#D4AF37]'
        }`}
      >
        {/* Pulsing ring when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-30" />
        )}

        {/* Audio Waveform icon animation */}
        {isPlaying ? (
          <div className="flex items-center gap-[3px] h-5 px-1">
            <span className="w-[3px] h-3 bg-[#D4AF37] rounded-full animate-wave" style={{ animationDelay: '0ms' }} />
            <span className="w-[3px] h-5 bg-[#D4AF37] rounded-full animate-wave" style={{ animationDelay: '200ms' }} />
            <span className="w-[3px] h-2 bg-[#D4AF37] rounded-full animate-wave" style={{ animationDelay: '400ms' }} />
            <span className="w-[3px] h-4 bg-[#D4AF37] rounded-full animate-wave" style={{ animationDelay: '600ms' }} />
          </div>
        ) : (
          <Music className="w-5 h-5 transition-transform group-hover:scale-110" />
        )}
      </button>
    </div>
  );
}
