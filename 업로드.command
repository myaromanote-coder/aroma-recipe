#!/bin/bash
# 아로마 레시피 GitHub 자동 업로드 스크립트

DIR="/Users/mac_al03229663/aroma-recipe-site"
cd "$DIR"

echo "========================================="
echo "  🌿 아로마 레시피 GitHub 업로드"
echo "========================================="
echo ""

CHANGES=$(git status --short)

if [ -z "$CHANGES" ]; then
  echo "✅ 변경사항이 없습니다. 이미 최신 상태입니다."
else
  echo "📋 변경된 파일:"
  git status --short
  echo ""

  git add -A
  git commit -m "업데이트 $(date '+%Y-%m-%d %H:%M')"
  GIT_TERMINAL_PROMPT=0 git push origin main

  echo ""
  if [ $? -eq 0 ]; then
    echo "✅ GitHub 업로드 완료!"
    echo "🌐 https://myaromanote-coder.github.io/aroma-recipe/"
    echo "   (1~2분 후 사이트에 반영됩니다)"
  else
    echo "❌ 업로드 실패. 인터넷 연결을 확인해주세요."
  fi
fi

echo ""
read -p "엔터를 눌러 닫으세요..."
