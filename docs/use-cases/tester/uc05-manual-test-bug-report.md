# Test Manual & Tạo Bug Report

## Tình huống

Dev đã code xong, đã self-review, đã comment đầy đủ lên ticket. Tester thực hiện test manual theo test cases đã export (.xlsx), phát hiện bug và tạo bug report chuẩn trên tracker.

## Bước thực hiện

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | Check output dev | Verify comment ticket đầy đủ: branch, design, evidence |
| 2 | Checkout branch dev | Dùng /pre-sync-testcase `<ticket-id>` |
| 3 | Mở file Excel test cases | `plans/Sprint-XX/{ticket}/{ticket-id}.xlsx` |
| 4 | Execute từng test case | Test trên môi trường test, ghi Pass/Fail |
| 5 | Chụp evidence | Screenshots cho mỗi test case (pass lẫn fail) |
| 6 | Upload evidence | `Sprint-XX/{Ticket-ID}/test-evidence/` |

## Khi phát hiện Bug

### Tạo bug trên tracker (child issue)

Format bug report chuẩn:

```
【Bug Report】

■ Test Case ID: TC-XXX
■ Severity: Critical / Major / Minor / Trivial
■ Môi trường: [iOS / Android / OS version]

■ Precondition:
  - [Điều kiện trước khi test]

■ Steps to reproduce:
  1. [Bước 1]
  2. [Bước 2]
  3. [Bước 3]

■ Expected: [Kết quả mong đợi]
■ Actual: [Kết quả thực tế]

■ Screenshots: [đính kèm hoặc link]
■ Evidence: [link folder evidence]
```

### Phân loại Severity

| Severity | Mô tả | Ví dụ |
|---------|-------|-------|
| Critical | Không thể dùng, crash, mất data | App crash khi save, data bị xóa |
| Major | Chức năng chính sai, có workaround | Button không hoạt động, hiển thị sai data |
| Minor | Chức năng phụ sai, ít ảnh hưởng | Text sai, alignment lệch |
| Trivial | Cosmetic, không ảnh hưởng function | Typo, màu sắc khác design chút |

## Sau khi tạo bug

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | Nhắn tin dev | Báo bug, gửi link child issue |
| 2 | Tiếp tục test | Hoàn thành các test case còn lại |
| 3 | Tổng hợp kết quả | Ghi pass/fail summary lên ticket cha |
| 4 | Chờ dev fix | Dev sẽ chạy /fetch-bug → /fix-bug |
| 5 | Confirm fix | Sau khi dev fix xong → xem [UC02: Confirm bug fix](/use-cases/tester/uc02-confirm-bugfix) |

## Lưu ý

- Mỗi bug = 1 child issue riêng trên tracker (không gom nhiều bug 1 ticket)
- Screenshot BẮT BUỘC cho mỗi bug — không có screenshot = không hợp lệ
- Sau khi test xong toàn bộ → comment tổng hợp lên ticket cha + nộp lead review
