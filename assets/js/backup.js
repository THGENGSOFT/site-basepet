/* ── DATA ── */
const WHATSAPP = '5541987840087';
const IMG_BASE = './';

const PRODUCTS = [
  { id: '2100', code: '2100X', category: ['kit'], name: 'Kit Gato Completo', desc: 'Bandeja higiênica + Pá higiênica + Comedouro. Kit completo para o seu gato.', badge: 'kit', variants: [{ label: 'Amarelo / Verde Água', color: '#b5cc18', img: '2100/2100amareloverdeagua.jpg' }, { label: 'Rosa', color: '#f472b6', imgs: ['2100/2100rosa.jpg','2100/2100rosa(1).jpg','2100/2100rosa(2).jpg'] }, { label: 'Vermelho', color: '#ef4444', img: '2100/2100vermelho.jpg' } ] },
  { id: '2139', code: '2139X', category: ['comedouro'], name: 'Comedouro Osso 0,75 lts', desc: 'Formato osso, capacidade 0,75 litros. Ideal para cães de porte pequeno e médio.', variants: [{ label: 'Azul', color: '#3b82f6', img: '2139/2139azul.jpg' }, { label: 'Rosa', color: '#f472b6', img: '2139/2139rosa.jpg' }, { label: 'Vermelho', color: '#ef4444', imgs: ['2139/2139vermelho.jpg', '2139/2139vermelho1.jpg', '2139/2139vermelho2.jpg'] } ] },
  { id: '2141', code: '2141X', category: ['comedouro'], name: 'Comedouro Mini 0,40 lts', desc: 'Comedouro compacto, capacidade 0,40 litros. Perfeito para filhotes e animais pequenos.', variants: [{ label: 'Azul', color: '#3b82f6', img: '2141/2141azul.jpg' }, { label: 'Laranja', color: '#f97316', img: '2141/2141laranja.jpg' }, { label: 'Roxo', color: '#9333ea', imgs: ['2141/2141roxo.jpg','2141/2141roxo(1).jpg','2141/2141roxo(2).jpg'] } ] },
  { id: '2142', code: '2142X', category: ['comedouro'], name: 'Comedouro Pequeno 0,60 lts', desc: 'Capacidade 0,60 litros. Disponível em diversas cores vibrantes.', variants: [{ label: 'Laranja', color: '#f97316', imgs: ['2142/2142laranja.jpg','2142/2142laranja(1).jpg','2142/2142laranja(2).jpg'] }, { label: 'Lilás', color: '#c4b5fd', img: '2142/2142lilas.jpg' }, { label: 'Rosa', color: '#f472b6', img: '2142/2142rosa.jpg' }, { label: 'Roxo', color: '#9333ea', img: '2142/2142roxo.jpg' }, { label: 'Verde Água', color: '#2dd4bf', img: '2142/2142verdeagua.jpg' } ] },
  { id: '2143', code: '2143X', category: ['comedouro'], name: 'Comedouro Médio 1,10 lts', desc: 'Capacidade 1,10 litros. Ideal para cães de médio porte.', variants: [{ label: 'Azul', color: '#3b82f6', img: '2143/2143azul.jpg' }, { label: 'Preto', color: '#111827', imgs: ['2143/2143preto.jpg','2143/2143preto(1).jpg','2143/2143preto(2).jpg'] }, { label: 'Verde', color: '#22c55e', img: '2143/2143verde.jpg' } ] },
  { id: '2144', code: '2144X', category: ['comedouro'], name: 'Comedouro Grande 2,00 lts', desc: 'Capacidade 2,00 litros. Para cães de grande porte.', variants: [{ label: 'Azul', color: '#3b82f6', imgs: ['2144/2144azul.jpg','2144/2144azul(1).jpg','2144/2144azul(2).jpg'] }, { label: 'Preto', color: '#111827', img: '2144/2144preto.jpg' }, { label: 'Verde Água', color: '#2dd4bf', img: '2144/2144verdeagua.jpg' } ] },
  { id: '2146', code: '2146X', category: ['comedouro'], name: 'Comedouro de Gato 0,15 lts', desc: 'Comedouro pequeno especial para gatos, capacidade 0,15 litros.', variants: [{ label: 'Rosa', color: '#f472b6', img: '2146/2146rosa.jpg' }, { label: 'Roxo', color: '#9333ea', imgs: ['2146/2146roxo.jpg','2146/2146roxo(1).jpg','2146/2146roxo(2).jpg'] }, { label: 'Verde Água', color: '#2dd4bf', img: '2146/2146verdeagua.jpg' } ] },
  { id: '2147', code: '2147X', category: ['bandeja'], name: 'Bandeja para Granulado', desc: 'Bandeja higiênica para granulado. Bordas altas para maior contenção.', variants: [{ label: 'Amarelo', color: '#facc15', img: '2147/2147Amarelo.jpg' }, { label: 'Azul', color: '#3b82f6', imgs: ['2147/2147azul.jpg','2147/2147azul(1).jpg','2147/2147azul(2).jpg'] }, { label: 'Roxo', color: '#9333ea', img: '2147/2147roxo.jpg' } ] },
  { id: '2148', code: '2148X', category: ['pa'], name: 'Pá Dosadora', desc: 'Pá para dosagem de ração ou granulado. Prática e higiênica.', variants: [{ label: 'Cores variadas', color: '#6b7280', img: '2148/2148.jpeg' } ] },
  { id: '2149', code: '2149X', category: ['pa'], name: 'Pá Higiênica', desc: 'Pá higiênica para limpeza da bandeja de granulado.', variants: [{ label: 'Cores variadas', color: '#6b7280', img: '2149/2149.jpeg' } ] },
  { id: '2750', code: '2750X', category: ['kit'], name: 'Kit Carinha de Gato', desc: 'Kit completo linha Carinha de Gato. Design moderno e fofo.', badge: 'novo', variants: [{ label: 'Azul / Branco', color: '#93c5fd', img: '2750/2750azulbranco.jpg' }, { label: 'Cinza / Azul', color: '#94a3b8', img: '2750/2750cinzaazul.jpg' }, { label: 'Cinza / Rosa', color: '#fca5a5', img: '2750/2750cinzarosa.jpg' }, { label: 'Preto / Branco', color: '#1f2937', img: '2750/2750pretobranco.jpg' }, { label: 'Preto / Rosa', color: '#ec4899', img: '2750/2750pretorosa.jpg' }, { label: 'Rosa / Branco', color: '#f9a8d4', img: '2750/2750rosabranco.jpg' } ] },
  { id: '2751', code: '2751X', category: ['comedouro'], name: 'Comedouro Carinha de Gato 0,14 lts', desc: 'Comedouro linha Carinha de Gato, 0,14 litros. Design exclusivo.', badge: 'novo', variants: [{ label: 'Cores variadas', color: '#f472b6', img: '2751/2751.jpeg' } ] },
  { id: '2752', code: '2752X', category: ['pa'], name: 'Pá Higiênica Carinha de Gato', desc: 'Pá higiênica com design Carinha de Gato. Combina com a linha completa.', badge: 'novo', variants: [{ label: 'Cores variadas', color: '#f472b6', img: '2752/2752.jpeg' } ] },
  { id: '2753', code: '2753X', category: ['bandeja'], name: 'Bandeja Carinha de Gato 10 lts', desc: 'Bandeja 10 litros linha Carinha de Gato. Alta capacidade com visual exclusivo.', badge: 'novo', variants: [{ label: 'Azul / Branco', color: '#93c5fd', img: '2753/2753azulbranco.jpg' }, { label: 'Cinza / Azul', color: '#94a3b8', img: '2753/2753cinzaazul.jpg' }, { label: 'Cinza / Rosa', color: '#fca5a5', img: '2753/2753cinzarosa.jpg' }, { label: 'Preto / Branco', color: '#1f2937', img: '2753/2753pretobranco.jpg' }, { label: 'Preto / Rosa', color: '#ec4899', img: '2753/2753pretorosa.jpg' }, { label: 'Rosa / Branco', color: '#f9a8d4', img: '2753/2753rosabranco.jpg' } ] },
  { id: '2755', code: '2755X', category: ['comedouro'], name: 'Comedouro Postura Ideal 0,200 lts', desc: 'Design ergonômico com postura ideal para alimentação, 0,200 litros.', badge: 'novo', variants: [{ label: 'Azul', color: '#3b82f6', imgs: ['2755/2755azul.jpg','2755/2755azul(1).jpg','2755/2755azul(2).jpg'] }, { label: 'Rosa', color: '#f472b6', img: '2755/2755rosa.jpg' } ] },

  // ════════════════════════════════════════
  // NOVOS KITS MONTADOS
  // ════════════════════════════════════════
  {
    id: 'kit-2139-2148', code: 'KIT-2139-2148', category: ['kit'],
    name: 'Kit 2139-2148',
    desc: 'Comedouro Osso 0,75 lts + Pá Dosadora.',
    badge: 'kit',
    variants: [
      { label: 'Azul', color: '#3b82f6', imgs: ['Kits montados/2139-2148/2139-2148azul/2139-2148azul.jpg', 'Kits montados/2139-2148/2139-2148azul/2139-2148azul(1).jpg'] },
      { label: 'Rosa', color: '#f472b6', imgs: ['Kits montados/2139-2148/2139-2148rosa/2139-2148rosa.jpg', 'Kits montados/2139-2148/2139-2148rosa/2139-2148rosa(1).jpg'] },
      { label: 'Vermelho', color: '#ef4444', imgs: ['Kits montados/2139-2148/2139-2148vermelho/2139-2148vermelho.jpg', 'Kits montados/2139-2148/2139-2148vermelho/2139-2148vermelho(1).jpg'] }
    ]
  },
  {
    id: 'kit-2147-2149', code: 'KIT-2147-2149', category: ['kit'],
    name: 'Kit 2147-2149',
    desc: 'Bandeja para Granulado + Pá Higiênica.',
    badge: 'kit',
    variants: [
      { label: 'Azul', color: '#3b82f6', imgs: ['Kits montados/2147-2149/2147-2149azul/2147-2149azul.jpg', 'Kits montados/2147-2149/2147-2149azul/2149-2x2146azul.jpg'] }
    ]
  },
  {
    id: 'kit-2149-2x2146', code: 'KIT-2149-2x2146', category: ['kit'],
    name: 'Kit 2149-2x2146',
    desc: 'Pá Higiênica + 2x Comedouro de Gato 0,15 lts.',
    badge: 'kit',
    variants: [
      { label: 'Amarelo / Verde', color: '#b5cc18', imgs: ['Kits montados/2147-2149/2149-2x2146amareloverde/2149-2x2146amareloverde.jpg', 'Kits montados/2147-2149/2149-2x2146amareloverde/2149-2x2146amareloverde(1).jpg'] },
      { label: 'Roxo / Rosa', color: '#c026d3', imgs: ['Kits montados/2147-2149/2149-2x2146roxorosa/2149-2x2146roxorosa.jpg', 'Kits montados/2147-2149/2149-2x2146roxorosa/2149-2x2146roxorosa(1).jpg'] },
      { label: 'Azul / Roxo', color: '#6366f1', imgs: ['Kits montados/2149-2x2146/2149-2x2146azulroxo/2149-2x2146azulroxo.jpg', 'Kits montados/2149-2x2146/2149-2x2146azulroxo/2149-2x2146azulroxo(1).jpg'] },
      { label: 'Rosa', color: '#f472b6', imgs: ['Kits montados/2149-2x2146/2149-2x2146rosa/2149-2x2146rosa.jpg', 'Kits montados/2149-2x2146/2149-2x2146rosa/2149-2x2146rosa(1).jpg'] },
      { label: 'Verde', color: '#22c55e', imgs: ['Kits montados/2149-2x2146/2149-2x2146verde/2149-2x2146verde.jpg', 'Kits montados/2149-2x2146/2149-2x2146verde/2149-2x2146verde(1).jpg'] }
    ]
  },
  {
    id: 'kit-2148-2x2141', code: 'KIT-2148-2x2141', category: ['kit'],
    name: 'Kit 2148-2x2141',
    desc: 'Pá Dosadora + 2x Comedouro Mini 0,40 lts.',
    badge: 'kit',
    variants: [
      { label: 'Azul', color: '#3b82f6', imgs: ['Kits montados/2148-2x2141/2148-2x2141azul/2148-2x2141azul.jpg', 'Kits montados/2148-2x2141/2148-2x2141azul/2148-2x2141azul(1).jpg'] },
      { label: 'Rosa / Roxo', color: '#c026d3', imgs: ['Kits montados/2148-2x2141/2148-2x2141rosaroxo/2148-2x2141rosaroxo.jpg', 'Kits montados/2148-2x2141/2148-2x2141rosaroxo/2148-2x2141rosaroxo(1).jpg'] },
      { label: 'Vermelho / Laranja', color: '#f97316', imgs: ['Kits montados/2148-2x2141/2148-2x2141vermelholaranja/2148-2x2141vermelholaranja.jpg', 'Kits montados/2148-2x2141/2148-2x2141vermelholaranja/2148-2x2141vermelholaranja(1).jpg'] }
    ]
  },
  {
    id: 'kit-2148-2x2142', code: 'KIT-2148-2x2142', category: ['kit'],
    name: 'Kit 2148-2x2142',
    desc: 'Pá Dosadora + 2x Comedouro Pequeno 0,60 lts.',
    badge: 'kit',
    variants: [
      { label: 'Azul / Verde Água', color: '#06b6d4', imgs: ['Kits montados/2148-2x2142/2148-2x2142azulverdeagua/2148-2x2142azulverdeagua.jpg', 'Kits montados/2148-2x2142/2148-2x2142azulverdeagua/2148-2x2142azulverdeagua(1).jpg'] },
      { label: 'Rosa', color: '#f472b6', imgs: ['Kits montados/2148-2x2142/2148-2x2142rosa/2148-2x2142rosa.jpg', 'Kits montados/2148-2x2142/2148-2x2142rosa/2148-2x2142rosa(1).jpg'] },
      { label: 'Vermelho / Roxo', color: '#9f1239', imgs: ['Kits montados/2148-2x2142/2148-2x2142vermelhoroxo/2148-2x2142vermelhoroxo.jpg', 'Kits montados/2148-2x2142/2148-2x2142vermelhoroxo/2148-2x2142vermelhoroxo(1).jpg'] }
    ]
  },
  {
    id: 'kit-2148-2x2143', code: 'KIT-2148-2x2143', category: ['kit'],
    name: 'Kit 2148-2x2143',
    desc: 'Pá Dosadora + 2x Comedouro Médio 1,10 lts.',
    badge: 'kit',
    variants: [
      { label: 'Azul', color: '#3b82f6', imgs: ['Kits montados/2148-2x2143/2148-2x2143azul/2148-2x2143azul.jpg', 'Kits montados/2148-2x2143/2148-2x2143azul/2148-2x2143azul(1).jpg'] },
      { label: 'Azul / Verde', color: '#0ea5e9', imgs: ['Kits montados/2148-2x2143/2148-2x2143azulverde/2148-2x2143azulverde.jpg', 'Kits montados/2148-2x2143/2148-2x2143azulverde/2148-2x2143azulverde(1).jpg'] },
      { label: 'Rosa / Preto', color: '#1f2937', imgs: ['Kits montados/2148-2x2143/2148-2x2143rosapreto/2148-2x2143rosapreto.jpg', 'Kits montados/2148-2x2143/2148-2x2143rosapreto/2148-2x2143rosapreto(1).jpg'] }
    ]
  },
  {
    id: 'kit-2148-2x2144', code: 'KIT-2148-2x2144', category: ['kit'],
    name: 'Kit 2148-2x2144',
    desc: 'Pá Dosadora + 2x Comedouro Grande 2,00 lts.',
    badge: 'kit',
    variants: [
      { label: 'Azul', color: '#3b82f6', imgs: ['Kits montados/2148-2x2144/2148-2x2144azul/2148-2x2144azul.jpg', 'Kits montados/2148-2x2144/2148-2x2144azul/2148-2x2144azul(1).jpg'] },
      { label: 'Azul / Verde Água', color: '#06b6d4', imgs: ['Kits montados/2148-2x2144/2148-2x2144azulverdeagua/2148-2x2144azulverdeagua.jpg', 'Kits montados/2148-2x2144/2148-2x2144azulverdeagua/2148-2x2144azulverdeagua(1).jpg'] },
      { label: 'Rosa / Preto', color: '#1f2937', imgs: ['Kits montados/2148-2x2144/2148-2x2144rosapreto/2148-2x2144rosapreto.jpg', 'Kits montados/2148-2x2144/2148-2x2144rosapreto/2148-2x2144rosapreto(1).jpg'] }
    ]
  },
  {
    id: 'kit-2148-2x2146', code: 'KIT-2148-2x2146', category: ['kit'],
    name: 'Kit 2148-2x2146',
    desc: 'Pá Dosadora + 2x Comedouro de Gato 0,15 lts.',
    badge: 'kit',
    variants: [
      { label: 'Azul / Verde Água', color: '#06b6d4', imgs: ['Kits montados/2148-2x2146/2148-2x2146azulverdeagua/2148-2x2146azulverdeagua.jpg', 'Kits montados/2148-2x2146/2148-2x2146azulverdeagua/2148-2x2146azulverdeagua(1).jpg'] },
      { label: 'Rosa', color: '#f472b6', imgs: ['Kits montados/2148-2x2146/2148-2x2146rosa/2148-2x2146rosa.jpg', 'Kits montados/2148-2x2146/2148-2x2146rosa/2148-2x2146rosa(1).jpg'] },
      { label: 'Vermelho / Roxo', color: '#9f1239', imgs: ['Kits montados/2148-2x2146/2148-2x2146vermellhoroxo/2148-2x2146vermelhoroxo.jpg', 'Kits montados/2148-2x2146/2148-2x2146vermellhoroxo/2148-2x2146vermelhoroxo(1).jpg'] }
    ]
  },
  {
    id: 'kit-2148-2755', code: 'KIT-2148-2755', category: ['kit'],
    name: 'Kit 2148-2755',
    desc: 'Pá Dosadora + Comedouro Postura Ideal 0,200lts.',
    badge: 'kit',
    variants: [
      { label: 'Azul', color: '#3b82f6', imgs: ['Kits montados/2148-2755/2148-2755azul/2148-2755azul.jpg', 'Kits montados/2148-2755/2148-2755azul/2148-2755azul(1).jpg'] },
      { label: 'Rosa', color: '#f472b6', imgs: ['Kits montados/2148-2755/2148-2755rosa/2148-2755rosa.jpg', 'Kits montados/2148-2755/2148-2755rosa/2148-2755rosa(1).jpg'] }
    ]
  },
  {
    id: 'kit-2752-2x2751', code: 'KIT-2752-2x2751', category: ['kit'],
    name: 'Kit 2752-2x2751',
    desc: 'Pá Higienica Carinha de Gato + 2x Comedouro Carinha de Gato 0,14lts.',
    badge: 'kit',
    variants: [
      { label: 'Branco / Azul', color: '#bfdbfe', imgs: ['Kits montados/2752-2x2751/2752-2x2751brancoazul/2752-2x2751brancoazul.jpg', 'Kits montados/2752-2x2751/2752-2x2751brancoazul/2752-2x2751brancoazul(1).jpg'] },
      { label: 'Branco / Rosa', color: '#fbcfe8', imgs: ['Kits montados/2752-2x2751/2752-2x2751brancorosa/2752-2x2751brancorosa.jpg', 'Kits montados/2752-2x2751/2752-2x2751brancorosa/2752-2x2751brancorosa(1).jpg'] },
      { label: 'Cinza / Azul', color: '#94a3b8', imgs: ['Kits montados/2752-2x2751/2752-2x2751cinzaazul/2752-2x2751cinzaazul.jpg', 'Kits montados/2752-2x2751/2752-2x2751cinzaazul/2752-2x2751cinzaazul(1).jpg'] },
      { label: 'Cinza / Rosa', color: '#fca5a5', imgs: ['Kits montados/2752-2x2751/2752-2x2751cinzarosa/2752-2x2751cinzarosa.jpg', 'Kits montados/2752-2x2751/2752-2x2751cinzarosa/2752-2x2751cinzarosa(1).jpg'] },
      { label: 'Preto / Branco', color: '#1f2937', imgs: ['Kits montados/2752-2x2751/2752-2x2751pretobranco/2752-2x2751pretobranco.jpg', 'Kits montados/2752-2x2751/2752-2x2751pretobranco/2752-2x2751pretobranco(1).jpg'] },
      { label: 'Preto / Rosa', color: '#ec4899', imgs: ['Kits montados/2752-2x2751/2752-2x2751pretorosa/2752-2x2751pretorosa.jpg', 'Kits montados/2752-2x2751/2752-2x2751pretorosa/2752-2x2751pretorosa(1).jpg'] }
    ]
  }
];

/* ── STATE ── */
let cart = [];
let activeFilter = 'todos';
let productVariantState = {}; 

/* ── RENDER PRODUCTS ── */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const filtered = activeFilter === 'todos' ? PRODUCTS : PRODUCTS.filter(p => p.category.includes(activeFilter));

  grid.innerHTML = filtered.map(p => {
    const vi = productVariantState[p.id] || 0;
    const v  = p.variants[vi] || p.variants[0];
    const imgs = v.imgs || (v.img ? [v.img] : []);
    const mainImg = imgs[0] || '';
    const cartQty = cartQtyFor(p.id, v.label);

    const swatches = p.variants.map((vv, i) => `
      <button aria-label="Escolher cor ${vv.label}" class="color-swatch ${i===vi?'active':''}"
           style="background:${vv.color}"
           onclick="switchVariant(event,'${p.id}',${i})"
           title="${vv.label}"></button>
    `).join('');

    const hasMultiple = imgs.length > 1;
    const displayStyle = hasMultiple ? 'flex' : 'none';

    const dots = `<div class="gallery-nav" id="nav-${p.id}" aria-hidden="true" style="display: ${displayStyle}">${imgs.map((_,i)=>`<div class="gallery-dot ${i===0?'active':''}" onclick="galleryDot(event,'${p.id}',${i})"></div>`).join('')}</div>`;

    const arrows = `
      <button class="gallery-arrow gallery-prev" id="prev-${p.id}" style="display: ${displayStyle}" aria-label="Imagem anterior" onclick="galleryNav(event,'${p.id}',-1)"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="gallery-arrow gallery-next" id="next-${p.id}" style="display: ${displayStyle}" aria-label="Próxima imagem" onclick="galleryNav(event,'${p.id}',1)"><i class="fa-solid fa-chevron-right"></i></button>
    `;

    const badge = p.badge === 'kit' ? '<span class="product-badge badge-kit">Kit</span>' : p.badge === 'novo' ? '<span class="product-badge badge-novo">Novo</span>' : '';

    const imgTag = mainImg
      ? `<img src="${IMG_BASE}${mainImg}" alt="Foto de ${p.name}" id="pimg-${p.id}" loading="lazy" onclick="openLightbox(this.src)" onerror="this.style.display='none'">`
      : `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem;opacity:.2" aria-hidden="true">🐾</div>`;

    const footer = cartQty > 0
      ? `<div class="qty-control" id="qtyctl-${p.id}">
           <button class="qty-btn" aria-label="Diminuir quantidade" onclick="changeQty('${p.id}','${escJ(v.label)}',-1)"><i class="fa-solid fa-minus" aria-hidden="true"></i></button>
           <span class="qty-val" aria-live="polite">${cartQty}</span>
           <button class="qty-btn" aria-label="Aumentar quantidade" onclick="changeQty('${p.id}','${escJ(v.label)}',1)"><i class="fa-solid fa-plus" aria-hidden="true"></i></button>
         </div>`
      : `<button class="product-cta" id="btn-${p.id}" onclick="addToCart('${p.id}')">
           <i class="fa-solid fa-bag-shopping" aria-hidden="true"></i> Adicionar
         </button>`;

    return `
      <article class="product-card reveal" id="card-${p.id}" data-cat="${p.category.join(' ')}">
        <div class="product-gallery" id="gallery-${p.id}" data-imgs='${JSON.stringify(imgs)}' data-idx="0">
          ${imgTag}
          ${badge}
          <div class="color-swatches">${swatches}</div>
          ${arrows}
          ${dots}
        </div>
        <div class="product-info">
          <div class="product-code" aria-label="Código do produto">${p.code}</div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="variant-label" id="vlabel-${p.id}">${v.label}</div>
          <div class="product-footer">
            <div id="pcta-${p.id}" style="width:100%">${footer}</div>
          </div>
        </div>
      </article>`;
  }).join('');

  initReveal();
}

function escJ(s){ return s.replace(/'/g,"\\'"); }

function switchVariant(e, id, vi) {
  e.stopPropagation();
  productVariantState[id] = vi;
  const p = PRODUCTS.find(x => x.id === id);
  const v = p.variants[vi];
  const imgs = v.imgs || (v.img ? [v.img] : []);
  const mainImg = imgs[0] || '';

  const gallery = document.getElementById('gallery-' + id);
  if (gallery) {
    gallery.dataset.imgs = JSON.stringify(imgs);
    gallery.dataset.idx  = '0';
    const img = document.getElementById('pimg-' + id);
    if (img) { img.style.display=''; img.src = mainImg ? IMG_BASE+mainImg : ''; }

    const hasMultiple = imgs.length > 1;
    const displayStyle = hasMultiple ? 'flex' : 'none';

    const nav = document.getElementById('nav-' + id);
    if (nav) {
      nav.style.display = displayStyle;
      nav.innerHTML = imgs.map((_,i)=>`<div class="gallery-dot ${i===0?'active':''}" onclick="galleryDot(event,'${id}',${i})"></div>`).join('');
    }

    const prev = document.getElementById('prev-' + id);
    const next = document.getElementById('next-' + id);
    if (prev) prev.style.display = displayStyle;
    if (next) next.style.display = displayStyle;
  }

  const lbl = document.getElementById('vlabel-' + id);
  if (lbl) lbl.textContent = v.label;

  const swatches = document.querySelectorAll(`#card-${id} .color-swatch`);
  swatches.forEach((s,i)=>s.classList.toggle('active',i===vi));

  updateProductFooter(id);
}

function galleryNav(e, id, dir) {
  e.stopPropagation();
  const gallery = document.getElementById('gallery-' + id);
  const imgs = JSON.parse(gallery.dataset.imgs || '[]');
  if (!imgs.length) return;
  let idx = (parseInt(gallery.dataset.idx) + dir + imgs.length) % imgs.length;
  gallery.dataset.idx = idx;
  const img = document.getElementById('pimg-' + id);
  if (img) img.src = IMG_BASE + imgs[idx];
  gallery.querySelectorAll('.gallery-dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
}

function galleryDot(e, id, idx) {
  e.stopPropagation();
  const gallery = document.getElementById('gallery-' + id);
  const imgs = JSON.parse(gallery.dataset.imgs || '[]');
  if (!imgs[idx]) return;
  gallery.dataset.idx = idx;
  const img = document.getElementById('pimg-' + id);
  if (img) img.src = IMG_BASE + imgs[idx];
  gallery.querySelectorAll('.gallery-dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
}

/* ── FILTER ── */
function filterProducts(cat, el) {
  activeFilter = cat;
  document.querySelectorAll('.filter-tab').forEach(b=>{
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  el.classList.add('active');
  el.setAttribute('aria-selected', 'true');
  renderProducts();
}

/* ── CART LOGIC ── */
function cartQtyFor(id, variant) {
  const item = cart.find(x => x.id === id && x.variant === variant);
  return item ? item.qty : 0;
}

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const vi = productVariantState[id] || 0;
  const v  = p.variants[vi];
  const imgs = v.imgs || (v.img ? [v.img] : []);

  const existing = cart.find(x => x.id === id && x.variant === v.label);
  if (existing) { existing.qty++; }
  else { cart.push({ id, name: p.name, code: p.code, variant: v.label, img: imgs[0]||'', qty: 1 }); }

  updateCartUI();
  updateProductFooter(id);
  showToast(`🛒 ${p.name} adicionado!`);
  bumpBadge();
}

function changeQty(id, variant, delta) {
  const item = cart.find(x => x.id === id && x.variant === variant);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => !(x.id === id && x.variant === variant));
  updateCartUI();
  updateProductFooter(id);
}

function removeCartItem(id, variant) {
  cart = cart.filter(x => !(x.id === id && x.variant === variant));
  updateCartUI();
  updateProductFooter(id);
}

function updateProductFooter(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const vi = productVariantState[id] || 0;
  const v  = p.variants[vi];
  const qty = cartQtyFor(id, v.label);
  const el  = document.getElementById('pcta-' + id);
  if (!el) return;

  if (qty > 0) {
    el.innerHTML = `<div class="qty-control" id="qtyctl-${id}">
      <button class="qty-btn" aria-label="Diminuir" onclick="changeQty('${id}','${escJ(v.label)}',-1)"><i class="fa-solid fa-minus"></i></button>
      <span class="qty-val" aria-live="polite">${qty}</span>
      <button class="qty-btn" aria-label="Aumentar" onclick="changeQty('${id}','${escJ(v.label)}',1)"><i class="fa-solid fa-plus"></i></button>
    </div>`;
  } else {
    el.innerHTML = `<button class="product-cta" id="btn-${id}" onclick="addToCart('${id}')">
      <i class="fa-solid fa-bag-shopping"></i> Adicionar
    </button>`;
  }
}

function updateCartUI() {
  const body = document.getElementById('cartBody');
  const empty = document.getElementById('cartEmptyState');
  const totalCount = document.getElementById('cartCount');
  const badge = document.getElementById('cartBadge');
  const checkoutBtn = document.getElementById('checkoutBtn');

  const totalQty = cart.reduce((a,c)=>a+c.qty,0);
  totalCount.textContent = totalQty + (totalQty===1?' item':' itens');
  badge.textContent = totalQty;
  badge.classList.toggle('visible', totalQty>0);
  checkoutBtn.disabled = totalQty===0;

  if (cart.length===0) {
    document.querySelectorAll('.cart-item').forEach(el=>el.remove());
    empty.style.display='flex';
    return;
  }
  empty.style.display='none';
  document.querySelectorAll('.cart-item').forEach(el=>el.remove());

  cart.forEach(item=>{
    const div = document.createElement('div');
    div.className='cart-item';
    div.id=`ci-${item.id}-${encodeURIComponent(item.variant)}`;
    div.innerHTML=`
      <img class="cart-item-img" src="${item.img?IMG_BASE+item.img:''}" alt="" onerror="this.style.display='none'">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variant">${item.variant}</div>
        <div class="cart-item-controls">
          <button class="ci-qty-btn" aria-label="Diminuir" onclick="changeQty('${item.id}','${escJ(item.variant)}',-1)"><i class="fa-solid fa-minus"></i></button>
          <span class="ci-qty" aria-live="polite">${item.qty}</span>
          <button class="ci-qty-btn" aria-label="Aumentar" onclick="changeQty('${item.id}','${escJ(item.variant)}',1)"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <button class="cart-item-remove" aria-label="Remover item" onclick="removeCartItem('${item.id}','${escJ(item.variant)}')"><i class="fa-solid fa-xmark"></i></button>`;
    body.insertBefore(div, empty);
  });
}

function sendToWhatsApp() {
  if (!cart.length) return;
  const note = document.getElementById('cartNote').value.trim();
  let msg = '*Olá! Gostaria de fazer um pedido pela BasePet Curitiba:*\n\n';
  cart.forEach((item,i)=>{ msg += `${i+1}. *${item.name}*\n   Cor/Variação: ${item.variant}\n   Qtd: ${item.qty}\n\n`; });
  if (note) msg += `📝 *Observação:* ${note}\n\n`;
  msg += 'Aguardo confirmação de disponibilidade e valor. Obrigado(a)! 🐾';
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ── UI CONTROLS ── */
function toggleCart() {
  const sb = document.getElementById('cartSidebar');
  const isOpen = sb.classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
  document.body.classList.toggle('no-scroll', isOpen);
}
function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.classList.remove('no-scroll');
}
function bumpBadge() {
  const b = document.getElementById('cartBadge');
  b.classList.remove('bump');
  void b.offsetWidth;
  b.classList.add('bump');
}
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  lb.classList.add('open');
  document.body.classList.add('no-scroll');
}
function closeLightbox() { 
  document.getElementById('lightbox').classList.remove('open'); 
  document.body.classList.remove('no-scroll');
}
function showToast(msg, dur=2200) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), dur);
}
function toggleMobileMenu() {
  const m = document.getElementById('mobileMenu');
  const toggle = document.getElementById('navToggle');
  const open = m.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  document.body.classList.toggle('no-scroll', open);
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('navToggle').classList.remove('open');
  document.getElementById('navToggle').setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
}

/* ── EVENT LISTENERS E INIT ── */
let scrollTimeout;
window.addEventListener('scroll', ()=>{
  if(scrollTimeout) return;
  scrollTimeout = setTimeout(() => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
    scrollTimeout = null;
  }, 50);
}, {passive:true});

function initReveal() {
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, {threshold:.1});
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el));
}

renderProducts();
initReveal();