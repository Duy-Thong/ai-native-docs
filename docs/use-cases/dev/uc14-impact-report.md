# Tạo Impact Report sau Code

## Tình huống

Dev code xong (`/cook`, `/cook-tdd`, `/fix`), cần báo cáo phạm vi ảnh hưởng: files nào thay đổi, vùng nào bị ảnh hưởng gián tiếp, có regression risk không. Report này dùng cho tester bổ sung test cases và Reviewer kiểm tra scope.

## Bước thực hiện

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | /impact-report | AI phân tích git diff vs design docs |
| 2 | Review report | Xem planned vs actual, indirect impacts |
| 3 | Bổ sung nếu thiếu | Thêm vùng ảnh hưởng AI miss |
| 4 | Notify tester | Tester đọc report → /update-testcase nếu scope mở rộng |

## Cách dùng

```bash
# Auto — so sánh với design
/impact-report

# So sánh với branch cụ thể
/impact-report --compare-branch main
```

## Output: `13-impact-report.md`

| Section | Nội dung |
|---------|---------|
| Planned changes | Files dự kiến thay đổi (từ 07-source-analysis.md) |
| Actual changes | Files thực tế đã thay đổi (từ git diff) |
| Diff | Files ngoài scope — cần giải thích |
| Direct impact (d=1) | Files trực tiếp sửa |
| Indirect impact (d=2) | Files import/depend vào files sửa |
| Transitive impact (d=3) | Files depend vào d=2 — regression risk |
| Regression risk | Vùng có thể bị ảnh hưởng ngầm |

## Khi nào chạy

| Tình huống | Khi nào |
|-----------|---------|
| Feature mới (/cook) | Luôn — bước 13 trong workflow |
| Fix bug (/fix) | Luôn — append vào report có sẵn |
| Hotfix | Nên — tạo follow-up report sau deploy |
| Refactor | Luôn — verify behavior không đổi |

## Proactive triggers

Sau `/impact-report`, AI tự hỏi:
- Có d=2/d=3 items? → Suggest `/update-testcase`
- Behavior thay đổi so với design? → Suggest `/sync-design`

## Lưu ý

- Report được update cùng file khi chạy lại sau `/fix` — thêm row Update History
- Tester dùng report này làm input cho `/update-testcase` — bổ sung test cho vùng mới
- Reviewer check: "Files thay đổi đúng phạm vi?" dựa trên report này
- Đính kèm link report khi comment ticket
