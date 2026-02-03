# Quy tắc phát triển dự án Cactiora

## Cấu trúc thư mục

- `layout/`: Header, Footer và các component bố cục
- `sections/`: Các phần nội dung chính của trang (Hero, About, Benefits...)
- `shared/`: Components dùng chung (Mascot, ProductGallery...)
- `widgets/`: Các widget tương tác (ChatWidget...)
- `ui/`: UI components từ shadcn/ui

## Quy tắc chung

- Sử dụng TypeScript cho tất cả các file .tsx
- Tuân theo cấu trúc thư mục đã định sẵn
- Đặt tên component theo PascalCase
- Sử dụng Tailwind CSS cho styling
- Ưu tiên responsive design và accessibility

## Màu sắc thương hiệu

- Primary: `#3D7D4E` (Xanh tự nhiên)
- Background: `#F5F5F2` (Kem nhạt)
- Text: `#5A4633` (Nâu đất)
- Accent: `#E8DCC3` (Be ấm)

## Animation

- Sử dụng Framer Motion cho các hiệu ứng
- Ưu tiên smooth transitions và micro-interactions
- Giữ animations tinh tế, không quá rườm rà

**Add your own guidelines here**

# Design system guidelines

Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

- Use a base font-size of 14px
- Date formats should always be in the format “Jun 10”
- The bottom toolbar should only ever have a maximum of 4 items
- Never use the floating action button with the bottom toolbar
- Chips should always come in sets of 3 or more
- Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:

## Button

The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage

Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants

- Primary Button
  - Purpose : Used for the main action in a section or page
  - Visual Style : Bold, filled with the primary brand color
  - Usage : One primary button per section to guide users toward the most important action
- Secondary Button
  - Purpose : Used for alternative or supporting actions
  - Visual Style : Outlined with the primary color, transparent background
  - Usage : Can appear alongside a primary button for less important actions
- Tertiary Button
  - Purpose : Used for the least important actions
  - Visual Style : Text-only with no border, using primary color
  - Usage : For actions that should be available but not emphasized
    -->
