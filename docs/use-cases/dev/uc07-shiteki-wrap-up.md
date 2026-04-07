# Shiteki — Wrap-up sau Task

## Tình huống

Dev vừa hoàn thành code/review/fix cho ticket. Trước khi đóng task hoặc kết thúc session, cần chạy `/shiteki` để AI rà soát lại toàn bộ output, báo cáo vấn đề phát hiện được và đề xuất cải tiến.

## Khi nào chạy Shiteki

| Thời điểm | Bắt buộc? | Ghi chú |
|-----------|-----------|---------|
| Sau /review-code-skill | Có | Ghi nhận issues phát hiện từ review |
| Sau /review-design | Có | Ghi nhận design issues |
| Sau /fix hoặc /fix-bug | Khuyến nghị | Phát hiện patterns lặp lại |
| Kết thúc session làm việc | Khuyến nghị | Wrap-up tổng hợp |
| Khi phát hiện output AI sai | Ngay lập tức | Ghi nhận mistake để AI học |

## Bước thực hiện

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | /shiteki | AI rà soát output, liệt kê issues theo category |
| 2 | Đọc báo cáo | AI phân loại: A~J (từ critical đến trivial) |
| 3 | Đánh giá từng item | Đồng ý hay bỏ qua? |
| 4 | Approve fix | Bảo AI: "fix item 1, 3, 5" hoặc "fix tất cả" |
| 5 | AI thực hiện fix | AI sửa code/design theo đề xuất đã duyệt |
| 6 | Verify fix | Dev check lại phần AI vừa sửa |

## Phân loại Shiteki (指摘)

| Loại | Vấn đề | Ví dụ |
|------|--------|-------|
| A | Logic sai | Điều kiện if ngược, missing null check |
| B | Thiếu xử lý | Missing error handling, missing offline case |
| C | Security | Hardcoded credentials, unvalidated input |
| D | Performance | N+1 query, unnecessary rebuilds |
| E | Design mismatch | Code không match design doc |
| F | Convention vi phạm | Naming sai, file quá dài |
| G | UX/UI | Layout lệch, text sai |
| H | Test gap | Test case thiếu edge case |
| I | Doc outdated | Design doc chưa sync với code |
| J | Trivial | Typo, formatting |

## Ví dụ tương tác

```
Dev: /shiteki

AI: 【Shiteki Report】
Found 3 issues:

1. [B] Missing error handler trong PaymentViewModel._submitPayment()
   → Đề xuất: Thêm try-catch, gọi onError callback với message từ i18n

2. [F] File payment_screen.dart: 245 dòng (> 200 limit)
   → Đề xuất: Tách PaymentForm ra file riêng

3. [I] 08-detailed-design.md chưa update API response mới
   → Đề xuất: Chạy /sync-design

Dev: fix item 1 và 2, item 3 để sau

AI: [Thực hiện fix item 1, 2...]
```

## Lưu ý

- Shiteki report lưu tại `plans/{sprint}/{ticket}/shiteki/` (nếu có context ticket)
- AI tự phân loại severity — dev quyết định fix hay bỏ qua
- Nếu phát hiện pattern lặp lại (cùng mistake 3+ lần) → nên chạy `/update-knowledge`
- Lead có thể review shiteki report để đánh giá chất lượng output AI
