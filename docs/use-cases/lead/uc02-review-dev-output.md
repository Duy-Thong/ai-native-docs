# Review Output Dev

## Tình huống

Dev hoàn thành các milestone (design, code, impact report) và nộp Lead review. Lead kiểm tra chất lượng trước khi cho tester bắt đầu hoặc trước delivery.

## Checklist theo milestone

### Review Design (bước 9)

| # | Kiểm tra | Ghi chú |
|---|---------|---------|
| 1 | Design cover đủ requirements? | So sánh với 01-requirement-analysis.md |
| 2 | API contracts rõ ràng? | Request/response, error codes |
| 3 | DB changes hợp lý? | Migration reversible? |
| 4 | Component hierarchy đúng? | Không over-engineering |
| 5 | Offline-first đã xem xét? | Connectivity handling, TenantContext |

Dùng `/review-design` nếu muốn AI hỗ trợ review.

### Review Code (bước 15)

| # | Kiểm tra | Ghi chú |
|---|---------|---------|
| 1 | Dev đã self-review? | Check self-check trong comment ticket |
| 2 | Evidence có? | Screenshots, test results |
| 3 | Code match design? | So sánh code vs 08-detailed-design.md |
| 4 | Verify pass? | `flutter analyze`, `flutter test` |
| 5 | Không có hardcoded values? | API keys, URLs, credentials |
| 6 | Impact report chính xác? | 13-impact-report.md vs actual changes |

Dùng `/review-mr <PR-URL>` để AI review PR trên GitHub.

## Bước thực hiện

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | Đọc comment dev trên ticket | Kiểm tra format, đủ thông tin |
| 2 | Mở evidence | Xem screenshots, test results |
| 3 | Review file output | Design hoặc code trên branch |
| 4 | (Optional) /review-mr `<PR-URL>` | AI hỗ trợ review code |
| 5 | APPROVED hoặc REJECTED | Comment kết quả |

## Kết quả

- **APPROVED**: Thông báo tester bắt đầu (nếu design) hoặc cho phép merge (nếu code).
- **REJECTED**: Comment chi tiết + nhắn dev sửa. Xem [Handoff Protocol](/workflow/handoff-protocol).
