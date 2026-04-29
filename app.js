// ---------- Icon library ----------
const ICONS = {
  wallet: '<path d="M3 7h16a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/><path d="M3 7V5a2 2 0 012-2h12v4"/><circle cx="17" cy="13.5" r="1.2"/>',
  cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M3 13h18"/>',
  piggy: '<path d="M4 13c0-3 3-6 7-6s7 3 7 6v1c0 1-1 2-1 2v2h-2v-1c-1 .3-2 .3-3 0v1H9v-2H4v-3z"/><circle cx="14" cy="12" r=".6"/><path d="M19 12h1.5"/>',
  bank: '<path d="M3 21h18"/><path d="M4 10h16"/><path d="M12 3l9 7H3l9-7z"/><path d="M6 10v10M10 10v10M14 10v10M18 10v10"/>',
  house: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
  basket: '<path d="M5 10l3-6M19 10l-3-6"/><path d="M3 10h18l-2 10H5L3 10z"/><path d="M10 14v4M14 14v4"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M3 4h2l3 12h11l2-8H6"/>',
  utensils: '<path d="M7 3v18"/><path d="M4 3v5a3 3 0 006 0V3"/><path d="M16 14v7"/><path d="M16 3c-2 0-3 3-3 6s1 5 3 5 3-2 3-5-1-6-3-6z"/>',
  coffee: '<path d="M17 8h1a4 4 0 110 8h-1"/><path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"/><path d="M7 1v3M11 1v3M15 1v3"/>',
  car: '<path d="M5 17h14"/><path d="M7 17l1-5h8l1 5"/><path d="M7 12l1-4h8l1 4"/><circle cx="8" cy="18" r="1.2"/><circle cx="16" cy="18" r="1.2"/>',
  fuel: '<path d="M4 21V5a2 2 0 012-2h6a2 2 0 012 2v16"/><path d="M4 11h10"/><path d="M14 8l3 3v7a2 2 0 002 2"/><path d="M3 21h12"/>',
  plane: '<path d="M10 16v4l2 2 2-2v-4l7-4v-2l-7 2V6c0-1-1-3-2-3s-2 2-2 3v6l-7-2v2z"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
  gift: '<rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9"/><path d="M12 8v13"/><path d="M12 8c-1-3 1-5 3-5s3 1 3 3-2 2-3 2h-3z"/><path d="M12 8c1-3-1-5-3-5s-3 1-3 3 2 2 3 2h3z"/>',
  heart: '<path d="M20.8 8.6a5 5 0 00-8.8-3A5 5 0 003.2 8.6c0 5.5 8.8 10.4 8.8 10.4s8.8-4.9 8.8-10.4z"/>',
  thermometer: '<path d="M14 14V4a2 2 0 00-4 0v10a4 4 0 104 0z"/><path d="M12 10v6"/>',
  book: '<path d="M4 4h11a3 3 0 013 3v13a2 2 0 00-2-2H4z"/><path d="M4 4a2 2 0 00-2 2v14a2 2 0 012-2"/>',
  phone: '<path d="M22 16.9v3a2 2 0 01-2.2 2A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1 1 .3 2 .7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.8.4 1.8.6 2.8.7a2 2 0 011.8 2z"/>',
  shirt: '<path d="M20 7l-4-3-2 2-2 1-2-1-2-2-4 3 3 3v10h10V10l3-3z"/>',
  gym: '<path d="M6 4v16M4 6h4M4 18h4M18 4v16M16 6h4M16 18h4M8 12h8"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  pet: '<circle cx="5" cy="10" r="1.8"/><circle cx="9" cy="6" r="1.8"/><circle cx="15" cy="6" r="1.8"/><circle cx="19" cy="10" r="1.8"/><path d="M7 20c0-3 2-6 5-6s5 3 5 6c0 1.3-1 2-2 2H9c-1 0-2-.7-2-2z"/>',
  tag: '<path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L2 12V2h10l8.6 8.6a2 2 0 010 2.8z"/><circle cx="7" cy="7" r="1"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><circle cx="9" cy="10" r=".6"/><circle cx="15" cy="10" r=".6"/>',
};
const ICON_KEYS = Object.keys(ICONS);

function iconSvg(name, color) {
  const path = ICONS[name] || ICONS.tag;
  const c = color || 'currentColor';
  return `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

const COLORS = [
  '#7aa6ff', '#f4a6c0', '#e88a95', '#8dc9e8', '#f5b895',
  '#e6c767', '#8acca5', '#e8a06d', '#c79de0', '#7fc3b5',
];

// ---------- Data ----------
const STORAGE_KEY = 'spese_data_v1';

function uid() {
  return (crypto && crypto.randomUUID) ? crypto.randomUUID()
    : Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function defaultData() {
  return {
    categories: [
      { id: uid(), name: 'Stipendio',     type: 'income',  icon: 'briefcase',   color: '#8acca5' },
      { id: uid(), name: 'Altre entrate', type: 'income',  icon: 'wallet',      color: '#7fc3b5' },
      { id: uid(), name: 'Alimentari',    type: 'expense', icon: 'basket',      color: '#f4a6c0' },
      { id: uid(), name: 'Casa',          type: 'expense', icon: 'house',       color: '#7aa6ff' },
      { id: uid(), name: 'Bollette',      type: 'expense', icon: 'bolt',        color: '#e6c767' },
      { id: uid(), name: 'Trasporti',     type: 'expense', icon: 'car',         color: '#8dc9e8' },
      { id: uid(), name: 'Ristorante',    type: 'expense', icon: 'utensils',   color: '#7fc3b5' },
      { id: uid(), name: 'Salute',        type: 'expense', icon: 'thermometer', color: '#e88a95' },
      { id: uid(), name: 'Svago',         type: 'expense', icon: 'gift',        color: '#c79de0' },
    ],
    entries: [],
    lastBackup: null,
  };
}

function guessIconFor(name, type) {
  const n = (name || '').toLowerCase();
  if (/spesa|alimentar|supermercat/.test(n)) return 'basket';
  if (/affitto|casa|mutuo/.test(n)) return 'house';
  if (/bollett|luce|gas|energia/.test(n)) return 'bolt';
  if (/trasport|auto/.test(n)) return 'car';
  if (/benzina|carburante/.test(n)) return 'fuel';
  if (/svago|divertiment|cinema/.test(n)) return 'gift';
  if (/ristorant|pizza|bar/.test(n)) return 'utensils';
  if (/caff/.test(n)) return 'coffee';
  if (/salute|medic|dottor|farmac/.test(n)) return 'thermometer';
  if (/stipendio|lavoro|salari/.test(n)) return 'briefcase';
  if (/risparm|investiment/.test(n)) return 'piggy';
  if (/tass|imposte|banca/.test(n)) return 'bank';
  if (/viaggio|vacanz|volo/.test(n)) return 'plane';
  if (/telefon|internet/.test(n)) return 'phone';
  if (/libr|studio|corso|scuola/.test(n)) return 'book';
  if (/vestit|abbigliament/.test(n)) return 'shirt';
  if (/palestra|sport/.test(n)) return 'gym';
  if (/musica/.test(n)) return 'music';
  if (/animal/.test(n)) return 'pet';
  return type === 'income' ? 'wallet' : 'tag';
}

function migrate(d) {
  if (!d.categories) d.categories = [];
  if (!d.entries) d.entries = [];
  if (d.lastBackup === undefined) d.lastBackup = null;
  for (const c of d.categories) {
    if (!c.icon) c.icon = guessIconFor(c.name, c.type);
    if (!c.color) c.color = c.type === 'income' ? '#8acca5' : '#f4a6c0';
    if (c.excluded === undefined) c.excluded = false;
  }
  return d;
}

let data;
try {
  const raw = localStorage.getItem(STORAGE_KEY);
  data = raw ? migrate(JSON.parse(raw)) : defaultData();
} catch { data = defaultData(); }

function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }

// ---------- State ----------
const state = {
  period: 'month',
  refDate: new Date(),
  expanded: new Set(),
  sort: 'category',
  modal: null,
};

// ---------- Helpers ----------
const MONTHS = ['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'];

function fmtCurrency(n) {
  return n.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
}

function ymd(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function ymdHms(d) {
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const ss = String(d.getSeconds()).padStart(2, '0');
  return `${ymd(d)}_${hh}-${mm}-${ss}`;
}

function parseYmd(s) {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function periodLabel() {
  const d = state.refDate;
  switch (state.period) {
    case 'year': return String(d.getFullYear());
    case 'month': return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    case 'day': return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
    case 'all': return 'Tutto';
  }
}

function shiftPeriod(dir) {
  const d = new Date(state.refDate);
  switch (state.period) {
    case 'year': d.setFullYear(d.getFullYear() + dir); break;
    case 'month': d.setMonth(d.getMonth() + dir); break;
    case 'day': d.setDate(d.getDate() + dir); break;
    case 'all': return;
  }
  state.refDate = d;
}

function inPeriod(entry) {
  if (state.period === 'all') return true;
  const d = parseYmd(entry.date);
  const r = state.refDate;
  if (state.period === 'year') return d.getFullYear() === r.getFullYear();
  if (state.period === 'month') return d.getFullYear() === r.getFullYear() && d.getMonth() === r.getMonth();
  if (state.period === 'day') return ymd(d) === ymd(r);
  return true;
}

function catById(id) { return data.categories.find(c => c.id === id); }

function totals() {
  let income = 0, expense = 0;
  for (const e of data.entries) {
    if (!inPeriod(e)) continue;
    const c = catById(e.categoryId);
    if (!c || c.excluded) continue;
    if (c.type === 'income') income += e.amount;
    else expense += e.amount;
  }
  return { income, expense, balance: income - expense };
}

// ---------- CSV backup ----------
function csvEscape(v) {
  const s = String(v == null ? '' : v);
  return /[",;\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function buildCsv(headers, rows) {
  return '﻿' + [headers, ...rows].map(r => r.map(csvEscape).join(';')).join('\n');
}

function downloadFile(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  URL.revokeObjectURL(url);
}

function exportCsvBackup() {
  const ts = ymdHms(new Date());

  const catHeaders = ['id', 'nome', 'tipo', 'icona', 'colore', 'escludi'];
  const catRows = data.categories.map(c => [c.id, c.name, c.type, c.icon || '', c.color || '', c.excluded ? '1' : '0']);
  downloadFile(buildCsv(catHeaders, catRows),
    `Spese/spese-${ts}-categorie.csv`, 'text/csv;charset=utf-8');

  const entHeaders = ['id', 'data', 'categoria_id', 'categoria_nome', 'tipo', 'importo', 'nota'];
  const sorted = [...data.entries].sort((a, b) => a.date.localeCompare(b.date));
  const entRows = sorted.map(e => {
    const c = catById(e.categoryId);
    return [
      e.id, e.date, e.categoryId,
      c ? c.name : '',
      c ? (c.type === 'income' ? 'entrata' : 'uscita') : '',
      e.amount.toFixed(2).replace('.', ','),
      (e.note || '').replace(/\r?\n/g, ' '),
    ];
  });
  downloadFile(buildCsv(entHeaders, entRows),
    `Spese/spese-${ts}-movimenti.csv`, 'text/csv;charset=utf-8');

  data.lastBackup = new Date().toISOString();
  save();
  if (state.modal?.type === 'settings') render();
}

function parseAmount(s) {
  if (s == null) return NaN;
  let str = String(s).trim();
  if (!str) return NaN;
  str = str.replace(/[^\d.,-]/g, '');
  if (str.startsWith('-')) str = str.slice(1);
  str = str.replace(/-/g, '');
  const lastComma = str.lastIndexOf(',');
  const lastDot = str.lastIndexOf('.');
  const hasComma = lastComma >= 0;
  const hasDot = lastDot >= 0;
  let n;
  if (!hasComma && !hasDot) {
    n = str;
  } else if (hasComma && hasDot) {
    if (lastComma > lastDot) {
      // Italian: . migliaia, , decimale
      n = str.replace(/\./g, '').replace(',', '.');
    } else {
      // English: , migliaia, . decimale
      n = str.replace(/,/g, '');
    }
  } else if (hasComma) {
    const numCommas = (str.match(/,/g) || []).length;
    const afterComma = str.length - lastComma - 1;
    // "2,100" o "1,234,567" → migliaia; "2,5" o "50,00" → decimale
    n = (numCommas > 1 || afterComma === 3) ? str.replace(/,/g, '') : str.replace(',', '.');
  } else {
    const numDots = (str.match(/\./g) || []).length;
    const afterDot = str.length - lastDot - 1;
    // "2.100" o "1.234.567" → migliaia; "2.5" o "50.00" → decimale
    n = (numDots > 1 || afterDot === 3) ? str.replace(/\./g, '') : str;
  }
  const v = parseFloat(n);
  return isFinite(v) ? Math.abs(v) : NaN;
}

function normalizeDate(s) {
  if (!s) return null;
  s = String(s).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  let m = s.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})$/);
  if (m) return `${m[3]}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`;
  m = s.match(/^(\d{4})[\/\-\.](\d{1,2})[\/\-\.](\d{1,2})/);
  if (m) return `${m[1]}-${m[2].padStart(2,'0')}-${m[3].padStart(2,'0')}`;
  return null;
}

function parseCsv(text) {
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  const firstNewline = text.indexOf('\n');
  const firstLine = firstNewline >= 0 ? text.slice(0, firstNewline) : text;
  const semi = (firstLine.match(/;/g) || []).length;
  const comma = (firstLine.match(/,/g) || []).length;
  const delim = semi >= comma ? ';' : ',';

  const rows = [];
  let current = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += ch;
    } else {
      if (ch === '"') inQuotes = true;
      else if (ch === delim) { current.push(field); field = ''; }
      else if (ch === '\n' || ch === '\r') {
        if (ch === '\r' && text[i + 1] === '\n') i++;
        current.push(field);
        if (current.some(x => x !== '')) rows.push(current);
        current = []; field = '';
      } else field += ch;
    }
  }
  if (field !== '' || current.length > 0) {
    current.push(field);
    if (current.some(x => x !== '')) rows.push(current);
  }
  return rows;
}

function importCsvBackup(files) {
  const list = Array.from(files || []);
  console.group('[import] Avvio ripristino backup');
  console.log('[import] file ricevuti:', list.length,
    list.map(f => ({ name: f.name, size: f.size, type: f.type })));
  if (list.length === 0) { console.warn('[import] nessun file'); console.groupEnd(); return; }
  const parsed = [];
  let done = 0;
  for (const f of list) {
    const reader = new FileReader();
    reader.onload = () => {
      const raw = reader.result;
      console.log(`[import] letto "${f.name}" (${raw.length} char). Primi 200:`,
        raw.slice(0, 200));
      try {
        const rows = parseCsv(raw);
        console.log(`[import] "${f.name}" → ${rows.length} righe parsate (inclusa intestazione)`);
        if (rows.length > 0) console.log(`[import] header:`, rows[0]);
        if (rows.length > 1) console.log(`[import] prima riga dati:`, rows[1]);
        parsed.push({ name: f.name, rows });
      } catch (err) {
        console.error(`[import] errore parsing "${f.name}":`, err);
        parsed.push({ name: f.name, error: String(err) });
      }
      reader.onerror = null;
      done++;
      if (done === list.length) finishCsvImport(parsed);
    };
    reader.onerror = () => {
      console.error(`[import] FileReader errore su "${f.name}":`, reader.error);
      parsed.push({ name: f.name, error: 'FileReader: ' + String(reader.error) });
      done++;
      if (done === list.length) finishCsvImport(parsed);
    };
    reader.readAsText(f);
  }
}

function finishCsvImport(parsed) {
  console.log('[import] finishCsvImport, file parsati:', parsed.length);
  let newCats = null, newEntries = null;
  let invalidRows = 0;
  const errors = [];
  for (const p of parsed) {
    console.group(`[import] analisi file "${p.name}"`);
    if (p.error) {
      console.error('[import] errore:', p.error);
      errors.push(`${p.name}: ${p.error}`);
      console.groupEnd(); continue;
    }
    const rows = p.rows;
    if (!rows || rows.length === 0) {
      console.warn('[import] file vuoto');
      errors.push(`${p.name}: vuoto`);
      console.groupEnd(); continue;
    }
    const headers = rows[0].map(s => s.toLowerCase().trim());
    const idx = (k) => headers.indexOf(k);
    const body = rows.slice(1);
    console.log('[import] header normalizzati:', headers);
    console.log('[import] righe dati:', body.length);

    const isCategories = idx('nome') >= 0 && idx('tipo') >= 0 && idx('importo') < 0;
    const isEntries = idx('data') >= 0 && idx('importo') >= 0;
    console.log('[import] riconosciuto come:', isCategories ? 'CATEGORIE' : isEntries ? 'MOVIMENTI' : 'SCONOSCIUTO');

    if (isCategories) {
      newCats = body.map(r => ({
        id: (r[idx('id')] || '').trim() || uid(),
        name: (r[idx('nome')] || '').trim(),
        type: ((r[idx('tipo')] || 'expense').trim() === 'income' ? 'income' : 'expense'),
        icon: (r[idx('icona')] || '').trim() || 'tag',
        color: (r[idx('colore')] || '').trim() || '#8acca5',
        excluded: ['1','true','si','sì','yes'].includes((r[idx('escludi')] || '').trim().toLowerCase()),
      })).filter(c => c.name);
      console.log(`[import] ${newCats.length} categorie estratte:`, newCats);
    } else if (isEntries) {
      const raw = body.map((r, i) => ({
        _row: i + 2,
        id: (r[idx('id')] || '').trim() || uid(),
        rawDate: (r[idx('data')] || '').trim(),
        date: normalizeDate(r[idx('data')] || ''),
        categoryId: (r[idx('categoria_id')] || '').trim(),
        _catName: (r[idx('categoria_nome')] || '').trim(),
        rawAmount: r[idx('importo')] || '',
        amount: parseAmount(r[idx('importo')]),
        note: (r[idx('nota')] || '').trim(),
        createdAt: Date.now(),
      }));
      const bad = raw.filter(e => !e.date || !isFinite(e.amount) || e.amount <= 0);
      invalidRows += bad.length;
      if (bad.length) {
        console.warn(`[import] ${bad.length} righe scartate:`,
          bad.map(b => ({ riga: b._row, rawDate: b.rawDate, rawAmount: b.rawAmount, amount: b.amount, dateNorm: b.date })));
        const sample = bad.slice(0, 3).map(b =>
          `riga ${b._row}: data="${b.rawDate}" importo="${b.rawAmount}"`).join(' | ');
        errors.push(`${p.name}: ${bad.length} righe scartate. Es.: ${sample}`);
      }
      newEntries = raw.filter(e => e.date && isFinite(e.amount) && e.amount > 0);
      console.log(`[import] ${newEntries.length} movimenti validi (primi 3):`, newEntries.slice(0, 3));
    } else {
      console.error('[import] header non riconosciuto:', headers);
      errors.push(`${p.name}: formato non riconosciuto. Header letto: [${headers.join(', ')}]`);
    }
    console.groupEnd();
  }

  if (!newCats && !newEntries) {
    console.warn('[import] nessun dato valido');
    console.groupEnd();
    alert(errors.length ? ('Errori:\n' + errors.join('\n')) : 'Nessun file CSV valido trovato.');
    return;
  }

  let summary = 'Verrà importato:\n';
  if (newCats) summary += `• ${newCats.length} categorie (sostituiscono quelle attuali)\n`;
  if (newEntries) summary += `• ${newEntries.length} movimenti (sostituiscono quelli attuali)\n`;
  if (errors.length) summary += '\nAvvisi:\n' + errors.join('\n') + '\n';
  summary += '\nContinuare?';
  if (!confirm(summary)) {
    console.log('[import] annullato dall\'utente');
    console.groupEnd();
    return;
  }

  console.log('[import] stato categorie PRIMA:', data.categories.length, data.categories);
  console.log('[import] stato movimenti PRIMA:', data.entries.length);

  if (newCats) data.categories = newCats;

  let orphans = 0, resolvedByName = 0;
  const orphanExamples = [];
  if (newEntries) {
    const cats = data.categories;
    console.log('[import] risoluzione categoria_id su', cats.length, 'categorie disponibili');
    data.entries = newEntries.map(e => {
      let catId = e.categoryId;
      if (!cats.find(c => c.id === catId)) {
        const byName = cats.find(c => c.name === e._catName);
        if (byName) { catId = byName.id; resolvedByName++; }
        else {
          orphans++;
          if (orphanExamples.length < 5) {
            orphanExamples.push({ id_cercato: e.categoryId, nome_cercato: e._catName, data: e.date });
          }
        }
      }
      return {
        id: e.id, date: e.date, categoryId: catId,
        amount: Math.round(e.amount * 100) / 100,
        note: e.note, createdAt: e.createdAt,
      };
    });
  }

  console.log(`[import] risoluzione: ${resolvedByName} per nome, ${orphans} orfani`);
  if (orphanExamples.length) console.warn('[import] esempi orfani:', orphanExamples);
  console.log('[import] stato categorie DOPO:', data.categories.length);
  console.log('[import] stato movimenti DOPO:', data.entries.length);

  save();
  state.period = 'all';
  state.expanded.clear();
  render();
  console.log('[import] render completato, filtro impostato su "Tutto"');
  console.groupEnd();

  let done = 'Import completato.';
  if (newCats) done += `\n• ${newCats.length} categorie`;
  if (newEntries) {
    done += `\n• ${newEntries.length} movimenti importati`;
    if (resolvedByName) done += `\n  - ${resolvedByName} abbinati per nome categoria`;
    if (orphans) done += `\n  - ${orphans} con categoria_id non trovato (vedi console per dettagli)`;
  }
  if (invalidRows) done += `\n• ${invalidRows} righe scartate per data/importo non validi (vedi console)`;
  done += '\n\nFiltro impostato su "Tutto".';
  alert(done);
}

function daysSinceBackup() {
  if (!data.lastBackup) return null;
  const t = new Date(data.lastBackup).getTime();
  if (!isFinite(t)) return null;
  return Math.floor((Date.now() - t) / 86400000);
}

function backupStatusLabel() {
  const d = daysSinceBackup();
  if (d === null) return 'Mai eseguito';
  if (d === 0) return 'Ultimo backup: oggi';
  if (d === 1) return 'Ultimo backup: ieri';
  return `Ultimo backup: ${d} giorni fa`;
}

// ---------- DOM helper ----------
function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) {
    if (k == null || k === false) continue;
    el.append(k.nodeType ? k : document.createTextNode(k));
  }
  return el;
}

// ---------- Render ----------
const app = document.getElementById('app');
const CHEV_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
const GEAR_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.4 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/></svg>';

function render() {
  app.innerHTML = '';
  app.append(renderTop());
  const banner = renderBackupBanner();
  if (banner) app.append(banner);
  app.append(renderBalancePill());
  const pie = renderPieChart();
  if (pie) app.append(pie);
  app.append(renderSortToggle());
  app.append(state.sort === 'date' ? renderEntriesByDate() : renderCategoriesView());
  app.append(renderFabs());
  if (state.modal) app.append(renderModal());
  save();
  updatePersistStatusUI();
}

function renderTop() {
  const frag = document.createDocumentFragment();
  frag.append(h('div', { class: 'period' },
    h('div', { class: 'period-spacer' }),
    ...['day','month','year','all'].map(p =>
      h('button', {
        class: state.period === p ? 'active' : '',
        onclick: () => { state.period = p; render(); }
      }, {day:'Giorno', month:'Mese', year:'Anno', all:'Tutto'}[p])
    ),
    h('button', { class: 'icon-btn', title: 'Impostazioni',
      onclick: openSettings, html: GEAR_ICON })
  ));
  frag.append(state.period !== 'all'
    ? h('div', { class: 'range-nav' },
        h('button', { onclick: () => { shiftPeriod(-1); render(); } }, '‹'),
        h('div', { class: 'label' }, periodLabel()),
        h('button', { onclick: () => { shiftPeriod(1); render(); } }, '›'))
    : h('div', { class: 'range-nav' },
        h('div', { class: 'label' }, 'Tutti i periodi')));
  return frag;
}

function renderBackupBanner() {
  if (data.entries.length === 0) return null;
  const days = daysSinceBackup();
  const never = days === null;
  if (!never && days < 7) return null;
  const danger = never || days >= 30;
  const msg = never
    ? 'Nessun backup salvato. Tocca per scaricarne uno.'
    : `${backupStatusLabel()}. Consigliato un nuovo backup.`;
  return h('div', {
    class: 'backup-banner' + (danger ? ' danger' : ''),
    onclick: openSettings,
  },
    h('span', { html: '&#9888;' }),
    h('span', {}, msg),
    h('span', { class: 'chev' }, '›')
  );
}

function renderBalancePill() {
  const t = totals();
  const cls = t.balance > 0 ? 'positive' : (t.balance === 0 ? 'zero' : '');
  return h('div', { class: 'balance-pill ' + cls },
    `Saldo ${fmtCurrency(t.balance)}`);
}

function renderPieChart() {
  const byCat = new Map();
  let incomeTotal = 0;
  let savings = 0;
  for (const e of data.entries) {
    if (!inPeriod(e)) continue;
    const c = catById(e.categoryId);
    if (!c) continue;
    if (c.excluded) {
      savings += (c.type === 'income' ? -e.amount : e.amount);
      continue;
    }
    if (c.type === 'income') { incomeTotal += e.amount; continue; }
    byCat.set(c.id, (byCat.get(c.id) || 0) + e.amount);
  }
  const hasExcluded = data.categories.some(c => c.excluded);
  if (byCat.size === 0 && !hasExcluded) return null;

  const slices = [...byCat].map(([id, amount]) => ({ cat: catById(id), amount }));
  slices.sort((a, b) => b.amount - a.amount);
  const total = slices.reduce((s, x) => s + x.amount, 0);

  const size = 280, r = 80, sw = 28, cx = size / 2, cy = size / 2;
  const circ = 2 * Math.PI * r;
  const ICON_SIZE = 20;
  const ICON_MIN_FRAC = 0.05;
  const LINE_LEN = 14;
  const lineInner = r + sw / 2;
  const lineOuter = lineInner + LINE_LEN;
  const iconRadius = lineOuter + ICON_SIZE / 2;

  let offset = 0;
  const circles = [];
  const connectors = [];
  const icons = [];
  for (const s of slices) {
    const frac = s.amount / total;
    const len = frac * circ;
    // tiny gap so adjacent slices are visually separated
    const gap = slices.length > 1 ? Math.min(2, len * 0.15) : 0;
    const drawn = Math.max(0.01, len - gap);
    circles.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none"
       stroke="${s.cat.color}" stroke-width="${sw}"
       stroke-dasharray="${drawn} ${circ - drawn}"
       stroke-dashoffset="${-offset}"
       transform="rotate(-90 ${cx} ${cy})"/>`);
    if (frac >= ICON_MIN_FRAC) {
      const midAngle = ((offset + len / 2) / circ) * 2 * Math.PI - Math.PI / 2;
      const cosA = Math.cos(midAngle);
      const sinA = Math.sin(midAngle);
      const x1 = cx + lineInner * cosA;
      const y1 = cy + lineInner * sinA;
      const x2 = cx + lineOuter * cosA;
      const y2 = cy + lineOuter * sinA;
      const ix = cx + iconRadius * cosA;
      const iy = cy + iconRadius * sinA;
      connectors.push(`<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${s.cat.color}" stroke-width="1.5" stroke-linecap="round"/>`);
      const iconPath = ICONS[s.cat.icon] || ICONS.tag;
      icons.push(`<svg x="${(ix - ICON_SIZE / 2).toFixed(2)}" y="${(iy - ICON_SIZE / 2).toFixed(2)}" width="${ICON_SIZE}" height="${ICON_SIZE}" viewBox="0 0 24 24" fill="none" stroke="${s.cat.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPath}</svg>`);
    }
    offset += len;
  }

  const centerText = incomeTotal > 0
    ? `<text x="${cx}" y="${cy - 26}" text-anchor="middle" class="label">Entrate</text>
       <text x="${cx}" y="${cy - 10}" text-anchor="middle" class="amount-in">${fmtCurrency(incomeTotal)}</text>
       <text x="${cx}" y="${cy + 14}" text-anchor="middle" class="label">Uscite</text>
       <text x="${cx}" y="${cy + 30}" text-anchor="middle" class="amount">${fmtCurrency(total)}</text>`
    : `<text x="${cx}" y="${cy - 6}" text-anchor="middle" class="label">Uscite</text>
       <text x="${cx}" y="${cy + 14}" text-anchor="middle" class="amount">${fmtCurrency(total)}</text>`;

  const svg = `<svg viewBox="0 0 ${size} ${size}">
    ${circles.join('')}
    ${connectors.join('')}
    ${icons.join('')}
    ${centerText}
  </svg>`;

  const kids = [];
  if (byCat.size > 0) kids.push(h('div', { class: 'pie-chart', html: svg }));
  if (hasExcluded) {
    kids.push(h('div', { class: 'savings-box' },
      h('div', { class: 's-label' }, 'Risparmi'),
      h('div', { class: 's-amount' + (savings < 0 ? ' negative' : '') }, fmtCurrency(savings))
    ));
  }
  return h('div', { class: 'pie-wrap' }, ...kids);
}

function renderSortToggle() {
  return h('div', { class: 'sort-toggle' },
    h('span', { class: 'sort-label' }, 'Ordina'),
    h('button', {
      class: state.sort === 'category' ? 'active' : '',
      onclick: () => { state.sort = 'category'; render(); }
    }, 'Categoria'),
    h('button', {
      class: state.sort === 'date' ? 'active' : '',
      onclick: () => { state.sort = 'date'; render(); }
    }, 'Data')
  );
}

function renderEntriesByDate() {
  const entries = data.entries.filter(inPeriod);
  if (entries.length === 0) {
    return h('div', { class: 'empty' },
      'Nessun movimento in questo periodo.',
      h('br'),
      'Usa i pulsanti in basso per aggiungere.');
  }
  const sorted = [...entries].sort((a, b) =>
    b.date.localeCompare(a.date) || (b.createdAt || 0) - (a.createdAt || 0));

  const wrap = h('div', {});
  let currentDate = null;
  for (const e of sorted) {
    if (e.date !== currentDate) {
      currentDate = e.date;
      const d = parseYmd(currentDate);
      const dateStr = d.toLocaleDateString('it-IT', { weekday: 'short', day: '2-digit', month: 'long', year: 'numeric' });
      wrap.append(h('div', { class: 'date-header' }, dateStr));
    }
    const cat = catById(e.categoryId);
    const isIncome = cat?.type === 'income';
    const catName = cat ? cat.name : '(senza categoria)';
    const noteText = (e.note && e.note.trim()) || '';
    const label = noteText ? `${catName} — ${noteText}` : catName;
    wrap.append(h('div', {
      class: 'date-entry',
      onclick: () => openEntryModal(e)
    },
      h('div', { class: 'info' },
        h('div', { class: 'label' }, label)
      ),
      h('div', { class: 'amt ' + (isIncome ? 'income' : 'expense') },
        (isIncome ? '+ ' : '− ') + fmtCurrency(e.amount))
    ));
  }
  return wrap;
}

function renderCategoriesView() {
  const entriesInPeriod = data.entries.filter(inPeriod);
  const byCat = new Map();
  for (const e of entriesInPeriod) {
    if (!byCat.has(e.categoryId)) byCat.set(e.categoryId, []);
    byCat.get(e.categoryId).push(e);
  }
  const groups = [];
  for (const cat of data.categories) {
    const es = byCat.get(cat.id);
    if (es && es.length) groups.push({ cat, entries: es });
  }
  groups.sort((a, b) => {
    const sa = a.entries.reduce((s, e) => s + e.amount, 0);
    const sb = b.entries.reduce((s, e) => s + e.amount, 0);
    return sb - sa;
  });

  if (groups.length === 0) {
    return h('div', { class: 'empty' },
      'Nessun movimento in questo periodo.',
      h('br'),
      'Usa i pulsanti in basso per aggiungere.');
  }

  const wrap = h('div', {});
  for (const g of groups) {
    wrap.append(renderCategoryRow(g.cat, g.entries));
    if (state.expanded.has(g.cat.id)) {
      wrap.append(renderCategoryEntries(g.cat, g.entries));
    }
  }
  return wrap;
}

function renderCategoryRow(cat, entries) {
  const total = entries.reduce((s, e) => s + e.amount, 0);
  const expanded = state.expanded.has(cat.id);
  const isIncome = cat.type === 'income';
  return h('div', {
    class: 'category-row' + (expanded ? ' expanded' : ''),
    onclick: () => {
      if (expanded) state.expanded.delete(cat.id);
      else state.expanded.add(cat.id);
      render();
    }
  },
    h('div', { class: 'chev', html: CHEV_ICON }),
    h('div', { class: 'icon-wrap', html: iconSvg(cat.icon, cat.color) }),
    h('div', { class: 'name' },
      cat.name,
      cat.excluded ? h('span', { class: 'excluded-tag' }, '(esclusa)') : null
    ),
    h('div', { class: 'count' }, entries.length),
    h('div', { class: 'amount ' + (isIncome ? 'income' : 'expense') },
      (isIncome ? '+ ' : '− ') + fmtCurrency(total))
  );
}

function renderCategoryEntries(cat, entries) {
  const sorted = [...entries].sort((a, b) =>
    b.date.localeCompare(a.date) || (b.createdAt || 0) - (a.createdAt || 0));
  const isIncome = cat.type === 'income';
  return h('div', { class: 'category-entries' },
    ...sorted.map(e => {
      const d = parseYmd(e.date);
      const dateStr = d.toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: '2-digit' });
      return h('div', {
        class: 'sub-entry',
        onclick: (ev) => { ev.stopPropagation(); openEntryModal(e); }
      },
        h('div', { class: 'info' },
          h('div', { class: 'note' + (e.note && e.note.trim() ? '' : ' no-note') }, (e.note && e.note.trim()) || 'Nessuna nota'),
          h('div', { class: 'date' }, dateStr)
        ),
        h('div', { class: 'amt ' + (isIncome ? 'income' : 'expense') },
          (isIncome ? '+ ' : '− ') + fmtCurrency(e.amount))
      );
    })
  );
}

function renderFabs() {
  return h('div', { class: 'fab-dock' },
    h('button', { class: 'fab expense', title: 'Nuova uscita',
      onclick: () => openEntryModal(null, 'expense') }, '−'),
    h('button', { class: 'fab income', title: 'Nuova entrata',
      onclick: () => openEntryModal(null, 'income') }, '+')
  );
}

// ---------- Modals ----------
function openEntryModal(entry, defaultType) {
  const isNew = !entry;
  state.modal = {
    type: 'entry', isNew,
    id: entry?.id || uid(),
    createdAt: entry?.createdAt || Date.now(),
    categoryType: entry ? (catById(entry.categoryId)?.type || 'expense') : (defaultType || 'expense'),
    categoryId: entry?.categoryId || '',
    amount: entry ? String(entry.amount).replace('.', ',') : '',
    note: entry?.note || '',
    date: entry?.date || ymd(new Date()),
  };
  render();
}

function openCategoryModal(cat, defaultType, fromManager = false) {
  state.modal = {
    type: 'category',
    isNew: !cat,
    id: cat?.id || uid(),
    name: cat?.name || '',
    catType: cat?.type || defaultType || 'expense',
    icon: cat?.icon || 'tag',
    color: cat?.color || COLORS[6],
    excluded: !!cat?.excluded,
    fromManager,
  };
  render();
}

function openCategoryManager() { state.modal = { type: 'cat-manage' }; render(); }
function openSettings() { state.modal = { type: 'settings' }; render(); }
function closeModal() { state.modal = null; render(); }

function renderModal() {
  const m = state.modal;
  const backdrop = h('div', {
    class: 'modal-backdrop',
    onclick: (e) => { if (e.target === backdrop) closeModal(); }
  });
  let body;
  if (m.type === 'entry') body = renderEntryForm(m);
  else if (m.type === 'category') body = renderCategoryForm(m);
  else if (m.type === 'cat-manage') body = renderCategoryManager();
  else body = renderSettingsModal();
  backdrop.append(body);
  return backdrop;
}

function renderEntryForm(m) {
  const cats = data.categories.filter(c => c.type === m.categoryType);
  if (m.categoryId && !cats.find(c => c.id === m.categoryId)) m.categoryId = '';
  if (!m.categoryId && cats.length > 0) m.categoryId = cats[0].id;

  return h('div', { class: 'modal' },
    h('h2', {}, m.isNew ? 'Nuovo movimento' : 'Modifica movimento'),
    h('div', { class: 'type-toggle' },
      h('button', {
        class: 'income' + (m.categoryType === 'income' ? ' active' : ''),
        onclick: () => { m.categoryType = 'income'; m.categoryId = ''; render(); }
      }, 'Entrata'),
      h('button', {
        class: 'expense' + (m.categoryType === 'expense' ? ' active' : ''),
        onclick: () => { m.categoryType = 'expense'; m.categoryId = ''; render(); }
      }, 'Uscita'),
    ),
    h('div', { class: 'field' },
      h('label', {}, 'Importo (€)'),
      h('input', {
        type: 'text', inputmode: 'decimal', placeholder: '0,00',
        value: m.amount,
        oninput: (e) => { m.amount = e.target.value; }
      })
    ),
    h('div', { class: 'field' },
      h('label', {}, 'Categoria'),
      cats.length === 0
        ? h('div', { class: 'hint' },
            'Nessuna categoria di questo tipo. Creane una da Impostazioni → Gestisci categorie.')
        : h('select', { onchange: (e) => { m.categoryId = e.target.value; } },
            ...cats.map(c => {
              const label = c.excluded ? `${c.name} (esclusa)` : c.name;
              const o = h('option', { value: c.id }, label);
              if (c.id === m.categoryId) o.selected = true;
              return o;
            })
          )
    ),
    h('div', { class: 'field' },
      h('label', {}, 'Data'),
      h('input', {
        type: 'date', value: m.date,
        oninput: (e) => { m.date = e.target.value; }
      })
    ),
    h('div', { class: 'field' },
      h('label', {}, 'Nota (opzionale)'),
      h('textarea', {
        placeholder: 'Es. Spesa settimanale al supermercato',
        oninput: (e) => { m.note = e.target.value; }
      }, m.note)
    ),
    h('div', { class: 'modal-actions' },
      !m.isNew && h('button', { class: 'btn danger', onclick: () => {
        if (!confirm('Eliminare questo movimento?')) return;
        data.entries = data.entries.filter(x => x.id !== m.id);
        closeModal();
      }}, 'Elimina'),
      h('button', { class: 'btn ghost', onclick: closeModal }, 'Annulla'),
      h('button', { class: 'btn primary', onclick: () => saveEntry(m) }, 'Salva')
    )
  );
}

function saveEntry(m) {
  const n = parseFloat(String(m.amount).replace(',', '.'));
  if (!isFinite(n) || n <= 0) { alert('Inserisci un importo valido.'); return; }
  if (!m.categoryId) { alert('Scegli una categoria.'); return; }
  if (!m.date) { alert('Inserisci una data.'); return; }
  const rec = {
    id: m.id,
    categoryId: m.categoryId,
    amount: Math.round(n * 100) / 100,
    note: m.note.trim(),
    date: m.date,
    createdAt: m.createdAt,
  };
  const i = data.entries.findIndex(x => x.id === rec.id);
  if (i >= 0) data.entries[i] = rec;
  else data.entries.push(rec);
  closeModal();
}

function renderCategoryForm(m) {
  return h('div', { class: 'modal' },
    h('h2', {}, m.isNew ? 'Nuova categoria' : 'Modifica categoria'),
    h('div', { class: 'type-toggle' },
      h('button', {
        class: 'income' + (m.catType === 'income' ? ' active' : ''),
        onclick: () => { m.catType = 'income'; render(); }
      }, 'Entrata'),
      h('button', {
        class: 'expense' + (m.catType === 'expense' ? ' active' : ''),
        onclick: () => { m.catType = 'expense'; render(); }
      }, 'Uscita'),
    ),
    h('div', { class: 'field' },
      h('label', {}, 'Nome'),
      h('input', {
        type: 'text', placeholder: 'Es. Alimentari',
        value: m.name,
        oninput: (e) => { m.name = e.target.value; }
      })
    ),
    h('div', { class: 'field' },
      h('label', {}, 'Icona'),
      h('div', { class: 'icon-grid' },
        ...ICON_KEYS.map(k =>
          h('button', {
            type: 'button',
            class: 'icon-choice' + (m.icon === k ? ' selected' : ''),
            html: iconSvg(k, m.color),
            onclick: () => { m.icon = k; render(); }
          })
        )
      )
    ),
    h('div', { class: 'field' },
      h('label', {}, 'Colore'),
      h('div', { class: 'color-grid' },
        ...COLORS.map(c =>
          h('button', {
            type: 'button',
            class: 'color-choice' + (m.color === c ? ' selected' : ''),
            style: `background:${c}`,
            onclick: () => { m.color = c; render(); }
          })
        )
      )
    ),
    h('label', { class: 'exclude-toggle' },
      h('input', {
        type: 'checkbox',
        checked: m.excluded,
        onchange: (e) => { m.excluded = e.target.checked; }
      }),
      h('div', {},
        h('div', { class: 'exclude-title' }, 'Escludi dai totali (es. risparmi)'),
        h('div', { class: 'hint' }, 'Le voci restano visibili ma non contano nel saldo né nel grafico.')
      )
    ),
    h('div', { class: 'modal-actions' },
      h('button', { class: 'btn ghost', onclick: () => {
        if (m.fromManager) openCategoryManager();
        else closeModal();
      }}, 'Annulla'),
      h('button', { class: 'btn primary', onclick: () => saveCategory(m) }, 'Salva')
    )
  );
}

function saveCategory(m) {
  const name = m.name.trim();
  if (!name) { alert('Inserisci un nome.'); return; }
  const rec = { id: m.id, name, type: m.catType, icon: m.icon, color: m.color, excluded: !!m.excluded };
  const i = data.categories.findIndex(x => x.id === m.id);
  if (i >= 0) data.categories[i] = rec;
  else data.categories.push(rec);
  if (m.fromManager) openCategoryManager();
  else closeModal();
}

function deleteCategory(c) {
  const used = data.entries.some(e => e.categoryId === c.id);
  const msg = used
    ? `"${c.name}" è usata in alcuni movimenti. Eliminandola, quei movimenti non saranno più visualizzati. Continuare?`
    : `Eliminare la categoria "${c.name}"?`;
  if (!confirm(msg)) return;
  data.categories = data.categories.filter(x => x.id !== c.id);
  render();
}

function renderCategoryManager() {
  const income = data.categories.filter(c => c.type === 'income');
  const expense = data.categories.filter(c => c.type === 'expense');
  const row = (c) => h('div', { class: 'cat-manage-row' },
    h('div', { class: 'icon-wrap', html: iconSvg(c.icon, c.color) }),
    h('div', { class: 'name', onclick: () => openCategoryModal(c, null, true) },
      c.name,
      c.excluded ? h('span', { class: 'excluded-tag' }, '(esclusa)') : null
    ),
    h('button', { class: 'del', onclick: () => deleteCategory(c) }, '✕')
  );
  return h('div', { class: 'modal' },
    h('h2', {}, 'Gestisci categorie'),
    h('div', { class: 'section-label', style: 'color:var(--income)' }, 'Entrate'),
    ...(income.length ? income.map(row) : [h('div', { class: 'empty', style: 'padding:8px 0' }, 'Nessuna categoria.')]),
    h('button', { class: 'btn', style: 'margin-top:6px',
      onclick: () => openCategoryModal(null, 'income', true) }, '+ Nuova entrata'),
    h('div', { class: 'section-label', style: 'color:var(--expense)' }, 'Uscite'),
    ...(expense.length ? expense.map(row) : [h('div', { class: 'empty', style: 'padding:8px 0' }, 'Nessuna categoria.')]),
    h('button', { class: 'btn', style: 'margin-top:6px',
      onclick: () => openCategoryModal(null, 'expense', true) }, '+ Nuova uscita'),
    h('div', { class: 'modal-actions' },
      h('button', { class: 'btn ghost', onclick: openSettings }, 'Indietro'),
      h('button', { class: 'btn primary', onclick: closeModal }, 'Chiudi')
    )
  );
}

function renderSettingsModal() {
  return h('div', { class: 'modal' },
    h('h2', {}, 'Impostazioni'),
    h('div', { class: 'settings-item' },
      h('div', {}, 'Gestisci categorie'),
      h('button', { class: 'btn primary', style: 'flex:0 0 auto;padding:8px 14px',
        onclick: openCategoryManager }, 'Apri')
    ),
    h('div', { class: 'settings-item' },
      h('div', {},
        h('div', {}, 'Backup (CSV)'),
        h('div', { class: 'hint' }, `${backupStatusLabel()} — scarica 2 file: categorie e movimenti`)
      ),
      h('button', { class: 'btn primary', style: 'flex:0 0 auto;padding:8px 14px',
        onclick: exportCsvBackup }, 'Scarica')
    ),
    h('div', { class: 'settings-item' },
      h('div', {},
        h('div', {}, 'Ripristina da CSV'),
        h('div', { class: 'hint' }, 'Seleziona entrambi i file (categorie + movimenti)')
      ),
      h('label', { class: 'btn', style: 'flex:0 0 auto;padding:8px 14px;cursor:pointer' },
        'Carica',
        h('input', {
          type: 'file', accept: '.csv,text/csv', multiple: true, style: 'display:none',
          onchange: (e) => { if (e.target.files.length) importCsvBackup(e.target.files); }
        })
      )
    ),
    h('div', { class: 'settings-item' },
      h('div', {},
        h('div', {}, 'Storage persistente'),
        h('div', { class: 'hint', id: 'persist-status' }, 'Stato: controllo in corso…')
      ),
      h('button', { class: 'btn', style: 'flex:0 0 auto;padding:8px 14px',
        onclick: async () => {
          const ok = await requestPersistence();
          alert(ok ? 'Storage persistente attivo.'
                   : 'Non concesso. Installa la PWA sulla home per aumentare le probabilità.');
          render();
        }}, 'Attiva')
    ),
    h('div', { class: 'settings-item' },
      h('div', {},
        h('div', {}, 'Forza aggiornamento'),
        h('div', { class: 'hint' }, 'Cancella cache e service worker, poi ricarica')),
      h('button', { class: 'btn', style: 'flex:0 0 auto;padding:8px 14px',
        onclick: clearAppCache }, 'Aggiorna')
    ),
    h('div', { class: 'settings-item' },
      h('div', {},
        h('div', {}, 'Cancella tutti i dati'),
        h('div', { class: 'hint' }, 'Non reversibile')),
      h('button', { class: 'btn danger', style: 'flex:0 0 auto;padding:8px 14px',
        onclick: () => {
          if (!confirm("Cancellare tutti i movimenti e categorie? L'operazione non è reversibile.")) return;
          data = defaultData(); save(); closeModal();
        }
      }, 'Cancella')
    ),
    h('div', { class: 'modal-actions' },
      h('button', { class: 'btn ghost', onclick: closeModal }, 'Chiudi')
    )
  );
}

// ---------- Persistence ----------
async function requestPersistence() {
  try {
    if (!navigator.storage || !navigator.storage.persist) return false;
    const already = await navigator.storage.persisted();
    if (already) return true;
    return await navigator.storage.persist();
  } catch { return false; }
}

async function clearAppCache() {
  if (!confirm('Forzare l\'aggiornamento? Verranno cancellate cache e service worker. I tuoi movimenti e categorie non saranno toccati.')) return;
  try {
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
    }
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r => r.unregister()));
    }
  } catch (err) {
    console.error('clearAppCache:', err);
  }
  const url = new URL(window.location.href);
  url.searchParams.set('_cb', String(Date.now()));
  window.location.replace(url.toString());
}

async function updatePersistStatusUI() {
  const el = document.getElementById('persist-status');
  if (!el) return;
  try {
    if (!navigator.storage || !navigator.storage.persisted) {
      el.textContent = 'Stato: non supportato dal browser';
      return;
    }
    const granted = await navigator.storage.persisted();
    el.textContent = granted ? 'Stato: attivo ✓' : 'Stato: non attivo';
  } catch { el.textContent = 'Stato: non disponibile'; }
}

// ---------- Init ----------
render();
requestPersistence();

if ('serviceWorker' in navigator) {
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then((reg) => {
      reg.addEventListener('updatefound', () => {
        const nw = reg.installing;
        if (!nw) return;
        nw.addEventListener('statechange', () => {
          if (nw.state === 'installed' && navigator.serviceWorker.controller) {
            nw.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      });
      reg.update().catch(() => {});
      setInterval(() => reg.update().catch(() => {}), 60 * 60 * 1000);
    }).catch(() => {});
  });
}
