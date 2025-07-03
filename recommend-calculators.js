// Recommended calculators data (with i18n support)
const calculators = [
  { file: 'basic-calculator.html', name: {en:'Basic Calculator',fr:'Calculatrice de base',de:'Grundrechner',es:'Calculadora básica'} },
  { file: 'fraction-calculator.html', name: {en:'Fraction Calculator',fr:'Calculatrice de fractions',de:'Bruchrechner',es:'Calculadora de fracciones'} },
  { file: 'fraction-add-subtract-calculator.html', name: {en:'Fraction Add/Subtract Calculator',fr:'Addition/Soustraction de fractions',de:'Bruch Addition/Subtraktion',es:'Suma/Resta de fracciones'} },
  { file: 'mixed-fractions-calculator.html', name: {en:'Mixed Fractions Calculator',fr:'Calculatrice de fractions mixtes',de:'Gemischte Brüche Rechner',es:'Calculadora de fracciones mixtas'} },
  { file: 'simplify-fractions-calculator.html', name: {en:'Simplify Fractions Calculator',fr:'Simplifier les fractions',de:'Brüche vereinfachen',es:'Simplificar fracciones'} },
  { file: 'comparing-fractions-calculator.html', name: {en:'Comparing Fractions Calculator',fr:'Comparer des fractions',de:'Brüche vergleichen',es:'Comparar fracciones'} },
  { file: 'decimal-to-fraction-calculator.html', name: {en:'Decimal to Fraction Calculator',fr:'Décimal en fraction',de:'Dezimal zu Bruch',es:'Decimal a fracción'} },
  { file: 'decimal-to-percent-calculator.html', name: {en:'Decimal to Percent Calculator',fr:'Décimal en pourcentage',de:'Dezimal zu Prozent',es:'Decimal a porcentaje'} },
  { file: 'percentage-calculator.html', name: {en:'Percentage Calculator',fr:'Calculatrice de pourcentage',de:'Prozentrechner',es:'Calculadora de porcentaje'} },
  { file: 'algebra-calculator.html', name: {en:'Algebra Calculator',fr:'Calculatrice d\'algèbre',de:'Algebra Rechner',es:'Calculadora de álgebra'} },
  { file: 'geometry-calculator.html', name: {en:'Geometry Calculator',fr:'Calculatrice de géométrie',de:'Geometrie Rechner',es:'Calculadora de geometría'} },
  { file: 'plane-geometry-calculator.html', name: {en:'Plane Geometry Calculator',fr:'Géométrie plane',de:'Ebene Geometrie',es:'Geometría plana'} },
  { file: 'solid-geometry-calculator.html', name: {en:'Solid Geometry Calculator',fr:'Géométrie solide',de:'Raumgeometrie',es:'Geometría sólida'} },
  { file: 'trigonometry-calculator.html', name: {en:'Trigonometry Calculator',fr:'Calculatrice de trigonométrie',de:'Trigonometrie Rechner',es:'Calculadora de trigonometría'} },
  { file: 'loan-calculator.html', name: {en:'Loan Calculator',fr:'Calculatrice de prêt',de:'Darlehensrechner',es:'Calculadora de préstamos'} },
  { file: 'compound-interest-calculator.html', name: {en:'Compound Interest Calculator',fr:'Intérêts composés',de:'Zinseszinsrechner',es:'Interés compuesto'} },
  { file: 'unit-converter.html', name: {en:'Unit Converter',fr:'Convertisseur d\'unités',de:'Einheitenumrechner',es:'Convertidor de unidades'} },
  { file: 'bmi-calculator.html', name: {en:'BMI Calculator',fr:'Calculateur IMC',de:'BMI Rechner',es:'Calculadora IMC'} },
  { file: 'date-difference-calculator.html', name: {en:'Date Difference Calculator',fr:'Différence de dates',de:'Datumsdifferenz',es:'Diferencia de fechas'} },
  { file: 'word-calculator.html', name: {en:'Word Count & Text Analysis Tool',fr:'Compteur de mots & analyse de texte',de:'Wörterzähler & Textanalyse',es:'Contador de palabras & análisis de texto'} },
  { file: 'numbers-to-words-converter.html', name: {en:'Numbers to Words Tool',fr:'Nombres en mots',de:'Zahlen in Wörter',es:'Números a palabras'} },
  { file: 'statistics-calculator.html', name: {en:'Statistics Calculator',fr:'Calculatrice de statistiques',de:'Statistikrechner',es:'Calculadora de estadísticas'} },
  { file: 'health-calculator.html', name: {en:'Health Calculator',fr:'Calculateur de santé',de:'Gesundheitsrechner',es:'Calculadora de salud'} },
  { file: 'physics-calculator.html', name: {en:'Physics Calculator',fr:'Calculatrice de physique',de:'Physik Rechner',es:'Calculadora de física'} },
  { file: 'games-sports-calculator.html', name: {en:'Games & Sports Calculator',fr:'Jeux & sports',de:'Spiele & Sport',es:'Juegos & deportes'} },
  { file: 'circular-permutation-calculator.html', name: {en:'Circular Permutation Calculator',fr:'Permutation circulaire',de:'Kreispermutationen',es:'Permutación circular'} },
  { file: '1000-primes.html', name: {en:'First 1000 Primes',fr:'1000 premiers nombres premiers',de:'Erste 1000 Primzahlen',es:'Primeros 1000 primos'} },
  { file: 'absolute-difference-calculator.html', name: {en:'Absolute Difference Calculator',fr:'Différence absolue',de:'Absolute Differenz',es:'Diferencia absoluta'} },
  { file: 'absolute-value-calculator.html', name: {en:'Absolute Value Calculator',fr:'Valeur absolue',de:'Absolutwert',es:'Valor absoluto'} },
  { file: 'acceleration-conversion-calculator.html', name: {en:'Acceleration Conversion Calculator',fr:'Conversion d\'accélération',de:'Beschleunigungsumrechnung',es:'Conversión de aceleración'} },
  { file: 'acres-to-sqft.html', name: {en:'Acres to Square Feet',fr:'Acre en pieds carrés',de:'Acre zu Quadratfuß',es:'Acres a pies cuadrados'} },
  { file: 'activity-depreciation-calculator.html', name: {en:'Activity Depreciation Calculator',fr:'Amortissement par activité',de:'Leistungsabschreibung',es:'Depreciación por actividad'} },
  { file: 'adding-machine-calculator.html', name: {en:'Adding Machine Calculator',fr:'Additionneur',de:'Addiermaschine',es:'Sumadora'} },
  { file: 'advanced-loan-calculator.html', name: {en:'Advanced Loan Calculator',fr:'Calculatrice de prêt avancée',de:'Erweiterter Darlehensrechner',es:'Calculadora de préstamos avanzada'} }
  // ...more can be added
];

function getRandomCalculators(n = 10) {
  const arr = calculators.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, n);
}

function renderRecommendArea() {
  const lang = window.I18N ? window.I18N.getCurrentLang() : 'en';
  const list = getRandomCalculators(10);
  let html = `<div class="recommend-title">${window.I18N ? window.I18N.t('recommendTitle') : 'Recommended for You'}</div><div class="recommend-list">`;
  list.forEach(item => {
    html += `<a class="recommend-link" href="${item.file}">${item.name[lang] || item.name['en']}</a>`;
  });
  html += '</div>';
  const area = document.querySelector('.recommend-area');
  if (area) area.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderRecommendArea);

// Styles for the recommendation area (can be moved to global css)
(function(){
  const style = document.createElement('style');
  style.textContent = `
  .recommend-title { font-size: 1.1em; font-weight: bold; margin: 32px 0 12px 0; color: #1976d2; }
  .recommend-list { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 24px; }
  .recommend-link {
    display: inline-block; background: #f5f5f5; color: #1976d2; border-radius: 5px;
    padding: 8px 16px; text-decoration: none; font-size: 1em; border: 1px solid #e0e0e0;
    transition: background 0.2s, color 0.2s;
  }
  .recommend-link:hover { background: #1976d2; color: #fff; }
  @media (max-width: 600px) {
    .recommend-list { gap: 6px; }
    .recommend-link { font-size: 0.95em; padding: 7px 10px; }
  }
  `;
  document.head.appendChild(style);
})(); 