# Cài đặt

Hướng dẫn từng bước clone và thiết lập workspace AI Native Workflow cho Econy.

## Bước 1: Clone econy-fe repo

```bash
git clone <econy-fe-repo-url>
cd econy-fe
```

## Bước 2: Cấu trúc thư mục

Sau khi clone, workspace có cấu trúc:

```
econy-fe/
├── .github/               # AI workflow config
│   ├── copilot-instructions.md   # Iron Rules
│   ├── agents/            # flutter-dev, flutter-reviewer
│   ├── instructions/      # flutter-dart.instructions.md
│   └── skills/            # 13 skills
├── lib/                   # Flutter source code
│   ├── domain/            # entities, usecase
│   ├── data/              # api, models, repositories
│   └── scenes/            # presentation
└── test/                  # unit tests
```

## Bước 3: Cài đặt Flutter dependencies

```bash
flutter pub get
```

## Bước 4: Cấu hình môi trường

Tạo file `.env` với các biến cần thiết (xem [Cấu hình môi trường](./configuration)).

## Bước 5: Xác nhận cài đặt

Mở VS Code với GitHub Copilot. Kiểm tra skills đã available bằng cách chat với Copilot:

```
#flutter-dev Bạn có những skills gì?
```

Nếu Copilot trả lời danh sách skills là cài đặt thành công.
