# Skills Kiểm thử (Testing)

Nhóm skills tạo, fix, và review test cases kiểm thử chức năng (**document** workspace), và review UI trực quan (**econy-fe**).

## `testcase-functional-creator`

Tạo test cases kiểm thử đơn vị chức năng (Functional UT Test) từ tài liệu thiết kế. Sinh đầy đủ các loại: normal case, boundary, error case, security.

| | |
|--|--|
| Workspace | document |
| Input | File thiết kế chi tiết API/Screen/Task (.md hoặc .xlsx) |
| Output | File test cases (.md) |

---

## `testcase-functional-fixer`

Fix review-feedback cho file test cases, cập nhật file gốc và ghi lại những gì đã sửa.

| | |
|--|--|
| Workspace | document |
| Input | File test cases gốc + danh sách feedback |
| Output | File test cases đã cập nhật + changelog |

---

## `testcase-functional-reviewer`

Review test cases kiểm thử chức năng theo checklist, đảm bảo đầy đủ coverage, test case quality, environment setup, error cases, security. Tạo file báo cáo kết quả review.

| | |
|--|--|
| Workspace | document |
| Input | File test cases (.md hoặc .xlsx) |
| Output | File báo cáo review kết quả |

---

## `flutter-ui-review`

So sánh UI thực tế với thiết kế (Figma/screenshot). Phát hiện sai lệch layout, màu sắc, font, spacing, behavior.

| | |
|--|--|
| Workspace | econy-fe |
| Input | Screenshot UI thực tế + file thiết kế / Figma |
| Output | Báo cáo sai lệch UI với severity |
