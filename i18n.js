// 多语言字典(可扩展)
const I18N_DICT = {
  en: {
    langName: 'English',
    searchPlaceholder: 'Search calculators...',
    searchBtn: 'Search',
    noResults: 'No results found',
    recommendTitle: 'Recommended for You',
    footer: {
      about: 'About Us',
      aboutDesc: 'Providing a rich collection of online calculator tools covering math, finance, health, science, unit conversion, and more.',
      quick: 'Quick Links',
      home: 'Home',
      math: 'Math Calculators',
      finance: 'Finance Calculators',
      science: 'Science Calculators',
      utility: 'Utility Tools',
      help: 'Help',
      contact: 'Contact Us',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      popular: 'Popular Calculators',
      copyright: 'Online Calculator Collection. All rights reserved.',
      share: 'Share to:',
      modal: {
        privacyTitle: 'Privacy Policy',
        privacy1: 'We do not collect your personal information. All calculations are performed locally in your browser.',
        privacy2: 'We may use necessary cookies to improve user experience.',
        privacy3: 'We do not use third-party tracking or analytics services.',
        privacy4: 'Your data security is important to us. All calculations are performed locally.',
        privacy5: 'We may update this privacy policy. Updated policies will be posted on this page.',
        termsTitle: 'Terms of Service',
        terms1: 'This website provides free online calculator services for personal and business use.',
        terms2: 'Please use our services reasonably and do not use them for illegal purposes.',
        terms3: 'We strive to ensure the accuracy of calculation results, but do not guarantee 100% accuracy. For important decisions, please consult a professional.',
        terms4: 'Website content is protected by copyright and may not be copied or distributed without permission.',
        terms5: 'We reserve the right to modify or terminate the service at any time.'
      }
    },
    basic: {
      title: 'Basic Calculator',
      back: '← Back to Home',
      clear: 'C',
      equal: '=',
      error: 'Error'
    },
    fraction: {
      title: 'Fraction Calculator',
      back: '← Back to Home',
      frac1: 'Fraction 1 (e.g. 1/2)',
      frac2: 'Fraction 2 (e.g. 1/3)',
      calc: 'Calculate',
      invalid: 'Please enter valid fractions (e.g. 1/2)',
      div0: 'Divisor cannot be 0',
      result: 'Result:',
      decimal: 'Decimal:'
    },
    bmi: {
      title: 'BMI Calculator',
      back: '← Back to Home',
      height: 'Height (cm)',
      height_ph: 'Enter height in cm',
      weight: 'Weight (kg)',
      weight_ph: 'Enter weight in kg',
      calc: 'Calculate',
      invalid: 'Please enter valid height and weight',
      result: 'Result:',
      category: 'Category:',
      underweight: 'Underweight',
      normal: 'Normal weight',
      overweight: 'Overweight',
      obese: 'Obese',
    },
    physics: {
      title: 'Physics Calculator',
      speed: 'Speed = Distance / Time',
      density: 'Density = Mass / Volume',
      work: 'Work = Force × Distance',
      calc: 'Calculate',
      distance: 'Distance (m)',
      time: 'Time (s)',
      mass: 'Mass (kg)',
      volume: 'Volume (m³)',
      force: 'Force (N)',
      distance2: 'Distance (m)',
      unit_speed: 'm/s',
      unit_density: 'kg/m³',
      unit_work: 'Joule',
      err_speed: 'Please enter valid distance and time, and time ≠ 0',
      err_density: 'Please enter valid mass and volume, and volume ≠ 0',
      err_work: 'Please enter valid force and distance'
    },
    acc: {
      title: 'Acceleration Conversion Calculator',
      back: '← Back to Home',
      value_ph: 'Value',
      mps2: 'm/s² (meter/second²)',
      g: 'g (gravity)',
      cmps2: 'cm/s² (centimeter/second²)',
      ftps2: 'ft/s² (foot/second²)',
      calc: 'Calculate',
      err: 'Please enter a value',
      result: 'Result: '
    }
  },
  fr: {
    langName: 'Français',
    searchPlaceholder: 'Rechercher des calculateurs...',
    searchBtn: 'Rechercher',
    noResults: 'Aucun résultat trouvé',
    recommendTitle: 'Recommandé pour vous',
    footer: {
      about: 'À propos de nous',
      aboutDesc: 'Une riche collection de calculateurs en ligne couvrant les mathématiques, la finance, la santé, la science, la conversion d\'unités, etc.',
      quick: 'Liens rapides',
      home: 'Accueil',
      math: 'Calculateurs mathématiques',
      finance: 'Calculateurs financiers',
      science: 'Calculateurs scientifiques',
      utility: 'Outils pratiques',
      help: 'Aide',
      contact: 'Contactez-nous',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d'utilisation',
      popular: 'Calculateurs populaires',
      copyright: 'Collection de calculateurs en ligne. Tous droits réservés.',
      share: 'Partager sur :',
      modal: {
        privacyTitle: 'Politique de confidentialité',
        privacy1: 'Nous ne collectons pas vos informations personnelles. Tous les calculs sont effectués localement dans votre navigateur.',
        privacy2: 'Nous pouvons utiliser des cookies nécessaires pour améliorer l'expérience utilisateur.',
        privacy3: 'Nous n'utilisons pas de services tiers de suivi ou d'analyse.',
        privacy4: 'La sécurité de vos données est importante pour nous. Tous les calculs sont effectués localement.',
        privacy5: 'Nous pouvons mettre à jour cette politique de confidentialité. Les politiques mises à jour seront publiées sur cette page.',
        termsTitle: 'Conditions d'utilisation',
        terms1: 'Ce site propose des calculateurs en ligne gratuits pour un usage personnel et professionnel.',
        terms2: 'Veuillez utiliser nos services de manière raisonnable et ne pas les utiliser à des fins illégales.',
        terms3: 'Nous nous efforçons d'assurer l'exactitude des résultats, mais ne garantissons pas une précision à 100 %. Pour les décisions importantes, veuillez consulter un professionnel.',
        terms4: 'Le contenu du site est protégé par le droit d'auteur et ne peut être copié ou distribué sans autorisation.',
        terms5: 'Nous nous réservons le droit de modifier ou de résilier le service à tout moment.'
      }
    },
    basic: {
      title: 'Calculatrice de base',
      back: '← Retour à l\'accueil',
      clear: 'C',
      equal: '=',
      error: 'Erreur'
    },
    fraction: {
      title: 'Calculatrice de fractions',
      back: '← Retour à l\'accueil',
      frac1: 'Fraction 1 (ex : 1/2)',
      frac2: 'Fraction 2 (ex : 1/3)',
      calc: 'Calculer',
      invalid: 'Veuillez entrer des fractions valides (ex : 1/2)',
      div0: 'Le diviseur ne peut pas être 0',
      result: 'Résultat :',
      decimal: 'Décimal :'
    },
    bmi: {
      title: 'Calculateur IMC',
      back: '← Retour à l\'accueil',
      height: 'Taille (cm)',
      height_ph: 'Entrez la taille en cm',
      weight: 'Poids (kg)',
      weight_ph: 'Entrez le poids en kg',
      calc: 'Calculer',
      invalid: 'Veuillez entrer une taille et un poids valides',
      result: 'Résultat :',
      category: 'Catégorie :',
      underweight: 'Insuffisance pondérale',
      normal: 'Poids normal',
      overweight: 'Surpoids',
      obese: 'Obésité',
    },
    physics: {
      title: 'Calculatrice de physique',
      speed: 'Vitesse = Distance / Temps',
      density: 'Densité = Masse / Volume',
      work: 'Travail = Force × Distance',
      calc: 'Calculer',
      distance: 'Distance (m)',
      time: 'Temps (s)',
      mass: 'Masse (kg)',
      volume: 'Volume (m³)',
      force: 'Force (N)',
      distance2: 'Distance (m)',
      unit_speed: 'm/s',
      unit_density: 'kg/m³',
      unit_work: 'Joule',
      err_speed: 'Veuillez entrer une distance et un temps valides, et temps ≠ 0',
      err_density: 'Veuillez entrer une masse et un volume valides, et volume ≠ 0',
      err_work: 'Veuillez entrer une force et une distance valides'
    },
    acc: {
      title: 'Convertisseur d\'accélération',
      back: '← Retour à l\'accueil',
      value_ph: 'Valeur',
      mps2: 'm/s² (mètre/seconde²)',
      g: 'g (gravité)',
      cmps2: 'cm/s² (centimètre/seconde²)',
      ftps2: 'ft/s² (pied/seconde²)',
      calc: 'Calculer',
      err: 'Veuillez entrer une valeur',
      result: 'Résultat : '
    }
  },
  de: {
    langName: 'Deutsch',
    searchPlaceholder: 'Rechner durchsuchen...',
    searchBtn: 'Suchen',
    noResults: 'Keine Ergebnisse gefunden',
    recommendTitle: 'Empfohlen für Sie',
    footer: {
      about: 'Über uns',
      aboutDesc: 'Eine umfangreiche Sammlung von Online-Rechnern für Mathematik, Finanzen, Gesundheit, Wissenschaft, Einheitenumrechnung und mehr.',
      quick: 'Schnellzugriff',
      home: 'Startseite',
      math: 'Mathematische Rechner',
      finance: 'Finanzrechner',
      science: 'Wissenschaftliche Rechner',
      utility: 'Nützliche Tools',
      help: 'Hilfe',
      contact: 'Kontakt',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
      popular: 'Beliebte Rechner',
      copyright: 'Online-Rechner-Sammlung. Alle Rechte vorbehalten.',
      share: 'Teilen auf:',
      modal: {
        privacyTitle: 'Datenschutzrichtlinie',
        privacy1: 'Wir sammeln keine persönlichen Daten. Alle Berechnungen erfolgen lokal in Ihrem Browser.',
        privacy2: 'Wir können notwendige Cookies verwenden, um die Benutzererfahrung zu verbessern.',
        privacy3: 'Wir verwenden keine Drittanbieter-Tracking- oder Analysedienste.',
        privacy4: 'Die Sicherheit Ihrer Daten ist uns wichtig. Alle Berechnungen erfolgen lokal.',
        privacy5: 'Wir können diese Datenschutzrichtlinie aktualisieren. Aktualisierte Richtlinien werden auf dieser Seite veröffentlicht.',
        termsTitle: 'Nutzungsbedingungen',
        terms1: 'Diese Website bietet kostenlose Online-Rechner für private und geschäftliche Zwecke.',
        terms2: 'Bitte nutzen Sie unsere Dienste verantwortungsbewusst und nicht für illegale Zwecke.',
        terms3: 'Wir bemühen uns um genaue Ergebnisse, garantieren jedoch keine 100%ige Genauigkeit. Für wichtige Entscheidungen konsultieren Sie bitte einen Fachmann.',
        terms4: 'Die Inhalte der Website sind urheberrechtlich geschützt und dürfen nicht ohne Genehmigung kopiert oder verbreitet werden.',
        terms5: 'Wir behalten uns das Recht vor, den Dienst jederzeit zu ändern oder einzustellen.'
      }
    },
    basic: {
      title: 'Grundrechner',
      back: '← Zurück zur Startseite',
      clear: 'C',
      equal: '=',
      error: 'Fehler'
    },
    fraction: {
      title: 'Bruchrechner',
      back: '← Zurück zur Startseite',
      frac1: 'Bruch 1 (z.B. 1/2)',
      frac2: 'Bruch 2 (z.B. 1/3)',
      calc: 'Berechnen',
      invalid: 'Bitte gültige Brüche eingeben (z.B. 1/2)',
      div0: 'Der Divisor darf nicht 0 sein',
      result: 'Ergebnis:',
      decimal: 'Dezimal:'
    },
    bmi: {
      title: 'BMI Rechner',
      back: '← Zurück zur Startseite',
      height: 'Größe (cm)',
      height_ph: 'Größe in cm eingeben',
      weight: 'Gewicht (kg)',
      weight_ph: 'Gewicht in kg eingeben',
      calc: 'Berechnen',
      invalid: 'Bitte gültige Größe und Gewicht eingeben',
      result: 'Ergebnis:',
      category: 'Kategorie:',
      underweight: 'Untergewicht',
      normal: 'Normalgewicht',
      overweight: 'Übergewicht',
      obese: 'Fettleibig',
    },
    physics: {
      title: 'Physik Rechner',
      speed: 'Geschwindigkeit = Strecke / Zeit',
      density: 'Dichte = Masse / Volumen',
      work: 'Arbeit = Kraft × Distance',
      calc: 'Berechnen',
      distance: 'Strecke (m)',
      time: 'Zeit (s)',
      mass: 'Masse (kg)',
      volume: 'Volumen (m³)',
      force: 'Kraft (N)',
      distance2: 'Strecke (m)',
      unit_speed: 'm/s',
      unit_density: 'kg/m³',
      unit_work: 'Joule',
      err_speed: 'Bitte gültige Strecke und Zeit eingeben, und Zeit ≠ 0',
      err_density: 'Bitte gültige Masse und Volumen eingeben, und Volumen ≠ 0',
      err_work: 'Bitte gültige Kraft und Strecke eingeben'
    },
    acc: {
      title: 'Beschleunigungsumrechner',
      back: '← Zurück zur Startseite',
      value_ph: 'Wert',
      mps2: 'm/s² (Meter/Sekunde²)',
      g: 'g (Erdbeschleunigung)',
      cmps2: 'cm/s² (Zentimeter/Sekunde²)',
      ftps2: 'ft/s² (Fuß/Sekunde²)',
      calc: 'Berechnen',
      err: 'Bitte geben Sie einen Wert ein',
      result: 'Ergebnis: '
    }
  },
  es: {
    langName: 'Español',
    searchPlaceholder: 'Buscar calculadoras...',
    searchBtn: 'Buscar',
    noResults: 'No se encontraron resultados',
    recommendTitle: 'Recomendado para ti',
    footer: {
      about: 'Sobre nosotros',
      aboutDesc: 'Una amplia colección de calculadoras en línea que cubren matemáticas, finanzas, salud, ciencia, conversión de unidades y más.',
      quick: 'Enlaces rápidos',
      home: 'Inicio',
      math: 'Calculadoras matemáticas',
      finance: 'Calculadoras financieras',
      science: 'Calculadoras científicas',
      utility: 'Herramientas útiles',
      help: 'Ayuda',
      contact: 'Contáctanos',
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
      popular: 'Calculadoras populares',
      copyright: 'Colección de calculadoras en línea. Todos los derechos reservados.',
      share: 'Compartir en:',
      modal: {
        privacyTitle: 'Política de privacidad',
        privacy1: 'No recopilamos su información personal. Todos los cálculos se realizan localmente en su navegador.',
        privacy2: 'Podemos usar cookies necesarias para mejorar la experiencia del usuario.',
        privacy3: 'No utilizamos servicios de seguimiento o análisis de terceros.',
        privacy4: 'La seguridad de sus datos es importante para nosotros. Todos los cálculos se realizan localmente.',
        privacy5: 'Podemos actualizar esta política de privacidad. Las políticas actualizadas se publicarán en esta página.',
        termsTitle: 'Términos de servicio',
        terms1: 'Este sitio web ofrece servicios gratuitos de calculadora en línea para uso personal y comercial.',
        terms2: 'Utilice nuestros servicios de manera razonable y no para fines ilegales.',
        terms3: 'Nos esforzamos por garantizar la precisión de los resultados, pero no garantizamos una precisión del 100%. Para decisiones importantes, consulte a un profesional.',
        terms4: 'El contenido del sitio está protegido por derechos de autor y no puede ser copiado o distribuido sin permiso.',
        terms5: 'Nos reservamos el derecho de modificar o terminar el servicio en cualquier momento.'
      }
    },
    basic: {
      title: 'Calculadora básica',
      back: '← Volver al inicio',
      clear: 'C',
      equal: '=',
      error: 'Error'
    },
    fraction: {
      title: 'Calculadora de fracciones',
      back: '← Volver al inicio',
      frac1: 'Fracción 1 (ej: 1/2)',
      frac2: 'Fracción 2 (ej: 1/3)',
      calc: 'Calcular',
      invalid: 'Por favor, introduzca fracciones válidas (ej: 1/2)',
      div0: 'El divisor no puede ser 0',
      result: 'Resultado:',
      decimal: 'Decimal:'
    },
    bmi: {
      title: 'Calculadora IMC',
      back: '← Volver al inicio',
      height: 'Altura (cm)',
      height_ph: 'Ingrese la altura en cm',
      weight: 'Peso (kg)',
      weight_ph: 'Ingrese el peso en kg',
      calc: 'Calcular',
      invalid: 'Por favor, introduzca una altura y un peso válidos',
      result: 'Resultado:',
      category: 'Categoría:',
      underweight: 'Bajo peso',
      normal: 'Peso normal',
      overweight: 'Sobrepeso',
      obese: 'Obesidad',
    },
    physics: {
      title: 'Calculadora de física',
      speed: 'Velocidad = Distancia / Tiempo',
      density: 'Densidad = Masa / Volumen',
      work: 'Trabajo = Fuerza × Distancia',
      calc: 'Calcular',
      distance: 'Distancia (m)',
      time: 'Tiempo (s)',
      mass: 'Masa (kg)',
      volume: 'Volumen (m³)',
      force: 'Fuerza (N)',
      distance2: 'Distancia (m)',
      unit_speed: 'm/s',
      unit_density: 'kg/m³',
      unit_work: 'Joule',
      err_speed: 'Por favor, introduzca distancia y tiempo válidos, y tiempo ≠ 0',
      err_density: 'Por favor, introduzca masa y volumen válidos, y volumen ≠ 0',
      err_work: 'Por favor, introduzca fuerza y distancia válidas'
    },
    acc: {
      title: 'Calculadora de conversión de aceleración',
      back: '← Volver al inicio',
      value_ph: 'Valor',
      mps2: 'm/s² (metro/segundo²)',
      g: 'g (gravedad)',
      cmps2: 'cm/s² (centímetro/segundo²)',
      ftps2: 'ft/s² (pie/segundo²)',
      calc: 'Calcular',
      err: 'Por favor, introduzca un valor',
      result: 'Resultado: '
    }
  }
};

// 当前语言
function getCurrentLang() {
  return localStorage.getItem('site_lang') || 'en';
}
function setCurrentLang(lang) {
  localStorage.setItem('site_lang', lang);
}

// 语言切换事件监听
const langChangeListeners = [];
function onLangChange(fn) {
  if (typeof fn === 'function') langChangeListeners.push(fn);
}
function triggerLangChange() {
  langChangeListeners.forEach(fn => { try { fn(); } catch(e) {} });
}

// 修改 renderLangSelector 的 change 事件
function renderLangSelector() {
  const nav = document.querySelector('.nav') || document.querySelector('.nav-row');
  if (!nav) return;
  if (nav.querySelector('.nav-lang-box')) return;
  const box = document.createElement('div');
  box.className = 'nav-lang-box';
  box.innerHTML = '<select class="nav-lang-select">'
    + '<option value="en">English</option>'
    + '<option value="fr">Français</option>'
    + '<option value="de">Deutsch</option>'
    + '<option value="es">Español</option>'
    + '</select>';
  const logo = nav.querySelector('.logo');
  if (logo) {
    if (logo.nextSibling) {
      nav.insertBefore(box, logo.nextSibling);
    } else {
      nav.appendChild(box);
    }
  } else {
    nav.appendChild(box);
  }
  const select = box.querySelector('select');
  select.value = getCurrentLang();
  select.addEventListener('change', function() {
    setCurrentLang(this.value);
    triggerLangChange(); // 新增:通知所有监听者
    location.reload();   // 如需无刷新切换,可注释此行
  });
}

document.addEventListener('DOMContentLoaded', renderLangSelector);

// 获取当前语言的字典
function t(key, fallback) {
  const lang = getCurrentLang();
  const dict = I18N_DICT[lang] || I18N_DICT['en'];
  // 支持 t('footer.about') 形式
  if (key.includes('.')) {
    return key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict) || fallback || key;
  }
  return dict[key] || fallback || key;
}

// 导出 t, getCurrentLang, onLangChange
window.I18N = { t, getCurrentLang, onLangChange };
window.renderLangSelector = renderLangSelector; 