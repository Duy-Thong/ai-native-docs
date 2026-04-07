# Skills Thiết kế (Design)

Nhóm skills tạo mới, chỉnh sửa, và review tài liệu thiết kế chi tiết (Basic Design, API Design, Screen Design, Task Design). Tất cả thuộc workspace **document**.

## `basic-design-scope-reviewer`

Đánh giá scope thiết kế cơ bản (Basic Design) của các task phát triển theo checklist chi tiết. Đảm bảo đầy đủ thành phần, trigger, input/output, integration, error handling. Tạo file báo cáo kết quả review.

| | |
|--|--|
| Workspace | document |
| Input | File scope / Basic Design (.md hoặc .xlsx) |
| Output | File báo cáo review kết quả |

---

## `detail-design-api-creator`

Tạo mới thiết kế chi tiết API từ requirement và tài liệu scope. Hỗ trợ REST API (GET/POST/PUT/DELETE/PATCH). Hỏi xác nhận khi còn điểm chưa rõ trước khi finalize.

| | |
|--|--|
| Workspace | document |
| Input | File scope/requirement, tài liệu tham khảo |
| Output | File thiết kế chi tiết API (.md) |

---

## `detail-design-api-edit`

Edit/update thiết kế chi tiết API đã có sẵn. Copy nội dung từ file .xlsx/.md cũ ra file .md mới, chỉnh sửa theo feedback. Hỏi xác nhận điểm chưa rõ trước khi finalize.

| | |
|--|--|
| Workspace | document |
| Input | File design cũ (.xlsx hoặc .md) + nội dung cần sửa |
| Output | File thiết kế chi tiết API mới (.md) |

---

## `detail-design-api-fixer`

Fix review-feedback cho file thiết kế chi tiết API, cập nhật file gốc và ghi lại những gì đã sửa.

| | |
|--|--|
| Workspace | document |
| Input | File design gốc + danh sách feedback cần fix |
| Output | File design đã cập nhật + changelog |

---

## `detail-design-api-reviewer`

Review thiết kế chi tiết API theo checklist, đảm bảo đầy đủ endpoint, request/response, validation, authorization, error handling, security. Tạo file báo cáo kết quả review.

| | |
|--|--|
| Workspace | document |
| Input | File thiết kế chi tiết API (.md hoặc .xlsx) |
| Output | File báo cáo review kết quả |

---

## `detail-design-screen-creator`

Tạo mới thiết kế chi tiết màn hình từ file scope yêu cầu. Hỗ trợ các loại màn hình: form, list, detail, modal. Hỏi xác nhận khi còn điểm chưa rõ trước khi finalize.

| | |
|--|--|
| Workspace | document |
| Input | File scope/requirement màn hình |
| Output | File thiết kế chi tiết màn hình (.md) |

---

## `detail-design-screen-edit`

Edit/update thiết kế chi tiết màn hình đã có sẵn. Copy nội dung từ file .xlsx/.md cũ ra file .md mới, chỉnh sửa theo feedback.

| | |
|--|--|
| Workspace | document |
| Input | File design màn hình cũ + nội dung cần sửa |
| Output | File thiết kế chi tiết màn hình mới (.md) |

---

## `detail-design-screen-reviewer`

Review thiết kế chi tiết màn hình theo checklist chuyên biệt cho Screen, đảm bảo đầy đủ layout, field, chức năng, validation, integration. Tạo file báo cáo kết quả review.

| | |
|--|--|
| Workspace | document |
| Input | File thiết kế chi tiết màn hình (.md hoặc .xlsx) |
| Output | File báo cáo review kết quả |

---

## `detail-design-task-creator`

Tạo thiết kế chi tiết task/Lambda function từ file scope yêu cầu.

| | |
|--|--|
| Workspace | document |
| Input | File scope/requirement task |
| Output | File thiết kế chi tiết task (.md) |

---

## `detail-design-task-fixer`

Fix review-feedback cho file thiết kế chi tiết task, cập nhật file gốc và ghi lại những gì đã sửa.

| | |
|--|--|
| Workspace | document |
| Input | File design task gốc + danh sách feedback |
| Output | File design đã cập nhật + changelog |

---

## `detail-design-task-reviewer`

Review thiết kế chi tiết task theo checklist, đảm bảo đầy đủ hạ tầng Lambda, trigger, luồng xử lý, error handling, security. Tạo file báo cáo kết quả review.

| | |
|--|--|
| Workspace | document |
| Input | File thiết kế chi tiết task (.md hoặc .xlsx) |
| Output | File báo cáo review kết quả |

