// 著色快手 Speed Colors - 原生 Web Audio API 音效引擎

class SoundManager {
    constructor() {
        this.audioCtx = null;
        this.isSoundOn = true;
    }

    init() {
        if (!this.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioCtx = new AudioContext();
        }
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    }

    play(type) {
        if (!this.isSoundOn) return;
        try {
            this.init();
            const now = this.audioCtx.currentTime;

            switch (type) {
                case 'tick': {
                    const osc = this.audioCtx.createOscillator();
                    const gain = this.audioCtx.createGain();
                    osc.connect(gain);
                    gain.connect(this.audioCtx.destination);
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(800, now);
                    gain.gain.setValueAtTime(0.04, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                    osc.start(now);
                    osc.stop(now + 0.05);
                    break;
                }

                case 'flip': {
                    const osc = this.audioCtx.createOscillator();
                    const gain = this.audioCtx.createGain();
                    osc.connect(gain);
                    gain.connect(this.audioCtx.destination);
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(200, now);
                    osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
                    gain.gain.setValueAtTime(0.12, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
                    osc.start(now);
                    osc.stop(now + 0.15);
                    break;
                }

                case 'fill': {
                    // 水滴/著色啵啵聲
                    const osc = this.audioCtx.createOscillator();
                    const gain = this.audioCtx.createGain();
                    osc.connect(gain);
                    gain.connect(this.audioCtx.destination);
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(400, now);
                    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.08);
                    gain.gain.setValueAtTime(0.2, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                    osc.start(now);
                    osc.stop(now + 0.08);
                    break;
                }

                case 'select': {
                    // 選擇調色盤顏色音
                    const osc = this.audioCtx.createOscillator();
                    const gain = this.audioCtx.createGain();
                    osc.connect(gain);
                    gain.connect(this.audioCtx.destination);
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(600, now);
                    gain.gain.setValueAtTime(0.08, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
                    osc.start(now);
                    osc.stop(now + 0.04);
                    break;
                }

                case 'correct': {
                    // 正確區域高亮和弦
                    const freqs = [523.25, 659.25, 783.99, 1046.50];
                    freqs.forEach((freq, idx) => {
                        const osc = this.audioCtx.createOscillator();
                        const gain = this.audioCtx.createGain();
                        osc.connect(gain);
                        gain.connect(this.audioCtx.destination);
                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
                        gain.gain.setValueAtTime(0.1, now + idx * 0.06);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.2);
                        osc.start(now + idx * 0.06);
                        osc.stop(now + idx * 0.06 + 0.2);
                    });
                    break;
                }

                case 'incorrect': {
                    // 填錯警示音
                    const osc = this.audioCtx.createOscillator();
                    const gain = this.audioCtx.createGain();
                    osc.connect(gain);
                    gain.connect(this.audioCtx.destination);
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(240, now);
                    osc.frequency.linearRampToValueAtTime(110, now + 0.3);
                    gain.gain.setValueAtTime(0.15, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                    osc.start(now);
                    osc.stop(now + 0.3);
                    break;
                }

                case 'shuffle': {
                    // 筆蓋交換洗牌音
                    [300, 450, 600, 500, 700].forEach((freq, idx) => {
                        const osc = this.audioCtx.createOscillator();
                        const gain = this.audioCtx.createGain();
                        osc.connect(gain);
                        gain.connect(this.audioCtx.destination);
                        osc.type = 'triangle';
                        osc.frequency.setValueAtTime(freq, now + idx * 0.05);
                        gain.gain.setValueAtTime(0.08, now + idx * 0.05);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.08);
                        osc.start(now + idx * 0.05);
                        osc.stop(now + idx * 0.05 + 0.08);
                    });
                    break;
                }

                case 'win': {
                    // 關卡勝利管風琴和弦
                    const chord = [440, 554.37, 659.25, 880];
                    chord.forEach((freq) => {
                        const osc = this.audioCtx.createOscillator();
                        const gain = this.audioCtx.createGain();
                        osc.connect(gain);
                        gain.connect(this.audioCtx.destination);
                        osc.type = 'sine';
                        osc.frequency.setValueAtTime(freq, now);
                        gain.gain.setValueAtTime(0.12, now);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
                        osc.start(now);
                        osc.stop(now + 0.8);
                    });
                    break;
                }
            }
        } catch (e) {
            console.warn("音效播放被限制：", e);
        }
    }
}

const soundManager = new SoundManager();
