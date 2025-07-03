// 批量插入footer-i18n.js脚本
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

// 在单个文件中插入footer-i18n.js
function insertFooterI18n(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const loaderTag = '<script src="footer-loader.js"></script>';
    const i18nTag = '<script src="footer-i18n.js"></script>';
    
    // 检查是否已包含footer-loader.js
    if (!content.includes(loaderTag)) {
      console.log(`⚠ 跳过 ${path.basename(filePath)} - 未找到footer-loader.js`);
      return false;
    }
    
    // 检查是否已包含footer-i18n.js
    if (content.includes(i18nTag)) {
      console.log(`⚠ 跳过 ${path.basename(filePath)} - 已包含footer-i18n.js`);
      return false;
    }
    
    // 插入footer-i18n.js到footer-loader.js后面
    content = content.replace(loaderTag, `${loaderTag}\n  ${i18nTag}`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ 插入footer-i18n.js到 ${path.basename(filePath)}`);
    return true;
    
  } catch (error) {
    console.error(`✗ 处理 ${path.basename(filePath)} 失败:`, error.message);
    return false;
  }
}

// 主函数
function main() {
  const htmlFiles = getAllHtmlFiles('.');
  
  console.log(`找到 ${htmlFiles.length} 个HTML文件`);
  console.log('开始批量插入footer-i18n.js...\n');
  
  let insertedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  for (const file of htmlFiles) {
    const result = insertFooterI18n(file);
    if (result === true) {
      insertedCount++;
    } else if (result === false) {
      skippedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`\n批量插入完成！`);
  console.log(`✓ 成功插入 ${insertedCount} 个文件`);
  console.log(`⚠ 跳过 ${skippedCount} 个文件(已包含或未找到footer-loader.js)`);
  if (errorCount > 0) {
    console.log(`✗ 错误 ${errorCount} 个文件`);
  }
  console.log(`\n现在所有页面都支持多语言页脚了！`);
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = { insertFooterI18n, getAllHtmlFiles }; 