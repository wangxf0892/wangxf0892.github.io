import os
import re

# 需要处理的标签及属性
TAGS = [
    ('<button', 'data-i18n'),
    ('<input', 'data-i18n-placeholder', 'placeholder'),
    ('<textarea', 'data-i18n-placeholder', 'placeholder'),
    ('<option', 'data-i18n'),
    ('<div class="section-title"', 'data-i18n'),
    ('<span class="back-link"', 'data-i18n'),
    ('<h1', 'data-i18n'),
    ('<h2', 'data-i18n'),
    ('<h3', 'data-i18n'),
    ('<label', 'data-i18n'),
    ('<a', 'data-i18n'),
    ('<p', 'data-i18n'),
    ('<li', 'data-i18n'),
    ('<th', 'data-i18n'),
    ('<td', 'data-i18n'),
]

def gen_key(text, prefix='auto'):
    # 生成 key，去除特殊字符，转小写
    key = re.sub(r'[^a-zA-Z0-9]+', '_', text.strip()).lower()
    key = re.sub(r'_+', '_', key).strip('_')
    if not key:
        key = 'text'
    return f"{prefix}.{key}"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    changed = False
    for tag in TAGS:
        tag_start = tag[0]
        attr = tag[1]
        # 处理 placeholder
        if len(tag) == 3:
            attr_name = tag[2]
            pattern = re.compile(r'(%s[^>]*?%s="([^"]+)"[^>]*)(?<!%s)(>)' % (tag_start, attr_name, attr), re.IGNORECASE)
            def repl(m):
                before, text, after = m.groups()
                if attr in before:
                    return m.group(0)
                key = gen_key(text, 'ph')
                return f'{before} {attr}="{key}"{after}'
            content, n = pattern.subn(repl, content)
            if n > 0:
                changed = True
        else:
            # 处理标签内容
            pattern = re.compile(r'(%s[^>]*>)([^<]+)(</[a-zA-Z0-9]+>)' % tag_start, re.IGNORECASE)
            def repl(m):
                before, text, after = m.groups()
                if 'data-i18n' in before or not text.strip():
                    return m.group(0)
                key = gen_key(text)
                return f'{before[:-1]} data-i18n="{key}">{text}{after}'
            content, n = pattern.subn(repl, content)
            if n > 0:
                changed = True

    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Processed: {filepath}")

def batch_process_html(root_dir):
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.html'):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    batch_process_html('.')
    print("批量处理完成！")