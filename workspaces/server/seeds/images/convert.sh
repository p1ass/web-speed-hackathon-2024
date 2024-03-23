#!/bin/bash

# 対象ディレクトリ（このスクリプトと同じディレクトリ内のjpg画像を変換する場合）
TARGET_DIR="./"

# 変換後の画像の幅と高さ
WIDTH=256
HEIGHT=384

# .jpgファイルを見つけて、それぞれに対して処理を行う
find "$TARGET_DIR" -type f -name '*.jpg' | while read FILENAME; do
  # 新しいファイル名を生成（拡張子を.webpに変更）
  NEW_FILENAME="${FILENAME%.jpg}.${WIDTH}x${HEIGHT}.webp"

  # imagemagickを使用して変換とリサイズを行う
  convert "$FILENAME" -resize "${WIDTH}x${HEIGHT}" "$NEW_FILENAME"

  echo "変換完了: $NEW_FILENAME"
done

echo "全てのjpg画像の変換が完了しました。"
