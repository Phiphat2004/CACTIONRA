# Cấu trúc dự án Cactiora

## Giới thiệu dự án

**Cactiora** - Website giới thiệu về **da sinh học làm từ cây xương rồng** (Bio-based Cactus Leather)

- Sản phẩm: Da thuần chay, sinh học và bền vững
- Mục tiêu: Thay thế da động vật truyền thống bằng giải pháp xanh

## Cấu trúc thư mục đã tổ chức lại

```
src/
├── App.tsx                    # Component chính của ứng dụng
├── main.tsx                   # Entry point
├── index.css                  # CSS chính
├── Attributions.md            # Ghi nhận nguồn tài nguyên
│
├── components/
│   ├── layout/                # 🏗️ Các component bố cục
│   │   ├── Header.tsx         # Header/Navigation chính
│   │   └── Footer.tsx         # Footer trang
│   │
│   ├── sections/              # 📄 Các phần chính của trang
│   │   ├── Hero.tsx           # Phần hero/banner chính
│   │   ├── About.tsx          # Giới thiệu về dự án
│   │   ├── Benefits.tsx       # Lợi ích của sản phẩm
│   │   ├── Sustainability.tsx # Tính bền vững
│   │   ├── Process.tsx        # Quy trình sản xuất
│   │   ├── Gallery.tsx        # Thư viện ảnh sản phẩm
│   │   ├── TeamVision.tsx     # Tầm nhìn đội ngũ
│   │   ├── CTA.tsx            # Call-to-Action
│   │   └── CTASection.tsx     # Phần CTA mở rộng
│   │
│   ├── shared/                # 🔄 Components dùng chung
│   │   ├── Mascot.tsx         # Mascot/logo của dự án
│   │   ├── AboutProduct.tsx   # Thông tin chi tiết sản phẩm
│   │   ├── ManufacturingProcess.tsx # Quy trình sản xuất chi tiết
│   │   └── ProductGallery.tsx # Gallery sản phẩm chi tiết
│   │
│   ├── widgets/               # 🔧 Các widget tương tác
│   │   └── ChatWidget.tsx     # Widget chat hỗ trợ
│   │
│   ├── ui/                    # 🎨 UI components (shadcn/ui)
│   │   ├── button.tsx         # Button component
│   │   ├── card.tsx           # Card component
│   │   └── ... (các UI components khác)
│   │
│   └── figma/                 # 🎨 Components từ Figma design
│       └── ImageWithFallback.tsx
│
├── styles/                    # 💄 Stylesheets
│   └── globals.css            # CSS toàn cục
│
└── guidelines/                # 📋 Hướng dẫn phát triển
    └── Guidelines.md          # Guidelines cho dev team
```

## Ý nghĩa các thư mục:

### 🏗️ `layout/` - Bố cục trang

Components định hình cấu trúc chung của trang web (header, footer)

### 📄 `sections/` - Các phần nội dung

Các components đại diện cho từng phần nội dung chính của trang:

- **Hero**: Phần giới thiệu đầu trang với slogan chính
- **About**: Thông tin về dự án Cactiora
- **Benefits**: Lợi ích của da cây xương rồng
- **Sustainability**: Tính bền vững môi trường
- **Process**: Quy trình sản xuất
- **Gallery**: Thư viện hình ảnh
- **TeamVision**: Tầm nhìn và đội ngũ
- **CTA**: Kêu gọi hành động

### 🔄 `shared/` - Components dùng chung

Components có thể được sử dụng ở nhiều nơi khác nhau

### 🔧 `widgets/` - Tương tác

Các widget độc lập như chat support

### 🎨 `ui/` - UI Library

Các component UI cơ bản (buttons, cards, modals...) từ shadcn/ui

## Công nghệ sử dụng:

- **React 18** với TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## Màu sắc chủ đạo:

- **Nền**: `#F5F5F2` (Kem nhạt)
- **Text chính**: `#5A4633` (Nâu đất)
- **Accent**: `#3D7D4E` (Xanh lá tự nhiên)
- **Secondary**: `#E8DCC3` (Be ấm)
    