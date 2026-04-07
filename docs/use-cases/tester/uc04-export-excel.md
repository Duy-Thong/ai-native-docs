# Export Test Case ra Excel

## Tình huống

Test case đã được review và approved (review passed). Cần xuất file Excel theo template chuẩn để nộp cho lead hoặc KH. Template có 5 sheets tương ứng 5 categories đã định nghĩa.

## Bước thực hiện

| # | Skill | Mô tả |
|---|-------|-------|
| 1 | /export-testcase | Parse markdown → JSON → fill vào Excel template |

## Lưu ý

- Output: `plans/{sprint}/{ticket-slug}/{ticket-id}.xlsx` — 5 sheets chuẩn
- Chạy lại `/export-testcase` sau mỗi lần update test case để đồng bộ file Excel
- File `.xlsx` có thể mở bằng Excel hoặc Google Sheets
- Không sửa tay file Excel — nguồn sự thật là file markdown `10-testcases.md`
- Nếu template thay đổi, liên hệ lead để update `templates/testcase-template.xlsx`
