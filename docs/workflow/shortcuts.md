# Workflow Shortcuts

Không phải ticket nào cũng cần đủ 19 bước. Tùy theo loại công việc, có thể dùng shortcut để tiết kiệm thời gian.

## Bảng so sánh các Shortcut

> `[2c]` và `[7b]` là các bước optional — chỉ thực hiện khi member chọn confirm.

| Loại | Bước thực hiện | Bỏ qua |
|------|---------------|--------|
| Hotfix | 12 → 17 → 19 | Analysis, design, testcase |
| Bugfix nhỏ | 7 → 12 → 13 → 14 → 17 → 18 → 19 | Analysis, design, testcase creation |
| Refactor | 7 → 8 → 12 → 13 → 14 → 17 → 19 | Testcase (behavior không đổi) |
| Feature — Path A (TDD) | 1→2→2b→[2c]→3→4→5→6→7→[7b]→8→9→10→11→12→12b→13→14→15→16→17→18→18b→19 | — |
| Feature — Path B (Code First) | 1→2→2b→[2c]→3→4→5→6→7→[7b]→8→9→12→12b→13→10→11→14→15→16→17→18→18b→19 | — |

## Bugfix (nhỏ, rõ root cause)

`7 → 12 → 13 → 14 → 17 → 18 → 19`

**Điều kiện áp dụng**: Bug nhỏ, đã biết rõ root cause, không ảnh hưởng luồng chính.

**Bỏ qua**: Analyze ticket, QA requirement, design flow, estimation, design detail, testcase creation/review.

## Hotfix (urgent, production)

`12 → 17 → 19`

**Điều kiện áp dụng**: Lỗi production nghiêm trọng, cần fix ngay.

**Lưu ý**: Sau khi hotfix xong, tạo follow-up ticket để bổ sung test cases và documentation.

## Refactor (không thay đổi behavior)

`7 → 8 → 12 → 13 → 14 → 17 → 19`

**Điều kiện áp dụng**: Refactor thuần túy — cải thiện code quality, không thay đổi behavior.

**Bỏ qua**: Testcase creation/review (behavior không đổi nên test cases cũ vẫn valid).

## Feature đầy đủ — Path A (TDD)

Test cases được tạo trước khi code. Bước 12 dùng `/cook-tdd` thay vì `/cook` — AI tự gen failing tests → implement code to pass → refactor.

```
1 → 2 → 2b → [2c] → 3 → 4 → 5 → 6 → 7 → [7b] → 8 → 9 → 10 → 11 → 11b
→ 12(/cook-tdd) → 12b → 13 → 14 → 15 → 16 → 17 → 18 → 18b → 19
```

**Khi nào dùng**: Feature mới, logic nghiệp vụ phức tạp, cần đảm bảo coverage cao từ đầu. Xem chi tiết [TDD](./tdd).

## Feature đầy đủ — Path B (Code First)

Code xong rồi mới tạo test cases.

```
1 → 2 → 2b → [2c] → 3 → 4 → 5 → 6 → 7 → [7b] → 8 → 9 → 12 → 12b → 13
→ 10 → 11 → 11b → 14 → 15 → 16 → 17 → 18 → 18b → 19
```

**Khi nào dùng**: UI-heavy feature, prototype nhanh, hoặc khi spec có thể thay đổi sau khi xem code thực tế.

## Pipeline tự động

Dùng lệnh `/pipeline` để tự động chọn shortcut phù hợp:

```bash
# Auto-detect loại ticket từ context
/pipeline {ticket-slug}

# Chỉ định loại cụ thể
/pipeline {ticket-slug} --type=bugfix
/pipeline {ticket-slug} --type=hotfix
/pipeline {ticket-slug} --type=refactor
/pipeline {ticket-slug} --type=feature-tdd        # Path A: dùng /cook-tdd
/pipeline {ticket-slug} --type=feature-code-first  # Path B: dùng /cook
```

Pipeline sẽ tự động:
1. Xác định bước cần thực hiện theo loại
2. Khởi chạy từng skill theo đúng thứ tự
3. Dừng tại các Gates để chờ approval
4. Lưu artifacts vào đúng thư mục `plans/Sprint-XX/{ticket-slug}/`
