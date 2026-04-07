# Quy trình Handoff

Quy trình bàn giao output giữa Dev, Tester và Lead. Đảm bảo thông tin đầy đủ trước khi chuyển phase.

## Dev → Tester (sau khi code xong)

### Bước 1: Dev self-review code AI viết

Sau khi AI hoàn thành `/cook` hoặc `/fix`, dev BẮT BUỘC phải:

1. Đọc lại toàn bộ code AI đã viết/sửa
2. Kiểm tra logic, edge cases, naming conventions
3. Chạy verify commands:
   - `flutter analyze`
   - `flutter test`
4. Test thủ công trên local (chạy app, kiểm tra flow)

### Bước 2: Lưu evidence

| Loại | Mô tả | Format |
|------|-------|--------|
| Screenshot UI | Chụp các màn hình đã implement | PNG |
| Test results | Kết quả chạy test (pass/fail) | Screenshot hoặc text |
| Self-check log | Ghi chú những gì đã kiểm tra | Text |
| Video (nếu cần) | Record flow phức tạp | MP4 |

### Bước 3: Comment lên ticket

Format comment chuẩn:

```
【Dev hoàn thành】

■ Branch: feat/ECN-XXX-feature-name
■ Design: plans/Sprint-XX/{ticket}/08-detailed-design.md
■ Impact Report: plans/Sprint-XX/{ticket}/13-impact-report.md
■ Self-check:
  - [ ] flutter analyze: PASS
  - [ ] flutter test: PASS (coverage XX%)
  - [ ] Manual test: PASS
■ Trạng thái: Sẵn sàng cho Tester
■ Ghi chú: (nếu có điểm cần lưu ý cho tester)
```

### Bước 4: Thông báo Tester

Nhắn tin trực tiếp cho tester: ticket đã sẵn sàng.

## Tester kiểm tra output Dev

Trước khi bắt đầu tạo/update test case, tester PHẢI kiểm tra:

### Checklist đầu vào

| # | Mục | Trạng thái cần |
|---|-----|----------------|
| 1 | Design doc (08-detailed-design.md) có đầy đủ? | Có |
| 2 | Impact report (13-impact-report.md) có? | Có (nếu đã code) |
| 3 | Branch name rõ ràng? | Có |
| 4 | Self-check dev đã PASS? | Có |
| 5 | Ghi chú đặc biệt từ dev? | Đọc nếu có |

### Nếu thiếu thông tin

1. Nhắn tin trực tiếp cho dev (không qua ticket)
2. Nêu rõ: thiếu gì, cần bổ sung gì
3. Chờ dev bổ sung → dev comment lại ticket
4. Khi đủ thông tin → tester tiếp tục flow

> **Không làm tiếp khi thiếu thông tin** — Test case tạo từ thông tin thiếu sẽ phải làm lại.

## Dev → Lead (nộp output)

### Khi nào gửi Lead

| Milestone | Output | Bước |
|-----------|--------|------|
| Estimate xong | 04-estimation.md | Bước 5 |
| Design xong | 08-detailed-design.md | Bước 9 |
| Code + Review xong | Code trên branch + evidence | Bước 15 |
| Delivery | Toàn bộ artifacts | Bước 19 |

### Format comment cho Lead

```
【Nộp Lead review】

■ Ticket: ECN-XXX
■ Milestone: [Estimate / Design / Code Review / Delivery]
■ Output: [đường dẫn file hoặc link]
■ Trạng thái: Chờ Lead review
```

## Tester → Lead (nộp test case)

### Khi nào gửi Lead

| Milestone | Output | Bước |
|-----------|--------|------|
| Test case tạo xong | 10-testcases.md + .xlsx | Bước 11 |
| Test case update | 10-testcases.md updated + .xlsx | Bước 16 |
| Test hoàn thành | Kết quả test (pass/fail summary) | Bước 17 |

### Format comment

```
【Tester nộp output】

■ Ticket: ECN-XXX
■ Output: [Test cases / Test results]
■ File Excel: plans/Sprint-XX/{ticket}/{ticket-id}.xlsx
■ Trạng thái: Chờ Lead review
```

## Lead → Dev/Tester (reject)

Khi Lead reject output:

1. Comment trên ticket: lý do reject + yêu cầu cụ thể
2. Nhắn tin trực tiếp cho dev/tester
3. Dev/Tester sửa → nộp lại → Lead review lại

```
【Lead Reject】

■ Lý do: [mô tả cụ thể]
■ Yêu cầu bổ sung:
  - [ ] Item 1
  - [ ] Item 2
■ Deadline: [nếu có]
```
