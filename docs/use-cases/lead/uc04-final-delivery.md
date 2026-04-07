# Final Delivery Check

## Tình huống

Dev và Tester đã hoàn thành toàn bộ. Lead thực hiện final check trước khi nộp hàng cho khách hàng (bước 19).

## Checklist tổng hợp

### Artifacts đầy đủ?

| # | File | Có? |
|---|------|-----|
| 1 | 01-requirement-analysis.md | ☐ |
| 2 | 02-qa-questions.md (đã trả lời) | ☐ |
| 3 | 03-flow-design.md | ☐ |
| 4 | 04-estimation.md | ☐ |
| 5 | 08-detailed-design.md | ☐ |
| 6 | 10-testcases.md + .xlsx | ☐ |
| 7 | 13-impact-report.md | ☐ |
| 8 | 19-delivery-review.md | ☐ |

### 4C Check

| C | Câu hỏi | ✅ |
|---|---------|---|
| Correctness | Code đúng theo design? Test pass? | ☐ |
| Completeness | Tất cả requirements đã implement? | ☐ |
| Consistency | Design, code, test case đồng bộ? | ☐ |
| Compliance | Naming conventions, code standards, no secrets? | ☐ |

### Cross-check Dev + Tester

| # | Kiểm tra | Ghi chú |
|---|---------|---------|
| 1 | Evidence dev | Screenshots, test results |
| 2 | Evidence tester | Test execution results |
| 3 | Code review đã APPROVED? | PR merged hoặc approved |
| 4 | Test cases đã APPROVED? | Lead đã review |
| 5 | Bug fix complete? | Tất cả bugs CONFIRMED |
| 6 | Design synced? | 08-detailed-design.md match code |

## Bước thực hiện

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | Mở folder artifacts | `plans/Sprint-XX/{ticket}/` |
| 2 | Check artifacts đầy đủ | Theo bảng trên |
| 3 | (Optional) /review-delivery | AI chạy 4C check tự động |
| 4 | Review evidence | Dev + Tester đều có |
| 5 | GO hoặc NO-GO | Comment kết quả lên ticket |

## Kết quả

- **GO**: Nộp hàng KH. Comment: `【Lead GO】Delivery approved. Nộp KH.`
- **NO-GO**: Liệt kê items cần fix. Assign lại dev/tester. Comment:

```
【Lead NO-GO】

■ Lý do:
  - [ ] Item cần fix 1
  - [ ] Item cần fix 2
■ Assign: Dev / Tester
■ Deadline: YYYY-MM-DD
```
