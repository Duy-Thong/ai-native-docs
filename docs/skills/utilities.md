# Skills Tiện ích (Utilities)

Nhóm skills hỗ trợ orchestration, research, và các tác vụ phụ trợ.

## `/pipeline`

Auto workflow: tự detect ticket type → chọn sequence phù hợp → chạy từng bước → dừng tại approval gates.

```
/pipeline
/pipeline --ticket ECONY-123
/pipeline --from B-10
```

| | |
|--|--|
| Input | Ticket ID hoặc context hiện tại |
| Output | Chạy toàn bộ workflow, pause tại gates (review, approval) |

**Tips**: Dùng `--from` để resume từ một phase cụ thể. Gates là: design review, testcase review, code review, delivery review.

## `/bug-pipeline`

Auto bug fix workflow: fetch → analyze → propose → (approval) → fix → test → review.

```
/bug-pipeline BUG-456
/bug-pipeline BUG-456 --parent ECONY-123
```

| | |
|--|--|
| Input | Bug ticket ID |
| Output | Fixed code, verified, ready for delivery |

**Tips**: Dừng lại sau `/propose-fix` để chờ approval. Không tự ý implement khi chưa được approve.

## `/resume-ticket`

Resume ticket từ session trước: load artifacts đã tạo, build lại context, phát hiện bước tiếp theo cần làm.

```
/resume-ticket ECONY-123
/resume-ticket --auto
```

| | |
|--|--|
| Input | Ticket ID hoặc auto-detect từ working directory |
| Output | Context summary + suggested next action |

**Tips**: Dùng khi bắt đầu session mới sau khi đã làm dở. `--auto` tự tìm ticket đang in-progress.

## `/codebase-audit`

Audit toàn diện codebase theo 5 dimensions: security, performance, architecture, tests, code quality.

```
/codebase-audit
/codebase-audit --focus security
/codebase-audit --scope lib/scenes/
```

| | |
|--|--|
| Input | Codebase path |
| Output | Audit report với findings, severity, recommendations |

**5 Dimensions:**

| Dimension | Nội dung |
|-----------|---------|
| Security | Vulnerabilities, exposed secrets, auth issues |
| Performance | Bottlenecks, unnecessary rebuilds, memory leaks |
| Architecture | Coupling, cohesion, Clean Architecture violations |
| Tests | Coverage gaps, flaky tests, missing edge cases |
| Quality | Dead code, complexity, duplication |

## `/brainstorm`

Thảo luận ý tưởng tự do, đề xuất approaches, explore trade-offs trước khi commit vào một direction.

```
/brainstorm "Cách tốt nhất để handle offline sync?"
/brainstorm --topic "Architecture cho multi-tenant"
```

| | |
|--|--|
| Input | Topic hoặc câu hỏi |
| Output | Structured discussion với pros/cons, recommendations |

## `/research`

Nghiên cứu kỹ thuật chuyên sâu: tìm solutions, so sánh libraries, đọc docs, phân tích trade-offs.

```
/research "Mobx vs Provider cho state management"
/research --depth deep "Firebase Firestore offline caching"
```

| | |
|--|--|
| Input | Research topic |
| Output | Research report trong plans/reports/ |

**Tips**: Dùng `--depth deep` cho quyết định kiến trúc quan trọng. Output lưu vào reports để tham khảo sau.

## `/scout`

Khám phá codebase nhanh: tìm files theo pattern, locate implementations, map dependencies.

```
/scout "authentication"
/scout --pattern "*.store.dart"
/scout --find "BookingViewModel"
```

| | |
|--|--|
| Input | Search term, pattern, hoặc class/function name |
| Output | File list với relevant snippets và context |

**Tips**: Dùng trước `/analyze-source` để xác định scope. Nhanh hơn đọc toàn bộ codebase.

## `/preview`

Tạo visual output: diagrams, slides, code explanation với Mermaid và ASCII art.

```
/preview --diagram "Auth flow"
/preview --explain lib/scenes/booking/booking_view.dart
/preview --slides "Deployment process"
```

| | |
|--|--|
| Input | Topic, file path, hoặc description |
| Output | Visual markdown (Mermaid) hoặc HTML file |

## `/think`

Phân tích step-by-step có hệ thống: break down problem, list assumptions, reason through solution.

```
/think "Tại sao booking fail khi offline?"
/think --verbose "Impact của việc đổi auth strategy"
```

| | |
|--|--|
| Input | Problem hoặc question |
| Output | Structured reasoning với numbered steps, conclusion |

**Tips**: Dùng cho vấn đề phức tạp trước khi debug hoặc thiết kế. Kết hợp với `/debug` cho production issues.

## `/update-knowledge`

Cập nhật knowledge base từ findings trong session: lưu patterns, decisions, lessons learned.

```
/update-knowledge
/update-knowledge --finding "TenantContext phải init trước mọi API call"
```

| | |
|--|--|
| Input | Finding text hoặc auto-extract từ session |
| Output | Knowledge base updated |

## `/done`

Flush cost log, show session summary per ticket, rồi exit. Team habit: dùng `/done` thay vì thoát thẳng để đảm bảo log đầy đủ.

```
/done
```

| | |
|--|--|
| Input | Session state, log files |
| Output | Session summary (turns, duration, per-ticket breakdown) → exit |

**Summary bao gồm:**

| Field | Nội dung |
|-------|---------|
| Total Turns | Số turn trong session |
| Total Duration | Tổng thời gian |
| Per Ticket | Breakdown turns + duration theo từng ticket |
| Turn Log | Chi tiết từng turn: duration, ticket, skill |

**Tips**: Luôn kết thúc session bằng `/done`.

## `/convert-excel-to-md`

Chuyển đổi Excel sang Markdown: xử lý merged cells, images, nội dung tiếng Việt và Nhật.

```
/convert-excel-to-md requirements.xlsx
/convert-excel-to-md --sheet "TestCases" input.xlsx
```

| | |
|--|--|
| Input | .xlsx file path |
| Output | Markdown file với tables, images extracted |

**Tips**: Dùng `--sheet` để chỉ convert 1 sheet cụ thể. Merged cells được tự động unmerge và điền giá trị.
