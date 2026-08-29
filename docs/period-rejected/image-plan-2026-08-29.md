# `/period-rejected/` 完成画像プラン

本文は完成画像、CTA・計測・外枠・フッターのみWeb実装とする。

## Cluster別FV

| ID | ファイル | 役割 |
| --- | --- | --- |
| CL07 | `hero-cl07-period-reject.webp` | 「落ちた」不安を受け止め、次は条件を確認する流れへ |
| CL08 | `hero-cl08-easy-pass.webp` | 受かりやすさは断定できないと伝え、確認可能な条件へ |
| Fallback | `hero-default.webp` | 受かりやすさだけで選ばず、応募後の継続条件まで見る |

## 今回だけ追加する本文

| No. | ファイル | 結論 → 根拠 → 補足 |
| --- | --- | --- |
| 01 | `01-one-result.webp` | 1社の結果だけですべては決まらない |
| 02 | `02-eligibility.webp` | まず公式の募集対象に合うか確認 |
| 03 | `03-application-support.webp` | 応募サポートはあるが合格保証ではない |
| 04 | `04-four-checks.webp` | 仕事内容・給与・勤務生活・寮勤務地を確認 |
| 10 | `10-faq-a.webp` | FAQ 1〜3 |
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
- `11_fit_career.webp`
- `12_precheck_apply.webp`

共通画像は再生成・差し替え・加工を行わない。

## Web側の配置

`FV → CTA → 01 → 02 → 03 → CTA → 04 → 共通給与 → CTA → 共通仕事内容・大変さ・研修・体験例 → 共通勤務・寮 → CTA → 共通適性・応募前確認 → FAQ A/B → 最終画像 → 最終CTA`

画像間は原則 `-1px` で接続。話題が切り替わる `04`、`06`、`09` の直前だけ控えめな章境界を付ける。CTAが区切りになる場所には追加装飾を重ねない。
