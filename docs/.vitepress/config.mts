import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Native Workflow',
  description: 'Hướng dẫn sử dụng cho dự án ecn',
  lang: 'vi-VN',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'Bắt đầu', link: '/getting-started/prerequisites' },
      { text: 'Use Cases', link: '/use-cases/dev/uc02-new-feature' },
      { text: 'Workflow', link: '/workflow/overview' },
      { text: 'Skills', link: '/skills/' },
    ],
    sidebar: [
      {
        text: 'Bắt đầu',
        items: [
          { text: 'Yêu cầu hệ thống', link: '/getting-started/prerequisites' },
          { text: 'Cài đặt & Clone', link: '/getting-started/installation' },
          { text: 'Cấu hình môi trường', link: '/getting-started/configuration' },
        ],
      },
      {
        text: 'Use Cases — Dev',
        items: [
          { text: 'Feature mới', link: '/use-cases/dev/uc02-new-feature' },
          { text: 'Confirm understanding', link: '/use-cases/dev/uc15-confirm-understanding' },
          { text: 'Self-review checklist', link: '/use-cases/dev/uc06-self-review-checklist' },
          { text: 'Gen Merge description', link: '/use-cases/dev/uc10-gen-merge-description' },
          { text: 'Review Merge Request', link: '/use-cases/dev/uc11-review-merge-request' },
          { text: '2x AI Review', link: '/use-cases/dev/uc09-dual-ai-review' },
          { text: 'Gen Unit Test', link: '/use-cases/dev/uc12-gen-unit-test' },
          { text: 'Fix shiteki AI Review', link: '/use-cases/dev/uc13-fix-ai-review-shiteki' },
          { text: 'Impact Report', link: '/use-cases/dev/uc14-impact-report' },
          { text: 'Shiteki wrap-up', link: '/use-cases/dev/uc07-shiteki-wrap-up' },
          { text: 'Knowledge update', link: '/use-cases/dev/uc08-knowledge-update' },
          { text: 'Fix bug từ tester', link: '/use-cases/dev/uc03-bugfix' },
          { text: 'Hotfix production', link: '/use-cases/dev/uc04-hotfix' },
          { text: 'Điều tra hiện trạng', link: '/use-cases/dev/uc01-investigate' },
          { text: 'Resume ticket', link: '/use-cases/dev/uc05-resume-ticket' },
        ],
      },
      {
        text: 'Use Cases — Tester',
        items: [
          { text: 'Tạo test case', link: '/use-cases/tester/uc01-create-testcase' },
          { text: 'Confirm bug fix', link: '/use-cases/tester/uc02-confirm-bugfix' },
          { text: 'Update test case', link: '/use-cases/tester/uc03-update-testcase' },
          { text: 'Export Excel', link: '/use-cases/tester/uc04-export-excel' },
          { text: 'Test manual & Bug report', link: '/use-cases/tester/uc05-manual-test-bug-report' },
        ],
      },
      {
        text: 'Use Cases — Lead',
        items: [
          { text: 'Review Estimation', link: '/use-cases/lead/uc01-review-estimate' },
          { text: 'Review output Dev', link: '/use-cases/lead/uc02-review-dev-output' },
          { text: 'Review output Tester', link: '/use-cases/lead/uc03-review-tester-output' },
          { text: 'Final Delivery', link: '/use-cases/lead/uc04-final-delivery' },
          { text: 'Phân tích Shiteki sprint', link: '/use-cases/lead/uc05-analysis-shiteki' },
          { text: 'Nghiệm thu (Acceptance)', link: '/use-cases/lead/uc06-acceptance-review' },
        ],
      },
      {
        text: 'Workflow',
        items: [
          { text: 'Flow vận hành thực tế', link: '/workflow/operational-flow' },
          { text: 'Tổng quan 19 bước', link: '/workflow/overview' },
          { text: 'Phase A — Estimate', link: '/workflow/phase-a' },
          { text: 'Phase B — Implement', link: '/workflow/phase-b' },
          { text: 'Shortcuts', link: '/workflow/shortcuts' },
          { text: 'Bug Fix Workflow', link: '/workflow/bug-workflow' },
          { text: 'TDD — Test-Driven Development', link: '/workflow/tdd' },
          { text: 'Tester Flow', link: '/workflow/tester-flow' },
          { text: 'Handoff Protocol', link: '/workflow/handoff-protocol' },
        ],
      },
      {
        text: 'Skills',
        items: [
          { text: 'Danh mục Skills', link: '/skills/' },
          { text: 'Phân tích (Analysis)', link: '/skills/analysis' },
          { text: 'Thiết kế (Design)', link: '/skills/design' },
          { text: 'Phát triển (Development)', link: '/skills/development' },
          { text: 'Kiểm thử (Testing)', link: '/skills/testing' },
          { text: 'Review', link: '/skills/review' },
          { text: 'Tiện ích (Utilities)', link: '/skills/utilities' },
        ],
      },
    ],
    socialLinks: [],
    search: { provider: 'local' },

    footer: {
      message: 'AI Native Workflow — ecn Project',
      copyright: 'Copyright © 2026',
    },
    outline: { label: 'Trên trang này' },
    docFooter: { prev: 'Trang trước', next: 'Trang sau' },
    returnToTopLabel: 'Về đầu trang',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Giao diện',
  },
  markdown: { theme: { light: 'github-light', dark: 'github-dark' } },
})
