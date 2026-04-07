# Xác nhận ý hiểu trước khi thiết kế

## Tình huống

Ticket phức tạp, nhiều assumption, hoặc requirement mơ hồ. Trước khi đầu tư thời gian vào design, Architect trình bày lại ý hiểu để member xác nhận scope và hướng tiếp cận đúng. Có 2 thời điểm dùng: sau QA (business) và sau analyze-source (technical).

## Business mode (bước 2c — Phase A)

Dùng sau `/fill-qa-answers`, trước `/design-flow`. AI tóm tắt ý hiểu bằng ngôn ngữ business (không jargon kỹ thuật).

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | /fill-qa-answers | Điền câu trả lời KH (Gate 1 pass) |
| 2 | /confirm-understanding | AI trình bày: ý hiểu business, luồng sơ lược, scope IN/OUT |
| 3 | Member xác nhận | Đúng → tiếp tục / Cần bổ sung → AI update memo → hỏi lại |
| 4 | /design-flow | Tiến hành thiết kế luồng |

Output: `plans/{ticket}/02c-understanding-confirmation.md`

## Technical mode (bước 7b — Phase B)

Dùng sau `/analyze-source`, trước `/design-detail`. AI trình bày approach kỹ thuật cho dev review.

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | /analyze-source | Phân tích source code liên quan |
| 2 | /confirm-understanding --technical | AI trình bày: files sẽ sửa, patterns, DB changes, key decisions, risks |
| 3 | Member xác nhận | Confirm approach → tiếp tục / Góp ý → AI update → hỏi lại |
| 4 | /design-detail | Tiến hành thiết kế chi tiết |

Output: `plans/{ticket}/07b-approach-confirmation.md`

## Lưu ý

- Cả 2 mode đều optional — pipeline sẽ hỏi "Cần confirm không?" trước khi chạy
- Skip cho ticket đơn giản (1-2 screens, rõ ràng) hoặc hotfix urgent
- Business mode: viết cho PM/KH đọc được, KHÔNG dùng thuật ngữ kỹ thuật
- Technical mode: viết cho dev, có thể dùng thuật ngữ kỹ thuật
- Memo tối đa 60 dòng — ngắn gọn, đi thẳng vào vấn đề
- Nếu member bổ sung → AI update memo → confirm lại cho đến khi đạt
