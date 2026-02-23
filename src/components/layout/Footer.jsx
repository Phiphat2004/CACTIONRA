import React from 'react';
import { Mascot } from '../shared/Mascot.jsx';

export const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-[#E8DCC3]">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Mascot className="w-8 h-8" />
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
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#5A4633] mb-6 uppercase tracking-wider text-xs">Theo dõi</h4>
            <div className="flex gap-4">
              {['Facebook'].map((social) => (
                <a key={social} href="https://www.facebook.com/profile.php?id=61587132959901" className="w-10 h-10 rounded-full border border-[#E8DCC3] flex items-center justify-center text-[#5A4633] hover:bg-[#3D7D4E] hover:text-white hover:border-[#3D7D4E] transition-all">
                  <span className="sr-only">{social}</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-[#E8DCC3]/50 text-sm text-[#5A4633]/40">
          <p>© 2026 Dự án Cactiora. Bảo lưu mọi quyền.</p>
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-[#3D7D4E]">Chính sách bảo mật</a>
            <a href="/terms" className="hover:text-[#3D7D4E]">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};




