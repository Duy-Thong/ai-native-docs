# Resume Ticket từ Session Trước

## Tình huống

Hôm qua đang làm ticket dở — ví dụ: đã xong design detail, chưa code. Hôm nay mở session GitHub Copilot mới, context bị mất. Cần nhanh chóng rebuild context và tiếp tục từ đúng bước.

## Bước thực hiện

| # | Skill | Mô tả |
|---|-------|-------|
| 1 | /resume-ticket | Load artifacts, rebuild context, detect bước tiếp theo |
| 2 | Chạy skill tiếp theo theo gợi ý | VD: /cook nếu resume sau design xong |

## Lưu ý

- `/resume-ticket` đọc toàn bộ artifacts trong `plans/{sprint}/{ticket-slug}/` để rebuild context
- Gợi ý bước tiếp theo dựa trên artifacts đã có — không cần nhớ đang ở đâu
- Nếu đang làm nhiều ticket song song: `/resume-ticket {ticket-slug}` để chỉ định ticket cụ thể
- Sau khi context được rebuild, AI sẽ tóm tắt tiến độ và đề xuất bước tiếp theo rõ ràng
