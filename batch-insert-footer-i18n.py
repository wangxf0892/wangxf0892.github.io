import os

# 递归获取所有HTML文件
def get_all_html_files(dir_path):
    html_files = []
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
    return html_files

# 在单个文件中插入footer-i18n.js
def insert_footer_i18n(file_path):
    loader_tag = '<script src="footer-loader.js"></script>'
    i18n_tag = '<script src="footer-i18n.js"></script>'
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        if loader_tag not in content:
            print(f'⚠ 跳过 {os.path.basename(file_path)} - 未找到footer-loader.js')
            return False
        if i18n_tag in content:
            print(f'⚠ 跳过 {os.path.basename(file_path)} - 已包含footer-i18n.js')
            return False
        new_content = content.replace(loader_tag, f'{loader_tag}\n  {i18n_tag}')
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'✓ 插入footer-i18n.js到 {os.path.basename(file_path)}')
        return True
    except Exception as e:
        print(f'✗ 处理 {os.path.basename(file_path)} 失败: {e}')
        return None

def main():
    html_files = get_all_html_files('.')
    print(f'找到 {len(html_files)} 个HTML文件')
    print('开始批量插入footer-i18n.js...\n')
    inserted_count = 0
    skipped_count = 0
    error_count = 0
    for file in html_files:
        result = insert_footer_i18n(file)
        if result is True:
            inserted_count += 1
        elif result is False:
            skipped_count += 1
        else:
            error_count += 1
    print(f'\n批量插入完成！')
    print(f'✓ 成功插入 {inserted_count} 个文件')
    print(f'⚠ 跳过 {skipped_count} 个文件(已包含或未找到footer-loader.js)')
    if error_count > 0:
        print(f'✗ 错误 {error_count} 个文件')
    print(f'\n现在所有页面都支持多语言页脚了！')

if __name__ == '__main__':
    main() 