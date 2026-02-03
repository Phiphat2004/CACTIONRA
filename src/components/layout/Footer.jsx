import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-[#E8DCC3]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#3D7D4E] rounded-full">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C12 21 4 16.5 4 10C4 6.5 6.5 4 9 4C10.5 4 11.5 4.5 12 5.5C12.5 4.5 13.5 4 15 4C17.5 4 20 6.5 20 10C20 16.5 12 21 12 21Z" fill="#F5F5F2"/>
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-[#5A4633]">CACTORA</span>
            </div>
            <p className="text-[#5A4633]/60 leading-relaxed">
              Dẫn đầu cuộc cách mạng vật liệu sinh học từ sa mạc.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#5A4633] mb-6 uppercase tracking-wider text-xs">Dự án</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-[#5A4633]/70 hover:text-[#3D7D4E] transition-colors">Về chúng tôi</a></li>
              <li><a href="#process" className="text-[#5A4633]/70 hover:text-[#3D7D4E] transition-colors">Quy trình</a></li>
              <li><a href="#gallery" className="text-[#5A4633]/70 hover:text-[#3D7D4E] transition-colors">Ứng dụng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#5A4633] mb-6 uppercase tracking-wider text-xs">Vật liệu</h4>
            <ul className="space-y-4">
              <li><a href="#benefits" className="text-[#5A4633]/70 hover:text-[#3D7D4E] transition-colors">Lợi ích</a></li>
              <li><a href="#sustainability" className="text-[#5A4633]/70 hover:text-[#3D7D4E] transition-colors">Bền vững</a></li>
              <li><a href="#" className="text-[#5A4633]/70 hover:text-[#3D7D4E] transition-colors">Chứng nhận</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#5A4633] mb-6 uppercase tracking-wider text-xs">Theo dõi</h4>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full border border-[#E8DCC3] flex items-center justify-center text-[#5A4633] hover:bg-[#3D7D4E] hover:text-white hover:border-[#3D7D4E] transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 rounded-sm border border-current" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-[#E8DCC3]/50 text-sm text-[#5A4633]/40">
          <p>© 2026 Cactiora Project. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#3D7D4E]">Chính sách bảo mật</a>
            <a href="#" className="hover:text-[#3D7D4E]">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};




