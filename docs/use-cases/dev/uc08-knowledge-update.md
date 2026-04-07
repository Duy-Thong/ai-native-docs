# Cập nhật Knowledge Base

## Tình huống

Trong quá trình code/fix/debug/investigate, AI hoặc dev phát hiện thông tin mới: business rules chưa có trong docs, mistake AI hay mắc, patterns hữu ích, thuật ngữ mới. Cần cập nhật vào knowledge base để AI học và không lặp lại sai lầm.

## Khi nào cần update

| Loại | Ví dụ | File target |
|------|-------|-------------|
| Business rule mới | "orgId lấy từ TenantContext, không truyền qua argument" | knowledge/business-rules.md |
| Mistake/Gotcha | AI tạo widget không inherit BaseScreenView | knowledge/common-mistakes.md |
| Thuật ngữ | Term JP mà AI dịch sai: 元請 = nhà thầu chính | knowledge/domain-glossary.md |
| Pattern | Cách tốt nhất để handle MobX reaction trong Flutter | memories/cook-accuracy.md |
| Doc mismatch | Docs nói API trả 200, thực tế trả 201 | knowledge/business-rules.md |

## Bước thực hiện

### Cách 1: AI tự hỏi (tự động)

Sau `/cook`, `/fix`, `/investigate`, `/debug`, `/review-code-skill` — AI có thể tự phát hiện và hỏi:

```
AI: 📝 Knowledge Discovery:
- Loại: Business rule
- Nội dung: Khi tạo màn hình, bắt buộc kế thừa BaseScreenView thay vì Scaffold
- Target: .github/knowledge/business-rules.md
Cập nhật knowledge base? (Y/n)

Dev: Y
AI: [Ghi vào business-rules.md, git tracked]
```

Dev chỉ cần confirm `Y` hoặc `n`. Max 2 lần hỏi per session.

### Cách 2: Dev chủ động chạy

| # | Hành động | Mô tả |
|---|-----------|-------|
| 1 | /update-knowledge | Bảo AI cập nhật với context cụ thể |
| 2 | AI xác nhận nội dung | Hiển thị nội dung sẽ ghi, file target |
| 3 | Dev confirm | Đồng ý hoặc chỉnh sửa |
| 4 | AI ghi vào file | Append vào file knowledge tương ứng |

### Ví dụ chạy thủ công

```
Dev: /update-knowledge
  AI hay quên check TenantContext trước khi gọi API.
  Ghi vào common-mistakes.

AI: Sẽ thêm vào .github/knowledge/common-mistakes.md:
  "## TenantContext
   Trước khi gọi bất kỳ API nào, PHẢI kiểm tra TenantContext().organizationId không null.
   KHÔNG truyền orgId qua argument UseCase/Repository/API."
  Confirm? (Y/n)

Dev: Y
AI: ✅ Đã cập nhật common-mistakes.md
```

## Knowledge Files

| File | Nội dung | Skill sử dụng |
|------|----------|---------------|
| knowledge/business-rules.md | Quy tắc nghiệp vụ | Tất cả skills |
| knowledge/common-mistakes.md | Lỗi AI hay mắc | /cook, /fix, /review-* |
| knowledge/domain-glossary.md | Thuật ngữ JP↔VN↔EN | /analyze-ticket, /qa-* |
| knowledge/faq.md | Câu hỏi thường gặp | On-demand |
| memories/cook-accuracy.md | Patterns code | /cook |
| memories/design-accuracy.md | Patterns design | /design-* |
| memories/review-accuracy.md | Patterns review | /review-* |
| memories/test-accuracy.md | Patterns test | /create-testcase |

## Lưu ý

- Knowledge files tracked trong git → `git push` để team thấy
- Max 2 lần hỏi knowledge discovery per session (tránh spam)
- Chỉ ghi kiến thức reusable — không ghi thứ chỉ đúng cho 1 ticket cụ thể
- Sau khi update → team members chạy `git pull` sẽ tự có knowledge mới
