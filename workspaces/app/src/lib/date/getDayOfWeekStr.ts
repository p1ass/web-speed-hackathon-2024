const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const;

export const getDayOfWeekStr = (date: Date) => {
  const dayOfWeek = date.getDay(); // DateオブジェクトのgetDayメソッドは、0(日曜日)から6(土曜日)までの数値を返します。
  const dayStr = days[dayOfWeek]; // TypeScriptの配列アクセスには`.at()`よりも基本的なアクセス方法（角括弧[]）を使用します。
  if (dayStr == null) {
    throw new Error('dayOfWeek is invalid');
  }
  return dayStr;
};
