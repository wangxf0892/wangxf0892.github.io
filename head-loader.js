// head加载器,动态插入<head>内容并支持变量替换
function loadHead(options = {}) {
  fetch('head.html')
    .then(response => response.text())
    .then(html => {
      // 变量替换
      html = html.replace('{{title}}', options.title || '在线计算器大全')
                 .replace('{{description}}', options.description || '提供丰富的在线数学、金融、健康、科学、Unit conversion等计算器,全部页面适配移动端,免费易用。')
                 .replace('{{keywords}}', options.keywords || '在线计算器, CalculatorSoup, 数学, 金融, 健康, 科学, Unit conversion, 复刻');
      // 创建临时容器解析
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = '<head>' + html + '<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PDDQ55B8QR"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PDDQ55B8QR');
</script>

</head>';
      const headContent = tempDiv.querySelector('head');
      // 将head内容插入到当前文档head
      Array.from(headContent.children).forEach(node => {
        document.head.appendChild(node.cloneNode(true));
      });
    })
    .catch(error => {
      console.error('加载head失败:', error);
    });
}
// 用法示例:
// loadHead({ title: '页面标题', description: '描述', keywords: '关键词1,关键词2' }); 