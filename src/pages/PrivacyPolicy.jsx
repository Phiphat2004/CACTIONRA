import React from 'react';
import { Header } from '../components/layout/Header.jsx';
import { Footer } from '../components/layout/Footer.jsx';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F2] font-sans text-[#5A4633] selection:bg-[#3D7D4E] selection:text-white">
      {/* Background decoration elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20 -z-10">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#E8DCC3] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-[#3D7D4E]/10 rounded-full blur-[150px]" />
      </div>

      <Header />

      <main className="max-w-[960px] mx-auto px-6 py-16">
        <div className="flex flex-col gap-4 mb-10">
          <a href="/" className="text-sm text-[#3D7D4E] hover:underline">← Quay lại trang chủ</a>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Chính sách bảo mật</h1>
          <p className="text-sm text-[#5A4633]/60">Cập nhật lần cuối: 13/02/2026</p>
        </div>

        <div className="space-y-10 text-[#5A4633]/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#5A4633] mb-3">1. Thông tin chúng tôi thu thập</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Thông tin liên hệ mà bạn cung cấp (họ tên, email, số điện thoại).</li>
              <li>Dữ liệu phản hồi và trao đổi qua biểu mẫu hoặc kênh hỗ trợ.</li>
              <li>Thông tin kỹ thuật cơ bản (trình duyệt, loại thiết bị, nhật ký truy cập).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#5A4633] mb-3">2. Mục đích sử dụng</h2>
            <p>
              Chúng tôi sử dụng dữ liệu để liên hệ, cung cấp thông tin dự án, cải thiện trải nghiệm và
              đảm bảo vận hành ổn định của trang web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#5A4633] mb-3">3. Chia sẻ dữ liệu</h2>
            <p>
              Chúng tôi không bán hoặc cho thuê dữ liệu cá nhân. Dữ liệu chỉ được chia sẻ khi có yêu
              cầu pháp lý hoặc để vận hành dịch vụ (ví dụ: nhà cung cấp hạ tầng).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#5A4633] mb-3">4. Thời gian lưu trữ</h2>
            <p>
              Dữ liệu được lưu trữ trong khoảng thời gian cần thiết để đáp ứng mục đích đã nêu hoặc
              theo yêu cầu pháp luật.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#5A4633] mb-3">5. Quyền của bạn</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Yêu cầu truy cập, chỉnh sửa hoặc xoá dữ liệu cá nhân.</li>
              <li>Rút lại sự đồng ý xử lý dữ liệu (nếu áp dụng).</li>
              <li>Khiếu nại nếu cho rằng dữ liệu bị sử dụng sai mục đích.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#5A4633] mb-3">6. Liên hệ</h2>
            <p>
              Nếu có câu hỏi về chính sách này, vui lòng liên hệ qua email dự án hoặc kênh hỗ trợ
              chính thức.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};
