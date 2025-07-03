// 全站页面数据(可自动生成或手动维护)
const SITE_PAGES = [
  { file: 'basic-calculator.html', en: 'Basic Calculator', fr: 'Calculatrice de base', de: 'Grundrechner', es: 'Calculadora básica' },
  { file: 'fraction-calculator.html', en: 'Fraction Calculator', fr: 'Calculatrice de fractions', de: 'Bruchrechner', es: 'Calculadora de fracciones' },
  { file: 'fraction-add-subtract-calculator.html', en: 'Fraction Add/Subtract Calculator', fr: 'Addition/Soustraction de fractions', de: 'Brüche addieren/subtrahieren', es: 'Suma/Resta de fracciones' },
  { file: 'mixed-fractions-calculator.html', en: 'Mixed Fractions Calculator', fr: 'Calculatrice de fractions mixtes', de: 'Gemischte Brüche Rechner', es: 'Calculadora de fracciones mixtas' },
  { file: 'simplify-fractions-calculator.html', en: 'Simplify Fractions Calculator', fr: 'Simplifier les fractions', de: 'Brüche vereinfachen', es: 'Simplificar fracciones' },
  { file: 'comparing-fractions-calculator.html', en: 'Comparing Fractions Calculator', fr: 'Comparer les fractions', de: 'Brüche vergleichen', es: 'Comparar fracciones' },
  { file: 'decimal-to-fraction-calculator.html', en: 'Decimal to Fraction Calculator', fr: 'Décimal en fraction', de: 'Dezimal zu Bruch', es: 'Decimal a fracción' },
  { file: 'decimal-to-percent-calculator.html', en: 'Decimal to Percent Calculator', fr: 'Décimal en pourcentage', de: 'Dezimal zu Prozent', es: 'Decimal a porcentaje' },
  { file: 'percentage-calculator.html', en: 'Percentage Calculator', fr: 'Calculatrice de pourcentage', de: 'Prozentrechner', es: 'Calculadora de porcentaje' },
  { file: 'algebra-calculator.html', en: 'Algebra Calculator', fr: 'Calculatrice d\'algèbre', de: 'Algebra Rechner', es: 'Calculadora de álgebra' },
  { file: 'geometry-calculator.html', en: 'Geometry Calculator', fr: 'Calculatrice de géométrie', de: 'Geometrie Rechner', es: 'Calculadora de geometría' },
  { file: 'plane-geometry-calculator.html', en: 'Plane Geometry Calculator', fr: 'Géométrie plane', de: 'Ebene Geometrie', es: 'Geometría plana' },
  { file: 'solid-geometry-calculator.html', en: 'Solid Geometry Calculator', fr: 'Géométrie solide', de: 'Raumgeometrie', es: 'Geometría sólida' },
  { file: 'trigonometry-calculator.html', en: 'Trigonometry Calculator', fr: 'Calculatrice de trigonométrie', de: 'Trigonometrie Rechner', es: 'Calculadora de trigonometría' },
  { file: 'loan-calculator.html', en: 'Loan Calculator', fr: 'Calculatrice de prêt', de: 'Darlehensrechner', es: 'Calculadora de préstamos' },
  { file: 'compound-interest-calculator.html', en: 'Compound Interest Calculator', fr: 'Intérêts composés', de: 'Zinseszinsrechner', es: 'Interés compuesto' },
  { file: 'unit-converter.html', en: 'Unit Converter', fr: 'Convertisseur d\'unités', de: 'Einheitenumrechner', es: 'Convertidor de unidades' },
  { file: 'bmi-calculator.html', en: 'BMI Calculator', fr: 'Calculateur IMC', de: 'BMI Rechner', es: 'Calculadora IMC' },
  { file: 'date-difference-calculator.html', en: 'Date Difference Calculator', fr: 'Différence de dates', de: 'Datumsdifferenz', es: 'Diferencia de fechas' },
  { file: 'word-calculator.html', en: 'Word Count & Text Analysis Tool', fr: 'Compteur de mots & analyse de texte', de: 'Wörterzähler & Textanalyse', es: 'Contador de palabras & análisis de texto' },
  { file: 'numbers-to-words-converter.html', en: 'Numbers to Words Tool', fr: 'Nombres en mots', de: 'Zahlen in Wörter', es: 'Números a palabras' },
  { file: 'statistics-calculator.html', en: 'Statistics Calculator', fr: 'Calculatrice de statistiques', de: 'Statistikrechner', es: 'Calculadora de estadísticas' },
  { file: 'health-calculator.html', en: 'Health Calculator', fr: 'Calculateur de santé', de: 'Gesundheitsrechner', es: 'Calculadora de salud' },
  { file: 'physics-calculator.html', en: 'Physics Calculator', fr: 'Calculatrice de physique', de: 'Physik Rechner', es: 'Calculadora de física' },
  { file: 'games-sports-calculator.html', en: 'Games & Sports Calculator', fr: 'Jeux & sports', de: 'Spiele & Sport', es: 'Juegos & deportes' },
  { file: 'circular-permutation-calculator.html', en: 'Circular Permutation Calculator', fr: 'Permutation circulaire', de: 'Kreispermutation', es: 'Permutación circular' },
  { file: '1000-primes.html', en: 'First 1000 Primes', fr: '1000 premiers nombres premiers', de: 'Erste 1000 Primzahlen', es: 'Primeros 1000 primos' },
  { file: 'absolute-difference-calculator.html', en: 'Absolute Difference Calculator', fr: 'Différence absolue', de: 'Absolute Differenz', es: 'Diferencia absoluta' },
  { file: 'absolute-value-calculator.html', en: 'Absolute Value Calculator', fr: 'Valeur absolue', de: 'Absolutwertrechner', es: 'Valor absoluto' },
  { file: 'acceleration-conversion-calculator.html', en: 'Acceleration Conversion Calculator', fr: 'Conversion d\'accélération', de: 'Beschleunigungsumrechnung', es: 'Conversión de aceleración' },
  { file: 'acres-to-sqft.html', en: 'Acres to Square Feet', fr: 'Acre en pieds carrés', de: 'Acre zu Quadratfuß', es: 'Acres a pies cuadrados' },
  { file: 'activity-depreciation-calculator.html', en: 'Activity Depreciation Calculator', fr: 'Amortissement par activité', de: 'Leistungsabschreibung', es: 'Depreciación por actividad' },
  { file: 'adding-machine-calculator.html', en: 'Adding Machine Calculator', fr: 'Additionneur', de: 'Addiermaschine', es: 'Calculadora sumadora' },
  { file: 'advanced-loan-calculator.html', en: 'Advanced Loan Calculator', fr: 'Calculatrice de prêt avancée', de: 'Erweiterter Darlehensrechner', es: 'Calculadora de préstamos avanzada' }
  // ...more can be added
];

function getCurrentLang() {
  return (window.I18N && window.I18N.getCurrentLang && window.I18N.getCurrentLang()) || 'en';
}

function createSearchBox() {
  const nav = document.querySelector('.nav') || document.querySelector('.nav-row');
  if (!nav) return;
  if (nav.querySelector('.nav-search-box')) return;
  const lang = getCurrentLang();
  const t = window.I18N ? window.I18N.t : (k, f) => f || k;
  const searchBox = document.createElement('div');
  searchBox.className = 'nav-search-box';
  searchBox.innerHTML = `
    <input class="nav-search-input" type="text" placeholder="${t('searchPlaceholder','Search calculators...')}" />
    <button class="nav-search-btn" type="button">${t('searchBtn','Search')}</button>
    <div class="nav-search-results"></div>
  `;
  const logo = nav.querySelector('.logo');
  if (logo && logo.nextSibling) {
    nav.insertBefore(searchBox, logo.nextSibling);
  } else {
    nav.appendChild(searchBox);
  }
  const input = searchBox.querySelector('.nav-search-input');
  const btn = searchBox.querySelector('.nav-search-btn');
  const results = searchBox.querySelector('.nav-search-results');
  function doSearch() {
    const kw = input.value.trim().toLowerCase();
    if (!kw) {
      results.classList.remove('active');
      results.innerHTML = '';
      return;
    }
    const matched = SITE_PAGES.filter(p =>
      (p[lang] || p.en).toLowerCase().includes(kw) || p.file.toLowerCase().includes(kw)
    );
    if (matched.length === 0) {
      results.innerHTML = `<div class="nav-search-result-item">${t('noResults','No results found')}</div>`;
    } else {
      results.innerHTML = matched.map(p =>
        `<a class="nav-search-result-item" href="${p.file}">${p[lang] || p.en}</a>`
      ).join('');
    }
    results.classList.add('active');
  }
  input.addEventListener('input', doSearch);
  btn.addEventListener('click', doSearch);
  input.addEventListener('focus', doSearch);
  input.addEventListener('blur', () => {
    setTimeout(() => results.classList.remove('active'), 200);
  });
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const first = results.querySelector('.nav-search-result-item');
      if (first && first.tagName === 'A') {
        window.location.href = first.getAttribute('href');
      }
    }
  });
}
document.addEventListener('DOMContentLoaded', createSearchBox); 