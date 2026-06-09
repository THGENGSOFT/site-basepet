/* ════════════════════════════════════════════════════════
   BASEPET CURITIBA — script.js
   Catálogo, carrinho, galeria com swipe, checkout WhatsApp
════════════════════════════════════════════════════════ */

'use strict';

/* ── CONFIG ── */
const WHATSAPP = '5541987840087';
const IMG_BASE = './';

/* ── DADOS DOS PRODUTOS ── */
const PRODUCTS = [

  /* ── ITENS INDIVIDUAIS ── */
  {
    id:'2100', code:'2100X', category:['kit'],
    name:'Kit Gato Completo',
    desc:'Bandeja higiênica + Pá higiênica + Comedouro. Kit completo para o seu gato.',
    badge:'kit',
    variants:[
      { label:'Amarelo / Verde Água', color:'#b5cc18', img:'2100/2100amareloverdeagua.jpg' },
      { label:'Rosa',                 color:'#f472b6', imgs:['2100/2100rosa.jpg','2100/2100rosa(1).jpg','2100/2100rosa(2).jpg'] },
      { label:'Vermelho',             color:'#ef4444', img:'2100/2100vermelho.jpg' },
    ]
  },
  {
    id:'2139', code:'2139X', category:['comedouro'],
    name:'Comedouro Osso 0,75 lts',
    desc:'Formato osso, capacidade 0,75 litros. Ideal para cães de porte pequeno e médio.',
    variants:[
      { label:'Azul',     color:'#3b82f6', img:'2139/2139azul.jpg' },
      { label:'Rosa',     color:'#f472b6', img:'2139/2139rosa.jpg' },
      { label:'Vermelho', color:'#ef4444', imgs:['2139/2139vermelho.jpg','2139/2139vermelho1.jpg','2139/2139vermelho2.jpg'] },
    ]
  },
  {
    id:'2141', code:'2141X', category:['comedouro'],
    name:'Comedouro Mini 0,40 lts',
    desc:'Comedouro compacto, 0,40 litros. Perfeito para filhotes e animais pequenos.',
    variants:[
      { label:'Azul',   color:'#3b82f6', img:'2141/2141azul.jpg' },
      { label:'Laranja',color:'#f97316', img:'2141/2141laranja.jpg' },
      { label:'Roxo',   color:'#9333ea', imgs:['2141/2141roxo.jpg','2141/2141roxo(1).jpg','2141/2141roxo(2).jpg'] },
    ]
  },
  {
    id:'2142', code:'2142X', category:['comedouro'],
    name:'Comedouro Pequeno 0,60 lts',
    desc:'Capacidade 0,60 litros. Disponível em diversas cores vibrantes.',
    variants:[
      { label:'Laranja',    color:'#f97316', imgs:['2142/2142laranja.jpg','2142/2142laranja(1).jpg','2142/2142laranja(2).jpg'] },
      { label:'Lilás',      color:'#c4b5fd', img:'2142/2142lilas.jpg' },
      { label:'Rosa',       color:'#f472b6', img:'2142/2142rosa.jpg' },
      { label:'Roxo',       color:'#9333ea', img:'2142/2142roxo.jpg' },
      { label:'Verde Água', color:'#2dd4bf', img:'2142/2142verdeagua.jpg' },
    ]
  },
  {
    id:'2143', code:'2143X', category:['comedouro'],
    name:'Comedouro Médio 1,10 lts',
    desc:'Capacidade 1,10 litros. Ideal para cães de médio porte.',
    variants:[
      { label:'Azul',  color:'#3b82f6', img:'2143/2143azul.jpg' },
      { label:'Preto', color:'#1f2937', imgs:['2143/2143preto.jpg','2143/2143preto(1).jpg','2143/2143preto(2).jpg'] },
      { label:'Verde', color:'#22c55e', img:'2143/2143verde.jpg' },
    ]
  },
  {
    id:'2144', code:'2144X', category:['comedouro'],
    name:'Comedouro Grande 2,00 lts',
    desc:'Capacidade 2,00 litros. Para cães de grande porte.',
    variants:[
      { label:'Azul',       color:'#3b82f6', imgs:['2144/2144azul.jpg','2144/2144azul(1).jpg','2144/2144azul(2).jpg'] },
      { label:'Preto',      color:'#1f2937', img:'2144/2144preto.jpg' },
      { label:'Verde Água', color:'#2dd4bf', img:'2144/2144verdeagua.jpg' },
    ]
  },
  {
    id:'2146', code:'2146X', category:['comedouro'],
    name:'Comedouro de Gato 0,15 lts',
    desc:'Comedouro especial para gatos, 0,15 litros.',
    variants:[
      { label:'Rosa',       color:'#f472b6', img:'2146/2146rosa.jpg' },
      { label:'Roxo',       color:'#9333ea', imgs:['2146/2146roxo.jpg','2146/2146roxo(1).jpg','2146/2146roxo(2).jpg'] },
      { label:'Verde Água', color:'#2dd4bf', img:'2146/2146verdeagua.jpg' },
    ]
  },
  {
    id:'2147', code:'2147X', category:['bandeja'],
    name:'Bandeja para Granulado',
    desc:'Bandeja higiênica para granulado. Bordas altas para maior contenção.',
    variants:[
      { label:'Amarelo',color:'#facc15', img:'2147/2147Amarelo.jpg' },
      { label:'Azul',   color:'#3b82f6', imgs:['2147/2147azul.jpg','2147/2147azul(1).jpg','2147/2147azul(2).jpg'] },
      { label:'Roxo',   color:'#9333ea', img:'2147/2147roxo.jpg' },
    ]
  },
  {
    id:'2148', code:'2148X', category:['pa'],
    name:'Pá Dosadora',
    desc:'Pá para dosagem de ração ou granulado. Prática e higiênica.',
    variants:[{ label:'Cores variadas', color:'#6b7280', img:'2148/2148.jpeg' }]
  },
  {
    id:'2149', code:'2149X', category:['pa'],
    name:'Pá Higiênica',
    desc:'Pá higiênica para limpeza da bandeja de granulado.',
    variants:[{ label:'Cores variadas', color:'#6b7280', img:'2149/2149.jpeg' }]
  },
  {
    id:'2750', code:'2750X', category:['kit'],
    name:'Kit Carinha de Gato',
    desc:'Kit completo linha Carinha de Gato. Design moderno e exclusivo.',
    badge:'novo',
    variants:[
      { label:'Azul / Branco',  color:'#93c5fd', img:'2750/2750azulbranco.jpg' },
      { label:'Cinza / Azul',   color:'#94a3b8', img:'2750/2750cinzaazul.jpg' },
      { label:'Cinza / Rosa',   color:'#fca5a5', img:'2750/2750cinzarosa.jpg' },
      { label:'Preto / Branco', color:'#1f2937', img:'2750/2750pretobranco.jpg' },
      { label:'Preto / Rosa',   color:'#ec4899', img:'2750/2750pretorosa.jpg' },
      { label:'Rosa / Branco',  color:'#f9a8d4', img:'2750/2750rosabranco.jpg' },
    ]
  },
  {
    id:'2751', code:'2751X', category:['comedouro'],
    name:'Comedouro Carinha de Gato 0,14 lts',
    desc:'Comedouro linha Carinha de Gato, 0,14 litros. Design exclusivo.',
    badge:'novo',
    variants:[{ label:'Cores variadas', color:'#f472b6', img:'2751/2751.jpeg' }]
  },
  {
    id:'2752', code:'2752X', category:['pa'],
    name:'Pá Higiênica Carinha de Gato',
    desc:'Pá higiênica com design Carinha de Gato. Combina com a linha completa.',
    badge:'novo',
    variants:[{ label:'Cores variadas', color:'#f472b6', img:'2752/2752.jpeg' }]
  },
  {
    id:'2753', code:'2753X', category:['bandeja'],
    name:'Bandeja Carinha de Gato 10 lts',
    desc:'Bandeja 10 litros linha Carinha de Gato. Alta capacidade com visual exclusivo.',
    badge:'novo',
    variants:[
      { label:'Azul / Branco',  color:'#93c5fd', img:'2753/2753azulbranco.jpg' },
      { label:'Cinza / Azul',   color:'#94a3b8', img:'2753/2753cinzaazul.jpg' },
      { label:'Cinza / Rosa',   color:'#fca5a5', img:'2753/2753cinzarosa.jpg' },
      { label:'Preto / Branco', color:'#1f2937', img:'2753/2753pretobranco.jpg' },
      { label:'Preto / Rosa',   color:'#ec4899', img:'2753/2753pretorosa.jpg' },
      { label:'Rosa / Branco',  color:'#f9a8d4', img:'2753/2753rosabranco.jpg' },
    ]
  },
  {
    id:'2755', code:'2755X', category:['comedouro'],
    name:'Comedouro Postura Ideal 0,200 lts',
    desc:'Design ergonômico com postura ideal para alimentação, 0,200 litros.',
    badge:'novo',
    variants:[
      { label:'Azul', color:'#3b82f6', imgs:['2755/2755azul.jpg','2755/2755azul(1).jpg','2755/2755azul(2).jpg'] },
      { label:'Rosa', color:'#f472b6', img:'2755/2755rosa.jpg' },
    ]
  },

  /* ── KITS MONTADOS ── */
  {
    id:'kit-2139-2148', code:'KIT-2139-2148', category:['kit'],
    name:'Kit Comedouro + Pá Dosadora',
    desc:'Comedouro Osso 0,75 lts + Pá Dosadora. Kit prático para cães.',
    badge:'kit',
    variants:[
      { label:'Azul',     color:'#3b82f6', imgs:['Kits montados/2139-2148/2139-2148azul/2139-2148azul.jpg','Kits montados/2139-2148/2139-2148azul/2139-2148azul(1).jpg'] },
      { label:'Rosa',     color:'#f472b6', imgs:['Kits montados/2139-2148/2139-2148rosa/2139-2148rosa.jpg','Kits montados/2139-2148/2139-2148rosa/2139-2148rosa(1).jpg'] },
      { label:'Vermelho', color:'#ef4444', imgs:['Kits montados/2139-2148/2139-2148vermelho/2139-2148vermelho.jpg','Kits montados/2139-2148/2139-2148vermelho/2139-2148vermelho(1).jpg'] },
    ]
  },
  {
    id:'kit-2147-2149', code:'KIT-2147-2149', category:['kit'],
    name:'Kit Bandeja + Pá Higiênica',
    desc:'Bandeja para Granulado + Pá Higiênica. Conjunto ideal para higiene do gato.',
    badge:'kit',
    variants:[
      { label:'Azul', color:'#3b82f6', imgs:['Kits montados/2147-2149/2147-2149azul/2147-2149azul.jpg','Kits montados/2147-2149/2147-2149azul/2149-2x2146azul.jpg'] },
    ]
  },
  {
    id:'kit-2149-2x2146', code:'KIT-2149-2x2146', category:['kit'],
    name:'Kit Pá + 2x Comedouro de Gato',
    desc:'Pá Higiênica + 2x Comedouro de Gato 0,15 lts. Kit completo para felinos.',
    badge:'kit',
    variants:[
      { label:'Amarelo / Verde', color:'#b5cc18', imgs:['Kits montados/2147-2149/2149-2x2146amareloverde/2149-2x2146amareloverde.jpg','Kits montados/2147-2149/2149-2x2146amareloverde/2149-2x2146amareloverde(1).jpg'] },
      { label:'Roxo / Rosa',     color:'#c026d3', imgs:['Kits montados/2147-2149/2149-2x2146roxorosa/2149-2x2146roxorosa.jpg','Kits montados/2147-2149/2149-2x2146roxorosa/2149-2x2146roxorosa(1).jpg'] },
      { label:'Azul / Roxo',     color:'#6366f1', imgs:['Kits montados/2149-2x2146/2149-2x2146azulroxo/2149-2x2146azulroxo.jpg','Kits montados/2149-2x2146/2149-2x2146azulroxo/2149-2x2146azulroxo(1).jpg'] },
      { label:'Rosa',            color:'#f472b6', imgs:['Kits montados/2149-2x2146/2149-2x2146rosa/2149-2x2146rosa.jpg','Kits montados/2149-2x2146/2149-2x2146rosa/2149-2x2146rosa(1).jpg'] },
      { label:'Verde',           color:'#22c55e', imgs:['Kits montados/2149-2x2146/2149-2x2146verde/2149-2x2146verde.jpg','Kits montados/2149-2x2146/2149-2x2146verde/2149-2x2146verde(1).jpg'] },
    ]
  },
  {
    id:'kit-2148-2x2141', code:'KIT-2148-2x2141', category:['kit'],
    name:'Kit Pá + 2x Comedouro Mini',
    desc:'Pá Dosadora + 2x Comedouro Mini 0,40 lts. Ótimo para casas com múltiplos pets.',
    badge:'kit',
    variants:[
      { label:'Azul',               color:'#3b82f6', imgs:['Kits montados/2148-2x2141/2148-2x2141azul/2148-2x2141azul.jpg','Kits montados/2148-2x2141/2148-2x2141azul/2148-2x2141azul(1).jpg'] },
      { label:'Rosa / Roxo',        color:'#c026d3', imgs:['Kits montados/2148-2x2141/2148-2x2141rosaroxo/2148-2x2141rosaroxo.jpg','Kits montados/2148-2x2141/2148-2x2141rosaroxo/2148-2x2141rosaroxo(1).jpg'] },
      { label:'Vermelho / Laranja', color:'#f97316', imgs:['Kits montados/2148-2x2141/2148-2x2141vermelholaranja/2148-2x2141vermelholaranja.jpg','Kits montados/2148-2x2141/2148-2x2141vermelholaranja/2148-2x2141vermelholaranja(1).jpg'] },
    ]
  },
  {
    id:'kit-2148-2x2142', code:'KIT-2148-2x2142', category:['kit'],
    name:'Kit Pá + 2x Comedouro Pequeno',
    desc:'Pá Dosadora + 2x Comedouro Pequeno 0,60 lts.',
    badge:'kit',
    variants:[
      { label:'Azul / Verde Água', color:'#06b6d4', imgs:['Kits montados/2148-2x2142/2148-2x2142azulverdeagua/2148-2x2142azulverdeagua.jpg','Kits montados/2148-2x2142/2148-2x2142azulverdeagua/2148-2x2142azulverdeagua(1).jpg'] },
      { label:'Rosa',              color:'#f472b6', imgs:['Kits montados/2148-2x2142/2148-2x2142rosa/2148-2x2142rosa.jpg','Kits montados/2148-2x2142/2148-2x2142rosa/2148-2x2142rosa(1).jpg'] },
      { label:'Vermelho / Roxo',   color:'#9f1239', imgs:['Kits montados/2148-2x2142/2148-2x2142vermelhoroxo/2148-2x2142vermelhoroxo.jpg','Kits montados/2148-2x2142/2148-2x2142vermelhoroxo/2148-2x2142vermelhoroxo(1).jpg'] },
    ]
  },
  {
    id:'kit-2148-2x2143', code:'KIT-2148-2x2143', category:['kit'],
    name:'Kit Pá + 2x Comedouro Médio',
    desc:'Pá Dosadora + 2x Comedouro Médio 1,10 lts.',
    badge:'kit',
    variants:[
      { label:'Azul',        color:'#3b82f6', imgs:['Kits montados/2148-2x2143/2148-2x2143azul/2148-2x2143azul.jpg','Kits montados/2148-2x2143/2148-2x2143azul/2148-2x2143azul(1).jpg'] },
      { label:'Azul / Verde',color:'#0ea5e9', imgs:['Kits montados/2148-2x2143/2148-2x2143azulverde/2148-2x2143azulverde.jpg','Kits montados/2148-2x2143/2148-2x2143azulverde/2148-2x2143azulverde(1).jpg'] },
      { label:'Rosa / Preto',color:'#1f2937', imgs:['Kits montados/2148-2x2143/2148-2x2143rosapreto/2148-2x2143rosapreto.jpg','Kits montados/2148-2x2143/2148-2x2143rosapreto/2148-2x2143rosapreto(1).jpg'] },
    ]
  },
  {
    id:'kit-2148-2x2144', code:'KIT-2148-2x2144', category:['kit'],
    name:'Kit Pá + 2x Comedouro Grande',
    desc:'Pá Dosadora + 2x Comedouro Grande 2,00 lts. Para cães de grande porte.',
    badge:'kit',
    variants:[
      { label:'Azul',             color:'#3b82f6', imgs:['Kits montados/2148-2x2144/2148-2x2144azul/2148-2x2144azul.jpg','Kits montados/2148-2x2144/2148-2x2144azul/2148-2x2144azul(1).jpg'] },
      { label:'Azul / Verde Água',color:'#06b6d4', imgs:['Kits montados/2148-2x2144/2148-2x2144azulverdeagua/2148-2x2144azulverdeagua.jpg','Kits montados/2148-2x2144/2148-2x2144azulverdeagua/2148-2x2144azulverdeagua(1).jpg'] },
      { label:'Rosa / Preto',     color:'#1f2937', imgs:['Kits montados/2148-2x2144/2148-2x2144rosapreto/2148-2x2144rosapreto.jpg','Kits montados/2148-2x2144/2148-2x2144rosapreto/2148-2x2144rosapreto(1).jpg'] },
    ]
  },
  {
    id:'kit-2148-2x2146', code:'KIT-2148-2x2146', category:['kit'],
    name:'Kit Pá + 2x Comedouro de Gato',
    desc:'Pá Dosadora + 2x Comedouro de Gato 0,15 lts.',
    badge:'kit',
    variants:[
      { label:'Azul / Verde Água',color:'#06b6d4', imgs:['Kits montados/2148-2x2146/2148-2x2146azulverdeagua/2148-2x2146azulverdeagua.jpg','Kits montados/2148-2x2146/2148-2x2146azulverdeagua/2148-2x2146azulverdeagua(1).jpg'] },
      { label:'Rosa',             color:'#f472b6', imgs:['Kits montados/2148-2x2146/2148-2x2146rosa/2148-2x2146rosa.jpg','Kits montados/2148-2x2146/2148-2x2146rosa/2148-2x2146rosa(1).jpg'] },
      { label:'Vermelho / Roxo',  color:'#9f1239', imgs:['Kits montados/2148-2x2146/2148-2x2146vermellhoroxo/2148-2x2146vermelhoroxo.jpg','Kits montados/2148-2x2146/2148-2x2146vermellhoroxo/2148-2x2146vermelhoroxo(1).jpg'] },
    ]
  },
  {
    id:'kit-2148-2755', code:'KIT-2148-2755', category:['kit'],
    name:'Kit Pá + Comedouro Postura Ideal',
    desc:'Pá Dosadora + Comedouro Postura Ideal 0,200 lts.',
    badge:'kit',
    variants:[
      { label:'Azul', color:'#3b82f6', imgs:['Kits montados/2148-2755/2148-2755azul/2148-2755azul.jpg','Kits montados/2148-2755/2148-2755azul/2148-2755azul(1).jpg'] },
      { label:'Rosa', color:'#f472b6', imgs:['Kits montados/2148-2755/2148-2755rosa/2148-2755rosa.jpg','Kits montados/2148-2755/2148-2755rosa/2148-2755rosa(1).jpg'] },
    ]
  },
  {
    id:'kit-2752-2x2751', code:'KIT-2752-2x2751', category:['kit'],
    name:'Kit Carinha de Gato — Pá + 2x Comedouro',
    desc:'Pá Higiênica Carinha de Gato + 2x Comedouro Carinha de Gato 0,14 lts.',
    badge:'kit',
    variants:[
      { label:'Branco / Azul',  color:'#bfdbfe', imgs:['Kits montados/2752-2x2751/2752-2x2751brancoazul/2752-2x2751brancoazul.jpg','Kits montados/2752-2x2751/2752-2x2751brancoazul/2752-2x2751brancoazul(1).jpg'] },
      { label:'Branco / Rosa',  color:'#fbcfe8', imgs:['Kits montados/2752-2x2751/2752-2x2751brancorosa/2752-2x2751brancorosa.jpg','Kits montados/2752-2x2751/2752-2x2751brancorosa/2752-2x2751brancorosa(1).jpg'] },
      { label:'Cinza / Azul',   color:'#94a3b8', imgs:['Kits montados/2752-2x2751/2752-2x2751cinzaazul/2752-2x2751cinzaazul.jpg','Kits montados/2752-2x2751/2752-2x2751cinzaazul/2752-2x2751cinzaazul(1).jpg'] },
      { label:'Cinza / Rosa',   color:'#fca5a5', imgs:['Kits montados/2752-2x2751/2752-2x2751cinzarosa/2752-2x2751cinzarosa.jpg','Kits montados/2752-2x2751/2752-2x2751cinzarosa/2752-2x2751cinzarosa(1).jpg'] },
      { label:'Preto / Branco', color:'#1f2937', imgs:['Kits montados/2752-2x2751/2752-2x2751pretobranco/2752-2x2751pretobranco.jpg','Kits montados/2752-2x2751/2752-2x2751pretobranco/2752-2x2751pretobranco(1).jpg'] },
      { label:'Preto / Rosa',   color:'#ec4899', imgs:['Kits montados/2752-2x2751/2752-2x2751pretorosa/2752-2x2751pretorosa.jpg','Kits montados/2752-2x2751/2752-2x2751pretorosa/2752-2x2751pretorosa(1).jpg'] },
    ]
  },
];

/* ── STATE ── */
let cart = [];
let activeFilter = 'todos';
let variantState = {}; /* id → variant index */

/* ── HELPERS ── */
const $ = id => document.getElementById(id);
const esc = s => s.replace(/'/g, "\\'");
function getImgs(v) { return v.imgs || (v.img ? [v.img] : []); }

/* ── RENDER CATALOG ── */
function renderProducts() {
  const grid = $('productsGrid');
  const list = activeFilter === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category.includes(activeFilter));

  grid.innerHTML = list.map(p => buildCard(p)).join('');
  initReveal();
  initSwipe();
}

function buildCard(p) {
  const vi   = variantState[p.id] || 0;
  const v    = p.variants[vi] || p.variants[0];
  const imgs = getImgs(v);
  const main = imgs[0] || '';
  const qty  = cartQtyFor(p.id, v.label);
  const multi = imgs.length > 1;

  const swatches = p.variants.map((vv, i) => `
    <button class="color-swatch${i===vi?' active':''}"
      style="background:${vv.color}"
      title="${vv.label}"
      aria-label="Cor ${vv.label}${i===vi?' (selecionada)':''}"
      onclick="switchVariant(event,'${p.id}',${i})"></button>
  `).join('');

  const dots = imgs.map((_, i) => `
    <div class="gallery-dot${i===0?' active':''}" onclick="galleryDot(event,'${p.id}',${i})"></div>
  `).join('');

  const badge = p.badge==='kit' ? '<span class="product-badge badge-kit">Kit</span>'
              : p.badge==='novo'? '<span class="product-badge badge-novo">Novo</span>' : '';

  const imgTag = main
    ? `<img src="${IMG_BASE}${main}" alt="Foto de ${p.name} — ${v.label}" id="pimg-${p.id}" loading="lazy"
        onclick="openLightbox(this.src)"
        onerror="this.style.display='none'">`
    : `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem;opacity:.15" aria-hidden="true">🐾</div>`;

  const footerHtml = qty > 0 ? buildQtyControl(p.id, v.label, qty) : buildAddBtn(p.id);

  return `
<article class="product-card reveal" id="card-${p.id}">
  <div class="product-gallery" id="gallery-${p.id}" data-imgs='${JSON.stringify(imgs)}' data-idx="0">
    ${imgTag}
    ${badge}
    <div class="color-swatches" aria-label="Escolher cor">${swatches}</div>
    <button class="gallery-arrow gallery-prev${multi?'':' sr-only'}" id="prev-${p.id}"
      aria-label="Imagem anterior" onclick="galleryNav(event,'${p.id}',-1)">
      <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
    </button>
    <button class="gallery-arrow gallery-next${multi?'':' sr-only'}" id="next-${p.id}"
      aria-label="Próxima imagem" onclick="galleryNav(event,'${p.id}',1)">
      <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
    </button>
    ${multi ? `<div class="gallery-nav" id="nav-${p.id}" aria-hidden="true">${dots}</div>` : ''}
    ${multi ? '<div class="swipe-hint" aria-hidden="true">deslize para ver mais</div>' : ''}
  </div>
  <div class="product-info">
    <div class="product-code">${p.code}</div>
    <h3 class="product-name">${p.name}</h3>
    <p class="product-desc">${p.desc}</p>
    <div class="variant-label" id="vlabel-${p.id}">${v.label}</div>
    <div class="product-footer">
      <div id="pcta-${p.id}">${footerHtml}</div>
    </div>
  </div>
</article>`;
}

function buildAddBtn(id) {
  return `<button class="product-cta" onclick="addToCart('${id}')">
    <i class="fa-solid fa-bag-shopping" aria-hidden="true"></i> Adicionar
  </button>`;
}

function buildQtyControl(id, variantLabel, qty) {
  return `<div class="qty-control">
    <button class="qty-btn" aria-label="Diminuir" onclick="changeQty('${id}','${esc(variantLabel)}',-1)">
      <i class="fa-solid fa-minus" aria-hidden="true"></i>
    </button>
    <span class="qty-val" aria-live="polite">${qty}</span>
    <button class="qty-btn" aria-label="Aumentar" onclick="changeQty('${id}','${esc(variantLabel)}',1)">
      <i class="fa-solid fa-plus" aria-hidden="true"></i>
    </button>
  </div>`;
}

/* ── GALLERY ── */
function switchVariant(e, id, vi) {
  e.stopPropagation();
  variantState[id] = vi;
  const p    = PRODUCTS.find(x => x.id === id);
  const v    = p.variants[vi];
  const imgs = getImgs(v);
  const multi = imgs.length > 1;

  /* image */
  const img = $('pimg-' + id);
  if (img) { img.style.display = ''; img.src = imgs[0] ? IMG_BASE + imgs[0] : ''; img.alt = `Foto de ${p.name} — ${v.label}`; }

  /* gallery state */
  const gal = $('gallery-' + id);
  if (gal) { gal.dataset.imgs = JSON.stringify(imgs); gal.dataset.idx = '0'; }

  /* dots */
  const nav = $('nav-' + id);
  if (nav) {
    nav.innerHTML = imgs.map((_,i) => `<div class="gallery-dot${i===0?' active':''}" onclick="galleryDot(event,'${id}',${i})"></div>`).join('');
    nav.style.display = multi ? 'flex' : 'none';
  }

  /* arrows */
  const prev = $('prev-' + id), next = $('next-' + id);
  const method = multi ? 'remove' : 'add';
  prev && prev.classList[method]('sr-only');
  next && next.classList[method]('sr-only');

  /* variant label */
  const lbl = $('vlabel-' + id);
  if (lbl) lbl.textContent = v.label;

  /* swatches */
  document.querySelectorAll(`#card-${id} .color-swatch`).forEach((s,i) => {
    s.classList.toggle('active', i === vi);
    s.setAttribute('aria-label', `Cor ${p.variants[i].label}${i===vi?' (selecionada)':''}`);
  });

  updateFooter(id);
}

function galleryNav(e, id, dir) {
  e.stopPropagation();
  const gal  = $('gallery-' + id);
  const imgs = JSON.parse(gal.dataset.imgs || '[]');
  if (!imgs.length) return;
  const idx = (parseInt(gal.dataset.idx) + dir + imgs.length) % imgs.length;
  setGalleryIdx(id, idx, imgs);
}

function galleryDot(e, id, idx) {
  e.stopPropagation();
  const gal  = $('gallery-' + id);
  const imgs = JSON.parse(gal.dataset.imgs || '[]');
  if (!imgs[idx]) return;
  setGalleryIdx(id, idx, imgs);
}

function setGalleryIdx(id, idx, imgs) {
  const gal = $('gallery-' + id);
  gal.dataset.idx = idx;
  const img = $('pimg-' + id);
  if (img) img.src = IMG_BASE + imgs[idx];
  gal.querySelectorAll('.gallery-dot').forEach((d,i) => d.classList.toggle('active', i === idx));
}

/* Touch swipe */
function initSwipe() {
  document.querySelectorAll('.product-gallery').forEach(gal => {
    const id = gal.id.replace('gallery-','');
    let startX = 0;
    gal.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, {passive:true});
    gal.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 44) galleryNav({stopPropagation:()=>{}}, id, dx < 0 ? 1 : -1);
    }, {passive:true});
  });
}

/* ── FILTER ── */
function filterProducts(cat, el) {
  activeFilter = cat;
  document.querySelectorAll('.filter-tab').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  el.classList.add('active');
  el.setAttribute('aria-pressed', 'true');
  renderProducts();
}

/* ── CART LOGIC ── */
function cartQtyFor(id, variant) {
  const item = cart.find(x => x.id === id && x.variant === variant);
  return item ? item.qty : 0;
}

function addToCart(id) {
  const p  = PRODUCTS.find(x => x.id === id);
  const vi = variantState[id] || 0;
  const v  = p.variants[vi];
  const imgs = getImgs(v);

  const ex = cart.find(x => x.id === id && x.variant === v.label);
  if (ex) ex.qty++;
  else cart.push({ id, name:p.name, code:p.code, variant:v.label, img:imgs[0]||'', qty:1 });

  updateCartUI();
  updateFooter(id);
  showToast(`🛒 ${p.name} adicionado!`);
  bumpBadge();
}

function changeQty(id, variant, delta) {
  const item = cart.find(x => x.id === id && x.variant === variant);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => !(x.id===id && x.variant===variant));
  updateCartUI();
  updateFooter(id);
}

function removeCartItem(id, variant) {
  cart = cart.filter(x => !(x.id===id && x.variant===variant));
  updateCartUI();
  updateFooter(id);
}

function updateFooter(id) {
  const el = $('pcta-' + id);
  if (!el) return;
  const p  = PRODUCTS.find(x => x.id === id);
  const vi = variantState[id] || 0;
  const v  = p.variants[vi];
  const qty = cartQtyFor(id, v.label);
  el.innerHTML = qty > 0 ? buildQtyControl(id, v.label, qty) : buildAddBtn(id);
}

/* ── CART UI ── */
function updateCartUI() {
  const body      = $('cartBody');
  const empty     = $('cartEmptyState');
  const countEl   = $('cartCount');
  const badge     = $('cartBadge');
  const checkout  = $('checkoutBtn');
  const navBtn    = $('cartNavBtn');

  const totalQty = cart.reduce((a,c) => a+c.qty, 0);
  countEl.textContent = totalQty + (totalQty===1 ? ' item' : ' itens');
  badge.textContent   = totalQty;
  badge.classList.toggle('visible', totalQty > 0);

  const disabled = totalQty === 0;
  checkout.setAttribute('aria-disabled', disabled);
  checkout.onclick = disabled ? null : sendToWhatsApp;

  navBtn && navBtn.setAttribute('aria-label', `Abrir carrinho (${totalQty} ${totalQty===1?'item':'itens'})`);

  /* rebuild items */
  body.querySelectorAll('.cart-item').forEach(el => el.remove());
  empty.style.display = cart.length ? 'none' : 'flex';

  [...cart].reverse().forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.id = `ci-${item.id}-${encodeURIComponent(item.variant)}`;
    div.innerHTML = `
      <img class="cart-item-img" src="${item.img ? IMG_BASE+item.img : ''}" alt="" loading="lazy" onerror="this.style.display='none'">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variant">${item.variant}</div>
        <div class="cart-item-controls">
          <button class="ci-qty-btn" aria-label="Diminuir quantidade de ${item.name}" onclick="changeQty('${item.id}','${esc(item.variant)}',-1)">
            <i class="fa-solid fa-minus" aria-hidden="true"></i>
          </button>
          <span class="ci-qty" aria-live="polite">${item.qty}</span>
          <button class="ci-qty-btn" aria-label="Aumentar quantidade de ${item.name}" onclick="changeQty('${item.id}','${esc(item.variant)}',1)">
            <i class="fa-solid fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <button class="cart-item-remove" aria-label="Remover ${item.name} do carrinho" onclick="removeCartItem('${item.id}','${esc(item.variant)}')">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>`;
    body.insertBefore(div, empty);
  });
}

/* ── WHATSAPP CHECKOUT ── */
function sendToWhatsApp() {
  if (!cart.length) return;
  const note = $('cartNote').value.trim();
  let msg = '*Olá! Gostaria de fazer um pedido pela BasePet Curitiba:*\n\n';
  cart.forEach((item, i) => {
    msg += `${i+1}. *${item.name}*\n   Cor/Variação: ${item.variant}\n   Quantidade: ${item.qty}\n\n`;
  });
  if (note) msg += `📝 *Observação:* ${note}\n\n`;
  msg += 'Aguardo confirmação de disponibilidade e valor. Obrigado(a)! 🐾';
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

/* ── UI CONTROLS ── */
function toggleCart() {
  const sb = $('cartSidebar');
  const isOpen = sb.classList.toggle('open');
  $('cartOverlay').classList.toggle('open', isOpen);
  sb.setAttribute('aria-hidden', !isOpen);
  $('cartOverlay').setAttribute('aria-hidden', !isOpen);
  document.body.classList.toggle('no-scroll', isOpen);
  if (isOpen) $('cartCloseBtn') && $('cartCloseBtn').focus();
}

function closeCart() {
  $('cartSidebar').classList.remove('open');
  $('cartOverlay').classList.remove('open');
  $('cartSidebar').setAttribute('aria-hidden', 'true');
  $('cartOverlay').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  $('cartNavBtn') && $('cartNavBtn').focus();
}

function bumpBadge() {
  const b = $('cartBadge');
  b.classList.remove('pop');
  requestAnimationFrame(() => b.classList.add('pop'));
}

function openLightbox(src) {
  const lb = $('lightbox');
  $('lightbox-img').src = src;
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  $('lightboxClose') && $('lightboxClose').focus();
}

function closeLightbox() {
  $('lightbox').classList.remove('open');
  $('lightbox').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

function showToast(msg, dur = 2400) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), dur);
}

function toggleMobileMenu() {
  const m    = $('mobileMenu');
  const btn  = $('navToggle');
  const open = m.classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
  m.setAttribute('aria-hidden', !open);
  document.body.classList.toggle('no-scroll', open);
}

function closeMobileMenu() {
  $('mobileMenu').classList.remove('open');
  $('navToggle').classList.remove('open');
  $('navToggle').setAttribute('aria-expanded', 'false');
  $('mobileMenu').setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

/* ── NAVBAR SCROLL ── */
let scrollRaf;
window.addEventListener('scroll', () => {
  if (scrollRaf) return;
  scrollRaf = requestAnimationFrame(() => {
    $('navbar').classList.toggle('scrolled', window.scrollY > 24);
    scrollRaf = null;
  });
}, { passive:true });

/* ── KEYBOARD TRAPS ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if ($('lightbox').classList.contains('open')) { closeLightbox(); return; }
    if ($('cartSidebar').classList.contains('open')) { closeCart(); return; }
    if ($('mobileMenu').classList.contains('open')) { closeMobileMenu(); }
  }
});

/* Click outside lightbox */
$('lightbox').addEventListener('click', e => { if (e.target === $('lightbox')) closeLightbox(); });

/* Cart nav btn */
$('cartNavBtn') && $('cartNavBtn').addEventListener('click', toggleCart);

/* Cart overlay click */
$('cartOverlay').addEventListener('click', closeCart);

/* ── REVEAL (IntersectionObserver) ── */
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold:.08, rootMargin:'0px 0px -40px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

/* ── INIT ── */
renderProducts();
initReveal();