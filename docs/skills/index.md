# Danh mục Skills

39 skills trong `.github/skills/` của 3 workspace folders. Gọi bằng tên skill trong chat với Copilot.

## Tổng quan

| Skill | Workspace | Role | Bước | Mô tả |
|-------|-----------|------|------|-------|
| nodejs-code-gen | econy-be | Dev | B-12 | Sinh code Node.js/Express theo pattern Controller-Service-Repository |
| nodejs-code-from-design | econy-be | Dev | B-12 | Triển khai code từ tài liệu thiết kế Markdown |
| nodejs-debug-fix | econy-be | Dev | Bug-4 | Điều tra và sửa lỗi (5-Why, Route → Controller → Service → DB) |
| nodejs-code-review | econy-be | Reviewer | B-15 | Review code MR, so sánh branch/commit SHA |
| nodejs-design-review | econy-be | Reviewer | B-9 | So sánh triển khai API với spec (.md hoặc .xlsx) |
| nodejs-mr-description | econy-be | Dev | — | Tạo mô tả MR song ngữ JP+VN (7 phần) |
| nodejs-review-reply | econy-be | Reviewer | — | Xác minh và phản hồi AI review comments |
| drawio-db-extract | econy-be | Support | — | Trích xuất schema DynamoDB/Firestore từ file .drawio |
| drawio-firestore-extract | econy-be | Support | — | Trích xuất collection Firestore từ file .drawio |
| read-file | econy-be | Support | — | Đọc file Markdown lớn (>200 dòng) không mất ngữ cảnh |
| verification-before-completion | econy-be/fe | Support | — | Xác minh bằng lệnh thực tế trước khi tuyên bố hoàn thành |
| convert-excel-to-md | econy-be/fe | Support | — | Chuyển đổi file Excel (.xlsx) sang Markdown tối ưu cho AI |
| skill-creator | econy-be | Support | — | Tạo mới, chỉnh sửa, benchmark skill |
| flutter-code-gen | econy-fe | Dev | B-12 | Sinh code Flutter theo Clean Architecture + MobX |
| flutter-code-from-design | econy-fe | Dev | B-12 | Sinh code Flutter từ tài liệu thiết kế |
| flutter-debug-fix | econy-fe | Dev | Bug-4 | Điều tra và sửa lỗi Flutter |
| flutter-mr-review | econy-fe | Reviewer | B-15 | Review MR Flutter |
| flutter-design-review | econy-fe | Reviewer | B-9 | So sánh triển khai Flutter với spec |
| flutter-mr-description | econy-fe | Dev | — | Tạo mô tả MR Flutter song ngữ JP+VN |
| flutter-review-reply | econy-fe | Reviewer | — | Phản hồi AI review comments cho Flutter |
| flutter-ui-review | econy-fe | QA | B-17 | So sánh UI vs thiết kế (Figma/screenshot) |
| mobile-developer | econy-fe | Dev | — | Phát triển React Native / Flutter / native với architecture patterns |
| clean-code | econy-fe | Support | — | Áp dụng nguyên tắc Clean Code (Robert C. Martin) |
| translate-document | econy-fe | Support | — | Dịch tài liệu Excel/Word/PPT JP↔VN |
| xlsx | econy-fe | Support | — | Mở, đọc, sửa, tạo file .xlsx/.csv |
| basic-design-scope-reviewer | document | Reviewer | B-9 | Đánh giá scope thiết kế cơ bản theo checklist |
| detail-design-api-creator | document | Architect | B-8 | Tạo mới thiết kế chi tiết API (REST GET/POST/PUT/DELETE/PATCH) |
| detail-design-api-edit | document | Architect | B-8 | Chỉnh sửa/cập nhật thiết kế chi tiết API đã có |
| detail-design-api-fixer | document | Architect | — | Fix review-feedback cho thiết kế API |
| detail-design-api-reviewer | document | Reviewer | B-9 | Review thiết kế chi tiết API theo checklist |
| detail-design-screen-creator | document | Architect | B-8 | Tạo mới thiết kế chi tiết màn hình (form/list/detail/modal) |
| detail-design-screen-edit | document | Architect | B-8 | Chỉnh sửa/cập nhật thiết kế chi tiết màn hình |
| detail-design-screen-reviewer | document | Reviewer | B-9 | Review thiết kế chi tiết màn hình theo checklist |
| detail-design-task-creator | document | Architect | B-8 | Tạo thiết kế chi tiết task/Lambda function |
| detail-design-task-fixer | document | Architect | — | Fix review-feedback cho thiết kế task |
| detail-design-task-reviewer | document | Reviewer | B-9 | Review thiết kế chi tiết task theo checklist |
| testcase-functional-creator | document | QA | B-10 | Tạo test cases kiểm thử chức năng |
| testcase-functional-fixer | document | QA | — | Fix review-feedback cho test cases |
| testcase-functional-reviewer | document | Reviewer | B-11 | Review test cases kiểm thử chức năng theo checklist |

## Danh mục theo nhóm

| Nhóm | File | Skills |
|------|------|--------|
| Thiết kế | [design](./design) | basic-design-scope-reviewer, detail-design-api-creator, detail-design-api-edit, detail-design-api-fixer, detail-design-api-reviewer, detail-design-screen-creator, detail-design-screen-edit, detail-design-screen-reviewer, detail-design-task-creator, detail-design-task-fixer, detail-design-task-reviewer |
| Kiểm thử | [testing](./testing) | testcase-functional-creator, testcase-functional-fixer, testcase-functional-reviewer, flutter-ui-review |
| Phát triển | [development](./development) | nodejs-code-gen, nodejs-code-from-design, nodejs-debug-fix, nodejs-mr-description, flutter-code-gen, flutter-code-from-design, flutter-debug-fix, flutter-mr-description, mobile-developer |
| Review | [review](./review) | nodejs-code-review, nodejs-design-review, nodejs-review-reply, flutter-mr-review, flutter-design-review, flutter-review-reply |
| Tiện ích | [utilities](./utilities) | convert-excel-to-md, drawio-db-extract, drawio-firestore-extract, read-file, verification-before-completion, skill-creator, translate-document, xlsx, clean-code |
