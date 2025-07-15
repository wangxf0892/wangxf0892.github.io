// 多语言字典
window.I18N_DATA = {
  zh: {
    home: "首页",
    math: "数学",
    finance: "金融",
    science: "科学",
    practical: "实用",
    contact: "联系我们",
    search: "搜索",
    search_placeholder: "搜索..."
  },
  en: {
    home: "Home",
    math: "Math",
    finance: "Finance",
    science: "Science",
    practical: "Practical",
    contact: "Contact Us",
    search: "Search",
    search_placeholder: "Search..."
  },
  fr: {
    home: "Accueil",
    math: "Mathématiques",
    finance: "Finance",
    science: "Science",
    practical: "Pratique",
    contact: "Contactez-nous",
    search: "Recherche",
    search_placeholder: "Recherche..."
  },
  de: {
    home: "Startseite",
    math: "Mathematik",
    finance: "Finanzen",
    science: "Wissenschaft",
    practical: "Praktisch",
    contact: "Kontakt",
    search: "Suche",
    search_placeholder: "Suche..."
  },
  es: {
    home: "Inicio",
    math: "Matemáticas",
    finance: "Finanzas",
    science: "Ciencia",
    practical: "Práctico",
    contact: "Contáctenos",
    search: "Buscar",
    search_placeholder: "Buscar..."
  }
};

function setLanguage(lang) {
  const dict = window.I18N_DATA[lang] || window.I18N_DATA['zh'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });
  // 页脚同步切换
  if (typeof setFooterLang === 'function') setFooterLang(lang);
}

function loadNavbar() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
      const langSelect = document.getElementById('language-select');
      if (langSelect) {
        langSelect.addEventListener('change', function() {
          setLanguage(this.value);
        });
        // 页面初始时根据下拉框当前值设置语言
        setLanguage(langSelect.value);
      } else {
        setLanguage('zh');
      }
    });
}
window.addEventListener('DOMContentLoaded', loadNavbar);