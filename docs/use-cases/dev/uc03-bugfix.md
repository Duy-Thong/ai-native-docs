# Fix Bug từ Tester

## Tình huống

Tester test manual phát hiện bug, đã tạo child issue trên tracker với screenshot và steps to reproduce. Dev nhận thông báo và bắt đầu quy trình fix — từ phân tích root cause đến verify và sync lại design nếu cần.

## Bước thực hiện

| # | Skill | Mô tả |
|---|-------|-------|
| 1 | /fetch-bug | Import bug từ tracker → ticket/{parent}/bug/ |
| 2 | /analyze-bug | Root cause analysis + impact assessment |
| 3 | /propose-fix | Đề xuất fix strategy — dừng chờ user confirm |
| — | User approve proposal | Pause point — AI không tự fix khi chưa được duyệt |
| 4 | /fix-bug | Implement fix theo proposal đã duyệt |
| 5 | Self-review | Đọc lại code fix, kiểm tra logic |
| 6 | Self-check | Chạy verify commands, test local |
| 7 | /test | Run tests + regression cho vùng ảnh hưởng |
| 8 | /review-code-skill | Code review |
| 9 | /sync-design | Update design doc nếu behavior thay đổi |
| 10 | /impact-report | Mini impact report cho bug fix |
| 11 | Lưu evd + Comment ticket | Lưu evidence, comment ticket cho tester |

## Lưu ý

- Dùng `/bug-pipeline <bug-id> --parent <ticket-slug>` để auto chạy toàn bộ
- Bước 3 có approval gate — AI dừng và trình bày proposal, chờ user xác nhận trước khi code
- Sau `/fix-bug`: bắt buộc self-review → self-check → lưu evidence
- Comment lên tracker để tester biết → tester chạy `/confirm-bugfix`. Xem [Handoff Protocol](/workflow/handoff-protocol)
- Nếu fix làm thay đổi behavior so với design gốc, bắt buộc chạy `/sync-design`
- Artifacts lưu tại `plans/{sprint}/{parent}/bug/{bug-slug}/`
