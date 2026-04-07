# Điều tra hiện trạng

## Tình huống

Lead hoặc KH yêu cầu điều tra: "Hiện tại hệ thống xử lý sync offline cho module Booking như thế nào?". Không có tài liệu sẵn hoặc tài liệu đã lỗi thời. Cần tạo báo cáo hiện trạng chi tiết trước khi thiết kế hoặc estimate.

## Bước thực hiện

| # | Skill | Mô tả |
|---|-------|-------|
| 1 | /scout | Tìm files liên quan đến module cần điều tra |
| 2 | /investigate | Điều tra hiện trạng: data flow, logic, xử lý hiện tại |
| 3 | /verify-report | Xác minh data completeness của báo cáo |
| 4 | Gửi lead/KH | Gửi báo cáo đã verify cho stakeholder |

## Lưu ý

- `/investigate` tự đọc codebase để tìm đúng paths — không cần trỏ tay
- `/verify-report` kiểm tra báo cáo có thiếu section hoặc data không đầy đủ không
- Kết quả lưu tại `plans/{sprint}/investigation/{slug}/` để tham chiếu sau
- Dùng `/think` trước `/investigate` nếu module phức tạp, nhiều dependencies
