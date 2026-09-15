// Web Audio API Traditional Vietnamese Pentatonic Heritage Music Generator
// Emulates Đàn Bầu, Trúc Flute, and Bronze Singing Bowl / Chime

class TraditionalHeritageAudio {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.timerId = null;
    this.volume = 0.6;
    
    // Pentatonic scale (Thang âm Điệu Bắc & Nam: C - D - F - G - A and harmonics)
    this.scale = [
      130.81, // C3
      146.83, // D3
      174.61, // F3
      196.00, // G3
      220.00, // A3
      261.63, // C4
      293.66, // D4
      349.23, // F4
      392.00, // G4
      440.00, // A4
      523.25, // C5
      587.33, // D5
      698.46  // F5
    ];
    this.noteIndex = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  // Play bronze bell / temple chime
  playTempleChime(freq = 523.25, time = null) {
    if (!this.ctx || !this.isPlaying) return;
    const t = time || this.ctx.currentTime;
    
    // Fundamental + harmonics for rich bronze tone
    const harmonics = [1, 2.76, 4.07, 5.43];
    const decays = [4.5, 3.0, 2.0, 1.2];
    const gains = [0.4, 0.2, 0.1, 0.05];

    harmonics.forEach((h, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * h, t);

      gain.gain.setValueAtTime(gains[i] * 0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + decays[i]);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + decays[i] + 0.1);
    });
  }

  // Play Đàn Bầu note with characteristic gliding pitch bend
  playDanBauNote(targetFreq, startTime, duration = 3.0) {
    if (!this.ctx || !this.isPlaying) return;
    const t = startTime;

    const osc = this.ctx.createOscillator();
    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';

    // Đàn bầu bending effect: slight slide up or down into target frequency
    const slideOffset = (Math.random() > 0.5 ? -20 : 20);
    osc.frequency.setValueAtTime(targetFreq + slideOffset, t);
    osc.frequency.exponentialRampToValueAtTime(targetFreq, t + 0.35);

    // Subtle vibrato (nhấn nhá)
    vibrato.frequency.setValueAtTime(4.5 + Math.random(), t);
    vibratoGain.gain.setValueAtTime(targetFreq * 0.02, t);
    vibrato.connect(osc.frequency);

    // Warm envelope
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.22, t + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    vibrato.start(t);
    osc.start(t);

    vibrato.stop(t + duration);
    osc.stop(t + duration + 0.1);
  }

  // Play Bamboo Flute (Sáo Trúc) breathy note
  playBambooFlute(freq, startTime, duration = 4.0) {
    if (!this.ctx || !this.isPlaying) return;
    const t = startTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    // Filter for breathy wood warmth
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, t);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);

    // Gentle swelling envelope
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.18, t + 0.6);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t);
    osc.stop(t + duration + 0.1);
  }

  scheduleNextPhrase() {
    if (!this.isPlaying || !this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Pick note from pentatonic scale
    const baseFreq = this.scale[Math.floor(Math.random() * this.scale.length)];
    
    // 35% chance to strike a sacred temple chime
    if (Math.random() < 0.35) {
      this.playTempleChime(261.63 * (Math.random() > 0.5 ? 1 : 1.5), now);
    }

    // Play meditative Đàn Bầu
    this.playDanBauNote(baseFreq, now + 0.2, 3.5);

    // Complement with high flute overtone
    if (Math.random() > 0.4) {
      const fluteFreq = baseFreq * 2;
      this.playBambooFlute(fluteFreq, now + 1.2, 4.0);
    }

    // Interval between phrases: 3.5 - 5.5 seconds for calm breathing rhythm
    const nextInterval = 3200 + Math.random() * 2400;
    this.timerId = setTimeout(() => {
      this.scheduleNextPhrase();
    }, nextInterval);
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;
    this.scheduleNextPhrase();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  setVolume(vol) {
    this.volume = vol;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(vol, this.ctx.currentTime);
    }
  }
}

export const heritageAudio = new TraditionalHeritageAudio();
