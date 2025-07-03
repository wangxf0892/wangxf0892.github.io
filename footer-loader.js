// 页脚加载器
function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(html => {
      // 创建临时容器来解析HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      
      // 提取页脚内容
      const footer = tempDiv.querySelector('.footer');
      const styles = tempDiv.querySelector('style');
      const modals = tempDiv.querySelectorAll('.modal');
      const scripts = tempDiv.querySelector('script');
      
      if (footer) {
        // 添加页脚到页面
        document.body.appendChild(footer);
      }
      
      if (styles) {
        // 添加样式到页面头部
        document.head.appendChild(styles);
      }
      
      // 添加模态框
      modals.forEach(modal => {
        document.body.appendChild(modal);
      });
      
      if (scripts) {
        // 执行脚本
        const newScript = document.createElement('script');
        newScript.textContent = scripts.textContent;
        document.body.appendChild(newScript);
      }
    })
    .catch(error => {
      console.error('加载页脚失败:', error);
      // 如果加载失败,显示简单的页脚
      showSimpleFooter();
    });
}

// 简单页脚(备用方案)
function showSimpleFooter() {
  const simpleFooter = `
    <footer style="background: #2c3e50; color: #ecf0f1; text-align: center; padding: 20px; margin-top: 40px;">
      <div style="max-width: 1024px; margin: 0 auto;">
        <p style="margin: 0 0 10px 0;">&copy;Online Calculators. All rights reserved</p>
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
          <a href="help.html" style="color: #3498db; text-decoration: none;">Help</a>
          <a href="contact.html" style="color: #3498db; text-decoration: none;">Contact us</a>
          <a href="index.html" style="color: #3498db; text-decoration: none;">Home page</a>
        </div>
      </div>
    </footer>
  `;
  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = simpleFooter;
  document.body.appendChild(tempDiv.firstElementChild);
}

// 页面加载完成后加载页脚
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFooter);
} else {
  loadFooter();
} 