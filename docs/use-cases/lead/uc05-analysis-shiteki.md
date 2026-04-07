# Phân tích Shiteki Sprint

## Tình huống

Lead cần review tình hình shiteki (指摘) toàn sprint: bao nhiêu shiteki, trends theo ngày, critical nào đang pending. Dùng cho daily check hoặc retro sprint.

## Bước thực hiện

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | /analysis-shiteki | Scan tất cả shiteki entries trong sprint hiện tại |
| 2 | Review summary | Xem total, new today, critical pending |
| 3 | Action items | Assign dev fix critical pending nếu có |

## Cách dùng

```bash
# Scan sprint hiện tại (auto-detect từ CURRENT_SPRINT)
/analysis-shiteki

# Scan sprint cụ thể
/analysis-shiteki --sprint S10

# Xem report cũ (read-only, không generate mới)
/analysis-shiteki --date 260401
```

## Output

Report lưu tại: `plans/Sprint-XX/analysis/shiteki/{YYMMDD}-daily-report.md`

```
✓ analysis-shiteki | Sprint-10 | 260405
  Total: 24 | New today: 3 | Status changes: 2
  Critical pending: 1 ⚠️
  → saved: plans/Sprint-10/analysis/shiteki/260405-daily-report.md
```

### Nội dung report

| Section | Nội dung |
|---------|---------|
| Summary | Tổng quan: total, new, resolved, pending |
| By Category | Phân bổ theo loại A~J |
| By Ticket | Shiteki group theo ticket |
| Critical Pending | Danh sách Critical/Major chưa fix — cần action |
| Trends | So sánh với ngày trước: tăng/giảm |

## Token efficiency

| Lần chạy | Chi phí |
|---------|---------|
| Lần đầu | Đọc full tất cả entries |
| Lần 2+ (có entries mới) | 1 report cũ + N entries mới |
| Lần 2+ (không có mới) | 1 report cũ + grep tất cả |

## Lưu ý

- Nên chạy hằng ngày để track trends — token cost thấp từ lần 2
- Critical pending ≥ 1 → nhắn dev fix ngay, đừng đợi retro
- Dùng `--date` để xem lại report cũ mà không tốn token generate mới
- Skill này chỉ đọc — không sửa code hay shiteki entries
