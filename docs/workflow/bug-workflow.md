# Bug Fix Workflow (Post-merge)

Khi tester phát hiện bug sau khi code đã được merge, tạo child issue và dùng workflow riêng sau đây.

## Bảng các bước

| # | Skill | Mô tả | Output |
|---|-------|-------|--------|
| 1 | /fetch-bug | Import bug từ tracker, tạo thư mục artifact | bug/{slug}/01-bug-info.md |
| 2 | /analyze-bug | Root cause analysis với full context ticket cha | bug/{slug}/02-root-cause.md |
| 3 | /propose-fix | Đề xuất fix strategy — GATE: user phải approve | bug/{slug}/03-fix-proposal.md |
| 4 | /fix-bug | Implement fix theo approved proposal | Source code |
| 5 | /test | Chạy tests + regression check | Test results |
| 6 | /review-code-skill | Code review — security, correctness | Review report |
| 7 | /sync-design | Cập nhật design nếu behavior thay đổi | Design update |
| 8 | /update-testcase | Bổ sung test cases cho bug scenario | 10-testcases.md (updated) |
| 9 | /impact-report | Mini impact report, append vào ticket cha | Append → 13-impact-report.md |

## Auto Pipeline

```bash
/bug-pipeline <bug-id> --parent <ticket-slug>
```

Ví dụ:
```bash
/bug-pipeline BUG-142 --parent sprint-23-user-login
```

Pipeline tự động:
1. Fetch bug từ tracker
2. Checkout nhánh fix từ nhánh ticket cha
3. Chạy bước 1–3, dừng chờ approve fix proposal
4. Sau approve: chạy bước 4–9

## Output Artifacts

```
plans/Sprint-XX/{parent-slug}/
├── 01-requirement-analysis.md
├── ...
├── 13-impact-report.md          ← bug impact được append vào đây
└── bug/
    └── {bug-slug}/
        ├── 01-bug-info.md
        ├── 02-root-cause.md
        ├── 03-fix-proposal.md
        └── 04-fix-summary.md
```

## Cascade Update — Khi requirement thay đổi giữa chừng

Nếu trong quá trình fix bug, khách hàng thay đổi requirement liên quan:

- **Minor** (không thay đổi scope fix): ghi chú, tiếp tục
- **Major** (thay đổi root cause hoặc scope): escalate, tạo ticket riêng, không merge fix cũ

## Liên kết với Main Workflow

| Liên kết | Mô tả |
|---------|-------|
| Bước 16 (main) | /update-testcase trong main workflow cũng bổ sung test cho bug scenarios |
| Bước 18 (main) | Bug fix trong sprint dùng /fix, bug post-merge dùng workflow này |
| Impact report | Bug impact report append vào 13-impact-report.md của ticket cha để traceability |
