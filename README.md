# math-learning
支持渲染 math markdown，下载/上传图书，ai答疑的 web-app

## 工作
  - 提供【Sider】按钮, 唤起sider
  - 提供快捷指令
    - 框选文字后，展示【快捷指令】列表
    - 框选文字后，隐藏掉【Sider】原先的【快捷指令】
    - 实现【快捷指令】：【复制】
  - 使用mathpix-markdown-it实现mmd渲染
    - 解决vite不支持mathjax问题
      - https://github.com/Mathpix/mathpix-markdown-it/issues/278#issuecomment-1822482690
    - 注：数学公式因为无法被选中不支持快捷指令，公式只支持mathpix.js自带的复制

## 待办
  - 实现其他快捷指令的基本逻辑：组合文字和prompt自动复制到剪贴版
  - 部署页面
  - 实现上传mmd
  - 实现获取后端存的mmd