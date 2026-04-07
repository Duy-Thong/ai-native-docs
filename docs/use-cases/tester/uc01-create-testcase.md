# Tạo Test Case sau Design

## Tình huống

Dev đã commit thiết kế chi tiết (design-detail) và comment đầy đủ nội dung lên tracker. Tester nhận thông báo và bắt đầu quy trình tạo test case từ design — bao gồm 5 categories chuẩn và export ra Excel nộp lead.

## Bước thực hiện

| # | Skill | Mô tả |
|---|-------|-------|
| 1 | /pre-sync-testcase `<ticket-id>` | Fetch ticket, parse comment dev, checkout branch |
| 2 | Check output dev | Kiểm tra design doc, branch, evidence đủ chưa |
| — | Nếu thiếu → nhắn dev bổ sung | Chờ dev update rồi mới tiếp tục |
| 3 | /create-testcase | Đọc design → sinh test cases theo 5 categories |
| 4 | /review-testcase | Self-review coverage, edge cases, boundary |
| 5 | /export-testcase | Xuất ra file Excel .xlsx theo template chuẩn |

## Checklist output dev (bước 2)

| # | Kiểm tra | Pass? |
|---|---------|-------|
| 1 | 08-detailed-design.md có đầy đủ? | Có |
| 2 | Branch name rõ ràng trong comment? | Có |
| 3 | Evidence SharePoint có link? | Có |
| 4 | Self-check dev đã PASS? | Có |

Nếu thiếu bất kỳ mục nào → nhắn tin trực tiếp cho dev yêu cầu bổ sung. Không tạo test case từ thông tin thiếu. Xem chi tiết tại [Handoff Protocol](/workflow/handoff-protocol).

## Lưu ý

- `/pre-sync-testcase` tự detect phase hiện tại và suggest action tiếp theo
- 5 categories bắt buộc: Normal, Boundary, Error, Security, Offline
- Sau export, gửi file `.xlsx` cho lead review trước khi dùng chính thức
- Output markdown: `plans/{sprint}/{ticket-slug}/10-testcases.md`
- Output Excel: `plans/{sprint}/{ticket-slug}/{ticket-id}.xlsx`
