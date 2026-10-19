// 著色快手 Speed Colors - 實體 6 分區全套向量圖庫與調色盤定義 (100% 六色一對一不重複解法版)

// 精調高對比經典 6 色體系 (紅、黃、藍、綠、紫、橘 6 色完全獨立)
const COLOR_PALETTE = [
    { id: 'red', name: '鮮紅', hex: '#E5533D', border: '#3A2E2A', key: '1' },
    { id: 'yellow', name: '檸檬黃', hex: '#F2C14E', border: '#3A2E2A', key: '2' },
    { id: 'blue', name: '寶藍', hex: '#4F86C6', border: '#3A2E2A', key: '3' },
    { id: 'green', name: '翡翠綠', hex: '#6CBF84', border: '#3A2E2A', key: '4' },
    { id: 'purple', name: '夢幻紫', hex: '#9B7BD0', border: '#3A2E2A', key: '5' },
    { id: 'orange', name: '濃郁橘', hex: '#F08A3C', border: '#3A2E2A', key: '6' }
];

// 實體桌遊改編之 6 分區向量圖庫 (全關卡解答均 100% 包含紅黃藍綠紫橘 6 色，絕不重複)
const GAME_PATTERNS = [
    {
        id: 'card_01_owl',
        name: '第 01 關：夜行貓頭鷹',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="owlBodyClip"><path d="M70 168 V230 Q70 290 130 290 H170 Q230 290 230 230 V168 Z"/></clipPath></defs>
                <g stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">
                    <ellipse cx="150" cy="342" rx="100" ry="11" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path d="M100 280 V324 M200 280 V324" pointer-events="none"/>
                    <ellipse cx="107" cy="327" rx="12" ry="6" fill="${INK}" stroke="none" pointer-events="none"/>
                    <ellipse cx="207" cy="327" rx="12" ry="6" fill="${INK}" stroke="none" pointer-events="none"/>
                    <path data-region="tail" d="M116 276 L108 336 Q150 350 192 336 L184 276 Z" fill="${getColor('tail')}" ${R}/>
                    <path data-region="body" d="M70 168 V230 Q70 290 130 290 H170 Q230 290 230 230 V168 Z" fill="${getColor('body')}" ${R}/>
                    <rect x="60" y="262" width="180" height="40" fill="${INK}" opacity="0.09" stroke="none" clip-path="url(#owlBodyClip)" pointer-events="none"/>
                    <path d="M126 214 q8 9 16 0 q8 9 16 0 M134 236 q8 9 16 0 q8 9 16 0" stroke-width="5" opacity="0.55" pointer-events="none"/>
                    <path d="M126 304 V338 M150 304 V344 M174 304 V338" stroke-width="5" opacity="0.55" pointer-events="none"/>
                    <path data-region="left-wing" d="M74 180 C48 188 40 235 52 272 Q58 284 78 278 C98 270 102 220 74 180 Z" fill="${getColor('left-wing')}" ${R}/>
                    <path data-region="right-wing" d="M226 180 C252 188 260 235 248 272 Q242 284 222 278 C202 270 198 220 226 180 Z" fill="${getColor('right-wing')}" ${R}/>
                    <path d="M62 236 q6 6 12 0 M60 254 q6 6 12 0 M238 236 q-6 6 -12 0 M240 254 q-6 6 -12 0" stroke-width="5" opacity="0.55" pointer-events="none"/>
                    <path data-region="head" d="M70 168 V108 Q70 80 84 52 L112 72 Q150 62 188 72 L216 52 Q230 80 230 108 V168 Z" fill="${getColor('head')}" ${R}/>
                    <path d="M78 140 Q78 100 94 82" stroke="#FFFBF1" stroke-width="7" opacity="0.8" pointer-events="none"/>
                    <ellipse data-region="face" cx="150" cy="122" rx="58" ry="38" fill="${getColor('face')}" ${R}/>
                    <g stroke="none" pointer-events="none">
                        <ellipse cx="124" cy="116" rx="9.5" ry="11" fill="${INK}"/><circle cx="120.5" cy="111.5" r="3" fill="#FFFBF1" opacity="0.9"/>
                        <ellipse cx="176" cy="116" rx="9.5" ry="11" fill="${INK}"/><circle cx="172.5" cy="111.5" r="3" fill="#FFFBF1" opacity="0.9"/>
                        <ellipse cx="101" cy="136" rx="13" ry="8" fill="#F28C8C" opacity="0.45"/>
                        <ellipse cx="199" cy="136" rx="13" ry="8" fill="#F28C8C" opacity="0.45"/>
                    </g>
                    <path d="M141 124 L159 124 L150 140 Z" fill="#F2C14E" stroke-width="5" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'head': '#E5533D', 'face': '#F2C14E', 'left-wing': '#4F86C6', 'right-wing': '#6CBF84', 'body': '#F08A3C', 'tail': '#9B7BD0' }
    },
    {
        id: 'card_02_rocket',
        name: '第 02 關：噴射火箭',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="rocketBodyClip"><rect x="100" y="120" width="100" height="170" rx="22"/></clipPath></defs>
                <g transform="translate(154.0 210.0) scale(1.000) translate(-154.0 -214.0)" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">
                    <ellipse cx="150" cy="386" rx="62" ry="8" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path data-region="flame" d="M122 298 Q112 338 150 374 Q188 338 178 298 Z" fill="${getColor('flame')}" ${R}/>
                    <path d="M150 326 Q138 346 150 358 Q162 346 150 326 Z" fill="#FFFBF1" opacity="0.7" stroke="none" pointer-events="none"/>
                    <path data-region="left-wing" d="M102 214 L52 292 Q46 314 70 314 L102 298 Z" fill="${getColor('left-wing')}" ${R}/>
                    <path data-region="right-wing" d="M198 214 L248 292 Q254 314 230 314 L198 298 Z" fill="${getColor('right-wing')}" ${R}/>
                    <path data-region="body" d="M100 142 V268 Q100 290 122 290 H178 Q200 290 200 268 V142 Z" fill="${getColor('body')}" ${R}/>
                    <rect x="90" y="254" width="120" height="50" fill="${INK}" opacity="0.09" stroke="none" clip-path="url(#rocketBodyClip)" pointer-events="none"/>
                    <path d="M122 290 L128 304 H172 L178 290 Z" fill="#DCE1E3" stroke-width="5" pointer-events="none"/>
                    <path d="M112 142 V246" stroke="#FFFBF1" stroke-width="9" opacity="0.8" pointer-events="none"/>
                    <path data-region="nose" d="M100 142 C100 96 124 62 150 38 C176 62 200 96 200 142 Z" fill="${getColor('nose')}" ${R}/>
                    <path d="M117 130 C118 105 128 84 140 68" stroke="#FFFBF1" stroke-width="7" opacity="0.8" pointer-events="none"/>
                    <circle data-region="window" cx="152" cy="204" r="30" fill="${getColor('window')}" ${R}/>
                    <path d="M136 198 Q138 188 148 185" stroke="#FFFBF1" stroke-width="5" opacity="0.8" pointer-events="none"/>
                    <circle cx="116" cy="268" r="3.5" fill="${INK}" stroke="none" pointer-events="none"/>
                    <circle cx="184" cy="268" r="3.5" fill="${INK}" stroke="none" pointer-events="none"/>
                    <path d="M52 100 h12 M58 94 v12 M246 150 h12 M252 144 v12 M236 60 h10 M241 55 v10" stroke-width="5" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'flame': '#F08A3C', 'left-wing': '#E5533D', 'right-wing': '#9B7BD0', 'nose': '#6CBF84', 'body': '#4F86C6', 'window': '#F2C14E' }
    },
    {
        id: 'card_03_kite',
        name: '第 03 關：飛翔風箏',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="kiteClip"><path d="M150 20 L252 120 L150 250 L48 120 Z"/></clipPath></defs>
                <g stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <path d="M40 60 h12 M46 54 v12 M250 226 h12 M256 220 v12 M250 36 h10 M255 31 v10" stroke-width="5" pointer-events="none"/>
                    <path d="M150 250 Q108 268 124 300 Q150 328 184 360" stroke-width="5" pointer-events="none"/>
                    <path data-region="ribbon1" d="M76 274 L124 300 L172 274 V326 L124 300 L76 326 Z" fill="${getColor('ribbon1')}" ${R}/>
                    <path data-region="ribbon2" d="M136 334 L184 360 L232 334 V386 L184 360 L136 386 Z" fill="${getColor('ribbon2')}" ${R}/>
                    <path data-region="top-left" d="M150 20 L48 120 H150 Z" fill="${getColor('top-left')}" ${R}/>
                    <path data-region="top-right" d="M150 20 L252 120 H150 Z" fill="${getColor('top-right')}" ${R}/>
                    <path data-region="bottom-left" d="M48 120 H150 V250 Z" fill="${getColor('bottom-left')}" ${R}/>
                    <path data-region="bottom-right" d="M252 120 H150 V250 Z" fill="${getColor('bottom-right')}" ${R}/>
                    <rect x="40" y="196" width="220" height="60" fill="${INK}" opacity="0.09" stroke="none" clip-path="url(#kiteClip)" pointer-events="none"/>
                    <path d="M64 108 L106 62" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M118 150 V200" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <circle cx="150" cy="120" r="5" fill="${INK}" stroke="none" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'top-left': '#E5533D', 'top-right': '#F2C14E', 'bottom-left': '#4F86C6', 'bottom-right': '#6CBF84', 'ribbon1': '#9B7BD0', 'ribbon2': '#F08A3C' }
    },
    {
        id: 'card_04_castle',
        name: '第 04 關：童話城堡',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="castleWallsClip"><path d="M24 352 V154 H90 V176 H106 V132 H194 V176 H210 V154 H276 V352 Z"/></clipPath></defs>
                <g transform="translate(150.0 197.0) scale(1.000) translate(-150.0 -189.0)" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="150" cy="366" rx="130" ry="10" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path data-region="walls" d="M24 352 V154 H90 V176 H106 V132 H194 V176 H210 V154 H276 V352 Z" fill="${getColor('walls')}" ${R}/>
                    <rect x="20" y="310" width="260" height="46" fill="${INK}" opacity="0.09" stroke="none" clip-path="url(#castleWallsClip)" pointer-events="none"/>
                    <path d="M34 180 V240 M114 150 V214" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M49 236 V218 Q49 204 57 204 Q65 204 65 218 V236 Z M235 236 V218 Q235 204 243 204 Q251 204 251 218 V236 Z M139 214 V194 Q139 178 150 178 Q161 178 161 194 V214 Z" fill="${INK}" stroke="none" pointer-events="none"/>
                    <path data-region="gate" d="M112 352 V280 Q112 244 150 244 Q188 244 188 280 V352 Z" fill="${getColor('gate')}" ${R}/>
                    <path d="M130 266 V352 M170 266 V352 M116 298 H184 M114 326 H186" stroke-width="5" opacity="0.5" pointer-events="none"/>
                    <path d="M124 290 Q124 264 142 256" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M150 70 V6" pointer-events="none"/>
                    <path data-region="roof-left" d="M16 154 H98 L57 82 Z" fill="${getColor('roof-left')}" ${R}/>
                    <path data-region="roof-right" d="M202 154 H284 L243 82 Z" fill="${getColor('roof-right')}" ${R}/>
                    <path data-region="roof-main" d="M100 132 H200 L150 70 Z" fill="${getColor('roof-main')}" ${R}/>
                    <path d="M38 146 L56 112 M110 126 L136 94" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="flag" d="M152 6 H212 L200 30 L212 54 H152 Z" fill="${getColor('flag')}" ${R}/>
                    <path d="M162 18 H190" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'roof-left': '#9B7BD0', 'roof-right': '#6CBF84', 'roof-main': '#E5533D', 'walls': '#F2C14E', 'gate': '#F08A3C', 'flag': '#4F86C6' }
    },
    {
        id: 'card_05_snake',
        name: '第 05 關：彩色貪食蛇',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="snakeTailClip"><path d="M58 244 Q58 340 150 344 Q220 346 262 326 Q244 312 244 244 Z"/></clipPath></defs>
                <g stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="152" cy="356" rx="112" ry="11" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path data-region="tail" d="M58 244 Q58 340 150 344 Q220 346 262 326 Q244 312 244 244 Z" fill="${getColor('tail')}" ${R}/>
                    <rect x="40" y="316" width="240" height="40" fill="${INK}" opacity="0.09" stroke="none" clip-path="url(#snakeTailClip)" pointer-events="none"/>
                    <rect data-region="body2" x="50" y="192" width="200" height="76" rx="38" fill="${getColor('body2')}" ${R}/>
                    <rect data-region="body1" x="50" y="124" width="200" height="76" rx="38" fill="${getColor('body1')}" ${R}/>
                    <path d="M64 160 Q64 142 80 136 M64 236 Q64 220 80 214 M70 290 Q74 306 88 312" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <circle data-region="spot1" cx="100" cy="162" r="30" fill="${getColor('spot1')}" ${R}/>
                    <circle data-region="spot2" cx="204" cy="230" r="30" fill="${getColor('spot2')}" ${R}/>
                    <path d="M150 106 V122 L142 132 M150 122 L158 132" stroke="${INK}" stroke-width="11" pointer-events="none"/>
                    <path d="M150 106 V122 L142 132 M150 122 L158 132" stroke="#E5533D" stroke-width="5" pointer-events="none"/>
                    <rect data-region="head" x="88" y="28" width="124" height="104" rx="36" fill="${getColor('head')}" ${R}/>
                    <path d="M100 66 Q100 44 120 38" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <g stroke="none" pointer-events="none">
                        <ellipse cx="122" cy="72" rx="8.5" ry="9.5" fill="${INK}"/><circle cx="119" cy="68.5" r="2.8" fill="#FFFBF1" opacity="0.9"/>
                        <ellipse cx="178" cy="72" rx="8.5" ry="9.5" fill="${INK}"/><circle cx="175" cy="68.5" r="2.8" fill="#FFFBF1" opacity="0.9"/>
                        <ellipse cx="104" cy="96" rx="13" ry="8" fill="#F28C8C" opacity="0.45"/>
                        <ellipse cx="196" cy="96" rx="13" ry="8" fill="#F28C8C" opacity="0.45"/>
                    </g>
                    <path d="M138 98 Q150 109 162 98" stroke-width="5" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'head': '#6CBF84', 'body1': '#F2C14E', 'body2': '#F08A3C', 'tail': '#9B7BD0', 'spot1': '#E5533D', 'spot2': '#4F86C6' }
    },
    {
        id: 'card_06_icecream',
        name: '第 06 關：雙球冰淇淋',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="iceConeClip"><path d="M82 204 H218 L150 372 Z"/></clipPath></defs>
                <g transform="translate(150.0 200.0) scale(0.982) translate(-150.0 -198.5)" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="150" cy="384" rx="40" ry="8" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path data-region="cone-top" d="M82 204 H218 L182.4 292 H117.6 Z" fill="${getColor('cone-top')}" ${R}/>
                    <path data-region="cone-bottom" d="M117.6 292 H182.4 L150 372 Z" fill="${getColor('cone-bottom')}" ${R}/>
                    <path d="M30 200 L210 416 M70 200 L250 416 M110 200 L290 416 M150 200 L330 416 M190 200 L370 416 M110 200 L-70 416 M150 200 L-30 416 M190 200 L10 416 M230 200 L50 416 M270 200 L90 416" stroke-width="5" opacity="0.45" clip-path="url(#iceConeClip)" pointer-events="none"/>
                    <rect x="70" y="326" width="160" height="50" fill="${INK}" opacity="0.09" stroke="none" clip-path="url(#iceConeClip)" pointer-events="none"/>
                    <path d="M98 220 L124 284" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="scoop-bottom" d="M54 212 Q54 134 100 134 H200 Q246 134 246 212 A19.2 19.2 0 0 1 207.6 212 A19.2 19.2 0 0 1 169.2 212 A19.2 19.2 0 0 1 130.8 212 A19.2 19.2 0 0 1 92.4 212 A19.2 19.2 0 0 1 54 212 Z" fill="${getColor('scoop-bottom')}" ${R}/>
                    <path d="M66 202 Q64 170 84 158" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="scoop-top" d="M70 148 Q70 62 150 62 Q230 62 230 148 A20 20 0 0 1 190 148 A20 20 0 0 1 150 148 A20 20 0 0 1 110 148 A20 20 0 0 1 70 148 Z" fill="${getColor('scoop-top')}" ${R}/>
                    <path d="M82 146 Q82 106 108 86" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none" transform="translate(0 6)"/>
                    <path data-region="topping" d="M76.5 106 Q92.8 62 150 62 Q207.2 62 223.5 106 Q224 118 214 118 Q204 118 202 108 Q200 100 190 100 Q180 100 178 112 Q176 130 162 130 Q148 130 146 112 Q144 100 134 100 Q124 100 122 110 Q120 124 108 124 Q94 124 92 112 Q90 106 84 106 Q78 110 76.5 106 Z" fill="${getColor('topping')}" ${R}/>
                    <path d="M100 82 Q112 70 128 66" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M152 24 Q158 10 176 8" stroke-width="5" pointer-events="none"/>
                    <circle data-region="cherry" cx="150" cy="46" r="26" fill="${getColor('cherry')}" ${R}/>
                    <path d="M136 42 Q138 32 148 30" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'cherry': '#E5533D', 'scoop-top': '#9B7BD0', 'scoop-bottom': '#6CBF84', 'cone-top': '#F2C14E', 'cone-bottom': '#F08A3C', 'topping': '#4F86C6' }
    },
    {
        id: 'card_07_teddy',
        name: '第 07 關：可愛泰迪熊',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="teddyBodyClip"><rect x="76" y="160" width="148" height="172" rx="60"/></clipPath></defs>
                <g stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="150" cy="362" rx="96" ry="10" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path d="M120 330 V352 M180 330 V352" pointer-events="none"/>
                    <ellipse cx="127" cy="356" rx="13" ry="6" fill="${INK}" stroke="none" pointer-events="none"/>
                    <ellipse cx="187" cy="356" rx="13" ry="6" fill="${INK}" stroke="none" pointer-events="none"/>
                    <circle data-region="ear-left" cx="78" cy="58" r="40" fill="${getColor('ear-left')}" ${R}/>
                    <circle data-region="ear-right" cx="222" cy="58" r="40" fill="${getColor('ear-right')}" ${R}/>
                    <circle cx="76" cy="56" r="17" fill="#F28C8C" opacity="0.5" stroke="none" pointer-events="none"/>
                    <circle cx="224" cy="56" r="17" fill="#F28C8C" opacity="0.5" stroke="none" pointer-events="none"/>
                    <path d="M76 216 Q50 232 54 262 M224 216 Q250 232 246 262" pointer-events="none"/>
                    <circle cx="54" cy="266" r="11" fill="#FFFBF1" pointer-events="none"/>
                    <circle cx="246" cy="266" r="11" fill="#FFFBF1" pointer-events="none"/>
                    <rect data-region="body" x="76" y="160" width="148" height="172" rx="60" fill="${getColor('body')}" ${R}/>
                    <rect x="60" y="296" width="180" height="40" fill="${INK}" opacity="0.09" stroke="none" clip-path="url(#teddyBodyClip)" pointer-events="none"/>
                    <path d="M88 232 Q88 204 108 192" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <ellipse data-region="belly" cx="150" cy="264" rx="40" ry="46" fill="${getColor('belly')}" ${R}/>
                    <path d="M122 258 Q122 236 138 228" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <rect data-region="head" x="64" y="50" width="172" height="124" rx="46" fill="${getColor('head')}" ${R}/>
                    <path d="M76 100 Q76 70 104 62" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <ellipse cx="150" cy="130" rx="30" ry="21" fill="#FFFBF1" opacity="0.8" stroke="none" pointer-events="none"/>
                    <g stroke="none" pointer-events="none">
                        <ellipse cx="114" cy="94" rx="8.5" ry="9.5" fill="${INK}"/><circle cx="111" cy="90.5" r="2.8" fill="#FFFBF1" opacity="0.9"/>
                        <ellipse cx="186" cy="94" rx="8.5" ry="9.5" fill="${INK}"/><circle cx="183" cy="90.5" r="2.8" fill="#FFFBF1" opacity="0.9"/>
                        <ellipse cx="92" cy="120" rx="13" ry="8" fill="#F28C8C" opacity="0.45"/>
                        <ellipse cx="208" cy="120" rx="13" ry="8" fill="#F28C8C" opacity="0.45"/>
                        <ellipse cx="150" cy="121" rx="10" ry="7" fill="${INK}"/>
                    </g>
                    <path d="M150 128 V134 Q142 144 134 138 M150 134 Q158 144 166 138" stroke-width="5" pointer-events="none"/>
                    <path data-region="bow" d="M150 182 L96 154 V210 Z M150 182 L204 154 V210 Z" fill="${getColor('bow')}" ${R}/>
                    <circle cx="150" cy="182" r="10" fill="#FFFBF1" stroke-width="5" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'ear-left': '#F08A3C', 'ear-right': '#9B7BD0', 'head': '#F2C14E', 'body': '#4F86C6', 'belly': '#6CBF84', 'bow': '#E5533D' }
    },
    {
        id: 'card_08_fountain',
        name: '第 08 關：湧泉水池',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs></defs>
                <g stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="150" cy="384" rx="116" ry="8" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path data-region="basin" d="M30 300 A120 40 0 0 1 270 300 V334 Q270 378 150 378 Q30 378 30 334 Z" fill="${getColor('basin')}" ${R}/>
                    <path d="M30 300 A120 40 0 0 0 270 300" pointer-events="none"/>
                    <path d="M44 344 Q50 366 80 372" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M40 330 Q60 340 90 344" stroke-width="0" pointer-events="none"/>
                    <ellipse data-region="water" cx="150" cy="298" rx="100" ry="28" fill="${getColor('water')}" ${R}/>
                    <path d="M62 300 Q64 288 82 284" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M192 312 q10 -7 22 0 M84 314 q10 -7 22 0" stroke-width="5" opacity="0.45" pointer-events="none"/>
                    <path data-region="spray-left" d="M140 170 C108 112 52 130 50 190 C50 214 64 226 78 214 C94 196 118 196 140 170 Z" fill="${getColor('spray-left')}" ${R}/>
                    <path data-region="spray-right" d="M160 170 C192 112 248 130 250 190 C250 214 236 226 222 214 C206 196 182 196 160 170 Z" fill="${getColor('spray-right')}" ${R}/>
                    <path data-region="spray-top" d="M150 22 C120 62 108 118 128 152 Q150 176 172 152 C192 118 180 62 150 22 Z" fill="${getColor('spray-top')}" ${R}/>
                    <path d="M62 190 Q62 156 86 144 M130 126 Q132 90 144 64" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="pillar" d="M124 172 H176 Q172 238 190 298 Q150 316 110 298 Q128 238 124 172 Z" fill="${getColor('pillar')}" ${R}/>
                    <path d="M137 190 Q139 240 132 280" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M36 228 a5 5 0 1 0 0.1 0 M264 228 a5 5 0 1 0 0.1 0 M92 96 a5 5 0 1 0 0.1 0 M208 96 a5 5 0 1 0 0.1 0" fill="#FFFBF1" stroke-width="5" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'spray-top': '#4F86C6', 'spray-left': '#9B7BD0', 'spray-right': '#6CBF84', 'pillar': '#F2C14E', 'basin': '#F08A3C', 'water': '#E5533D' }
    },
    {
        id: 'card_09_train',
        name: '第 09 關：歡樂蒸氣火車',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="trainEngineClip"><rect x="28" y="160" width="150" height="112" rx="22"/></clipPath><clipPath id="trainCabClip"><rect x="160" y="108" width="112" height="164" rx="12"/></clipPath></defs>
                <g stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="150" cy="346" rx="136" ry="8" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path d="M14 326 H288 M40 326 V336 M96 326 V336 M152 326 V336 M208 326 V336 M264 326 V336" stroke-width="5" pointer-events="none"/>
                    <g pointer-events="none"><circle cx="70" cy="48" r="14" fill="#FFFBF1"/><circle cx="92" cy="34" r="18" fill="#FFFBF1"/><circle cx="118" cy="30" r="12" fill="#FFFBF1"/></g>
                    <path data-region="chimney" d="M58 168 V112 H46 V82 H122 V112 H110 V168 Z" fill="${getColor('chimney')}" ${R}/>
                    <path d="M60 126 V162" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <rect data-region="engine" x="28" y="160" width="150" height="112" rx="22" fill="${getColor('engine')}" ${R}/>
                    <rect x="20" y="236" width="170" height="40" fill="${INK}" opacity="0.09" stroke="none" clip-path="url(#trainEngineClip)" pointer-events="none"/>
                    <path d="M42 196 Q42 176 58 172 M100 168 V208 M128 168 V208" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <circle cx="46" cy="228" r="12" fill="#FFFBF1" stroke-width="5" pointer-events="none"/>
                    <rect data-region="cab" x="160" y="108" width="112" height="164" rx="12" fill="${getColor('cab')}" ${R}/>
                    <rect x="150" y="238" width="132" height="40" fill="${INK}" opacity="0.09" stroke="none" clip-path="url(#trainCabClip)" pointer-events="none"/>
                    <rect x="188" y="140" width="56" height="58" rx="10" fill="#FFFBF1" stroke-width="5" pointer-events="none"/>
                    <path d="M196 170 Q196 152 208 148" stroke-width="5" stroke="#DCE1E3" pointer-events="none"/>
                    <path data-region="roof" d="M150 112 Q146 62 176 60 H258 Q286 62 282 112 Z" fill="${getColor('roof')}" ${R}/>
                    <path d="M164 98 Q166 78 182 72" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <circle data-region="wheel-front" cx="86" cy="290" r="34" fill="${getColor('wheel-front')}" ${R}/>
                    <circle data-region="wheel-back" cx="216" cy="286" r="38" fill="${getColor('wheel-back')}" ${R}/>
                    <g pointer-events="none"><circle cx="86" cy="290" r="9" fill="${INK}" stroke="none"/><circle cx="216" cy="286" r="10" fill="${INK}" stroke="none"/>
                    <path d="M86 268 V312 M64 290 H108 M216 262 V310 M192 286 H240" stroke-width="5" opacity="0.5"/></g>
                </g>
            </svg>`;
        },
        solution: { 'chimney': '#F08A3C', 'engine': '#E5533D', 'cab': '#4F86C6', 'roof': '#9B7BD0', 'wheel-front': '#F2C14E', 'wheel-back': '#6CBF84' }
    },
    {
        id: 'card_10_tent',
        name: '第 10 關：露營帳篷',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs></defs>
                <g transform="translate(150.0 196.5) scale(0.989) translate(-147.5 -196.5)" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="130" cy="352" rx="124" ry="9" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path d="M274 36 V282" pointer-events="none"/>
                    <path d="M112 84 L98 62 M112 84 L128 62" pointer-events="none"/>
                    <path data-region="panel-left" d="M69.4 190 H112 L76 338 H10 Z" fill="${getColor('panel-left')}" ${R}/>
                    <path data-region="panel-right" d="M154.6 190 H112 L148 338 H214 Z" fill="${getColor('panel-right')}" ${R}/>
                    <path data-region="door" d="M112 190 L76 338 H148 Z" fill="${getColor('door')}" ${R}/>
                    <path data-region="sticks" d="M112 84 L69.4 190 H154.6 Z" fill="${getColor('sticks')}" ${R}/>
                    <path d="M94 170 L108 116" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M26 318 L56 230" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M112 190 V338" stroke-width="5" opacity="0.35" pointer-events="none"/>
                    <path d="M10 338 H214" stroke-width="7" pointer-events="none"/>
                    <path d="M54 246 L22 262 M170 246 L202 262" stroke-width="5" pointer-events="none"/>
                    <path data-region="banner" d="M274 40 H214 L228 70 L214 100 H274 Z" fill="${getColor('banner')}" ${R}/>
                    <path d="M226 52 H256" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M214 348 L282 328 M216 328 L284 348" stroke-width="9" pointer-events="none"/>
                    <path data-region="fire" d="M 248.0 334.0 C 205.5 334.0 208.0 289.0 235.5 261.5 C 238.0 281.5 248.0 286.5 255.5 274.0 C 263.0 256.5 260.5 246.5 255.5 236.5 C 290.5 264.0 298.0 334.0 248.0 334.0 Z" fill="${getColor('fire')}" ${R}/>
                    <path d="M 248.0 321.5 C 233.0 321.5 233.0 301.5 243.0 291.5 C 248.0 301.5 258.0 299.0 258.0 311.5 C 258.0 316.5 255.5 321.5 248.0 321.5 Z" fill="#FFFBF1" opacity="0.7" stroke="none" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'sticks': '#F08A3C', 'panel-left': '#F2C14E', 'panel-right': '#6CBF84', 'door': '#9B7BD0', 'banner': '#4F86C6', 'fire': '#E5533D' }
    },
    {
        id: 'card_11_helicopter',
        name: '第 11 關：熱帶小直升機',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs></defs>
                <g transform="translate(150.0 194.5) scale(0.959) translate(-154.0 -194.5)" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="150" cy="354" rx="118" ry="9" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path d="M96 256 V292 M188 256 V292" stroke-width="9" pointer-events="none"/>
                    <path data-region="tail" d="M206 158 H262 L274 108 Q288 108 288 122 L284 186 Q282 202 266 202 H206 Z" fill="${getColor('tail')}" ${R}/>
                    <path d="M274 124 L270 150" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <ellipse cx="288" cy="176" rx="9" ry="24" fill="#DCE1E3" stroke-width="5" pointer-events="none"/>
                    <rect data-region="body" x="48" y="128" width="170" height="130" rx="48" fill="${getColor('body')}" ${R}/>
                    <path d="M150 140 V250" stroke-width="5" opacity="0.4" pointer-events="none"/>
                    <path d="M60 232 Q80 252 104 252 M176 142 Q198 148 206 168" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="cockpit" d="M56 176 Q56 148 90 148 H134 V222 H70 Q56 222 56 206 Z" fill="${getColor('cockpit')}" ${R}/>
                    <path d="M68 190 Q68 166 90 160" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <rect data-region="skid" x="34" y="280" width="224" height="50" rx="25" fill="${getColor('skid')}" ${R}/>
                    <path d="M54 304 Q54 292 66 292" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="shaft" d="M122 74 H178 L192 134 H108 Z" fill="${getColor('shaft')}" ${R}/>
                    <path d="M130 90 L122 124" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="rotor" d="M12 54 Q12 28 38 30 L262 36 Q288 38 288 58 Q288 84 262 82 L38 78 Q12 80 12 54 Z" fill="${getColor('rotor')}" ${R}/>
                    <path d="M28 54 Q30 44 44 44" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <circle cx="150" cy="56" r="9" fill="${INK}" stroke="none" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'rotor': '#4F86C6', 'shaft': '#9B7BD0', 'body': '#F2C14E', 'cockpit': '#6CBF84', 'tail': '#E5533D', 'skid': '#F08A3C' }
    },
    {
        id: 'card_12_carousel',
        name: '第 12 關：魔幻旋轉木馬',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="carPostClip"><rect x="22" y="112" width="52" height="214"/><rect x="226" y="112" width="52" height="214"/></clipPath></defs>
                <g transform="translate(150.0 200.0) scale(0.982) translate(-150.0 -194.5)" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <path data-region="base" d="M18 332 A132 36 0 0 1 282 332 V348 A132 36 0 0 1 18 348 Z" fill="${getColor('base')}" ${R}/>
                    <path d="M18 332 A132 36 0 0 0 282 332" pointer-events="none"/>
                    <path d="M40 360 Q150 396 260 360" stroke-width="5" opacity="0.4" pointer-events="none"/>
                    <path data-region="pole" d="M22 112 H74 V326 H22 Z M226 112 H278 V326 H226 Z" fill="${getColor('pole')}" ${R}/>
                    <path d="M0 150 L100 110 M0 200 L100 160 M0 250 L100 210 M0 300 L100 260 M200 150 L300 110 M200 200 L300 160 M200 250 L300 210 M200 300 L300 260" stroke-width="5" opacity="0.4" clip-path="url(#carPostClip)" pointer-events="none"/>
                    <path d="M34 150 V300 M238 150 V300" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <g transform="translate(0 20)">
                    <path d="M114 284 V322 M188 284 V322 M206 236 Q238 238 232 282" pointer-events="none"/>
                    <ellipse cx="120" cy="326" rx="13" ry="6" fill="${INK}" stroke="none" pointer-events="none"/>
                    <ellipse cx="194" cy="326" rx="13" ry="6" fill="${INK}" stroke="none" pointer-events="none"/>
                    <path d="M150 140 q22 8 14 30 q18 10 6 34" pointer-events="none"/>
                    <rect data-region="horse-body" x="94" y="196" width="112" height="90" rx="38" fill="${getColor('horse-body')}" ${R}/>
                    <path d="M106 262 Q106 240 122 232" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <rect data-region="saddle" x="140" y="184" width="64" height="56" rx="18" fill="${getColor('saddle')}" ${R}/>
                    <path d="M152 214 Q152 200 164 196" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M98 142 L96 120 L112 134 M142 134 L158 120 L156 146" fill="#FFFBF1" pointer-events="none"/>
                    <rect data-region="horse-head" x="88" y="128" width="84" height="84" rx="30" fill="${getColor('horse-head')}" ${R}/>
                    <path d="M98 164 Q98 142 114 136" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <ellipse cx="130" cy="192" rx="26" ry="15" fill="#FFFBF1" opacity="0.8" stroke="none" pointer-events="none"/>
                    <g stroke="none" pointer-events="none">
                        <ellipse cx="112" cy="160" rx="8.5" ry="9.5" fill="${INK}"/><circle cx="109" cy="156.5" r="2.8" fill="#FFFBF1" opacity="0.9"/>
                        <ellipse cx="148" cy="160" rx="8.5" ry="9.5" fill="${INK}"/><circle cx="145" cy="156.5" r="2.8" fill="#FFFBF1" opacity="0.9"/>
                        <ellipse cx="98" cy="182" rx="13" ry="8" fill="#F28C8C" opacity="0.45"/>
                        <ellipse cx="162" cy="182" rx="13" ry="8" fill="#F28C8C" opacity="0.45"/>
                    </g>
                    <ellipse cx="121" cy="190" rx="3.5" ry="4.5" fill="${INK}" stroke="none" pointer-events="none"/><ellipse cx="139" cy="190" rx="3.5" ry="4.5" fill="${INK}" stroke="none" pointer-events="none"/>
                    <path d="M122 200 Q130 206 138 200" stroke-width="5" pointer-events="none"/>
                    </g>
                    <path d="M150 14 V22" pointer-events="none"/>
                    <path data-region="canopy" d="M12 118 Q24 58 150 20 Q276 58 288 118 A23 23 0 0 1 242 118 A23 23 0 0 1 196 118 A23 23 0 0 1 150 118 A23 23 0 0 1 104 118 A23 23 0 0 1 58 118 A23 23 0 0 1 12 118 Z" fill="${getColor('canopy')}" ${R}/>
                    <path d="M46 98 Q60 66 100 44" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M150 22 V118 M80 40 L58 118 M220 40 L242 118" stroke-width="5" opacity="0.4" pointer-events="none"/>
                    <circle cx="150" cy="14" r="9" fill="#FFFBF1" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'canopy': '#E5533D', 'pole': '#F2C14E', 'horse-head': '#9B7BD0', 'horse-body': '#4F86C6', 'saddle': '#F08A3C', 'base': '#6CBF84' }
    },
    {
        id: 'card_13_stockings',
        name: '第 13 關：晾衣繩暖心襪',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="sockRopeClip"><path d="M12 52 Q150 100 288 52 V104 Q150 152 12 104 Z"/></clipPath></defs>
                <g stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <path d="M12 40 V118 M288 40 V118" stroke-width="7" pointer-events="none"/>
                    <path data-region="rope" d="M12 52 Q150 100 288 52 V104 Q150 152 12 104 Z" fill="${getColor('rope')}" ${R}/>
                    <path d="M10 40 L60 150 M50 40 L100 150 M90 40 L140 150 M130 40 L180 150 M170 40 L220 150 M210 40 L260 150 M250 40 L300 150" stroke-width="5" opacity="0.4" clip-path="url(#sockRopeClip)" pointer-events="none"/>
                    <path d="M24 92 Q70 112 110 118" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="sock1-foot" d="M60 240 H124 V288 Q124 298 134 300 Q160 306 160 330 Q160 356 134 356 H86 Q60 356 60 330 Z" fill="${getColor('sock1-foot')}" ${R}/>
                    <path data-region="sock2-foot" d="M188 240 H252 V288 Q252 298 262 300 Q288 306 288 330 Q288 356 262 356 H214 Q188 356 188 330 Z" fill="${getColor('sock2-foot')}" ${R}/>
                    <path d="M72 300 V336 M200 300 V336" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M92 332 Q108 340 124 332 M220 332 Q236 340 252 332" stroke-width="5" opacity="0.45" pointer-events="none"/>
                    <rect data-region="sock1-top" x="58" y="150" width="68" height="94" rx="12" fill="${getColor('sock1-top')}" ${R}/>
                    <rect data-region="sock2-top" x="186" y="150" width="68" height="94" rx="12" fill="${getColor('sock2-top')}" ${R}/>
                    <path d="M58 206 H126 M58 226 H126 M186 206 H254 M186 226 H254" stroke-width="5" opacity="0.45" pointer-events="none"/>
                    <path d="M68 190 V196 M196 190 V196" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="pegs" d="M65 112 h54 a8 8 0 0 1 8 8 v50 a8 8 0 0 1 -8 8 h-54 a8 8 0 0 1 -8 -8 v-50 a8 8 0 0 1 8 -8 Z M193 112 h54 a8 8 0 0 1 8 8 v50 a8 8 0 0 1 -8 8 h-54 a8 8 0 0 1 -8 -8 v-50 a8 8 0 0 1 8 -8 Z" fill="${getColor('pegs')}" ${R}/>
                    <path d="M92 118 V176 M220 118 V176" stroke-width="5" opacity="0.5" pointer-events="none"/>
                    <path d="M70 128 V150 M198 128 V150" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'rope': '#F2C14E', 'sock1-top': '#E5533D', 'sock1-foot': '#6CBF84', 'sock2-top': '#4F86C6', 'sock2-foot': '#9B7BD0', 'pegs': '#F08A3C' }
    },
    {
        id: 'card_14_pot',
        name: '第 14 關：香氣美味大湯鍋',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="potBodyClip"><path d="M72 188 H228 V300 Q228 350 184 350 H116 Q72 350 72 300 Z"/></clipPath></defs>
                <g transform="translate(150.0 189.5) scale(0.972) translate(-150.0 -189.5)" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="150" cy="364" rx="100" ry="10" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path data-region="handle-left" d="M76 222 H42 Q10 222 10 254 Q10 286 42 286 H76 Z" fill="${getColor('handle-left')}" ${R}/>
                    <path data-region="handle-right" d="M224 222 H258 Q290 222 290 254 Q290 286 258 286 H224 Z" fill="${getColor('handle-right')}" ${R}/>
                    <path data-region="pot-body" d="M72 188 H228 V300 Q228 350 184 350 H116 Q72 350 72 300 Z" fill="${getColor('pot-body')}" ${R}/>
                    <rect x="60" y="312" width="180" height="44" fill="${INK}" opacity="0.09" stroke="none" clip-path="url(#potBodyClip)" pointer-events="none"/>
                    <path d="M84 232 V300" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M120 238 q8 9 16 0 q8 9 16 0 q8 9 16 0" stroke-width="5" opacity="0.5" pointer-events="none"/>
                    <circle cx="150" cy="286" r="10" fill="#FFFBF1" stroke-width="5" pointer-events="none"/>
                    <path d="M120 166 Q112 150 126 142 M150 166 Q142 150 156 142" stroke="none" pointer-events="none"/>
                    <path data-region="lid" d="M46 194 Q46 120 150 120 Q254 120 254 194 Z" fill="${getColor('lid')}" ${R}/>
                    <path d="M62 178 Q64 144 98 132" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <circle data-region="knob" cx="150" cy="104" r="28" fill="${getColor('knob')}" ${R}/>
                    <path d="M134 98 Q136 88 146 84" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="steam" d="M100 74 Q82 62 94 46 Q86 24 112 24 Q122 6 150 10 Q178 6 188 24 Q214 24 206 46 Q218 62 200 74 Q150 84 100 74 Z" fill="${getColor('steam')}" ${R}/>
                    <path d="M108 54 Q106 38 122 32" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M126 90 q-8 -4 0 -10 M174 90 q8 -4 0 -10" stroke-width="5" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'steam': '#4F86C6', 'knob': '#F2C14E', 'lid': '#E5533D', 'pot-body': '#6CBF84', 'handle-left': '#9B7BD0', 'handle-right': '#F08A3C' }
    },
    {
        id: 'card_15_magichat',
        name: '第 15 關：神秘魔術帽子',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="hatCrownClip"><path d="M82 190 H218 L234 306 Q150 330 66 306 Z"/></clipPath></defs>
                <g stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="150" cy="378" rx="130" ry="8" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path d="M30 120 h14 M37 113 v14 M258 70 h12 M264 64 v12 M252 190 h12 M258 184 v12 M40 220 h10 M45 215 v10" stroke-width="5" pointer-events="none"/>
                    <ellipse data-region="brim" cx="150" cy="322" rx="138" ry="40" fill="${getColor('brim')}" ${R}/>
                    <path d="M24 306 Q30 292 50 286" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="hat-crown" d="M82 190 H218 L234 306 Q150 330 66 306 Z" fill="${getColor('hat-crown')}" ${R}/>
                    <rect x="60" y="284" width="180" height="50" fill="${INK}" opacity="0.09" stroke="none" clip-path="url(#hatCrownClip)" pointer-events="none"/>
                    <path d="M92 214 L84 250" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="ribbon" d="M73 254 H227 L234 306 Q150 330 66 306 Z" fill="${getColor('ribbon')}" ${R}/>
                    <path d="M92 270 V300" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M130 150 V150" pointer-events="none"/>
                    <rect data-region="rabbit-ear1" x="86" y="12" width="56" height="130" rx="28" fill="${getColor('rabbit-ear1')}" ${R}/>
                    <rect data-region="rabbit-ear2" x="158" y="12" width="56" height="130" rx="28" fill="${getColor('rabbit-ear2')}" ${R}/>
                    <ellipse cx="114" cy="62" rx="13" ry="36" fill="#F28C8C" opacity="0.5" stroke="none" pointer-events="none"/>
                    <ellipse cx="186" cy="62" rx="13" ry="36" fill="#F28C8C" opacity="0.5" stroke="none" pointer-events="none"/>
                    <path d="M96 40 V72" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <rect data-region="rabbit-face" x="78" y="100" width="144" height="102" rx="42" fill="${getColor('rabbit-face')}" ${R}/>
                    <path d="M90 140 Q90 114 112 108" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <g stroke="none" pointer-events="none">
                        <ellipse cx="118" cy="142" rx="8.5" ry="9.5" fill="${INK}"/><circle cx="115" cy="138.5" r="2.8" fill="#FFFBF1" opacity="0.9"/>
                        <ellipse cx="182" cy="142" rx="8.5" ry="9.5" fill="${INK}"/><circle cx="179" cy="138.5" r="2.8" fill="#FFFBF1" opacity="0.9"/>
                        <ellipse cx="98" cy="166" rx="13" ry="8" fill="#F28C8C" opacity="0.45"/>
                        <ellipse cx="202" cy="166" rx="13" ry="8" fill="#F28C8C" opacity="0.45"/>
                    </g>
                    <path d="M142 156 H158 L150 166 Z" fill="#F28C8C" stroke-width="5" pointer-events="none"/>
                    <path d="M150 166 V172 Q142 182 134 176 M150 172 Q158 182 166 176" stroke-width="5" pointer-events="none"/>
                    <path d="M82 164 L58 158 M82 174 L58 178 M218 164 L242 158 M218 174 L242 178" stroke-width="5" opacity="0.6" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'rabbit-ear1': '#E5533D', 'rabbit-ear2': '#6CBF84', 'rabbit-face': '#F2C14E', 'hat-crown': '#9B7BD0', 'ribbon': '#F08A3C', 'brim': '#4F86C6' }
    },
    {
        id: 'card_16_shell',
        name: '第 16 關：珍珠大貝殼',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs><clipPath id="shellFanClip"><path d="M150 206 L34 176 Q30 96 150 92 Q270 96 266 176 Z"/></clipPath><clipPath id="shellBotClip"><path d="M22 186 Q150 232 278 186 Q290 330 150 350 Q10 330 22 186 Z"/></clipPath></defs>
                <g stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="150" cy="368" rx="110" ry="10" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path data-region="shell-bottom" d="M22 186 Q150 232 278 186 Q290 330 150 350 Q10 330 22 186 Z" fill="${getColor('shell-bottom')}" ${R}/>
                    <rect x="10" y="304" width="280" height="50" fill="${INK}" opacity="0.09" stroke="none" clip-path="url(#shellBotClip)" pointer-events="none"/>
                    <path d="M150 236 V348 M92 232 Q76 290 90 334 M208 232 Q224 290 210 334" stroke-width="5" opacity="0.4" clip-path="url(#shellBotClip)" pointer-events="none"/>
                    <path d="M36 220 Q34 270 58 306" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="shell-top-left" d="M150 206 L34 176 Q30 96 150 92 Z" fill="${getColor('shell-top-left')}" ${R}/>
                    <path data-region="shell-top-right" d="M150 206 L266 176 Q270 96 150 92 Z" fill="${getColor('shell-top-right')}" ${R}/>
                    <path d="M150 206 L70 120 M150 206 L110 104 M150 206 L190 104 M150 206 L230 120" stroke-width="5" opacity="0.4" clip-path="url(#shellFanClip)" pointer-events="none"/>
                    <path d="M46 160 Q50 114 96 104" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <circle data-region="pearl" cx="150" cy="250" r="38" fill="${getColor('pearl')}" ${R}/>
                    <path d="M130 244 Q132 230 146 224" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <circle data-region="bubble1" cx="58" cy="62" r="30" fill="${getColor('bubble1')}" ${R}/>
                    <circle data-region="bubble2" cx="244" cy="44" r="28" fill="${getColor('bubble2')}" ${R}/>
                    <path d="M44 62 Q46 50 56 46 M232 44 Q234 34 242 30" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M262 110 a8 8 0 1 0 0.1 0 M30 130 a7 7 0 1 0 0.1 0" stroke-width="5" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'shell-top-left': '#9B7BD0', 'shell-top-right': '#4F86C6', 'shell-bottom': '#F2C14E', 'pearl': '#E5533D', 'bubble1': '#F08A3C', 'bubble2': '#6CBF84' }
    },
    {
        id: 'card_17_scarecrow',
        name: '第 17 關：農場稻草人',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs></defs>
                <g transform="translate(150.0 201.0) scale(0.940) translate(-150.0 -201.0)" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="150" cy="380" rx="96" ry="10" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <rect data-region="post" x="122" y="262" width="56" height="108" rx="8" fill="${getColor('post')}" ${R}/>
                    <path d="M136 292 V350 M160 300 V340" stroke-width="5" opacity="0.4" pointer-events="none"/>
                    <path d="M122 372 l-14 -10 M178 372 l14 -10 M140 372 l-4 -12 M160 372 l4 -12" stroke-width="5" pointer-events="none"/>
                    <rect data-region="sleeve-left" x="16" y="176" width="100" height="62" rx="28" fill="${getColor('sleeve-left')}" ${R}/>
                    <rect data-region="sleeve-right" x="184" y="176" width="100" height="62" rx="28" fill="${getColor('sleeve-right')}" ${R}/>
                    <path d="M18 196 l-12 -8 M18 208 l-14 2 M18 220 l-12 8 M282 196 l12 -8 M282 208 l14 2 M282 220 l12 8" stroke-width="5" pointer-events="none"/>
                    <path d="M30 198 Q34 190 46 188 M270 198 Q274 190 286 188" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <rect data-region="shirt" x="94" y="164" width="112" height="116" rx="30" fill="${getColor('shirt')}" ${R}/>
                    <path d="M104 220 Q104 190 122 178" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <rect x="130" y="212" width="40" height="36" rx="6" fill="#FFFBF1" stroke-width="5" stroke-dasharray="6 5" pointer-events="none"/>
                    <circle cx="150" cy="200" r="4" fill="${INK}" stroke="none" pointer-events="none"/><circle cx="150" cy="262" r="4" fill="${INK}" stroke="none" pointer-events="none"/>
                    <path d="M96 150 l-12 6 M96 138 l-14 0 M204 150 l12 6 M204 138 l14 0" stroke-width="5" pointer-events="none"/>
                    <rect data-region="head" x="98" y="80" width="104" height="96" rx="32" fill="${getColor('head')}" ${R}/>
                    <path d="M108 128 Q108 104 126 96" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <g stroke="none" pointer-events="none">
                        <ellipse cx="126" cy="132" rx="8.5" ry="9.5" fill="${INK}"/><circle cx="123" cy="128.5" r="2.8" fill="#FFFBF1" opacity="0.9"/>
                        <ellipse cx="174" cy="132" rx="8.5" ry="9.5" fill="${INK}"/><circle cx="171" cy="128.5" r="2.8" fill="#FFFBF1" opacity="0.9"/>
                        <ellipse cx="112" cy="152" rx="13" ry="8" fill="#F28C8C" opacity="0.45"/>
                        <ellipse cx="188" cy="152" rx="13" ry="8" fill="#F28C8C" opacity="0.45"/>
                    </g>
                    <path d="M138 154 Q150 164 162 154 M144 154 v6 M156 154 v6" stroke-width="5" pointer-events="none"/>
                    <path data-region="hat" d="M104 88 L110 24 Q150 8 190 24 L196 88 Q252 90 252 100 Q252 112 196 112 H104 Q48 112 48 100 Q48 90 104 88 Z" fill="${getColor('hat')}" ${R}/>
                    <path d="M106 80 H194" stroke-width="5" opacity="0.45" pointer-events="none"/>
                    <path d="M120 70 Q122 44 138 34" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M62 102 Q70 96 84 96" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'hat': '#F2C14E', 'head': '#F08A3C', 'sleeve-left': '#4F86C6', 'sleeve-right': '#9B7BD0', 'shirt': '#E5533D', 'post': '#6CBF84' }
    },
    {
        id: 'card_18_blocks',
        name: '第 18 關：歡樂積木城堡',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs></defs>
                <g stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="150" cy="364" rx="134" ry="10" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <rect data-region="pillar-left" x="20" y="176" width="68" height="174" rx="10" fill="${getColor('pillar-left')}" ${R}/>
                    <rect data-region="pillar-right" x="212" y="176" width="68" height="174" rx="10" fill="${getColor('pillar-right')}" ${R}/>
                    <path d="M20 232 H88 M20 290 H88 M212 232 H280 M212 290 H280" stroke-width="5" opacity="0.4" pointer-events="none"/>
                    <path d="M32 190 V340 M224 190 V340" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <ellipse cx="42" cy="170" rx="13" ry="7" fill="#FFFBF1" stroke-width="5" pointer-events="none"/><ellipse cx="66" cy="170" rx="13" ry="7" fill="#FFFBF1" stroke-width="5" pointer-events="none"/>
                    <ellipse cx="234" cy="170" rx="13" ry="7" fill="#FFFBF1" stroke-width="5" pointer-events="none"/><ellipse cx="258" cy="170" rx="13" ry="7" fill="#FFFBF1" stroke-width="5" pointer-events="none"/>
                    <rect data-region="arch" x="94" y="236" width="112" height="114" rx="8" fill="${getColor('arch')}" ${R}/>
                    <path d="M132 350 V318 Q132 296 150 296 Q168 296 168 318 V350 Z" fill="#FFFBF1" stroke-width="5" pointer-events="none"/>
                    <path d="M106 250 V300" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <rect data-region="cube-center" x="102" y="148" width="96" height="92" rx="8" fill="${getColor('cube-center')}" ${R}/>
                    <rect x="132" y="170" width="36" height="36" rx="6" fill="#FFFBF1" stroke-width="5" pointer-events="none"/>
                    <path d="M150 170 V206 M132 188 H168" stroke-width="5" pointer-events="none"/>
                    <path d="M112 162 V220" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path data-region="roof" d="M150 68 L226 150 H74 Z" fill="${getColor('roof')}" ${R}/>
                    <path d="M108 138 L142 100" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <circle data-region="sphere" cx="150" cy="40" r="28" fill="${getColor('sphere')}" ${R}/>
                    <path d="M136 36 Q138 24 150 20" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'roof': '#E5533D', 'cube-center': '#F2C14E', 'pillar-left': '#4F86C6', 'pillar-right': '#9B7BD0', 'arch': '#6CBF84', 'sphere': '#F08A3C' }
    },
    {
        id: 'card_19_balloons',
        name: '第 19 關：夢幻升空氣球',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs></defs>
                <g transform="translate(150.0 200.0) scale(0.972) translate(-152.0 -200.0)" stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <g pointer-events="none"><path d="M18 52 h40 a10 10 0 0 0 0 -20 a14 14 0 0 0 -26 -4 a12 12 0 0 0 -14 24 Z" fill="#FFFBF1" stroke-width="5"/>
                    <path d="M246 76 h38 a9 9 0 0 0 0 -18 a13 13 0 0 0 -24 -4 a11 11 0 0 0 -14 22 Z" fill="#FFFBF1" stroke-width="5"/></g>
                    <path d="M70 216 Q76 250 112 266 M230 216 Q224 250 188 266 M150 244 V266 M150 302 L124 322 M150 302 L176 322" stroke-width="5" pointer-events="none"/>
                    <circle data-region="balloon-main" cx="150" cy="98" r="64" fill="${getColor('balloon-main')}" ${R}/>
                    <circle data-region="balloon-left" cx="68" cy="166" r="48" fill="${getColor('balloon-left')}" ${R}/>
                    <circle data-region="balloon-right" cx="232" cy="166" r="48" fill="${getColor('balloon-right')}" ${R}/>
                    <circle data-region="balloon-small" cx="150" cy="208" r="38" fill="${getColor('balloon-small')}" ${R}/>
                    <path d="M104 92 Q106 60 134 46 M38 160 Q40 134 62 124 M202 160 Q204 134 226 124 M126 204 Q128 190 140 184" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M142 262 H158 L150 252 Z M62 214 H78 L70 220 Z M222 214 H238 L230 220 Z" fill="${INK}" stroke-width="4" pointer-events="none"/>
                    <path data-region="knot" d="M150 276 L108 250 V302 Z M150 276 L192 250 V302 Z" fill="${getColor('knot')}" ${R}/>
                    <circle cx="150" cy="276" r="9" fill="#FFFBF1" stroke-width="5" pointer-events="none"/>
                    <path data-region="basket" d="M100 322 H200 L190 378 H110 Z" fill="${getColor('basket')}" ${R}/>
                    <path d="M106 346 H194 M126 322 V378 M150 322 V378 M174 322 V378" stroke-width="5" opacity="0.4" pointer-events="none"/>
                    <path d="M110 334 L116 366" stroke-width="5" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'balloon-main': '#E5533D', 'balloon-left': '#F2C14E', 'balloon-right': '#4F86C6', 'balloon-small': '#6CBF84', 'knot': '#9B7BD0', 'basket': '#F08A3C' }
    },
    {
        id: 'card_20_berries',
        name: '第 20 關：熱帶樹景漿果',
        regionsCount: 6,
        getSvg: function(colorMap = {}) {
            const getColor = (id) => colorMap[id] || '#FFFBF1';
            const INK = '#3A2E2A';
            const R = 'class="region-path transition-colors duration-200 cursor-pointer hover:opacity-90"';
            return `
            <svg viewBox="0 0 300 400" class="w-full h-full drop-shadow-md select-none">
                <defs></defs>
                <g stroke="${INK}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none">

                    <ellipse cx="150" cy="372" rx="96" ry="10" fill="${INK}" opacity="0.13" stroke="none" pointer-events="none"/>
                    <path d="M106 248 Q120 238 126 226 M194 248 Q180 238 174 226" pointer-events="none"/>
                    <rect data-region="stem" x="122" y="150" width="56" height="190" rx="12" fill="${getColor('stem')}" ${R}/>
                    <path d="M134 176 V300" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M150 300 V330" stroke-width="5" opacity="0.4" pointer-events="none"/>
                    <path data-region="leaf-left" d="M144 176 C56 170 10 100 40 38 C96 44 140 90 144 176 Z" fill="${getColor('leaf-left')}" ${R}/>
                    <path data-region="leaf-right" d="M156 176 C244 170 290 100 260 38 C204 44 160 90 156 176 Z" fill="${getColor('leaf-right')}" ${R}/>
                    <path d="M138 168 C100 130 70 90 52 54 M162 168 C200 130 230 90 248 54" stroke-width="5" opacity="0.45" pointer-events="none"/>
                    <path d="M44 100 Q52 72 74 60 M214 60 Q238 72 244 100" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <circle data-region="berry1" cx="68" cy="262" r="38" fill="${getColor('berry1')}" ${R}/>
                    <circle data-region="berry2" cx="232" cy="262" r="38" fill="${getColor('berry2')}" ${R}/>
                    <circle data-region="berry3" cx="150" cy="322" r="40" fill="${getColor('berry3')}" ${R}/>
                    <path d="M46 260 Q48 240 64 232 M210 260 Q212 240 228 232 M128 322 Q130 300 146 292" stroke-width="7" stroke="#FFFBF1" opacity="0.8" pointer-events="none"/>
                    <path d="M62 224 l6 -6 l6 6 M226 224 l6 -6 l6 6 M144 284 l6 -6 l6 6" stroke-width="5" pointer-events="none"/>
                </g>
            </svg>`;
        },
        solution: { 'leaf-left': '#6CBF84', 'leaf-right': '#4F86C6', 'berry1': '#E5533D', 'berry2': '#9B7BD0', 'berry3': '#F2C14E', 'stem': '#F08A3C' }
    }
];

// ponytail: 同一頁會同時畫解答卡和著色卡，clipPath id 重複時瀏覽器會拿錯的那份來裁切；每次渲染加流水號
let __svgSeq = 0;
GAME_PATTERNS.forEach(p => {
    const draw = p.getSvg;
    p.getSvg = function(colorMap) {
        const k = '_' + (++__svgSeq);
        return draw.call(this, colorMap).replace(/id="([^"]+)"/g, `id="$1${k}"`).replace(/url\(#([^)]+)\)/g, `url(#$1${k})`);
    };
});
