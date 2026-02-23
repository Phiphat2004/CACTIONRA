import React from 'react';
import { Header } from '../components/layout/Header.jsx';
import { Footer } from '../components/layout/Footer.jsx';

export const TermsOfService = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Điều khoản dịch vụ</h1>
          <p className="text-sm text-[#5A4633]/60">Cập nhật lần cuối: 13/02/2026</p>
        </div>

        <div className="space-y-10 text-[#5A4633]/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#5A4633] mb-3">1. Chấp nhận điều khoản</h2>
            <p>
              Khi truy cập và sử dụng website này, bạn đồng ý tuân thủ các điều khoản được nêu. Nếu không đồng ý,
              vui lòng ngừng sử dụng dịch vụ.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#5A4633] mb-3">2. Phạm vi sử dụng</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sử dụng nội dung cho mục đích tham khảo và tìm hiểu dự án.</li>
              <li>Không sao chép, chỉnh sửa hoặc phân phối nội dung khi chưa có sự cho phép.</li>
              <li>Không thực hiện hành vi gây ảnh hưởng đến tính ổn định hoặc an toàn của website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#5A4633] mb-3">3. Quyền sở hữu trí tuệ</h2>
            <p>
              Tất cả nội dung, hình ảnh và tài liệu thuộc quyền sở hữu của dự án Cactiora, trừ khi có ghi chú khác.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#5A4633] mb-3">4. Giới hạn trách nhiệm</h2>
            <p>
              Chúng tôi không chịu trách nhiệm đối với các thiệt hại phát sinh từ việc sử dụng hoặc không thể sử dụng
              website, ngoại trừ các trách nhiệm được quy định bởi pháp luật hiện hành.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#5A4633] mb-3">5. Thay đổi điều khoản</h2>
            <p>
              Điều khoản có thể được cập nhật theo thời gian. Chúng tôi sẽ thông báo trên website khi có thay đổi đáng kể.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#5A4633] mb-3">6. Liên hệ</h2>
            <p>
              Nếu có câu hỏi, vui lòng tham khảo thêm tại <a href="/privacy" className="text-[#3D7D4E] hover:underline">Chính sách bảo mật</a>
              hoặc liên hệ qua kênh hỗ trợ chính thức.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};
