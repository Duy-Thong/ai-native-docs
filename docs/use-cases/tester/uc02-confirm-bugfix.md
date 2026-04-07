# Confirm Bug Fix

## Tình huống

Dev đã fix bug và comment branch/commit lên tracker. Tester nhận thông báo và cần verify rằng fix hoạt động đúng, không gây regression, và đủ điều kiện đóng ticket.

## Bước thực hiện

| # | Skill | Mô tả |
|---|-------|-------|
| 1 | /confirm-bugfix `<bug-ticket-id>` | Fetch bug, checkout fix branch, đọc fix artifacts |
| 2 | Đọc phân tích fix scope | AI đề xuất các test scenarios cần retest |
| 3 | Test manual theo đề xuất | Tester thực hiện kiểm tra trên môi trường test |
| 4 | Kết luận: CONFIRMED hoặc REOPEN | Ghi kết quả vào confirm doc |

## Lưu ý

- Output: `plans/{sprint}/{parent}/bug/{bug-slug}/05-bugfix-confirm.md`
- Nếu **CONFIRMED**: comment kết quả lên tracker, close child issue
- Nếu **REOPEN**: comment lý do cụ thể lên tracker, dev sẽ nhận thông báo và fix lại
- `/confirm-bugfix` tự đọc dev's fix artifacts để hiểu đúng scope thay đổi
- Kiểm tra cả regression — không chỉ test đúng bug được report
