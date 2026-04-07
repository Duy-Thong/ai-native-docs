# Self-review sau khi AI Code

## Tình huống

AI vừa hoàn thành `/cook`, `/cook-tdd`, hoặc `/fix`. Code đã được viết nhưng chưa được dev kiểm tra. Dev phải review lại trước khi chuyển cho tester hoặc nộp lead.

## Checklist Self-review

### Code Quality

| # | Mục kiểm tra | ✅ |
|---|-------------|---|
| 1 | Đọc từng file AI đã tạo/sửa | ☐ |
| 2 | Logic đúng theo design? | ☐ |
| 3 | Edge cases được handle? | ☐ |
| 4 | Không hardcode tokens, API keys, credentials? | ☐ |
| 5 | Không có `debugPrint` hay log nhạy cảm còn sót? | ☐ |
| 6 | Naming conventions đúng? (snake_case files, PascalCase class) | ☐ |
| 7 | File < 200 dòng? | ☐ |

### Verify Commands

| Platform | Command | Kết quả |
|----------|---------|---------|
| Flutter | `flutter analyze` | ☐ PASS |
| Flutter | `flutter test` | ☐ PASS (coverage ≥80%) |
| Dart | `dart format .` | ☐ PASS |

### Test Manual Local

| # | Mục kiểm tra | ✅ |
|---|-------------|---|
| 1 | Mở app trên local, test flow chính | ☐ |
| 2 | Test happy path | ☐ |
| 3 | Test 1-2 edge cases | ☐ |
| 4 | Chụp screenshots kết quả | ☐ |

### Evidence & Handoff

| # | Mục kiểm tra | ✅ |
|---|-------------|---|
| 1 | Lưu evidence vào `plans/{sprint}/{ticket}/evidence/` | ☐ |
| 2 | Upload screenshots + test results | ☐ |
| 3 | Comment ticket theo format chuẩn | ☐ |
| 4 | Nhắn tester/lead: ticket sẵn sàng | ☐ |

## Self-Test Report (BẮT BUỘC)

Sau khi hoàn thành checklist, tổng hợp thành Self-Test Report:

```
=== SELF-TEST REPORT ===
Ticket: [TICKET-ID]
Dev: [Tên]
Ngày: [dd/mm/yyyy]

1. Build: ✅ OK / ❌ Lỗi (ghi chi tiết)
2. Bug đã fix / Feature hoạt động: ✅ Confirm (screenshot đính kèm)
3. Phạm vi test: MH_A ✅, MH_B ✅, MH_C ✅
4. AI Review Local:
   - Shiteki phát hiện: X
   - Đã fix: X
   - Pending: 0
5. LOC: +XX / -YY / ~ZZ
6. Files changed: X files (danh sách đính kèm)
7. Ghi chú: [nếu có vấn đề đặc biệt]
```

Report này đính kèm khi tạo PR hoặc comment ticket. Reviewer sẽ kiểm tra đủ 7 mục trong bước [Nghiệm thu](/use-cases/lead/uc06-acceptance-review).

## Lưu ý

- Không skip self-review dù AI report "build pass" — AI có thể miss business logic
- Nếu phát hiện code AI sai: sửa trực tiếp hoặc chạy `/fix` với mô tả cụ thể
- Checklist này apply cho mọi lần `/cook`, `/cook-tdd`, hoặc `/fix`, kể cả hotfix
- Sau self-test → chạy [2x AI Review](/use-cases/dev/uc09-dual-ai-review) trước khi submit Reviewer
