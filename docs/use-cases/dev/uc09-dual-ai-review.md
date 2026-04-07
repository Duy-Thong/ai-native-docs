# 2x AI Review: Local + MR

## Tình huống

Dev code xong, self-test xong. Trước khi submit cho Reviewer nghiệm thu, code phải qua 2 lần AI review:

- **Lần 1 (Local)**: Dev chạy thủ công tại local → fix ngay trước khi push
- **Lần 2 (MR)**: Auto trigger khi tạo PR → fix nếu còn shiteki

## Bước thực hiện

### Lần 1: AI Review Local

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | /review-code-skill | AI review toàn bộ code đã thay đổi |
| 2 | Đọc report | Xem shiteki: Critical / Major / Minor |
| 3 | Fix tất cả | Critical + Major bắt buộc fix. Minor: fix hoặc ghi lý do skip |
| 4 | Chạy lại nếu cần | Lặp đến khi 0 pending |
| 5 | Ghi log | Lưu số shiteki + status vào Self-Test Report |

Output cần ghi:

```
AI Review Local:
- Shiteki phát hiện: 5
- Đã fix: 5
- Pending: 0
```

### Push + Tạo PR

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | /git | Commit với message chuẩn: `{TICKET-ID} fix/feat: mô tả` |
| 2 | Push | Push lên branch |
| 3 | Tạo PR | PR description kèm Self-Test Report |

### Lần 2: AI Review MR

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | AI tự động scan khi PR được tạo | — |
| 2 | Report xuất hiện dưới dạng comment trên PR | — |
| 3 | Dev đọc report → fix nếu có shiteki mới | — |
| 4 | Update PR → AI re-scan (nếu cần) | — |

Hoặc chạy thủ công: `/review-mr <PR-URL>`

## Phân biệt 2 lần review

| | /review-code-skill | /review-mr |
|--|-------------------|-----------|
| Trigger | Dev chạy thủ công | Auto khi tạo PR |
| Scope | Toàn bộ files changed | Diff trên PR |
| Focus | Security, correctness, performance | Coding style, bug tiềm ẩn, design match |
| Fix | Fix tại local trước push | Fix → update PR |
| Mục đích | Bắt lỗi sớm, tránh push code có vấn đề | Catch rò rỉ, cross-check lần cuối |

## Lưu ý

- Lần 1 bắt buộc trước khi push — không skip, dù ticket nhỏ
- Lần 2 tự động — chỉ cần đảm bảo CI/CD đã setup AI review
- Sau 2 lần review mà vẫn có shiteki → fix hết trước khi submit Reviewer
- Log cả 2 lần review vào Self-Test Report (mục 4 và 6)
- Reviewer sẽ check: "AI Review Local log + AI Review MR = 0 pending?" → nếu không → FAIL nghiệm thu
