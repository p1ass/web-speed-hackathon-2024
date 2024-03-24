type Params = {
  query: string;
  target: string;
};

// 半角・全角を含む文字列を正規化する関数
function normalizeString(str: string): string {
  // Unicode正規化で全角化
  let normalized = str.normalize('NFKC');

  // カタカナをひらがなに変換
  normalized = normalized.replace(/[\u30a1-\u30f6]/g, (match) => {
    return String.fromCharCode(match.charCodeAt(0) - 0x60);
  });

  // 全角英数字を半角に変換
  normalized = normalized.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });

  return normalized;
}

// isContains はひらがな・カタカナ・半角・全角を区別せずに、query文字列にtarget文字列が含まれているかを調べる
export function isContains({query, target}: Params): boolean {
  // 文字列を正規化する
  const normalizedQuery = normalizeString(query);
  console.log(normalizedQuery)
  const normalizedTarget = normalizeString(target);
  console.log(normalizedTarget)

  // 正規化した文字列で包含関係を調べる
  return normalizedTarget.includes(normalizedQuery);
}
