import os
import re

# 常见中文->英文映射,可根据实际需求扩展
ZH_EN_MAP = {
    '计算': 'Calculate',
    '计算器': 'Calculator',
    '请enter ': 'Please enter',
    '数值': 'Value',
    '结果': 'Result:',
    '返回首页': 'Back to Home',
    '加速度转换计算器': 'Acceleration Conversion Calculator',
    '高级贷款计算器': 'Advanced Loan Calculator',
    '贷款本金': 'Principal',
    '年利率': 'Annual Rate (%)',
    '期数': 'Months',
    '等额本息': 'Equal Payment',
    '等额本金': 'Equal Principal',
    '每月repayment': 'Monthly Payment',
    'total interest': 'Total Interest',
    'total repayment': 'Total Payment',
    '首月repayment': 'First Month Payment',
    '字数统计与文本分析工具': 'Word Count & Text Analysis Tool',
    '请enter 文本内容': 'Please enter text',
    '英亩转平方英尺': 'Acres to Square Feet',
    '英亩': 'Acre',
    '平方英尺': 'Square Feet',
    '请enter 英亩数': 'Please enter acres',
    '绝对差Calculate器': 'Absolute Difference Calculator',
    '第一个数': 'First Number',
    '第二个数': 'Second Number',
    '绝对差': 'Absolute Difference',
    '请enter 两个有效数字': 'Please enter two valid numbers',
    # ...可继续扩展...
}

# 需要加data-i18n的标签
TAG_ATTRS = [
    ('<button', 'data-i18n'),
    ('<input', 'data-i18n'),
    ('<option', 'data-i18n'),
    ('<div class="section-title"', 'data-i18n'),
    ('<span class="back-link"', 'data-i18n'),
]

# 递归获取所有HTML文件
def get_all_html_files(dir_path):
    html_files = []
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
    return html_files

# 替换中文为英文,并加data-i18n
def process_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    orig_content = content
    # 替换常见中文为英文
    for zh, en in ZH_EN_MAP.items():
        # 替换文本内容
        content = re.sub(r'(?<=>)'+re.escape(zh)+r'(?=<)', en, content)
        # 替换placeholder
        content = re.sub(r'placeholder="'+re.escape(zh)+'"', f'placeholder="{en}"', content)
        # 替换option
        content = re.sub(r'>'+re.escape(zh)+r'<', f'>{en}<', content)
    # 为常见标签加data-i18n
    for tag, attr in TAG_ATTRS:
        content = re.sub(r'('+re.escape(tag)+r'[^>]*)(?<!'+attr+r')>', r'\1 '+attr+'="auto">', content)
    # 替换JS中的中文提示
    for zh, en in ZH_EN_MAP.items():
        content = content.replace(f"'{zh}'", f"window.I18N ? window.I18N.t('auto', '{en}') : '{en}'")
        content = content.replace(f'"{zh}"', f'window.I18N ? window.I18N.t("auto", "{en}") : "{en}"')
    if content != orig_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'✓ Processed {os.path.basename(file_path)}')
    else:
        print(f'- Skipped {os.path.basename(file_path)} (no change)')

if __name__ == '__main__':
    html_files = get_all_html_files('.')
    print(f'Found {len(html_files)} HTML files')
    for file in html_files:
        process_html_file(file)
    print('Batch English replacement and i18n attribute insertion complete!') 