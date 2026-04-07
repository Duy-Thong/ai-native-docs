# Cấu hình môi trường

## Setup dự án

Chi tiết cấu hình môi trường từng repo (Flutter, backend, biến môi trường, v.v.) xem trên **GitLab Wiki** của từng repo tương ứng.

---

## MCP Servers

Agent hiện dùng 2 MCP server: **Figma**, **Playwright**. Cấu hình bằng cách tạo (hoặc mở) file `.vscode/mcp.json` trong workspace:

```json
{
  "servers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp",
      "type": "http"
    },
    "microsoft/playwright-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    },
  }
}
```

| Server | Tính năng |
|--------|-----------|
| `figma` | Đọc Figma design files (HTTP, không cần cài thêm) |
| `playwright` | Browser automation — test UI, chụp màn hình |

> **Lưu ý Figma**: Server Figma dùng HTTP transport, cần đăng nhập Figma account trong VS Code khi được yêu cầu.

## Xác nhận MCP

Sau khi lưu file, mở VS Code Command Palette (`Ctrl+Shift+P`) → **MCP: List Servers** để xác nhận 2 server đã kết nối.
