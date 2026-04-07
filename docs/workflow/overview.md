# Tổng quan Workflow 19 Bước

Mỗi ticket đi qua tối đa 19 bước, chia thành 2 phases chính:

- **Phase A** (Bước 1–6): Phân tích yêu cầu, thiết kế luồng, estimation → nộp khách hàng
- **Phase B** (Bước 7–19): Phân tích source, thiết kế chi tiết, implement, test, delivery

> Bước 2c và 7b là optional — pipeline sẽ hỏi member có cần confirm không trước khi thực hiện.

Output artifacts lưu tại: `plans/Sprint-XX/{ticket-slug}/` — Sprint number lấy từ biến môi trường `CURRENT_SPRINT`.

## Bảng tóm tắt các bước

| # | Skill | Vai trò | Output |
|---|-------|---------|--------|
| 1 | /analyze-ticket | BA / Dev | 01-requirement-analysis.md |
| 2 | /qa-requirement | BA | 02-qa-questions.md |
| 2b | /fill-qa-answers | BA | 02-qa-answers.md |
| 2c | /confirm-understanding (optional) | Architect | 02c-understanding-confirmation.md |
| 3 | /design-flow | BA / Dev | 03-flow-design.md |
| 4 | /estimate | Dev | 04-estimation.md |
| 5 | Manual review | Lead | — |
| 6 | Nộp KH | BA | — |
| 7 | /analyze-source | Dev | 07-source-analysis.md |
| 7b | /confirm-understanding --technical (optional) | Architect | 07b-approach-confirmation.md |
| 8 | /design-detail | Dev | 08-detailed-design.md |
| 9 | /review-design | Lead / Dev | Gate 3b |
| 10 | /create-testcase | Tester | 10-testcases.md |
| 11 | /review-testcase | Lead / Tester | Gate 4b |
| 11b | /export-testcase | Tester | .xlsx |
| 12 | /cook hoặc /cook-tdd | Dev | Source code |
| 12b | /sync-design | Dev | Design update (optional) |
| 13 | /impact-report | Dev | 13-impact-report.md |
| 14 | /gen-unit-test | Dev | Unit test files |
| 15 | /review-code-skill | Dev / Lead | Review report |
| 16 | /update-testcase | Tester | 10-testcases.md (updated) |
| 17 | /test | Tester | Test results |
| 18 | /fix | Dev | Bug fixes |
| 18b | /sync-design | Dev | Design update (optional) |
| 19 | /review-delivery | Lead | GO / NO-GO |

## Quality Gates

| Gate | Bước | Điều kiện |
|------|------|-----------|
| Gate 1 | 2b | Tất cả Must-answer đã được trả lời |
| Gate 1b | 2c (optional) | Member xác nhận AI hiểu đúng business scope |
| Gate 2 | 4 | Estimation được lead duyệt |
| Gate 2.5 | 7b (optional) | Member confirm approach kỹ thuật trước khi design-detail |
| Gate 3b | 9 | Design được APPROVED |
| Gate 4b | 11 | Test cases được APPROVED |
| Gate 5 | 15 | Code review không có blocker |
| Gate 6 | 19 | 4C check passed, GO |

## Xem thêm

- [Phase A — Phân tích & Estimate](./phase-a)
- [Phase B — Implementation](./phase-b)
- [Workflow Shortcuts](./shortcuts)
- [TDD — Test-Driven Development](./tdd)
- [Bug Fix Workflow](./bug-workflow)
- [Tester Flow](./tester-flow)
