# Review Merge Request bằng AI

## Tình huống

Dev code xong, đã tạo PR trên GitHub. Chạy `/review-mr` để AI review toàn bộ PR một lần: đọc diff, so sánh với design, phân loại shiteki theo mức A~J. Đây là lần review MR trong flow [2x AI Review](/use-cases/dev/uc09-dual-ai-review).

## Bước thực hiện

| # | Skill | Mô tả |
|---|-------|-------|
| 1 | /review-mr `<PR-URL>` | AI đọc diff toàn bộ PR, so sánh design |
| 2 | Đọc review report | Xem danh sách shiteki: A~J severity |
| 3 | Fix shiteki | Fix Critical (A-C) bắt buộc, Major (D-F) nên fix, Minor (G-J) tùy chọn |
| 4 | Update PR | Push fix → AI có thể re-review nếu cần |
| 5 | Confirm 0 pending | Đảm bảo không còn shiteki chưa xử lý |

## Ví dụ

```bash
# Review 1 PR
/review-mr https://github.com/org/ecn-fe/pull/42

# Review với context sprint
/review-mr https://github.com/org/ecn-fe/pull/42 --sprint S10
```

## Phân loại Shiteki A~J

| Loại | Mô tả | Priority |
|------|-------|---------|
| A | Critical bug | Bắt buộc |
| B | Logic error | Bắt buộc |
| C | Security issue | Bắt buộc |
| D | Performance | Nên fix |
| E | Code style | Nên fix |
| F | Documentation | Nên fix |
| G | Test coverage | Tùy chọn |
| H | Design inconsistency | Tùy chọn |
| I | Naming | Tùy chọn |
| J | Other | Tùy chọn |

## Khác biệt `/review-code-skill` vs `/review-mr`

| | /review-code-skill | /review-mr |
|--|-------------------|-----------|
| Khi nào | Trước khi push | Sau khi tạo PR |
| Input | Files trên local | Diff trên GitHub PR |
| Focus | Security, correctness | Coding style, design match, regression |
| Shiteki format | Report local | Comment trên PR hoặc report |

## Lưu ý

- Chạy sau khi tạo PR — cần PR URL
- Có thể kết hợp: `/gen-merge` (gen description) → `/review-mr` (review code)
- Shiteki log ghi vào Self-Test Report mục 4 + 6
- Reviewer sẽ check AI Review MR = 0 pending trong bước [Nghiệm thu](/use-cases/lead/uc06-acceptance-review)
