import { affiliate } from '../affiliate';

// 全LP共通のもしもアフィリエイト計測リンク（src/data/affiliate.ts で一元管理）。
export const AFFILIATE_URL = affiliate.clickUrl;

export const kubotaFacts = {
  dailyPayInitial: 14_000,
  dailyPayAfter18Months: 14_500,
  dailyPayAfter30Months: 15_000,
  monthlyExample: 340_000,
  monthlyExampleDays: 20,
  monthlyExampleOvertimeHours: 25,
  completionBonus6Months: 240_000,
  celebrationBonus: 140_000,
  annualGrossExample: 4_840_000,
  dormFee: 0,
} as const;

export const competitors = [
  { company: 'クボタ筑波', dailyPay: 14_000 },
  { company: 'Honda埼玉', dailyPay: 11_500 },
  { company: 'トヨタ', dailyPay: 11_150 },
  { company: 'SUBARU', dailyPay: 11_000 },
  { company: 'いすゞ', dailyPay: 10_500 },
  { company: '日野', dailyPay: 10_500 },
] as const;

export type ClusterId = 'FACTORY_UNEXP' | 'PERIOD_INCOME' | 'PERIOD_JOBDESC';
export type ModuleId =
  | 'beginner'
  | 'job'
  | 'overview'
  | 'income'
  | 'bonus'
  | 'dorm'
  | 'simulator'
  | 'shift'
  | 'reviews'
  | 'fit'
  | 'comparison'
  | 'career'
  | 'apply';

export type ClusterConfig = {
  id: ClusterId;
  slug: string;
  pageTitle: string;
  description: string;
  eyebrow: string;
  heroLead: string;
  heroAccent: string;
  heroBody: string;
  heroNote: string;
  answerTitle: string;
  answerBody: string;
  answerPoints: string[];
  bridge?: string;
  sequence: ModuleId[];
  ctas: {
    first: string;
    afterSimulator: string;
    late: string;
    final: string;
  };
};

export const clusters: Record<ClusterId, ClusterConfig> = {
  FACTORY_UNEXP: {
    id: 'FACTORY_UNEXP',
    slug: 'factory-unexp',
    pageTitle: '工場未経験でも始められる？クボタ筑波の仕事・給料・寮を解説',
    description: '工場未経験からクボタ筑波の期間従業員を検討する人へ。仕事内容、日給14,000円、月収例約34万円、寮費0円の条件を分かりやすく整理します。',
    eyebrow: '工場求人を探している方へ',
    heroLead: '工場の仕事、',
    heroAccent: '未経験でも始められる？',
    heroBody: 'クボタ筑波は、製造経験が応募条件に入っていません。仕事内容と大変さを知って、「自分なら続けられそうか」で判断できます。',
    heroNote: '月収約34万円は、20日勤務＋残業25時間＋昼勤のみの例です。',
    answerTitle: '未経験でも、最初から外す必要はありません。',
    answerBody: '公式ページでも別の業界から入った人が紹介されています。まず見るのは、次の3つです。',
    answerPoints: ['何をするか', 'どれくらい大変か', 'どれくらいで慣れた例があるか'],
    bridge: '期間従業員は、期間を決めてメーカーに直接雇われる働き方です。未経験で工場を探すなら、正社員だけでなく期間従業員も比べる。その候補がクボタ筑波です。',
    sequence: ['beginner', 'job', 'overview', 'income', 'bonus', 'dorm', 'simulator', 'shift', 'reviews', 'fit', 'comparison', 'career', 'apply'],
    ctas: {
      first: '未経験で働ける条件を見る',
      afterSimulator: '現在の募集条件を確認する',
      late: '自分に合いそうか募集内容を見る',
      final: 'クボタ筑波の現在の募集条件を見る',
    },
  },
  PERIOD_INCOME: {
    id: 'PERIOD_INCOME',
    slug: 'period-income',
    pageTitle: '期間工は1年でいくら残せる？クボタ筑波の給料・年収例を試算',
    description: 'クボタ筑波の期間従業員は日給14,000円、月収例約34万円。満期慰労金・祝儀・寮費を含め、1年後に残せるお金まで試算します。',
    eyebrow: '期間工の給料・年収を調べている方へ',
    heroLead: '期間工、',
    heroAccent: '1年でいくら残せる？',
    heroBody: '月収だけでは、手元に残るお金は分かりません。クボタ筑波の給料・追加でもらえるお金・寮費を、1年単位で見ていきます。',
    heroNote: '満期慰労金・祝儀・寮には条件があります。',
    answerTitle: '今回の試算では、1年後の貯金は約337.5万円。',
    answerBody: '月収例34万円×12か月、満期慰労金48万円、祝儀28万円で、1年間は約484万円のモデルケースです。寮費0円なら固定費を抑えられる可能性があります。',
    answerPoints: ['最初の日給14,000円', '月給以外で1年最大76万円', '寮費0円の案内あり'],
    sequence: ['income', 'bonus', 'dorm', 'simulator', 'comparison', 'job', 'shift', 'reviews', 'fit', 'career', 'apply'],
    ctas: {
      first: '1年間でもらえる金額を見る',
      afterSimulator: '現在の募集条件を見る',
      late: '自分に合いそうか募集内容を見る',
      final: 'クボタ筑波の現在の募集条件を見る',
    },
  },
  PERIOD_JOBDESC: {
    id: 'PERIOD_JOBDESC',
    slug: 'period-jobdesc',
    pageTitle: '期間工の仕事内容は？クボタ筑波の5工程と大変さを解説',
    description: 'クボタ筑波の期間従業員が行う組立・塗装・溶接・機械加工・運搬を解説。工程ごとの大変さ、勤務時間、給料まで順に確認できます。',
    eyebrow: '期間工の仕事内容を調べている方へ',
    heroLead: '期間工って、',
    heroAccent: '実際なにをする？',
    heroBody: '組立・塗装・溶接・機械加工・運搬。同じ工場でも、体の使い方や慣れるまでの時間は工程によって変わります。',
    heroNote: '担当工程や勤務時間を自分で選べるとは案内されていません。',
    answerTitle: '「ライン作業」でひとまとめにしない。',
    answerBody: '仕事内容、勤務時間、給料の順で見ると、「この仕事で月収例約34万円なら自分はアリか」を判断しやすくなります。',
    answerPoints: ['重いものを扱うか', 'どれくらい歩くか', '暑さや工具の振動があるか'],
    bridge: '仕事内容を見たあと、「この仕事で、この給料なら自分はアリか」で考えます。',
    sequence: ['job', 'reviews', 'beginner', 'shift', 'fit', 'income', 'bonus', 'dorm', 'simulator', 'comparison', 'career', 'apply'],
    ctas: {
      first: '仕事内容と募集条件を見る',
      afterSimulator: '現在の募集条件を確認する',
      late: '自分に合いそうか募集内容を見る',
      final: 'クボタ筑波の現在の募集条件を見る',
    },
  },
};

export type ContentModule = {
  id: ModuleId;
  number: string;
  eyebrow: string;
  title: string;
  tone?: 'paper' | 'ink' | 'warm';
  html: string;
};

export const modules: Record<Exclude<ModuleId, 'simulator' | 'comparison'>, ContentModule> = {
  overview: {
    id: 'overview', number: '01', eyebrow: 'QUICK FACTS', title: 'クボタ筑波、まずここだけ',
    html: `<div class="fact-ledger">
      <div><span>最初の日給</span><strong>14,000<small>円</small></strong></div>
      <div><span>月収例</span><strong>約34<small>万円</small></strong></div>
      <div><span>半年ごとの満期慰労金</span><strong>24<small>万円</small></strong></div>
      <div><span>年2回の祝儀</span><strong>14<small>万円 × 2回</small></strong></div>
      <div><span>寮</span><strong>寮費0<small>円の案内</small></strong></div>
      <div><span>勤務地</span><strong class="fact-text">茨城県<br>つくばみらい市</strong></div>
      <div><span>主な仕事</span><strong class="fact-text">組立・塗装・溶接<br>機械加工・運搬</strong></div>
      <div><span>その後</span><strong class="fact-text">正社員を目指せる<br>制度あり</strong></div>
    </div>
    <p class="fineprint">月収例は20日勤務＋残業25時間＋昼勤のみ。満期慰労金は出勤率90%以上、祝儀と寮にも条件があります。</p>`,
  },
  job: {
    id: 'job', number: '02', eyebrow: 'THE WORK', title: '作るのは、トラクタや産業用エンジン', tone: 'paper',
    html: `<div class="process-grid">
      <article><b>01</b><h3>組立</h3><p>部品を取り付けて、製品を組み上げます。</p></article>
      <article><b>02</b><h3>塗装</h3><p>製品や部品に色を塗ります。</p></article>
      <article><b>03</b><h3>溶接</h3><p>金属のパーツをつなぎます。</p></article>
      <article><b>04</b><h3>機械加工</h3><p>機械で部品を削り、できあがりを確認します。</p></article>
      <article><b>05</b><h3>運搬</h3><p>部品を、使う場所まで運びます。</p></article>
    </div>
    <div class="editorial-note"><strong>同じクボタ筑波でも、担当する仕事で感じ方はかなり変わります。</strong><p>立ち作業、繰り返し、重さ、歩く量、暑さや工具の振動を見るのがポイントです。</p></div>`,
  },
  beginner: {
    id: 'beginner', number: '03', eyebrow: 'NO EXPERIENCE', title: '製造経験は応募条件に入っていません',
    html: `<p class="module-lead">工場で働いたことがなくても、最初から外す必要はありません。公式ページでも、別の業界から入った人が紹介されています。</p>
    <div class="split-copy"><div><p class="big-copy">未経験だから無理か、ではなく。<br><strong>この仕事なら続けられそうか</strong>で見る。</p></div>
    <div><h3>最初に覚える4つ</h3><ol class="number-list"><li>安全ルール</li><li>作業の順番</li><li>部品や工具の使い方</li><li>異常時の止め方・伝え方</li></ol></div></div>
    <div class="experience-line"><span>慣れるまでの本人例</span><p>ピッキング：<strong>3日〜1週間ほど</strong></p><p>バリ取り・溶接：<strong>約1.5か月</strong></p></div>`,
  },
  income: {
    id: 'income', number: '04', eyebrow: 'PAY', title: '最初の日給は14,000円', tone: 'ink',
    html: `<div class="pay-display"><p><span>START</span><strong>14,000</strong><small>円 / 日</small></p><div class="pay-steps"><span>1年半後 <b>14,500円</b></span><span>2年半後 <b>15,000円</b></span></div></div>
    <div class="premium-row"><span>残業 <b>32%増</b></span><span>深夜 <b>37%増</b></span><span>法定休日 <b>40%増</b></span><span>計算 <b>1分単位</b></span></div>
    <p class="fineprint light">月収例約34万円は、20日勤務＋残業25時間＋昼勤のみの例です。</p>`,
  },
  bonus: {
    id: 'bonus', number: '05', eyebrow: 'ONE YEAR', title: '月給以外で、1年最大76万円', tone: 'warm',
    html: `<div class="equation"><div><span>満期慰労金</span><strong>24万円 × 2回</strong><small>出勤率90%以上</small></div><i>＋</i><div><span>祝儀</span><strong>14万円 × 2回</strong><small>支給日などの条件あり</small></div><i>＝</i><div class="equation-total"><span>追加でもらえるお金</span><strong>最大76万円</strong></div></div>
    <div class="annual-total"><span>34万円 × 12か月 ＋ 76万円</span><p>1年間 <strong>約484万円</strong></p><small>当サイト試算。公式年収ではありません。</small></div>`,
  },
  dorm: {
    id: 'dorm', number: '06', eyebrow: 'LIVING COST', title: '寮費0円。では、どんな部屋？',
    html: `<p>会社契約の一般物件が案内され、入寮条件を満たす場合は家賃無料です。募集情報にはTV・冷蔵庫・洗濯機・電子レンジの記載があります。</p>
    <p class="fineprint">Wi-Fi、バス・トイレ、寝具、エアコン、駐車場、光熱費、通勤時間、門限、来客ルールは公開情報では確認できません。応募前に確認してください。</p>`,
  },
  shift: {
    id: 'shift', number: '08', eyebrow: 'SHIFT & REST', title: '勤務時間は1つではありません', tone: 'paper',
    html: `<div class="shift-clock"><div><span>日勤</span><strong>8:00〜16:30</strong></div><div><span>早番</span><strong>7:00〜15:30</strong></div><div><span>遅番</span><strong>14:00〜22:30</strong></div><div><span>夜勤</span><strong>20:00〜4:30</strong></div></div>
    <div class="two-column-copy"><div><h3>休み方</h3><p>5日働いて2日休む、または4日働いて2日休むパターン。4勤2休は土日に仕事が入ることもあります。GW・夏・年末年始には長い休みがあります。</p></div><div><h3>6か月後</h3><p>出勤率80%以上なら<strong>有給休暇10日</strong>。作業服・帽子・安全靴は無料貸与。ベルトは自分で用意します。</p></div></div>`,
  },
  reviews: {
    id: 'reviews', number: '09', eyebrow: 'REAL VOICES', title: '「きつい・楽」ではなく、仕事で変わる',
    html: `<div class="voice-list"><article><span>機械加工・検査</span><p>重い部品を扱ったという本人例がありました。</p></article><article><span>バリ取り・溶接</span><p>工具の振動、鉄粉、暑さが大変だったという本人例。慣れるまで約1.5か月だった例もあります。</p></article><article><span>部品供給・ピッキング</span><p>よく歩く仕事だったという本人例。慣れるまで3日〜1週間ほどだった例があります。</p></article></div>
    <p class="fineprint">いずれも特定の人・工程の体験です。工場全体や全員に当てはまる内容ではありません。</p>`,
  },
  fit: {
    id: 'fit', number: '10', eyebrow: 'FIT CHECK', title: '自分に合うか、ここで確認', tone: 'ink',
    html: `<div class="fit-grid"><div><h3>候補にしやすい人</h3><ul class="check-list positive"><li>今より給料を上げたい</li><li>1年で貯金を増やしたい</li><li>家賃の負担を減らしたい</li><li>未経験から工場で働きたい</li><li>関東で働きたい</li></ul><p>2〜3個当てはまるなら、見ておきたい求人です。</p></div><div><h3>応募前に聞いておきたい人</h3><ul class="check-list cautious"><li>日勤だけで働きたい</li><li>軽い作業だけをしたい</li><li>土日休みが絶対に必要</li><li>担当する仕事を自分で選びたい</li></ul></div></div>`,
  },
  career: {
    id: 'career', number: '12', eyebrow: 'NEXT STEP', title: '1年で区切ってもいい。正社員を目指してもいい',
    html: `<div class="contract-track"><div><span>入社</span><strong>2か月</strong></div><i></i><div><span>次の契約</span><strong>4か月</strong></div><i></i><div><span>その後</span><strong>6か月ごと</strong></div><i></i><div><span>最長</span><strong>2年11か月</strong></div></div>
    <p>1年以上働くと、正社員を目指せる制度があります。予定されている機会は入社1年後・2年後・2年6か月後。筆記試験、仕事ぶり、面接などで決まります。</p>
    <div class="choice-line"><span>1年でお金を作って区切る</span><span>続けて正社員を目指す</span></div>`,
  },
  apply: {
    id: 'apply', number: '13', eyebrow: 'BEFORE APPLY', title: '応募前に見るのは3つだけ', tone: 'paper',
    html: `<div class="apply-checks"><article><b>01</b><p>自分は寮に入れるか</p></article><article><b>02</b><p>勤務時間と担当する仕事はどう決まるか</p></article><article><b>03</b><p>自分の入社日で、満期慰労金や祝儀を受け取れるか</p></article></div>
    <p>応募条件には<strong>6か月働けること</strong>が入っています。</p>
    <div class="required-fields"><span>名前</span><span>フリガナ</span><span>都道府県</span><span>生年月日</span><span>電話番号</span><span>メールアドレス</span></div>
    <p class="fineprint">応募ページの必須入力はこの6項目。自由に書ける欄は任意です。</p>`,
  },
};

export const faq = [
  ['寮費は本当に0円？', '一人用の個室と家族寮について、寮費0円と案内されています。寮に入るための条件があります。'],
  ['寮の水道光熱費はいくら？', '募集ページには金額が出ていません。'],
  ['家具家電は付いている？', '家具家電が標準で付くとは書かれていません。'],
  ['日勤だけで働ける？', '日勤・早番・遅番・夜勤があります。日勤だけを選べるとは書かれていません。'],
  ['担当する仕事は選べる？', '組立・塗装・溶接・機械加工・運搬があります。担当の決まり方は公開されていません。'],
  ['有給はある？', '6か月働き、出勤率80%以上なら10日付きます。'],
  ['作業服や安全靴は自分で買う？', '作業服・帽子・安全靴は無料で貸してもらえます。ベルトは自分で用意します。'],
  ['社会保険は？', '入社日から加入します。'],
  ['正社員を目指せる？', '1年以上働いた人を対象に、正社員を目指せる制度があります。'],
] as const;
