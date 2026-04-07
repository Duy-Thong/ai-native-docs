# Review Estimation

## Tình huống

Dev hoàn thành file estimation (bước 4), comment lên ticket và gửi Lead review. Lead cần kiểm tra trước khi nộp khách hàng.

## Checklist

| # | Kiểm tra | Ghi chú |
|---|---------|---------|
| 1 | Task breakdown đủ? | Có thiếu task nào so với design flow không? |
| 2 | Giờ estimate hợp lý? | So sánh với ticket tương tự trước đó |
| 3 | Risk buffer có? | Các task phức tạp có buffer chưa? |
| 4 | FE + BE tách rõ? | Giờ FE và BE phải tách riêng |
| 5 | Dependencies rõ ràng? | Thứ tự task, blocker nếu có |
| 6 | Scope đúng? | Không estimate thừa/thiếu so với requirement |

## Bước thực hiện

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | Đọc 04-estimation.md | Mở file estimate trong `plans/Sprint-XX/{ticket}/` |
| 2 | Cross-check với design flow | So sánh tasks vs 03-flow-design.md |
| 3 | Review giờ | Kiểm tra estimate từng task, tổng giờ |
| 4 | APPROVED hoặc REJECTED | Comment kết quả lên ticket |

## Kết quả

- **APPROVED**: Gửi estimate cho KH (bước 6). Comment: `【Lead APPROVED】Est OK, tiến hành nộp KH.`
- **REJECTED**: Comment lý do + yêu cầu sửa. Dev chỉnh lại → nộp lại.
