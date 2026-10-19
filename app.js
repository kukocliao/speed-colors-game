// 著色快手 Speed Colors - 跨端觸控與響應式控制器 (Ponytail 極簡版)

class SpeedColorsGame {
    constructor() {
        this.gameState = 'IDLE';
        this.currentPatternIndex = 0;
        this.currentPattern = null;
        this.selectedColor = null;
        this.userColorMap = {};
        this.score = 0;
        this.streak = 0;
        this.timer = null;
        this.timeLeft = 0;
        
        this.maxMemoryTime = 10;
        this.maxColorTime = 30;
        this.isShuffleCapMode = false;
        this.currentPalette = [...COLOR_PALETTE];

        this.initDOM();
        this.bindEvents();
    }

    initDOM() {
        const get = id => document.getElementById(id);
        this.elements = {
            cardInner: get('card-inner'),
            memorizeContainer: get('memorize-svg-container'),
            colorContainer: get('color-svg-container'),
            paletteContainer: get('palette-container'),
            timerBar: get('timer-bar'),
            timerText: get('timer-text'),
            gameStateBadge: get('game-state-badge'),
            gameStateBadgeDesktop: get('game-state-badge-desktop'),
            patternTitle: get('pattern-title'),
            scoreDisplay: get('score-display'),
            streakDisplay: get('streak-display'),
            startBtn: get('start-btn'),
            submitBtn: get('submit-btn'),
            resetColorBtn: get('reset-color-btn'),
            shuffleCapToggle: get('shuffle-cap-toggle'),
            memoryTimeSelect: get('memory-time-select'),
            colorTimeSelect: get('color-time-select'),
            modal: get('result-modal'),
            modalTitle: get('modal-title'),
            modalScoreText: get('modal-score-text'),
            modalAccuracyText: get('modal-accuracy-text'),
            modalNextBtn: get('modal-next-btn'),
            solutionContainer: get('solution-svg-container'),
            userContainer: get('user-svg-container')
        };
    }

    bindEvents() {
        const el = this.elements;
        const addTapEvent = (target, fn) => {
            if (!target) return;
            target.addEventListener('pointerdown', e => { e.preventDefault(); fn(); });
            target.addEventListener('click', fn);
        };

        el.startBtn.addEventListener('click', () => this.startGame());
        el.submitBtn.addEventListener('click', () => this.finishColoring());
        el.resetColorBtn.addEventListener('click', () => this.resetUserColors());
        el.modalNextBtn.addEventListener('click', () => {
            el.modal.classList.add('hidden');
            this.nextPattern();
        });

        el.shuffleCapToggle.addEventListener('change', e => this.isShuffleCapMode = e.target.checked);
        el.memoryTimeSelect.addEventListener('change', e => this.maxMemoryTime = parseInt(e.target.value) || 10);
        el.colorTimeSelect.addEventListener('change', e => this.maxColorTime = parseInt(e.target.value) || 30);

        window.addEventListener('keydown', e => {
            if (this.gameState !== 'COLOR') return;
            const keyNum = parseInt(e.key);
            if (keyNum >= 1 && keyNum <= this.currentPalette.length) {
                this.selectColor(this.currentPalette[keyNum - 1].hex);
            }
        });
    }

    renderPalette() {
        this.elements.paletteContainer.innerHTML = this.currentPalette.map((color, idx) => `
            <button class="palette-btn relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-[#3A2E2A] ${this.selectedColor === color.hex ? 'ring-4 ring-[#3A2E2A] ring-offset-2 ring-offset-[#FFFBF1] scale-105' : ''}"
                    style="background-color: ${color.hex}" data-hex="${color.hex}">
                <span class="absolute top-0.5 left-1 text-[9px] sm:text-[10px] leading-none px-1 py-0.5 rounded bg-[#FFFBF1] text-[#3A2E2A] font-mono">${idx + 1}</span>
            </button>
        `).join('');

        this.elements.paletteContainer.querySelectorAll('.palette-btn').forEach(btn => {
            const handleSelect = (e) => {
                if (e) e.preventDefault();
                soundManager.play('select');
                this.selectColor(btn.getAttribute('data-hex'));
            };
            btn.addEventListener('pointerdown', handleSelect);
            btn.addEventListener('click', handleSelect);
        });
    }

    selectColor(hex) {
        this.selectedColor = hex;
        this.renderPalette();
    }

    startGame() {
        this.score = 0;
        this.streak = 0;
        this.updateHUD();
        this.currentPatternIndex = Math.floor(Math.random() * GAME_PATTERNS.length);
        this.loadPattern(this.currentPatternIndex);
    }

    nextPattern() {
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * GAME_PATTERNS.length);
        } while (nextIndex === this.currentPatternIndex && GAME_PATTERNS.length > 1);
        
        this.currentPatternIndex = nextIndex;
        this.loadPattern(this.currentPatternIndex);
    }

    loadPattern(index) {
        this.currentPattern = GAME_PATTERNS[index];
        this.userColorMap = {};
        this.elements.patternTitle.textContent = `${this.currentPattern.name}`;
        
        this.currentPalette = this.isShuffleCapMode 
            ? (soundManager.play('shuffle'), [...COLOR_PALETTE].sort(() => Math.random() - 0.5))
            : [...COLOR_PALETTE];
            
        this.selectColor(this.currentPalette[0].hex);
        this.elements.memorizeContainer.innerHTML = this.currentPattern.getSvg(this.currentPattern.solution);
        this.renderColorCard();
        this.startMemorizeStage();
    }

    renderColorCard() {
        this.elements.colorContainer.innerHTML = this.currentPattern.getSvg(this.userColorMap);
        this.elements.colorContainer.querySelectorAll('.region-path').forEach(path => {
            const handleFill = (e) => {
                if (e) e.preventDefault();
                if (this.gameState !== 'COLOR' || !this.selectedColor) return;
                const regionId = e.currentTarget.getAttribute('data-region');
                if (regionId && this.userColorMap[regionId] !== this.selectedColor) {
                    this.userColorMap[regionId] = this.selectedColor;
                    soundManager.play('fill');
                    this.renderColorCard();
                }
            };
            path.addEventListener('pointerdown', handleFill);
            path.addEventListener('click', handleFill);
        });
    }

    startMemorizeStage() {
        this.gameState = 'MEMORIZE';
        const el = this.elements;
        const text = '🧠 記憶階段';
        el.gameStateBadge.textContent = text;
        if (el.gameStateBadgeDesktop) el.gameStateBadgeDesktop.textContent = text;

        el.cardInner.classList.remove('is-flipped');
        el.startBtn.classList.add('hidden');
        el.submitBtn.classList.add('hidden');
        el.resetColorBtn.classList.add('hidden');

        soundManager.play('flip');
        this.startTimer(this.maxMemoryTime, () => this.startColorStage());
    }

    startColorStage() {
        this.gameState = 'COLOR';
        const el = this.elements;
        const text = '🎨 著色階段';
        el.gameStateBadge.textContent = text;
        if (el.gameStateBadgeDesktop) el.gameStateBadgeDesktop.textContent = text;

        el.cardInner.classList.add('is-flipped');
        soundManager.play('flip');

        el.submitBtn.classList.remove('hidden');
        el.resetColorBtn.classList.remove('hidden');
        this.startTimer(this.maxColorTime, () => this.finishColoring());
    }

    startTimer(seconds, onTimeout) {
        if (this.timer) clearInterval(this.timer);
        this.timeLeft = seconds;
        this.updateTimerUI(this.timeLeft, seconds);

        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerUI(this.timeLeft, seconds);
            if (this.timeLeft > 0) {
                if (this.gameState === 'MEMORIZE' || this.timeLeft <= 3) soundManager.play('tick');
            } else {
                clearInterval(this.timer);
                this.timer = null;
                onTimeout();
            }
        }, 1000);
    }

    resetUserColors() {
        if (this.gameState !== 'COLOR') return;
        this.userColorMap = {};
        soundManager.play('select');
        this.renderColorCard();
    }

    finishColoring() {
        if (this.gameState !== 'COLOR') return;
        if (this.timer) { clearInterval(this.timer); this.timer = null; }
        this.gameState = 'SCORE';

        const solution = this.currentPattern.solution;
        const total = Object.keys(solution).length;
        let correct = 0, wrong = 0, uncolored = 0;

        Object.keys(solution).forEach(id => {
            const userColor = this.userColorMap[id];
            if (!userColor) uncolored++;
            else if (userColor.toUpperCase() === solution[id].toUpperCase()) correct++;
            else wrong++;
        });

        let roundScore = Math.max(0, (correct * 100) - (wrong * 30) + (correct === total ? 200 : 0) + (correct > 0 ? this.timeLeft * 15 : 0));
        
        if (correct === total) { this.streak++; soundManager.play('win'); }
        else { this.streak = 0; soundManager.play('wrong'); }

        this.score += roundScore;
        this.updateHUD();
        this.showResultModal(roundScore, correct, total, wrong, uncolored);
    }

    showResultModal(score, correct, total, wrong, uncolored) {
        const el = this.elements;
        const percent = Math.round((correct / total) * 100);
        el.modalTitle.textContent = correct === total ? '🎉 完美全對！' : (correct > 0 ? '⚡ 完成挑戰！' : '❌ 答錯再接再勵！');
        el.modalScoreText.textContent = `+${score} 分`;
        el.modalAccuracyText.textContent = `正確率：${percent}% (${correct}/${total} 對，${wrong} 錯)`;

        el.solutionContainer.innerHTML = this.currentPattern.getSvg(this.currentPattern.solution);
        el.userContainer.innerHTML = this.currentPattern.getSvg(this.userColorMap);
        el.modal.classList.remove('hidden');
    }

    updateTimerUI(current, max) {
        const percent = Math.max(0, (current / max) * 100);
        this.elements.timerBar.style.width = `${percent}%`;
        this.elements.timerText.textContent = `${current} 秒`;
        this.elements.timerBar.className = `h-full transition-all duration-300 ${percent <= 25 ? 'bg-[#E5533D] timer-warning' : (percent <= 50 ? 'bg-[#F2C14E]' : 'bg-[#6CBF84]')}`;
    }

    updateHUD() {
        this.elements.scoreDisplay.textContent = this.score;
        this.elements.streakDisplay.textContent = this.streak;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.game = new SpeedColorsGame();
});
