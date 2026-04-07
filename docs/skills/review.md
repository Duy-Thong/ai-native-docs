# Skills Review

Nhóm skills đảm bảo chất lượng qua các review gates (Phase B-9 → B-19).

## `/review-code-skill`

Review code theo Security/OWASP, correctness, performance. Phát hiện blast radius và edge cases.

```
/review-code-skill
/review-code-skill --scope lib/scenes/booking
/review-code-skill --focus security
```

| | |
|--|--|
| Input | Source code, 08-detailed-design.md |
| Output | Review report: issues theo severity (Critical/Major/Minor), fix suggestions |

**Checklist tự động:**

| Category | Nội dung |
|----------|---------|
| Security | OWASP Top 10, injection, auth |
| Correctness | Logic, edge cases, null handling |
| Performance | Unnecessary rebuilds, memory leaks |
| Architecture | Clean Architecture violations, layer dependencies |

**Tips**: Critical issues = blocking. Major = cần fix trước delivery. Minor = nice-to-have.

## `/review-design`

Verify tính đầy đủ, khả thi, và nhất quán của design. Trả về APPROVED hoặc REJECTED.

```
/review-design
/review-design --focus api-contracts
```

| | |
|--|--|
| Input | 08-detailed-design.md, 01-requirement-analysis.md |
| Output | Review report: APPROVED/REJECTED + gaps list |

**Tips**: Gate bắt buộc trước khi bắt đầu implement. REJECTED = phải update design và review lại.

## `/review-testcase`

Check coverage và traceability của test cases. Đảm bảo mọi requirement đều có test.

```
/review-testcase
```

| | |
|--|--|
| Input | 10-testcases.md, 01-requirement-analysis.md |
| Output | Review report: APPROVED/REJECTED, coverage matrix, missing cases |

## `/review-delivery`

Review cuối cùng trước delivery: kiểm tra 4C — Correctness, Completeness, Consistency, Compliance. Quyết định GO/NO-GO.

```
/review-delivery
/review-delivery --checklist custom-checklist.md
```

| | |
|--|--|
| Input | Toàn bộ artifacts: ticket, design, code, test results |
| Output | Delivery report: GO/NO-GO + checklist kết quả |

**4C Checklist:**

| | Ý nghĩa |
|--|---------|
| Correctness | Code đúng với requirements |
| Completeness | Tất cả requirements được implement |
| Consistency | Code khớp với design |
| Compliance | Tuân thủ coding standards, security policy |

## `/review-mr`

Review GitLab Merge Request: đọc diff, so sánh với design, phân loại shiteki (指摘) theo mức A~J.

```
/review-mr --mr 42
/review-mr --url https://gitlab.nri-dx.com/org/repo/-/merge_requests/42
```

| | |
|--|--|
| Input | MR number hoặc URL |
| Output | Review comment list với phân loại shiteki, severity, file/line references |

**Tips**: Kết hợp với `/shiteki` để track và resolve từng comment.

## `/shiteki`

Quản lý chỉ trích (指摘) từ review: ghi nhận, phân loại (A~J), root cause, đề xuất fix.

```
/shiteki add "Thiếu null check ở line 42"
/shiteki list
/shiteki resolve S-001
```

| | |
|--|--|
| Input | Review comments hoặc shiteki ID |
| Output | Shiteki registry: ID, category, status, fix suggestion |

**Phân loại A~J**: A = Critical bug, B = Logic error, C = Security, D = Performance, E = Style, F = Documentation, G = Test, H = Design inconsistency, I = Naming, J = Other.

## `/multi-model-review`

Chạy review song song bằng nhiều AI model, tổng hợp findings.

```
/multi-model-review
/multi-model-review --scope lib/domain/usecases/
```

| | |
|--|--|
| Input | Source code path |
| Output | Merged review report: multi-model findings validated |

**Tips**: Dùng cho critical modules. Kết quả được validate và deduplicate.

## `/analysis-shiteki`

Phân tích shiteki toàn sprint cho leader: thống kê, trends, critical pending. Incremental — chỉ đọc entries mới so với report trước.

```
/analysis-shiteki
/analysis-shiteki --sprint S10
/analysis-shiteki --date 260401
```

| | |
|--|--|
| Input | Shiteki entries trong plans/Sprint-XX/*/shiteki/ |
| Output | Daily report: plans/Sprint-XX/analysis/shiteki/{YYMMDD}-daily-report.md |

**Tips**: Dùng `--date` để xem report cũ (read-only). Chạy hằng ngày để track progress shiteki.

## `/verify-report`

Cross-validate tính đầy đủ và độ chính xác của report: kiểm tra data consistency, conclusions có evidence không.

```
/verify-report plans/reports/researcher-report.md
/verify-report --all plans/reports/
```

| | |
|--|--|
| Input | Report file path |
| Output | Verification result: verified/issues found + specific discrepancies |

**Tips**: Dùng trước khi gửi report cho KH hoặc trước delivery review.
