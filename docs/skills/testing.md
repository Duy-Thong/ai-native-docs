# Skills Kiểm thử (Testing)

Nhóm skills hỗ trợ giai đoạn QA và kiểm thử (Phase B-10 → B-17).

## `/create-testcase`

Generate test cases theo 5 categories với traceability matrix liên kết về requirements.

```
/create-testcase
/create-testcase --scope R01,R02
```

| | |
|--|--|
| Input | 01-requirement-analysis.md, 08-detailed-design.md |
| Output | 10-testcases.md — test cases có ID, category, steps, expected result |

**5 categories:**

| Loại | Mô tả |
|------|-------|
| Normal | Happy path, luồng chính |
| Boundary | Giá trị biên (min/max, empty, max length) |
| Error | Input sai, network fail, server error |
| Security | XSS, injection, auth bypass |
| Offline | Hoạt động khi mất mạng, sync khi reconnect |

**Tips**: Mỗi test case có ID (TC-001) và liên kết về requirement ID (R01). Dùng `--scope` để giới hạn requirements.

## `/review-testcase`

Review coverage, edge cases, và traceability. Trả về APPROVED hoặc REJECTED kèm feedback.

```
/review-testcase
```

| | |
|--|--|
| Input | 10-testcases.md, 01-requirement-analysis.md |
| Output | Review report: APPROVED/REJECTED + danh sách gaps |

**Tips**: Skill này là gate — không chuyển sang implement nếu REJECTED. Fix gaps rồi chạy lại.

## `/export-testcase`

Parse markdown test cases → Excel `.xlsx` chuẩn.

```
/export-testcase
/export-testcase --output deliverables/testcases.xlsx
```

| | |
|--|--|
| Input | 10-testcases.md |
| Output | .xlsx file với sheets theo category |

**Tips**: Dùng trước khi gửi cho KH Nhật. Format tuân thủ conventions Nhật Bản.

## `/update-testcase`

Bổ sung test cases dựa trên impact report khi scope implementation mở rộng.

```
/update-testcase
/update-testcase --impact 13-impact-report.md
```

| | |
|--|--|
| Input | 10-testcases.md, 13-impact-report.md |
| Output | 10-testcases.md cập nhật với test cases mới (in-place) |

**Tips**: Chạy sau `/impact-report` nếu có indirect impact areas chưa có test case.

## `/test`

Chạy full test suite, report kết quả.

```
/test
/test --scope unit
/test --watch
```

| | |
|--|--|
| Input | Source code, test files |
| Output | Test results: pass/fail counts, coverage report |

**Commands chạy:**

```bash
flutter test
flutter test --coverage
```

**Tips**: Dùng `--watch` trong development. Dùng không có flag trước delivery để chạy full suite.

## `/pre-sync-testcase`

Tester sync trước khi test: fetch ticket, parse comment từ dev, checkout branch, đề xuất action tiếp theo.

```
/pre-sync-testcase ECONY-123
```

| | |
|--|--|
| Input | Ticket ID |
| Output | Sync summary: branch checked out, test scope, suggested next step |

**Tips**: Dùng khi tester bắt đầu session mới. Đảm bảo test đúng branch và đúng scope.

## `/confirm-bugfix`

Tester confirm bug fix: fetch bug ticket, checkout fix branch, phân tích scope fix, đề xuất retest plan.

```
/confirm-bugfix BUG-456
```

| | |
|--|--|
| Input | Bug ticket ID |
| Output | Confirmation report: fix scope, retest checklist, regression risk |

**Tips**: Chạy sau khi dev báo fix xong. Xác nhận đúng fix trước khi retest tránh lãng phí.

## `/ui-review`

So sánh UI screenshot với Figma design, phát hiện visual discrepancies.

```
/ui-review --screen BookingScreen
/ui-review --url http://localhost:3000/booking --figma node-id
```

| | |
|--|--|
| Input | URL hoặc screen name + Figma node ID |
| Output | Visual diff report với danh sách discrepancies và severity |

**Tips**: Cần Playwright (chụp screenshot) và Figma MCP (lấy design). Phân loại discrepancy theo: layout, color, typography, spacing.
