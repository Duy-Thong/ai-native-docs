# Yêu cầu hệ thống

Trước khi cài đặt AI Native Workflow, hãy đảm bảo máy bạn đáp ứng các yêu cầu sau.

## Bắt buộc

### GitHub Copilot

Cần GitHub Copilot subscription (Individual hoặc Business).

```bash
# Kiểm tra Copilot đã cài trong VS Code
code --list-extensions | grep GitHub.copilot
```

### Flutter SDK

```bash
flutter --version  # cần >= 3.x
dart --version
```

### Git

```bash
git --version
```

### glab CLI

```bash
# glab CLI để tương tác với GitLab
glab --version
```

### Node.js

Cần có Node.js để chạy các MCP server:

```bash
node --version  # cần >= 18.x
npx --version
```

## Kiểm tra nhanh

```bash
flutter --version && git --version && glab --version && node --version
```

Tất cả output xuất hiện mà không có lỗi là môi trường đã sẵn sàng.
