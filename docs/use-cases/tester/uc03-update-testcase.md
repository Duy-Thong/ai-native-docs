# Update Test Case sau Code

## Tình huống

Dev đã code xong (cook), commit lên branch, và có impact report chi tiết. Tester cần cập nhật test case để bao phủ vùng ảnh hưởng mới — không tạo lại từ đầu mà chỉ bổ sung cho phần thay đổi.

## Bước thực hiện

| # | Skill | Mô tả |
|---|-------|-------|
| 1 | /pre-sync-testcase `<ticket-id>` | Sync data, checkout branch mới nhất của ticket |
| 2 | Verify output dev | Check impact report + evidence đủ chưa |
| — | Nếu thiếu → nhắn dev | Yêu cầu bổ sung impact report hoặc evidence |
| 3 | /update-testcase | Đọc impact report + code diff → bổ sung test cases |
| 4 | /export-testcase | Re-export Excel với test cases đã cập nhật |

## Lưu ý

- Bước 2: Kiểm tra `13-impact-report.md` có chưa + evidence. Nếu thiếu → nhắn dev bổ sung trước. Xem [Handoff Protocol](/workflow/handoff-protocol)
- `/update-testcase` tập trung vào vùng ảnh hưởng mới từ impact report — không gen lại toàn bộ
- So sánh `13-impact-report.md` với test cases hiện có để xác định gap
- File Excel sau khi export sẽ ghi đè file cũ — version history nằm trong git
- Sau export, gửi file `.xlsx` cập nhật cho lead review
- Nếu impact report chỉ ra thay đổi lớn (nhiều modules), cân nhắc `/create-testcase` lại từ đầu
