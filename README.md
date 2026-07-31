# 著色快手 (Speed Colors) - 極速記憶填色競技網頁遊戲

🖍️ 一款改編自經典桌遊《著色快手 Speed Colors》的現代網頁遊戲。結合**瞬間色彩記憶**、**黑白線稿互動填色**與**極速對比競技**，打造兼具視覺美感與流暢音效體驗的記憶極限測試。

---

## 🎮 遊戲特色與狀態機機制

1. **記憶階段 (MEMORIZE)**：
   * 展示彩繪完成之向量（SVG）圖案。
   * 顯示倒數計時（預設 5 秒），玩家需快速記憶各區域之色彩配置。

2. **著色階段 (COLOR)**：
   * 翻轉至黑白線稿頁面，啟動著色倒數計時。
   * 下方提供數位調色盤（包含紅、黃、藍、綠、紫、橘 6 色）。
   * 點選色彩後點擊線稿區塊即可填色；支援鍵盤 `1` ~ `6` 數字鍵快捷選色。

3. **得分對比 (SCORE)**：
   * 時間結束或點擊「完成著色」後進行對比評分。
   * 雙圖（標準解答 vs 玩家填色）並列呈現，計算精確正確率與速度加成分數。

4. **筆蓋交換變體模式 (Shuffle Cap Mode)**：
   * 可選勾選「筆蓋交換 / 混淆變體模式」，重現桌遊每回合交換筆蓋的樂趣（每回合調色盤顏色順序隨機洗牌）。

---

## 🛠️ 本地遊玩說明

直接在瀏覽器中開啟 `index.html` 即可立即暢玩，無須安裝額外依賴套件。

```bash
# 也可使用 Python 開啟本機伺服器測試
python3 -m http.server 8080
```

---

## 🚀 GitHub Pages 部署說明

1. 將本資料夾內容推送到您的 GitHub 倉庫。
2. 進入 GitHub 倉庫 **Settings** -> **Pages**。
3. Source 選擇 `Deploy from a branch`，Branch 選擇 `main` 與 `/ (root)`，並點選 Save。
4. 部署完成後即可獲得免費線上遊玩網址。

---

## 🌐 多人連線模式（主控端 + 玩家各自手機著色）

除了單機版 `index.html`，本專案另外提供**線上多人版**：你用 `host.html` 控制記憶／著色階段進度，其他人用手機開 `player.html` 加入，畫面跟著你同步，但**各自獨立填色計分**（每人每題算完成著色後才計分，正確率、速度加成、完美通關加成同單機版邏輯，連勝有加成）。

### 檔案
| 檔案 | 用途 |
|------|------|
| `host.html` | 主控端：設定記憶/著色秒數、開始下一關、即時排行榜 |
| `player.html` | 玩家端：輸入名字加入，跟隨主控端進度各自填色 |
| `patterns.js` / `audio.js` | 圖案資料庫與音效合成（host/player 與單機版共用） |
| `sync.js` | 連線同步邏輯（Firebase 或本機測試模式自動切換） |
| `firebase-config.js` | Firebase 專案設定（與「找不同大挑戰」共用同一個專案，只是換房間路徑） |
| `database.rules.json` | Firebase 資料庫安全規則（存查用，須在 Firebase 主控台貼上生效） |

### 啟用步驟

**A. 本機先試玩（不需要額外設定）**
1. 用任何本機伺服器開啟本資料夾（例如 `python3 -m http.server`）
2. 開兩個分頁：`host.html` 當主控、`player.html` 當玩家

**B. 正式跨裝置連線——更新 Firebase 資料庫規則**
本專案的 `firebase-config.js` 已經指向與「找不同大挑戰」相同的 Firebase 專案（`spot-the-difference-10a2b`），只是用了不同的房間路徑 `speedcolors-main`，所以不用另外建立 Firebase 專案，但**資料庫規則需要更新**才能讓這個新房間可以讀寫：
1. 到 [Firebase Console](https://console.firebase.google.com/) 開啟 `spot-the-difference-10a2b` 專案
2. 左側「Realtime Database → 規則」分頁，把整段貼成 `database.rules.json` 的內容並發布（裡面同時保留了 `spotdiff-main` 跟新增的 `speedcolors-main` 兩個房間，不會影響原本的找不同遊戲）

**C. 部署（GitHub Pages 或 Vercel 皆可，做法同單機版）**
3. push 到 GitHub → 用 GitHub Pages 部署整個資料夾
4. 你開 `https://你的網址/host.html` 主控，把 `https://你的網址/player.html` 分享給其他人手機加入

### 已知限制
- 純前端無帳號驗證，知道玩家網址的人都能加入、都能看到自己的分數（僅適合親友／課堂等信任場合）
- 同名玩家會共用同一筆分數紀錄，請提醒大家用不同名字
- 沒有做伺服器時間校正，計時以雙方裝置各自時鐘為準
