const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// 读取Markdown报告
const mdContent = fs.readFileSync(path.join(__dirname, 'EnocX网站内容对比分析报告.md'), 'utf-8');

// 转换Markdown为HTML（简单版本）
function mdToHtml(md) {
  let html = md;

  // 标题
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');

  // 粗体
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // 代码块
  html = html.replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>');

  // 表格处理
  html = html.replace(/\n\|(.+)\|\n\|[-:\s|]+\|\n((?:\|.+\|\n)+)/g, (match, header, rows) => {
    const headers = header.split('|').filter(h => h.trim()).map(h => `<th>${h.trim()}</th>`).join('');
    const rowsHtml = rows.trim().split('\n').map(row => {
      const cells = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    return `<table><thead><tr>${headers}</tr></thead><tbody>${rowsHtml}</tbody></table>`;
  });

  // 列表
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

  // 段落
  html = html.split('\n\n').map(para => {
    if (para.startsWith('<h') || para.startsWith('<table') ||
        para.startsWith('<ul') || para.startsWith('<pre') ||
        para.trim() === '' || para.includes('---')) {
      return para;
    }
    return `<p>${para}</p>`;
  }).join('\n');

  return html;
}

const htmlContent = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EnocX 网站内容对比分析报告</title>
  <style>
    @page {
      size: A4;
      margin: 2cm 1.5cm;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
      line-height: 1.6;
      color: #333;
      font-size: 11pt;
    }

    h1 {
      color: #0e8fa8;
      font-size: 24pt;
      margin: 40px 0 20px 0;
      padding-bottom: 10px;
      border-bottom: 3px solid #0e8fa8;
      page-break-after: avoid;
    }

    h1:first-of-type {
      margin-top: 0;
      font-size: 28pt;
      text-align: center;
      border-bottom: none;
    }

    h2 {
      color: #14181a;
      font-size: 18pt;
      margin: 30px 0 15px 0;
      padding-left: 10px;
      border-left: 4px solid #0e8fa8;
      page-break-after: avoid;
    }

    h3 {
      color: #333;
      font-size: 14pt;
      margin: 20px 0 10px 0;
      page-break-after: avoid;
    }

    h4 {
      color: #555;
      font-size: 12pt;
      margin: 15px 0 8px 0;
      page-break-after: avoid;
    }

    p {
      margin: 8px 0;
      text-align: justify;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 15px 0;
      font-size: 10pt;
      page-break-inside: avoid;
    }

    th {
      background-color: #0e8fa8;
      color: white;
      padding: 10px 8px;
      text-align: left;
      font-weight: 600;
    }

    td {
      border: 1px solid #ddd;
      padding: 8px;
      vertical-align: top;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    ul, ol {
      margin: 10px 0 10px 25px;
    }

    li {
      margin: 5px 0;
      line-height: 1.5;
    }

    strong {
      color: #0e8fa8;
      font-weight: 600;
    }

    pre {
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 4px;
      overflow-x: auto;
      margin: 10px 0;
      font-size: 9pt;
    }

    code {
      font-family: "Courier New", monospace;
      color: #d63384;
    }

    hr {
      border: none;
      border-top: 1px solid #ddd;
      margin: 20px 0;
    }

    .cover-page {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      page-break-after: always;
    }

    .cover-title {
      font-size: 36pt;
      color: #0e8fa8;
      margin-bottom: 40px;
      font-weight: 700;
    }

    .cover-subtitle {
      font-size: 18pt;
      color: #666;
      margin: 15px 0;
    }

    .cover-date {
      font-size: 14pt;
      color: #999;
      margin-top: 60px;
    }

    .section-break {
      page-break-before: always;
    }

    .highlight-box {
      background-color: #f0f8fa;
      border-left: 4px solid #0e8fa8;
      padding: 15px;
      margin: 15px 0;
      page-break-inside: avoid;
    }

    .warning-box {
      background-color: #fff3cd;
      border-left: 4px solid #ffc107;
      padding: 15px;
      margin: 15px 0;
      page-break-inside: avoid;
    }

    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      font-size: 9pt;
      color: #999;
      padding: 10px 0;
      border-top: 1px solid #eee;
    }
  </style>
</head>
<body>
  <!-- 封面 -->
  <div class="cover-page">
    <div class="cover-title">EnocX<br>网站内容对比分析报告</div>
    <div class="cover-subtitle">Website Content Comparison Analysis Report</div>
    <div class="cover-subtitle" style="margin-top: 80px;">对比范围</div>
    <div style="text-align: left; margin-top: 20px; font-size: 12pt; color: #666;">
      <p>1. 现有网站 www.enocx.co.jp</p>
      <p>2. 品牌资料（中文详细版，2026年4月）</p>
      <p>3. 品牌资料（日文简易版）</p>
    </div>
    <div class="cover-date">2026年7月5日</div>
  </div>

  <!-- 正文内容 -->
  ${mdToHtml(mdContent)}

</body>
</html>
`;

// 生成PDF
(async () => {
  console.log('正在启动浏览器...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  console.log('正在生成PDF...');
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: path.join(__dirname, 'EnocX网站内容对比分析报告.pdf'),
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm'
    }
  });

  console.log('PDF生成完成：EnocX网站内容对比分析报告.pdf');
  await browser.close();
})();
