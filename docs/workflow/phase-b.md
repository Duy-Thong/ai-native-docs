# Phase B — Implementation (Bước 7–19)

Phase B bao gồm 13 bước từ phân tích source đến delivery review. Bắt đầu sau khi Phase A hoàn tất và khách hàng đã xác nhận.

## Bảng tham chiếu các bước

| # | Skill | Vai trò | Input | Output |
|---|-------|---------|-------|--------|
| 7 | /analyze-source | Dev | 03-flow-design.md, codebase | 07-source-analysis.md |
| 7b | /confirm-understanding --technical (optional) | Architect | 07-source-analysis.md + 03-flow-design.md | 07b-approach-confirmation.md |
| 8 | /design-detail | Dev | 07-source-analysis.md | 08-detailed-design.md |
| 9 | /review-design | Lead / Dev | 08-detailed-design.md | APPROVED / REJECTED |
| 10 | /create-testcase | Tester | Design + code diff | 10-testcases.md |
| 11 | /review-testcase | Lead / Tester | 10-testcases.md | APPROVED / REJECTED |
| 11b | /export-testcase | Tester | 10-testcases.md | .xlsx |
| 12 | /cook hoặc /cook-tdd | Dev | 08-detailed-design.md | Source code commit |
| 12b | /sync-design | Dev | Code vs design delta | Design update |
| 13 | /impact-report | Dev | Code diff | 13-impact-report.md |
| 14 | /gen-unit-test | Dev | Source code | Unit test files |
| 15 | /review-code-skill | Dev / Lead | Source code | Review report |
| 16 | /update-testcase | Tester | 13-impact-report.md | 10-testcases.md updated |
| 17 | /test | Tester | Test suite | Test results |
| 18 | /fix | Dev | Failed tests | Bug fixes |
| 18b | /sync-design | Dev | Fix delta | Design update |
| 19 | /review-delivery | Lead | All artifacts | GO / NO-GO |

## Chi tiết các bước quan trọng

### Bước 7b: Xác nhận approach kỹ thuật (Optional)

Architect trình bày approach kỹ thuật: files sẽ sửa, patterns áp dụng, DB changes, key decisions → member confirm trước khi đi vào design-detail.

> **Gate 2.5**: Member confirm approach → tiếp tục Bước 8. Bước này optional — bỏ qua được với ticket đơn giản.

Usage: `/confirm-understanding --technical`

### Bước 9b: Choice Point — Path A vs Path B

| | Path A (TDD) | Path B (Code First) |
|--|---|---|
| Thứ tự | Test (10→11) → /cook-tdd (12) → Impact (13) | /cook (12) → Impact (13) → Test (10→11) |
| Khi dùng | Feature mới, logic phức tạp | Refactor, UI-heavy, prototype |

### Bước 10: 5 loại test case

| Loại | Mô tả |
|------|-------|
| Normal | Happy path, expected inputs |
| Boundary | Giá trị biên, edge cases |
| Error | Invalid inputs, error states |
| Security | Auth, injection, permission |
| Offline | Mất mạng, retry, cache |

### Bước 12: Thứ tự implement

Hai cách implement:

- `/cook` — implementation-first (default), viết code trước
- `/cook-tdd` — TDD-first: gen failing tests → code to pass → refactor. Xem chi tiết tại [TDD](./tdd)

BE trước, FE sau. `12b /sync-design` là optional — chạy khi implementation thực tế lệch design ban đầu.

### Bước 14: Stack unit test

- **FE**: Flutter test framework, Mockito
- **BE**: PHPUnit (nếu có BE)

### Bước 19: 4C Check

| | Ý nghĩa |
|--|---------|
| Completeness | Đủ tính năng theo requirement |
| Correctness | Logic đúng, không bug nghiêm trọng |
| Cleanliness | Code sạch, không tech debt nghiêm trọng |
| Compliance | Tuân thủ security, standards |

## Loop Handling

| Tình huống | Hành động |
|-----------|-----------|
| Review design REJECTED | Quay lại Bước 8 |
| Review testcase REJECTED | Quay lại Bước 10 |
| Review code có blocker | Quay lại Bước 12 |
| Test FAIL | Bước 18 → 18b → quay lại 17 |
| Delivery NO-GO | Lead xác định bước cần fix |
