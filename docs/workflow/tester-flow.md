# Tester Flow

Tester sử dụng session AI riêng, làm việc trên cùng repo với dev.

## Quyền hạn Tester

| Hoạt động | Cho phép |
|-----------|---------|
| Đọc source code | ✅ |
| Sửa source code | ❌ |
| Sửa files trong plans/ | ✅ |
| Sửa files test cases | ✅ |
| Checkout branch | Dùng /pre-sync-testcase — KHÔNG checkout tay |

## Sơ đồ tổng quan Tester Flows

```
Dev commit design  →  Flow 1: Tạo Test Case
Dev commit code    →  Flow 2: Update Test Case
Bug found          →  Flow 3: Bug Report
Bug fix committed  →  Flow 4: Confirm Bug Fix
```

## Flow 1: Tạo Test Case (sau dev commit design)

Kích hoạt khi: Dev commit `08-detailed-design.md` và design đã được APPROVED (Gate 3b).

```bash
/pre-sync-testcase <ticket-id>
# → tự động fetch + checkout + detect phase + suggest next step

/create-testcase
# → đọc 08-detailed-design.md + code diff → gen test cases
# → output: plans/{ticket}/10-testcases.md

/review-testcase
# → review với lead, loop đến APPROVED

/export-testcase
# → xuất Excel .xlsx cho manual testing
```

## Flow 2: Update Test Case (sau dev commit code)

Kích hoạt khi: Dev commit code và tạo `13-impact-report.md`.

```bash
/pre-sync-testcase <ticket-id>
# → detect phase "code committed" → suggest /update-testcase

/update-testcase
# → đọc 13-impact-report.md + code diff
# → bổ sung test cases cho vùng ảnh hưởng mới
# → output: cập nhật plans/{ticket}/10-testcases.md

/export-testcase
# → re-export .xlsx với test cases mới
```

## Flow 3: Manual Test → Bug Report

Tester thực hiện manual test theo file `.xlsx` đã export.

**Khi test PASS**: Mark PASS trên tracker.

**Khi test FAIL**: Tạo bug report với thông tin:

- Test case ID bị fail
- Steps to reproduce (chi tiết)
- Expected vs Actual behavior
- Screenshots / logs đính kèm
- Severity: Critical / Major / Minor / Trivial

## Flow 4: Confirm Bug Fix

Kích hoạt khi: Dev commit fix cho bug đã report.

```bash
/confirm-bugfix <bug-ticket-id>
# → fetch bug → checkout fix branch → đọc 02-root-cause.md + 03-fix-proposal.md
# → phân tích fix scope → đề xuất retest cases
# → Tester test → CONFIRMED hoặc REOPEN
```

## Cheat Sheet — Lệnh thường dùng

| Lệnh | Mô tả |
|------|-------|
| /pre-sync-testcase \<id\> | Bắt đầu bất kỳ flow nào — luôn chạy trước |
| /create-testcase | Tạo test cases từ design |
| /update-testcase | Bổ sung test cases sau impact report |
| /review-testcase | Review với lead để APPROVE |
| /export-testcase | Xuất Excel cho manual test |
| /confirm-bugfix \<bug-id\> | Verify bug đã được fix |
| /git | Thao tác git an toàn (không checkout tay) |
