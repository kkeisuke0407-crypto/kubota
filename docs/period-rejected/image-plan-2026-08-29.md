# `/period-rejected/` 完成画像プラン

本文は完成画像、CTA・計測・外枠・フッターのみWeb実装とする。

## Cluster別FV

| ID | ファイル | 役割 |
| --- | --- | --- |
| CL07 | `hero-cl07-period-reject.webp` | 「落ちた」不安を受け止め、次は条件を確認する流れへ |
| CL08 | `hero-cl08-easy-pass.webp` | 受かりやすさは断定できないと伝え、確認可能な条件へ |
| Fallback | `hero-default.webp` | 受かりやすさだけで選ばず、応募後の継続条件まで見る |

## このLP専用の本文

| No. | ファイル | 結論 → 根拠 → 補足 |
| --- | --- | --- |
| 01-CL07 | `01-one-result.webp` | 1社の結果だけですべては決まらない |
| 01-CL08 | `01-first-answer-cl08.webp` | 採用率を断定せず、募集対象・未経験応募・選考前サポートで候補を絞る |
| 02 | `02-eligibility.webp` | まず公式の募集対象に合うか確認 |
| 03 | `03-application-support.webp` | 応募サポートはあるが合格保証ではない |
| 04 | `04-why-kubota.webp` | 次の候補としてクボタ筑波を見る4つの理由を1枚で確認 |
| 05 | `04-four-checks.webp` | 仕事内容・給与・勤務生活・寮勤務地を確認 |
| 09 | `09-next-candidate.webp` | 次の応募候補として確認しやすい人を整理し、1年後のキャリア3択は載せない |
| 10-CL07 | `10-faq-a.webp` | 不採用後のFAQ 1〜3 |
| 10-CL08 | `10-faq-cl08.webp` | 受かりやすい期間工の選び方から始めるFAQ 1〜3 |
| 11 | `11-faq-b.webp` | FAQ 4〜6 |
| 12 | `12-final.webp` | 「受かるか」だけで決めず、続けられる条件まで確認 |

## そのまま利用する共通セクション

- `01_four_numbers.webp`
- `02_jobs_reality.webp`
- `03_difficulty_varies.webp`
- `04_training_assignment.webp`
- `05_experience_examples.webp`
- `06_shifts_payday.webp`
- `07_dorm_confirmed.webp`
- `12_precheck_apply.webp`

共通画像は再生成・差し替え・加工を行わない。

`11_fit_career.webp` は「1年後の3つの選択肢」まで含みCL07/08には長いため、このLPでは参照を外し、候補判断だけに絞った専用画像 `09-next-candidate.webp` を使用する。

## Web側の配置

`Cluster別FV → CTA → Cluster別最初の答え → 応募条件 → 応募サポート → クボタ候補理由 → CTA → 4条件 → 共通給与 → CTA → 共通仕事内容・大変さ・研修・体験例 → 共通勤務・寮 → CTA → 専用候補判断・共通応募前確認 → Cluster別FAQ A → 共通FAQ B → 最終画像 → 最終CTA`

CL07の応募サポート後CTAだけ「次の応募先として候補になるか確認する」に切り替える。CL08は「応募条件とサポート内容を確認する」を維持する。

画像間は原則 `-1px` で接続。話題が切り替わる `04`、`06`、`09` の直前だけ控えめな章境界を付ける。CTAが区切りになる場所には追加装飾を重ねない。
