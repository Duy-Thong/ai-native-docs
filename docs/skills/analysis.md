# Skills Phân tích (Analysis)

Nhóm skills hỗ trợ giai đoạn thu thập và làm rõ yêu cầu (Phase A-1 → A-2c).

## `/fetch-ticket`

Import ticket từ tracker, chuẩn hóa thành file `ticket.md`.

```
/fetch-ticket <ticket-id>
/fetch-ticket ECONY-123
```

| | |
|--|--|
| Input | Ticket ID |
| Output | ticket.md — nội dung ticket đã chuẩn hóa |

**Tips**: Chạy đầu tiên trong mọi ticket workflow. Nếu ticket có sub-tasks, fetch từng cái riêng.

## `/analyze-ticket`

Phân tích yêu cầu từ `ticket.md` → danh sách requirements có mã hóa (R01, R02...), xác định màn hình và layer bị ảnh hưởng.

```
/analyze-ticket
/analyze-ticket --deep
```

| | |
|--|--|
| Input | ticket.md |
| Output | 01-requirement-analysis.md — requirements, screens, layer impact |

**Tips**: Dùng `--deep` khi ticket phức tạp hoặc có nhiều màn hình liên quan.

## `/qa-requirement`

Tìm gaps, mâu thuẫn, edge cases trong requirements → sinh câu hỏi clarify để hỏi khách hàng.

```
/qa-requirement
/qa-requirement --focus security
```

| | |
|--|--|
| Input | 01-requirement-analysis.md |
| Output | 02-qa-questions.md — danh sách câu hỏi theo Question ID |

**Tips**: Mỗi câu hỏi có ID (Q01, Q02...) để dễ track. Dùng `--focus` để ưu tiên domain cụ thể.

## `/fill-qa-answers`

Parse câu trả lời từ khách hàng, match theo Question ID, cập nhật trạng thái (ANSWERED/PENDING/N-A).

```
/fill-qa-answers answers.xlsx
/fill-qa-answers answers.txt
```

| | |
|--|--|
| Input | 02-qa-questions.md + file câu trả lời từ KH |
| Output | 02-qa-questions.md cập nhật (in-place) |

**Tips**: Format Excel cần có cột Question ID. Câu hỏi chưa được trả lời giữ status PENDING.

## `/confirm-understanding`

Architect trình bày lại ý hiểu về business hoặc approach kỹ thuật để member xác nhận trước khi đi vào thiết kế chi tiết. Bước optional — pipeline hỏi member trước khi thực hiện.

```
/confirm-understanding
/confirm-understanding --technical
```

| | |
|--|--|
| Input (business mode) | 01-requirement-analysis.md + 02-qa-answers.md |
| Output (business mode) | 02c-understanding-confirmation.md — ý hiểu business, luồng sơ lược, scope IN/OUT |
| Input (--technical) | 07-source-analysis.md + 03-flow-design.md |
| Output (--technical) | 07b-approach-confirmation.md — files sẽ sửa, patterns, key decisions |

**Tips**: Dùng khi ticket phức tạp hoặc có nhiều assumption cần confirm trước khi đầu tư thời gian vào design. Ticket đơn giản có thể bỏ qua.

## `/investigate`

Điều tra hiện trạng hệ thống để trả lời câu hỏi của KH hoặc clarify trước khi thiết kế.

```
/investigate "Màn hình A xử lý offline như thế nào?"
/investigate --scope lib/scenes/booking
```

| | |
|--|--|
| Input | Câu hỏi hoặc topic cần điều tra |
| Output | Report điều tra trong plans/reports/ |

**Tips**: Dùng trước `/design-flow` khi chưa hiểu rõ hệ thống hiện tại. Kết hợp với `/scout` để tìm file trước.
