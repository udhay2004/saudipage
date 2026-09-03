// Subtle luxury synthetic audio engine using Web Audio API (Zero external assets)
class AudioManager {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;

  constructor() {
    // Lazy initialize on first interaction to comply with browser autoplay policies
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public toggleMute(): boolean {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  // Soft mechanical horology tick
  public playMechanicalTick() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.035);
    } catch {
      // Ignore audio errors gracefully
    }
  }

  // Keyhole unlock metallic resonance
  public playUnlockChime() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      // Dual harmonic metallic shimmer
      [587.33, 880, 1174.66, 1760].forEach((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, t + i * 0.06);

        gain.gain.setValueAtTime(0.03, t + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.06 + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(t + i * 0.06);
        osc.stop(t + i * 0.06 + 0.45);
      });
    } catch {
      // Ignore audio errors
    }
  }

  // Subtle radar / node ping
  public playRadarPing() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(920, t);
      osc.frequency.exponentialRampToValueAtTime(550, t + 0.12);

      gain.gain.setValueAtTime(0.03, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(t + 0.14);
    } catch {
      // Ignore audio errors
    }
  }
}

export const audio = new AudioManager();
