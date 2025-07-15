// 动态加载导航条
function loadNavbar() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
      // 语言切换事件（预留11，可根据实际需求实现）
      const langSelect = document.getElementById('language-select');
      if (langSelect) {
        langSelect.addEventListener('change', function() {
          // 这里可以根据实际需求切换语言
          alert('切换语言到: ' + this.value);
        });
      }
    });
}
window.addEventListener('DOMContentLoaded', loadNavbar); 