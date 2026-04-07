# Skills Phát triển (Development)

Nhóm skills hỗ trợ giai đoạn implementation và bug fixing (Phase B-7 → B-18, Bug-1 → Bug-4).

## `/analyze-source`

Tìm files liên quan, patterns, và impact areas theo depth level (1/2/3).

```
/analyze-source
/analyze-source --depth 2
/analyze-source --scope lib/scenes/booking
```

| | |
|--|--|
| Input | 01-requirement-analysis.md, 08-detailed-design.md |
| Output | 07-source-analysis.md — file list, patterns, impact map |

**Tips**: Depth 1 = direct files, depth 2 = + dependencies, depth 3 = full transitive. Dùng depth 2 cho hầu hết tickets.

## `/cook`

Code implementation theo thiết kế. BE trước (API), FE sau (consume API). Tự động delegate test + review sau khi xong.

```
/cook
/cook --scope frontend
/cook --scope backend
```

| | |
|--|--|
| Input | 08-detailed-design.md, 07-source-analysis.md |
| Output | Source code, verified bằng `flutter analyze` + `flutter test` |

**Tips**: Smart routing — tự detect context từ working directory. Sau cook, auto chạy `/gen-unit-test` và `/review-code-skill`.

## `/cook-tdd`

TDD-first implementation: gen failing tests (RED) → implement code to pass (GREEN) → refactor. Orchestrate toàn bộ chu trình TDD tự động.

```
/cook-tdd
/cook-tdd --fe
/cook-tdd --be
/cook-tdd --full
```

| | |
|--|--|
| Input | 08-detailed-design.md (APPROVED), optional 10-testcases.md |
| Output | Source code + test files + trace folder (cook-trace.md, review-report.md, selftest-guide.md) |

**Chu trình RED/GREEN/REFACTOR:**

| Giai đoạn | Hành động |
|-----------|-----------|
| RED | Gen failing unit tests từ design + test cases. Coverage: 40% happy, 40% edge, 20% error |
| GREEN | Implement code vừa đủ pass tests. BE trước, FE sau |
| REFACTOR | Cải thiện code, không đổi behavior. Revert nếu test fail |

**Tips**: Dùng cho feature mới, complex logic. Không dùng cho hotfix, refactor, prototype. Xem chi tiết tại [TDD](/workflow/tdd).

## `/fix`

Root cause analysis → implement fix → verify → lặp lại cho đến khi test pass.

```
/fix
/fix --error "RangeError: Index out of range"
```

| | |
|--|--|
| Input | Error message, failing test output, hoặc bug description |
| Output | Fixed source code, verified clean |

**Tips**: Dùng khi test fail sau `/cook`. Tự động loop cho đến khi tất cả tests pass.

## `/gen-unit-test`

Sinh unit tests (Flutter test + Mockito) mapped từ test cases hiện có.

```
/gen-unit-test
/gen-unit-test --mode tdd
/gen-unit-test --scope lib/domain/usecases/booking_usecase.dart
```

| | |
|--|--|
| Input | 10-testcases.md, source code |
| Output | Test files mapped theo test case IDs |

**Tips**: Dùng `--mode tdd` để viết tests trước khi implement. Mỗi test có comment referencing test case ID.

## `/impact-report`

So sánh planned vs actual changes, xác định direct và indirect impact areas.

```
/impact-report
/impact-report --compare-branch main
```

| | |
|--|--|
| Input | 07-source-analysis.md, git diff |
| Output | 13-impact-report.md — planned vs actual, impact matrix |

**Tips**: Chạy sau `/cook` trước khi test. Kết quả feed vào `/update-testcase` để bổ sung test cases nếu scope mở rộng.

## `/fetch-bug`

Import bug child issue từ tracker, liên kết với parent ticket.

```
/fetch-bug BUG-456
/fetch-bug BUG-456 --parent ECONY-123
```

| | |
|--|--|
| Input | Bug ticket ID (+ optional parent ID) |
| Output | ticket.md (bug) với full context từ parent |

## `/analyze-bug`

Root cause analysis với full context: đọc bug ticket, parent ticket, source code, và logs.

```
/analyze-bug
/analyze-bug --logs path/to/error.log
```

| | |
|--|--|
| Input | ticket.md (bug), parent context, optional logs |
| Output | Root cause report trong plans/reports/ |

## `/fix-bug`

Implement fix theo approved proposal từ `/propose-fix`.

```
/fix-bug
```

| | |
|--|--|
| Input | Approved fix proposal, root cause report |
| Output | Fixed source code, verified |

**Tips**: Chỉ chạy sau khi `/propose-fix` đã được approve. Không tự ý thay đổi scope fix.

## `/debug`

Debug investigation: phân tích logs, trace execution flow, xác định nguyên nhân lỗi runtime.

```
/debug "Payment fails on retry"
/debug --log path/to/app.log
```

| | |
|--|--|
| Input | Error description hoặc log file |
| Output | Debug report với hypothesis, evidence, conclusion |

## `/git`

Git operations: commit, push, branch management, merge conflict resolution.

```
/git commit "feat: add booking retry logic"
/git push --branch feature/ECONY-123
/git branch create feature/ECONY-123
```

| | |
|--|--|
| Input | Git command và arguments |
| Output | Git operation result |

## `/gen-merge`

Generate MR description từ GitLab MR diff: summary, changes, testing notes.

```
/gen-merge --mr 42
/gen-merge --branch feature/ECONY-123
```

| | |
|--|--|
| Input | MR number hoặc branch name |
| Output | MR description markdown (copy-paste ready) |
