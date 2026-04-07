# Fix Shiteki từ AI Review

## Tình huống

AI review (`/review-code-skill` hoặc `/review-mr`) phát hiện shiteki. Dev cần xử lý từng shiteki: fix code, verify, re-review đến khi 0 pending. Đây là bước bắt buộc trước khi submit Reviewer [nghiệm thu](/use-cases/lead/uc06-acceptance-review).

## Phân loại và ưu tiên

| Severity | Loại | Quy tắc |
|----------|------|---------|
| A-C (Critical) | Bug, Logic error, Security | Bắt buộc fix — không skip |
| D-F (Major) | Performance, Style, Docs | Nên fix — skip chỉ khi có lý do rõ ràng |
| G-J (Minor) | Test, Naming, Design, Other | Tùy chọn — ghi lý do nếu skip |

## Bước thực hiện

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | Đọc review report | Xem danh sách shiteki + severity |
| 2 | Fix Critical (A-C) | Fix tất cả, không ngoại lệ |
| 3 | Fix Major (D-F) | Fix hoặc ghi lý do skip |
| 4 | Chạy verify | `flutter analyze` + `dart format .` |
| 5 | Chạy tests | `flutter test` — đảm bảo fix không break existing code |
| 6 | Re-review (nếu cần) | `/review-code-skill` lại cho lần fix lớn |
| 7 | Update report | Ghi log: "X shiteki, X fixed, 0 pending" |

## Ví dụ flow thực tế

```bash
# AI review phát hiện 5 shiteki
/review-code-skill
# → Report: 1 Critical (A), 2 Major (D,E), 2 Minor (I,J)

# Fix Critical + Major
# (dev sửa code theo suggestion trong report)

# Verify
flutter analyze && flutter test

# Re-review sau fix
/review-code-skill
# → Report: 0 Critical, 0 Major, 1 Minor (J) — accepted

# Ghi vào Self-Test Report
# AI Review Local:
#   - Shiteki phát hiện: 5
#   - Đã fix: 4
#   - Skip (Minor, accepted): 1
#   - Pending: 0
```

## Cách xử lý từng loại shiteki

| Loại | Cách xử lý |
|------|-----------|
| Bug (A) | Đọc suggestion → fix logic → test lại scenario |
| Logic error (B) | Trace flow → fix condition/edge case |
| Security (C) | Fix theo OWASP suggestion (injection, auth bypass...) |
| Performance (D) | Optimize query, remove unnecessary rebuilds, add caching |
| Style (E) | Rename, reformat, extract widget/function |
| Docs (F) | Update comment, docstring |
| Minor (G-J) | Fix nếu nhanh, skip nếu trivial — ghi lý do |

## Lưu ý

- Không skip Critical (A-C) dù thời gian gấp — đây là bug thật
- Fix xong phải chạy verify + tests trước khi re-review
- Log shiteki count vào Self-Test Report — Reviewer sẽ check "0 pending?"
- Nếu không đồng ý với shiteki AI → ghi lý do cụ thể, không chỉ "skip"
- Shiteki từ `/review-mr` (lần 2) cũng fix theo flow này
