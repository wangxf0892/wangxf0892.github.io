# 批量插入footer-i18n.js脚本 (PowerShell版本)
param(
    [string]$Directory = "."
)

# 获取所有HTML文件
function Get-AllHtmlFiles {
    param([string]$Dir)
    
    $files = @()
    $items = Get-ChildItem -Path $Dir -Recurse -File | Where-Object { $_.Extension -eq ".html" }
    
    foreach ($item in $items) {
        $files += $item.FullName
    }
    
    return $files
}

# 在单个文件中插入footer-i18n.js
function Insert-FooterI18n {
    param([string]$FilePath)
    
    try {
        $content = Get-Content -Path $FilePath -Raw -Encoding UTF8
        $loaderTag = '<script src="footer-loader.js"></script>'
        $i18nTag = '<script src="footer-i18n.js"></script>'
        $fileName = Split-Path -Path $FilePath -Leaf
        
        # 检查是否已包含footer-loader.js
        if ($content -notmatch [regex]::Escape($loaderTag)) {
            Write-Host "⚠ 跳过 $fileName - 未找到 footer-loader.js" -ForegroundColor Yellow
            return $false
        }
        
        # 检查是否已包含footer-i18n.js
        if ($content -match [regex]::Escape($i18nTag)) {
            Write-Host "⚠ 跳过 $fileName - 已包含footer-i18n.js" -ForegroundColor Yellow
            return $false
        }
        
        # 插入footer-i18n.js到footer-loader.js后面
        $newContent = $content -replace [regex]::Escape($loaderTag), "$loaderTag`n  $i18nTag"
        Set-Content -Path $FilePath -Value $newContent -Encoding UTF8
        Write-Host "✓ 插入footer-i18n.js到 $fileName" -ForegroundColor Green
        return $true
        
    } catch {
        Write-Host "✗ 处理 $fileName 失败: $($_.Exception.Message)" -ForegroundColor Red
        return $null
    }
}

# 主函数
function Main {
    $htmlFiles = Get-AllHtmlFiles -Dir $Directory
    
    Write-Host "找到 $($htmlFiles.Count) 个HTML文件" -ForegroundColor Cyan
    Write-Host "开始批量插入footer-i18n.js...`n" -ForegroundColor Cyan
    
    $insertedCount = 0
    $skippedCount = 0
    $errorCount = 0
    
    foreach ($file in $htmlFiles) {
        $result = Insert-FooterI18n -FilePath $file
        if ($result -eq $true) {
            $insertedCount++
        } elseif ($result -eq $false) {
            $skippedCount++
        } else {
            $errorCount++
        }
    }
    
    Write-Host "`n批量插入完成！" -ForegroundColor Cyan
    Write-Host "✓ 成功插入 $insertedCount 个文件" -ForegroundColor Green
    Write-Host "⚠ 跳过 $skippedCount 个文件(已包含或未找到footer-loader.js)" -ForegroundColor Yellow
    if ($errorCount -gt 0) {
        Write-Host "✗ 错误 $errorCount 个文件" -ForegroundColor Red
    }
    Write-Host "`n现在所有页面都支持多语言页脚了！" -ForegroundColor Green
}

# 执行主函数
Main 