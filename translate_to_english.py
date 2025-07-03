#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量将HTML页面的中文内容翻译为英文
"""

import os
import re
import glob

# 中文到英文的翻译映射
translations = {
    # 页面标题和导航
    '返回首页': 'Back to Home',
    '推荐区': 'Recommendation Area',
    '加载页脚': 'Load Footer',
    
    # 计算器标题
    '基础计算器': 'Basic Calculator',
    '分数四则计算器': 'Fraction Calculator',
    '分数加减计算器': 'Fraction Add/Subtract Calculator',
    '带分数计算器': 'Mixed Fractions Calculator',
    '约分化简分数': 'Simplify Fractions',
    '分数比较计算器': 'Comparing Fractions Calculator',
    '小数转分数': 'Decimal to Fraction',
    '小数转百分比': 'Decimal to Percent',
    '百分比计算器': 'Percentage Calculator',
    '代数计算器': 'Algebra Calculator',
    '代数应用题-年龄': 'Algebra Word Problems - Age',
    '代数应用题-硬币': 'Algebra Word Problems - Coins',
    '配方法计算器': 'Completing the Square Calculator',
    '组合数计算器': 'Combinations Calculator',
    '带重复组合数': 'Combinations with Replacement',
    '圆形排列计算器': 'Circular Permutation Calculator',
    '最大公因数计算器': 'Greatest Common Factor Calculator',
    '整数加减计算器': 'Integer Add/Subtract Calculator',
    '通用数学计算器': 'General Math Calculator',
    
    # 几何计算器
    '几何计算器': 'Geometry Calculator',
    '平面几何计算器': 'Plane Geometry Calculator',
    '立体几何计算器': 'Solid Geometry Calculator',
    '圆形计算器': 'Circle Calculator',
    '立方体计算器': 'Cube Calculator',
    '圆柱体计算器': 'Cylinder Calculator',
    '圆锥体计算器': 'Cone Calculator',
    '圆台体计算器': 'Conical Frustum Calculator',
    '胶囊体积计算器': 'Capsule Volume Calculator',
    '环形计算器': 'Annulus Calculator',
    '三角函数计算器': 'Trigonometry Calculator',
    '长宽比计算器': 'Aspect Ratio Calculator',
    
    # 金融计算器
    '贷款计算器': 'Loan Calculator',
    '汽车贷款计算器': 'Car Loan Calculator',
    '汽车贷款repayment计算器': 'Car Loan Payment Calculator',
    '复利计算器': 'Compound Interest Calculator',
    '单利计算器': 'Simple Interest Calculator',
    '年利率计算器': 'APR Calculator',
    '基础年利率计算器': 'Basic APR Calculator',
    '利息与年利率计算器': 'Interest and APR Calculator',
    '复合年增长率计算器': 'CAGR Calculator',
    '等额本息repayment表': 'Equal Payment Amortization Schedule',
    '等额本金repayment表': 'Equal Principal Amortization Schedule',
    '年金贷款表': 'Annuity Loan Table',
    'CD计算器': 'CD Calculator',
    '财务比率计算器': 'Financial Ratios Calculator',
    '负债比率计算器': 'Debt Ratios Calculator',
    '个人理财计算器': 'Personal Finance Calculator',
    '投资收益计算器': 'Investment Return Calculator',
    '工资个税计算器': 'Salary Tax Calculator',
    '货币汇率换算器': 'Currency Converter',
    '货币升值贬值计算器': 'Currency Appreciation/Depreciation Calculator',
    '买卖价差计算器': 'Bid-Ask Spread Calculator',
    '销售零售计算器': 'Sales Retail Calculator',
    '比值计算器': 'Ratio Calculator',
    '货币时间价值计算器': 'Time Value of Money Calculator',
    
    # 科学计算器
    '物理计算器': 'Physics Calculator',
    '化学计算器': 'Chemistry Calculator',
    '统计计算器': 'Statistics Calculator',
    '离散数学集合运算': 'Discrete Math Set Operations',
    '平均数计算器': 'Average Calculator',
    '平均速度计算器': 'Average Velocity Calculator',
    '科技计算器': 'Technology Calculator',
    '计算机存储Unit conversion': 'Computer Storage Units Conversion',
    
    # 健康计算器
    '健康计算器': 'Health Calculator',
    'BMI计算器': 'BMI Calculator',
    '女性BMI计算器': 'Women BMI Calculator',
    '年龄计算器': 'Age Calculator',
    '年龄检查器': 'Age Checker',
    
    # Unit conversion
    '通用Unit conversion器': 'Universal Unit Converter',
    '通用换算计算器': 'Universal Conversion Calculator',
    '面积Unit conversion器': 'Area Unit Converter',
    '常衡制重量换算器': 'Avoirdupois Weight Converter',
    '摄氏度转华氏度': 'Celsius to Fahrenheit',
    '摄氏度转开尔文': 'Celsius to Kelvin',
    '摄氏度转兰氏度': 'Celsius to Rankine',
    '厘米转英寸': 'Centimeters to Inches',
    '十进制度转度分秒': 'Decimal Degrees to DMS',
    '小数转时间计算器': 'Decimal to Time Calculator',
    
    # 时间日期工具
    '时间日期计算器': 'Time Date Calculator',
    '日期差计算器': 'Date Difference Calculator',
    '日期加天数计算器': 'Date Plus Days Calculator',
    '日期加减日历单位': 'Date Plus/Minus Calendar Units',
    '倒计时器': 'Countdown Timer',
    
    # 实用工具
    '字数统计工具': 'Word Counter Tool',
    '字符计数器': 'Character Counter',
    '数字转文字工具': 'Numbers to Words Converter',
    '支票数字转文字': 'Check Writing Numbers to Words',
    '支票簿计算器': 'Checkbook Calculator',
    '支票簿余额计算器': 'Checkbook Balance Calculator',
    '硬币翻转器': 'Coin Flipper',
    '宾果卡片生成器': 'Bingo Card Generator',
    '宾果号码生成器': 'Bingo Number Generator',
    '游戏与体育计算器': 'Game and Sports Calculator',
    '杂项计算器': 'Miscellaneous Calculator',
    
    # 建筑工程
    '工程计算器': 'Construction Calculator',
    '混凝土体积计算器': 'Concrete Volume Calculator',
    '立方码计算器': 'Cubic Yards Calculator',
    '折旧计算器': 'Depreciation Calculator',
    '余额递减法折旧': 'Declining Balance Depreciation',
    '工作量法折旧': 'Activity-Based Depreciation',
    
    # enter 提示
    '分数1(如 1/2)': 'Fraction 1 (e.g. 1/2)',
    '分数2(如 1/3)': 'Fraction 2 (e.g. 1/3)',
    '请enter 有效的分数(如 1/2)': 'Please enter valid fractions (e.g. 1/2)',
    '除数不能为0': 'Divisor cannot be 0',
    '请enter 表达式': 'Please enter an expression',
    '表达式包含不安全字符': 'Expression contains unsafe characters',
    '计算结果无效': 'Invalid calculation result',
    '计算错误,请检查表达式': 'Calculation error, please check the expression',
    
    # 结果文本
    '结果:': 'Result: ',
    '小数:': 'Decimal: ',
    '错误': 'Error',
    
    # 按钮文本
    '计算': 'Calculate',
    '清除': 'Clear',
    '重置': 'Reset',
    '生成': 'Generate',
    '转换': 'Convert',
    
    # 页面描述
    '基础计算器,支持加减乘除等基础运算,适配移动端。': 'Basic calculator supporting addition, subtraction, multiplication, division and other basic operations. Mobile-friendly.',
    '分数四则计算器,支持两个分数的加减乘除,结果以最简分数和小数形式显示。': 'Fraction calculator supporting addition, subtraction, multiplication, division of two fractions. Results displayed in simplified fraction and decimal form.',
    
    # 关键词
    '基础计算器, 加法, 减法, 乘法, 除法, 计算器': 'basic calculator, addition, subtraction, multiplication, division, calculator',
    '分数加法, 分数减法, 分数乘法, 分数除法, 分数计算器, 四则运算': 'fraction addition, fraction subtraction, fraction multiplication, fraction division, fraction calculator, arithmetic operations',
    
    # 修复meta标签中的内容
    'Fraction Calculator,支持两个分数的加减乘除,结果以最简分数和小数形式显示。': 'Fraction calculator supporting addition, subtraction, multiplication, division of two fractions. Results displayed in simplified fraction and decimal form.',
    '分数加法, 分数减法, 分数乘法, 分数除法, 分数Calculate器, 四则运算': 'fraction addition, fraction subtraction, fraction multiplication, fraction division, fraction calculator, arithmetic operations',
}

def translate_file(file_path):
    """翻译单个文件"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 替换语言标签
        content = content.replace('lang="zh-CN"', 'lang="en"')
        
        # 应用翻译映射
        for chinese, english in translations.items():
            content = content.replace(chinese, english)
        
        # 写回文件
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Translated: {file_path}")
        return True
    except Exception as e:
        print(f"Error translating {file_path}: {e}")
        return False

def main():
    """主函数"""
    # 获取所有HTML文件
    html_files = glob.glob("*.html")
    
    print(f"Found {len(html_files)} HTML files to translate")
    
    success_count = 0
    for file_path in html_files:
        if translate_file(file_path):
            success_count += 1
    
    print(f"Successfully translated {success_count}/{len(html_files)} files")

if __name__ == "__main__":
    main() 