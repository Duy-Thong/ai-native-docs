# Phase A — Phân tích & Estimate (Bước 1–6)

Phase A bao gồm 6 bước từ phân tích yêu cầu đến nộp khách hàng. Mục tiêu: làm rõ scope, thiết kế luồng, và đưa ra estimate trước khi bắt đầu implement.

Output artifacts lưu tại: `plans/Sprint-XX/{ticket-slug}/`

## Bước 1: Phân tích yêu cầu

| | |
|--|--|
| Skill | /analyze-ticket |
| Vai trò | BA / Dev |
| Input | Ticket requirement (paste hoặc file path) |
| Output | plans/{ticket}/01-requirement-analysis.md |

Skill đọc nội dung ticket, trích xuất: mục tiêu nghiệp vụ, actors, use cases, constraints kỹ thuật, và danh sách câu hỏi cần làm rõ.

## Bước 2: QA Requirement

| | |
|--|--|
| Skill | /qa-requirement |
| Vai trò | BA |
| Input | 01-requirement-analysis.md |
| Output | plans/{ticket}/02-qa-questions.md |

Tạo danh sách câu hỏi phân loại theo mức độ:

- **Must-answer**: Bắt buộc có câu trả lời trước khi tiếp tục
- **Should-answer**: Nên có nhưng có thể assume
- **Nice-to-have**: Làm rõ thêm nếu có thời gian

> **Gate**: Tất cả Must-answer phải được trả lời trước khi qua Bước 3.

## Bước 2b: Điền câu trả lời KH

| | |
|--|--|
| Skill | /fill-qa-answers |
| Vai trò | BA |
| Input | Excel file hoặc text paste từ KH |
| Output | plans/{ticket}/02-qa-answers.md |

Import câu trả lời từ khách hàng, map vào từng câu hỏi, đánh dấu trạng thái:

- `Đã trả lời` — có câu trả lời rõ ràng
- `Cần làm rõ` — câu trả lời chưa đủ
- `Assume` — tự assume với lý do

> **Gate 1**: Tất cả Must-answer phải ở trạng thái `Đã trả lời` trước khi tiếp tục.

## Bước 2c: Xác nhận ý hiểu (Optional)

| | |
|--|--|
| Skill | /confirm-understanding |
| Vai trò | Architect |
| Input | 01-requirement-analysis.md + 02-qa-answers.md |
| Output | plans/{ticket}/02c-understanding-confirmation.md |

Architect trình bày lại ý hiểu về business: mục tiêu, luồng xử lý sơ lược, và scope IN/OUT để member xác nhận trước khi thiết kế luồng chi tiết.

> **Gate 1b**: Member xác nhận AI hiểu đúng scope → tiếp tục Bước 3. Nếu có sai lệch, điều chỉnh và confirm lại.

Bước này optional — pipeline hỏi member "Cần confirm không?" trước khi thực hiện. Bỏ qua được với ticket đơn giản.

## Bước 3: Thiết kế luồng

| | |
|--|--|
| Skill | /design-flow |
| Vai trò | BA / Dev |
| Input | 01-requirement-analysis.md + 02-qa-answers.md |
| Output | plans/{ticket}/03-flow-design.md |

Tạo các sơ đồ:

- **User flow**: Luồng người dùng qua từng màn hình/bước
- **Data flow**: Dữ liệu đi qua các component nào
- **API sequence**: Chuỗi gọi API giữa FE ↔ BE ↔ DB

Sử dụng Mermaid diagrams (flowchart, sequenceDiagram, stateDiagram).

## Bước 4: Estimation

| | |
|--|--|
| Skill | /estimate |
| Vai trò | Dev |
| Input | 03-flow-design.md + source knowledge |
| Output | plans/{ticket}/04-estimation.md |

Phân tích effort theo:

- BE tasks (API, DB migration, business logic)
- FE tasks (UI components, state management, integration)
- Testing tasks
- Buffer (risk, review, fix)

Kết quả: bảng estimate chi tiết + tổng man-days.

## Bước 5–6: Review & Nộp KH (Manual)

| Bước | Hành động |
|------|-----------|
| 5 | Lead review estimate, check assumptions, approve hoặc yêu cầu điều chỉnh |
| 6 | BA tổng hợp toàn bộ tài liệu Phase A, nộp cho khách hàng để xác nhận |

> **Gate 2**: Estimate được lead duyệt → Phase A hoàn tất → chuyển sang Phase B.

## Artifacts Phase A

```
plans/Sprint-XX/{ticket-slug}/
├── 01-requirement-analysis.md
├── 02-qa-questions.md
├── 02-qa-answers.md
├── 02c-understanding-confirmation.md  ← optional
├── 03-flow-design.md
└── 04-estimation.md
```
