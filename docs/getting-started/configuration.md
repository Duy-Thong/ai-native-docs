# Cấu hình môi trường

## Bước 1: Tạo file `.env`

```bash
cp .env.example .env
```

## Biến môi trường bắt buộc

| Biến | Mô tả | Ví dụ |
|------|-------|-------|
| CURRENT_SPRINT | Sprint hiện tại — cập nhật đầu mỗi sprint | Sprint-24 |
| REPORTER_NAME | Tên của bạn — dùng trong review, MR | Nguyen Van A |

```dotenv
CURRENT_SPRINT=Sprint-24
REPORTER_NAME=Nguyen Van A
```

> **Quan trọng**: `CURRENT_SPRINT` dùng để tổ chức artifacts theo sprint.

## API keys tùy chọn

```dotenv
# Đọc Figma design files
FIGMA_API_KEY=your-key-here

# GitLab token
GITLAB_TOKEN=your-token-here
```

## MCP Servers (VS Code)

Cấu hình trong VS Code settings (`settings.json`):

```json
{
  "github.copilot.chat.codeGeneration.instructions": [],
  "mcp": {
    "servers": {
      "figma": {
        "command": "npx",
        "args": ["-y", "figma-mcp"],
        "env": { "FIGMA_ACCESS_TOKEN": "${FIGMA_API_KEY}" }
      },
      "playwright": {
        "command": "npx",
        "args": ["-y", "@playwright/mcp"]
      }
    }
  }
}
```

| Server | Tính năng |
|--------|-----------|
| figma | Đọc Figma design files trong flutter-ui-review |
| playwright | Browser automation cho UI test |

## Xác nhận cấu hình

Mở VS Code và thực hiện một skill test:

```
#flutter-dev dự án này đang dùng Flutter version bao nhiêu?
```

Nếu Copilot trả lời đúng thông tin từ `pubspec.yaml` là cấu hình thành công.
