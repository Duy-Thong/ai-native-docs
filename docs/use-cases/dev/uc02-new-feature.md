# Implement Feature Mới

## Tình huống

Nhận ticket feature mới từ tracker. Ticket có Figma design, specs tiếng Nhật. Cần chạy full workflow từ phân tích requirements đến delivery — bao gồm estimate cho KH duyệt, thiết kế chi tiết, code, test, và review cuối.

## Bước thực hiện

| # | Skill | Mô tả |
|---|-------|-------|
| 1 | /fetch-ticket | Import ticket từ tracker |
| 2 | /analyze-ticket | Phân tích requirements, xác định scope |
| 3 | /qa-requirement | Tạo câu hỏi clarify cho KH |
| — | Chờ KH trả lời | Pause point — không tiếp tục khi chưa có answers |
| 4 | /fill-qa-answers | Điền câu trả lời vào QA doc |
| 4b | /confirm-understanding (optional) | Architect xác nhận ý hiểu business → member confirm |
| 5 | /design-flow | Thiết kế luồng xử lý |
| 6 | /estimate | Ước lượng công việc (man-days) |
| — | Lead review + nộp KH | Pause point — chờ KH duyệt estimate |
| 7 | /analyze-source | Phân tích source code liên quan |
| 7b | /confirm-understanding --technical (optional) | Architect confirm approach kỹ thuật → member approve |
| 8 | /design-detail | Thiết kế chi tiết (Firestore, API, UI logic) |
| 9 | /review-design | Review thiết kế — phải đạt APPROVED |
| 9b | Chọn path | Path A: TDD (/cook-tdd) hoặc Path B: Code-first (/cook) |
| 10 | /cook hoặc /cook-tdd | Code implementation |
| 11 | Self-review | Dev đọc lại code AI viết, kiểm tra logic, edge cases |
| 12 | Self-check | Chạy `flutter analyze` + `flutter test` |
| 13 | Lưu evidence | Chụp screenshots, test results |
| 14 | /impact-report | Báo cáo phạm vi ảnh hưởng |
| 15 | /gen-unit-test | Sinh unit tests |
| 16 | /review-code-skill | AI review code |
| 17 | Comment ticket | Dán link branch, design, impact report lên ticket |
| 18 | /test | Chạy tests |
| 19 | /fix | Fix nếu fail (lặp lại 18–19 đến khi pass) |
| 20 | /review-delivery | Review cuối → GO/NO-GO |

> **Bước 11-13: Self-review là BẮT BUỘC**
>
> AI code xong không có nghĩa là xong. Dev phải đọc lại code, test thủ công trên local, lưu evidence trước khi chuyển tester/lead. Xem chi tiết tại [Handoff Protocol](/workflow/handoff-protocol).

## Chọn `/cook` hay `/cook-tdd`?

| | /cook (Code-First) | /cook-tdd (TDD) |
|--|--|--|
| Thứ tự | Code → test sau | Test trước → code vừa đủ pass |
| Khi nào dùng | UI-heavy, prototype, refactor | Feature mới, complex logic |
| Coverage | Phụ thuộc vào /gen-unit-test sau | Cao từ đầu (40/40/20 model) |
| Regression | Cần /test verify sau | Tests bảo vệ ngay trong quá trình code |

Xem chi tiết tại [TDD — Test-Driven Development](/workflow/tdd).

## Lưu ý

- Dùng `/pipeline {ticket-slug}` để auto chạy toàn bộ thay vì gọi từng lệnh tay
- Có 3 pause points cứng: chờ KH trả lời QA, chờ lead duyệt estimate, quality gate `/review-design`
- Bước 4b và 7b là optional: pipeline sẽ hỏi "Cần confirm không?" — bỏ qua được với ticket đơn giản
- Sau `/cook` hoặc `/cook-tdd`: bắt buộc self-review → self-check → lưu evidence → comment ticket
- Comment lên tracker sau mỗi milestone: design done, code done, ready for test
- Nếu `/review-design` trả về REJECTED — phải sửa thiết kế trước khi tiếp tục `/cook`
- Specs tiếng Nhật: AI tự tóm tắt sang tiếng Việt, xem lại trước khi `/fill-qa-answers`
