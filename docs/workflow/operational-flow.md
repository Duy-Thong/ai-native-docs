# Flow vận hành thực tế

Workflow 19 bước mô tả quy trình đầy đủ. Trong thực tế vận hành hằng ngày, team thực hiện theo **9 công đoạn** — đây là góc nhìn operational của cùng quy trình.

## So sánh với quy trình cũ (trước AI Native)

| Hoạt động | Trước AI Native | Sau AI Native |
|-----------|----------------|---------------|
| Code | Dev code → Reviewer review code | Dev + AI code → Dev self-test → Reviewer nghiệm thu |
| Review Code | Reviewer đọc code, tìm bug | Reviewer kiểm tra output + quy trình, không review code nữa |
| AI review | Chỉ scan PR trên Github | 2 lần: AI review local + AI review Merge Request |
| Self-test | Không có | Bắt buộc trước khi đưa code lên server dev |

## Flow tổng thể 9 công đoạn

```
1. Điều tra + Code  →  2. Dev Self-Test  →  3. AI Review Local
→  4. Push + Tạo PR  →  5. AI Review MR (auto)  →  6. Reviewer Nghiệm thu
→  7. Merge + Deploy dev  →  8. UT + TC + Test  →  9. Fixbug → Retest
```

## Chi tiết từng công đoạn

### 1. Điều tra + Code (Dev + AI)

| | |
|--|--|
| Input | Ticket (đã estimate, có phương án) |
| Ai làm | Dev được giao ticket + AI hỗ trợ |
| Skills | /analyze-source → /cook hoặc /cook-tdd hoặc /fix |

Cách làm:
1. Tái hiện bug / hiểu requirement
2. AI phân tích source code (`/analyze-source`)
3. AI suggest fix / implement (`/cook`, `/cook-tdd`, `/fix`)
4. Dev review + điều chỉnh code
5. Dev chạy build local

### 2. Dev Self-Test (BẮT BUỘC)

> AI code nhanh nhưng có thể sai — self-test là bước bảo vệ.

| | |
|--|--|
| Ai làm | Dev đã code (cùng người) |
| Khi nào | Sau code xong, TRƯỚC khi push |
| Thời gian | 30 phút — 1 giờ tùy ticket |

**7 mục bắt buộc:**

| # | Mục | Evidence |
|---|-----|----------|
| 1 | Build thành công | Screenshot build OK |
| 2 | Bug đã fix / Feature hoạt động | Screenshot/video before-after |
| 3 | Phạm vi ảnh hưởng đã test | Ghi chú: "Đã test MH X, Y, Z — OK" |
| 4 | AI Review Local đã chạy | Log: số shiteki, đã fix hết |
| 5 | Số dòng code (LOC) | Số liệu: +XX, -YY, ~ZZ dòng |
| 6 | Shiteki AI local | Số liệu: X shiteki, X fixed, 0 pending |
| 7 | File thay đổi | Danh sách file (từ git diff) |

### 3. AI Review Local (Lần 1)

| | |
|--|--|
| Skill | /review-code-skill |
| Ai làm | Dev chạy tại local trước khi push |
| Output | Review report: security, correctness, performance |
| Action | Fix tất cả shiteki → 0 pending |

### 4. Push code + Tạo PR

| | |
|--|--|
| Skill | /git hoặc manual |
| Action | Commit → push → tạo PR/MR trên GitLab |
| Kèm theo | Self-Test Report trong PR description hoặc comment ticket |

### 5. AI Review MR (Lần 2 — Tự động)

| | |
|--|--|
| Skill | /review-mr (tự động trigger khi tạo PR) |
| Output | AI review report trên PR: bug tiềm ẩn, coding style, performance |
| Action | Dev đọc report → fix nếu có shiteki → update PR |

### 6. Reviewer Nghiệm thu

> Vai trò mới: Reviewer KHÔNG review code nữa (AI đã review 2 lần). Reviewer nghiệm thu sản phẩm — kiểm tra Dev đã chạy đủ quy trình.

| | |
|--|--|
| Thời gian | 15-30 phút (nhanh hơn review code truyền thống) |

**Checklist nghiệm thu (8 mục):**

| # | Mục |
|---|-----|
| 1 | Self-Test Report đầy đủ 7 mục? |
| 2 | Build thành công? (screenshot) |
| 3 | Bug đã fix? (screenshot before-after) |
| 4 | AI Review Local đã chạy? Shiteki = 0 pending? |
| 5 | AI Review MR đã chạy? Shiteki xử lý hết? |
| 6 | Phạm vi ảnh hưởng đã test? |
| 7 | File thay đổi đúng phạm vi? (không sửa file thừa) |
| 8 | LOC hợp lý? (không quá lớn so với estimate) |

**Kết quả**: PASS → Merge | FAIL → Trả lại Dev

### 7. Merge + Deploy dev

PR approved → merge → auto deploy lên dev environment.

### 8. UT + TC + Test lần 1

| | |
|--|--|
| UT | Dev + AI gen unit tests (/gen-unit-test) |
| TC | Tester gen test cases (/create-testcase) → review → export Excel |
| Test 1 | Tester test trên dev environment theo TC |
| Output | TC document + Test report + Bug list |

### 9. Fixbug → Retest

| | |
|--|--|
| Fixbug | Lặp lại công đoạn 1-6: Code fix → Self-test → AI review → Nghiệm thu |
| Test 2 | Re-test bug + Integration test + Regression + Evidence |
| Test 3 | Monkey test trên STG (< 8h) |
| Review cuối | TL + PM kiểm tra tất cả output |

## Mapping: 9 công đoạn → 19 bước

| Công đoạn | Bước workflow | Skills |
|-----------|--------------|--------|
| 1. Điều tra + Code | 7, 8, 12 | /analyze-source, /design-detail, /cook, /cook-tdd |
| 2. Self-Test | — (manual) | Checklist 7 mục |
| 3. AI Review Local | 15 | /review-code-skill |
| 4. Push + PR | — | /git |
| 5. AI Review MR | — | /review-mr (auto) |
| 6. Nghiệm thu | 19 (simplified) | Checklist 8 mục |
| 7. Merge + Deploy | — | Manual |
| 8. UT + TC + Test | 10, 11, 14, 17 | /gen-unit-test, /create-testcase, /test |
| 9. Fixbug + Retest | 18, 18b | /fix, /sync-design |

## So sánh thời gian

| Hoạt động | Trước | Sau | Thay đổi |
|-----------|-------|-----|----------|
| Dev code | 100% thời gian | ~75% (AI assist) | Giảm 25% |
| Dev self-test | 0 | 30-60 phút | Mới |
| Reviewer review code | 1-2 giờ | 0 | Bỏ |
| Reviewer nghiệm thu | 0 | 15-30 phút | Mới (nhanh hơn review code) |
| **Net** | | | **Nhanh hơn ~1 giờ/ticket** |

## Self-Test Report Template

```
=== SELF-TEST REPORT ===
Ticket: [TICKET-ID]
Dev: [Tên]
Ngày: [dd/mm/yyyy]

1. Build: ✅ OK / ❌ Lỗi (ghi chi tiết)
2. Bug đã fix: ✅ Confirm (screenshot đính kèm)
3. Phạm vi test: MH_A ✅, MH_B ✅, MH_C ✅
4. AI Review Local:
   - Shiteki phát hiện: X
   - Đã fix: X
   - Pending: 0
5. LOC: +XX / -YY / ~ZZ
6. Files changed: X files (danh sách đính kèm)
7. Ghi chú: [nếu có vấn đề đặc biệt]
```

## Output bắt buộc của Dev (trước khi đưa Reviewer)

| # | Output | Dạng | Khi nào |
|---|--------|------|---------|
| 1 | Self-Test Report | Template ở trên | Luôn |
| 2 | Screenshot build OK | Ảnh | Luôn |
| 3 | Screenshot bug fix (before-after) | Ảnh/Video | Luôn |
| 4 | AI Review Local log | Số shiteki + status | Luôn |
| 5 | AI Review MR | Tự động trên PR | Tự động |
| 6 | Số dòng code (LOC) | Số liệu | Luôn |
| 7 | Danh sách file thay đổi | git diff --name-only | Luôn |
| 8 | File ảnh hưởng | Document | Khi ticket phức tạp |
| 9 | Shiteki log | Markdown | Khi AI có shiteki |
