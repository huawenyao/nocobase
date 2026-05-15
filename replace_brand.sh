#!/bin/bash
# 替换所有文件中的NocoBase和钛动科技为BusinessAGI

echo "正在替换所有文档中的品牌名..."

# 替换.md文件中的NocoBase
find . -name "*.md" -type f | grep -v node_modules | grep -v ".git" | xargs sed -i "s/NocoBase/BusinessAGI/g"

# 替换.md文件中的钛动科技
find . -name "*.md" -type f | grep -v node_modules | grep -v ".git" | xargs sed -i "s/钛动科技/BusinessAGI/g"

echo "替换完成!"
