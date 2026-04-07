# TDD — Test-Driven Development

## TDD là gì?

Test-Driven Development (TDD) là phương pháp phát triển phần mềm trong đó viết test trước, viết code sau. Thay vì code xong rồi mới nghĩ cách test, TDD đảo ngược quy trình: developer viết test mô tả behavior mong muốn trước, rồi implement code vừa đủ để pass test.

TDD tuân theo chu trình **RED → GREEN → REFACTOR**:

| Giai đoạn | Hành động | Output |
|-----------|-----------|--------|
| 🔴 RED | Viết test cases mô tả behavior mong muốn. Chạy test → FAIL (vì chưa có code) | Test files, tất cả fail |
| 🟢 GREEN | Implement code vừa đủ để tất cả tests pass | Source code, tests pass |
| 🔵 REFACTOR | Cải thiện code quality (naming, duplication, structure) mà không thay đổi behavior | Code sạch hơn, tests vẫn pass |

## TDD khác gì Traditional Flow?

### Traditional Flow (Code-First)

1. Đọc design → code theo design → viết test sau → fix nếu fail
2. Test thường bị bỏ sót hoặc viết thiếu vì code đã "chạy được"
3. Bugs phát hiện muộn, cost to fix cao

### TDD Flow (Test-First)

1. Đọc design → viết test mô tả behavior → code vừa đủ pass test
2. Mọi requirement đều có test từ đầu — không sót
3. Bugs phát hiện ngay trong quá trình implement

### So sánh chi tiết

| | Code-First | TDD |
|--|--|--|
| Thứ tự | Code → Test | Test → Code |
| Test coverage | Thường thấp, bị bỏ sót | Cao, mọi behavior đều có test |
| Bug detection | Muộn (sau code xong) | Sớm (trong lúc implement) |
| Regression | Dễ regression khi fix/thêm feature | Tests bảo vệ chống regression |
| Code quality | Có thể over-engineer | Code chỉ đủ để pass test — lean |
| Confidence | Phụ thuộc vào manual testing | Test suite tự động verify |
| Refactor | Sợ break — không dám refactor | Refactor thoải mái, test bảo vệ |
| Design feedback | Feedback chậm | Test là spec sống, feedback ngay |

### Dữ liệu thực tế

Theo nghiên cứu (Microsoft, IBM, academia):

- TDD giảm **70% regression bugs**
- Tăng code correctness **9–12%** khi dùng với AI
- Projects dùng TDD đạt chất lượng code cao hơn **2.6–4.2x**

## TDD trong AI Native Workflow

Trong workflow 19 bước, TDD tương ứng với **Path A** tại bước 12, sử dụng skill `/cook-tdd` thay vì `/cook`.

### Vị trí trong workflow

```
9. /review-design → APPROVED
↓
Choice Point: Path A (TDD) hay Path B (Code-First)?
↓ Path A                           ↓ Path B
10. /create-testcase               12. /cook
11. /review-testcase               13. /impact-report
12. /cook-tdd
13. /impact-report
```

| | Skill | Khi nào dùng |
|--|--|--|
| Path A (TDD) | /cook-tdd | Feature mới, logic phức tạp, cần coverage cao |
| Path B (Code-First) | /cook | UI-heavy, prototype, refactor, hotfix |

### `/cook-tdd` — Chu trình RED/GREEN/REFACTOR

Skill `/cook-tdd` orchestrate toàn bộ chu trình TDD tự động:

#### PREP — Chuẩn bị

- Đọc `08-detailed-design.md` (APPROVED)
- Đọc `10-testcases.md` nếu có (test cases từ QA)
- Load memories + common-mistakes
- Xác định stack: `--fe`, `--be`, hoặc `--full`

#### RED — Viết test fail

- Gen unit tests từ design specs + test cases
- **FE**: Flutter test framework + Mockito
- Coverage model: 40% happy path + 40% edge cases + 20% error scenarios
- Chạy tests → assert tất cả FAIL
- Self-heal tối đa 3 rounds nếu test fail vì compile error (không phải logic)

#### GREEN — Implement code

- Code vừa đủ để pass tất cả tests
- Tuân thủ rules: file < 200 dòng, no TODO, type-safe
- Thứ tự nếu `--full`: BE → FE
- Verify: `flutter analyze` + `flutter test`

#### REFACTOR — Cải thiện

- Xóa duplication, cải thiện naming
- Không thay đổi behavior — tests phải vẫn pass
- Nếu test fail sau refactor → revert, giữ GREEN state

#### TRACE — Output

Tạo 3 files trong `plans/{ticket}/12-cook/{YYMMDD-HHmm}-cook-tdd-{slug}/`:

| File | Nội dung |
|------|---------|
| cook-trace.md | Summary: files changed, TDD cycle stats, coverage delta |
| review-report.md | Code review: security, correctness, performance, test quality |
| selftest-guide.md | Checklist manual test: normal flow, edge cases, regression |

### Smart Routing — 3 paths tự động

`/cook-tdd` tự detect và chọn path phù hợp:

| Điều kiện | Path | Mô tả |
|-----------|------|-------|
| Có design APPROVED + có test cases | Path A: Full TDD | Dùng test cases để gen tests (tốt nhất) |
| Có design APPROVED, không có test cases | Path B: Gen tests từ design | AI tự gen tests từ specs |
| Không có design | Path C: Block | Hỏi user chạy /pipeline hoặc /design-detail trước |

### Gotchas thường gặp

| # | Vấn đề | Giải pháp |
|---|--------|-----------|
| 1 | Over-mock — mock cả business logic | Chỉ mock: platform plugins, network calls |
| 2 | Test pass ngay — code đã tồn tại | Flag "skipped (code exists)", không phải lỗi |
| 3 | Token budget tight — feature lớn | Split by module: --be round 1, --fe round 2 |
| 4 | Compile error thay vì assert fail | Self-heal 3 rounds, flag nếu vẫn fail |
| 5 | FE+BE parallel issue | LUÔN sequential: BE trước → FE sau |

### Khi nào KHÔNG dùng TDD

- **Hotfix**: Dùng `/fix` hoặc `/fix-bug` (urgent, không cần full cycle)
- **Refactor**: Dùng `/cook` (behavior không đổi, tests cũ vẫn valid)
- **Prototype/POC**: Dùng `/cook` (chưa cần test coverage)
- **Chưa có design**: Chạy `/design-detail` trước

## Tóm tắt

TDD không chỉ là "viết test trước" — nó là một design methodology giúp:

- Mọi requirement đều có test → không sót
- Code chỉ implement đúng những gì cần → lean
- Refactor an toàn vì test bảo vệ
- AI implement chính xác hơn khi có test làm constraint

Trong AI Native Workflow, `/cook-tdd` là cách đơn giản nhất để áp dụng TDD: chỉ cần gọi command, AI tự orchestrate toàn bộ chu trình RED/GREEN/REFACTOR.
