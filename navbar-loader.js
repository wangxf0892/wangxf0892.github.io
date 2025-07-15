// ... existing code ...
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
        setLanguage(langSelect.value);
      } else {
        setLanguage('zh');
      }
    });
}
// ... existing code ...