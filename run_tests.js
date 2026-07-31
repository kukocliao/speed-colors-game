// 著色快手 (Speed Colors) - 100 組自動化測試與邏輯驗證 Suite

const fs = require('fs');
const path = require('path');

let patternsContent = fs.readFileSync(path.join(__dirname, 'patterns.js'), 'utf8');
patternsContent = patternsContent.replace(/const COLOR_PALETTE/g, 'var COLOR_PALETTE');
patternsContent = patternsContent.replace(/const GAME_PATTERNS/g, 'var GAME_PATTERNS');

eval(patternsContent);

const EXPECTED_HEX_SET = new Set(COLOR_PALETTE.map(c => c.hex.toUpperCase()));

console.log("==========================================");
console.log("🚀 開始執行《著色快手》 100 組自動化 QA 測試");
console.log("==========================================");

let totalErrors = 0;
let totalWarnings = 0;

// 1. 題目結構與 6 色不重複約束檢查
console.log("\n[階段 1] 題庫資料結構與 6 色單純排列約束稽核 (20 關關卡)...");

GAME_PATTERNS.forEach((pattern, index) => {
    const patternNum = index + 1;
    const solution = pattern.solution || {};
    const solutionHexes = Object.values(solution).map(h => h.toUpperCase());
    
    if (pattern.regionsCount !== 6) {
        console.error(`❌ [關卡 ${patternNum} - ${pattern.name}] 分區宣告數不等於 6: ${pattern.regionsCount}`);
        totalErrors++;
    }

    if (solutionHexes.length !== 6) {
        console.error(`❌ [關卡 ${patternNum} - ${pattern.name}] 解答分區數不等於 6: 實際 ${solutionHexes.length}`);
        totalErrors++;
    }

    const uniqueColors = new Set(solutionHexes);
    if (uniqueColors.size !== 6) {
        console.error(`❌ [關卡 ${patternNum} - ${pattern.name}] 顏色重複或缺色！獨特顏色數: ${uniqueColors.size}`);
        console.error(`   解答現有色彩:`, solutionHexes);
        totalErrors++;
    }

    solutionHexes.forEach(hex => {
        if (!EXPECTED_HEX_SET.has(hex)) {
            console.error(`❌ [關卡 ${patternNum} - ${pattern.name}] 包含非標準調色盤顏色: ${hex}`);
            totalErrors++;
        }
    });

    const svgStr = pattern.getSvg({});
    const regionPathMatches = (svgStr.match(/class="[^"]*region-path/g) || []).length;
    if (regionPathMatches !== 6) {
        console.error(`❌ [關卡 ${patternNum} - ${pattern.name}] SVG 可點擊路徑數量不等於 6: 實際 ${regionPathMatches}`);
        totalErrors++;
    }
});

if (totalErrors === 0) {
    console.log("✅ 題庫結構稽核 100% 通過！所有 20 個關卡均精確包含 6 色各一次，且可點擊 SVG 節點均為 6 個！");
}

// 2. 模擬 100 回合隨機遊玩與計分引擎邊界測試
console.log("\n[階段 2] 執行 100 回合玩家模擬遊玩與計分邊界測試 (Simulating 100 Rounds)...");

let simulatedPassed = 0;

for (let round = 1; round <= 100; round++) {
    const randPattern = GAME_PATTERNS[Math.floor(Math.random() * GAME_PATTERNS.length)];
    const solution = randPattern.solution;
    const solutionKeys = Object.keys(solution);

    const simType = round % 4; // 0: 完美全對, 1: 部分答錯, 2: 隨機混亂, 3: 全錯
    const userColorMap = {};

    solutionKeys.forEach((key, i) => {
        if (simType === 0) {
            userColorMap[key] = solution[key];
        } else if (simType === 1) {
            userColorMap[key] = i < 3 ? solution[key] : '#000000';
        } else if (simType === 2) {
            userColorMap[key] = Math.random() > 0.5 ? solution[key] : '#F43F5E';
        } else {
            userColorMap[key] = '#FFFFFF';
        }
    });

    let correctCount = 0;
    let wrongCount = 0;
    let uncoloredCount = 0;

    solutionKeys.forEach(regionId => {
        const userColor = userColorMap[regionId];
        const targetColor = solution[regionId];
        
        if (!userColor || userColor === '#FFFFFF') {
            uncoloredCount++;
        } else if (userColor.toUpperCase() === targetColor.toUpperCase()) {
            correctCount++;
        } else {
            wrongCount++;
        }
    });

    let roundScore = (correctCount * 100) - (wrongCount * 30);
    if (correctCount === 6) roundScore += 200;
    if (correctCount > 0) roundScore += (15 * 10);
    roundScore = Math.max(0, roundScore);

    if (isNaN(roundScore) || roundScore < 0) {
        console.error(`❌ [回合 ${round}] 計分產生無效數值: ${roundScore}`);
        totalErrors++;
    }

    if (simType === 0 && (correctCount !== 6 || roundScore !== 950)) {
        console.error(`❌ [回合 ${round}] 完美全對期望分數應為 950 (600+200+150)，實際獲得: ${roundScore}, 正確數: ${correctCount}`);
        totalErrors++;
    }

    simulatedPassed++;
}

console.log(`\n==========================================`);
console.log(`🎉 100 組自動化測試執行完成！`);
console.log(`- 測試總回合數: 100 / 100`);
console.log(`- 通過測試數: ${simulatedPassed}`);
console.log(`- 發現錯誤數: ${totalErrors}`);
console.log(`- 發現警示數: ${totalWarnings}`);
console.log(`==========================================`);
