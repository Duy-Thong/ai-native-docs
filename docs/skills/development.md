# Skills Phát triển (Development)

Nhóm skills sinh code, debug, và tạo MR description cho **ecn-be** (Node.js/Lambda) và **ecn-fe** (Flutter/Dart).

## ecn-be (Node.js / AWS Lambda)

## `nodejs-code-gen`

Sinh code Node.js/Express cho ecn-be theo pattern Controller-Service-Repository trên AWS Lambda. Tạo API endpoint, Lambda function, Input/Output DTO, logic service, Joi validation, DynamoDB/Firestore repository, hoặc domain mới.

| | |
|--|--|
| Workspace | ecn-be |
| Input | Mô tả tính năng hoặc API cần tạo |
| Output | Source code theo pattern Controller-Service-Repository |

**Tips**: Không dùng khi đã có tài liệu thiết kế — dùng `nodejs-code-from-design` thay thế.

---

## `nodejs-code-from-design`

Triển khai code Node.js/Express API từ tài liệu thiết kế Markdown. Đọc thiết kế (.md) → hỏi edge case → sinh code theo pattern Controller-Service-Repository trên AWS Lambda. Không dùng cho: review, debug, hoặc code không có thiết kế.

| | |
|--|--|
| Workspace | ecn-be |
| Input | File thiết kế chi tiết API (.md) |
| Output | Source code đầy đủ theo spec |

---

## `nodejs-debug-fix`

Điều tra và sửa lỗi trong dự án Node.js/Express ecn-be. Truy vết qua các tầng: Route → Controller → Service → Repository → DB/API bên ngoài. Sử dụng phân tích nguyên nhân gốc 5-Why, áp dụng sửa lỗi tối thiểu an toàn, kiểm tra bug tương tự. Không dùng cho phát triển tính năng mới hoặc review MR.

| | |
|--|--|
| Workspace | ecn-be |
| Input | Mô tả lỗi, error log, hoặc bug description |
| Output | Code fix đã xác minh |

---

## `nodejs-mr-description`

Tạo mô tả MR (JP + VN) cho dự án ecn-be. Phân tích git diff → tạo báo cáo song ngữ 7 phần: Nguyên nhân trực tiếp, Nguyên nhân gốc, Giải pháp, Kiểm tra tương tự, Kiểm tra ảnh hưởng, Testcase. Không dùng cho: code review, phát triển tính năng, debug.

| | |
|--|--|
| Workspace | ecn-be |
| Input | Branch source + target (hoặc commit SHA) |
| Output | `reports/mr-description-*.md` |

---

## ecn-fe (Flutter / Dart)

## `flutter-code-gen`

Sinh code Flutter theo Clean Architecture + MobX + GetX cho ecn-fe. Tạo Screen, ViewModel, UseCase, Repository, Model, hoặc domain mới.

| | |
|--|--|
| Workspace | ecn-fe |
| Input | Mô tả tính năng hoặc màn hình cần tạo |
| Output | Source code theo Clean Architecture |

---

## `flutter-code-from-design`

Sinh code Flutter từ tài liệu thiết kế chi tiết màn hình. Đọc spec → hỏi điểm chưa rõ → sinh code theo Clean Architecture.

| | |
|--|--|
| Workspace | ecn-fe |
| Input | File thiết kế chi tiết màn hình (.md hoặc .xlsx) |
| Output | Source code màn hình đầy đủ theo spec |

---

## `flutter-debug-fix`

Điều tra và sửa lỗi trong dự án Flutter ecn-fe. Truy vết qua các lớp: View → ViewModel → UseCase → Repository → API/Firestore. Áp dụng 5-Why, sửa tối thiểu an toàn.

| | |
|--|--|
| Workspace | ecn-fe |
| Input | Mô tả lỗi, stack trace, hoặc bug description |
| Output | Code fix đã xác minh |

---

## `flutter-mr-description`

Tạo mô tả MR Flutter song ngữ JP+VN. Phân tích git diff → sinh báo cáo đầy đủ theo template `.gitlab/`.

| | |
|--|--|
| Workspace | ecn-fe |
| Input | Branch source + target (hoặc commit SHA) |
| Output | `reports/mr-description-*.md` |

---

## `mobile-developer`

Phát triển React Native, Flutter, hoặc native mobile apps với các architecture patterns hiện đại. Masters cross-platform development, native integrations, offline sync, app store optimization.

| | |
|--|--|
| Workspace | ecn-fe |
| Input | Yêu cầu tính năng mobile |
| Output | Code implementation đầy đủ |
