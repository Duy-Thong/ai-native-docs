# Danh mục Skills

53 skills trong `.github/skills/`, mỗi skill là 1 task/workflow. Gọi bằng tên skill trong chat với Copilot.

## Tổng quan

| Skill | Role | Bước | Mô tả |
|-------|------|------|-------|
| /fetch-ticket | BA | A-1 | Import ticket từ tracker |
| /analyze-ticket | BA | A-1 | Phân tích yêu cầu → requirements |
| /qa-requirement | BA | A-2 | Tạo câu hỏi QA clarify |
| /fill-qa-answers | BA | A-2b | Điền câu trả lời KH vào QA |
| /confirm-understanding | Architect | A-2c / B-7b | Xác nhận ý hiểu AI trước khi thiết kế (optional) |
| /design-flow | Architect | A-3 | Thiết kế luồng, Mermaid diagrams |
| /design-detail | Architect | B-8 | Thiết kế chi tiết |
| /estimate | Architect | A-4 | Ước lượng công việc |
| /analyze-source | Dev | B-7 | Phân tích source code |
| /cook | Dev | B-12 | Code implementation |
| /cook-tdd | Dev | B-12 | TDD-first: test → code → refactor |
| /fix | Dev | B-18 | Fix bugs |
| /gen-unit-test | Dev | B-14 | Sinh unit tests |
| /impact-report | Dev | B-13 | Báo cáo phạm vi ảnh hưởng |
| /create-testcase | QA | B-10 | Tạo test cases |
| /test | QA | B-17 | Chạy test suite |
| /update-testcase | QA | B-16 | Cập nhật test cases |
| /export-testcase | QA | B-11b | Xuất test cases ra Excel |
| /review-code-skill | Reviewer | B-15 | Review code |
| /review-design | Reviewer | B-9 | Review thiết kế |
| /review-testcase | Reviewer | B-11 | Review test cases |
| /review-delivery | Reviewer | B-19 | Review cuối → GO/NO-GO |
| /review-mr | Reviewer | — | Review GitHub PR |
| /fetch-bug | Dev | Bug-1 | Import bug child issue |
| /analyze-bug | Dev | Bug-2 | Root cause analysis |
| /propose-fix | Architect | Bug-3 | Đề xuất fix strategy |
| /fix-bug | Dev | Bug-4 | Implement fix |
| /bug-pipeline | Orchestrator | — | Auto bug fix workflow |
| /pipeline | Orchestrator | — | Auto full workflow |
| /resume-ticket | Orchestrator | — | Resume từ session trước |
| /codebase-audit | Orchestrator | — | Audit toàn diện |
| /brainstorm | Support | — | Thảo luận ý tưởng |
| /research | Support | — | Nghiên cứu kỹ thuật |
| /scout | Support | — | Tìm kiếm trong codebase |
| /debug | Support | — | Điều tra, debug |
| /investigate | Support | — | Điều tra hiện trạng |
| /propose | Support | — | Đề xuất phương án cho KH |
| /preview | Support | — | Visual: diagrams, slides |
| /think | Support | — | Phân tích step-by-step |
| /shiteki | Reviewer | — | Quản lý chỉ trích (指摘) |
| /analysis-shiteki | Reviewer | — | Phân tích shiteki toàn sprint (Leader) |
| /verify-report | Support | — | Xác minh báo cáo |
| /update-knowledge | Support | — | Cập nhật knowledge base |
| /ui-review | QA | — | So sánh UI vs Figma |
| /gen-design | Architect | — | Tạo design từ source |
| /sync-design | Architect | — | Sync design sau fix/cook |
| /multi-model-review | Reviewer | — | Multi-model review |
| /git | Dev | — | Git operations |
| /convert-excel-to-md | Support | — | Excel → Markdown |
| /done | Support | — | Session summary, exit |
| /pre-sync-testcase | QA | — | Tester sync data |
| /confirm-bugfix | QA | — | Tester confirm bug fix |
| /gen-merge | Dev | — | Generate MR description |

## Danh mục theo nhóm

| Nhóm | File | Skills |
|------|------|--------|
| Phân tích | [analysis](./analysis) | fetch-ticket, analyze-ticket, qa-requirement, fill-qa-answers, confirm-understanding, investigate |
| Thiết kế | [design](./design) | design-flow, design-detail, estimate, gen-design, sync-design, propose, propose-fix |
| Phát triển | [development](./development) | analyze-source, cook, cook-tdd, fix, gen-unit-test, impact-report, fetch-bug, analyze-bug, fix-bug, debug, git, gen-merge |
| Kiểm thử | [testing](./testing) | create-testcase, review-testcase, export-testcase, update-testcase, test, pre-sync-testcase, confirm-bugfix, ui-review |
| Review | [review](./review) | review-code-skill, review-design, review-testcase, review-delivery, review-mr, shiteki, multi-model-review, verify-report, analysis-shiteki |
| Tiện ích | [utilities](./utilities) | pipeline, bug-pipeline, resume-ticket, codebase-audit, brainstorm, research, scout, preview, think, update-knowledge, convert-excel-to-md, done |
