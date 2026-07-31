// 著色快手 Speed Colors - 實體 6 分區全套向量圖庫與調色盤定義 (100% 六色一對一不重複解法版)

// 精調高對比經典 6 色體系 (紅、黃、藍、綠、紫、橘 6 色完全獨立)
const COLOR_PALETTE = [
    { id: 'red', name: '鮮紅', hex: '#F43F5E', border: '#BE123C', key: '1' },
    { id: 'yellow', name: '檸檬黃', hex: '#FACC15', border: '#CA8A04', key: '2' },
    { id: 'blue', name: '寶藍', hex: '#2563EB', border: '#1D4ED8', key: '3' },
    { id: 'green', name: '翡翠綠', hex: '#10B981', border: '#047857', key: '4' },
    { id: 'purple', name: '夢幻紫', hex: '#9333EA', border: '#6B21A8', key: '5' },
    { id: 'orange', name: '濃郁橘', hex: '#FF6B00', border: '#C2410C', key: '6' }
];

// 實體桌遊改編之 6 分區向量圖庫 (全關卡解答均 100% 包含紅黃藍綠紫橘 6 色，絕不重複)
const GAME_PATTERNS = [
    {
        id: 'card_01_owl',
        name: '第 01 關：夜行貓頭鷹',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="head" d="M 80,100 C 120,60 180,60 220,100 C 230,140 70,140 80,100 Z" 
                      fill="${getColor('head')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="face" d="M 80,100 C 90,180 210,180 220,100 Z" 
                      fill="${getColor('face')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle cx="125" cy="125" r="8" fill="#1E293B" pointer-events="none" />
                <circle cx="175" cy="125" r="8" fill="#1E293B" pointer-events="none" />
                <path data-region="left-wing" d="M 80,150 C 40,200 60,280 110,290 C 90,230 90,170 80,150 Z" 
                      fill="${getColor('left-wing')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="right-wing" d="M 220,150 C 260,200 240,280 190,290 C 210,230 210,170 220,150 Z" 
                      fill="${getColor('right-wing')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="body" d="M 110,165 C 110,280 190,280 190,165 Z" 
                      fill="${getColor('body')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="tail" d="M 110,290 L 190,290 L 150,350 Z" 
                      fill="${getColor('tail')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path d="M 30,310 L 270,310" fill="none" stroke="#1E293B" stroke-width="8" stroke-linecap="round" pointer-events="none" />
            </svg>`;
        },
        solution: { 'head': '#F43F5E', 'face': '#FACC15', 'left-wing': '#2563EB', 'right-wing': '#10B981', 'body': '#FF6B00', 'tail': '#9333EA' }
    },
    {
        id: 'card_02_rocket',
        name: '第 02 關：噴射火箭',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="flame" d="M 120,320 L 150,385 L 180,320 Z" 
                      fill="${getColor('flame')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="left-wing" d="M 110,240 L 45,310 L 110,310 Z" 
                      fill="${getColor('left-wing')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="right-wing" d="M 190,240 L 255,310 L 190,310 Z" 
                      fill="${getColor('right-wing')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="nose" d="M 150,35 C 120,90 110,130 110,150 L 190,150 C 190,130 180,90 150,35 Z" 
                      fill="${getColor('nose')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="body" d="M 110,150 L 110,310 L 190,310 L 190,150 Z" 
                      fill="${getColor('body')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="window" cx="150" cy="220" r="32" 
                        fill="${getColor('window')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'flame': '#FF6B00', 'left-wing': '#F43F5E', 'right-wing': '#9333EA', 'nose': '#10B981', 'body': '#2563EB', 'window': '#FACC15' }
    },
    {
        id: 'card_03_kite',
        name: '第 03 關：飛翔風箏',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="top-left" d="M 150,40 L 40,160 L 150,160 Z" 
                      fill="${getColor('top-left')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="top-right" d="M 150,40 L 260,160 L 150,160 Z" 
                      fill="${getColor('top-right')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="bottom-left" d="M 40,160 L 150,300 L 150,160 Z" 
                      fill="${getColor('bottom-left')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="bottom-right" d="M 260,160 L 150,300 L 150,160 Z" 
                      fill="${getColor('bottom-right')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="ribbon1" d="M 150,300 Q 180,330 210,320 L 190,340 Z" 
                      fill="${getColor('ribbon1')}" stroke="#1E293B" stroke-width="6" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="ribbon2" d="M 210,320 Q 230,370 260,360 L 240,380 Z" 
                      fill="${getColor('ribbon2')}" stroke="#1E293B" stroke-width="6" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path d="M 150,300 C 170,320 220,330 250,380" fill="none" stroke="#1E293B" stroke-width="4" pointer-events="none" />
            </svg>`;
        },
        solution: { 'top-left': '#F43F5E', 'top-right': '#FACC15', 'bottom-left': '#2563EB', 'bottom-right': '#10B981', 'ribbon1': '#9333EA', 'ribbon2': '#FF6B00' }
    },
    {
        id: 'card_04_castle',
        name: '第 04 關：童話城堡',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="roof-left" d="M 55,60 L 95,140 L 15,140 Z" 
                      fill="${getColor('roof-left')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="roof-right" d="M 245,60 L 285,140 L 205,140 Z" 
                      fill="${getColor('roof-right')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="roof-main" d="M 150,30 L 210,110 L 90,110 Z" 
                      fill="${getColor('roof-main')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="walls" d="M 25,140 L 275,140 L 275,360 L 25,360 Z" 
                      fill="${getColor('walls')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="gate" d="M 110,360 L 110,260 C 110,215 190,215 190,260 L 190,360 Z" 
                      fill="${getColor('gate')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="flag" d="M 150,30 L 150,5 L 185,18 L 150,30 Z" 
                      fill="${getColor('flag')}" stroke="#1E293B" stroke-width="5" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'roof-left': '#9333EA', 'roof-right': '#10B981', 'roof-main': '#F43F5E', 'walls': '#FACC15', 'gate': '#FF6B00', 'flag': '#2563EB' }
    },
    {
        id: 'card_05_snake',
        name: '第 05 關：彩色貪食蛇',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="head" d="M 180,60 C 240,60 250,130 190,140 L 140,140 C 100,140 110,60 180,60 Z" 
                      fill="${getColor('head')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle cx="205" cy="85" r="7" fill="#1E293B" pointer-events="none" />
                <path data-region="body1" d="M 140,140 C 80,140 60,220 130,220 L 170,220 C 230,220 230,140 140,140 Z" 
                      fill="${getColor('body1')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="body2" d="M 130,220 C 60,220 60,300 130,300 L 180,300 C 230,300 230,220 170,220 Z" 
                      fill="${getColor('body2')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="tail" d="M 180,300 C 240,300 260,370 190,360 C 150,350 130,300 180,300 Z" 
                      fill="${getColor('tail')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="spot1" cx="150" cy="180" r="18" 
                        fill="${getColor('spot1')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="spot2" cx="160" cy="260" r="18" 
                        fill="${getColor('spot2')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'head': '#10B981', 'body1': '#FACC15', 'body2': '#FF6B00', 'tail': '#9333EA', 'spot1': '#F43F5E', 'spot2': '#2563EB' }
    },
    {
        id: 'card_06_icecream',
        name: '第 06 關：雙球冰淇淋',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <circle data-region="cherry" cx="150" cy="50" r="22" 
                        fill="${getColor('cherry')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="scoop-top" d="M 95,125 C 75,75 225,75 205,125 C 235,145 185,175 150,165 C 115,175 65,145 95,125 Z" 
                      fill="${getColor('scoop-top')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="scoop-bottom" d="M 80,165 C 60,135 240,135 220,165 C 240,215 185,235 150,225 C 115,235 60,215 80,165 Z" 
                      fill="${getColor('scoop-bottom')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="cone-top" d="M 85,220 L 215,220 L 180,300 L 120,300 Z" 
                      fill="${getColor('cone-top')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="cone-bottom" d="M 120,300 L 180,300 L 150,380 Z" 
                      fill="${getColor('cone-bottom')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="topping" d="M 115,85 Q 150,105 185,90 L 185,105 Q 150,120 115,100 Z" 
                      fill="${getColor('topping')}" stroke="#1E293B" stroke-width="5" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'cherry': '#F43F5E', 'scoop-top': '#9333EA', 'scoop-bottom': '#10B981', 'cone-top': '#FACC15', 'cone-bottom': '#FF6B00', 'topping': '#2563EB' }
    },
    {
        id: 'card_07_teddy',
        name: '第 07 關：可愛泰迪熊',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <circle data-region="ear-left" cx="80" cy="80" r="30" 
                        fill="${getColor('ear-left')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="ear-right" cx="220" cy="80" r="30" 
                        fill="${getColor('ear-right')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="head" cx="150" cy="130" r="70" 
                        fill="${getColor('head')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle cx="125" cy="120" r="7" fill="#1E293B" pointer-events="none" />
                <circle cx="175" cy="120" r="7" fill="#1E293B" pointer-events="none" />
                <path data-region="body" d="M 90,180 C 70,240 70,320 150,330 C 230,320 230,240 210,180 Z" 
                      fill="${getColor('body')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <ellipse data-region="belly" cx="150" cy="255" rx="40" ry="45" 
                         fill="${getColor('belly')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="bow" d="M 120,185 L 150,195 L 180,185 L 175,210 L 150,200 L 125,210 Z" 
                      fill="${getColor('bow')}" stroke="#1E293B" stroke-width="6" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'ear-left': '#FF6B00', 'ear-right': '#9333EA', 'head': '#FACC15', 'body': '#2563EB', 'belly': '#10B981', 'bow': '#F43F5E' }
    },
    {
        id: 'card_08_fountain',
        name: '第 08 關：湧泉水池',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="spray-top" d="M 150,40 C 130,80 120,130 150,140 C 180,130 170,80 150,40 Z" 
                      fill="${getColor('spray-top')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="spray-left" d="M 140,120 C 80,110 50,180 130,200 Z" 
                      fill="${getColor('spray-left')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="spray-right" d="M 160,120 C 220,110 250,180 170,200 Z" 
                      fill="${getColor('spray-right')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="pillar" d="M 130,200 L 170,200 L 180,280 L 120,280 Z" 
                      fill="${getColor('pillar')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <ellipse data-region="basin" cx="150" cy="310" rx="120" ry="40" 
                         fill="${getColor('basin')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <ellipse data-region="water" cx="150" cy="305" rx="100" ry="25" 
                         fill="${getColor('water')}" stroke="#1E293B" stroke-width="5" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'spray-top': '#2563EB', 'spray-left': '#9333EA', 'spray-right': '#10B981', 'pillar': '#FACC15', 'basin': '#FF6B00', 'water': '#F43F5E' }
    },
    {
        id: 'card_09_train',
        name: '第 09 關：歡樂蒸氣火車',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="chimney" d="M 70,120 L 100,120 L 95,180 L 75,180 Z" 
                      fill="${getColor('chimney')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="engine" x="40" y="180" width="120" height="110" rx="10" 
                      fill="${getColor('engine')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="cab" d="M 160,130 L 260,130 L 260,290 L 160,290 Z" 
                      fill="${getColor('cab')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="roof" d="M 145,130 L 275,130 L 260,100 L 160,100 Z" 
                      fill="${getColor('roof')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="wheel-front" cx="85" cy="320" r="30" 
                        fill="${getColor('wheel-front')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="wheel-back" cx="210" cy="320" r="40" 
                        fill="${getColor('wheel-back')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'chimney': '#FF6B00', 'engine': '#F43F5E', 'cab': '#2563EB', 'roof': '#9333EA', 'wheel-front': '#FACC15', 'wheel-back': '#10B981' }
    },
    {
        id: 'card_10_tent',
        name: '第 10 關：印第安帳篷',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="sticks" d="M 130,30 L 170,30 L 150,90 Z" 
                      fill="${getColor('sticks')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="panel-left" d="M 150,90 L 30,340 L 130,340 Z" 
                      fill="${getColor('panel-left')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="panel-right" d="M 150,90 L 270,340 L 170,340 Z" 
                      fill="${getColor('panel-right')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="door" d="M 150,90 L 130,340 L 170,340 Z" 
                      fill="${getColor('door')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="banner" d="M 70,220 L 230,220 L 210,260 L 90,260 Z" 
                      fill="${getColor('banner')}" stroke="#1E293B" stroke-width="6" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="fire" d="M 130,380 C 130,350 170,350 170,380 Z" 
                      fill="${getColor('fire')}" stroke="#1E293B" stroke-width="6" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'sticks': '#FF6B00', 'panel-left': '#FACC15', 'panel-right': '#10B981', 'door': '#9333EA', 'banner': '#2563EB', 'fire': '#F43F5E' }
    },
    {
        id: 'card_11_helicopter',
        name: '第 11 關：熱帶小直升機',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="rotor" d="M 40,70 L 260,70 L 150,90 Z" 
                      fill="${getColor('rotor')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="shaft" x="140" y="90" width="20" height="40" 
                      fill="${getColor('shaft')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="body" cx="130" cy="220" r="75" 
                        fill="${getColor('body')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="cockpit" d="M 130,150 C 180,150 195,200 180,250 C 130,250 130,150 130,150 Z" 
                      fill="${getColor('cockpit')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="tail" d="M 180,220 L 270,200 L 260,250 Z" 
                      fill="${getColor('tail')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="skid" d="M 60,320 L 200,320 L 180,300 L 80,300 Z" 
                      fill="${getColor('skid')}" stroke="#1E293B" stroke-width="6" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'rotor': '#2563EB', 'shaft': '#9333EA', 'body': '#FACC15', 'cockpit': '#10B981', 'tail': '#F43F5E', 'skid': '#FF6B00' }
    },
    {
        id: 'card_12_carousel',
        name: '第 12 關：魔幻旋轉木馬',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="canopy" d="M 30,100 L 150,30 L 270,100 Z" 
                      fill="${getColor('canopy')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="pole" x="140" y="100" width="20" height="230" 
                      fill="${getColor('pole')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="horse-head" d="M 120,150 C 70,140 60,200 110,210 L 140,210 Z" 
                      fill="${getColor('horse-head')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="horse-body" d="M 100,210 L 200,210 C 220,240 180,270 100,250 Z" 
                      fill="${getColor('horse-body')}" stroke="#1E293B" stroke-width="6" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="saddle" x="135" y="205" width="30" height="30" rx="5" 
                      fill="${getColor('saddle')}" stroke="#1E293B" stroke-width="5" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <ellipse data-region="base" cx="150" cy="340" rx="120" ry="30" 
                         fill="${getColor('base')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'canopy': '#F43F5E', 'pole': '#FACC15', 'horse-head': '#9333EA', 'horse-body': '#2563EB', 'saddle': '#FF6B00', 'base': '#10B981' }
    },
    {
        id: 'card_13_stockings',
        name: '第 13 關：晾衣繩暖心襪',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="rope" d="M 20,60 Q 150,110 280,60 L 280,80 Q 150,130 20,80 Z" 
                      fill="${getColor('rope')}" stroke="#1E293B" stroke-width="5" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="sock1-top" x="60" y="100" width="60" height="80" rx="5" 
                      fill="${getColor('sock1-top')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="sock1-foot" d="M 60,180 L 60,240 C 60,270 120,270 140,230 L 120,180 Z" 
                      fill="${getColor('sock1-foot')}" stroke="#1E293B" stroke-width="6" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="sock2-top" x="180" y="100" width="60" height="80" rx="5" 
                      fill="${getColor('sock2-top')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="sock2-foot" d="M 180,180 L 180,240 C 180,270 240,270 260,230 L 240,180 Z" 
                      fill="${getColor('sock2-foot')}" stroke="#1E293B" stroke-width="6" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="pegs" x="80" y="85" width="20" height="25" rx="3" 
                      fill="${getColor('pegs')}" stroke="#1E293B" stroke-width="5" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'rope': '#FACC15', 'sock1-top': '#F43F5E', 'sock1-foot': '#10B981', 'sock2-top': '#2563EB', 'sock2-foot': '#9333EA', 'pegs': '#FF6B00' }
    },
    {
        id: 'card_14_pot',
        name: '第 14 關：香氣美味大湯鍋',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="steam" d="M 120,40 Q 100,80 150,100 Q 200,80 180,40 Z" 
                      fill="${getColor('steam')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="knob" cx="150" cy="120" r="18" 
                        fill="${getColor('knob')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="lid" d="M 40,180 C 40,130 260,130 260,180 Z" 
                      fill="${getColor('lid')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="pot-body" d="M 50,180 L 250,180 L 230,340 C 230,360 70,360 70,340 Z" 
                      fill="${getColor('pot-body')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="handle-left" d="M 50,210 C 10,210 10,260 50,260 Z" 
                      fill="${getColor('handle-left')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="handle-right" d="M 250,210 C 290,210 290,260 250,260 Z" 
                      fill="${getColor('handle-right')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'steam': '#2563EB', 'knob': '#FACC15', 'lid': '#F43F5E', 'pot-body': '#10B981', 'handle-left': '#9333EA', 'handle-right': '#FF6B00' }
    },
    {
        id: 'card_15_magichat',
        name: '第 15 關：神秘魔術帽子',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <ellipse data-region="rabbit-ear1" cx="120" cy="70" rx="15" ry="40" 
                         fill="${getColor('rabbit-ear1')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <ellipse data-region="rabbit-ear2" cx="170" cy="70" rx="15" ry="40" 
                         fill="${getColor('rabbit-ear2')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="rabbit-face" cx="145" cy="115" r="30" 
                        fill="${getColor('rabbit-face')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="hat-crown" d="M 80,140 L 220,140 L 200,280 L 100,280 Z" 
                      fill="${getColor('hat-crown')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="ribbon" x="95" y="240" width="110" height="40" 
                      fill="${getColor('ribbon')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <ellipse data-region="brim" cx="150" cy="300" rx="130" ry="30" 
                         fill="${getColor('brim')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'rabbit-ear1': '#F43F5E', 'rabbit-ear2': '#10B981', 'rabbit-face': '#FACC15', 'hat-crown': '#9333EA', 'ribbon': '#FF6B00', 'brim': '#2563EB' }
    },
    {
        id: 'card_16_shell',
        name: '第 16 關：珍珠大貝殼',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="shell-top-left" d="M 150,70 Q 70,70 40,190 Q 150,190 150,70 Z" 
                      fill="${getColor('shell-top-left')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="shell-top-right" d="M 150,70 Q 230,70 260,190 Q 150,190 150,70 Z" 
                      fill="${getColor('shell-top-right')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="shell-bottom" d="M 30,190 C 30,320 270,320 270,190 Z" 
                      fill="${getColor('shell-bottom')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="pearl" cx="150" cy="220" r="35" 
                        fill="${getColor('pearl')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="bubble1" cx="80" cy="100" r="18" 
                        fill="${getColor('bubble1')}" stroke="#1E293B" stroke-width="5" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="bubble2" cx="220" cy="90" r="22" 
                        fill="${getColor('bubble2')}" stroke="#1E293B" stroke-width="5" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'shell-top-left': '#9333EA', 'shell-top-right': '#2563EB', 'shell-bottom': '#FACC15', 'pearl': '#F43F5E', 'bubble1': '#FF6B00', 'bubble2': '#10B981' }
    },
    {
        id: 'card_17_scarecrow',
        name: '第 17 關：農場稻草人',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="hat" d="M 90,90 L 210,90 L 180,40 L 120,40 Z" 
                      fill="${getColor('hat')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="head" cx="150" cy="130" r="35" 
                        fill="${getColor('head')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="sleeve-left" d="M 115,165 L 30,165 L 30,220 L 115,220 Z" 
                      fill="${getColor('sleeve-left')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="sleeve-right" d="M 185,165 L 270,165 L 270,220 L 185,220 Z" 
                      fill="${getColor('sleeve-right')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="shirt" x="115" y="165" width="70" height="110" 
                      fill="${getColor('shirt')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="post" x="135" y="275" width="30" height="110" 
                      fill="${getColor('post')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'hat': '#FACC15', 'head': '#FF6B00', 'sleeve-left': '#2563EB', 'sleeve-right': '#9333EA', 'shirt': '#F43F5E', 'post': '#10B981' }
    },
    {
        id: 'card_18_blocks',
        name: '第 18 關：歡樂積木城堡',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="roof" d="M 150,40 L 230,130 L 70,130 Z" 
                      fill="${getColor('roof')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="cube-center" x="105" y="130" width="90" height="90" 
                      fill="${getColor('cube-center')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="pillar-left" x="30" y="180" width="65" height="170" 
                      fill="${getColor('pillar-left')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="pillar-right" x="205" y="180" width="65" height="170" 
                      fill="${getColor('pillar-right')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="arch" d="M 95,220 L 205,220 L 205,350 L 170,350 C 170,300 130,300 130,350 L 95,350 Z" 
                      fill="${getColor('arch')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="sphere" cx="150" cy="25" r="18" 
                        fill="${getColor('sphere')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'roof': '#F43F5E', 'cube-center': '#FACC15', 'pillar-left': '#2563EB', 'pillar-right': '#9333EA', 'arch': '#10B981', 'sphere': '#FF6B00' }
    },
    {
        id: 'card_19_balloons',
        name: '第 19 關：夢幻升空氣球',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <circle data-region="balloon-main" cx="150" cy="110" r="65" 
                        fill="${getColor('balloon-main')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="balloon-left" cx="75" cy="170" r="45" 
                        fill="${getColor('balloon-left')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="balloon-right" cx="225" cy="170" r="45" 
                        fill="${getColor('balloon-right')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="balloon-small" cx="150" cy="220" r="35" 
                        fill="${getColor('balloon-small')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <polygon data-region="knot" points="140,255 160,255 150,270" 
                         fill="${getColor('knot')}" stroke="#1E293B" stroke-width="5" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <rect data-region="basket" x="125" y="320" width="50" height="40" rx="6" 
                      fill="${getColor('basket')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <line x1="135" y1="270" x2="135" y2="320" stroke="#1E293B" stroke-width="4" pointer-events="none" />
                <line x1="165" y1="270" x2="165" y2="320" stroke="#1E293B" stroke-width="4" pointer-events="none" />
            </svg>`;
        },
        solution: { 'balloon-main': '#F43F5E', 'balloon-left': '#FACC15', 'balloon-right': '#2563EB', 'balloon-small': '#10B981', 'knot': '#9333EA', 'basket': '#FF6B00' }
    },
    {
        id: 'card_20_berries',
        name: '第 20 關：熱帶樹景漿果',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFFFF';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <path data-region="leaf-left" d="M 150,180 C 50,150 40,50 150,80 Z" 
                      fill="${getColor('leaf-left')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="leaf-right" d="M 150,180 C 250,150 260,50 150,80 Z" 
                      fill="${getColor('leaf-right')}" stroke="#1E293B" stroke-width="7" stroke-linejoin="round" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="berry1" cx="100" cy="240" r="35" 
                        fill="${getColor('berry1')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="berry2" cx="200" cy="240" r="35" 
                        fill="${getColor('berry2')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <circle data-region="berry3" cx="150" cy="310" r="38" 
                        fill="${getColor('berry3')}" stroke="#1E293B" stroke-width="7" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
                <path data-region="stem" d="M 140,180 L 160,180 L 160,370 L 140,370 Z" 
                      fill="${getColor('stem')}" stroke="#1E293B" stroke-width="6" class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90" />
            </svg>`;
        },
        solution: { 'leaf-left': '#10B981', 'leaf-right': '#2563EB', 'berry1': '#F43F5E', 'berry2': '#9333EA', 'berry3': '#FACC15', 'stem': '#FF6B00' }
    }
];
