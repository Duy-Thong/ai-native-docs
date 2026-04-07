# Gen Unit Test sau khi Code

## Tình huống

Dev code xong (`/cook`, `/cook-tdd`, hoặc `/fix`), cần sinh unit tests tự động để đảm bảo coverage. AI gen tests mapped từ test cases (nếu có) hoặc từ source code trực tiếp.

## Bước thực hiện

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | /gen-unit-test | AI sinh unit tests từ test cases + source code |
| 2 | Chạy tests | `flutter test` |
| 3 | Fix nếu fail | Fix test sai hoặc fix code nếu logic lỗi |
| 4 | Check coverage | Flutter ≥ 80% |

## Cách dùng

```bash
# Gen unit tests (auto-detect scope)
/gen-unit-test

# Chỉ một feature
/gen-unit-test --scope lib/scenes/payment

# Chỉ một usecase
/gen-unit-test --scope lib/domain/usecases/payment_usecase.dart

# TDD mode — gen failing tests TRƯỚC khi code
/gen-unit-test --mode tdd
```

## Input → Output

| Loại | Nội dung |
|------|---------|
| Input | 10-testcases.md (nếu có), source code đã implement |
| Output | Flutter test files: `test/unit/{feature}/{widget}_test.dart` |

## Coverage model

| Loại | Tỉ lệ | Ví dụ |
|------|-------|-------|
| Happy path | 40% | Login thành công, tạo record OK |
| Edge cases | 40% | Empty input, max length, concurrent |
| Error scenarios | 20% | Network fail, invalid token, 500 |

## Khi nào chạy

| Tình huống | Khi nào |
|-----------|---------|
| Feature mới (/cook) | Sau bước 12, trước bước 15 (review code) |
| TDD (/cook-tdd) | Đã tích hợp sẵn — không cần chạy riêng |
| Fix bug (/fix) | Sau fix, bổ sung test cho bug scenario |
| Hotfix | Sau deploy, bổ sung test retroactively |

## Lưu ý

- Mỗi test có comment referencing test case ID (nếu có `10-testcases.md`)
- Test files follow naming conventions: `{feature}_test.dart`
- Không mock service/store nội bộ — chỉ mock: API calls, Firestore, platform channels
- Sau gen-unit-test → chạy `/review-code-skill` để review cả code lẫn tests
