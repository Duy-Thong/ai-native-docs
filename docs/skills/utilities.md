# Skills Tiện ích (Utilities)

Nhóm skills phụ trợ: chuyển đổi tài liệu, trích xuất schema, đọc file lớn, xác minh, và quản lý skills.

## `convert-excel-to-md`

Chuyển đổi hàng loạt file Excel (.xlsx) sang định dạng Markdown tối ưu cho AI. Hỗ trợ ô merged, trích xuất hình ảnh, tiếng Việt và tiếng Nhật. Dùng trước khi cho AI đọc tài liệu nghiệp vụ Excel.

| | |
|--|--|
| Workspace | ecn-be / ecn-fe |
| Input | File .xlsx |
| Output | File .md tương đương |

---

## `drawio-db-extract`

Trích xuất định nghĩa bảng cơ sở dữ liệu từ file .drawio và tạo tài liệu markdown có cấu trúc. Hỗ trợ DynamoDB, Firestore, S3.

| | |
|--|--|
| Workspace | ecn-be |
| Input | File .drawio chứa sơ đồ database |
| Output | File .md liệt kê tất cả bảng + schema |

---

## `drawio-firestore-extract`

Trích xuất định nghĩa collection Firestore từ file .drawio và tạo tài liệu markdown có cấu trúc.

| | |
|--|--|
| Workspace | ecn-be |
| Input | File .drawio chứa sơ đồ Firestore |
| Output | File .md liệt kê tất cả collection + schema |

---

## `read-file`

Đọc file Markdown lớn (>200 dòng) mà không mất ngữ cảnh. Chia chunk với overlap, xây dựng bản đồ section, xác minh tính đầy đủ. Dùng trước `nodejs-code-from-design` hoặc `nodejs-design-review` khi spec lớn.

| | |
|--|--|
| Workspace | ecn-be |
| Input | File .md lớn cần đọc |
| Output | Nội dung đầy đủ với bản đồ section |

---

## `verification-before-completion`

Bắt buộc tuyên bố hoàn thành dựa trên bằng chứng thực tế. Chạy lệnh xác minh và xác nhận output trước khi tuyên bố công việc đã hoàn thành, đã sửa, hoặc đã pass.

| | |
|--|--|
| Workspace | ecn-be / ecn-fe |
| Trigger | Trước `git commit`, `git push`, tạo PR, báo cáo "done" |
| Output | Kết quả xác minh thực tế (test results, lint output...) |

**Tips**: Không tuyên bố "đã xong" nếu chưa chạy lệnh xác minh và thấy output pass.

---

## `skill-creator`

Tạo skill mới, chỉnh sửa và cải thiện skill hiện có, đo hiệu suất skill bằng eval/benchmark, tối ưu description để kích hoạt chính xác hơn.

| | |
|--|--|
| Workspace | ecn-be |
| Input | Yêu cầu tạo/sửa/benchmark skill |
| Output | File SKILL.md mới hoặc đã cập nhật |

---

## `translate-document`

Dịch tài liệu (Excel .xlsx, Word .docx, PowerPoint .pptx) từ JP↔VN mà không cần API ngoài — agent tự dịch toàn bộ nội dung. Hỗ trợ optional rules file (Markdown).

| | |
|--|--|
| Workspace | ecn-fe |
| Input | File cần dịch + hướng dịch (JP→VN hoặc VN→JP) |
| Output | File đã dịch cùng định dạng |

---

## `xlsx`

Mở, đọc, sửa, tạo file .xlsx/.csv/.tsv. Dùng khi file spreadsheet là input hoặc output chính: thêm cột, tính formula, format, clean messy data, convert giữa các format bảng.

| | |
|--|--|
| Workspace | ecn-fe |
| Input | File .xlsx/.csv hoặc yêu cầu tạo mới |
| Output | File spreadsheet đã xử lý |

---

## `clean-code`

Áp dụng các nguyên tắc từ "Clean Code" (Robert C. Martin) khi viết, review, hoặc refactor code. Covers: naming, functions, comments, formatting, error handling, testing.

| | |
|--|--|
| Workspace | ecn-fe |
| Input | Code cần review hoặc refactor |
| Output | Code đã cải thiện + giải thích vi phạm |

