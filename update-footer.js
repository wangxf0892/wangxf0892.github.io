// 批量更新所有HTML页面,添加页脚引用
const fs = require('fs');
const path = require('path');

// 获取所有HTML文件
function getAllHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// 更新单个文件
function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 检查是否已经包含页脚加载器
    if (content.includes('footer-loader.js')) {
      console.log(`跳过 ${path.basename(filePath)} - 已包含页脚加载器`);
      return;
    }
    
    // 查找并替换空的footer标签
    const footerPattern = /<footer>\s*<\/footer>/g;
    if (footerPattern.test(content)) {
      content = content.replace(footerPattern, '<!-- 加载页脚 -->\n  <script src="footer-loader.js"></script>');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ 更新 ${path.basename(filePath)}`);
    } else {
      // 如果没有找到空的footer标签,在</body>前添加
      const bodyEndPattern = /<\/body>/;
      if (bodyEndPattern.test(content)) {
        content = content.replace(bodyEndPattern, '  <!-- 加载页脚 -->\n  <script src="footer-loader.js"></script>\n</body>');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ 更新 ${path.basename(filePath)} (添加页脚)`);
      } else {
        console.log(`⚠ 跳过 ${path.basename(filePath)} - 未找到</body>标签`);
      }
    }
  } catch (error) {
    console.error(`✗ 更新 ${path.basename(filePath)} 失败:`, error.message);
  }
}

// 主函数
function main() {
  const htmlFiles = getAllHtmlFiles('.');
  
  console.log(`找到 ${htmlFiles.length} 个HTML文件`);
  console.log('开始更新页脚引用...\n');
  
  let updatedCount = 0;
  let skippedCount = 0;
  
  for (const file of htmlFiles) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      if (content.includes('footer-loader.js')) {
        skippedCount++;
        continue;
      }
      
      updateFile(file);
      updatedCount++;
    } catch (error) {
      console.error(`处理文件失败: ${file}`, error.message);
    }
  }
  
  console.log(`\n更新完成！`);
  console.log(`✓ 更新了 ${updatedCount} 个文件`);
  console.log(`⚠ 跳过了 ${skippedCount} 个文件(已包含页脚加载器)`);
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = { updateFile, getAllHtmlFiles }; 