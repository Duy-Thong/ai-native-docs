# Cài đặt

Hướng dẫn clone 3 repo của ecn và thiết lập VS Code Workspace để nhận toàn bộ agent & skill từ cả 3 repo.

## Bước 1: Clone 3 repo

Mỗi repo có thư mục `.github/` riêng chứa agents, skills, và instructions.

```bash
git clone <ecn-fe-url>
git clone <ecn-be-url>
git clone <ecn-document-url>
```

| Repo | Nội dung `.github/` |
|------|---------------------|
| `ecn-fe` | Flutter agents, skills, instructions |
| `ecn-be` | Backend agents, skills, instructions |
| `ecn-document` | Doc agents, workflow skills |

## Bước 2: Tạo VS Code Workspace

Tạo file `ecn.code-workspace` ở thư mục cha (ngang cấp với 3 repo):

```
parent-folder/
├── ecn-fe/
├── ecn-be/
├── ecn-document/
└── ecn.code-workspace   ← tạo file này
```

Nội dung file `ecn.code-workspace`:

```json
{
  "folders": [
    {
      "name": "ecn-fe",
      "path": "./ecn-fe"
    },
    {
      "name": "ecn-be",
      "path": "./ecn-be"
    },
    {
      "name": "ecn-document",
      "path": "./ecn-document"
    }
  ],
  "settings": {}
}
```

## Bước 3: Mở Workspace

```bash
code ecn.code-workspace
```

Hoặc trong VS Code: **File → Open Workspace from File...** → chọn `ecn.code-workspace`.

## Bước 4: Xác nhận

Khi workspace mở, GitHub Copilot sẽ tự động nhận agents & skills từ `.github/` của cả 3 repo. Kiểm tra bằng cách chat:

```
@workspace Bạn có những agents gì?
```

Nếu Copilot liệt kê được agents từ cả 3 repo là thiết lập thành công.
