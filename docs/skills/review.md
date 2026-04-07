# Skills Review

Nhóm skills review code MR, so sánh code với spec, và phản hồi AI review comments cho **econy-be** (Node.js) và **econy-fe** (Flutter).

## econy-be (Node.js / AWS Lambda)

## `nodejs-code-review`

Review code có hệ thống cho dự án Node.js/Express econy-be. Hỗ trợ 2 chế độ: so sánh branch (source vs target) và review commit (theo SHA). Review từng diff với truy vết 3 chiều + checklist đặc thù dự án. Không dùng cho phát triển tính năng, debug, viết mô tả MR.

| | |
|--|--|
| Workspace | econy-be |
| Input | Branch source + target, hoặc commit SHA |
| Output | `reports/code-review-*.md` |

**Checklist:**

| Category | Nội dung |
|----------|---------|
| Critical rules | customJoi / Logger / catchAsync / OrgId từ env.js / APIResponse pattern |
| Security | OWASP Top 10, injection, auth bypass |
| Correctness | Logic, edge cases, null handling |
| Performance | N+1 queries, unnecessary loops |

---

## `nodejs-design-review`

So sánh triển khai API với thiết kế spec (.md hoặc .xlsx) cho econy-be. Xác minh endpoint, trường dữ liệu, auth, trường hợp lỗi khớp với spec. Hỗ trợ Markdown và Excel. Không dùng cho review code chung, triển khai code, debug.

| | |
|--|--|
| Workspace | econy-be |
| Input | Source code + file spec thiết kế (.md hoặc .xlsx) |
| Output | `reports/design-review-*.md` |

---

## `nodejs-review-reply`

Xác minh các comment review MR do AI tạo cho econy-be. Đọc code thực tế, đánh giá từng comment là đúng hay sai, tạo phản hồi chấp nhận (kèm sửa lỗi) hoặc từ chối (kèm phản biện kỹ thuật).

| | |
|--|--|
| Workspace | econy-be |
| Input | File report review MR (`reports/code-review-*.md`) |
| Output | `reports/reply-comment-*.md` |

---

## econy-fe (Flutter / Dart)

## `flutter-mr-review`

Review MR Flutter cho econy-fe. Phân tích git diff, kiểm tra Clean Architecture violations, TenantContext usage, i18n, null safety, error handling.

| | |
|--|--|
| Workspace | econy-fe |
| Input | Branch source + target, hoặc MR number |
| Output | `reports/code-review-*.md` |

---

## `flutter-design-review`

So sánh triển khai Flutter với spec thiết kế màn hình. Xác minh layout, fields, behavior, validation, error handling khớp với spec.

| | |
|--|--|
| Workspace | econy-fe |
| Input | Source code + file thiết kế chi tiết màn hình |
| Output | `reports/design-review-*.md` |

---

## `flutter-review-reply`

Xác minh và phản hồi AI review comments cho Flutter econy-fe. Đọc code thực tế, chấp nhận comment đúng (kèm fix) hoặc từ chối (kèm phản biện kỹ thuật).

| | |
|--|--|
| Workspace | econy-fe |
| Input | File report review MR (`reports/code-review-*.md`) |
| Output | `reports/reply-comment-*.md` |

