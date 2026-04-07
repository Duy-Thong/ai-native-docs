# Review Output Tester

## Tình huống

Tester hoàn thành test cases hoặc kết quả test, nộp Lead review. Lead kiểm tra coverage và chất lượng trước khi approve.

## Checklist

### Review Test Cases (bước 11)

| # | Kiểm tra | Ghi chú |
|---|---------|---------|
| 1 | Đủ 5 categories? | Normal, Boundary, Error, Security, Offline |
| 2 | Traceability matrix? | Mỗi requirement có ít nhất 1 test case |
| 3 | Steps rõ ràng? | Ai đọc cũng thực hiện được |
| 4 | Expected result cụ thể? | Không mơ hồ ("hiển thị đúng" → "hiển thị text X tại vị trí Y") |
| 5 | Edge cases có? | Boundary values, empty data, max length |
| 6 | Offline scenarios? | Mất mạng giữa flow, sync conflicts |

### Review Test Results (bước 17)

| # | Kiểm tra | Ghi chú |
|---|---------|---------|
| 1 | Tất cả test cases đã execute? | Không bỏ sót |
| 2 | Bug report đầy đủ? | Steps to reproduce, severity, screenshots |
| 3 | Evidence có? | Link trong ticket comment |
| 4 | Regression check? | Các flow liên quan không bị ảnh hưởng |

## Bước thực hiện

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | Đọc comment tester trên ticket | Kiểm tra format, đủ thông tin |
| 2 | Mở file Excel test cases | `plans/Sprint-XX/{ticket}/{ticket-id}.xlsx` |
| 3 | Spot check 5-10 test cases | Đọc steps, expected result |
| 4 | Check coverage vs requirements | Cross-ref 01-requirement-analysis.md |
| 5 | APPROVED hoặc REJECTED | Comment kết quả |

## Kết quả

- **APPROVED**: Test cases/results đạt. Tiếp tục flow.
- **REJECTED**: Nhắn tester bổ sung. Nêu rõ thiếu categories/scenarios nào.
