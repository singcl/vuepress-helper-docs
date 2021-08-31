#!/bin/bash
echo "正在压缩, 请稍后..."
mv ./docs/.vuepress/dist ./server/
tar -zcvf vuepress-helper-docs.gz ./server ./README.md ./build_production.sh

echo "上传中..."

sshpass -p ${password} scp -o StrictHostKeyChecking=no ./vuepress-helper-docs.tar.gz  ${user}@${host}:/home/quzhuanxiang/docs/vuepress-helper-docs/
sshpass -p ${password} ssh -o StrictHostKeyChecking=no ${user}@${host} "cd /home/quzhuanxiang/docs/vuepress-helper-docs/ && tar -xzvf vuepress-helper-docs.tar.gz && bash build_production.sh"