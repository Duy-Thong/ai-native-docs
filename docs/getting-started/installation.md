# Cài đặt

Hướng dẫn clone 3 repo của econy và thiết lập VS Code Workspace để nhận toàn bộ agent & skill từ cả 3 repo.

## Bước 1: Clone 3 repo

Mỗi repo có thư mục `.github/` riêng chứa agents, skills, và instructions.

```bash
git clone <econy-fe-url>
git clone <econy-be-url>
git clone <econy-document-url>
```

| Repo | Nội dung `.github/` |
|------|---------------------|
| `econy-fe` | Flutter agents, skills, instructions |
| `econy-be` | Backend agents, skills, instructions |
| `econy-document` | Doc agents, workflow skills |

## Bước 2: Tạo VS Code Workspace

Tạo file `econy.code-workspace` ở thư mục cha (ngang cấp với 3 repo):

```
parent-folder/
├── econy-fe/
├── econy-be/
├── econy-document/
└── econy.code-workspace   ← tạo file này
```

Nội dung file `econy.code-workspace`:

```json
{
  "folders": [
    {
      "name": "econy-fe",
      "path": "./econy-fe"
    },
    {
      "name": "econy-be",
      "path": "./econy-be"
    },
    {
      "name": "econy-document",
      "path": "./econy-document"
    }
  ],
  "settings": {}
}
```

## Bước 3: Mở Workspace

```bash
code econy.code-workspace
```

Hoặc trong VS Code: **File → Open Workspace from File...** → chọn `econy.code-workspace`.

## Bước 4: Xác nhận

Khi workspace mở, GitHub Copilot sẽ tự động nhận agents & skills từ `.github/` của cả 3 repo. Kiểm tra bằng cách chat:

```
@workspace Bạn có những agents gì?
```

Nếu Copilot liệt kê được agents từ cả 3 repo là thiết lập thành công.
