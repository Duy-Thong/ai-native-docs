# Nghiệm thu (Acceptance Review)

## Tình huống

Dev hoàn thành code + self-test + 2 lần AI review (local + MR). Reviewer không cần đọc code — AI đã review 2 lần. Reviewer kiểm tra Dev đã chạy đủ quy trình và output đạt chuẩn.

## Khác biệt so với Review Code truyền thống

| | Review truyền thống | Nghiệm thu (AI Native) |
|--|--------------------|-----------------------|
| Reviewer làm gì | Đọc code, tìm bug, suggest fix | Check process, check output |
| Thời gian | 1-2 giờ | 15-30 phút |
| AI role | Không có / chỉ scan PR | AI đã review 2 lần trước reviewer |
| Focus | Code quality | Dev đã tự kiểm tra đủ chưa |

## Checklist nghiệm thu (8 mục)

| # | Kiểm tra | ✅ | Ghi chú |
|---|---------|---|---------|
| 1 | Self-Test Report đầy đủ 7 mục? | ☐ | Thiếu mục nào → FAIL |
| 2 | Build thành công? (screenshot) | ☐ | |
| 3 | Bug đã fix / Feature hoạt động? (screenshot before-after) | ☐ | |
| 4 | AI Review Local đã chạy? Shiteki = 0 pending? | ☐ | Xem log trong report |
| 5 | AI Review MR đã chạy? Shiteki xử lý hết? | ☐ | Xem comment trên PR |
| 6 | Phạm vi ảnh hưởng đã test? | ☐ | Đối chiếu với file ảnh hưởng |
| 7 | File thay đổi đúng phạm vi? (không sửa file thừa) | ☐ | Xem git diff |
| 8 | LOC hợp lý? (không quá lớn so với estimate) | ☐ | So sánh ticket tương tự |

## Bước thực hiện

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | Mở PR trên GitHub | Đọc PR description + Self-Test Report |
| 2 | Check 8 mục | Duyệt checklist ở trên |
| 3 | (Optional) Spot check | Nếu nghi ngờ → mở 1-2 file code xem nhanh |
| 4 | PASS hoặc FAIL | Comment kết quả |

## Kết quả

### PASS

```
【Reviewer PASS】
✅ Self-Test Report: đủ 7/7
✅ AI Review: Local 0 pending, MR 0 pending
✅ Scope: X files, +XX/-YY LOC — hợp lý
→ Approve PR. Merge khi ready.
```

### FAIL

```
【Reviewer FAIL】
❌ Mục 4: AI Review Local chưa chạy (không có log)
❌ Mục 6: Chưa test màn hình liên quan
→ Trả lại Dev. Fix 2 mục trên rồi submit lại.
```

## Lưu ý

- Không đọc code trừ khi có red flag (LOC bất thường, file ngoài scope)
- Nếu AI Review MR report critical issue mà Dev chưa fix → FAIL ngay
- Ticket phức tạp (cross-module, d=2/d=3) → yêu cầu thêm file ảnh hưởng
- Kết quả nghiệm thu comment lên ticket tracker
