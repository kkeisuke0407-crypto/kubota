export type Column = {
  slug: string;
  title: string;
  description: string;
  published: string;
};

export const columns: Column[] = [
  {
    slug: 'dorm-cost',
    title: '期間工の「寮費無料」は、どこまでが無料なのか',
    description:
      '寮費無料と書かれていても、光熱費や食費、入寮条件までは含まれないことがあります。確認すべき項目を整理しました。',
    published: '2026-08-21',
  },
  {
    slug: 'take-home-pay',
    title: '月収例と手取りは別物。期間工の給与の見方',
    description:
      '求人票の月収例には残業や手当が含まれます。実際に口座へ入る金額をどう見積もるかを解説します。',
    published: '2026-08-21',
  },
  {
    slug: 'bonus-timing',
    title: '満期慰労金・入社祝い金は、いつ・いくら受け取れるのか',
    description:
      '一時金は金額だけでなく支給条件と支給時期が重要です。受け取れないケースも含めて整理しました。',
    published: '2026-08-21',
  },
  {
    slug: 'shift-work',
    title: '交替勤務の生活リズムを、働く前にイメージする',
    description:
      '日勤のみと交替勤務では生活が大きく変わります。睡眠・食事・人付き合いの視点から考えます。',
    published: '2026-08-21',
  },
  {
    slug: 'to-fulltime',
    title: '期間工から正社員登用を目指すときに見ておくこと',
    description:
      '登用制度は「ある」だけでは判断材料になりません。受験機会・評価・時間軸の見方をまとめました。',
    published: '2026-08-21',
  },
];
