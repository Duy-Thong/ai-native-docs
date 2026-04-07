# Skills Thiết kế (Design)

Nhóm skills hỗ trợ giai đoạn thiết kế hệ thống và ước lượng (Phase A-3 → A-4, B-8).

## `/design-flow`

Thiết kế user flow, data flow, và API sequence bằng Mermaid diagrams.

```
/design-flow
/design-flow --type sequence
```

| | |
|--|--|
| Input | 01-requirement-analysis.md, 02-qa-questions.md (đã answered) |
| Output | 03-flow-design.md — Mermaid diagrams, flow descriptions |

**Tips**: Dùng `--type sequence` cho API flows, `--type flowchart` cho user flows. Cần QA answers trước khi chạy.

## `/design-detail`

Thiết kế chi tiết: screen structure, state management, API contracts, DB/Firestore changes. Tự động tách thành 2 phần: design (non-tech readable) và implementation notes (dev only).

```
/design-detail
/design-detail --scope frontend
```

| | |
|--|--|
| Input | 03-flow-design.md, 01-requirement-analysis.md |
| Output | 08-detailed-design.md — index + linked detail files |

**Tips**: File output là index. Chi tiết được tách ra file riêng theo component/module. KH đọc phần design, dev đọc phần impl notes.

## `/estimate`

Breakdown công việc thành tasks, estimate giờ cho từng task, thêm risk buffer.

```
/estimate
/estimate --buffer 20
```

| | |
|--|--|
| Input | 08-detailed-design.md, 01-requirement-analysis.md |
| Output | 04-estimation.md — task list, hours, buffer, tổng |

**Tips**: `--buffer` là % buffer thêm vào (mặc định 15%). Estimate theo unit = 0.5h.

## `/gen-design`

Tạo design document từ source code đã có (reverse engineering). Dùng khi nhận ticket cần sửa code không có thiết kế.

```
/gen-design --scope lib/scenes/booking
/gen-design --file lib/scenes/booking/booking_view.dart
```

| | |
|--|--|
| Input | Source code path |
| Output | 08-detailed-design.md reverse engineered |

**Tips**: Kết hợp với `/analyze-source` để xác định scope trước. Kết quả cần review thủ công.

## `/sync-design`

Cập nhật `08-detailed-design.md` theo code thực tế sau khi `/cook` hoặc `/fix-bug` thay đổi implementation.

```
/sync-design
/sync-design --scope api-contracts
```

| | |
|--|--|
| Input | 08-detailed-design.md + source code hiện tại |
| Output | 08-detailed-design.md cập nhật (in-place) |

**Tips**: Chạy sau mỗi sprint hoặc trước khi delivery. Dùng `--scope` để giới hạn phần sync.

## `/propose`

Đề xuất phương án giải pháp cho khách hàng: so sánh các approach, estimate, risk, và POC nếu cần.

```
/propose "Xử lý offline sync cho booking"
/propose --format slide
```

| | |
|--|--|
| Input | Topic hoặc vấn đề cần đề xuất |
| Output | Proposal document với comparison table, estimate, risk matrix |

**Tips**: Dùng `--format slide` để xuất dạng presentation-friendly. Luôn có ít nhất 2 options để KH chọn.

## `/propose-fix`

Đề xuất fix strategy cho bug, bao gồm approval gate trước khi implement.

```
/propose-fix
```

| | |
|--|--|
| Input | analyze-bug output, ticket.md (bug) |
| Output | Fix proposal với root cause, approach options, risk assessment |

**Tips**: Skill này dừng lại và chờ approval trước khi chuyển sang `/fix-bug`. Không auto-implement.
