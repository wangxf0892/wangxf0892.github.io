function renderFooterI18n() {
  if (!window.I18N) return;
  const t = window.I18N.t;
  const footer = document.getElementById('footer-i18n');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-content">
      <div class="footer-section">
        <h3>${t('footer.about')}</h3>
        <p>${t('footer.aboutDesc')}</p>
      </div>
      <div class="footer-section">
        <h3>${t('footer.quick')}</h3>
        <ul class="footer-links">
          <li><a href="index.html">${t('footer.home')}</a></li>
          <li><a href="category-math.html">${t('footer.math')}</a></li>
          <li><a href="category-finance.html">${t('footer.finance')}</a></li>
          <li><a href="category-science.html">${t('footer.science')}</a></li>
          <li><a href="category-practical.html">${t('footer.utility')}</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>${t('footer.help')}</h3>
        <ul class="footer-links">
          <li><a href="help.html">${t('footer.help')}</a></li>
          <li><a href="contact.html">${t('footer.contact')}</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>${t('footer.popular')}</h3>
        <ul class="footer-links">
          <li><a href="basic-calculator.html">${t('basic.title')}</a></li>
          <li><a href="fraction-calculator.html">${t('fraction.title')}</a></li>
          <li><a href="loan-calculator.html">${t('footer.finance')}</a></li>
          <li><a href="unit-converter.html">${t('footer.utility')}</a></li>
          <li><a href="bmi-calculator.html">${t('bmi.title')}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>${t('footer.copyright')}</p>
        <div>
          <a href="help.html">${t('footer.help')}</a>
          <a href="contact.html">${t('footer.contact')}</a>
          <a href="index.html">${t('footer.home')}</a>
        </div>
      </div>
    </div>
  `;
}
window.renderFooterI18n = renderFooterI18n;
document.addEventListener('DOMContentLoaded', renderFooterI18n);
// 监听语言切换事件,自动刷新页脚
if (window.I18N && typeof window.I18N.onLangChange === 'function') {
  window.I18N.onLangChange(renderFooterI18n);
} 