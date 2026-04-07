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

### Công cụ bổ sung

```bash
# glab CLI để tương tác với GitLab
glab --version
```

## Tùy chọn

Các tích hợp sau mở khóa thêm tính năng:

| API Key | Tính năng | Skills |
|---------|-----------|--------|
| FIGMA_API_KEY | Đọc Figma design files | flutter-ui-review |
| GITLAB_TOKEN | Tương tác GitLab | MR operations |

## Kiểm tra nhanh

```bash
flutter --version && git --version && glab --version
```

Tất cả output xuất hiện mà không có lỗi là môi trường đã sẵn sàng.
