import os
import re

# 需要批量处理的目录
TARGET_DIR = os.path.join(os.path.dirname(__file__))

# 常见界面词汇中英文对照,可根据实际页面扩展
zh_en_map = {
    '计算': 'Calculate',
    '结果': 'Result',
    '请enter ': 'Please enter',
    '返回首页': 'Back to Home',
    '年龄': 'Age',
    '年': 'year',
    '月': 'month',
    '天': 'day',
    '加法': 'Addition',
    '混合数': 'Mixed Number',
    '分数': 'Fraction',
    '简化': 'Simplify',
    '数字': 'Number',
    '转换': 'Convert',
    '贷款': 'Loan',
    '利率': 'Interest Rate',
    '年利率': 'APR',
    '货币时间价值': 'Time Value of Money',
    '财务比率': 'Financial Ratio',
    '销售': 'Sales',
    '零售': 'Retail',
    '比率': 'Ratio',
    '个人财务': 'Personal Finance',
    '会计': 'Accounting',
    '折旧': 'Depreciation',
    '储蓄': 'Saving',
    '投资': 'Investment',
    '薪酬': 'Salary',
    '税务': 'Tax',
    '时间': 'Time',
    '日期': 'Date',
    '文字': 'Text',
    '建筑': 'Construction',
    '科技': 'Technology',
    '物理': 'Physics',
    '化学': 'Chemistry',
    '游戏': 'Game',
    '运动': 'Sports',
    '健康': 'Health',
    '杂项': 'Miscellaneous',
    '加速度': 'Acceleration',
    '英亩': 'Acre',
    '平方英尺': 'Square Feet',
    '活动': 'Activity',
    '整数': 'Integer',
    '高级': 'Advanced',
    '等额本金': 'Equal Principal',
    '环形': 'Annulus',
    '面积': 'Area',
    '创建': 'Create',
    '表格': 'Table',
    '角度': 'Angle',
    '应用题': 'Word Problem',
    '硬币': 'Coin',
    '质数': 'Prime',
    '绝对值': 'Absolute Value',
    '绝对差': 'Absolute Difference',
}

def to_title(filename):
    return filename.replace('-', ' ').replace('.html', '').title()

def seo_info(filename):
    title = to_title(filename)
    desc = f"A simple and mobile-friendly {title}."
    keywords = f"{title.lower()}, online calculator"
    return title, desc, keywords

def update_html(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    filename = os.path.basename(filepath)
    title, desc, keywords = seo_info(filename)
    # 替换或插入SEO信息
    content, n_title = re.subn(r'<title>.*?</title>', f'<title>{title}</title>', content)
    if n_title == 0:
        content = content.replace('<head>', f'<head>\n  <title>{title}</title>', 1)
    if '<meta name="description"' not in content:
        content = content.replace('<head>', f'<head>\n  <meta name="description" content="{desc}">', 1)
    if '<meta name="keywords"' not in content:
        content = content.replace('<head>', f'<head>\n  <meta name="keywords" content="{keywords}">', 1)
    # 替换常见中文为英文
    for zh, en in zh_en_map.items():
        content = content.replace(zh, en)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    for file in os.listdir(TARGET_DIR):
        if file.endswith('.html'):
            update_html(os.path.join(TARGET_DIR, file))

if __name__ == '__main__':
    main() 