# Gen Merge Request Description

## Tình huống

Dev code xong, đã push branch và tạo PR/MR trên GitHub. Cần AI gen nội dung mô tả cho PR: summary thay đổi, danh sách files, testing notes — thay vì viết tay.

## Bước thực hiện

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | Push code + tạo PR | Tạo PR trên GitHub (có thể để body trống) |
| 2 | /gen-merge `<PR-URL>` | AI đọc diff + commits → gen description theo template repo |
| 3 | Review output | Đọc lại description AI gen, chỉnh sửa nếu cần |
| 4 | Paste vào PR | Copy description vào PR body trên GitHub |

## Ví dụ

```bash
# Gen từ PR URL
/gen-merge https://github.com/org/econy-fe/pull/42

# Gen từ PR URL backend
/gen-merge https://github.com/org/econy-be/pull/15
```

## Output AI gen

PR description theo template chuẩn của repo, bao gồm:

| Section | Nội dung |
|---------|---------|
| Summary | Tóm tắt thay đổi (1-3 câu) |
| Changes | Danh sách files changed + mô tả từng thay đổi |
| Testing | Hướng dẫn test: steps, expected results |
| Impact | Phạm vi ảnh hưởng (nếu có) |
| Screenshots | Placeholder cho dev đính kèm |

## Lưu ý

- Chạy sau khi tạo PR — AI cần PR URL để đọc diff
- Description là gợi ý — dev phải đọc lại và chỉnh sửa trước khi submit
- Template tự động theo repo (FE template khác BE template)
- Kết hợp với [2x AI Review](/use-cases/dev/uc09-dual-ai-review): gen description → review MR → nghiệm thu
