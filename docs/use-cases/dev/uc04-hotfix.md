# Hotfix Production

## Tình huống

Bug nghiêm trọng trên production cần fix gấp. Không có thời gian phân tích kỹ hay viết design — implement thẳng, test, review nhanh và merge.

## Bước thực hiện

| # | Skill | Mô tả |
|---|-------|-------|
| 1 | /cook | Implement fix trực tiếp — skip analysis/design |
| 2 | Self-review | Đọc lại code, kiểm tra không bị regression |
| 3 | /test | Test case targeted cho bug này |
| 4 | /review-delivery | Review nhanh cho delivery (dùng thay review-code-skill) |
| 5 | /git | Commit + push với tag `[hotfix]` |
| — | `/pipeline --type=hotfix` | Tạo MR với priority cao |

## Lưu ý

- Hotfix bắt buộc: test, self-review trước khi push
- **Skip**: `/analyze-ticket`, `/design-flow`, `/design-detail`, `/estimate`, `/impact-report`
- Sau khi merge: tạo follow-up ticket để bổ sung docs + design sync (không làm trong hotfix)
- Dùng `/pipeline --type=hotfix` để tạo MR với label `hotfix` và priority cao
- Nếu fix ảnh hưởng nhiều flow → cân nhắc chuyển thành bugfix thường thay vì hotfix
